# Mapa de Economía

Grafo de prerrequisitos de conceptos económicos (micro, macro, finanzas, economía
política e historia, **historia económica argentina** y comportamiento), con lecciones
y seguimiento de progreso. Sitio estático: se sube tal cual, sin backend.

**En vivo:** https://jorgeraul78.github.io/mapa-economia/

---

## Anatomía de la herramienta

Cada pieza tiene un rol fijo. Las **nuevas ramas** (p. ej. Historia Económica Argentina)
deben respetar este contrato para quedar iguales al resto del mapa.

### 1. Nodo (`topics` en `economia-taxonomia.json`)

Un concepto del grafo. Campos obligatorios:

| campo | qué es | ejemplo |
|---|---|---|
| `id` | identificador estable en snake_case | `convertibilidad` |
| `title` | nombre legible en el grafo y el panel | Convertibilidad |
| `description` | 1–3 oraciones: qué es y por qué importa | … |
| `subject` | materia (define el color del nodo) | Historia Económica Argentina |
| `tier` | dificultad 1–5 (altura en el layout) | 4 o 5 en ramas históricas |
| `type` | conceptual / representacional / … | conceptual |
| `mastery` | criterio de dominio en 2ª persona (“Podés…”) | Podés explicar… |

### 2. Dependencia (`dependencies`)

Arista dirigida **prerrequisito → topic**. Sin ciclos (DAG).

| campo | qué es |
|---|---|
| `topic` | el nodo que se desbloquea |
| `prerequisite` | lo que hay que dominar antes |
| `type` | `hard` (imprescindible) o `soft` (recomendado) |
| `reason` | una línea: por qué esa arista existe |

En el panel se leen como **Necesitás antes** / **Te habilita**, con la razón visible.

### 3. Lección (`lessons.js` → `window.LESSONS[id]`)

Contenido didáctico del nodo. Mismo esquema para los 78:

| pieza | rol |
|---|---|
| `hook` | 1–2 frases que enganchan |
| `explanation` | 2–4 párrafos; `<b>términos clave</b>` la 1ª vez |
| `example` | caso concreto (`title` + `body`); en ramas argentinas, del PDF/historia local |
| `check[0]` | MCQ 4 opciones + `answer` (0–3) + `explain` |
| `check[1]` | abierta; `criterion` = **mastery del nodo** + `model` breve |
| `takeaway` | una frase memorable |

Reglas de tono: español rioplatense, nivel introductorio, intuición antes que fórmulas.
Prompt de generación: `PROMPT_LECCION.md`. Script: `generar_lecciones.py`.

### 4. Grafo interactivo (`index.html`)

- **Explorar:** clic en nodo → panel (descripción, mastery, aristas, lección).
- **Trazá tu ruta:** clic en destino → camino topológico de prerrequisitos.
- **Leyenda de materias:** filtra por `subject` (colores).
- **Progreso:** conceptos dominados en `localStorage` (hay que pasar el MCQ).
- **Datos:** `const DATA` se inyecta desde la taxonomía; las lecciones viven en `lessons.js`.

### 5. Materias (`SUBJECTS` en `index.html`)

Cada `subject` necesita color CSS (`--s-*`) y entrada en `SUBJECTS`.
La rama argentina usa **Historia Económica Argentina** (`--s-arg`).

---

## Cómo agregar una rama nueva (checklist)

1. **Fuente.** Definir el corpus (libro, papers). Para la rama Gerchunoff-Llach: el PDF *El ciclo de la ilusión y el desencanto*.
2. **Nodos.** 5–12 conceptos con ids estables; `description` y `mastery` al estilo del resto; `tier` coherente.
3. **DAG.** Solo aristas lógicas; hard/soft + reason de una línea; mezclar prereqs de macro/finanzas/política existentes + nodos de la rama; **sin ciclos**.
4. **Lecciones.** Una por nodo, formato exacto de `PROMPT_LECCION.md`; **contenido fiel a la fuente** (no inventar cifras ni tesis).
5. **Inyectar.** Actualizar `economia-taxonomia.json` → regenerar `const DATA` en `index.html` → merge en `lessons.js` → sumar subject/color si es materia nueva → actualizar contador del subtítulo.
6. **Validar.** Misma cantidad topics/lecciones; todo nodo con lección; Kahn/topo sin ciclos; MCQ con `answer` válido.

---

## Archivos

| archivo | qué es |
|---|---|
| `index.html` | app (grafo + panel + lección). Se despliega. |
| `lessons.js` | contenido de las lecciones (`window.LESSONS`). Se despliega. |
| `economia-taxonomia.json` | fuente de verdad de nodos y prerrequisitos (DAG) |
| `generar_lecciones.py` | genera lecciones faltantes con un LLM |
| `PROMPT_LECCION.md` | prompt del generador |
| PDF Gerchunoff-Llach | fuente de la rama Historia Económica Argentina |

Para el sitio solo hacen falta **`index.html`** y **`lessons.js`**.

## Actualizar el sitio

```bash
git add index.html lessons.js && git commit -m "actualizo" && git push
```

GitHub Pages redespliega solo.

## Rama Argentina (Gerchunoff-Llach)

**15 nodos** + 15 lecciones bajo **Historia Económica Argentina**, anclados a *El ciclo de la ilusión y el desencanto* (ed. 2018).

**Sub-rama 1 — estructura y gran ciclo 80/90/2001**

`modelo_agroexportador` → `isi` → `restriccion_externa` → `desarrollismo`  
`plan_austral` → `hiperinflacion_89` → `convertibilidad` → `crisis_2001`  
síntesis: `ciclo_ilusion_desencanto`

**Sub-rama 2 — peronismo, 70s, década perdida y kirchnerismo**

`peronismo_economico` → (enriquece) `restriccion_externa`  
`reforma_financiera_77` → `tablita` → `decada_perdida` → (soft) `plan_austral`  
`posconvertibilidad` → `kirchnerismo` → (soft) `ciclo_ilusion_desencanto`

---

## Esquema de una lección

```json
{
  "id": "elasticidad",
  "hook": "…",
  "explanation": ["párrafo", "…"],
  "example": { "title": "…", "body": "…" },
  "check": [
    { "type": "mcq",  "q": "…", "options": ["…"], "answer": 1, "explain": "…" },
    { "type": "open", "q": "…", "criterion": "<mastery del nodo>", "model": "…" }
  ],
  "takeaway": "…"
}
```
