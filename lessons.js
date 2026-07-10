// Generado por lessons_build.py — contenido de lecciones
window.LESSONS = {
  "escasez": {
    "id": "escasez",
    "hook": "Tenés $10.000 y una noche libre. Querés el libro nuevo y salir a comer, pero no alcanza para las dos. Elegir una es, inevitablemente, resignar la otra.",
    "explanation": [
      "La economía arranca de un hecho incómodo: los recursos son limitados y los deseos, no. Siempre hay menos plata, tiempo, energía y atención de los que harían falta para todo lo que querríamos. A eso se le llama <b>escasez</b>, y es la razón de que haya que elegir.",
      "Toda elección tiene un costo, pero no es el que pensás. El costo real de algo es el <b>costo de oportunidad</b>: la mejor alternativa que dejás de lado para conseguirlo. No es la plata que gastás, sino lo que esa plata (o ese tiempo) podría haber sido.",
      "Este cambio de lente es la mitad del oficio de pensar como economista. Cada vez que alguien dice “esto es gratis” o “no cuesta nada”, la pregunta correcta es: <i>¿a cambio de qué?</i>. Siempre hay un a-cambio-de."
    ],
    "example": {
      "title": "El costo de una noche de estudio",
      "body": "Supongamos que te quedás estudiando un sábado a la noche. En plata, el costo es casi cero: no gastás nada. Pero el costo de oportunidad es todo lo que resignás — la salida con amigos, la serie, el descanso. A escala país pasa igual: cada peso que el Estado pone en subsidios es un peso que no va a rutas, hospitales o baja de impuestos. El presupuesto no miente sobre la escasez."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Vas al cine en vez de trabajar unas horas freelance que te pagarían $8.000. La entrada sale $3.000. ¿Cuál es el costo de oportunidad de ir al cine?",
        "options": [
          "$3.000 (la entrada)",
          "$8.000 (lo que dejaste de ganar)",
          "$11.000 (entrada + ingreso resignado)",
          "Cero, porque era tu tiempo libre"
        ],
        "answer": 2,
        "explain": "El costo de oportunidad suma lo que gastás y lo que resignás: los $3.000 de la entrada más los $8.000 que no ganaste. Todo lo que la decisión te hace perder cuenta."
      },
      {
        "type": "open",
        "q": "¿Cuál es el verdadero costo de dedicar un año entero a un posgrado a tiempo completo? Contestá pensando en costo de oportunidad, no solo en la matrícula.",
        "criterion": "Podés expresar el costo real de una decisión como su mejor alternativa sacrificada, no como su precio monetario.",
        "model": "El costo real incluye la matrícula, pero sobre todo el salario y la experiencia que dejás de ganar durante ese año (el ingreso resignado), más el tiempo. Para alguien con un buen sueldo, ese costo de oportunidad puede superar largamente el arancel."
      }
    ],
    "takeaway": "El costo de algo es lo que resignás para tenerlo — no lo que pagás por él."
  },
  "trade_offs": {
    "id": "trade_offs",
    "hook": "Un país no puede tener a la vez más hospitales, más rutas y menos impuestos. Puede dibujarse el límite de lo posible — y ese dibujo dice mucho más de lo que parece.",
    "explanation": [
      "Ya sabés que la escasez obliga a elegir. Los <b>trade-offs</b> son la forma concreta de esa obligación: más de algo significa menos de otra cosa. La economía tiene un gráfico para hacerlo visible: la <b>frontera de posibilidades de producción</b> (FPP), que muestra todas las combinaciones máximas de dos bienes que una economía puede producir con sus recursos y tecnología.",
      "Los puntos sobre la frontera son eficientes: no se puede producir más de un bien sin resignar algo del otro. Los puntos <b>interiores</b>, en cambio, son ineficientes: ahí hay recursos ociosos o mal usados, y se podría tener más de ambos bienes a la vez, sin sacrificar nada. Los puntos exteriores son directamente inalcanzables con lo que hay.",
      "La frontera también cuenta una historia sobre el costo de oportunidad: moverse a lo largo de ella es pagar un bien con el otro. Y suele ser cóncava — cuanto más te especializás en un bien, más caro se vuelve producir una unidad extra, porque vas sacando recursos cada vez menos aptos de la otra actividad."
    ],
    "example": {
      "title": "Soja o litio, con los mismos camiones",
      "body": "Imaginá una economía simplificada que produce soja y litio. Con sus rutas, camiones e ingenieros al máximo, puede elegir combinaciones sobre su frontera: mucha soja y poco litio, o al revés. Si hay una recesión y la mitad de los camiones están parados, la economía está en un punto interior: podría producir más soja Y más litio sin resignar nada, solo poniendo a trabajar lo que está ocioso. Ese es el sentido preciso de 'ineficiente': hay almuerzos gratis tirados en el piso."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Una economía está produciendo en un punto interior de su frontera de posibilidades. ¿Qué implica eso?",
        "options": [
          "Que el costo de oportunidad de moverse es muy alto",
          "Que puede producir más de ambos bienes sin resignar ninguno",
          "Que necesita más tecnología para alcanzar la frontera",
          "Que eligió una combinación válida y eficiente de bienes"
        ],
        "answer": 1,
        "explain": "Un punto interior significa recursos ociosos o mal asignados: hay margen para tener más de los dos bienes a la vez. Por eso es ineficiente — en la frontera, en cambio, más de uno exige menos del otro."
      },
      {
        "type": "open",
        "q": "Un ministro dice: 'Estamos dentro de nuestra frontera de posibilidades, así que podemos aumentar la producción de alimentos sin tocar nada más'. ¿Tiene razón? Explicá qué significa estar dentro de la frontera y qué pasa cuando se llega a ella.",
        "criterion": "Sabés leer una frontera de posibilidades y explicar por qué los puntos interiores son ineficientes.",
        "model": "Tiene razón mientras estén adentro: un punto interior implica recursos ociosos, así que se puede producir más de un bien sin resignar otro. Pero una vez sobre la frontera se acaba el almuerzo gratis: cualquier aumento de alimentos exige sacrificar producción de otra cosa, porque todos los recursos ya están en uso eficiente."
      }
    ],
    "takeaway": "Sobre la frontera, todo tiene precio en términos del otro bien; adentro de la frontera, estás regalando producción."
  },
  "incentivos": {
    "id": "incentivos",
    "hook": "Ponéle precio a algo que antes era gratis y, casi mágicamente, la gente empieza a economizarlo. Los incentivos mueven conducta, siempre.",
    "explanation": [
      "Un <b>incentivo</b> es cualquier cosa que cambia los costos o beneficios de una acción y, con eso, la conducta. Casi todo el análisis económico empieza con la misma pregunta: <i>¿qué incentivos crea esto?</i>. Personas, empresas y gobiernos responden a incentivos aunque nadie se los explique.",
      "La trampa es que los incentivos también producen efectos que nadie buscó. Una regla bien intencionada puede empujar exactamente la conducta que quería evitar, porque la gente encuentra el atajo que la regla dejó abierto. Es la <b>ley de las consecuencias imprevistas</b>.",
      "Por eso, ante cualquier política —un impuesto, un subsidio, una multa, un premio— no alcanza con mirar la intención. Hay que preguntarse cómo va a reaccionar la gente cuando cambie el cálculo de costos y beneficios que enfrenta."
    ],
    "example": {
      "title": "El subsidio que termina en el precio",
      "body": "Un Estado subsidia las tasas de un crédito para que más gente pueda comprar su primera vivienda. La intención es buena. Pero si la oferta de casas no crece al mismo ritmo, el crédito más barato hace que todos puedan ofertar más por las mismas propiedades: los precios suben y buena parte del subsidio termina capturada por los vendedores, no por los compradores que se quería ayudar. El incentivo funcionó… solo que no como se esperaba."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Una ciudad quiere reducir la basura y cobra por cada bolsa que sacás. ¿Cuál es el efecto imprevisto más probable?",
        "options": [
          "La gente genera exactamente la misma basura",
          "Aparece basura tirada en descampados o en tachos ajenos",
          "Todos reciclan de forma perfecta al instante",
          "La recaudación baja a cero"
        ],
        "answer": 1,
        "explain": "Cobrar por bolsa incentiva reducir basura, pero también incentiva evitar el cobro: aparece descarte informal. El incentivo empuja la conducta buscada y una no buscada al mismo tiempo."
      },
      {
        "type": "open",
        "q": "Un supermercado le paga a los cajeros un bono por rapidez de atención. ¿Qué conducta no buscada podría aparecer?",
        "criterion": "Ante una política o regla, podés anticipar respuestas de comportamiento, incluidas las no intencionadas.",
        "model": "Los cajeros pueden apurar tanto que descuidan el trato, saltean controles, o cometen más errores de cobro. Optimizan lo que se mide (velocidad) a costa de lo que no se mide (precisión, amabilidad). Es el clásico “se obtiene lo que se premia”."
      }
    ],
    "takeaway": "La gente no hace lo que le pedís: hace lo que le conviene según los incentivos que le pusiste."
  },
  "pensamiento_marginal": {
    "id": "pensamiento_marginal",
    "hook": "¿Vale la pena esta porción de pizza? La pregunta no es si te gusta la pizza — es si te conviene UNA porción más. Casi todas las buenas decisiones se toman así: de a una.",
    "explanation": [
      "El <b>pensamiento marginal</b> consiste en decidir comparando lo que agrega la próxima unidad — el <b>beneficio marginal</b> — contra lo que cuesta esa próxima unidad — el <b>costo marginal</b>. No los totales, no los promedios: la unidad siguiente. Mientras el beneficio marginal supere al costo marginal, conviene seguir; cuando se igualan, ahí está el óptimo; si el costo marginal ya lo supera, te pasaste.",
      "Este lente resuelve confusiones clásicas. '¿Estudiar sirve?' es una mala pregunta; '¿me conviene una hora más de estudio hoy?' es la buena. Los totales dicen si una actividad vale la pena en absoluto; el margen dice cuánto hacer de ella. Y la mayoría de las decisiones reales no son de todo-o-nada, sino de cuánto más o cuánto menos.",
      "El error simétrico es decidir por promedios o por lo ya gastado. Que el costo promedio de tu gimnasio baje si vas más seguido no dice nada sobre si te conviene ir mañana; y lo que ya pagaste no debería pesar en la decisión — eso ya no se recupera hagas lo que hagas."
    ],
    "example": {
      "title": "El food truck y la hora extra",
      "body": "Un food truck factura $80.000 por día y gasta $60.000: buen negocio en total. El dueño evalúa quedarse abierto una hora más, de 23 a 24. Esa hora extra vendería unos $4.000, pero entre el empleado, la garrafa y la luz cuesta $6.000. En el margen, la hora pierde plata — aunque el negocio total gane. La decisión correcta no mira el promedio del día: mira solo lo que esa hora agrega y lo que esa hora cuesta. Cierra a las 23."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Una fábrica produce 100 sillas con ganancia total positiva. Producir la silla 101 le costaría $50.000 y la vendería a $42.000. ¿Qué le conviene?",
        "options": [
          "Depende de cuánto invirtió originalmente en la fábrica",
          "Producirla, porque la ganancia total sigue siendo positiva",
          "Producirla, porque el costo promedio por silla baja al producir más",
          "No producirla, porque su costo marginal supera su beneficio marginal"
        ],
        "answer": 3,
        "explain": "La decisión sobre la silla 101 depende solo de lo que esa silla agrega ($42.000) contra lo que esa silla cuesta ($50.000). Que el total sea positivo o que el promedio baje no cambia que la unidad extra pierde $8.000."
      },
      {
        "type": "open",
        "q": "Estás preparando un examen y ya estudiaste 6 horas. ¿Cómo decidirías, pensando en el margen, si estudiar una séptima hora? ¿Qué compararías?",
        "criterion": "Podés decidir un óptimo comparando beneficio marginal con costo marginal en vez de promedios o totales.",
        "model": "Compararía lo que agrega esa séptima hora (cuántos puntos extra de nota o comprensión, probablemente pocos si ya estudié mucho) contra lo que cuesta (cansancio, sueño, lo que dejo de hacer). Si el beneficio marginal ya es menor que el costo marginal, paro — sin importar que 'en total' estudiar haya valido la pena."
      }
    ],
    "takeaway": "No preguntes si algo vale la pena: preguntá si vale la pena uno más."
  },
  "modelos_supuestos": {
    "id": "modelos_supuestos",
    "hook": "Un mapa perfecto de la ciudad, en escala 1 a 1, sería tan grande como la ciudad — e igual de inútil. Los modelos económicos son mapas: sirven porque dejan cosas afuera.",
    "explanation": [
      "La economía razona con <b>modelos</b>: simplificaciones deliberadas de la realidad que aíslan lo esencial de un problema y descartan el resto. Un modelo de oferta y demanda ignora los colores de los negocios, el humor de los vendedores y mil detalles reales — a propósito. Sin esa poda, ningún razonamiento sería posible.",
      "El criterio para juzgar un modelo no es si sus <b>supuestos</b> son realistas, sino si son útiles para la pregunta que se está haciendo. Suponer que la gente es perfectamente racional es literalmente falso; pero para predecir qué pasa con las ventas de nafta si sube el precio, funciona bastante bien. El mismo supuesto puede ser fatal para otra pregunta — por ejemplo, para explicar por qué la gente no ahorra para su jubilación.",
      "Por eso la crítica 'este modelo es irrealista' es floja por sí sola. La crítica seria es: 'este modelo omite algo que es de primer orden para ESTA pregunta'. Todo modelo es falso en los detalles; los buenos son falsos en los detalles que no importan."
    ],
    "example": {
      "title": "El plano del subte no miente: simplifica",
      "body": "El plano del subte porteño dibuja las líneas rectas y las estaciones equidistantes, cuando en la realidad las vías serpentean y las distancias varían muchísimo. ¿Es un mal mapa? Para decidir dónde combinar de la línea B a la D, es perfecto. Para calcular cuánto tarda el viaje, es pésimo. El plano no se juzga por su fidelidad geográfica sino por la pregunta que responde. Un modelo económico es exactamente eso: un plano del subte de algún pedazo de la realidad."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Un modelo supone que todos los consumidores tienen la misma información sobre precios. ¿Cuándo es esto un problema grave?",
        "options": [
          "Nunca, porque los modelos no necesitan ser realistas",
          "Solo cuando el modelo usa matemática avanzada",
          "Siempre, porque el supuesto es empíricamente falso",
          "Cuando la pregunta que se estudia depende justamente de diferencias de información, como en seguros o autos usados"
        ],
        "answer": 3,
        "explain": "Un supuesto falso es aceptable si lo que omite no afecta la pregunta. Pero si la pregunta gira alrededor de la información desigual — seguros, autos usados —, suponer información pareja borra exactamente el fenómeno que se quiere entender."
      },
      {
        "type": "open",
        "q": "Alguien descarta un modelo económico diciendo: 'supone gente perfectamente racional, y la gente real no es así, ergo el modelo no sirve'. ¿Qué le contestarías?",
        "criterion": "Podés evaluar un modelo por la utilidad de sus supuestos frente a la pregunta, no por su realismo literal.",
        "model": "Que el realismo literal no es el criterio: todo modelo simplifica. La pregunta correcta es si la racionalidad perfecta distorsiona la respuesta al problema concreto que se estudia. Para predecir la reacción a un cambio de precios masivo puede andar bien; para explicar decisiones de ahorro o adicciones, ese supuesto omite lo esencial y ahí sí el modelo falla."
      }
    ],
    "takeaway": "Un modelo no se juzga por ser realista sino por ser útil: todos son falsos en los detalles, los buenos eligen bien qué detalle ignorar."
  },
  "positivo_normativo": {
    "id": "positivo_normativo",
    "hook": "'El salario mínimo genera desempleo' y 'el salario mínimo es injusto' suenan parecido, pero son animales distintos: una se puede verificar con datos, la otra no. Confundirlas arruina cualquier discusión.",
    "explanation": [
      "Una afirmación <b>positiva</b> describe cómo es (o sería) el mundo: 'la inflación de este mes fue 4%', 'si sube la tarifa, cae el consumo'. Puede ser verdadera o falsa, y en principio se contrasta con evidencia. Una afirmación <b>normativa</b> dice cómo debería ser: 'el Estado debería subsidiar el gas', 'esta distribución es injusta'. Involucra valores, y ningún dato alcanza por sí solo para zanjarla.",
      "La distinción importa porque los desacuerdos se resuelven de maneras distintas. Si discutimos algo positivo — cuánto desempleo genera un salario mínimo — la respuesta está en la evidencia, aunque sea difícil de medir. Si discutimos algo normativo — cuánto desempleo es tolerable a cambio de mejores salarios — estamos negociando valores, y presentar más datos no resuelve nada.",
      "El vicio más común del debate económico es el contrabando: disfrazar un juicio de valor de afirmación técnica. 'El gasto público es excesivo' suena a dato, pero 'excesivo' esconde un juicio sobre qué tamaño de Estado es deseable. El antídoto es preguntarse siempre: ¿esto se podría verificar con datos, al menos en principio? Si no, hay valores adentro — lo cual es legítimo, siempre que no se disfrace."
    ],
    "example": {
      "title": "Dos discusiones sobre retenciones",
      "body": "Discusión A: '¿las retenciones al agro reducen el área sembrada?'. Es positiva: con datos de campañas agrícolas, precios y alícuotas se puede estimar la respuesta, y dos personas con valores opuestos deberían converger ante la misma evidencia. Discusión B: '¿es justo que el agro financie al resto de la economía?'. Es normativa: depende de qué se considere justo, y no hay serie estadística que la cierre. Los debates televisivos suelen fracasar porque mezclan A y B en la misma frase — y entonces nadie puede tener razón."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Cuál de estas afirmaciones es positiva (no normativa)?",
        "options": [
          "Congelar tarifas eléctricas reduce la inversión en generación de energía",
          "El Estado tiene la obligación moral de garantizar vivienda",
          "Es inaceptable que la mitad de los trabajadores esté en la informalidad",
          "El impuesto a las ganancias debería tener una alícuota más progresiva"
        ],
        "answer": 0,
        "explain": "Que congelar tarifas reduzca la inversión es una afirmación sobre cómo funciona el mundo: puede contrastarse con datos y podría resultar falsa. Las otras tres contienen 'debería', 'inaceptable' u 'obligación moral' — juicios de valor que ningún dato puede verificar."
      },
      {
        "type": "open",
        "q": "Un economista dice en la tele: 'El déficit fiscal es claramente insostenible, los números lo demuestran'. ¿Qué parte de esa frase es positiva y qué parte podría ser un juicio de valor disfrazado de dato?",
        "criterion": "Podés clasificar una afirmación como positiva o normativa y detectar cuándo un juicio de valor se disfraza de dato.",
        "model": "La parte positiva es la trayectoria: con datos se puede proyectar si la deuda crece más rápido que la capacidad de pago. Pero 'insostenible' suele esconder juicios: qué ajuste es aceptable, qué riesgo es tolerable, quién debería pagar el costo. Presentarlo como algo que 'los números demuestran' disfraza esas valoraciones de conclusión técnica."
      }
    ],
    "takeaway": "Lo positivo se discute con datos; lo normativo, con valores — y el truco más viejo del debate es disfrazar lo segundo de lo primero."
  },
  "ceteris_paribus": {
    "id": "ceteris_paribus",
    "hook": "'Subió el precio de la carne y la gente compró más carne. ¿Entonces la ley de demanda es falsa?' No: es que ese verano también explotaron los sueldos. Algo más se movió.",
    "explanation": [
      "<b>Ceteris paribus</b> significa 'todo lo demás constante'. Es el recurso mental para aislar el efecto de una variable: cuando decimos 'si sube el precio, cae la cantidad demandada', estamos suponiendo que el ingreso, los gustos, los precios de los sustitutos y todo lo demás quedan quietos. Sin ese supuesto, no se puede hablar de causas en un sistema donde mil cosas se mueven a la vez.",
      "El supuesto es una herramienta de laboratorio, no una descripción del mundo. En la realidad nunca 'todo lo demás' queda constante: mientras un precio sube, también cambian ingresos, expectativas, clima y política. Por eso una predicción ceteris paribus puede no verse en los datos crudos sin estar equivocada — el efecto existe, pero otro efecto más grande lo tapó.",
      "Saber esto te da un detector de errores en ambas direcciones. Error uno: refutar una teoría con datos donde todo se movió a la vez ('subió el precio y se vendió más, la demanda no funciona'). Error dos: usar el ceteris paribus como escudo eterno para no confrontar nunca la teoría con la evidencia. El uso correcto es identificar qué más se movió y tratar de descontarlo."
    ],
    "example": {
      "title": "El dólar barato que 'no bajó' la inflación",
      "body": "Un gobierno atrasa el tipo de cambio esperando que eso frene los precios: ceteris paribus, importaciones más baratas presionan la inflación a la baja. Pero ese mismo año expande el gasto y emite para financiarlo. La inflación no baja. ¿Falló la teoría del ancla cambiaria? No necesariamente: el efecto existió, pero la emisión empujó los precios para arriba con más fuerza. El 'todo lo demás constante' se rompió — y sin separar los dos efectos, los datos crudos no confirman ni refutan nada."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Un diario titula: 'Subió el salario mínimo y el empleo aumentó: los economistas estaban equivocados'. ¿Cuál es la crítica más sólida a ese razonamiento?",
        "options": [
          "La predicción sobre salario mínimo es ceteris paribus, y ese año pudieron moverse otras cosas (crecimiento, demanda) que taparon el efecto",
          "El salario mínimo es una cuestión normativa, no positiva",
          "El empleo no se puede medir con precisión",
          "Los economistas nunca hacen predicciones sobre el empleo"
        ],
        "answer": 0,
        "explain": "La teoría predice el efecto del salario mínimo manteniendo lo demás constante. Si la economía creció con fuerza ese año, el empleo pudo subir a pesar del efecto negativo del salario mínimo, no gracias a su ausencia. Los datos crudos no aíslan la causa."
      },
      {
        "type": "open",
        "q": "'Bajaron la tasa de interés y sin embargo el crédito no creció.' ¿Alcanza esto para concluir que la tasa no influye sobre el crédito? Explicá usando la idea de ceteris paribus.",
        "criterion": "Sabés cuándo un argumento depende del supuesto ceteris paribus y qué pasa cuando ese supuesto se rompe.",
        "model": "No alcanza. La relación tasa-crédito es ceteris paribus: baja la tasa, sube el crédito si todo lo demás queda igual. Si al mismo tiempo hubo recesión, incertidumbre o bancos menos dispuestos a prestar, esos factores pudieron contraer el crédito más de lo que la tasa lo estimuló. Para concluir algo, habría que identificar qué más se movió y separar los efectos."
      }
    ],
    "takeaway": "Toda ley económica lleva un 'si nada más se mueve' escrito en letra chica — y en el mundo real, algo más siempre se mueve."
  },
  "intercambio_ganancias": {
    "id": "intercambio_ganancias",
    "hook": "Cuando comprás un café, decís 'gracias' — y el cajero también. Los dos agradecen porque los dos ganaron. Esa doble ganancia es el secreto mejor escondido a simple vista de la economía.",
    "explanation": [
      "Un <b>intercambio voluntario</b> ocurre solo si ambas partes esperan salir ganando: vos valorás el café más que los $2.000 que pagás, y el local valora tus $2.000 más que ese café. Nadie entrega algo por lo que valora menos a cambio. El intercambio no mueve valor de un bolsillo a otro: lo <b>crea</b>, porque cada cosa termina en manos de quien más la valora.",
      "Esto choca con la intuición de <b>suma cero</b> — la idea de que si uno gana, otro tiene que perder. Esa intuición es correcta para repartir una torta fija, pero el comercio no reparte una torta fija: la agranda. Por eso el vendedor no te está 'sacando' plata ni vos le estás 'sacando' mercadería; ambos terminan con algo que prefieren a lo que tenían.",
      "La condición clave es la voluntariedad. Si hay engaño, coerción o una de las partes no tiene alternativa real, la garantía de ganancia mutua se debilita. Y que ambos ganen no significa que ganen lo mismo: el reparto de la ganancia puede ser muy desparejo — pero desparejo no es lo mismo que suma cero."
    ],
    "example": {
      "title": "La feria americana y el placard lleno",
      "body": "Vendés en una feria una campera que no usás hace tres años por $30.000. Para vos era espacio muerto en el placard: la valorabas en casi nada. Quien la compra la estaba buscando y hubiera pagado hasta $45.000. No hubo perdedor: vos convertiste algo que valorabas en $5.000 en $30.000, y el comprador consiguió por $30.000 algo que valoraba en $45.000. Se crearon $40.000 de valor de la nada — sin producir un solo hilo nuevo. Solo moviendo la campera hacia quien más la valoraba."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Si en todo intercambio voluntario ambas partes ganan, ¿por qué a veces igual nos sentimos 'estafados' después de comprar algo caro?",
        "options": [
          "Porque la ganancia se evalúa con lo que esperabas al momento de comprar; con información nueva o expectativas equivocadas, podés arrepentirte sin que el intercambio haya sido suma cero",
          "Porque el dinero pierde valor con la inflación",
          "Porque en realidad el vendedor siempre gana más y eso es una pérdida",
          "Porque el intercambio fue involuntario"
        ],
        "answer": 0,
        "explain": "La ganancia mutua se define al momento del intercambio, con la información y expectativas de cada parte. Si después descubrís que el producto era peor de lo creído, el problema fue de información — no que el comercio sea suma cero. Con engaño deliberado, justamente, la garantía de ganancia mutua se rompe."
      },
      {
        "type": "open",
        "q": "Alguien te dice: 'los supermercados se enriquecen a costa de sus clientes: lo que ganan ellos lo perdemos nosotros'. ¿Qué está mal en ese razonamiento?",
        "criterion": "Podés explicar por qué un intercambio voluntario genera valor sin que nadie pierda.",
        "model": "Supone suma cero, y el intercambio voluntario no lo es. Cada cliente compra solo cuando valora la mercadería más que la plata que entrega, y el súper vende solo cuando valora la plata más que la mercadería. Ambos quedan mejor que antes; el comercio crea valor moviendo bienes hacia quien más los valora. El súper gana, sí — pero no A COSTA del cliente, sino JUNTO con él."
      }
    ],
    "takeaway": "El comercio voluntario no reparte la torta: la agranda, porque cada cosa termina en manos de quien más la valora."
  },
  "eficiencia_equidad": {
    "id": "eficiencia_equidad",
    "hook": "Dos personas pueden mirar el mismo impuesto y una gritar 'destruye empleo' mientras la otra grita 'reduce la pobreza'. Puede que ninguna esté mintiendo: están discutiendo cosas distintas sin saberlo.",
    "explanation": [
      "La <b>eficiencia</b> pregunta por el tamaño de la torta: ¿esta política hace que la economía produzca más valor total, o menos? La <b>equidad</b> pregunta por el reparto: ¿quién se queda con cada porción, y ese reparto es aceptable? Son dos varas distintas, y una política puede salir bien en una y mal en la otra.",
      "Muchas veces hay <b>trade-off</b> entre ambas: redistribuir suele requerir impuestos y transferencias que distorsionan incentivos — para trabajar, invertir, contratar — y eso puede achicar la torta que se quiere repartir. El famoso 'balde agujereado': al trasladar agua de un balde a otro, algo se derrama en el camino. La pregunta interesante casi nunca es si el balde pierde, sino cuánto pierde y cuánto nos importa el reparto.",
      "Separar los dos planos ordena cualquier debate. Cuánta torta se pierde por un impuesto es una cuestión de eficiencia — positiva, estimable con datos. Cuánta torta vale la pena perder a cambio de un reparto más parejo es una cuestión de equidad — normativa, de valores. La mayoría de las peleas económicas eternas son gente discutiendo el segundo plano con argumentos del primero, o al revés."
    ],
    "example": {
      "title": "La discusión por Ganancias, en dos planos",
      "body": "Cada vez que se debate el impuesto a las ganancias sobre los salarios altos, se mezclan dos discusiones. Plano eficiencia: ¿cuánto desalienta trabajar horas extra, buscar ascensos o quedarse en el país? Eso se puede estimar. Plano equidad: ¿es justo que quien gana diez veces más aporte proporcionalmente más? Eso es un juicio de valor. Alguien puede aceptar que el impuesto tiene costos de eficiencia y aún así defenderlo por equidad; otro puede admitir que mejora el reparto y rechazarlo por sus costos. Recién cuando cada uno dice en qué plano está parado, la discusión se vuelve honesta."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Un subsidio universal al transporte público beneficia por igual a pobres y ricos, y se financia con impuestos que distorsionan la economía. Un economista propone reemplazarlo por una tarjeta de descuento solo para hogares de bajos ingresos. ¿Qué está proponiendo, en términos de eficiencia y equidad?",
        "options": [
          "Sacrificar equidad para ganar eficiencia",
          "Mejorar la equidad a costa de la eficiencia",
          "Lograr un reparto parecido (o más enfocado) con menor costo de eficiencia",
          "Una medida puramente normativa sin efectos económicos"
        ],
        "answer": 2,
        "explain": "Focalizar el subsidio concentra la ayuda en quienes más la necesitan (equidad igual o mejor) y reduce el gasto total, con lo cual se necesitan menos impuestos distorsivos (menos pérdida de eficiencia). No siempre hay trade-off: a veces se puede mejorar en un plano sin empeorar el otro."
      },
      {
        "type": "open",
        "q": "En un debate sobre subir el salario mínimo, uno dice 'va a destruir empleo formal' y otro dice 'los trabajadores merecen un ingreso digno'. Separá qué parte del debate es de eficiencia y cuál de equidad, y explicá por qué no se están contestando entre sí.",
        "criterion": "Podés separar el argumento de eficiencia del de equidad en un debate de política pública.",
        "model": "'Destruye empleo formal' es un argumento de eficiencia: afirma que la medida achica la torta (menos puestos, más informalidad) y es verificable con datos. 'Merecen un ingreso digno' es de equidad: un juicio de valor sobre el reparto. No se contestan porque responden preguntas distintas: uno habla del costo de la medida, el otro de su objetivo. El debate serio empieza al juntarlos: ¿cuánto empleo estamos dispuestos a arriesgar por mejorar los salarios de quienes lo conservan?"
      }
    ],
    "takeaway": "Eficiencia es el tamaño de la torta, equidad es el reparto — y media discusión económica es gente confundiendo los dos planos."
  },
  "oferta_demanda": {
    "id": "oferta_demanda",
    "hook": "En pleno verano el tomate está regalado; en invierno, por las nubes. Nadie lo decide: lo decide el cruce de cuánto hay y cuánto se quiere.",
    "explanation": [
      "La <b>demanda</b> describe cuánto están dispuestos a comprar los consumidores a cada precio. Regla general: cuanto más caro, menos se compra — la curva de demanda tiene pendiente negativa. La <b>oferta</b> describe cuánto quieren vender los productores a cada precio, y va al revés: cuanto más alto el precio, más conviene producir.",
      "El <b>precio de equilibrio</b> es el único que hace coincidir lo que se quiere comprar con lo que se quiere vender. Por encima sobra mercadería (excedente) y el precio tiende a bajar; por debajo falta (faltante) y el precio tiende a subir. El mercado empuja siempre hacia ese punto.",
      "La potencia del modelo está en los <b>desplazamientos</b>: si cambia algo que afecta a compradores o vendedores, la curva se mueve y el equilibrio se reacomoda. Con solo saber qué curva se movió y en qué dirección, podés anticipar qué pasa con precio y cantidad."
    ],
    "example": {
      "title": "El tomate y las estaciones",
      "body": "En verano la cosecha inunda el mercado: la oferta se desplaza hacia la derecha (hay mucho más a cada precio). Con la demanda más o menos igual, el nuevo equilibrio queda en un precio bajo y una cantidad alta. En invierno, con menos producción, la oferta se corre a la izquierda y el precio trepa. No hubo ningún comité fijando el precio del tomate: lo movió el desplazamiento de una curva."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Sale un estudio que muestra que la palta hace muy bien a la salud y todos quieren comprar más. Manteniendo la oferta igual, ¿qué pasa en el equilibrio?",
        "options": [
          "Baja el precio y baja la cantidad",
          "Sube el precio y sube la cantidad",
          "Sube el precio y baja la cantidad",
          "No cambia nada"
        ],
        "answer": 1,
        "explain": "La demanda se desplaza a la derecha (más gente quiere palta a cada precio). Sobre una oferta con pendiente positiva, el nuevo equilibrio tiene precio más alto y cantidad más alta."
      },
      {
        "type": "open",
        "q": "Una sequía destruye media cosecha de trigo. Explicá qué curva se mueve, en qué dirección, y qué pasa con precio y cantidad de equilibrio.",
        "criterion": "Podés graficar oferta y demanda y explicar por qué cada curva tiene su pendiente.",
        "model": "Se mueve la oferta hacia la izquierda (hay menos trigo a cada precio). Con la demanda igual, el nuevo equilibrio tiene precio más alto y cantidad más baja."
      }
    ],
    "takeaway": "El precio no lo fija nadie: lo fija dónde se cruzan lo que se quiere comprar y lo que se quiere vender."
  },
  "equilibrio_mercado": {
    "id": "equilibrio_mercado",
    "hook": "Nadie decide cuántas empanadas se venden por noche en tu barrio, y sin embargo casi nunca sobran de más ni faltan de menos. Hay un mecanismo silencioso ajustando eso todos los días.",
    "explanation": [
      "El <b>precio de equilibrio</b> es el único al que la cantidad que los compradores quieren llevar coincide con la que los vendedores quieren vender. La gracia no está en el punto sino en el mecanismo que empuja hacia él: si el precio está por encima del equilibrio, sobra mercadería — un <b>excedente</b> — y los vendedores, con stock clavado, bajan precios; si está por debajo, falta — un <b>faltante</b> —, aparecen colas y los vendedores pueden subir sin perder clientes. El desequilibrio se corrige solo.",
      "Con esa base, el análisis de cualquier cambio sigue una receta de tres pasos: primero, ¿el shock afecta a compradores o a vendedores? (¿se mueve la demanda o la oferta?); segundo, ¿en qué dirección se desplaza la curva?; tercero, ¿dónde queda el nuevo cruce? Eso da la dirección del cambio en precio y cantidad — siempre ceteris paribus.",
      "Un error clásico es confundir movimientos <b>sobre</b> la curva con desplazamientos <b>de</b> la curva. Si sube el precio del bien porque se movió la oferta, la demanda no 'cayó': se recorrió hacia arriba sobre la misma curva. La demanda se desplaza solo cuando cambia algo distinto del precio propio — ingresos, gustos, precios de sustitutos."
    ],
    "example": {
      "title": "El alquiler en un barrio de moda",
      "body": "Un barrio se pone de moda: llegan restaurantes, oficinas, gente que quiere mudarse. La demanda de alquileres se desplaza a la derecha. Al precio viejo hay faltante puro: veinte interesados por cada departamento publicado en ZonaProp, que desaparece en horas. Ese faltante ES el mecanismo: los dueños descubren que pueden pedir más, y el precio sube hasta que la cantidad de gente dispuesta a pagar iguala a los departamentos disponibles. Nuevo equilibrio: alquileres más caros y más departamentos volcados al mercado."
    },
    "check": [
      {
        "type": "mcq",
        "q": "El gobierno duplica el impuesto interno a la cerveza y a la vez una ola de calor dispara las ganas de tomar cerveza. ¿Qué se puede predecir con seguridad sobre el nuevo equilibrio?",
        "options": [
          "La cantidad cae, pero el efecto sobre el precio es ambiguo",
          "El precio sube, pero el efecto sobre la cantidad es ambiguo",
          "Precio y cantidad quedan igual porque los efectos se cancelan",
          "El precio sube y la cantidad también"
        ],
        "answer": 1,
        "explain": "La oferta se corre a la izquierda (impuesto encarece vender) y la demanda a la derecha (calor). Ambos desplazamientos empujan el precio hacia arriba, así que el precio sube seguro. Pero sobre la cantidad tiran en direcciones opuestas: el resultado depende de cuál movimiento sea más fuerte."
      },
      {
        "type": "open",
        "q": "Se abarata fuertemente el flete marítimo y llegan notebooks importadas mucho más baratas de traer. Explicá qué curva se desplaza en el mercado local de notebooks, hacia dónde, y qué pasa con el precio y la cantidad de equilibrio.",
        "criterion": "Dado un desplazamiento de oferta o demanda, podés predecir la dirección del cambio en precio y cantidad.",
        "model": "Se desplaza la oferta hacia la derecha: a cada precio, conviene traer y vender más notebooks porque el costo bajó. La demanda no cambió. En el nuevo cruce, el precio de equilibrio baja y la cantidad de equilibrio sube: se venden más notebooks, más baratas."
      }
    ],
    "takeaway": "El faltante y el excedente no son fallas del mercado: son el mecanismo que lo empuja de vuelta al equilibrio."
  },
  "elasticidad": {
    "id": "elasticidad",
    "hook": "Si YPF sube la nafta 10%, ¿manejás mucho menos? Casi igual. Si una marca de gaseosa sube 10%, te pasás a otra sin pensarlo. Esa diferencia es la elasticidad.",
    "explanation": [
      "La <b>elasticidad</b> mide cuánto responde la cantidad ante un cambio de precio. Si un aumento chico de precio hace caer mucho la cantidad, la demanda es <b>elástica</b>; si la cantidad casi no se mueve, es <b>inelástica</b>. La clave está en los sustitutos: cuando hay reemplazos fáciles, la demanda es elástica; cuando no los hay, inelástica.",
      "Otros factores empujan en el mismo sentido: si el bien es una necesidad, si pesa mucho en tu presupuesto, y sobre todo el plazo — con el tiempo la gente encuentra alternativas, así que casi todo se vuelve más elástico a largo plazo.",
      "La consecuencia práctica es contraintuitiva y poderosa: cuando la demanda es inelástica, <b>subir el precio aumenta el ingreso total</b> (vendés casi lo mismo, a más plata); cuando es elástica, subir el precio lo reduce (perdés más ventas de las que ganás en precio). Por eso conviene saber en qué terreno estás parado antes de tocar un precio."
    ],
    "example": {
      "title": "Por qué gravan la nafta y los cigarrillos",
      "body": "Los gobiernos aman poner impuestos altos a combustibles, cigarrillos y alcohol. No es casualidad: son bienes de demanda inelástica. La gente sigue comprando casi lo mismo aunque suba el precio, así que la recaudación es alta y estable. Gravar algo elástico —una marca puntual, un bien de lujo prescindible— haría que las ventas se derrumben y la recaudación con ellas."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Un kiosco es el único abierto de madrugada en la zona y sube 15% el precio del agua. Las ventas casi no bajan. Respecto de ese precio, la demanda es…",
        "options": [
          "Elástica, y el ingreso del kiosco baja",
          "Inelástica, y el ingreso del kiosco sube",
          "Elástica, y el ingreso sube",
          "Inelástica, y el ingreso baja"
        ],
        "answer": 1,
        "explain": "Sin sustitutos cercanos (nadie más abierto), la cantidad casi no responde: demanda inelástica. Como vende casi lo mismo a mayor precio, el ingreso total sube."
      },
      {
        "type": "open",
        "q": "Una aerolínea sube 20% los pasajes de una ruta turística que tiene competencia de otras aerolíneas y de rutas alternativas. ¿Qué esperarías que pase con la cantidad vendida y con el ingreso, y por qué?",
        "criterion": "Podés predecir el efecto de un cambio de precio sobre el ingreso total según la elasticidad de la demanda.",
        "model": "Con competencia y alternativas (otras aerolíneas, otros destinos, no viajar), la demanda es elástica: la cantidad vendida cae bastante. Como se pierden más pasajeros de lo que se gana por pasaje, el ingreso total probablemente baje."
      }
    ],
    "takeaway": "Si hay sustitutos, la demanda es elástica y subir el precio te sale caro; si no los hay, es inelástica y te conviene."
  },
  "excedente": {
    "id": "excedente",
    "hook": "Hubieras pagado hasta $15.000 por esa entrada y la conseguiste a $8.000. Esos $7.000 que 'te ahorraste' no son una ilusión: son la ganancia medible de haber comprado.",
    "explanation": [
      "El <b>excedente del consumidor</b> es la diferencia entre lo máximo que estabas dispuesto a pagar y lo que efectivamente pagaste. El <b>excedente del productor</b> es el espejo: lo que el vendedor cobró menos el mínimo que hubiera aceptado (su costo). Sumados, miden cuánto valor crea un mercado — es la forma estándar de ponerle número al bienestar.",
      "En el gráfico de oferta y demanda, los dos excedentes son áreas. El del consumidor es el triángulo entre la curva de demanda y el precio: cada punto de la demanda es alguien dispuesto a pagar más que el precio, y esa brecha es su ganancia. El del productor es el área entre el precio y la curva de oferta: cada punto de la oferta es un vendedor cuyo costo está por debajo de lo que cobra.",
      "Lo potente es ver cómo se mueven esas áreas cuando cambia el precio. Si el precio sube, el excedente del consumidor se achica (pagás más y algunos dejan de comprar) y el del productor se agranda — parte del área cambia de manos. Este mapa de quién gana y quién pierde es la herramienta con la que después se evalúan impuestos, controles y monopolios."
    ],
    "example": {
      "title": "La entrada al recital, asiento por asiento",
      "body": "Para un recital hay fans dispuestos a pagar $50.000, otros $30.000, otros apenas $10.000. La entrada sale $20.000 para todos. El fanático de los $50.000 se lleva $30.000 de excedente; el de $30.000, $10.000; el de $10.000 no compra. Del otro lado, si organizar el show cuesta el equivalente a $12.000 por entrada, la productora gana $8.000 por cada una. Sumá todas esas brechas y tenés el valor total que ese recital creó — el que hubiera desaparecido si el show no ocurría."
    },
    "check": [
      {
        "type": "mcq",
        "q": "En un mercado en equilibrio, el precio sube por un desplazamiento de la demanda. ¿Qué pasa con el excedente del productor?",
        "options": [
          "Queda igual, porque la curva de oferta no se movió",
          "Cae, porque producir se vuelve más caro",
          "Aumenta: cobra más por cada unidad y además vende más unidades",
          "Se transfiere íntegro a los consumidores"
        ],
        "answer": 2,
        "explain": "Con demanda más alta, el nuevo equilibrio tiene mayor precio y mayor cantidad sobre la misma curva de oferta. El área entre el precio y la oferta se agranda por los dos lados: más margen por unidad y más unidades vendidas."
      },
      {
        "type": "open",
        "q": "Imaginate el gráfico de oferta y demanda del mercado de yerba con su equilibrio. Señalá (describiéndolo) dónde está cada excedente, y explicá qué pasa con el excedente del consumidor si una helada en los yerbatales sube el precio.",
        "criterion": "Sabés identificar en un gráfico las áreas de excedente y cómo cambian al mover el precio.",
        "model": "El excedente del consumidor es el área entre la curva de demanda y la línea del precio (arriba del precio, debajo de la demanda); el del productor, el área entre el precio y la curva de oferta. Si la helada corre la oferta a la izquierda y el precio sube, el excedente del consumidor se achica por dos vías: los que siguen comprando pagan más caro, y algunos compradores quedan afuera del mercado directamente."
      }
    ],
    "takeaway": "El excedente es la brecha entre lo que algo vale para vos y lo que pagaste — y sumar esas brechas es medir cuánto bienestar crea un mercado."
  },
  "utilidad": {
    "id": "utilidad",
    "hook": "La primera empanada de la noche es gloria. La cuarta, está bien. La octava es un esfuerzo. Nada cambió en las empanadas — cambió algo en vos, y ese algo explica media microeconomía.",
    "explanation": [
      "Los economistas llaman <b>utilidad</b> a la satisfacción que da consumir algo. No hace falta medirla con precisión; alcanza con una regularidad casi universal: la <b>utilidad marginal decreciente</b>. Cada unidad adicional de un bien agrega menos satisfacción que la anterior. La primera empanada calma el hambre; la octava, casi nada.",
      "Esto es pensamiento marginal aplicado al consumo, y tiene una consecuencia directa sobre cuánto estás dispuesto a pagar. Si la quinta unidad te da menos satisfacción que la cuarta, es lógico que estés dispuesto a pagar menos por ella. Tu disposición a pagar cae con cada unidad extra.",
      "Y ahí aparece el vínculo con la demanda: la curva de demanda tiene pendiente negativa <b>porque</b> la utilidad marginal decrece. A un precio alto, solo comprás las unidades cuya utilidad marginal lo justifica — pocas. Si el precio baja, se vuelven rentables (en satisfacción) unidades adicionales que antes no lo eran, y comprás más. La forma de la demanda es la sombra de cómo se apaga tu satisfacción."
    ],
    "example": {
      "title": "Por qué el agua es barata y los diamantes caros",
      "body": "Nada es más útil que el agua y casi nada más inútil que un diamante; sin embargo el agua es regalada y el diamante carísimo. La paradoja se disuelve con utilidad marginal: no pagás por la utilidad TOTAL del agua (que es enorme) sino por la de la próxima unidad. Como agua hay muchísima, tu próximo litro casi no agrega nada — vale poco. Diamantes hay poquísimos: la próxima unidad que alguien consigue agrega mucho. El precio se conecta con el margen, no con el total."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Un buffet libre cobra entrada fija y después la comida es 'gratis'. ¿Hasta qué punto le conviene comer a un cliente que razona en el margen?",
        "options": [
          "Hasta recuperar en comida el valor de la entrada",
          "Hasta que la utilidad marginal de un plato más caiga a cero (o se vuelva negativa)",
          "Hasta que la utilidad total se iguale con el precio de la entrada",
          "Hasta agotar la comida disponible, porque ya pagó la entrada"
        ],
        "answer": 1,
        "explain": "La entrada ya está pagada — es irrecuperable y no debería influir. El costo marginal de un plato más es casi cero, así que conviene comer mientras la utilidad marginal sea positiva, y frenar cuando el plato siguiente ya no agrega nada (o hace mal). La utilidad total y la entrada son irrelevantes para esa decisión."
      },
      {
        "type": "open",
        "q": "Usando la utilidad marginal decreciente, explicá por qué la curva de demanda individual de gaseosas tiene pendiente negativa: ¿por qué comprás más latas solo si el precio baja?",
        "criterion": "Podés vincular la utilidad marginal decreciente con la forma de la curva de demanda.",
        "model": "Cada lata adicional me da menos satisfacción que la anterior, así que estoy dispuesto a pagar menos por la segunda que por la primera, y menos por la tercera que por la segunda. A un precio dado, compro todas las latas cuya utilidad marginal justifica ese precio. Si el precio baja, unidades que antes 'no valían la pena' pasan a valerla y compro más. Esa relación inversa entre precio y cantidad es exactamente la pendiente negativa de la demanda."
      }
    ],
    "takeaway": "Cada unidad extra satisface menos que la anterior — y por eso solo comprás más cuando el precio baja."
  },
  "restriccion_presupuestaria": {
    "id": "restriccion_presupuestaria",
    "hook": "Tu sueldo no te dice qué comprar. Pero traza una línea exacta entre todas las canastas que podés pagar y todas las que no — y toda tu vida de consumidor pasa de un solo lado de esa línea.",
    "explanation": [
      "La <b>restricción presupuestaria</b> es el conjunto de combinaciones de bienes que podés comprar con tu ingreso, a los precios vigentes. Con dos bienes se dibuja como una recta: si gastás todo en uno, comprás el máximo de ese; si gastás todo en el otro, el máximo del otro; y entre ambos extremos, todas las mezclas intermedias. Es la escasez aterrizada al nivel de una persona: tu frontera personal de lo posible.",
      "La <b>pendiente</b> de esa recta es el precio relativo: cuántas unidades de un bien resignás por una unidad más del otro. No es un tecnicismo — es el costo de oportunidad hecho gráfico. Si el cine sale $8.000 y la pizza $4.000, cada ida al cine 'cuesta' dos pizzas, gane lo que gane tu billetera.",
      "Lo útil es ver cómo se mueve. Si sube tu ingreso, la recta se desplaza en paralelo hacia afuera: podés más de todo, pero los precios relativos no cambiaron. Si cambia un precio, la recta <b>rota</b>: el extremo del bien encarecido se acerca y la pendiente cambia. Distinguir desplazamiento de rotación es distinguir 'me volví más rico' de 'me cambiaron los precios relativos' — dos cosas que se sienten parecidas y son muy distintas."
    ],
    "example": {
      "title": "El sueldo, el súper y la inflación desigual",
      "body": "Cobrás $1.000.000 y lo repartís entre comida y todo-lo-demás. Un año después tu sueldo sube 50%... pero la comida subió 80% y el resto 30%. ¿Estás mejor o peor? Tu restricción no se desplazó en paralelo: rotó. Podés comprar más 'resto' que antes, pero menos comida. La pendiente cambió — la comida se encareció en términos relativos — y tu canasta óptima ya no puede ser la misma. Por eso en inflación alta no alcanza con comparar sueldo contra IPC promedio: importa QUÉ subió, porque cada precio relativo redibuja tu frontera."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Tu ingreso se duplica y, al mismo tiempo, todos los precios se duplican exactamente. ¿Qué pasa con tu restricción presupuestaria?",
        "options": [
          "Rota: cambian los precios relativos",
          "Se desplaza hacia adentro por el efecto de la inflación",
          "Queda exactamente igual: podés comprar las mismas canastas que antes",
          "Se desplaza hacia afuera: podés comprar más de todo"
        ],
        "answer": 2,
        "explain": "La restricción depende del ingreso real y de los precios relativos. Si todo se multiplica por dos — ingreso y precios —, cada canasta que podías pagar antes la podés pagar ahora, ni una más ni una menos. Los números nominales cambiaron; tu frontera de lo posible, no."
      },
      {
        "type": "open",
        "q": "Con tu presupuesto mensual comprás nafta y salidas. El gobierno libera el precio de la nafta y esta sube 40%, mientras tu ingreso y el precio de las salidas quedan igual. Describí qué le pasa a tu restricción presupuestaria (qué extremos se mueven, qué pasa con la pendiente).",
        "criterion": "Podés dibujar una restricción presupuestaria y ver cómo la mueven cambios de ingreso o de precios.",
        "model": "La recta rota hacia adentro sobre el eje de la nafta: si gastara todo en nafta, ahora compro 40% menos que antes, así que ese extremo se acerca al origen. El extremo de salidas no se mueve (ese precio no cambió). La pendiente cambia: cada salida ahora cuesta menos litros de nafta — la nafta se encareció en términos relativos y mi conjunto de canastas posibles se achicó, salvo que no consumiera nada de nafta."
      }
    ],
    "takeaway": "Tu presupuesto es una línea: el ingreso decide dónde está y los precios relativos deciden su inclinación — y toda elección vive de un solo lado."
  },
  "teoria_consumidor": {
    "id": "teoria_consumidor",
    "hook": "Entre todas las canastas que tu sueldo permite, elegís una. La teoría del consumidor es la anatomía de esa elección — y su respuesta cabe en una imagen: una curva que apenas toca una recta.",
    "explanation": [
      "La <b>teoría del consumidor</b> junta las dos piezas que ya conocés: los gustos (utilidad) y el bolsillo (restricción presupuestaria). Los gustos se dibujan con <b>curvas de indiferencia</b>: cada curva une todas las canastas que te dan la misma satisfacción. Curvas más alejadas del origen son niveles de satisfacción más altos, y su pendiente en cada punto dice cuánto de un bien aceptarías resignar por más del otro sin sentirte ni mejor ni peor.",
      "El problema del consumidor es alcanzar la curva de indiferencia más alta posible sin salirse del presupuesto. La solución gráfica es la <b>tangencia</b>: la canasta óptima está donde una curva de indiferencia apenas roza la recta presupuestaria. En ese punto, la tasa a la que VOS estás dispuesto a cambiar un bien por otro se iguala con la tasa a la que el MERCADO te permite cambiarlos (el precio relativo).",
      "¿Por qué tangencia y no cruce? Si la curva corta a la recta, tu valoración relativa difiere del precio relativo, y eso deja plata sobre la mesa: reacomodando la canasta —comprando más de lo que subvalorás según el mercado— alcanzás una curva más alta con el mismo gasto. Solo en la tangencia no queda reacomodo que te mejore. De ahí sale, además, la demanda individual: moviendo el precio de un bien y viendo cómo cambia el óptimo, se traza cuánto comprás a cada precio."
    ],
    "example": {
      "title": "Streaming o salidas: el reacomodo silencioso",
      "body": "Repartís tu presupuesto de ocio entre plataformas de streaming y salidas. En tu combinación actual, una salida extra te importa tanto como tres meses de una plataforma — pero al precio de mercado, una salida cuesta lo mismo que UN mes. Tu valoración relativa no coincide con el precio relativo: no estás en la tangencia. Te conviene dar de baja plataformas y salir más, hasta que la salida marginal ya no te parezca tan valiosa (utilidad marginal decreciente) y la equivalencia subjetiva se acerque a la del mercado. Eso que hacés intuitivamente cada tanto — 'esto ya no lo uso, lo doy de baja' — es la tangencia buscándose."
    },
    "check": [
      {
        "type": "mcq",
        "q": "En su canasta actual, Sofía estaría dispuesta a cambiar 2 kg de café por 1 kg de yerba quedando igual de satisfecha. En el mercado, el kilo de yerba cuesta lo mismo que 1 kg de café. ¿Está en su óptimo?",
        "options": [
          "Sí, porque está gastando todo su presupuesto",
          "No: le conviene comprar más café, porque el café le rinde más",
          "No: valora la yerba más de lo que el mercado se la cobra, le conviene comprar más yerba y menos café",
          "No se puede saber sin conocer su ingreso exacto"
        ],
        "answer": 2,
        "explain": "Sofía sacrificaría 2 de café por 1 de yerba, pero el mercado solo le pide 1 de café por esa yerba: la yerba le sale 'barata' respecto de su valoración. Reasignando hacia la yerba alcanza una curva de indiferencia más alta con el mismo gasto. El óptimo es donde su tasa subjetiva de cambio iguala al precio relativo — la tangencia."
      },
      {
        "type": "open",
        "q": "Explicá con tus palabras por qué la canasta óptima del consumidor está donde la curva de indiferencia es tangente a la restricción presupuestaria, y no donde la cruza.",
        "criterion": "Podés explicar la elección óptima como la tangencia entre curva de indiferencia y restricción presupuestaria.",
        "model": "Sobre la restricción, el consumidor busca la curva de indiferencia más alta alcanzable. Si una curva CRUZA la recta presupuestaria, en ese punto su disposición a intercambiar bienes difiere del precio relativo: moviéndose a lo largo de la recta puede alcanzar una curva más alta — todavía hay una mejora gratis. Solo cuando la curva apenas toca la recta (tangencia) las dos tasas coinciden y no existe reacomodo dentro del presupuesto que lo deje mejor: esa es la canasta óptima."
      }
    ],
    "takeaway": "Elegís bien cuando lo que un bien vale para vos coincide con lo que el mercado te cobra por él: ahí la curva toca la recta."
  },
  "produccion_costos": {
    "id": "produccion_costos",
    "hook": "Una pizzería que pierde plata todos los meses puede hacer bien en seguir abierta, y una que gana puede hacer mal en producir más. La clave está en saber qué costo mirar para cada decisión.",
    "explanation": [
      "Una empresa transforma insumos en producto, y sus costos no son todos iguales. Los <b>costos fijos</b> no dependen de cuánto produzca: el alquiler del local se paga igual con el horno prendido o apagado. Los <b>costos variables</b> sí se mueven con la producción: harina, muzzarella, horas de empleados. El <b>costo medio</b> es el total dividido por las unidades — cuánto 'cuesta' cada pizza en promedio.",
      "Pero la estrella es el <b>costo marginal</b>: lo que cuesta producir exactamente una unidad más. Es el que manda en la decisión de cuánto producir, por pura lógica marginal: si la próxima pizza se vende a más de lo que cuesta hacerla, conviene hacerla — sin importar el promedio ni el alquiler. Los costos fijos, ya comprometidos, no cambian con esa decisión, así que no deben pesar en ella.",
      "Cada tipo de costo responde una pregunta distinta. ¿Cuánto producir hoy? Costo marginal. ¿Me conviene abrir mañana? Comparar ingresos contra costos variables — el alquiler se paga igual. ¿Me conviene seguir en este negocio a largo plazo, cuando hasta el alquiler es renegociable? Ahí sí, el precio tiene que cubrir el costo medio total. Confundir estas preguntas es la fuente de decisiones ruinosas — y de cierres innecesarios."
    ],
    "example": {
      "title": "El restaurante que abre un feriado 'a pérdida'",
      "body": "Un restaurante paga $2.000.000 de alquiler mensual. Un feriado flojo estima vender $400.000, con costos de insumos y personal de $300.000 por ese día. Si prorratea el alquiler, el día 'da pérdida'. Pero el alquiler se paga abra o no abra: es fijo. La decisión correcta compara solo lo que el día agrega: $400.000 de ingresos contra $300.000 de costos variables. Abrir deja $100.000 más que no abrir. El restaurante puede estar perdiendo plata en total — y aún así, abrir ese feriado es la decisión correcta."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Una fábrica tiene costo medio de $10.000 por unidad y costo marginal de $6.000. Le ofrecen un pedido extra a $8.000 por unidad, sin afectar sus otras ventas. ¿Le conviene?",
        "options": [
          "Sí, porque cada unidad extra le deja $2.000 sobre su costo marginal",
          "No, porque $8.000 está por debajo de su costo medio",
          "Solo si el pedido cubre también parte de los costos fijos",
          "No, porque vender bajo el costo medio destruye la marca"
        ],
        "answer": 0,
        "explain": "Para un pedido adicional, el costo relevante es el marginal: producir cada unidad extra cuesta $6.000 y se cobra $8.000. Los costos fijos que inflan el promedio a $10.000 se pagan igual con o sin el pedido, así que no cambian la decisión. El pedido suma $2.000 por unidad."
      },
      {
        "type": "open",
        "q": "Un kiosco evalúa quedarse abierto hasta la medianoche. ¿Qué costos debería mirar para esa decisión y cuáles debería ignorar? Nombrá un costo fijo, uno variable y explicá por qué el marginal es el que decide.",
        "criterion": "Podés distinguir costos fijos, variables y marginales y explicar por qué la decisión de producir depende del marginal.",
        "model": "Debe ignorar los fijos: el alquiler del local se paga igual cierre a las 22 o a las 24. Debe mirar los variables de esas horas extra: la luz, y el sueldo de quien atiende. El costo marginal de la hora extra es lo que esa hora agrega de costo; si las ventas adicionales de esa hora lo superan, conviene quedarse abierto. La decisión se toma en el margen: qué agrega la hora contra qué cuesta la hora, no el promedio del día ni los costos ya comprometidos."
      }
    ],
    "takeaway": "El costo fijo ya está gastado y el promedio confunde: la decisión de producir una unidad más se toma mirando solo el costo marginal."
  },
  "rendimientos": {
    "id": "rendimientos",
    "hook": "Sumá un mozo a un bar chico y todo mejora; sumá el décimo y se chocan entre las mesas. Pero abrí diez sucursales y el costo por café baja. Las dos cosas pasan a la vez — y no se contradicen.",
    "explanation": [
      "Los <b>rendimientos decrecientes</b> aparecen cuando agregás más y más de UN insumo manteniendo el resto fijo: cada trabajador extra en la misma cocina agrega menos producto que el anterior, porque el espacio, los hornos y las hornallas no crecen con él. No es que los nuevos trabajadores sean peores — es que tocan a menos capital cada uno. Consecuencia directa: con la planta fija, el costo marginal termina subiendo a medida que producís más.",
      "Las <b>economías de escala</b> son otra cosa: qué pasa con el costo unitario cuando escalás TODO — planta, máquinas, personal — al mismo tiempo. Muchas veces duplicar toda la operación menos que duplica los costos: los costos fijos (el desarrollo de un software, la marca, la administración) se reparten entre más unidades, se puede usar maquinaria más especializada, se compra insumo al por mayor. El costo medio baja con el tamaño.",
      "La clave para no mezclarlas es el plazo y qué se mantiene fijo. Rendimientos decrecientes: corto plazo, un insumo crece y el resto no — el costo marginal sube. Economías de escala: largo plazo, crece toda la operación — el costo medio baja. Una empresa puede sufrir rendimientos decrecientes en su planta actual y a la vez tener enormes economías de escala si construye una planta más grande. Y ojo: la escala también se agota — coordinar un gigante tiene sus propios costos, las <b>deseconomías de escala</b>."
    ],
    "example": {
      "title": "La cocina fija y la cadena que crece",
      "body": "Una hamburguesería tiene una plancha y suma empleados: el primero hace 20 hamburguesas por hora, el segundo permite llegar a 35, el tercero a 42... el quinto casi no agrega nada porque se turnan para usar la misma plancha. Rendimientos decrecientes: la plancha es fija. Ahora mirá la cadena que pasa de 1 local a 50: la publicidad, la app de pedidos y la central de compras cuestan casi lo mismo para 1 que para 50 locales, y la carne al por mayor sale más barata. El costo por hamburguesa de la cadena baja con el tamaño: economías de escala. Misma empresa, dos fenómenos distintos."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Una software factory nota que su producto le costó carísimo desarrollar, pero venderle una licencia a un cliente más le cuesta casi cero. ¿Qué describe mejor su estructura de costos?",
        "options": [
          "Deseconomías de escala por los costos de coordinación",
          "Costos variables altos y fijos bajos",
          "Fuertes economías de escala: el costo fijo enorme se diluye entre más clientes y el costo medio se desploma con el tamaño",
          "Rendimientos decrecientes: cada cliente adicional aporta menos"
        ],
        "answer": 2,
        "explain": "El desarrollo es un costo fijo gigante y el costo marginal por cliente es casi nulo: cuantos más clientes, más se reparte el fijo y menor es el costo medio. Es el caso extremo de economías de escala — típico del software — y explica por qué en esos mercados el tamaño es una ventaja tan brutal."
      },
      {
        "type": "open",
        "q": "Un campo duplica la cantidad de fertilizante por hectárea y la cosecha mejora, pero mucho menos que la primera vez que fertilizó. A la vez, la empresa agropecuaria descubre que administrar 10 campos le sale proporcionalmente más barato que administrar 1. Explicá qué fenómeno es cada cosa y por qué no se contradicen.",
        "criterion": "Podés diferenciar rendimientos decrecientes de economías de escala y sus efectos sobre los costos.",
        "model": "Lo primero es rendimientos decrecientes: se agrega más de UN insumo (fertilizante) sobre una tierra fija, y cada dosis extra aporta menos producto — el margen se apaga. Lo segundo es economías de escala: al crecer TODA la operación (10 campos), los costos fijos de administración, maquinaria y compras se reparten entre más hectáreas y el costo unitario baja. No se contradicen porque hablan de cosas distintas: uno describe saturar un factor con el resto fijo (corto plazo), el otro describe escalar la operación completa (largo plazo)."
      }
    ],
    "takeaway": "Saturar un insumo con el resto fijo rinde cada vez menos; escalar toda la operación suele costar cada vez menos por unidad — no es contradicción, es plazo."
  },
  "competencia_perfecta": {
    "id": "competencia_perfecta",
    "hook": "Ningún productor de soja puede 'ponerle precio' a la soja: el precio se lo dicta Chicago, tome lo que tome. Ese mundo sin poder de precio es el laboratorio ideal de la economía.",
    "explanation": [
      "La <b>competencia perfecta</b> describe un mercado con muchos vendedores de un producto idéntico, con libre entrada y salida, donde ningún actor pesa lo suficiente para mover el precio. Cada empresa es <b>tomadora de precio</b>: vende todo lo que quiera al precio de mercado, y nada por encima. Su única decisión es cuánto producir.",
      "Esa decisión sigue la lógica marginal que ya conocés: producir mientras el precio (lo que agrega vender una unidad más) supere al <b>costo marginal</b> (lo que cuesta producirla). El óptimo es donde <b>precio = costo marginal</b>. Esto tiene un encanto oculto: el precio refleja lo que la unidad vale para el comprador, y el costo marginal lo que cuesta a la sociedad producirla — cuando se igualan, se produce exactamente la cantidad eficiente, sin que nadie lo haya planeado.",
      "¿Y las ganancias? Acá entra la libre entrada. Si las empresas del rubro ganan por encima de lo normal, entran competidores nuevos, la oferta crece, el precio baja — y las ganancias extraordinarias se evaporan. Si pierden, algunas salen, el precio sube, y las que quedan se recuperan. A largo plazo, el <b>beneficio económico</b> tiende a cero: las empresas cubren todos sus costos, incluido el costo de oportunidad del capital y el tiempo del dueño. Cero beneficio económico no es quebrar — es ganar exactamente lo normal, ni un peso más."
    ],
    "example": {
      "title": "El productor de trigo no negocia",
      "body": "Un chacarero cosecha trigo y va a venderlo. ¿Puede pedir 10% más que la pizarra de Rosario? No: el comprador consigue trigo idéntico al lado. ¿Le conviene vender 10% más barato? Tampoco: al precio de pizarra le compran todo lo que tenga. El precio le viene dado; su única variable es cuántas hectáreas sembrar y con qué intensidad — y la respuesta es producir hasta que el costo de la última tonelada iguale la pizarra. Si un año el trigo deja márgenes jugosos, la siembra del año siguiente explota en todo el país... y el precio se encarga de borrar el margen. Así funciona la entrada."
    },
    "check": [
      {
        "type": "mcq",
        "q": "En un mercado perfectamente competitivo, las empresas están teniendo ganancias económicas altas. ¿Qué predice el modelo para el largo plazo?",
        "options": [
          "Las empresas suben precios para ganar todavía más",
          "Entran competidores, la oferta aumenta, el precio cae y las ganancias económicas tienden a cero",
          "El Estado debe intervenir para limitar las ganancias",
          "Las ganancias se mantienen mientras las empresas sean eficientes"
        ],
        "answer": 1,
        "explain": "Con libre entrada, las ganancias extraordinarias son una invitación: atraen empresas nuevas, la oferta del mercado se desplaza a la derecha y el precio baja hasta que el negocio rinde apenas lo normal. Nadie puede 'subir precios' porque todos son tomadores de precio."
      },
      {
        "type": "open",
        "q": "Explicá por qué a una empresa perfectamente competitiva le conviene producir exactamente hasta donde el precio iguala su costo marginal, y por qué a largo plazo su beneficio económico tiende a cero.",
        "criterion": "Podés explicar por qué en competencia perfecta el precio iguala al costo marginal y el beneficio económico tiende a cero.",
        "model": "Como toma el precio como dado, cada unidad extra le suma exactamente el precio en ingresos y el costo marginal en costos. Mientras precio > costo marginal, la unidad extra deja ganancia y conviene producirla; cuando el costo marginal alcanza al precio, ahí frena: precio = costo marginal es su óptimo. A largo plazo, si el rubro da ganancias económicas positivas entran competidores, la oferta sube y el precio cae hasta borrarlas; si da pérdidas, salen empresas y el precio se recupera. El equilibrio de largo plazo deja beneficio económico cero: se cubren todos los costos, incluido el de oportunidad."
      }
    ],
    "takeaway": "Sin poder de precio, la empresa solo elige cuánto producir: hasta que el costo marginal alcanza al precio — y la libre entrada se encarga de que nadie gane de más por mucho tiempo."
  },
  "monopolio": {
    "id": "monopolio",
    "hook": "El único proveedor de internet del pueblo no cobra caro porque sea malvado: cobra caro porque puede. Y ese 'puede' tiene una mecánica precisa — y un costo que no se ve.",
    "explanation": [
      "Un <b>monopolio</b> es un mercado con un solo oferente y sin sustitutos cercanos. A diferencia de la empresa competitiva, el monopolista no toma el precio: lo elige. Pero no es omnipotente — enfrenta la curva de demanda del mercado entero. Si quiere vender más, tiene que bajar el precio; si quiere cobrar más, tiene que resignar ventas. Su poder de precio es exactamente eso: elegir en qué punto de la demanda pararse, y cuánto margen tiene depende de qué tan inelástica sea esa demanda.",
      "¿Y dónde se para? Acá hay una sutileza: para el monopolista, vender una unidad más rinde MENOS que el precio, porque para colocarla debe bajar el precio de todas las unidades. Su ingreso marginal está siempre por debajo del precio. Como todo optimizador, produce hasta que ese ingreso marginal iguala su costo marginal — y eso ocurre a una cantidad <b>menor</b> y un precio <b>mayor</b> que en competencia, donde la vara era el precio mismo.",
      "El problema social no es que el monopolista gane mucho — eso es una transferencia de los consumidores hacia él. El problema es lo que NO pasa: hay compradores dispuestos a pagar más de lo que costaría producir sus unidades, y esas ventas mutuamente beneficiosas no ocurren porque concretarlas obligaría a bajar el precio de todo lo demás. Ese valor que nadie captura — ni el monopolista ni los consumidores — es bienestar destruido, la razón de fondo por la que el poder de mercado preocupa a la economía y a los reguladores."
    ],
    "example": {
      "title": "El peaje de la única autopista",
      "body": "Una concesionaria opera la única autopista que conecta dos ciudades, con una alternativa pésima por caminos rurales. El costo marginal de un auto más es casi cero: un poco de desgaste. En competencia, el peaje tendería a ese costo — baratísimo. La concesionaria, en cambio, sube el peaje hasta el punto donde perder autos le cuesta más de lo que gana por tarifa: cobra, digamos, $5.000. Miles de conductores que valoraban el viaje en $3.000 —muy por encima del costo real de dejarlos pasar— se quedan afuera o dan la vuelta larga. Esos viajes que valían más de lo que costaban y no ocurren son la pérdida social del monopolio, invisible en cualquier balance."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Por qué el ingreso marginal de un monopolista es menor que el precio al que vende?",
        "options": [
          "Porque la demanda que enfrenta es perfectamente elástica",
          "Porque los impuestos le quitan parte del ingreso",
          "Porque su costo marginal crece con la producción",
          "Porque para vender una unidad adicional debe bajar el precio también de todas las demás unidades"
        ],
        "answer": 3,
        "explain": "El monopolista enfrenta toda la demanda del mercado: para colocar una unidad extra necesita un precio menor, y ese precio menor aplica a todas sus ventas. La unidad adicional le aporta su precio menos lo que pierde en las demás — siempre menos que el precio. Por eso se frena antes que una empresa competitiva."
      },
      {
        "type": "open",
        "q": "Explicá cómo hace un monopolista para sostener un precio alto (¿qué hace con la cantidad?) y por qué esa decisión reduce el bienestar total, más allá de lo que ganan o pierden las partes.",
        "criterion": "Podés explicar cómo el monopolista fija precio restringiendo cantidad y por qué eso reduce el bienestar.",
        "model": "El monopolista no fija el precio por decreto: restringe la cantidad. Al ofrecer menos, se mueve hacia arriba sobre la curva de demanda y el precio sube solo. Produce hasta donde su ingreso marginal (menor que el precio) iguala su costo marginal — menos cantidad y más precio que en competencia. El bienestar cae porque quedan afuera compradores dispuestos a pagar más de lo que cuesta producir esas unidades: intercambios que crearían valor y no ocurren. Eso no es una transferencia hacia el monopolista — es valor que directamente se destruye."
      }
    ],
    "takeaway": "El monopolista no sube el precio: achica la cantidad y deja que el precio suba solo — y las ventas que sacrifica son bienestar que nadie se lleva."
  },
  "oligopolio": {
    "id": "oligopolio",
    "hook": "Cuando una telefónica baja su plan, las otras dos responden en semanas. Cuando tu heladería sube el cucurucho, a las demás ni les mueve el amperímetro. Entre esos dos mundos vive casi toda la economía real.",
    "explanation": [
      "La competencia perfecta y el monopolio son los extremos de un espectro; casi todos los mercados reales viven en el medio. El <b>oligopolio</b> es el caso de pocos jugadores grandes — telefónicas, cementeras, cerveceras — donde cada decisión propia mueve el tablero de los demás. Lo definitorio es la <b>interdependencia estratégica</b>: antes de tocar un precio, cada empresa se pregunta '¿y qué van a hacer los otros?'. Por eso el oligopolio se analiza con teoría de juegos y no con curvas solitarias.",
      "Los oligopolistas enfrentan una tensión permanente, calcada del dilema del prisionero: si todos mantienen precios altos, todos ganan (el resultado colusivo, cercano al monopolio); pero cada uno tiene el incentivo individual de bajar un poco y robarse el mercado. La cooperación explícita —el <b>cartel</b>— es ilegal en casi todo el mundo, e incluso cuando existe, cada miembro tiene incentivos a traicionarla. Que el resultado quede más cerca del monopolio o de la competencia depende de cuán fácil sea sostener esa cooperación tácita.",
      "La <b>competencia monopolística</b> es el otro caso intermedio: muchos vendedores, pero de productos <b>diferenciados</b> — cafeterías, marcas de ropa, restaurantes. Cada uno tiene un mini-monopolio sobre su versión (su ubicación, su estilo, su marca) y por eso algo de poder de precio; pero los sustitutos cercanos abundan y la libre entrada erosiona las ganancias a largo plazo, como en competencia. Para ubicar un mercado real en el espectro, preguntá dos cosas: ¿cuántos jugadores relevantes hay? y ¿el producto es idéntico o diferenciado?"
    ],
    "example": {
      "title": "Cemento versus cafeterías de especialidad",
      "body": "El cemento en Argentina lo producen un puñado de empresas: producto homogéneo, pocos jugadores, cada tonelada que una gana la pierde otra. Si una baja el precio, las demás lo ven en el acto y responden — la guerra de precios los empobrece a todos, así que la tentación de 'no agredirse' es enorme (el sector, de hecho, protagonizó un caso célebre de cartelización sancionada). Las cafeterías de especialidad de Palermo son el mundo opuesto: decenas de locales, cada uno distinto en ambientación, granos y baristas. Cada una puede cobrar su flat white un poco más caro sin vaciarse — pero si el barrio se llena de cafeterías nuevas, los márgenes de todas se comprimen. Pocos y homogéneo: oligopolio. Muchos y diferenciado: competencia monopolística."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Cuál es el rasgo que distingue a un oligopolio tanto de la competencia perfecta como del monopolio?",
        "options": [
          "Que el producto vendido es homogéneo",
          "Que la mejor decisión de cada empresa depende de lo que hagan sus rivales, y todos lo saben",
          "Que las empresas obtienen ganancias extraordinarias",
          "Que existe libre entrada de competidores"
        ],
        "answer": 1,
        "explain": "La interdependencia estratégica es la firma del oligopolio: son tan pocos que cada movimiento propio altera las jugadas ajenas. El competidor perfecto ignora a sus rivales (es tomador de precio) y el monopolista no tiene rivales. Las ganancias o la homogeneidad pueden variar según el caso."
      },
      {
        "type": "open",
        "q": "Pensá en el mercado de apps de delivery en Argentina (dos o tres jugadores grandes) y en el de restaurantes de una ciudad (cientos, todos distintos). Ubicá cada uno en el espectro entre competencia perfecta y monopolio, justificando con el número de jugadores y el tipo de producto.",
        "criterion": "Podés ubicar un mercado real en el espectro entre competencia perfecta y monopolio.",
        "model": "Las apps de delivery son un oligopolio: dos o tres jugadores con servicios parecidos, donde cada comisión o promoción de una fuerza la respuesta de las otras — pura interdependencia estratégica, más cerca del monopolio que de la competencia. Los restaurantes son competencia monopolística: cientos de oferentes con productos diferenciados (cocina, ubicación, ambiente), cada uno con algo de poder de precio sobre su nicho, pero disciplinados por la abundancia de sustitutos y la entrada constante de locales nuevos — mucho más cerca del extremo competitivo."
      }
    ],
    "takeaway": "Entre el monopolio y la competencia vive casi todo: pocos jugadores que se vigilan (oligopolio) o muchos que se diferencian (competencia monopolística)."
  },
  "teoria_juegos": {
    "id": "teoria_juegos",
    "hook": "Dos detenidos, interrogados por separado, terminan confesando los dos — y quedándose presos más años que si ambos hubieran callado. Ninguno se equivocó: cada uno jugó perfecto. Ese es el escándalo fundacional de la teoría de juegos.",
    "explanation": [
      "La <b>teoría de juegos</b> estudia decisiones donde tu mejor jugada depende de lo que hagan los demás — y ellos piensan lo mismo de vos. Un 'juego' se arma con jugadores, estrategias posibles y pagos para cada combinación. La pregunta central es dónde se estaciona el juego: el <b>equilibrio de Nash</b> es la situación en la que, dado lo que hace el otro, a nadie le conviene cambiar su jugada por su cuenta. No es necesariamente el mejor resultado — es el estable.",
      "El <b>dilema del prisionero</b> es la pieza clásica. Dos cómplices detenidos, interrogados por separado: si ambos callan, penas cortas; si uno delata y el otro calla, el delator sale libre y el otro carga con todo; si ambos delatan, penas intermedias. Mirá los incentivos de cada uno: pase lo que pase con el otro, delatar te deja mejor — es la <b>estrategia dominante</b>. Resultado: ambos delatan y terminan peor que si ambos hubieran callado. Los incentivos individuales, seguidos a la perfección, fabricaron un desastre colectivo.",
      "Esa estructura aparece por todos lados: carteles que se traicionan bajando precios, países en carrera armamentista, pesca hasta agotar el caladero, vecinos que no cortan el pasto del frente compartido. En todos, cooperar conviene al grupo y traicionar conviene a cada uno. La salida suele venir de cambiar el juego: cuando la interacción se <b>repite</b>, traicionar hoy tiene un costo mañana (reputación, represalias), y la cooperación puede sostenerse. Contratos, castigos y reglas son, en el fondo, ingeniería de pagos para que el equilibrio deje de ser el malo."
    ],
    "example": {
      "title": "La guerra de promociones bancarias",
      "body": "Dos billeteras virtuales dominan los pagos con QR. Si ninguna quema plata en descuentos, ambas ganan bien. Si una lanza '25% off en supermercados' y la otra no, la primera se roba los usuarios. Si ambas lo lanzan, los usuarios cobran el descuento pero casi no migran: las dos ganan menos que al principio. Delatar es promocionar: la estrategia dominante. Equilibrio de Nash: ambas queman margen en promos que se cancelan mutuamente. ¿Por qué a veces las promos se enfrían? Porque el juego se repite todos los meses — y ambas aprenden que la tregua tácita paga más que la guerra."
    },
    "check": [
      {
        "type": "mcq",
        "q": "En un juego, una combinación de estrategias es equilibrio de Nash cuando…",
        "options": [
          "Maximiza la suma de los pagos de todos los jugadores",
          "Todos los jugadores usan la misma estrategia",
          "Ningún jugador puede mejorar su pago cambiando SOLO su propia estrategia, dado lo que hacen los demás",
          "Cada jugador obtiene su máximo pago posible"
        ],
        "answer": 2,
        "explain": "El equilibrio de Nash es un punto de estabilidad, no de óptimo: nadie gana desviándose unilateralmente. Puede ser pésimo para todos — el dilema del prisionero lo demuestra: ambos delatan es Nash, aunque ambos callar les daría más pago a los dos."
      },
      {
        "type": "open",
        "q": "Dos empresas lácteas deciden simultáneamente entre precio alto o precio bajo. Si ambas ponen alto, cada una gana 10; si ambas bajo, cada una gana 4; si una pone bajo y la otra alto, la de bajo gana 14 y la de alto gana 1. ¿Cuál es el equilibrio de Nash y por qué el resultado es peor para ambas que otra combinación disponible?",
        "criterion": "Podés encontrar el equilibrio de Nash en un juego simple y explicar por qué el resultado puede ser peor para todos.",
        "model": "Para cada empresa, precio bajo es estrategia dominante: si la rival pone alto, bajo rinde 14 contra 10; si la rival pone bajo, bajo rinde 4 contra 1. Entonces ambas eligen bajo y el equilibrio de Nash es (bajo, bajo) con ganancias de 4 y 4. Es peor que (alto, alto), donde ganarían 10 cada una — pero ese resultado no es estable: parada ahí, cada una mejora traicionando. Los incentivos individuales perfectamente seguidos producen el peor resultado conjunto."
      }
    ],
    "takeaway": "El equilibrio de Nash es donde nadie gana moviéndose solo — y puede ser un lugar horrible: incentivos perfectos, resultado pésimo."
  },
  "externalidades": {
    "id": "externalidades",
    "hook": "El vecino que pone música a las tres de la mañana no paga por tu insomnio, y el que vacuna a su hijo no cobra por protegerte. En ambos casos, alguien quedó fuera de la cuenta — y esa omisión rompe el mercado.",
    "explanation": [
      "Una <b>externalidad</b> es un costo o beneficio que recae sobre alguien que no participó de la transacción. La fábrica y sus clientes acuerdan precio y cantidad; el humo que respira el barrio no entra en ese acuerdo. Es <b>negativa</b> cuando impone costos a terceros (contaminación, ruido, congestión) y <b>positiva</b> cuando regala beneficios (vacunas, educación, un jardín lindo a la calle).",
      "El problema es aritmético: el equilibrio de mercado se forma donde la disposición a pagar de los compradores cruza los costos de los vendedores — los costos y beneficios <b>privados</b>. Si producir algo genera además un costo a terceros, el costo social es mayor que el privado, y el mercado — que no lo ve — produce <b>demasiado</b>. Si genera beneficios a terceros, el beneficio social supera al privado, y el mercado produce <b>muy poco</b>. En ambos casos la cantidad de equilibrio es la equivocada: no porque el mercado 'falle' misteriosamente, sino porque hay una parte de la cuenta que ningún participante paga ni cobra.",
      "Las soluciones apuntan todas a lo mismo: <b>internalizar</b> la externalidad, hacer que el que decide sienta el costo o beneficio completo. Un impuesto igual al daño (impuesto pigouviano) encarece la actividad contaminante hasta su costo social verdadero; un subsidio hace lo simétrico con las positivas. A veces alcanza con definir derechos de propiedad claros y dejar que las partes negocien. El criterio no es 'prohibir lo malo': es que cada decisión cargue con su cuenta completa."
    ],
    "example": {
      "title": "La curtiembre y el río",
      "body": "Una curtiembre vierte residuos al Riachuelo. Sus costos privados — cuero, químicos, salarios — determinan cuánto produce, y a sus precios el negocio cierra bien. Pero río abajo hay vecinos que no pueden usar el agua, pescadores sin pesca, un Estado gastando en salud. Ese costo existe y alguien lo paga: solo que no lo paga quien decide cuánto producir. Si un impuesto por litro vertido le cobrara a la curtiembre el daño que causa, parte de su producción dejaría de ser rentable — exactamente la parte que valía menos que el daño que generaba. No es castigo: es completar la cuenta."
    },
    "check": [
      {
        "type": "mcq",
        "q": "La educación genera beneficios a terceros (ciudadanos más informados, más productividad para toda la economía). Si se deja solo al mercado, ¿qué predice la teoría?",
        "options": [
          "Se consumirá menos educación que lo socialmente óptimo, porque cada persona decide mirando solo su beneficio privado",
          "El precio de la educación caerá hasta cero",
          "Se producirá la cantidad eficiente, porque cada uno sabe lo que le conviene",
          "Se consumirá demasiada educación, porque está sobrevalorada"
        ],
        "answer": 0,
        "explain": "Con externalidad positiva, el beneficio social supera al privado. Cada persona estudia hasta donde le rinde A ELLA, sin computar lo que su educación aporta a los demás — así que la cantidad de equilibrio queda por debajo de la óptima. Es el argumento económico clásico para subsidiar educación."
      },
      {
        "type": "open",
        "q": "El transporte en auto particular genera congestión: cada conductor que entra a la ciudad demora a todos los demás. Identificá la externalidad y explicá por qué la cantidad de autos en hora pico es mayor que la eficiente.",
        "criterion": "Podés identificar una externalidad y explicar por qué distorsiona la cantidad de equilibrio.",
        "model": "Es una externalidad negativa: cada conductor decide viajar comparando su beneficio con SU costo (nafta, su propio tiempo), pero no computa los minutos de demora que le impone a los cientos de autos de atrás. El costo social de su viaje supera su costo privado. Como nadie paga esa diferencia, entran a la ciudad más autos que los que entrarían si cada uno cargara con el costo completo de su decisión: la cantidad de equilibrio excede la eficiente. Por eso existen peajes por congestión — internalizan el costo."
      }
    ],
    "takeaway": "Cuando parte de la cuenta la paga (o la cobra) alguien que no decide, el mercado produce de más lo dañino y de menos lo benéfico."
  },
  "bienes_publicos": {
    "id": "bienes_publicos",
    "hook": "Nadie construiría un faro cobrando entrada: la luz la ven todos los barcos, paguen o no. Y justamente porque la ven todos, quizás nadie lo construya. Bienvenido al problema del free-rider.",
    "explanation": [
      "Dos preguntas clasifican cualquier bien. ¿Es <b>rival</b>? — si lo consumís vos, ¿queda menos para otro? Una empanada es rival; una señal de radio, no. ¿Es <b>excluible</b>? — ¿se le puede impedir el acceso a quien no paga? Un cine es excluible; el aire limpio, no. Cruzando ambas salen cuatro tipos: los bienes privados (rivales y excluibles: la empanada), los bienes de club (no rivales pero excluibles: el streaming), los recursos comunes (rivales pero no excluibles: la pesca en alta mar) y los <b>bienes públicos</b> (ni rivales ni excluibles: la defensa nacional, el faro, una vereda iluminada).",
      "El bien público sufre el problema del <b>free-rider</b> (el colado): como nadie puede ser excluido, a cada uno le conviene esperar que lo paguen otros y disfrutarlo gratis. Es puro incentivo: tu aporte individual casi no cambia si el bien existe o no, pero tu bolsillo sí nota si pagás. Si todos razonan igual — y los incentivos empujan a que así sea —, el bien no se produce o se produce de menos, aunque todos lo valoren más que su costo. Por eso estos bienes suelen financiarse con impuestos: la obligatoriedad rompe el juego del colado.",
      "Los <b>recursos comunes</b> tienen el problema espejado, la 'tragedia de los comunes': como son rivales pero nadie puede excluir, cada usuario captura el beneficio completo de usarlos pero reparte el desgaste entre todos. Cada pescador tiene incentivos a sacar un pez más; el caladero se agota para todos. La sobreexplotación no nace de la maldad sino de la estructura: beneficio concentrado, costo diluido. Las salidas — cuotas, derechos de propiedad, reglas comunitarias — buscan siempre lo mismo: que el que usa sienta el costo completo de usar."
    ],
    "example": {
      "title": "La alarma comunitaria de la cuadra",
      "body": "Los vecinos de una cuadra quieren poner cámaras y una alarma comunitaria: $30.000 por casa. La seguridad resultante es no rival (que te proteja a vos no me desprotege a mí) y no excluible (la cámara disuade ladrones para toda la cuadra, hayas pagado o no). En el grupo de WhatsApp, todos están de acuerdo en que 'hay que hacerlo'... y a la hora de pagar, aparecen los colados: '¿para qué pagar, si con que paguen los demás ya quedo cubierto?'. Si suficientes razonan así, la alarma no se instala — aunque cada vecino la valore en mucho más de $30.000. No falló la buena voluntad: falló la estructura de incentivos."
    },
    "check": [
      {
        "type": "mcq",
        "q": "La pesca en un río de acceso libre, ¿qué tipo de bien es y qué problema predice la teoría?",
        "options": [
          "Recurso común (rival, no excluible): se sobreexplotará porque cada pescador captura el beneficio pero reparte el costo",
          "Bien público: se subproveerá por el problema del free-rider",
          "Bien privado: el mercado lo asignará eficientemente",
          "Bien de club: se necesita cobrar membresía"
        ],
        "answer": 0,
        "explain": "Los peces son rivales (el que sacás vos no lo saco yo) pero el acceso libre impide excluir. Cada pescador gana el pez entero y el costo del caladero agotado se reparte entre todos: los incentivos empujan a la sobrepesca — la tragedia de los comunes. El free-rider es el problema de los bienes públicos, que son NO rivales."
      },
      {
        "type": "open",
        "q": "Un grupo de programadores quiere financiar con donaciones voluntarias una librería de software de código abierto que cualquiera podrá usar gratis. Clasificá el bien según rivalidad y exclusión, y explicá qué problema es esperable en el financiamiento.",
        "criterion": "Podés clasificar un bien según rivalidad y exclusión y anticipar el problema de free-rider.",
        "model": "Es un bien público: no rival (que yo use la librería no impide que la uses vos — copiar código no gasta nada) y no excluible (es de código abierto, nadie queda afuera por no pagar). El problema esperable es el free-rider: como cualquier empresa la usará gratis pague o no, cada una prefiere que donen otras. Las donaciones quedarán por debajo del valor que la librería genera, y el proyecto se subfinanciará — el destino típico del open source, que por eso suele terminar sostenido por fundaciones, sponsors corporativos o trabajo gratuito."
      }
    ],
    "takeaway": "Si no podés excluir al que no paga, cada uno espera que pague otro — y lo que todos valoran puede terminar sin existir."
  },
  "asimetria_info": {
    "id": "asimetria_info",
    "hook": "¿Por qué un auto 0 km pierde 20% de su valor apenas sale de la concesionaria? No cambió el auto: cambió lo que el mercado puede saber de él. El que lo vende a los tres meses, algo sabe.",
    "explanation": [
      "Hay <b>asimetría de información</b> cuando una parte de la transacción sabe algo relevante que la otra no puede verificar. No es un detalle: puede achicar mercados enteros o hacerlos desaparecer. Sus dos formas clásicas conviene distinguirlas por el CUÁNDO: una opera antes de firmar, la otra después.",
      "La <b>selección adversa</b> es el problema de ANTES: la información oculta sobre el tipo de bien o persona que entra al trato. El ejemplo canónico es el mercado de autos usados: el vendedor sabe si su auto es bueno o un 'limón'; el comprador no distingue, así que ofrece un precio promedio. Pero a precio promedio, a los dueños de autos buenos no les conviene vender — se retiran — y la calidad promedio de lo ofrecido cae, lo que baja el precio, lo que expulsa a más vendedores buenos... El mercado se queda con los limones. Lo mismo pasa en seguros: al precio de la prima promedio, se aseguran sobre todo los de alto riesgo.",
      "El <b>riesgo moral</b> es el problema de DESPUÉS: la conducta oculta una vez firmado el trato. Asegurado contra robo, cuidás menos la bici; con el sueldo fijo garantizado, algún empleado afloja; rescatado siempre por el Estado, el banco toma más riesgo. La otra parte no puede observar tu esfuerzo o cuidado, y los incentivos cambian apenas la tinta se seca. Los mercados desarrollan defensas para ambos males: garantías y revisaciones técnicas (señalizan calidad), franquicias y deducibles (te dejan parte del riesgo), períodos de prueba, reputación. Todas son formas de reconstruir la información que falta — o de realinear los incentivos que el contrato torció."
    ],
    "example": {
      "title": "La prepaga y los dos problemas en uno",
      "body": "Una prepaga médica sufre ambos males a la vez. Antes de afiliar: ¿quiénes tienen más ganas de contratar el plan más completo? Los que sospechan que van a usarlo mucho — los de mayor riesgo. Eso es selección adversa, y por eso existen las carencias, los cuestionarios de salud y las preexistencias. Después de afiliar: con todo cubierto, el afiliado consulta por cualquier cosa y pide estudios 'por las dudas' — riesgo moral, y por eso existen los copagos, que te hacen sentir una parte del costo de cada consulta. Cada cláusula fastidiosa del contrato es una respuesta a un problema de información."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Un banco ofrece préstamos a tasa alta para compensar la morosidad. Nota que, a mayor tasa, peor es la calidad de los que ACEPTAN pedir el préstamo (los proyectos serios se retiran, quedan los desesperados y los que no piensan devolver). ¿Qué fenómeno describe esto?",
        "options": [
          "Un problema de free-rider entre los deudores",
          "Riesgo moral: los deudores se esfuerzan menos después de recibir el préstamo",
          "Selección adversa: la tasa alta filtra hacia los peores deudores antes de firmar",
          "Externalidad negativa del sistema financiero"
        ],
        "answer": 2,
        "explain": "Es información oculta ANTES del contrato: el banco no distingue buenos de malos deudores, y el precio (la tasa) selecciona en su contra — espanta a los buenos y atrae a los de alto riesgo. Es el mecanismo del mercado de limones aplicado al crédito. El riesgo moral sería que el deudor cambie su conducta DESPUÉS de recibir la plata."
      },
      {
        "type": "open",
        "q": "Diferenciá selección adversa de riesgo moral usando el ejemplo de un seguro de auto: dónde aparece cada uno y qué cláusulas típicas del contrato responden a cada problema.",
        "criterion": "Podés distinguir selección adversa de riesgo moral con ejemplos.",
        "model": "Selección adversa: antes de contratar, la aseguradora no sabe quién es mal conductor; a la prima promedio se aseguran más los riesgosos, encareciendo el seguro y expulsando a los prudentes. Respuestas: primas según historial, scoring, bonus por años sin siniestros. Riesgo moral: después de asegurado, el cliente cuida menos — estaciona en cualquier lado, maneja más distraído — porque el costo del siniestro lo paga otro. Respuestas: franquicia o deducible, que le dejan parte del costo de cada choque para que el cuidado siga conviniendo. Uno es información oculta al firmar; el otro, conducta oculta después de firmar."
      }
    ],
    "takeaway": "Selección adversa: no sabés con quién firmás. Riesgo moral: no ves qué hace después de firmar. Las dos nacen de lo mismo — el otro sabe algo que vos no."
  },
  "fallas_mercado": {
    "id": "fallas_mercado",
    "hook": "El mercado coordina millones de decisiones mejor que cualquier planificador — hasta que no. Hay exactamente cuatro maneras clásicas en que la mano invisible pifia, y conocerlas es saber cuándo tiene sentido intervenir.",
    "explanation": [
      "Una <b>falla de mercado</b> es una situación donde el mercado librado a sí mismo NO alcanza el resultado eficiente: deja valor sobre la mesa, produce de más lo dañino o de menos lo valioso. No es que el mercado 'sea injusto' — eso es una discusión de equidad, aparte —: es que ni siquiera logra maximizar la torta. La caja de herramientas micro que ya construiste identifica cuatro grandes tipos.",
      "Uno: las <b>externalidades</b> — costos o beneficios que recaen en terceros, como la contaminación o las vacunas; el mercado produce demasiado de lo que daña y poco de lo que beneficia. Dos: los <b>bienes públicos</b> — no rivales y no excluibles, como la defensa o un faro; el free-rider hace que se subprovean o no existan. Tres: el <b>poder de mercado</b> — monopolios y carteles que restringen cantidad para inflar precios, destruyendo intercambios valiosos. Cuatro: la <b>información asimétrica</b> — selección adversa y riesgo moral, que encogen o destruyen mercados como el de seguros o crédito.",
      "Estas cuatro fallas son LA justificación económica de la intervención estatal: impuestos pigouvianos, provisión pública de bienes públicos, defensa de la competencia, regulación de seguros y bancos. Pero atención al doble filo: que exista una falla de mercado demuestra que el mercado es imperfecto, no que la intervención vaya a mejorar las cosas. Los gobiernos también fallan — con incentivos propios, información limitada y capturas de intereses. El análisis honesto compara el mercado imperfecto contra la intervención imperfecta, no contra un Estado ideal."
    ],
    "example": {
      "title": "Cuatro fallas en una ciudad cualquiera",
      "body": "Recorré una ciudad argentina y las ves a las cuatro. Externalidad: los bares de una peatonal con música hasta las 4 AM — el costo del ruido lo pagan vecinos que no consumieron nada. Bien público: el alumbrado de la plaza — nadie lo financiaría vendiendo entradas, lo paga el municipio. Poder de mercado: la única empresa de colectivos interurbanos de la zona, con frecuencias pobres y tarifa alta. Información asimétrica: el mercado de alquileres, donde el dueño no sabe qué inquilino paga y el inquilino no sabe qué departamento tiene humedad — y por eso florecen garantías, sellados y meses de depósito. Cada una pide un remedio distinto; ninguna se arregla sola."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Cuál de las siguientes situaciones NO es una falla de mercado en el sentido técnico?",
        "options": [
          "Nadie invierte en investigación básica porque los resultados los aprovecha cualquiera gratis",
          "Un laboratorio que, siendo único productor de un medicamento, restringe cantidad para subir el precio",
          "Un mercado competitivo donde el pan es caro y a los pobres les cuesta comprarlo",
          "Una petroquímica que contamina un río sin pagar por el daño"
        ],
        "answer": 2,
        "explain": "Que el resultado eficiente deje a algunos con poco es un problema de EQUIDAD, no de eficiencia: el mercado puede estar funcionando perfectamente y aun así producir un reparto que nos parezca injusto. Las otras tres son fallas técnicas: externalidad negativa, poder de mercado, y bien público (el conocimiento básico) subprovisto por free-riding."
      },
      {
        "type": "open",
        "q": "Nombrá los cuatro tipos principales de falla de mercado y dá un ejemplo concreto de cada uno (idealmente distinto de los ya usados en esta lección).",
        "criterion": "Podés nombrar los cuatro tipos principales de falla de mercado y dar un ejemplo de cada uno.",
        "model": "Externalidades: el humo del cigarrillo en espacios compartidos impone costos a terceros que no fuman. Bienes públicos: los pronósticos meteorológicos — una vez publicados, cualquiera los usa gratis, nadie los pagaría individualmente. Poder de mercado: una única cementera regional que cobra precios muy por encima del costo. Información asimétrica: el mercado laboral al contratar — el candidato conoce su capacidad real y el empleador no, por eso existen períodos de prueba y referencias."
      }
    ],
    "takeaway": "Externalidades, bienes públicos, poder de mercado e información asimétrica: las cuatro formas en que el mercado solo no llega — y la letra chica es que el Estado tampoco es perfecto."
  },
  "peso_muerto": {
    "id": "peso_muerto",
    "hook": "Cuando un impuesto recauda $100, a los contribuyentes les cuesta más de $100. Esa diferencia no se la lleva nadie — ni el Estado, ni las empresas, ni vos. Simplemente deja de existir. Tiene nombre: peso muerto.",
    "explanation": [
      "La <b>pérdida de peso muerto</b> es el excedente que se destruye — no se transfiere: se esfuma — cuando un mercado opera en una cantidad distinta de la eficiente. En el equilibrio competitivo se concretan todos los intercambios donde el comprador valora el bien más de lo que cuesta producirlo; cada uno de esos intercambios crea valor. Si algo — un impuesto, un monopolio, un control — impide una parte de esos intercambios, el valor que hubieran creado no va a parar a ningún bolsillo. Se pierde para todos.",
      "En el gráfico se ve como un <b>triángulo</b> entre las curvas de oferta y demanda, apoyado sobre la brecha entre la cantidad eficiente y la cantidad efectiva. Tomá un impuesto: mete una cuña entre lo que paga el comprador y lo que recibe el vendedor. Las unidades que se siguen vendiendo generan recaudación — eso es transferencia, excedente que cambió de manos hacia el Estado, no pérdida. Pero las unidades que DEJARON de venderse — aquellas donde la valoración superaba el costo, aunque no por suficiente margen para saltar la cuña — son el triángulo: valor evaporado.",
      "Dos consecuencias prácticas. Primera: el tamaño del triángulo crece con las <b>elasticidades</b> — cuanto más responden compradores y vendedores al precio, más transacciones mata la misma cuña, y más peso muerto por peso recaudado; por eso gravar bienes inelásticos es más 'barato' en términos de eficiencia. Segunda: el peso muerto crece más que proporcionalmente con la tasa — duplicar un impuesto aproximadamente cuadruplica el triángulo. Esa es la base técnica del argumento de que muchos impuestos chicos distorsionan menos que pocos impuestos enormes."
    ],
    "example": {
      "title": "El impuesto que mató al asado del domingo",
      "body": "Imaginá un impuesto fuerte a la carne. Familias que valoraban el asado en $12.000 cuando costaba $10.000 ahora lo ven a $14.000 y no compran. El carnicero pierde esa venta, la familia pierde ese asado, y el Estado tampoco cobra nada por esa transacción — porque no ocurrió. Sobre los asados que sí se siguen comprando, el Estado recauda: eso es transferencia, no pérdida. Pero todos los asados 'asesinados' por el impuesto — los que valían más de lo que costaban y quedaron en la nada — son el triángulo de peso muerto: bienestar que ya no existe en ningún lado."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Un impuesto recauda $80 millones y genera una pérdida de peso muerto de $15 millones. ¿Qué representan esos $15 millones?",
        "options": [
          "El costo administrativo de cobrar el impuesto",
          "La ganancia que las empresas dejaron de tener y el Estado capturó",
          "El valor de los intercambios que el impuesto impidió y que nadie captura: ni el Estado, ni compradores, ni vendedores",
          "Parte de la recaudación que se pierde en burocracia estatal"
        ],
        "answer": 2,
        "explain": "El peso muerto no es plata que va a otro lado: es valor que deja de crearse. Corresponde a las transacciones donde el comprador valoraba el bien por encima del costo de producirlo, pero la cuña del impuesto las volvió inviables. La recaudación es transferencia; el triángulo es destrucción."
      },
      {
        "type": "open",
        "q": "Describí el gráfico de un mercado con un impuesto: dónde queda la cantidad respecto de la eficiente, dónde está el triángulo de peso muerto, y qué representa exactamente esa área. ¿Qué otras intervenciones o estructuras generan el mismo triángulo?",
        "criterion": "Sabés identificar el triángulo de peso muerto en un gráfico y qué lo genera.",
        "model": "El impuesto mete una cuña entre precio pagado y recibido: la cantidad cae por debajo de la de equilibrio. El triángulo de peso muerto queda entre la curva de demanda y la de oferta, sobre el tramo entre la cantidad con impuesto y la cantidad eficiente — con el vértice en el equilibrio original. Representa el excedente de los intercambios que valían la pena (valoración > costo) y ya no ocurren: pérdida pura, no transferida a nadie. Generan el mismo triángulo el monopolio (restringe cantidad bajo la eficiente) y los controles de precios (techos y pisos que impiden transacciones de equilibrio)."
      }
    ],
    "takeaway": "Lo que un impuesto recauda es transferencia; lo que impide es destrucción — y ese triángulo de valor evaporado no lo cobra nadie."
  },
  "controles_precios": {
    "id": "controles_precios",
    "hook": "'Precios Cuidados', congelamiento de alquileres, salario mínimo: cada tanto un gobierno decide que un precio está mal y lo fija por ley. El precio obedece. La escasez, no.",
    "explanation": [
      "Un <b>control de precios</b> es un precio fijado por el Estado en lugar del mercado. Viene en dos sabores: el <b>precio máximo</b> o techo (no se puede cobrar más que X — típico en alquileres, alimentos, tarifas) y el <b>precio mínimo</b> o piso (no se puede pagar menos que X — típico en salario mínimo o precios sostén al agro). La primera pregunta ante cualquiera es siempre la misma: ¿dónde está el control respecto del equilibrio? Un techo por ENCIMA del equilibrio o un piso por DEBAJO no atan nada: el mercado ya estaba ahí.",
      "Cuando sí atan, la aritmética del equilibrio hace su trabajo. Un techo por debajo del equilibrio abarata el bien: la cantidad demandada sube y la ofrecida baja — resultado, <b>faltante</b>. Y como el precio ya no puede racionar quién se lleva el bien escaso, aparecen otros mecanismos: colas, desabastecimiento, mercado negro, deterioro de calidad, 'acomodo'. Un piso por encima del equilibrio hace lo simétrico: la cantidad ofrecida supera a la demandada — <b>excedente</b>. En el mercado de trabajo, ese excedente de oferta tiene un nombre incómodo: gente que quiere trabajar a ese salario y no consigue.",
      "La magnitud del daño depende de las <b>elasticidades</b>: si oferta y demanda responden poco al precio (inelásticas), el faltante es chico; si responden mucho, el mismo control genera un agujero enorme — y más grande cuanto más tiempo pasa, porque a largo plazo todo se vuelve más elástico. El punto fino no es que los controles 'no funcionen': funcionan para lo que literalmente hacen (fijar un número). Lo que no pueden hacer es abolir la escasez — solo cambian el mecanismo que decide quién se queda sin nada."
    ],
    "example": {
      "title": "La ley de alquileres y los departamentos que se esfumaron",
      "body": "Argentina, 2020: una ley endurece los contratos de alquiler — plazo mínimo más largo, indexación fijada por fórmula. En la práctica funcionó como un techo sobre lo que los dueños podían ajustar. ¿Resultado? Miles de propietarios retiraron sus departamentos del mercado de alquiler de largo plazo: los pasaron a alquiler temporario, a venta, o los dejaron cerrados. La oferta publicada en las plataformas se desplomó, y encontrar departamento se volvió una odisea de listas de espera y sobreprecios por izquierda. El precio regulado se cumplía en el papel; la escasez se cobraba en especie: en tiempo de búsqueda, en garantías imposibles y en mudanzas al conurbano. La ley se derogó en 2023 — y la oferta reapareció en meses."
    },
    "check": [
      {
        "type": "mcq",
        "q": "El gobierno fija un precio máximo para la nafta un 30% por debajo del equilibrio. ¿Qué predice el modelo de oferta y demanda?",
        "options": [
          "Excedente de nafta: las petroleras producen más para compensar el precio bajo",
          "El precio de equilibrio baja hasta el nivel fijado",
          "Nada, porque la nafta es un bien de demanda inelástica",
          "Faltante: la cantidad demandada sube, la ofrecida baja, y aparecen colas y desabastecimiento"
        ],
        "answer": 3,
        "explain": "Un techo por debajo del equilibrio ata: al precio artificialmente bajo se quiere comprar más nafta y a las petroleras les conviene vender menos. La brecha es el faltante — y como el precio no puede racionar, lo hacen las colas en las estaciones, los cupos por cliente y el mercado paralelo."
      },
      {
        "type": "open",
        "q": "Un país fija un salario mínimo muy por encima del salario de equilibrio para trabajadores jóvenes sin experiencia. Prediga el modelo: ¿faltante o excedente, de qué, y cómo se manifiesta en la realidad?",
        "criterion": "Podés predecir faltante o excedente según el control esté por debajo o encima del equilibrio.",
        "model": "Es un piso por encima del equilibrio, así que genera excedente — en este caso, excedente de trabajo: al salario fijado, más jóvenes quieren trabajar que los que las empresas quieren contratar. Se manifiesta como desempleo juvenil y como informalidad: trabajos por debajo del mínimo, en negro, fuera del alcance de la ley. Quienes conservan el empleo formal ganan más; el costo lo pagan los que quedan afuera."
      }
    ],
    "takeaway": "Un precio fijado por ley cambia el número, no la escasez: donde el precio no puede racionar, racionan las colas, la calidad o el mercado negro."
  },
  "impuestos_incidencia": {
    "id": "impuestos_incidencia",
    "hook": "El Congreso puede votar que un impuesto 'lo paguen las empresas'. Lo que no puede votar es quién lo termina pagando de verdad — eso lo deciden las elasticidades, y no atienden razones.",
    "explanation": [
      "La <b>incidencia</b> de un impuesto es la pregunta por quién soporta realmente su carga — que puede no tener nada que ver con quién hace el trámite de pagarlo. Cuando se grava un bien, el impuesto mete una cuña entre lo que paga el comprador y lo que recibe el vendedor. El precio al consumidor sube algo, el precio neto al productor baja algo — y cómo se reparte esa cuña no depende de a quién le cobra la AFIP, sino de las <b>elasticidades relativas</b> de oferta y demanda.",
      "La regla es una sola: la carga cae más pesadamente sobre el lado <b>menos elástico</b> — el que menos puede escapar. Si los compradores no tienen sustitutos (demanda inelástica), absorben la suba de precio casi entera: no tienen adónde ir. Si son los vendedores los que no pueden reconvertirse ni retirarse (oferta inelástica), tragan el impuesto ellos, cobrando menos. La elasticidad es, literalmente, la capacidad de esquivar: quien puede irse del mercado negocia mejor; quien está atrapado, paga.",
      "Esto tiene consecuencias que la discusión pública ignora sistemáticamente. Gravar 'a las empresas' no garantiza que paguen las empresas: si pueden trasladar a precios (demanda inelástica), pagan los consumidores; si el capital puede emigrar y el trabajo no, un impuesto al capital puede terminar cayendo sobre los salarios. Y lo mismo vale para los <b>subsidios</b>, que son impuestos al revés: el beneficio se lo queda el lado menos elástico, no el destinatario nominal — un subsidio a inquilinos con oferta fija de departamentos termina, en buena parte, en el bolsillo de los propietarios vía alquileres más altos."
    ],
    "example": {
      "title": "El impuesto al cigarrillo y el mito del 'que pague la tabacalera'",
      "body": "Cada suba de impuestos internos al cigarrillo se anuncia como un golpe a las tabacaleras. Miralo con elasticidades: la demanda de cigarrillos es de las más inelásticas que existen — adicción, pocos sustitutos —, mientras que la oferta es relativamente flexible. ¿Quién no puede escapar? El fumador. Resultado: las tabacaleras trasladan casi todo el impuesto al precio del atado, y la carga real cae sobre los consumidores. La recaudación es alta y estable justamente por eso. El papel dice 'lo paga la industria'; la góndola dice otra cosa."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Se crea un impuesto a los alquileres que legalmente deben pagar los propietarios. En una ciudad donde hay pocos departamentos, la oferta es casi fija y los inquilinos tienen alternativas (mudarse cerca, compartir, quedarse con los padres). ¿Quién soporta la mayor parte del impuesto?",
        "options": [
          "Los propietarios: su oferta es inelástica (no pueden 'sacar' los departamentos de existir) y los inquilinos sí pueden escapar",
          "Los inquilinos, porque los propietarios siempre trasladan a precio",
          "El Estado, que pierde recaudación",
          "Se reparte exactamente en mitades"
        ],
        "answer": 0,
        "explain": "La carga cae sobre el lado menos elástico. Acá la oferta es rígida (los departamentos ya existen y no tienen mejor uso) y la demanda tiene escapatorias. Si los dueños intentan trasladar el impuesto al alquiler, pierden inquilinos; terminan absorbiéndolo ellos vía menor renta neta. Que la ley diga 'lo pagan los propietarios' coincide acá con la realidad — pero por las elasticidades, no por la ley."
      },
      {
        "type": "open",
        "q": "Un país impone un impuesto por litro de nafta, cobrado en las estaciones de servicio. Sabiendo que la demanda de nafta es muy inelástica a corto plazo, ¿quién soporta la mayor parte del impuesto y por qué? ¿Cambiaría algo si el impuesto se les cobrara legalmente a los automovilistas?",
        "criterion": "Podés determinar quién soporta la mayor parte de un impuesto a partir de las elasticidades.",
        "model": "La soportan mayormente los consumidores: con demanda muy inelástica, siguen comprando casi lo mismo aunque el precio en el surtidor suba, así que las estaciones trasladan casi toda la cuña al precio. El lado que no puede escapar — el automovilista sin sustitutos a corto plazo — absorbe la carga. Y no cambiaría nada relevante si el impuesto se cobrara legalmente al consumidor: la incidencia económica depende de las elasticidades, no de qué lado del mostrador hace el pago. A largo plazo, con demanda más elástica (autos más eficientes, transporte público), parte de la carga volvería sobre los vendedores."
      }
    ],
    "takeaway": "Un impuesto lo paga de verdad quien no puede escapar: la incidencia la fijan las elasticidades, no la letra de la ley."
  },
  "mercado_laboral": {
    "id": "mercado_laboral",
    "hook": "Tu sueldo también es un precio: el precio de tu hora de trabajo. Y como todo precio, lo empujan la oferta y la demanda — aunque con particularidades que hacen a este mercado el más humano y el menos simple de todos.",
    "explanation": [
      "El <b>mercado laboral</b> se analiza con la caja de herramientas que ya tenés, con un giro: las empresas están del lado de la DEMANDA (compran horas de trabajo) y las personas del lado de la OFERTA (las venden). El 'precio' es el <b>salario</b>. Una empresa contrata razonando en el margen: suma un empleado más si lo que ese empleado agrega a la producción — su <b>productividad marginal</b>, valuada a precios de venta — supera lo que cuesta emplearlo. Por eso, a la larga, los salarios de una economía siguen a su productividad: no se puede pagar sostenidamente lo que el trabajo no produce.",
      "Los desplazamientos funcionan como en cualquier mercado. Sube la demanda de programadores (boom tecnológico, exportación de servicios): salario y empleo del rubro suben. Crece la oferta de una profesión saturada: su salario relativo cae. El <b>capital humano</b> — educación, experiencia, habilidades — explica gran parte de las diferencias salariales: no hay UN mercado de trabajo sino miles, y la prima por calificación es el precio relativo entre ellos.",
      "Ahora, las particularidades. El trabajo no es un commodity: hay <b>fricciones de búsqueda</b> (encontrar el match empleado-empresa lleva tiempo y ambos eligen a ciegas), <b>poder de negociación</b> desigual (sindicatos de un lado, empleadores concentrados del otro — en un pueblo con una sola fábrica, el empleador tiene poder de comprador único y puede pagar bajo la productividad), regulaciones (salario mínimo, indemnizaciones, cargas sociales) y contratos de largo plazo con salarios rígidos que no se ajustan como el precio del tomate. Por eso el salario real puede desviarse de la productividad marginal por períodos largos — y por eso este mercado puede quedar en desequilibrio persistente, cosa que en el mercado del tomate no pasa."
    ],
    "example": {
      "title": "Programadores en dólares, el sueldo que fijó el mundo",
      "body": "Hacia 2021, un programador argentino con tres años de experiencia podía triplicar su sueldo pasándose a trabajar remoto para una empresa del exterior. ¿Qué pasó? La pandemia globalizó la demanda de su trabajo: de golpe competían por él no solo las empresas locales sino las de todo el mundo — la curva de demanda de su hora se corrió violentamente a la derecha. Las empresas argentinas tuvieron que elegir: igualar (dolarizar sueldos, pagar 'en cripto', bonos) o resignarse a perder gente. Nada de eso lo decidió una paritaria: lo decidió el desplazamiento de una curva. Mientras tanto, profesiones con oferta abundante y demanda local estancada veían sus salarios reales planchados — mismo país, mercados laborales opuestos."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Una empresa vende cada unidad a $1.000. Un empleado adicional produciría 50 unidades al mes y costaría $600.000 mensuales (salario + cargas). ¿Le conviene contratarlo?",
        "options": [
          "Sí, porque todo empleado agrega producción",
          "No, porque $600.000 es un salario por encima del promedio del mercado",
          "No: el valor de lo que agrega (50 unidades × $1.000 = $50.000) es mucho menor que lo que cuesta emplearlo",
          "Sí, si el resto de los empleados produce más que él"
        ],
        "answer": 2,
        "explain": "La decisión es marginal: el empleado agrega 50 × $1.000 = $50.000 de producto por mes y cuesta $600.000 — pierde plata por donde lo mires. La comparación relevante es valor del producto marginal contra costo laboral total, no contra el promedio del mercado ni contra lo que producen otros."
      },
      {
        "type": "open",
        "q": "Aplicá oferta y demanda al mercado de trabajo de los camioneros: ¿qué determinaría su salario 'de libro'? Después explicá al menos dos razones por las que el salario real de los camioneros argentinos puede diferir de su productividad marginal.",
        "criterion": "Podés aplicar oferta y demanda al trabajo y explicar por qué el salario no siempre iguala la productividad marginal.",
        "model": "De libro: el salario equilibraría la demanda de horas de camión (que depende de cuánto valor agrega cada viaje: qué carga mueve, a qué precio) con la oferta de camioneros dispuestos a trabajar a cada salario. Los desvíos: primero, el sindicato de camioneros tiene un poder de negociación enorme (puede parar la distribución del país), lo que empuja el salario por encima de la productividad marginal de contratación; segundo, regulaciones y convenios rigidizan el salario, que no baja en recesiones como bajaría un precio de mercado; tercero, hay fricciones — un camionero de Salta no compite de verdad con un puesto en Bahía Blanca. El modelo básico da la tendencia de fondo; las instituciones explican los desvíos persistentes."
      }
    ],
    "takeaway": "El salario es el precio del trabajo y a la larga sigue a la productividad — pero sindicatos, regulaciones y fricciones pueden desviarlo por mucho tiempo."
  },
  "pib": {
    "id": "pib",
    "hook": "Un solo número pretende resumir todo lo que un país produjo en un año: cada empanada, cada tornillo, cada sesión de terapia. Es el número más citado de la economía — y el más malinterpretado.",
    "explanation": [
      "El <b>PIB</b> (Producto Interno Bruto) es el valor de mercado de todos los bienes y servicios FINALES producidos dentro de un país en un período. Cada palabra trabaja: 'finales' evita contar doble (se cuenta el pan, no el pan Y la harina Y el trigo que lleva dentro — o equivalentemente, se suma solo el <b>valor agregado</b> de cada etapa); 'producidos' excluye las transferencias y reventas (vender un depto usado no es producción; la comisión de la inmobiliaria, sí); 'dentro del país' lo distingue del producto de los nacionales en el exterior; 'en un período' lo hace un flujo, no un stock: el PIB no mide la riqueza acumulada de un país sino lo que produjo este año.",
      "Se puede medir por tres caminos que dan lo mismo: sumando todo lo producido (valor agregado), sumando todo lo gastado — la famosa <b>C + I + G + X − M</b>: consumo, inversión, gasto público y exportaciones netas — o sumando todos los ingresos (salarios, rentas, ganancias). Son la misma torta cortada de tres maneras: todo lo que se produce, alguien lo compra, y lo pagado es el ingreso de alguien. Detalle vital en países inflacionarios: el PIB <b>nominal</b> sube con solo remarcar precios; para saber si se produjo más, hay que mirar el PIB <b>real</b>, que descuenta la inflación. Y para comparar países o bienestar, dividir por la población: PIB per cápita.",
      "Ahora, lo que el PIB NO es. Deja afuera producción real: el trabajo doméstico no pago, el cuidado de los hijos, la economía informal (enorme en Argentina), el ocio. Cuenta como positivo cosas que empobrecen: reconstruir tras una inundación suma PIB; los embotellamientos suman nafta vendida. No dice nada de cómo se reparte, ni descuenta el desgaste ambiental. El PIB per cápita correlaciona fuerte con salud, educación y satisfacción — por eso importa — pero es un medidor de producción, no un veredicto de bienestar. Usarlo como única brújula es confundir el velocímetro con el destino."
    ],
    "example": {
      "title": "El PIB argentino y la trampa de lo nominal",
      "body": "En un año con 130% de inflación, el PIB nominal argentino puede 'crecer' 120% mientras el país produce MENOS que el año anterior: los precios subieron más de lo que la producción cayó. Por eso toda discusión seria usa PIB real. Segundo pliegue: convertido a dólares oficiales, el PIB argentino puede saltar o desplomarse 30% en un año solo porque se movió el tipo de cambio — sin que ninguna fábrica abriera ni cerrara. Y tercero: con un tercio de la economía en la informalidad, una parte de lo que el país realmente produce nunca entra en la estadística. El número más citado del país exige, acá más que en ningún lado, saber leerse."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Cuál de las siguientes transacciones suma al PIB argentino de este año?",
        "options": [
          "Una abuela cuida gratis a sus nietos todos los días",
          "El ANSES paga jubilaciones por $500.000 millones",
          "Una fábrica produce y vende $50 millones en heladeras fabricadas este año",
          "Una familia vende su casa construida en 1995 en 100.000 dólares"
        ],
        "answer": 2,
        "explain": "El PIB mide producción del período: las heladeras nuevas cuentan. La casa de 1995 ya se contó cuando se construyó (solo sumaría la comisión inmobiliaria actual); el cuidado no remunerado es producción real pero no pasa por el mercado y queda fuera de la medición; las jubilaciones son transferencias — mueven plata, no producen bienes ni servicios."
      },
      {
        "type": "open",
        "q": "Un político dice: 'nuestro PIB creció, así que la gente vive mejor'. Dá al menos tres razones por las que esa inferencia puede fallar — cosas que el PIB no capta o distorsiona.",
        "criterion": "Podés explicar qué incluye y qué deja afuera el PIB y por qué no equivale a bienestar.",
        "model": "Primero, puede ser crecimiento nominal o mal deflactado: con inflación, el número sube sin que se produzca más. Segundo, el PIB no dice nada de la distribución: puede crecer con todo el aumento concentrado en pocos. Tercero, omite producción que genera bienestar (trabajo doméstico, informalidad, ocio) y suma cosas que no lo generan (reconstrucción tras desastres, congestión). Cuarto, si creció la población más que el PIB, el per cápita cayó. El PIB mide producción de mercado, que se correlaciona con el bienestar pero no lo define."
      }
    ],
    "takeaway": "El PIB mide cuánto produce un país, no qué tan bien vive su gente — es un velocímetro excelente que muchos confunden con un GPS."
  },
  "inflacion": {
    "id": "inflacion",
    "hook": "El café que hace un año salía $X hoy sale $2X, y no es que el café haya mejorado. Cuando eso pasa con casi todo a la vez, se llama inflación.",
    "explanation": [
      "La <b>inflación</b> es la suba sostenida y generalizada del nivel de precios. La palabra clave es <i>generalizada</i>: si sube el tomate porque hubo sequía pero el resto está igual, eso es un cambio de <b>precio relativo</b>, no inflación. La inflación es cuando la plata en sí pierde valor y todo sube medido en esa plata.",
      "Se mide con índices como el IPC, que siguen el costo de una canasta representativa. Su efecto directo es erosionar el poder de compra: con el mismo billete comprás cada vez menos. Y cuando es alta o volátil, hace algo peor — vuelve imposible planificar, ahorrar o firmar contratos largos, porque nadie sabe cuánto valdrá la plata mañana.",
      "Conviene distinguir la tasa <b>nominal</b> (en pesos, sin ajustar) de la <b>real</b> (descontada la inflación). Un plazo fijo que rinde 100% anual con 120% de inflación te está haciendo perder: la tasa real es negativa. En economías inflacionarias, mirar solo lo nominal es engañarse."
    ],
    "example": {
      "title": "Vivir en pesos que se derriten",
      "body": "En una economía de inflación alta, como la argentina, la gente aprende a pensar en términos reales por instinto: mide en dólares o en poder de compra, no en pesos. Los precios se indexan, los contratos se acortan, y el ahorro huye de la moneda que pierde valor. Todo eso es la inflación haciendo su trabajo silencioso: no solo sube los números, distorsiona cada decisión económica."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Sube el precio de la carne 30% por una helada que mató ganado, pero el resto de los precios queda igual. ¿Es inflación?",
        "options": [
          "Sí, cualquier suba de precios es inflación",
          "No, es un cambio de precio relativo, no una suba generalizada",
          "Sí, porque la carne pesa en la canasta",
          "Depende de si sube el dólar"
        ],
        "answer": 1,
        "explain": "La inflación es una suba generalizada del nivel de precios. Una suba aislada de un bien por una causa puntual es un cambio de precio relativo: la plata no perdió valor frente a todo lo demás."
      },
      {
        "type": "open",
        "q": "Un plazo fijo te ofrece 90% anual. La inflación esperada es 100% anual. ¿Estás ganando o perdiendo poder de compra? ¿Por qué?",
        "criterion": "Podés distinguir un cambio de precios relativos de una inflación generalizada.",
        "model": "Estás perdiendo. La tasa nominal (90%) es menor que la inflación (100%), así que la tasa real es negativa: al vencimiento tu plata compra menos que hoy, aunque el número de pesos sea más grande."
      }
    ],
    "takeaway": "Inflación es que la plata pierde valor frente a todo — no que un precio suelto se movió."
  },
  "desempleo": {
    "id": "desempleo",
    "hook": "Un ingeniero que renunció para buscar algo mejor, un obrero textil cuya fábrica no compite más, y una moza despedida en plena recesión: los tres cuentan igual en la tasa de desempleo. Pero son tres problemas distintos, con tres remedios distintos.",
    "explanation": [
      "La <b>tasa de desempleo</b> mide la proporción de la población económicamente activa — los que trabajan o buscan trabajo — que busca y no encuentra. Ojo con los bordes de la definición: el que dejó de buscar por desánimo NO cuenta como desempleado (sale de la población activa, y la tasa puede 'mejorar' por pura frustración), y el que hace changas de dos horas cuenta como ocupado. Por eso la tasa se lee junto a la <b>tasa de actividad</b> y la subocupación — sola, puede mentir.",
      "Lo conceptualmente importante es descomponer el desempleo en tres tipos. El <b>friccional</b> es el de los 'entre trabajos': gente cambiando de empleo, recién graduados buscando el primero. Es inevitable y hasta sano — refleja un mercado donde la gente busca mejores matches — y existe incluso en pleno auge. El <b>estructural</b> es el desajuste profundo entre lo que los trabajadores saben hacer (o dónde están) y lo que la economía demanda: el obrero textil desplazado por la importación, oficios que la tecnología volvió obsoletos, regiones cuyo empleo se fue. No se cura con crecimiento general: exige recapacitación, movilidad, tiempo. También entran aquí las rigideces institucionales que impiden que el mercado laboral se vacíe.",
      "El <b>cíclico</b> es el hijo de la recesión: cae la demanda agregada, las empresas venden menos, suspenden y despiden. Se distingue porque golpea a todos los sectores a la vez y se revierte cuando la economía se recupera — su remedio es macroeconómico, no individual. La suma de friccional y estructural define la <b>tasa natural</b> de desempleo: el nivel al que la economía tiende incluso funcionando bien. Distinguir los tres tipos no es taxonomía por deporte: es lo que separa 'hay que reactivar la economía' de 'hay que reentrenar a esta gente' — diagnósticos que, confundidos, desperdician años y fortunas."
    ],
    "example": {
      "title": "Tres desempleados en la misma cola",
      "body": "En una oficina de empleo coinciden tres personas. Julieta, desarrolladora, renunció hace tres semanas y está eligiendo entre ofertas: desempleo friccional — su paso por la estadística será corto y terminará en un trabajo mejor. Roberto, 52 años, operario de una textil de Luján que cerró cuando se abarataron las importaciones: desempleo estructural — su oficio vale menos en esta economía, y sin reconversión puede quedar afuera años, aunque el PIB crezca. Carla, moza, despedida porque la recesión vació los restaurantes: desempleo cíclico — cuando la actividad repunte, la reincorporan. Una misma tasa los promedia; una buena política los distingue."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Una economía crece con fuerza hace tres años, pero el desempleo se estanca en 9% porque las industrias que crecen (software, agro tecnificado) no encuentran gente calificada, mientras sobran trabajadores de oficios en declive. ¿Qué tipo de desempleo domina?",
        "options": [
          "Estacional: depende de la época del año",
          "Friccional: la gente está entre trabajos",
          "Estructural: hay desajuste entre las calificaciones de la gente y las que demanda la economía",
          "Cíclico: falta demanda agregada"
        ],
        "answer": 2,
        "explain": "El crecimiento sostenido descarta lo cíclico (la demanda está), y la persistencia descarta lo friccional (que es breve por naturaleza). Vacantes sin cubrir conviviendo con desempleados es la firma del desempleo estructural: el problema no es cuánto trabajo hay sino el desajuste entre lo que se ofrece y lo que se sabe hacer."
      },
      {
        "type": "open",
        "q": "Definí desempleo friccional, estructural y cíclico, y explicá por qué el remedio de uno no funciona para los otros: ¿qué pasa si se ataca desempleo estructural con estímulo a la demanda?",
        "criterion": "Podés distinguir desempleo friccional, estructural y cíclico.",
        "model": "Friccional: el de transición entre empleos o hacia el primer empleo; breve, inevitable, casi sano. Estructural: desajuste durable entre las habilidades o ubicación de los trabajadores y lo que demanda la economía; persiste aunque haya crecimiento. Cíclico: el causado por recesiones, cae demanda y caen los puestos en todos los sectores; se revierte con la recuperación. Si se ataca desempleo estructural con estímulo de demanda, las empresas de los sectores dinámicos no encuentran a quién contratar — el desempleado textil no se convierte en programador por más pesos que circulen —: se genera presión inflacionaria sin bajar el desempleo de fondo. Lo estructural pide recapacitación y movilidad, no más gasto."
      }
    ],
    "takeaway": "Friccional se cura solo, cíclico se cura con reactivación, estructural se cura con reconversión — y confundirlos es recetar el remedio equivocado."
  },
  "ciclo_economico": {
    "id": "ciclo_economico",
    "hook": "La economía respira: años de expansión donde sobra el trabajo, años de recesión donde falta todo. No es una línea recta con ruido — es una onda, y saber en qué parte de la onda estás parado cambia todas las decisiones.",
    "explanation": [
      "El <b>ciclo económico</b> es la alternancia de expansiones y contracciones de la actividad alrededor de su tendencia de largo plazo. Sus fases: la <b>expansión</b> (el PIB crece, el empleo sube), el <b>pico</b> (la economía funciona al límite de su capacidad), la <b>recesión</b> (caída de la actividad — la convención práctica: dos trimestres seguidos de PIB en baja), el <b>valle</b> o piso, y la <b>recuperación</b>. Es irregular: ni la duración ni la profundidad de cada fase se repiten, lo que lo vuelve tan difícil de predecir.",
      "Las variables macro bailan juntas y eso permite ubicarse. En la expansión: crece el PIB, cae el desempleo (el cíclico, precisamente), y si la economía se acerca a su capacidad plena, la inflación tiende a acelerar — mucha demanda persiguiendo una oferta que ya no puede estirarse. En la recesión, el espejo: cae el producto, sube el desempleo, la presión inflacionaria de demanda afloja. Algunas variables <b>anticipan</b> el ciclo (la construcción, la inversión, la confianza), otras lo confirman tarde (el empleo suele ser de los últimos en caer y en recuperarse).",
      "¿Por qué existe el ciclo? Los <b>shocks</b> — de demanda (crisis de confianza, frenazo del crédito, ajuste fiscal) o de oferta (sequía, salto del petróleo) — golpean una economía que los amplifica: la inversión es volátil y contagiosa, el consumo se retrae con el miedo, el crédito se corta justo cuando más se necesita. Diagnóstico práctico: mirá crecimiento, empleo e inflación JUNTOS. Crecimiento alto + desempleo bajando + inflación acelerando = expansión madura, cerca del pico. Caída de PIB + desempleo subiendo + inflación cediendo = recesión de demanda. Y si el PIB cae PERO la inflación sube, sospechá shock de oferta — el cuadro más incómodo, como verás al estudiar estanflación."
    ],
    "example": {
      "title": "El serrucho argentino",
      "body": "La economía argentina es un electrocardiograma agitado: en las últimas décadas alternó expansiones al 8% con derrumbes al -10% (2002, 2020) con una frecuencia que en países estables sería inconcebible — el famoso 'stop and go'. El patrón típico: expansión tirada por consumo, el pico coincide con atraso cambiario y escasez de dólares, ajuste o devaluación mediante llega la recesión con inflación (el cuadro incómodo), y vuelta a empezar. Para una empresa local, ubicarse en el ciclo no es hobby de economistas: decide si conviene stockearse, tomar deuda, contratar o aguantar. En Argentina, el ciclo es tan violento que leerlo mal puede costar el negocio."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Un país muestra: PIB creciendo al 5% anual, desempleo en mínimos históricos, inflación acelerando y empresas reportando dificultad para conseguir trabajadores e insumos. ¿En qué fase del ciclo está?",
        "options": [
          "Recuperación temprana: sobra capacidad ociosa",
          "Valle: está por empezar a recuperarse",
          "Expansión madura, cerca del pico: la economía opera al límite de su capacidad",
          "Recesión: la inflación indica crisis"
        ],
        "answer": 2,
        "explain": "Crecimiento fuerte con desempleo mínimo, cuellos de botella e inflación acelerando es el cuadro de una economía recalentada, operando al tope de su capacidad: expansión madura. La recuperación temprana luce distinto — crecimiento con capacidad ociosa y sin presión de precios."
      },
      {
        "type": "open",
        "q": "Te muestran datos de una economía: el PIB cayó 2% en el último año, el desempleo subió del 7% al 10%, y la inflación bajó del 6% al 2% anual. ¿Dónde está esta economía en el ciclo y qué tipo de shock parece haberla golpeado? Justificá con las tres variables.",
        "criterion": "Podés ubicar dónde está una economía en el ciclo a partir de crecimiento, empleo e inflación.",
        "model": "Está en recesión: el PIB cae y el desempleo sube — desempleo cíclico clásico. Que la inflación baje al mismo tiempo indica un shock de DEMANDA: la gente y las empresas gastan menos, lo que a la vez contrae la actividad y afloja la presión sobre los precios. (Si fuera un shock de oferta, veríamos caída del PIB CON inflación en alza.) El cuadro completo: recesión de demanda, probablemente entre el inicio de la contracción y el valle."
      }
    ],
    "takeaway": "La economía se lee con tres agujas a la vez — crecimiento, empleo e inflación —: juntas dicen en qué fase del ciclo estás y qué shock te golpeó."
  },
  "oferta_demanda_agregada": {
    "id": "oferta_demanda_agregada",
    "hook": "¿Se puede aplicar la lógica de oferta y demanda no ya al tomate, sino a TODA la economía junta? Se puede — y ese único gráfico ordena casi todos los debates macro: por qué las recesiones, por qué la inflación, y por qué a veces vienen juntas.",
    "explanation": [
      "El modelo <b>OA-DA</b> traslada la intuición micro al plano macro: en el eje vertical no va el precio de un bien sino el <b>nivel general de precios</b>, y en el horizontal no va una cantidad sino el <b>producto total</b> (el PIB real). La <b>demanda agregada</b> (DA) suma todo el gasto planeado de la economía — consumo, inversión, gasto público, exportaciones netas — y tiene pendiente negativa: con precios más altos, el dinero y la riqueza compran menos, las tasas tienden a subir y lo local pierde competitividad, así que se gasta menos en total.",
      "La <b>oferta agregada</b> (OA) tiene un matiz crucial: su forma depende del plazo. A corto plazo es creciente — con salarios y muchos precios contratados de antemano (rígidos), un nivel de precios más alto mejora márgenes y las empresas producen más. A largo plazo es <b>vertical</b>: la capacidad productiva de un país la fijan su trabajo, su capital y su tecnología, no el nivel de precios — imprimir más billetes no fabrica más máquinas. Esta verticalidad de largo plazo es de las ideas más importantes de toda la macro: la demanda mueve el producto solo transitoriamente; el nivel de vida sostenible lo fija la oferta.",
      "Con el aparato armado, todo shock se clasifica en dos familias. <b>Shock de demanda</b>: algo mueve el gasto total (pánico o euforia, crédito, política fiscal o monetaria). DA a la izquierda: cae el producto Y bajan las presiones de precios — recesión desinflacionaria; DA a la derecha: más producto y más inflación. Precios y producto se mueven JUNTOS. <b>Shock de oferta</b>: algo cambia los costos de producir en toda la economía (petróleo, sequía, devaluación que encarece insumos). OA a la izquierda: cae el producto Y sube la inflación a la vez — el temido escenario estanflacionario. Precios y producto se mueven EN CONTRA. Esta distinción no es académica: define qué puede hacer la política — un shock de demanda se puede compensar estimulando o enfriando; ante uno de oferta, estimular la demanda solo agrega inflación al estancamiento."
    ],
    "example": {
      "title": "2020 y una devaluación: los dos shocks en carne propia",
      "body": "La cuarentena de 2020 fue un shock de demanda (con componentes de oferta): el gasto se derrumbó — nadie salía, nadie invertía — y el PIB argentino cayó cerca de 10% mientras la inflación, notablemente, se desaceleró ese año: DA a la izquierda, producto y precios cayendo juntos. Una devaluación brusca es el shock opuesto en tipo: encarece de golpe insumos importados, energía y todo lo transable — OA de corto plazo a la izquierda —: los precios saltan Y la actividad se resiente al mismo tiempo. Dos crisis, dos firmas distintas en los datos: la primera bajó la inflación, la segunda la disparó. El modelo OA-DA es lo que permite no meterlas en la misma bolsa."
    },
    "check": [
      {
        "type": "mcq",
        "q": "El precio internacional de la energía se triplica y encarece los costos de producción de casi todos los sectores. Según el modelo OA-DA, ¿qué se espera a corto plazo?",
        "options": [
          "Sube el producto y sube la inflación",
          "No cambia nada, porque la energía es solo un insumo",
          "Cae el producto y baja la inflación",
          "Cae el producto y sube la inflación: la oferta agregada se desplazó a la izquierda"
        ],
        "answer": 3,
        "explain": "Es un shock de oferta negativo: producir cualquier cosa se volvió más caro, así que la OA de corto plazo se corre a la izquierda. El nuevo equilibrio tiene menos producto Y más nivel de precios — estancamiento con inflación. La firma que lo delata: producto y precios moviéndose en direcciones opuestas."
      },
      {
        "type": "open",
        "q": "Una crisis de confianza hace que familias y empresas pospongan consumo e inversión. Analizalo con OA-DA: qué curva se mueve, hacia dónde, qué pasa con producto y precios — y por qué en este caso un estímulo de demanda (fiscal o monetario) tiene sentido, a diferencia de un shock de oferta.",
        "criterion": "Podés analizar un shock (de demanda o de oferta) con el modelo OA-DA y anticipar su efecto sobre precios y producto.",
        "model": "Se desplaza la demanda agregada hacia la izquierda: a cada nivel de precios se gasta menos. Sobre la OA de corto plazo, el nuevo equilibrio tiene menos producto y menores presiones de precios — recesión con desinflación. Un estímulo (bajar tasas, más gasto) tiene sentido porque empuja la DA de vuelta a la derecha: recupera producto y a lo sumo devuelve los precios adonde estaban — está compensando exactamente lo que faltó, gasto. Ante un shock de oferta, en cambio, el problema no es falta de gasto sino de capacidad: estimular la DA recompone algo de producto pero al precio de más inflación sobre la que ya causó el shock."
      }
    ],
    "takeaway": "Si producto y precios caen juntos, falló la demanda; si el producto cae mientras los precios suben, falló la oferta — y cada diagnóstico pide una medicina opuesta."
  },
  "dinero_bancos": {
    "id": "dinero_bancos",
    "hook": "Depositás $100.000 en el banco y seguís teniendo $100.000, obvio. Pero el banco le presta $90.000 de eso a otra persona, que ahora también los tiene. ¿Magia? No: así se crea la mayor parte del dinero que existe.",
    "explanation": [
      "El <b>dinero</b> es cualquier cosa que una sociedad acepta generalizadamente para tres funciones: <b>medio de pago</b> (con él comprás sin necesitar el trueque), <b>unidad de cuenta</b> (en él se expresan los precios) y <b>reserva de valor</b> (te permite trasladar poder de compra al futuro). No necesita valor intrínseco: el peso y el dólar son dinero <b>fiduciario</b> — valen por la confianza y la convención, no porque estén respaldados en oro. Cuando la inflación es alta, la moneda pierde primero la función de reserva (nadie ahorra en ella), luego la de unidad de cuenta (los precios se piensan en dólares) — es la enfermedad monetaria vista desde las funciones.",
      "Ahora lo contraintuitivo: la mayor parte del dinero NO son billetes — son depósitos bancarios, y los crean los bancos al prestar. El mecanismo es el sistema de <b>encaje fraccionario</b>: los bancos saben que los depositantes no retiran todos a la vez, así que guardan como <b>reservas</b> solo una fracción de los depósitos (el encaje) y prestan el resto. Depositás $100.000; con un encaje del 10%, el banco guarda $10.000 y presta $90.000. El que recibe el préstamo lo gasta, el vendedor lo deposita en otro banco, que guarda $9.000 y presta $81.000... Al final de la cadena, tus $100.000 originales sostienen mucho más que $100.000 en depósitos totales. El dinero se <b>multiplicó</b>: cada peso de reservas respalda varios pesos de depósitos.",
      "Este sistema es productivo — canaliza ahorro hacia crédito e inversión — y estructuralmente frágil a la vez: los depósitos son exigibles YA, pero están prestados a plazo. Si todos los depositantes quieren su plata al mismo tiempo, no está: es la <b>corrida bancaria</b>, y puede voltear a un banco solvente por pura profecía autocumplida — el rumor de que el banco cae hace que todos corran, y la corrida lo hace caer. Por eso existen el seguro de depósitos, la regulación bancaria y el banco central como prestamista de última instancia. Y por eso, también, quien controla las reservas y el encaje tiene una palanca sobre la cantidad total de dinero — la puerta a la política monetaria que viene en la próxima lección."
    ],
    "example": {
      "title": "El corralito, o el día que el multiplicador funcionó al revés",
      "body": "Argentina, 2001: los depositantes, oliendo el fin de la convertibilidad, corrieron a sacar sus depósitos. Pero esa plata no estaba en las bóvedas — estaba prestada, como en todo sistema de encaje fraccionario. Ningún sistema bancario del mundo sobrevive a que todos retiren a la vez. El gobierno congeló los retiros: el corralito. La lección quedó grabada a fuego en la memoria argentina, y explica conductas que duran hasta hoy: la desconfianza en los bancos, el ahorro en dólares 'en el colchón', los plazos fijos cortos. El mecanismo que multiplica el dinero cuando hay confianza lo destruye — con la misma matemática — cuando la confianza se va."
    },
    "check": [
      {
        "type": "mcq",
        "q": "En un sistema con encaje del 20%, alguien deposita $1.000.000 en efectivo en un banco. ¿Cuánto puede prestar ese banco de inmediato, y qué pasa con la cantidad total de dinero cuando el préstamo se gasta y se vuelve a depositar en otro banco?",
        "options": [
          "Puede prestar $200.000 y el dinero total baja",
          "No puede prestar nada hasta tener autorización del banco central",
          "Puede prestar $800.000, y si la cadena continúa, los depósitos totales del sistema superan largamente el millón inicial",
          "Puede prestar $1.000.000 y el dinero total no cambia"
        ],
        "answer": 2,
        "explain": "Con encaje del 20%, guarda $200.000 y presta $800.000. Ese préstamo, gastado y redepositado, habilita al siguiente banco a prestar $640.000, y así sigue: la suma de depósitos del sistema se multiplica muy por encima del millón original. Cada peso de reservas sostiene varios pesos de dinero bancario."
      },
      {
        "type": "open",
        "q": "Explicá con tus palabras cómo un sistema bancario de encaje fraccionario crea dinero a partir de un depósito inicial, y por qué ese mismo mecanismo hace a los bancos vulnerables a las corridas.",
        "criterion": "Podés explicar cómo el sistema bancario crea dinero a partir de reservas.",
        "model": "El banco recibe un depósito, guarda solo una fracción como reserva y presta el resto. El prestatario gasta, el receptor deposita en otro banco, que repite: guarda la fracción, presta el resto. Al final, sobre las reservas originales se apila una cantidad de depósitos varias veces mayor — dinero nuevo creado por el crédito, porque el depositante original Y los que recibieron préstamos cuentan con 'su' plata a la vez. La vulnerabilidad es la contracara exacta: los depósitos son exigibles al instante pero están prestados a plazo; si todos retiran juntos, la plata no está — y el miedo a que no esté alcanza para desatar la corrida que lo confirma."
      }
    ],
    "takeaway": "La mayor parte del dinero no se imprime: se presta a existencia — y el sistema que lo multiplica con confianza lo evapora con pánico."
  },
  "tasas_interes": {
    "id": "tasas_interes",
    "hook": "Un plazo fijo al 40% anual puede ser un negoción o una estafa a vos mismo — el mismo número, según qué inflación tenga al lado. La tasa que ves nunca es la tasa que importa.",
    "explanation": [
      "La <b>tasa de interés</b> es el precio del dinero en el tiempo: lo que cobra quien presta por desprenderse de su plata hoy, y lo que paga quien la quiere ya. Como todo precio, coordina dos lados: premia al que ahorra (posterga consumo) y le cobra al que invierte o se endeuda (adelanta consumo). Tasas altas hacen más atractivo ahorrar y más caros los proyectos financiados con crédito; tasas bajas, lo contrario. Por eso son la palanca macroeconómica por excelencia: moviendo una tasa se inclina la balanza entre gastar hoy y gastar mañana en toda la economía.",
      "La distinción vital: la tasa <b>nominal</b> es el número del contrato — cuántos pesos más recibís. La tasa <b>real</b> es lo que ganás en poder de compra: aproximadamente, la nominal menos la inflación. Un plazo fijo al 40% anual con inflación del 25% rinde un 15% real: ganaste de verdad. El mismo 40% con inflación del 60% es un -20% real: cada peso al vencimiento compra menos que hoy, aunque el número de pesos sea mayor. La tasa nominal mide pesos; la real mide poder de compra — y las decisiones sensatas se toman en poder de compra.",
      "Por eso la tasa real es la que guía la conducta: nadie posterga consumo por ver crecer un número que corre detrás de los precios, y ningún proyecto de inversión se evalúa contra la tasa nominal sin descontar la inflación esperada. Detalle fino: como la inflación futura no se conoce, lo que importa para decidir es la tasa real <b>esperada</b> — nominal pactada menos inflación esperada. Cuando la inflación sorprende al alza, transfiere riqueza silenciosamente de acreedores a deudores: los que debían pesos los devuelven desvalorizados. Media historia financiera argentina es esa transferencia, repetida."
    ],
    "example": {
      "title": "Plazo fijo contra inflación: la carrera argentina",
      "body": "Durante años, el ahorrista argentino enfrentó plazos fijos con tasas nominales espectaculares — 30%, 70%, 100% anual — que perdían contra la inflación: tasa real negativa. El resultado conductual fue inmediato y masivo: la gente huyó del peso hacia el dólar, el ladrillo o el consumo adelantado ('comprá ahora que después está más caro'). Cuando la tasa real se vuelve positiva — la nominal supera con claridad a la inflación esperada —, la conducta gira: aparece el 'carry trade', renace el plazo fijo, se posterga consumo. Nadie en el país mira la tasa nominal sola: la resta contra la inflación es reflejo nacional. Eso es, exactamente, entender que la real es la que decide."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Un banco ofrece plazo fijo al 55% anual. La inflación esperada para el año es 45%. ¿Cuál es la tasa real aproximada y qué te dice?",
        "options": [
          "-10%: perdés contra la inflación",
          "100%: se suman las dos",
          "55%: es lo que vas a ganar",
          "Aproximadamente 10%: tu poder de compra crecería ese porcentaje"
        ],
        "answer": 3,
        "explain": "La tasa real aproximada es la nominal menos la inflación esperada: 55% − 45% ≈ 10%. Ese 10% es el crecimiento de tu poder de compra — lo único que debería importarte. El 55% solo dice cuántos pesos más vas a tener, no cuánto más vas a poder comprar."
      },
      {
        "type": "open",
        "q": "Una empresa evalúa tomar un crédito al 80% nominal anual para ampliar su planta, en una economía con inflación esperada del 90%. Su director financiero dice que la tasa es 'impagable'. ¿Qué le contestarías y por qué?",
        "criterion": "Podés diferenciar tasa nominal de real y explicar por qué la real es la que guía decisiones.",
        "model": "Que mire la tasa real, no la nominal: con inflación esperada del 90%, un crédito al 80% nominal tiene tasa real negativa (≈ -10%). Si los precios de lo que la empresa vende acompañan la inflación, va a devolver el préstamo en pesos que valen menos de lo que recibió: endeudarse así es, en términos reales, cobrar por endeudarse. La tasa nominal 'alta' es una ilusión óptica; la decisión de invertir debe compararse contra la tasa real esperada, y acá juega a favor."
      }
    ],
    "takeaway": "La tasa nominal cuenta pesos; la real cuenta poder de compra — y toda decisión que importe se toma con la segunda."
  },
  "banco_central": {
    "id": "banco_central",
    "hook": "Hay una oficina en cada país donde un puñado de gente decide el precio del dinero de todos los demás. Cuando lo hace bien, ni te enterás de que existe. Cuando lo hace mal, no podés pensar en otra cosa.",
    "explanation": [
      "El <b>banco central</b> es la institución que administra la moneda de un país: emite los billetes, regula a los bancos, actúa como su prestamista de última instancia y — su tarea estelar — conduce la <b>política monetaria</b>. Su mandato típico es la estabilidad de precios (a menudo junto con el empleo o la actividad), y su herramienta central es la <b>tasa de interés de referencia</b>: la tasa a la que presta o remunera a los bancos, que se propaga al resto — plazos fijos, créditos, hipotecas.",
      "El mecanismo de transmisión funciona en cadena. ¿Inflación alta? El banco central SUBE la tasa: el crédito se encarece, ahorrar rinde más, familias y empresas postergan consumo e inversión, la demanda agregada se enfría y la presión sobre los precios cede. ¿Recesión con inflación controlada? BAJA la tasa: crédito barato, ahorro poco atractivo, más gasto, más actividad. Es la palanca sobre la disyuntiva gastar-hoy versus gastar-mañana, aplicada a toda la economía. Complementos: operaciones de mercado abierto (comprar o vender títulos para regular la liquidez), encajes, y en crisis, medidas extraordinarias. La contra: opera con rezagos largos — la suba de tasa de hoy muerde la inflación muchos meses después — y por eso exige anticipación, no reacción.",
      "Dos claves finales. Primera: buena parte del poder del banco central es <b>credibilidad</b> — si la gente le cree que la inflación va a bajar, pacta precios y salarios en consecuencia, y la inflación baja con menos costo; si no le cree, cada anuncio es papel mojado. Segunda: la <b>independencia</b> del poder político importa por los incentivos — los gobiernos tienen horizonte electoral y siempre prefieren la tasa baja y la emisión fácil HOY, aunque el costo inflacionario llegue mañana. Un banco central capturado termina financiando al fisco (la dominancia fiscal que ya conocés de la hiperinflación); uno independiente puede decir que no. La evidencia internacional es contundente: países con bancos centrales más independientes tienen, sistemáticamente, menos inflación."
    ],
    "example": {
      "title": "Dos bancos centrales, dos películas",
      "body": "La Reserva Federal de EE.UU. sube su tasa de 0% a 5% entre 2022 y 2023 para frenar una inflación del 9% — la más alta en cuarenta años. El crédito hipotecario se encarece, la demanda se enfría, y la inflación baja al 3% sin catástrofe: la palanca funcionó, ayudada por décadas de credibilidad. El BCRA de las últimas décadas es la otra película: obligado una y otra vez a emitir para financiar déficits fiscales, con tasas reales negativas y metas incumplidas, fue perdiendo la credibilidad — y sin ella, sus anuncios dejaron de mover expectativas. Misma herramienta, mismo manual: lo que cambió es si la institución podía decir que no, y si alguien le creía."
    },
    "check": [
      {
        "type": "mcq",
        "q": "La inflación se acelera por exceso de demanda. ¿Cuál es la respuesta de manual del banco central y por qué canal opera?",
        "options": [
          "Congelar los precios de la canasta básica",
          "Bajar la tasa para que la gente pueda afrontar los precios más altos",
          "Emitir más dinero para que no falte liquidez",
          "Subir la tasa de referencia: encarece el crédito, premia el ahorro y enfría el gasto, aliviando la presión sobre los precios"
        ],
        "answer": 3,
        "explain": "Contra inflación de demanda, el manual indica subir la tasa: el crédito caro y el ahorro atractivo reducen consumo e inversión, la demanda agregada se contrae y la presión inflacionaria cede. Bajar la tasa o emitir echaría nafta al fuego; congelar precios no toca la causa."
      },
      {
        "type": "open",
        "q": "Explicá la cadena completa por la cual una suba de la tasa de interés del banco central termina bajando la inflación, y mencioná por qué la credibilidad de la institución hace ese proceso más barato o más caro en términos de actividad.",
        "criterion": "Podés explicar cómo el banco central usa la tasa de interés para influir sobre inflación y actividad.",
        "model": "El banco central sube su tasa de referencia; los bancos trasladan esa suba a créditos y depósitos; con crédito más caro y ahorro mejor pago, familias y empresas postergan consumo e inversión; la demanda agregada se enfría; con menos gasto persiguiendo los mismos bienes, la presión sobre los precios cede — con rezago de meses. La credibilidad define el costo: si la gente cree en la baja de inflación, ajusta expectativas, paritarias y precios hacia abajo por anticipado, y la desinflación requiere menos recesión. Si no le cree, todos siguen remarcando 'por las dudas' y el banco central debe enfriar mucho más la economía para lograr lo mismo."
      }
    ],
    "takeaway": "El banco central maneja el precio de gastar hoy versus mañana — y su activo más valioso no es la tasa: es que le crean."
  },
  "politica_fiscal": {
    "id": "politica_fiscal",
    "hook": "Cada presupuesto nacional es un experimento macroeconómico: cuánto gasta el Estado, cuánto recauda, y quién financia la diferencia. En esa resta — el déficit — se juega media historia económica argentina.",
    "explanation": [
      "La <b>política fiscal</b> es el uso del gasto público y los impuestos para influir sobre la economía. El canal es directo: el gasto del Estado ES parte de la demanda agregada (la G de C+I+G+XN), y los impuestos determinan cuánto ingreso les queda a familias y empresas para consumir e invertir. Más gasto o menos impuestos empujan la demanda — política <b>expansiva</b>; lo contrario la enfría — <b>contractiva</b>. Sobre esto opera el <b>multiplicador</b>: un peso de gasto público se convierte en ingreso de alguien, que gasta una parte, que se vuelve ingreso de otro... el efecto total puede superar el peso inicial. Cuánto lo supere es de las peleas empíricas más viejas de la macro: el multiplicador es mayor con capacidad ociosa y economías cerradas, y menor — incluso menor que uno — cuando la economía está a pleno o el gasto se filtra a importaciones, o cuando el gasto público desplaza inversión privada al subir tasas (el <b>crowding out</b>).",
      "Cuando el gasto supera los ingresos hay <b>déficit fiscal</b>, y se financia de tres maneras, cada una con su factura: <b>deuda</b> (se paga con intereses, y el stock acumulado condiciona el futuro), <b>emisión monetaria</b> (el camino directo a la inflación, como ya viste con la dominancia fiscal), o más <b>impuestos</b> futuros. La pregunta de sostenibilidad no es si hay deuda sino su trayectoria: una deuda es sostenible si no crece sin límite respecto de la capacidad de pago — el PIB. La aritmética clave: si la tasa de interés real que pagás supera al crecimiento de la economía, la deuda tiene rueda propia — necesitás superávit primario solo para que no crezca; si crecés más de lo que pagás de tasa, hay aire.",
      "El costado político es inseparable: la política fiscal la deciden gobiernos con horizonte electoral, y el sesgo es sistemático — expandir es popular, ajustar no; el resultado histórico es el <b>sesgo deficitario</b>: déficits en las malas que no se compensan con superávits en las buenas. Además, a diferencia de la política monetaria (un comité, una tasa, hoy), la fiscal es lenta: pasa por presupuestos, congresos e implementación — cuando el estímulo llega, a veces la recesión ya pasó. La versión elegante son los <b>estabilizadores automáticos</b>: seguros de desempleo e impuestos proporcionales que expanden y contraen solos, sin que nadie vote nada, amortiguando el ciclo sin discrecionalidad."
    ],
    "example": {
      "title": "El déficit argentino: la cuenta que siempre vuelve",
      "body": "Argentina acumuló décadas de déficits fiscales casi ininterrumpidos, y probó todos los financiamientos del menú: deuda externa hasta el default (2001), emisión hasta la inflación de tres dígitos (2023), impuestos hasta tener de los sistemas más gravosos de la región — y aún así, déficit. La aritmética de sostenibilidad se encargó del resto: con crecimiento cero por década y tasas reales altísimas (nadie le presta barato a quien defaulteó), cualquier deuda se vuelve bola de nieve. La lección no es partidaria sino contable: el déficit es la única variable macro que, tarde o temprano, se cobra con deuda impagable, inflación o ajuste — y usualmente con las tres."
    },
    "check": [
      {
        "type": "mcq",
        "q": "En una recesión profunda con mucha capacidad ociosa, el gobierno lanza un plan de obra pública financiado con deuda. ¿Cuál es el efecto esperado según el análisis estándar?",
        "options": [
          "Ninguno: el gasto público nunca afecta la actividad",
          "Hiperinflación inmediata por el aumento del gasto",
          "El PIB baja porque la deuda desplaza toda la inversión privada",
          "La demanda agregada sube, y con capacidad ociosa el multiplicador tiende a ser mayor, con poco riesgo inflacionario inmediato"
        ],
        "answer": 3,
        "explain": "Con recursos ociosos, el gasto público activa capacidad parada: el multiplicador opera con más fuerza y la presión inflacionaria es baja porque la oferta puede responder. El crowding out es débil cuando la inversión privada está deprimida de todos modos. El mismo plan en una economía a pleno tendría el efecto opuesto: más inflación que producto."
      },
      {
        "type": "open",
        "q": "Explicá por qué una suba de impuestos enfría la demanda agregada, y después definí qué hace 'sostenible' a un déficit: ¿qué relación entre tasa de interés y crecimiento del PIB marca la diferencia?",
        "criterion": "Podés explicar cómo gasto e impuestos afectan la demanda agregada y qué es un déficit sostenible.",
        "model": "Más impuestos dejan menos ingreso disponible en manos de familias y empresas: cae el consumo y la inversión, y con ellos la demanda agregada — el Estado absorbe poder de compra que el sector privado ya no gasta. Sobre la sostenibilidad: un déficit es sostenible si la deuda que lo financia no crece sin límite en relación al PIB. La clave es comparar la tasa de interés real de la deuda con el crecimiento de la economía: si la tasa supera al crecimiento, los intereses agrandan la deuda más rápido de lo que crece la capacidad de pagarla, y se necesita superávit primario permanente para estabilizarla; si el crecimiento supera a la tasa, la economía 'licúa' la deuda y hay margen."
      }
    ],
    "takeaway": "El gasto y los impuestos mueven la demanda hoy, pero el déficit es una promesa sobre el mañana — y se paga con deuda, inflación o ajuste."
  },
  "is_lm": {
    "id": "is_lm",
    "hook": "La política fiscal mueve el gasto, la monetaria mueve la tasa — pero en la economía real las dos se pisan, se refuerzan y se sabotean entre sí. Hay un gráfico de dos curvas que ordena ese enredo, y hace 90 años que los economistas lo dibujan en servilletas.",
    "explanation": [
      "El modelo <b>IS-LM</b> junta en un solo gráfico los dos mercados que venís estudiando por separado: el de bienes y el de dinero. Ejes: la tasa de interés (vertical) y el producto (horizontal). La curva <b>IS</b> (inversión-ahorro) representa el mercado de bienes: tiene pendiente negativa porque a menor tasa, el crédito barato estimula inversión y consumo, y el gasto total — con multiplicador incluido — sostiene un producto mayor. Todo lo fiscal vive acá: más gasto público o menos impuestos desplazan la IS entera a la derecha.",
      "La curva <b>LM</b> (liquidez-dinero) representa el mercado de dinero: tiene pendiente positiva porque cuando el producto crece, se demanda más dinero para transacciones, y — con una cantidad de dinero dada — esa mayor demanda presiona la tasa hacia arriba. Todo lo monetario vive acá: si el banco central expande el dinero (o baja su tasa de referencia), la LM se desplaza a la derecha/abajo. El cruce de ambas curvas es el único par tasa-producto donde el mercado de bienes Y el de dinero están simultáneamente en equilibrio — la foto de la economía a corto plazo.",
      "La gracia está en mover las curvas y leer las interacciones. Expansión fiscal sola: IS a la derecha — el producto sube, pero la tasa TAMBIÉN sube (más actividad demanda más dinero), y esa tasa más alta ahoga algo de inversión privada: el crowding out, visible en el gráfico. Expansión monetaria sola: LM abajo — baja la tasa, sube el producto. ¿Y juntas? Expansión fiscal CON acompañamiento monetario: el producto sube fuerte y la tasa ni se mueve — por eso los grandes estímulos combinan ambas. El modelo es una simplificación de corto plazo — precios fijos, economía cerrada en su versión básica, sin expectativas — pero como mapa mental de cómo dialogan la tasa y el gasto, sigue siendo la servilleta más útil de la macro."
    ],
    "example": {
      "title": "Pandemia: las dos curvas empujadas a la vez",
      "body": "2020-2021, en casi todo el mundo: el gasto público explota — subsidios, IFE, ATP, cheques — mientras los bancos centrales bajan tasas a cero y compran bonos. En el gráfico: IS violentamente a la derecha E LM violentamente abajo, al mismo tiempo. Resultado de libro: el producto se recuperó a velocidad récord y las tasas quedaron planchadas — sin crowding out, porque la política monetaria acompañó. La secuela también fue de libro: tanta demanda junta contra una oferta renga despertó la inflación global de 2022, y entonces vino el movimiento inverso — la LM violentamente arriba (tasas de 0% a 5%) para enfriar lo que las dos curvas habían recalentado."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Un gobierno lanza una fuerte expansión fiscal mientras el banco central mantiene la cantidad de dinero constante. Según IS-LM, ¿qué pasa con producto y tasa de interés?",
        "options": [
          "El producto no cambia porque el dinero está fijo",
          "Suben ambos: la IS se corre a la derecha y la mayor actividad presiona la tasa hacia arriba",
          "Sube el producto y baja la tasa",
          "Ambos bajan"
        ],
        "answer": 1,
        "explain": "La expansión fiscal desplaza la IS a la derecha: más gasto, más producto. Pero con más actividad se demanda más dinero para transacciones y, con oferta monetaria fija, la tasa sube — moderando (sin anular) la expansión vía crowding out de la inversión privada. Producto arriba, tasa arriba: la firma de lo fiscal sin acompañamiento monetario."
      },
      {
        "type": "open",
        "q": "El banco central quiere estimular una economía en recesión y baja fuertemente la tasa (expansión monetaria). Explicá con IS-LM qué curva se mueve, qué pasa con tasa y producto, y por qué el efecto sería más potente si el gobierno además expandiera el gasto.",
        "criterion": "Podés explicar cualitativamente cómo un cambio fiscal o monetario mueve el equilibrio IS-LM.",
        "model": "La expansión monetaria desplaza la LM hacia abajo/derecha: con más dinero disponible, el equilibrio del mercado monetario se da a tasas menores para cada nivel de producto. Sobre la IS dada, el nuevo cruce tiene tasa más baja y producto más alto — el crédito barato estimula inversión y consumo. Si además el gobierno expande el gasto, la IS también se corre a la derecha: los dos empujes se suman sobre el producto, y la suba de tasa que causaría lo fiscal solo queda compensada por la expansión monetaria. Producto mucho mayor, tasa estable: la combinación clásica de estímulo coordinado."
      }
    ],
    "takeaway": "IS-LM es el mapa donde lo fiscal y lo monetario se cruzan: uno mueve el gasto, el otro la tasa, y el equilibrio los obliga a negociar."
  },
  "curva_phillips": {
    "id": "curva_phillips",
    "hook": "Durante veinte años pareció el menú de la macroeconomía: elegí cuánta inflación tolerás y comprá con eso menos desempleo. Hasta que en los 70 el menú explotó — y la explicación de por qué cambió la disciplina para siempre.",
    "explanation": [
      "La <b>curva de Phillips</b> nació como un hallazgo empírico (Phillips, 1958): en los datos, inflación alta convivía con desempleo bajo y viceversa. La lógica era digerible: con la economía caliente y poco desempleo, los trabajadores negocian salarios más altos y las empresas trasladan a precios; con desempleo alto, nadie puede pedir. La conclusión que fascinó a los gobiernos: existiría un <b>trade-off</b> explotable — un poco más de inflación 'compra' un poco menos de desempleo. Durante los 60 se usó como menú de política.",
      "Friedman y Phelps arruinaron la fiesta ANTES de que los datos lo hicieran, con un argumento de pura lógica de <b>expectativas</b>: el trade-off funciona solo mientras la inflación sorprenda. Si el gobierno genera 5% de inflación y los trabajadores esperaban 0%, sus salarios reales caen sin que lo noten, contratar es más barato y el empleo sube — funciona. Pero la gente aprende: al año siguiente las paritarias ya piden 5% de arranque. Para volver a 'comprar' empleo hace falta 10%, después 15%... El desempleo vuelve siempre a su <b>tasa natural</b> — la friccional más la estructural — y lo único que queda del experimento es inflación cada vez más alta. Moraleja: hay curva de Phillips de corto plazo (mientras las expectativas van atrás), pero la de largo plazo es <b>vertical</b>: no se compra empleo permanente con inflación permanente.",
      "Los 70 confirmaron el argumento con crueldad: estanflación — inflación Y desempleo altos a la vez, el punto que la curva ingenua declaraba imposible. La lección quedó institucionalizada y es de las más profundas de la macro: las relaciones estadísticas entre variables pueden desintegrarse apenas la política intenta explotarlas, porque la gente ajusta sus expectativas al nuevo régimen (la crítica de Lucas). Por eso los bancos centrales modernos están obsesionados con <b>anclar expectativas</b>: si el público cree firmemente en la meta de inflación, las paritarias y los precios se pactan en torno a ella, y las sorpresas — en un sentido u otro — se corrigen baratas. El activo no es el trade-off: es la credibilidad."
    ],
    "example": {
      "title": "Paritarias: la curva de Phillips hablando en argentino",
      "body": "Mirá cualquier paritaria argentina y ves expectativas puras: los gremios no negocian mirando la inflación pasada sino la que ESPERAN — y le suman un colchón por si acaso. Si el gobierno anuncia inflación del 30% y nadie le cree, las paritarias cierran al 60%, los costos salariales suben 60%, los precios los siguen... y la inflación da 60%: profecía autocumplida, gobierno desmentido. Cualquier intento de 'comprar' actividad con una sorpresita inflacionaria dura lo que tarda la próxima paritaria en incorporarla — en Argentina, semanas. Es la curva de Phillips vertical en tiempo real: con expectativas despiertas, la inflación extra no compra empleo; solo compra más inflación."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Según la crítica de Friedman y Phelps, ¿por qué el trade-off inflación-desempleo no puede explotarse de forma permanente?",
        "options": [
          "Porque los gobiernos no pueden generar inflación cuando quieren",
          "Porque la inflación reduce la productividad de las empresas",
          "Porque la gente incorpora la inflación a sus expectativas: los salarios y precios se ajustan por anticipado y el desempleo vuelve a su tasa natural, quedando solo la inflación más alta",
          "Porque el desempleo nunca responde a la demanda agregada"
        ],
        "answer": 2,
        "explain": "El trade-off vive de la sorpresa: la inflación no anticipada abarata el salario real y estimula el empleo. Pero las expectativas se adaptan — cada nivel de inflación pasa a estar descontado en paritarias y precios — y el efecto real se evapora. A largo plazo la curva es vertical: la misma tasa natural de desempleo, con cualquier inflación."
      },
      {
        "type": "open",
        "q": "Un gobierno con desempleo en la tasa natural decide estimular la demanda para bajarlo, aceptando 'un poco más de inflación'. Contá qué pasa en el corto plazo y qué pasa cuando trabajadores y empresas ajustan sus expectativas: ¿dónde termina el desempleo y dónde la inflación?",
        "criterion": "Podés explicar por qué el trade-off inflación-desempleo se desvanece cuando cambian las expectativas.",
        "model": "En el corto plazo el estímulo funciona: la inflación sube por encima de lo esperado, los salarios reales caen sin que se note, contratar se abarata y el desempleo baja de la tasa natural. Pero trabajadores y empresas aprenden: las próximas negociaciones incorporan la inflación nueva, los salarios reales se recomponen y el empleo extra desaparece — el desempleo vuelve a la tasa natural. Resultado final: el mismo desempleo de partida con inflación permanentemente más alta. Para repetir el truco haría falta sorprender de nuevo con más inflación todavía — una escalera que solo sube."
      }
    ],
    "takeaway": "La inflación solo compra empleo mientras sorprende — y la gente deja de sorprenderse rápido: a largo plazo queda el mismo desempleo con más inflación."
  },
  "crecimiento": {
    "id": "crecimiento",
    "hook": "En 1900, Argentina era más rica que Suecia y comparable a Francia. Cien años de diferencias 'chicas' en la tasa de crecimiento después, no hay comparación posible. El interés compuesto no perdona — ni premia — a nadie por su pasado.",
    "explanation": [
      "El <b>crecimiento económico</b> es el aumento sostenido del PIB per cápita — la variable que, en el largo plazo, domina todo lo demás: nivel de vida, salud, pobreza. Su arma secreta es el interés compuesto: crecer al 2% anual duplica el ingreso cada 35 años; al 5%, cada 14. Diferencias de tasa que parecen decimales, sostenidas por décadas, abren abismos entre países. Por eso la pregunta '¿por qué crecen las economías?' es quizás la más importante de la disciplina.",
      "Las fuentes se ordenan con la función de producción que ya conocés de la micro: el producto sale de combinar <b>capital</b> (máquinas, rutas, edificios), <b>trabajo</b> (gente y sus horas) y — el ingrediente mágico — la <b>productividad</b> (cuánto producto sale de los mismos insumos: tecnología, conocimiento, organización, instituciones). Acumular capital funciona, pero con un techo: los rendimientos decrecientes. La primera cosechadora transforma un campo; la décima, casi nada. Un país no puede hacerse rico solo apilando máquinas — cada máquina extra rinde menos, y una parte creciente del ahorro se va en reponer las que se gastan.",
      "Por eso el crecimiento de LARGO plazo lo domina la <b>productividad</b> (los economistas la llaman PTF, productividad total de los factores). Es lo único sin techo aparente: las ideas no sufren rendimientos decrecientes — usarlas no las gasta, y se copian a costo casi nulo. La contabilidad del crecimiento lo confirma en los datos: la mayor parte de la diferencia de ingreso entre países ricos y pobres no viene de cuánto capital tienen sino de qué tan productivamente lo usan. La pregunta incómoda que abre — por qué algunos países logran ser productivos y otros no, teniendo acceso a las mismas tecnologías — te la debe la lección de desarrollo; el spoiler tiene una palabra: instituciones."
    ],
    "example": {
      "title": "El siglo que Argentina le regaló a los demás",
      "body": "Hacia 1900, el PIB per cápita argentino estaba entre los diez más altos del mundo — arriba de Suecia, Italia y Japón. No hubo un colapso único: hubo un siglo de crecer 1% menos por año que los demás, entre crisis recurrentes, inflaciones, defaults y volantazos de reglas de juego. El interés compuesto hizo el resto: 1% anual de diferencia durante 100 años es terminar 2,7 veces más abajo. La lección estadística es brutal: no hace falta una catástrofe para empobrecerse en términos relativos — alcanza con crecer 'un poquito menos' de forma sostenida. Y su espejo: Corea del Sur, más pobre que Argentina en 1960, la cuadruplicó creciendo 'un poquito más' durante 60 años."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Un país pobre lanza un plan masivo de inversión en maquinaria, sin cambiar nada más (educación, instituciones, tecnología). ¿Qué predice la teoría del crecimiento para el largo plazo?",
        "options": [
          "Hiperinflación por el exceso de inversión",
          "Ningún efecto, porque el capital no afecta el producto",
          "Un envión inicial que se apaga: los rendimientos decrecientes del capital hacen que cada máquina extra aporte menos",
          "Crecimiento alto permanente: el capital es la fuente del crecimiento"
        ],
        "answer": 2,
        "explain": "Acumular capital eleva el producto, pero con rendimientos decrecientes: cada máquina adicional agrega menos que la anterior, y mantener un stock grande exige dedicar cada vez más ahorro a reponer depreciación. Sin mejoras de productividad, el crecimiento por acumulación se apaga solo. El crecimiento sostenido exige producir más CON lo mismo, no solo tener más."
      },
      {
        "type": "open",
        "q": "Dos países tienen el mismo stock de capital por trabajador, pero uno produce el doble que el otro. ¿Qué explica la diferencia y por qué esa variable — y no la acumulación de capital — es la que domina el crecimiento de largo plazo?",
        "criterion": "Podés explicar por qué la productividad, no el capital solo, domina el crecimiento de largo plazo.",
        "model": "La diferencia es productividad (PTF): con los mismos insumos, uno los combina mejor — mejor tecnología, organización, capital humano, instituciones que asignan recursos a sus usos más valiosos. La productividad domina el largo plazo por una asimetría clave: el capital sufre rendimientos decrecientes (cada máquina extra rinde menos y encima se deprecia), así que acumular tiene techo; las ideas y mejoras de eficiencia no se agotan con el uso ni se desgastan — se copian y se apilan. Por eso los países no se hacen ricos por tener más cosas, sino por aprender a producir más con las que tienen."
      }
    ],
    "takeaway": "Acumular máquinas tiene techo; mejorar la productividad no — y medio punto de crecimiento anual, compuesto por un siglo, separa la riqueza de la decadencia."
  },
  "tipo_cambio": {
    "id": "tipo_cambio",
    "hook": "En ningún país del mundo la gente mira el precio de una moneda extranjera como en Argentina: el dólar es tapa de diario, tema de asado y termómetro del humor nacional. Detrás de esa obsesión hay un precio — y funciona como todos los precios.",
    "explanation": [
      "El <b>tipo de cambio</b> es el precio de una moneda en términos de otra: cuántos pesos cuesta un dólar. Y es, ante todo, un precio de mercado: lo mueven la oferta de dólares (exportadores que liquidan, inversores que entran, deuda que se toma) y la demanda (importadores, ahorristas, turistas, deudores que pagan). Cuando el peso se <b>deprecia</b> (el dólar sube), cada dólar compra más pesos; cuando se <b>aprecia</b>, lo contrario. Las tasas de interés relativas también juegan: si acá pagan mucho más que afuera, entran capitales buscando el rendimiento y aprecian la moneda — mientras dure la confianza.",
      "Los efectos de una depreciación corren por tres canales. Uno: las <b>exportaciones</b> se abaratan para el mundo y ganan competitividad — el turista extranjero de repente encuentra todo regalado, el vino argentino compite mejor afuera. Dos: las <b>importaciones</b> se encarecen en pesos — el celular, los insumos industriales, la nafta importada. Tres — y en Argentina, el decisivo —: la <b>inflación</b>. El encarecimiento de todo lo importado y lo exportable se traslada a los precios internos (el <b>pass-through</b>), con una intensidad que depende de cuán abierta es la economía y — crucialmente — de las expectativas: donde la gente piensa los precios en dólares, una devaluación se traslada a precios casi entera y casi de inmediato.",
      "Sobre esto se monta la elección de <b>régimen cambiario</b>. Flotante: el mercado fija el precio; la moneda absorbe los shocks (se deprecia cuando faltan dólares) y el banco central conserva su política monetaria. Fijo: el banco central promete un precio y compra o vende reservas para sostenerlo; se gana estabilidad y un ancla contra la inflación, pero se renuncia a la política monetaria propia — y se contrae una promesa cara: si el mercado deja de creer que hay reservas para sostener la paridad, ataca, y las defensas se agotan en semanas. Toda la historia cambiaria argentina — tablitas, convertibilidad, cepos, bandas — es la crónica de esa promesa hecha, defendida y rota, una y otra vez."
    ],
    "example": {
      "title": "Anatomía de una devaluación argentina",
      "body": "Diciembre de 2023: el tipo de cambio oficial salta de $366 a $800. Seguí los tres canales. Exportaciones: el agro y las economías regionales pasan a recibir más del doble de pesos por dólar liquidado — exportar vuelve a cerrar. Importaciones: insumos, electrónica y combustibles duplican su costo en pesos de un día para otro. Inflación: con una economía que piensa en dólares, el pass-through fue feroz — la inflación mensual saltó al 25% en diciembre. Y el matiz que completa el cuadro: lo que importa para la competitividad es el tipo de cambio REAL — si la inflación posterior sube tanto como subió el dólar, la ganancia de competitividad se evapora en meses, y el país queda listo para el próximo capítulo de la saga."
    },
    "check": [
      {
        "type": "mcq",
        "q": "El peso se deprecia 30% frente al dólar. ¿Cuál de estos efectos NO es esperable?",
        "options": [
          "Los insumos importados de la industria se encarecen en pesos",
          "Las importaciones se abaratan y aumentan",
          "El turismo receptivo aumenta: Argentina se vuelve barata en dólares",
          "Los precios internos suben por el traslado del dólar a precios"
        ],
        "answer": 1,
        "explain": "Una depreciación encarece las importaciones en moneda local — no las abarata: cada dólar de mercadería extranjera ahora cuesta 30% más pesos. Los otros tres efectos son los canales clásicos: competitividad exportadora (incluido el turismo receptivo), encarecimiento de insumos importados y pass-through a la inflación."
      },
      {
        "type": "open",
        "q": "Un país devalúa su moneda 40% buscando reactivar sus exportaciones. Explicá el efecto esperado sobre exportaciones, importaciones e inflación — y por qué el resultado final sobre la competitividad depende de qué pase con los precios internos después.",
        "criterion": "Podés explicar cómo un movimiento del tipo de cambio afecta exportaciones, importaciones e inflación.",
        "model": "La devaluación abarata los productos del país para el mundo (exportaciones más competitivas, deberían crecer) y encarece en moneda local todo lo importado (las importaciones caen y los insumos suben). Ese encarecimiento de lo transable se traslada a los precios internos — pass-through —, más rápido y completo cuanto más dolarizadas estén las expectativas. Y ahí está la trampa: la competitividad depende del tipo de cambio real. Si la inflación posterior acumula 40%, se comió la devaluación entera — los costos internos subieron tanto como el dólar — y el país queda igual de caro que antes, pero con más inflación. La devaluación nominal solo mejora la competitividad si los precios internos no la persiguen hasta alcanzarla."
      }
    ],
    "takeaway": "El tipo de cambio es un precio con tres correas: mueve exportaciones, importaciones e inflación — y lo que la devaluación regala, la inflación posterior lo puede confiscar."
  },
  "balanza_pagos": {
    "id": "balanza_pagos",
    "hook": "¿De dónde salen los dólares de un país, y a dónde se van? Hay una contabilidad que registra cada uno — y una regla de hierro: todo dólar que entra por algún lado sale por otro. Las crisis argentinas se leen ahí, renglón por renglón.",
    "explanation": [
      "La <b>balanza de pagos</b> registra todas las transacciones de un país con el resto del mundo, ordenadas en dos grandes cuentas. La <b>cuenta corriente</b> anota el comercio de bienes y servicios (exportaciones menos importaciones), las rentas (intereses de deuda que se pagan, utilidades que las multinacionales giran) y las transferencias (remesas). La <b>cuenta capital y financiera</b> anota los movimientos de fondos: inversión extranjera que entra, deuda que se toma o se paga, capitales que llegan o se fugan, y la variación de reservas del banco central.",
      "La regla de hierro es que ambas cuentas se espejan: un <b>déficit de cuenta corriente</b> — comprarle al mundo más de lo que se le vende — solo es posible si alguien lo financia, y ese financiamiento entra por la cuenta capital: deuda nueva, inversión extranjera, o reservas que el banco central quema. No es teoría sino aritmética: los dólares que pagaron ese exceso de importaciones salieron de algún lado. Leelo también como ahorro: un país con déficit de cuenta corriente está gastando más de lo que produce, y la diferencia la pone el ahorro del resto del mundo.",
      "¿Es malo un déficit de cuenta corriente? Depende de qué lo financia y para qué. Si entra inversión de largo plazo que expande la capacidad exportadora futura, el déficit es un préstamo productivo — así se desarrollaron varios países. Si lo financian deuda cara y capitales golondrina que huyen al primer ruido, el país queda al borde de un <b>frenazo súbito</b> (sudden stop): el día que el financiamiento se corta, el déficit se vuelve imposible de sostener y el ajuste es violento — devaluación, recesión, o ambas. La secuencia argentina clásica cabe en tres renglones de la balanza: atraso cambiario que infla importaciones y turismo al exterior (déficit de cuenta corriente), financiado con deuda externa (cuenta capital), hasta que el mundo deja de prestar — y el tipo de cambio hace el ajuste que nadie quiso hacer antes."
    ],
    "example": {
      "title": "2016-2018: crónica de un sudden stop",
      "body": "Argentina 2016-2017: el dólar planchado vuelve baratísimo viajar a Miami e importar de todo; la cuenta corriente rojea — casi 5% del PIB de déficit —. ¿Quién ponía los dólares? La cuenta capital: deuda externa emitida a ritmo récord (hasta un bono a 100 años) y capitales golondrina haciendo bicicleta financiera con tasas en pesos. En 2018 la Fed sube tasas, los emergentes se asustan, y los capitales se van tan rápido como llegaron: sudden stop. Sin financiamiento, el déficit de cuenta corriente se volvió insostenible de un trimestre al otro — y el ajuste lo hizo el dólar: de $18 a $40 en un año, recesión incluida. La balanza de pagos no era un tecnicismo: era el guion de la crisis, escrito con dos años de anticipación."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Un país tiene déficit de cuenta corriente de 4% del PIB. ¿Cuál de las siguientes es necesariamente cierta?",
        "options": [
          "El país exporta más de lo que importa",
          "El país está en crisis y su moneda va a devaluarse este año",
          "El gobierno tiene déficit fiscal de 4% del PIB",
          "Ese déficit se está financiando con entrada neta de capitales (deuda, inversión extranjera) o con pérdida de reservas"
        ],
        "answer": 3,
        "explain": "Es la identidad de la balanza de pagos: gastar más dólares de los que se generan exige que la diferencia entre por la cuenta capital — alguien presta, invierte, o el banco central vende reservas. No implica crisis inminente (depende de la calidad del financiamiento) ni dice nada mecánico sobre el resultado fiscal."
      },
      {
        "type": "open",
        "q": "Explicá por qué un déficit de cuenta corriente tiene que financiarse con entrada de capitales, y qué diferencia hace — para la vulnerabilidad del país — que ese financiamiento sea inversión extranjera directa versus capitales especulativos de corto plazo.",
        "criterion": "Podés explicar por qué un déficit de cuenta corriente se financia con entrada de capital.",
        "model": "Si un país le compra al mundo más de lo que le vende, los dólares para pagar la diferencia tienen que salir de algún lado: o alguien se los presta, o llegan como inversión, o el banco central vende reservas — todo eso es la cuenta capital espejando el déficit corriente. Es aritmética: cada dólar gastado en exceso entró por algún renglón. La calidad del financiamiento define la vulnerabilidad: la inversión directa (fábricas, infraestructura) no se escapa en una tarde y suele crear capacidad de generar dólares futuros; los capitales de corto plazo entran por la tasa y huyen al primer susto — y cuando huyen, el déficit que financiaban se vuelve insostenible de golpe, forzando un ajuste brusco vía devaluación y recesión: el sudden stop."
      }
    ],
    "takeaway": "Todo déficit con el mundo lo financia alguien: la pregunta que anticipa las crisis no es cuánto debés, sino quién te presta y qué tan rápido se puede ir."
  },
  "ventaja_comparativa": {
    "id": "ventaja_comparativa",
    "hook": "Messi seguramente cocina mejor que su cocinero. ¿Debería cocinarse él? Obvio que no — y en ese 'obvio' está escondido el argumento más contraintuitivo y poderoso de toda la economía.",
    "explanation": [
      "La intuición dice que conviene comerciar con alguien solo si es mejor que vos en algo. La <b>ventaja comparativa</b> (Ricardo, 1817) demuestra que la intuición está mal: aunque un país — o una persona — sea peor en TODO (es decir, no tenga ninguna <b>ventaja absoluta</b>), el comercio beneficia a ambas partes. La clave es que lo que importa no es quién produce algo con menos recursos, sino quién lo produce con menor <b>costo de oportunidad</b> — resignando menos de otra cosa.",
      "El razonamiento: los recursos de cada país son limitados, así que producir una cosa siempre es dejar de producir otra. Messi tiene ventaja absoluta en fútbol Y quizás en cocina; pero cada hora suya en la cocina cuesta una fortuna en fútbol resignado — su costo de oportunidad de cocinar es altísimo. El del cocinero es bajísimo. Entonces conviene que cada uno se especialice donde su costo de oportunidad es menor y comercien: la producción TOTAL es mayor que si cada uno se autoabastece, y ese excedente se reparte. Es la ganancia del intercambio, elevada a sistema.",
      "De acá sale el argumento fundacional a favor del libre comercio: como cada país tiene costos de oportunidad distintos (por clima, recursos, capital, conocimiento), siempre existe una especialización que agranda la torta mundial — incluso para el país que es peor en todo. Los matices honestos: la teoría dice que el país gana EN CONJUNTO, no que ganen todos adentro — los sectores que compiten con importaciones pierden, y la transición puede ser larga y dolorosa (por eso el comercio es políticamente explosivo aunque sea económicamente ganador). Y la especialización trae sus propios riesgos: depender de dos commodities es rezar por sus precios."
    ],
    "example": {
      "title": "Soja argentina, electrónica coreana",
      "body": "Argentina puede fabricar celulares (los ensambla en Tierra del Fuego) y Corea puede producir alimentos. Pero mirá los costos de oportunidad: cada peso invertido en ensamblar electrónica en Argentina es un peso que no va al agro, donde el país es de los más eficientes del planeta — la pampa húmeda produce proteína a un costo de oportunidad ínfimo. En Corea, al revés: su tierra escasa y su capital humano industrial hacen que producir comida cueste carísimo en electrónica resignada. La especialización cruzada — Argentina exporta alimentos, importa electrónica; Corea al revés — deja a los DOS países con más comida y más celulares que si cada uno intentara autoabastecerse de ambos. No es solidaridad: es aritmética de costos de oportunidad."
    },
    "check": [
      {
        "type": "mcq",
        "q": "El país A produce tanto trigo como autos con menos recursos que el país B (tiene ventaja absoluta en ambos). ¿Le conviene comerciar con B?",
        "options": [
          "No: si es mejor en todo, comerciar solo lo perjudica",
          "Solo si B baja sus precios por debajo del costo",
          "Sí: lo que importa son los costos de oportunidad relativos — especializándose donde su ventaja es MAYOR y comprándole a B el resto, ambos terminan con más",
          "Sí, pero solo por diplomacia, no por economía"
        ],
        "answer": 2,
        "explain": "La ventaja absoluta es irrelevante para las ganancias del comercio: lo que las genera es la diferencia en costos de oportunidad. A A le conviene volcar sus recursos donde su superioridad es más grande y comprarle a B aquello donde su superioridad es menor — así produce el conjunto más total, y ambos capturan parte del excedente. Es el resultado de Ricardo: hasta el mejor en todo gana comerciando."
      },
      {
        "type": "open",
        "q": "En el país X, producir 1 tonelada de carne cuesta lo mismo que producir 4 heladeras; en el país Y, 1 tonelada de carne cuesta lo mismo que 1 heladera. Mostrá con esos costos de oportunidad quién debería especializarse en qué, y por qué ambos ganan comerciando — aunque uno fuera más eficiente en ambos productos.",
        "criterion": "Podés mostrar con costos de oportunidad por qué dos países ganan comerciando aunque uno sea más productivo en todo.",
        "model": "El costo de oportunidad de la carne es 4 heladeras en X y 1 heladera en Y: a Y la carne le sale 'barata' en heladeras resignadas, a X le sale cara. Entonces Y debe especializarse en carne y X en heladeras. Si comercian a una tasa intermedia — digamos 1 carne por 2 heladeras —, ambos ganan: Y entrega carne que le costó 1 heladera y recibe 2 (duplica), y X consigue carne por 2 heladeras cuando producirla le costaba 4 (paga la mitad). Las eficiencias absolutas nunca entraron en el cálculo: solo los costos de oportunidad relativos. Por eso incluso un país peor en todo tiene algo que ofrecer — siempre hay algo en lo que es 'menos malo'."
      }
    ],
    "takeaway": "No importa quién es mejor: importa quién resigna menos — y como los costos de oportunidad siempre difieren, siempre hay una especialización que agranda la torta para ambos."
  },
  "expectativas": {
    "id": "expectativas",
    "hook": "En economía pasa algo que en física sería un escándalo: las moléculas leen el pronóstico. Si todos creen que el dólar sube mañana, compran hoy — y el dólar sube hoy. Lo que la gente espera que pase, cambia lo que pasa.",
    "explanation": [
      "Las <b>expectativas</b> — lo que la gente cree que va a pasar con precios, ingresos, políticas — son una fuerza económica de primer orden, porque las decisiones de hoy se toman mirando el mañana: la paritaria descuenta la inflación futura, la inversión descuenta la demanda futura, el precio del dólar descuenta la política futura. Esto crea los bucles que hacen a la economía tan distinta de la física: expectativas que se <b>autocumplen</b> (todos esperan devaluación, compran dólares, y la corrida fuerza la devaluación) y anuncios que surten efecto antes de ejecutarse.",
      "¿Cómo se forman? Dos modelos canónicos. Las expectativas <b>adaptativas</b>: la gente proyecta el pasado — 'la inflación será como la del año pasado, quizás corregida'. Simples y a menudo realistas, pero implican que la gente comete el mismo error sistemáticamente mientras el mundo cambia. Las expectativas <b>racionales</b>: la gente usa TODA la información disponible — incluyendo lo que sabe sobre las políticas y sus efectos — y no se equivoca de manera sistemática y predecible. Nadie cree que todos somos calculadoras perfectas; el punto es más filoso: no podés construir política económica sobre el supuesto de que la gente no aprende.",
      "La consecuencia demoledora: una política <b>anticipada</b> pierde buena parte de su efecto real, porque los afectados ya se ajustaron. Si el mercado descuenta que habrá emisión, los precios suben ANTES de que los pesos circulen; si las paritarias descuentan el estímulo inflacionario, el empleo extra nunca aparece (la curva de Phillips que ya viste). Es la crítica de Lucas en una frase: las 'reglas' estadísticas de la economía cambian cuando la política intenta usarlas, porque están hechas de gente que mira. Corolario práctico: la política económica es menos un problema de ingeniería que de credibilidad — importa menos la medida que anunciás y más si te creen, porque el efecto lo producen las expectativas que tu anuncio logra (o no logra) mover."
    ],
    "example": {
      "title": "El asador que remarca por las dudas",
      "body": "Un carnicero de barrio escucha que 'viene una devaluación'. No sabe macroeconomía, pero sabe qué hacer: remarca hoy, porque reponer la mercadería le va a costar más caro. Su proveedor pensó lo mismo, y el frigorífico también. Resultado: la inflación se aceleró ANTES de que el dólar se moviera — la pura expectativa hizo el trabajo. Ahora escalalo: si el gobierno anuncia un plan antiinflacionario y el carnicero no le cree, sigue remarcando 'por las dudas', y la inflación persiste desmintiendo al plan. Todo programa de estabilización argentino exitoso — y todos los fracasados — se explican menos por sus medidas que por este señor: la variable decisiva es qué espera el que remarca."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Un gobierno anuncia con meses de anticipación que hará una gran emisión monetaria para financiar gasto. Bajo expectativas racionales, ¿qué es esperable?",
        "options": [
          "La gente no reacciona hasta ver los billetes circulando",
          "El estímulo funciona igual que si fuera sorpresa, porque el dinero es dinero",
          "La emisión anticipada baja la inflación porque da certidumbre",
          "Los precios y contratos se ajustan por anticipado, y el efecto real (más producto, más empleo) se diluye: queda sobre todo la inflación"
        ],
        "answer": 3,
        "explain": "Anticipada la emisión, los agentes que forman expectativas racionalmente incorporan sus consecuencias ya: remarcan precios, ajustan paritarias, cubren carteras. Cuando los pesos finalmente llegan, encuentran los precios ya subidos — el efecto real que dependía de la sorpresa se evaporó. Es el núcleo del resultado de inefectividad de las políticas anticipadas."
      },
      {
        "type": "open",
        "q": "Explicá por qué un mismo estímulo monetario puede tener efectos reales si es sorpresivo y casi ninguno si es anticipado, y qué implica eso para el valor de la credibilidad de las instituciones económicas.",
        "criterion": "Podés explicar cómo las expectativas racionales limitan la efectividad de políticas anticipadas.",
        "model": "El efecto real del estímulo depende de que precios y salarios NO se hayan ajustado todavía: la inflación sorpresiva abarata transitoriamente el salario real y el crédito, y eso mueve empleo y producto. Si la política es anticipada, los agentes racionales ajustan contratos, precios y expectativas por adelantado — el estímulo llega a una economía que ya lo descontó y solo valida la inflación esperada, sin efecto real. La implicancia: el poder de la política económica no está en las medidas sino en el régimen de credibilidad. Un banco central creíble puede desinflar barato (las expectativas le hacen la mitad del trabajo); uno desacreditado no puede ni estimular ni estabilizar, porque cada anuncio suyo ya está descontado — o descreído."
      }
    ],
    "takeaway": "La economía está hecha de gente que mira el futuro: lo que se espera que pase, empieza a pasar — y por eso la credibilidad vale más que cualquier medida."
  },
  "hiperinflacion": {
    "id": "hiperinflacion",
    "hook": "1989, Argentina. Los precios cambian dos veces por día, los supermercados remarcan con la góndola llena, y la plata que tenías a la mañana no alcanza a la tarde. Eso es la hiperinflación.",
    "explanation": [
      "La <b>hiperinflación</b> es la inflación desbocada — no 30% o 100% al año, sino precios que se disparan mes a mes o día a día. No es un fenómeno distinto de la inflación común: es su versión extrema, y casi siempre nace de la misma raíz.",
      "Esa raíz es fiscal. Cuando un Estado gasta persistentemente más de lo que recauda y financia el déficit imprimiendo dinero, tarde o temprano la cantidad de plata crece mucho más rápido que los bienes que se pueden comprar con ella. A esto se lo llama <b>dominancia fiscal</b>: la política monetaria queda esclavizada a tapar el agujero del fisco.",
      "El golpe de gracia lo dan las <b>expectativas</b>. Cuando todos esperan que los precios sigan subiendo, se apuran a gastar y a remarcar, la velocidad del dinero se acelera, y eso empuja aún más los precios: una profecía autocumplida. En el extremo, la moneda pierde sus tres funciones —dejar de ser reserva de valor, unidad de cuenta y medio de pago— y la economía se “dolariza” de hecho para sobrevivir."
    ],
    "example": {
      "title": "Por qué la hiper es un problema fiscal disfrazado",
      "body": "Es tentador ver la hiperinflación como un problema del banco central que “imprime demasiado”. Pero el banco central rara vez imprime por gusto: imprime porque tiene que financiar un déficit que nadie más quiere financiar. Por eso los planes que frenaron hiperinflaciones —en Argentina, en Alemania, en otros lados— casi siempre combinaron un ancla monetaria con un ajuste fiscal creíble. Sin resolver el déficit, cualquier freno monetario es transitorio."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Cuál es el mecanismo central detrás de la mayoría de las hiperinflaciones?",
        "options": [
          "Un aumento repentino de la demanda de bienes de lujo",
          "Déficit fiscal persistente financiado con emisión monetaria",
          "Una suba de salarios pactada por sindicatos",
          "Un shock de oferta como una sequía"
        ],
        "answer": 1,
        "explain": "La hiperinflación clásica surge de la dominancia fiscal: un déficit crónico financiado imprimiendo dinero. Los otros factores pueden aportar, pero el motor es fiscal-monetario."
      },
      {
        "type": "open",
        "q": "Un gobierno anuncia que frena la emisión pero no toca el déficit fiscal, que sigue enorme. ¿Por qué es probable que el freno a la inflación no dure?",
        "criterion": "Podés explicar el vínculo entre déficit fiscal financiado con emisión y aceleración inflacionaria.",
        "model": "Si el déficit sigue, el Estado necesita financiarlo de algún modo. Sin acceso a crédito, la presión para volver a emitir reaparece, y las expectativas de que eso pase ya empujan los precios. El ancla monetaria sin ancla fiscal carece de credibilidad y tiende a romperse."
      }
    ],
    "takeaway": "La hiperinflación es, casi siempre, un problema fiscal disfrazado de problema monetario."
  },
  "valor_tiempo_dinero": {
    "id": "valor_tiempo_dinero",
    "hook": "¿Preferís $1.000.000 hoy o $1.000.000 dentro de un año? Todos elegimos hoy — y no es ansiedad: es la decisión financiera correcta. Entender exactamente POR QUÉ es la puerta de entrada a todas las finanzas.",
    "explanation": [
      "El <b>valor tiempo del dinero</b> es el principio de que un peso hoy vale más que el mismo peso mañana. Tres razones lo sostienen. Primera y central: el peso de hoy puede <b>invertirse</b> — puesto a la tasa de interés, dentro de un año es más de un peso; el costo de oportunidad de esperar es ese rendimiento resignado. Segunda: el <b>riesgo</b> — el futuro puede no llegar: el que promete pagar puede no pagar, y una promesa vale menos que un hecho. Tercera: en economías como la argentina, la <b>inflación</b> — el peso futuro compra menos que el actual. Notá que el principio vale incluso con inflación cero y pagador perfecto: mientras exista una tasa positiva, hoy le gana a mañana.",
      "La consecuencia operativa: flujos de dinero en momentos distintos son <b>monedas distintas</b> — no se pueden comparar ni sumar directamente, igual que no sumás pesos con dólares sin pasar por el tipo de cambio. '$100.000 hoy más $100.000 en un año' NO son $200.000 de hoy. El 'tipo de cambio' entre presente y futuro es la tasa de interés: ella dice cuántos pesos de mañana equivalen a un peso de hoy.",
      "Este principio subyace a toda valuación financiera — y a un montón de decisiones cotidianas disfrazadas: ¿conviene el descuento por pago contado o las 12 cuotas 'sin interés'? ¿Vale la pena una inversión que devuelve en cinco años? ¿Qué es mejor, cobrar la indemnización ya o en cuotas? Todas son la misma pregunta: cuánto vale HOY una plata de MAÑANA. La herramienta que la responde con precisión — el descuento — es la próxima lección; esta lección es la razón por la que hace falta esa herramienta."
    ],
    "example": {
      "title": "Las 12 cuotas 'sin interés' en un país con tasa alta",
      "body": "Un local ofrece una heladera a $1.200.000 en 12 cuotas 'sin interés' o $1.000.000 al contado. ¿Cuál conviene? Depende de la tasa: si tenés la plata y un plazo fijo rinde 4% mensual, pagar en cuotas y dejar el resto rindiendo puede ganarle cómodo al descuento por contado — estás pagando con pesos futuros, que valen menos, mientras tus pesos presentes trabajan. Los argentinos hacen este cálculo por instinto: en épocas de inflación y tasas altas, la cuota fija es un regalo, porque licúa. El instinto es correcto — y es exactamente el valor tiempo del dinero: los $100.000 de la cuota 12 son mucho más baratos que los $100.000 de la cuota 1."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Con una tasa de interés del 10% anual y sin inflación, ¿por qué $100.000 hoy valen más que $100.000 dentro de un año?",
        "options": [
          "Porque los billetes físicos se deterioran",
          "No valen más: sin inflación, son equivalentes",
          "Porque la inflación los va a licuar",
          "Porque los $100.000 de hoy, invertidos a la tasa, se convierten en $110.000 en un año: esperar tiene costo de oportunidad"
        ],
        "answer": 3,
        "explain": "El argumento central no necesita inflación: mientras exista una tasa positiva, el peso presente puede ponerse a trabajar. Quien recibe hoy tiene en un año $110.000; quien recibe en un año, solo $100.000. La diferencia — el interés resignado — es el costo de esperar, y existe con precios perfectamente estables."
      },
      {
        "type": "open",
        "q": "Te ofrecen dos premios: $500.000 hoy o $520.000 dentro de un año. Un amigo dice 'obvio el segundo, son $20.000 más'. Explicale por qué su comparación está mal planteada y qué información hace falta para decidir bien.",
        "criterion": "Podés justificar por qué flujos en distintos momentos no son comparables sin descontar.",
        "model": "Está comparando pesos de hoy con pesos de dentro de un año como si fueran la misma moneda, y no lo son: el dinero tiene valor tiempo. Los $500.000 de hoy pueden invertirse; a una tasa del 10% anual serían $550.000 en un año — más que los $520.000 prometidos, que además cargan el riesgo de que no te los paguen y la inflación del camino. Para decidir hace falta la tasa a la que podés invertir (y la inflación y el riesgo del pagador): solo llevando ambos montos al mismo momento — descontando — la comparación tiene sentido. Con tasas superiores al 4% anual, acá gana el premio de hoy."
      }
    ],
    "takeaway": "Pesos de hoy y pesos de mañana son monedas distintas — y la tasa de interés es el tipo de cambio entre el presente y el futuro."
  },
  "valor_presente": {
    "id": "valor_presente",
    "hook": "¿Cuánto pagarías hoy por el derecho a cobrar $1.000.000 dentro de un año? Esa pregunta tiene una respuesta exacta — y la fórmula que la responde es, sin exagerar, la operación más usada de todas las finanzas.",
    "explanation": [
      "El <b>valor presente</b> (VP) es la respuesta operativa al valor tiempo del dinero: cuántos pesos de hoy equivalen a un flujo futuro. La mecánica es <b>descontar</b> — el proceso inverso a capitalizar. Si $100 hoy al 10% se convierten en $110 en un año, entonces $110 dentro de un año valen $100 hoy: se divide en lugar de multiplicar. La fórmula: VP = flujo futuro / (1 + tasa)^n, donde n es la cantidad de períodos. Los $1.000.000 a cobrar en un año, con tasa del 25%, valen hoy 1.000.000/1,25 = $800.000; a dos años, 1.000.000/1,25² = $640.000.",
      "Dos propiedades para grabarse. Uno: a mayor <b>tasa de descuento</b>, menor valor presente — si tu plata rinde mucho donde está, una promesa futura te tienta menos, y viceversa. Dos: a mayor <b>plazo</b>, menor valor presente — y el efecto es exponencial, no lineal: al 25% anual, un peso a 10 años vale hoy menos de 11 centavos. Tasas altas aniquilan el valor del largo plazo; por eso en países de tasa alta casi no existe el crédito hipotecario ni la inversión a décadas — el futuro lejano, descontado a tasas argentinas, vale casi nada.",
      "El superpoder del VP es que vuelve <b>sumables</b> los flujos: una vez descontados al mismo momento, cobros y pagos de fechas distintas se comparan y se suman como manzanas con manzanas. Un proyecto que exige invertir $10 millones hoy y devuelve $4 millones por año durante 4 años se evalúa descontando cada cobro y restando la inversión: si el total — el <b>valor presente neto</b> (VPN) — da positivo, el proyecto crea valor a esa tasa; si da negativo, destruye. Ese simple 'descontá todo y sumá' es el corazón de la evaluación de proyectos, la valuación de bonos, de acciones y de empresas enteras: todo lo que sigue en finanzas es esta operación con distintos disfraces."
    ],
    "example": {
      "title": "¿Cuánto vale un alquiler de 3 años cobrado por adelantado?",
      "body": "Un inquilino te ofrece pagar 3 años de alquiler por adelantado — $12.000.000 por año, que cobrarías al inicio de cada año 1, 2 y 3 — a cambio de un descuento: te ofrece $30.000.000 al contado. ¿Conviene? Descontá al 20% anual (lo que rendiría tu plata): el primer pago vale $12.000.000 (es hoy), el segundo 12.000.000/1,2 = $10.000.000, el tercero 12.000.000/1,44 ≈ $8.333.000. Valor presente del contrato original: ≈ $30.333.000. La oferta de $30.000.000 hoy es apenas inferior — prácticamente equivalente, con la ventaja de eliminar el riesgo de cobro. Sin la fórmula, '36 millones contra 30' parece un abismo; descontados, es un empate técnico. Eso hace el descuento: convierte discusiones a ojo en aritmética."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Con una tasa de descuento del 50% anual (una tasa bien argentina), ¿cuánto vale hoy un pago de $1.500.000 a cobrar dentro de un año?",
        "options": [
          "$1.500.000: la plata es la plata",
          "$750.000: se descuenta la mitad",
          "$1.000.000: se divide 1.500.000 por 1,5",
          "$2.250.000: se multiplica por 1,5"
        ],
        "answer": 2,
        "explain": "VP = 1.500.000 / (1 + 0,50) = $1.000.000. La lógica: $1.000.000 puestos hoy al 50% se convierten exactamente en $1.500.000 en un año — así que ambos montos son equivalentes. Descontar es dividir por (1+tasa), no restar un porcentaje del monto."
      },
      {
        "type": "open",
        "q": "Un proyecto requiere invertir $8.000.000 hoy y promete devolver $5.000.000 dentro de un año y $6.000.000 dentro de dos. Con una tasa de descuento del 25% anual, calculá el valor presente de los cobros y decidí si el proyecto conviene.",
        "criterion": "Podés calcular el valor presente de un flujo futuro dada una tasa de descuento.",
        "model": "Primer cobro: 5.000.000/1,25 = $4.000.000. Segundo: 6.000.000/1,25² = 6.000.000/1,5625 = $3.840.000. Valor presente de los cobros: $7.840.000. Contra una inversión de $8.000.000, el valor presente neto es -$160.000: el proyecto destruye valor a esa tasa — la misma plata rinde más invertida al 25% que metida en el proyecto. Conviene rechazarlo (o renegociar montos), aunque 'en pesos corrientes' pareciera devolver 11 millones contra 8."
      }
    ],
    "takeaway": "Descontar es traducir el futuro a pesos de hoy: dividí cada flujo por (1+tasa) tantas veces como años falten — y recién entonces sumá y compará."
  },
  "riesgo_retorno": {
    "id": "riesgo_retorno",
    "hook": "Si un bono paga 20% en dólares cuando el bono americano paga 4%, la pregunta correcta no es '¿dónde firmo?' sino '¿qué saben los demás que yo no?'. En finanzas, el rendimiento de más es siempre el precio de algo.",
    "explanation": [
      "El <b>retorno</b> de una inversión es lo que rinde sobre lo invertido; el <b>riesgo</b>, la incertidumbre sobre ese rendimiento — cuánto puede desviarse de lo esperado, para bien o para mal (la medida usual: la volatilidad). El principio rector de todas las finanzas: riesgo y retorno esperado van atados. Nadie regala rendimiento: si un activo promete pagar más que otro, es porque carga algo — más probabilidad de impago, más volatilidad, menos liquidez, peores escenarios justo cuando todo lo demás también va mal.",
      "El mecanismo que ata el nudo son los inversores mismos: la mayoría siente <b>aversión al riesgo</b> — entre dos activos de igual retorno esperado, todos prefieren el más seguro (por la utilidad marginal decreciente que ya conocés: los pesos que perdés duelen más de lo que alegran los que ganás). Entonces, para que alguien acepte cargar un activo riesgoso, su precio debe caer hasta que el retorno esperado compense el mal trago: esa compensación es la <b>prima de riesgo</b>. El bono argentino no paga 20% por generosidad: paga 20% porque nadie lo compraría al 4% — el 16% extra es el precio de mercado del miedo al default.",
      "Dos aplicaciones prácticas del principio. Primera, como detector de fraudes y espejismos: cualquier oferta de 'alto rendimiento sin riesgo' — la financiera que paga 8% mensual 'garantizado', el esquema cripto 'sin pérdida posible' — viola la ley fundamental; el riesgo no está ausente, está escondido. Segunda, como conexión con la valuación: el retorno que los inversores exigen por el riesgo de un activo ES la tasa a la que se descuentan sus flujos. Más riesgo → mayor tasa de descuento → menor valor presente → precio más bajo. Riesgo y precio son la misma información leída de dos lados — y esta conexión es la base de todo lo que sigue: carteras, bonos, acciones."
    ],
    "example": {
      "title": "Plazo fijo, bono soberano, acción de YPF",
      "body": "Un ahorrista argentino tiene el menú completo de la escalera riesgo-retorno. Plazo fijo en un banco grande: retorno bajo y conocido, riesgo mínimo (dentro de lo argentino). Bono soberano en dólares: promete bastante más — pero el país defaulteó nueve veces, y ese cupón gordo ES la prima por la décima. Acción de YPF: puede duplicarse o desplomarse con el petróleo, el clima político y un tuit; el retorno esperado es alto porque la montaña rusa hay que pagarla. Ninguno de los tres es 'mejor': son puntos distintos de la misma recta — más rendimiento esperado, más estómago requerido. Lo que no existe en el menú, ni acá ni en Wall Street, es el punto 'rinde mucho y es seguro': ese punto se llama estafa."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Dos bonos idénticos en plazo y moneda: el de la empresa A rinde 5% anual, el de la empresa B rinde 14%. ¿Cuál es la lectura financiera correcta?",
        "options": [
          "A está mal valuado: nadie compraría un bono al 5% habiendo uno al 14%",
          "El mercado percibe en B un riesgo mucho mayor (probablemente de impago): el 9% extra es la prima que exige por cargarlo",
          "B es mejor inversión: paga casi el triple",
          "B es mejor para inversores conservadores porque asegura más rendimiento"
        ],
        "answer": 1,
        "explain": "Si B rinde más siendo comparable en todo lo demás, es porque su precio cayó hasta compensar un riesgo que el mercado ve — típicamente, la probabilidad de que no pague. El 14% no es rendimiento 'asegurado': es rendimiento prometido, ponderado por la chance real de cobrar menos o nada. El almuerzo gratis no está en el menú."
      },
      {
        "type": "open",
        "q": "Explicá por qué los activos más riesgosos deben ofrecer mayor retorno esperado para que alguien los compre: ¿qué pasaría con el precio de un activo riesgoso que ofreciera el mismo retorno que uno seguro?",
        "criterion": "Podés explicar por qué activos más riesgosos exigen mayor retorno esperado.",
        "model": "Los inversores son aversos al riesgo: a igual retorno esperado, todos eligen el activo seguro — perder duele más de lo que gana alegra. Un activo riesgoso que rindiera lo mismo que uno seguro no tendría compradores: su demanda caería y con ella su precio. Pero al bajar el precio, los mismos flujos futuros representan un retorno esperado mayor sobre lo invertido — y el precio sigue cayendo hasta que ese retorno extra (la prima de riesgo) compensa el riesgo a ojos del inversor marginal. El mercado fabrica la relación riesgo-retorno por pura oferta y demanda: el retorno alto no es un premio regalado, es el descuento que hubo que hacerle al precio para que alguien aceptara el riesgo."
      }
    ],
    "takeaway": "El rendimiento extra nunca es gratis: es el precio al que el mercado te vende un riesgo — y si no ves el riesgo, es que está mejor escondido."
  },
  "diversificacion": {
    "id": "diversificacion",
    "hook": "Hay una sola oferta legítima de 'algo por nada' en todas las finanzas: combinando activos que no se mueven juntos, podés bajar el riesgo sin bajar el retorno esperado. Todo lo demás se paga; esto es gratis.",
    "explanation": [
      "<b>Diversificar</b> es repartir la inversión entre activos distintos para que los golpes no lleguen todos juntos. La intuición del huevo y la canasta es vieja; lo que las finanzas agregaron es la precisión de POR QUÉ funciona: la clave no es la cantidad de activos sino su <b>correlación</b> — la medida en que se mueven juntos. Si dos activos suben y bajan al unísono (correlación alta), tener ambos es casi como tener uno: cuando duele, duele todo junto. Si se mueven independientemente — o mejor, en direcciones opuestas —, los malos días de uno coinciden con días neutros o buenos del otro, y el vaivén de la cartera total se amortigua.",
      "El resultado que parece magia pero es aritmética: una cartera de activos poco correlacionados tiene MENOS volatilidad que el promedio de las volatilidades de sus piezas, mientras su retorno esperado es exactamente el promedio de los retornos. Bajás el riesgo sin resignar rendimiento esperado — por eso se lo llama el único almuerzo gratis de las finanzas. Y el corolario menos intuitivo: un activo individualmente volátil puede REDUCIR el riesgo de tu cartera, si tiende a subir cuando el resto baja. El riesgo de un activo no se juzga en soledad sino por lo que le hace al conjunto.",
      "El límite del truco: diversificar elimina el riesgo <b>idiosincrático</b> — el propio de cada activo: que esta empresa pierda un juicio, que aquel campo sufra granizo — porque los accidentes particulares se compensan entre muchos. Pero no puede eliminar el riesgo <b>sistemático</b>: el que golpea a todo junto — recesión global, crisis financiera, pandemia. Cuando el mercado entero se derrumba, las correlaciones 'se van a uno' y la canasta más repartida sufre igual. Diversificar te protege de los infortunios de cada huevo; del terremoto que voltea todas las canastas, no te protege nadie — y esa distinción entre los dos riesgos es la base del CAPM que viene después."
    ],
    "example": {
      "title": "El productor que siembra en cuatro zonas",
      "body": "Un productor agropecuario puede alquilar 4 campos en el mismo partido de Buenos Aires o repartirlos entre Buenos Aires, Córdoba, Salta y Entre Ríos. El rendimiento esperado por hectárea es parecido; el riesgo, no. Una sequía zonal, granizo o una inundación golpean fuerte una región pero rara vez a las cuatro a la vez: las cosechas de zonas distantes están poco correlacionadas, y la mala de una se compensa con la normal de otras. Su ingreso total se estabiliza sin resignar rendimiento esperado — almuerzo gratis. Ahora bien: si se derrumba el precio internacional de la soja, los cuatro campos sangran juntos. Contra el riesgo sistemático del precio, la geografía no diversifica nada — para eso tendría que salir del negocio sojero (o venderlo a futuro, pero esa es otra lección)."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Cuál de estas dos carteras está mejor diversificada: (A) acciones de 10 bancos argentinos, o (B) acciones de un banco, una petrolera, una agroexportadora y bonos de EE.UU.?",
        "options": [
          "B: sus activos responden a factores distintos y están menos correlacionados — la cantidad importa menos que la correlación",
          "A: tiene 10 activos contra 4",
          "Son equivalentes: lo que importa es el monto invertido",
          "A: los bancos son más seguros que las petroleras"
        ],
        "answer": 0,
        "explain": "Diez bancos del mismo país se mueven casi al unísono: los golpea la misma tasa, la misma regulación, la misma macro — correlación altísima, diversificación ilusoria. Cuatro activos de sectores y geografías distintas responden a shocks diferentes: menos piezas, pero mucho menos riesgo conjunto. Diversificar es buscar correlaciones bajas, no coleccionar tickers."
      },
      {
        "type": "open",
        "q": "Un amigo evalúa agregar a su cartera un activo muy volátil (oro, digamos) y lo descarta 'porque es riesgoso'. Explicale por qué la volatilidad individual del activo no alcanza para decidir, y qué característica debería mirar en cambio.",
        "criterion": "Podés explicar por qué la correlación, no solo la volatilidad individual, determina el riesgo de una cartera.",
        "model": "El riesgo que importa es el de la cartera completa, no el de cada pieza aislada. Un activo volátil pero con correlación baja — o negativa — con el resto puede REDUCIR el riesgo total: sus buenos días tienden a caer justo cuando la cartera sufre (el oro suele subir en las crisis que hunden a las acciones), amortiguando los golpes. Lo que debería mirar es la correlación del oro con sus otros activos: si es baja o negativa, agregarlo estabiliza la cartera aunque el oro en sí sea una montaña rusa. Juzgar un activo por su volatilidad individual es mirar el árbol: el riesgo vive en cómo se mueve el bosque."
      }
    ],
    "takeaway": "El riesgo de una cartera no es la suma de sus sustos: es cuánto se mueven juntos — correlación baja es el único almuerzo gratis de las finanzas."
  },
  "bonos_rendimiento": {
    "id": "bonos_rendimiento",
    "hook": "Suben las tasas y los tenedores de bonos pierden plata. ¿No era el bono el activo aburrido y seguro? El vínculo inverso entre tasas y precios de bonos desconcierta a todos al principio — y es pura lógica de valor presente.",
    "explanation": [
      "Un <b>bono</b> es deuda empaquetada para poder comprarse y venderse: quien lo emite (un Estado, una empresa) promete pagos futuros — típicamente <b>cupones</b> periódicos de interés más la devolución del capital al <b>vencimiento</b>. Comprar un bono es comprar ese flujo de promesas; su valor, como el de todo flujo futuro, es su valor presente. Y acá está el punto que lo explica todo: los pagos del bono están FIJOS en el contrato — lo que cambia es el precio al que ese flujo fijo se compra y vende en el mercado.",
      "El <b>rendimiento</b> (yield) de un bono es la tasa que ganás si lo comprás a su precio actual y cobrás los pagos prometidos — la tasa de descuento implícita que iguala precio con flujo. Como los pagos no se mueven, precio y rendimiento son la misma información al revés: pagás menos por las mismas promesas, ganás más; pagás más, ganás menos. De ahí la relación inversa con las tasas de mercado: si las tasas suben — porque el banco central ajustó, o el mercado exige más —, los bonos viejos que pagan cupones de la era anterior se vuelven poco atractivos, y su precio CAE hasta que su rendimiento alcanza al nuevo nivel. Tasas arriba, precios de bonos abajo — siempre, mecánicamente. Y cuanto más LARGO el bono, más sensible: sus pagos lejanos sufren el descuento compuesto muchas veces (esa sensibilidad tiene nombre técnico: duration).",
      "El rendimiento también encapsula el <b>riesgo</b>: entre dos bonos de igual plazo, el que rinde más carga más miedo — típicamente, de impago. La brecha entre el rendimiento de un bono y el del activo más seguro comparable (el bono del Tesoro americano, en el mundo dólar) es la prima de riesgo; en su versión país, el famoso <b>riesgo país</b> es exactamente eso, medido en puntos básicos sobre los bonos argentinos. Y la <b>curva de tasas</b> — el rendimiento a cada plazo, dibujado — resume las expectativas del mercado: normalmente asciende (más plazo, más premio); cuando se <b>invierte</b> y lo corto rinde más que lo largo, el mercado está diciendo que espera tasas menores mañana — usualmente, porque huele recesión."
    ],
    "example": {
      "title": "El riesgo país como rendimiento espejado",
      "body": "Cuando escuchás 'el riesgo país bajó de 2.000 a 800 puntos', estás oyendo la relación precio-rendimiento en acción. Los bonos argentinos prometen pagos fijos en dólares. Si el mercado teme un default, nadie los quiere: el precio se derrumba — a 30 centavos por dólar de promesa — y el rendimiento implícito se dispara (comprás barato promesas grandes: SI pagan, la tasa es enorme). Riesgo país alto = precios de bonos por el piso. Cuando la confianza vuelve, los mismos bonos — idénticos pagos, idéntico contrato — suben de precio, y su rendimiento comprime. Los que compraron en el pánico a 30 y ven el bono a 70 duplicaron su plata sin que el bono pagara un solo cupón extra: solo cambió el precio del miedo."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Tenés un bono a 10 años que paga cupón fijo del 5% anual. El banco central sube fuerte las tasas y los bonos nuevos comparables salen al 9%. ¿Qué pasa con el precio de tu bono si querés venderlo hoy?",
        "options": [
          "Cae solo si el emisor entra en default",
          "No cambia: el contrato de tu bono sigue igual",
          "Cae: nadie pagará el precio viejo por un flujo al 5% pudiendo comprar al 9% — tu bono debe abaratarse hasta rendir lo mismo",
          "Sube: tu bono es más antiguo y confiable"
        ],
        "answer": 2,
        "explain": "Los pagos de tu bono están fijos; lo que cambió es la vara. Para competir con bonos nuevos al 9%, el tuyo — que promete cupones del 5% — solo encuentra comprador a un precio menor, tal que quien lo compre gane el 9% de mercado. La caída del precio es el mecanismo que iguala rendimientos. Y por ser un bono largo, la caída es grande: diez años de cupones perdedores se descuentan uno por uno."
      },
      {
        "type": "open",
        "q": "Explicá con la lógica del valor presente por qué el precio de un bono cae cuando suben las tasas de interés, y por qué esa caída es mayor en los bonos largos que en los cortos.",
        "criterion": "Podés explicar por qué el precio de un bono cae cuando suben las tasas.",
        "model": "El precio de un bono es el valor presente de sus pagos futuros, que están fijos por contrato. Si la tasa de mercado sube, esos mismos pagos se descuentan a una tasa mayor — cada término se divide por un número más grande — y el valor presente cae: el precio debe bajar hasta que el rendimiento implícito del bono iguale la nueva tasa, porque nadie pagaría más por rendir menos que la alternativa. La caída es mayor en bonos largos porque sus pagos están más lejos: el descuento se aplica compuesto — (1+tasa) elevado a más años — así que una misma suba de tasa pega exponencialmente más fuerte sobre los flujos lejanos. Un bono corto devuelve el capital enseguida y casi no sufre; uno a 30 años amplifica cada movimiento de tasa."
      }
    ],
    "takeaway": "Los pagos del bono están fijos, así que precio y rendimiento son un subibaja: sube la tasa, baja el precio — y cuanto más largo el bono, más violento el sube y baja."
  },
  "valuacion_acciones": {
    "id": "valuacion_acciones",
    "hook": "Una empresa presenta ganancias récord y su acción se desploma. ¿El mercado enloqueció? No: las ganancias récord eran MENORES que las esperadas. En el precio de una acción no vive el presente — vive el futuro descontado.",
    "explanation": [
      "Una <b>acción</b> es una porción de propiedad de una empresa: derecho sobre sus ganancias futuras — repartidas como <b>dividendos</b> o reinvertidas para crecer. ¿Cuánto vale ese derecho? La respuesta de las finanzas es la que ya conocés: el <b>valor presente de los flujos futuros esperados</b>. Se proyectan las ganancias que la empresa generará y se descuentan a una tasa que refleje su riesgo. Mismo esqueleto que el bono — flujos descontados — con una diferencia brava: los flujos del bono están escritos en el contrato; los de la acción hay que imaginarlos. Valuar acciones es descontar conjeturas.",
      "De la fórmula salen las tres palancas que mueven cualquier precio accionario. Uno: las <b>expectativas de flujos</b> — noticias sobre ventas, márgenes, competencia, regulación cambian lo que se proyecta, y el precio con ello. Dos: la <b>tasa de descuento</b> — que combina la tasa libre de riesgo con la prima por el riesgo propio de la empresa: cuando las tasas globales suben, TODAS las acciones tienden a bajar sin que ninguna empresa haya cambiado (sus futuros valen menos en plata de hoy); y las empresas 'de crecimiento', cuyas ganancias grandes están lejos, sufren más — el descuento compuesto castiga los flujos lejanos, como en los bonos largos. Tres: el <b>crecimiento esperado</b> — pequeños cambios en cuánto se cree que crecerá una empresa mueven enormemente su valor, porque afectan todos los flujos de aquí a siempre.",
      "La consecuencia más contraintuitiva: el precio ya contiene lo que el mercado ESPERA — por eso lo que lo mueve no son las noticias buenas o malas, sino las <b>sorpresas</b>: la diferencia entre lo que pasó y lo que estaba descontado. Ganancia récord pero menor a la proyectada: cae. Pérdida enorme pero menor a la temida: sube. Ese 'ya está en el precio' — priced in — es media cultura financiera, y explica el desconcierto de los diarios: la acción no reacciona al resultado sino al error de la expectativa. Cuánto de racional tiene ese mecanismo — si los precios agregan bien la información o se contagian euforias — es la pregunta de la lección de mercados eficientes."
    ],
    "example": {
      "title": "YPF después de Vaca Muerta: el futuro cambiando de precio",
      "body": "La acción de YPF cotiza en Buenos Aires y Nueva York, y su historia reciente es un curso de valuación. ¿Por qué puede duplicarse en meses sin que la empresa venda un litro más de nafta? Porque lo que cotiza no es el presente sino el flujo futuro esperado: una mejora en las perspectivas de Vaca Muerta, un cambio regulatorio que promete tarifas realistas, o un giro político que baja el riesgo percibido (la tasa de descuento) revalúan TODOS los años futuros de golpe. El mismo mecanismo al revés: la expropiación de 2012 o un congelamiento de tarifas hunden la acción aunque la producción del trimestre sea idéntica. La refinería es la misma; lo que cambió de precio es el futuro."
    },
    "check": [
      {
        "type": "mcq",
        "q": "La Reserva Federal sube fuertemente la tasa de interés. Sin ninguna noticia sobre empresas concretas, las bolsas caen — y las tecnológicas de alto crecimiento caen mucho más que las eléctricas de dividendos estables. ¿Por qué?",
        "options": [
          "La tasa de descuento subió: todos los flujos futuros valen menos hoy, y las tecnológicas — cuyas grandes ganancias están lejos en el tiempo — sufren más el descuento compuesto",
          "Las tecnológicas tienen más deuda que las eléctricas",
          "Los inversores venden acciones para pagar sus créditos más caros",
          "Pura psicología: el pánico no tiene lógica"
        ],
        "answer": 0,
        "explain": "El precio de una acción es valor presente de flujos futuros: con tasa mayor, el mismo futuro vale menos hoy — cae todo. Y la caída es despareja por la estructura temporal: la eléctrica paga dividendos ya (flujos cercanos, poco castigados); la tecnológica promete ganancias enormes en 10 años, que descontadas a tasa alta y compuesta se achican brutalmente. Es la misma lógica de los bonos largos versus cortos."
      },
      {
        "type": "open",
        "q": "Una empresa anuncia las mayores ganancias trimestrales de su historia y su acción cae 8% ese día. Explicá cómo es posible, usando la idea de que el precio refleja expectativas de flujos futuros descontados.",
        "criterion": "Podés explicar por qué el precio de una acción refleja expectativas de flujos futuros descontados.",
        "model": "El precio previo al anuncio ya incorporaba las ganancias que el mercado ESPERABA — que eran aún mayores que el récord anunciado, o venían acompañadas de proyecciones futuras más flojas (menos ventas esperadas, márgenes cayendo). Al conocerse el resultado, lo que se ajusta no es la reacción al número absoluto sino la corrección de la conjetura: los flujos futuros esperados se revisaron a la baja respecto de lo descontado, y el valor presente de ese futuro revisado es menor. La acción no cotiza el pasado glorioso del trimestre: cotiza el flujo de todos los años que vienen, y ese flujo acaba de achicarse en la mente del mercado."
      }
    ],
    "takeaway": "Una acción no vale por lo que la empresa ganó sino por lo que se espera que gane, descontado — por eso los precios no reaccionan a las noticias, sino a las sorpresas."
  },
  "arbitraje": {
    "id": "arbitraje",
    "hook": "Comprar dólar MEP a $1.000 y venderlo en otra ventanilla a $1.100 no es una inversión: es plata gratis. Y justamente porque es plata gratis, no dura ni una tarde. Ese mecanismo — la ganancia gratis que se autodestruye — es el policía de todos los precios.",
    "explanation": [
      "El <b>arbitraje</b> es la operación de comprar y vender simultáneamente el mismo activo (o equivalentes) para capturar una diferencia de precio, sin asumir riesgo y sin poner capital neto. Su fundamento es la <b>ley de un precio</b>: el mismo activo debe cotizar al mismo precio en todos lados — porque si no, alguien puede comprarlo donde está barato y venderlo donde está caro, embolsando la diferencia sin riesgo. Es la ganancia más pura que existe... y por eso mismo, la más efímera.",
      "El mecanismo se autodestruye: los arbitrajistas que compran en el mercado barato empujan ese precio hacia ARRIBA, y al vender en el caro lo empujan hacia ABAJO. La propia operación cierra la brecha que la hacía rentable. En mercados líquidos y vigilados por algoritmos, las diferencias duran milisegundos. La consecuencia conceptual es enorme: podés asumir que en equilibrio NO hay oportunidades de arbitraje — y de ese supuesto de 'no hay almuerzo gratis tirado en la vereda' se deriva media teoría de valuación: activos con los mismos flujos deben valer lo mismo, y el precio de un paquete debe igualar la suma de sus partes.",
      "Los matices del mundo real: muchas brechas de precio que parecen arbitraje no lo son — sobreviven porque hay <b>costos de transacción</b> (comisiones, impuestos, fletes), <b>barreras</b> (regulaciones, cepos, límites de capital) o <b>riesgo residual</b> escondido (los 'equivalentes' no eran tan idénticos, o la brecha puede ensancharse antes de cerrarse y fundirte en el camino). La regla práctica del economista: cuando veas dos precios distintos para lo mismo sosteniéndose en el tiempo, no anuncies plata gratis — buscá la fricción. La brecha persistente es siempre el precio de alguna barrera."
    ],
    "example": {
      "title": "El dólar y sus brechas: arbitraje con cepo",
      "body": "Argentina con cepo es un zoológico de la ley de un precio: dólar oficial a $800, MEP a $1.100, blue a $1.150. ¿El mismo billete a tres precios? La ley de un precio grita arbitraje: comprá oficial, vendé blue, ganancia inmediata. Por eso existen el 'puré' y los 'coleros' — arbitrajistas artesanales. ¿Y por qué la brecha no se cierra? Porque el arbitraje está BLOQUEADO: cupos de USD 200, prohibiciones cruzadas, parking, impuestos. La brecha cambiaria es la medida exacta de la fuerza de la barrera — y la prueba por el absurdo de la teoría: apenas el cepo se relaja, los precios convergen solos, sin que nadie los coordine. Los arbitrajistas hacen gratis el trabajo de unificar el mercado."
    },
    "check": [
      {
        "type": "mcq",
        "q": "La misma acción de una empresa cotiza a $100 en una bolsa y a $103 en otra, de forma persistente durante meses. ¿Cuál es la lectura más sólida?",
        "options": [
          "Los inversores de la segunda bolsa son irracionales",
          "Es plata gratis esperando a que alguien la agarre",
          "La ley de un precio quedó refutada",
          "Debe existir alguna fricción — costos de transacción, restricciones regulatorias o de convertibilidad — que impide o encarece el arbitraje en al menos $3"
        ],
        "answer": 3,
        "explain": "Una brecha que persiste es una brecha que nadie puede — o a nadie le conviene — arbitrar: si la ganancia fuera realmente libre, los arbitrajistas la habrían cerrado ya. La persistencia es evidencia de fricción: comisiones, impuestos, trabas para mover el activo entre mercados. La ley de un precio no dice que las brechas no existan: dice que las brechas miden las barreras."
      },
      {
        "type": "open",
        "q": "El mismo commodity cotiza a USD 50 en el mercado A y a USD 54 en el mercado B. Describí qué operación harías para explotarlo, qué efecto tendría sobre ambos precios si muchos la hacen, y qué te haría dudar antes de anunciarla como 'ganancia sin riesgo'.",
        "criterion": "Podés reconocer una oportunidad de arbitraje y explicar por qué tiende a desaparecer.",
        "model": "La operación: comprar en A a 50 y simultáneamente vender en B a 54 — USD 4 por unidad, sin exposición al precio del commodity porque compro y vendo a la vez. Si muchos lo hacen, la compra masiva en A sube su precio y la venta masiva en B lo baja: la brecha se cierra sola — el arbitraje se autodestruye, que es exactamente cómo la ley de un precio se impone. Antes de festejar, revisaría las fricciones: costo de flete y almacenaje entre mercados, comisiones e impuestos (¿se comen los 4 dólares?), diferencias de calidad o entrega entre los contratos (¿es realmente el mismo bien?), y restricciones para operar en ambos mercados. Si la brecha sobrevive a esa lista, era demasiado buena para ser verdad — casi siempre lo es."
      }
    ],
    "takeaway": "La plata gratis se autodestruye: los que la agarran cierran la brecha — y por eso lo idéntico termina valiendo lo mismo, salvo que una barrera lo impida."
  },
  "mercados_eficientes": {
    "id": "mercados_eficientes",
    "hook": "Un mono tirando dardos a la página de cotizaciones le empata a la mayoría de los gestores profesionales de fondos. No es un chiste: es un resultado empírico robusto — y hay una teoría elegante que explica por qué tenía que pasar.",
    "explanation": [
      "La <b>hipótesis de mercados eficientes</b> (HME) dice que los precios de los activos ya reflejan toda la información disponible. El mecanismo es el arbitraje generalizado que ya conocés: miles de inversores profesionales cazan cualquier dato que anticipe un precio — balances, noticias, patrones —, y al operar sobre él lo INCORPORAN al precio de inmediato. La paradoja fundante: como todos buscan la información no aprovechada, no queda información sin aprovechar. Si fuera obvio que una acción subirá mañana, subiría hoy. Corolario brutal: los movimientos futuros de precios son impredecibles — no porque el mercado sea caótico, sino porque toda predicción con fundamento ya está descontada; solo las sorpresas mueven precios, y las sorpresas, por definición, no se predicen.",
      "La hipótesis viene en tres dosis. Forma <b>débil</b>: los precios ya incorporan toda la información de precios PASADOS — implica que el análisis técnico (chartismo) no puede generar ganancias sistemáticas. Forma <b>semifuerte</b>: incorporan toda la información PÚBLICA — balances, noticias, proyecciones; implica que ni el análisis fundamental de datos públicos alcanza para ganarle al mercado en forma consistente. Forma <b>fuerte</b>: incorporan TODA la información, incluso la privada — implicaría que ni el insider gana; esta forma es la menos creíble (los insiders sí ganan, por eso operar con información privilegiada es delito).",
      "¿Qué queda en pie? La evidencia respalda bastante la forma débil y buena parte de la semifuerte: tras costos y comisiones, la enorme mayoría de los fondos activos NO le gana a un índice pasivo en horizontes largos — el fundamento de la revolución de los fondos indexados, quizás la consecuencia práctica más valiosa de toda la teoría financiera para el ahorrista común. Los matices honestos: hay anomalías documentadas, burbujas que en retrospectiva desafían toda eficiencia, y la crítica conductual (la gente que fija precios tiene los sesgos que verás en Comportamiento). La postura sensata no es religiosa sino bayesiana: el mercado no es perfecto, pero es MUY difícil de vencer — y quien te venda lo contrario, cobra comisión por el intento."
    ],
    "example": {
      "title": "El fondo estrella que volvió al promedio",
      "body": "Cada año, algún fondo común de inversión saca rendimientos espectaculares y los publicita a página entera. La HME hace una predicción incómoda: ese desempeño NO persistirá — con miles de fondos operando, cada año alguno le acierta por pura distribución estadística, igual que en una tribuna llena alguien acierta cinco penales seguidos. Los datos son lapidarios: los fondos ganadores de un quinquenio rara vez repiten en el siguiente, y a 15-20 años, más del 85% de los fondos activos pierde contra el índice que intenta vencer — después de cobrar comisiones por intentarlo. La lección práctica del ahorrista: ante el folleto del fondo estrella, la pregunta eficiente es '¿habilidad o suerte ya descontada?' — y la respuesta histórica es casi siempre la segunda."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Un analista descubre que las acciones que publican buenos balances suben ese mismo día. Propone la estrategia: 'comprar apenas sale el buen balance'. Según la forma semifuerte de la HME, ¿qué falla?",
        "options": [
          "Para cuando puede comprar, el precio ya incorporó la noticia: la información pública se descuenta en minutos, y la ganancia se la llevó quien fijó el precio nuevo",
          "Nada: es una estrategia ganadora sistemática",
          "Los balances no afectan los precios de las acciones",
          "Los balances son información privada"
        ],
        "answer": 0,
        "explain": "La forma semifuerte dice que los precios incorporan la información pública casi instantáneamente: el salto del precio ocurre en los primeros minutos (o en el mismo instante del anuncio), no a lo largo de días aprovechables. Comprar 'apenas sale la noticia' es comprar al precio que ya la contiene. Solo la sorpresa no anticipada movió el precio — y esa no se podía comprar de antemano."
      },
      {
        "type": "open",
        "q": "Explicá las tres formas de la hipótesis de mercados eficientes (débil, semifuerte, fuerte) — qué información incorpora el precio en cada una — y qué implica cada una para el análisis técnico, el análisis fundamental y el insider trading.",
        "criterion": "Podés explicar las tres formas de eficiencia y qué implican para las estrategias activas.",
        "model": "Débil: el precio incorpora toda la información contenida en los precios y volúmenes pasados — el análisis técnico (buscar patrones en los gráficos) no puede rendir de forma sistemática, porque cualquier patrón explotable ya fue explotado. Semifuerte: incorpora además toda la información pública — balances, noticias, proyecciones —, con lo cual tampoco el análisis fundamental sobre datos públicos genera retornos extraordinarios consistentes: llegar a la misma conclusión que mil analistas no da ventaja. Fuerte: incorpora hasta la información privada — ni siquiera el insider ganaría; es la forma menos sostenible empíricamente: los insiders sí obtienen retornos anormales, y por eso usar información privilegiada está penado. La evidencia práctica acompaña sobre todo a las dos primeras: de ahí la superioridad histórica de indexarse a bajo costo frente a la gestión activa."
      }
    ],
    "takeaway": "Si la información puede anticipar un precio, ya lo movió: ganarle al mercado exige saber algo que el mercado no sepa — y el mercado sabe muchísimo."
  },
  "capm": {
    "id": "capm",
    "hook": "Una acción puede ser una montaña rusa y aún así pagar poco premio por el susto. ¿Injusto? No: el mercado solo paga por los sustos que no te podés sacar de encima diversificando. El CAPM es la fórmula de esa idea.",
    "explanation": [
      "El <b>CAPM</b> (Capital Asset Pricing Model) responde LA pregunta de las finanzas: ¿cuánto retorno esperado corresponde a cada activo? Su punto de partida es la lección de diversificación: el riesgo idiosincrático — el propio de cada empresa — se elimina gratis armando una cartera amplia. Y de ahí su lógica central: el mercado no paga prima por un riesgo que podés eliminar gratis. Si un activo pagara premio por su riesgo diversificable, los inversores diversificados — que no sufren ese riesgo — lo comprarían masivamente por 'sobrepagado', subiendo su precio y comiéndose el premio. En equilibrio, solo se remunera el riesgo <b>sistemático</b>: el que ni la mejor cartera elimina, porque golpea a todo junto.",
      "La medida de ese riesgo sistemático es <b>beta</b>: cuánto se mueve un activo cuando se mueve el mercado entero. Beta 1: acompaña al mercado. Beta 2: amplifica — sube y cae el doble; agregarlo a tu cartera la vuelve más sensible al riesgo común, y eso exige premio. Beta 0,3: casi inmune al ciclo — un amortiguador que se paga aceptando menos retorno. La fórmula ata todo: retorno esperado = tasa libre de riesgo + beta × prima de mercado. En palabras: lo que rinde no arriesgar nada, más el premio del riesgo común multiplicado por cuánto de ese riesgo común carga este activo. Nada más — la volatilidad propia, por salvaje que sea, no suma retorno esperado.",
      "El ejemplo que ordena la intuición: una minera de oro puede ser violentamente volátil, pero si sus vaivenes (leyes del mineral, huelgas, hallazgos) no van con el ciclo económico, su beta es bajo y su retorno esperado también — sus sustos son diversificables, nadie paga por ellos. Un banco puede ser menos volátil, pero su suerte va pegada a la economía: beta alto, prima alta. El CAPM se usa en todas partes — es la tasa de descuento estándar para valuar empresas y proyectos — aunque la letra chica empírica sea conocida: los betas se mueven, la relación beta-retorno es más chata de lo predicho, y hay factores que el modelo no captura. Sobrevive por lo que enseña: el precio del riesgo no depende de cuánto tiembla el activo, sino de CON QUIÉN tiembla."
    ],
    "example": {
      "title": "Ternium versus la minera de oro",
      "body": "Pensá dos acciones del panel local. Una siderúrgica como Ternium vive del ciclo: construcción, autos, obra pública — cuando la economía vuela, vende todo; en recesión, se hunde con ella. Beta alto: cada peso invertido ahí amplifica tu exposición al riesgo que ya tenés por vivir en esta economía, y por cargarlo exigís retorno extra. Una minera de oro suele ser lo contrario: el oro sube justamente cuando el mundo tiembla — su beta es bajo o negativo, funciona de amortiguador. Puede ser individualmente más volátil que Ternium (juicios, vetas, costos), pero esa volatilidad propia se diluye en una cartera diversificada: no se paga. Por eso, contra toda intuición, la acción más 'tranquila' puede deber rendir MÁS que la montaña rusa: el premio no sigue al susto — sigue al beta."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Dos acciones: A es muy volátil, pero sus vaivenes son propios (juicios, contratos puntuales) y no siguen al mercado (beta 0,2). B es menos volátil, pero acompaña amplificado el ciclo económico (beta 1,8). Según el CAPM, ¿cuál debe ofrecer mayor retorno esperado?",
        "options": [
          "B: su riesgo es sistemático (beta alto) y no se puede diversificar; la volatilidad propia de A se elimina gratis en una cartera y no se remunera",
          "A, porque su beta bajo la hace más escasa",
          "A: es más volátil y el riesgo se paga",
          "Las dos igual: lo que importa es el retorno pasado"
        ],
        "answer": 0,
        "explain": "El CAPM paga por beta, no por volatilidad total. Los sustos idiosincráticos de A desaparecen mezclados en una cartera amplia — nadie exige premio por un riesgo que puede eliminar gratis. B, en cambio, concentra el riesgo del que no se escapa: el del mercado entero. Su beta 1,8 exige la prima de mercado casi duplicada."
      },
      {
        "type": "open",
        "q": "Explicá por qué, según el CAPM, el mercado remunera el riesgo sistemático pero no el idiosincrático: ¿qué harían los inversores diversificados si un activo pagara prima por su riesgo diversificable?",
        "criterion": "Podés explicar por qué el CAPM premia el riesgo sistemático y no el idiosincrático.",
        "model": "El riesgo idiosincrático se elimina gratis: en una cartera amplia, los accidentes propios de cada empresa se compensan entre sí. Un inversor diversificado no sufre ese riesgo — para él, un activo que pagara prima por riesgo diversificable sería una ganga: retorno extra sin riesgo extra efectivo. Todos los diversificados lo comprarían, su precio subiría y el retorno esperado caería, hasta que la prima por lo diversificable desaparezca. En equilibrio solo queda remunerado el riesgo sistemático — el que se mueve con el mercado entero y ninguna diversificación elimina —, medido por beta: es el único riesgo que hasta el inversor mejor diversificado sigue cargando, y por eso el único por el que se puede cobrar."
      }
    ],
    "takeaway": "El mercado no paga por cuánto tiembla un activo sino por cuánto tiembla CON todo lo demás: solo el riesgo del que no te podés diversificar tiene precio."
  },
  "opciones_derivados": {
    "id": "opciones_derivados",
    "hook": "Hay contratos que valen más cuanto MÁS incierto es el mundo. No es un error: es su diseño. Las opciones cobran por asimetría — todo el upside, nada del downside — y la incertidumbre es su materia prima.",
    "explanation": [
      "Un <b>derivado</b> es un contrato cuyo valor deriva de otro activo — el <b>subyacente</b>: una acción, el dólar, la soja, una tasa. Los básicos: los <b>futuros</b> obligan a comprar o vender a un precio pactado en una fecha futura (así el exportador fija hoy el precio de su cosecha — cobertura); las <b>opciones</b>, en cambio, dan el DERECHO sin la obligación. Un <b>call</b> es el derecho a COMPRAR el subyacente a un precio fijado (el strike); un <b>put</b>, el derecho a VENDER. Ese 'sin obligación' — se ejerce solo si conviene — es toda la magia: introduce asimetría.",
      "Mirá el pago de un call con strike $100 al vencimiento. Si la acción termina en $130, ejercés: comprás a 100 lo que vale 130 — ganás $30. ¿En $150? Ganás $50: el upside crece sin techo. ¿Y si termina en $80, o en $50? No ejercés y punto: perdés solo la <b>prima</b> que pagaste por el contrato. Dibujado, el pago es un palo de hockey: plano en cero (menos la prima) para todo precio bajo el strike, y creciendo peso a peso por encima. El put es el espejo: paga cuando el subyacente CAE bajo el strike — un seguro contra derrumbes. Pagos no lineales: nada en el menú de comprar o vender el activo directamente produce esa forma.",
      "De la asimetría sale la propiedad más anti-intuitiva: el valor de una opción CRECE con la <b>volatilidad</b> del subyacente. La lógica: la opción captura los escenarios buenos enteros y esquiva los malos — vos limitás la pérdida a la prima. Más volatilidad significa escenarios extremos más probables en ambas direcciones; pero a la opción los extremos malos le dan lo mismo (pierde la prima igual) y los extremos buenos le pagan completo. Más dispersión = más upside capturable con el mismo downside acotado = prima más cara. Por eso las opciones se encarecen en las crisis y vísperas de elecciones. ¿Y cómo se valúan con precisión? Por <b>no arbitraje</b>: el pago de una opción puede replicarse con una cartera dinámica del subyacente y deuda — y dos cosas con los mismos pagos deben valer lo mismo (la idea detrás de Black-Scholes). Doble cara final: cobertura para el que traslada riesgo, apalancamiento explosivo para el que lo toma — el mismo contrato es seguro o dinamita según quién lo tenga y para qué."
    ],
    "example": {
      "title": "El futuro de dólar: el derivado más argentino",
      "body": "El derivado estrella del mercado local es el futuro de dólar en Rofex/Matba. Un importador que debe pagar USD 100.000 en marzo puede comprar futuros a $1.200: sea lo que sea que haga el dólar, su costo quedó clavado — cobertura pura, el riesgo cambiario pasó a otro. ¿Quién está enfrente? Especuladores que apuestan a que el dólar oficial llegará a marzo debajo de $1.200 — y, en varios episodios célebres, el propio Banco Central vendiendo futuros para plancharle las expectativas al mercado (apuesta que en 2015 terminó costando una fortuna al contribuyente cuando la devaluación llegó igual). El mismo contrato: seguro para el importador, apuesta para el especulador, herramienta —y bomba— de política para el BCRA. El derivado no tiene moral: distribuye un riesgo que ya existía hacia quien acepta cargarlo."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Comprás un call sobre una acción con strike $500, pagando $40 de prima. Al vencimiento la acción cotiza a $460. ¿Cuál es tu resultado?",
        "options": [
          "Perdés $80: los $40 de prima más los $40 de caída",
          "Ganás $40: el put te protege de la caída",
          "Estás obligado a comprar a $500, perdiendo $40 por acción más la prima",
          "Perdés $40: la opción no conviene ejercerla (comprar a 500 lo que vale 460) y expira sin valor — tu pérdida es la prima, nada más"
        ],
        "answer": 3,
        "explain": "La opción da derecho, no obligación: con la acción a $460, comprar a $500 sería regalar $40 — simplemente no ejercés. Tu pérdida queda acotada a la prima pagada: $40. Esa asimetría (pérdida limitada a la prima, ganancia ilimitada por encima del strike) es la definición misma del call — la obligación de comprar sería un futuro, no una opción."
      },
      {
        "type": "open",
        "q": "Describí el pago al vencimiento de un call y de un put (con strike K), y explicá por qué el valor de ambos AUMENTA cuando aumenta la volatilidad esperada del subyacente.",
        "criterion": "Podés dibujar el pago de un call y un put y explicar por qué el valor depende de la volatilidad.",
        "model": "Call: paga cero para todo precio final S por debajo del strike K, y paga (S − K) creciendo sin límite por encima — un palo de hockey hacia arriba a la derecha. Put: el espejo — paga (K − S) cuando S cae por debajo de K, creciendo cuanto más se derrumba, y cero por encima. En ambos, la pérdida del comprador está acotada a la prima. La volatilidad los encarece por la asimetría: más volatilidad hace más probables los escenarios extremos en las dos direcciones, pero la opción solo 'siente' los extremos favorables — los desfavorables pagan cero igual que los moderadamente malos. Más dispersión aumenta el valor esperado del lado bueno sin empeorar el lado malo (ya acotado): el derecho de capturar extremos vale más cuando los extremos abundan."
      }
    ],
    "takeaway": "Una opción es asimetría comprada: todo el lado bueno, nada del malo salvo la prima — por eso vale más cuanto más loco puede ponerse el mundo."
  },
  "mano_invisible": {
    "id": "mano_invisible",
    "hook": "Nadie planifica cuánto pan necesita Buenos Aires mañana. No hay un Ministerio del Pan calculando harina, levadura y reparto — y sin embargo el pan aparece, todos los días, en miles de panaderías. ¿Quién coordina esto? Nadie. Ese 'nadie' tiene nombre.",
    "explanation": [
      "La <b>mano invisible</b> es la metáfora de Adam Smith (1776) para el hallazgo más contraintuitivo de la economía: individuos persiguiendo su propio interés pueden producir, sin proponérselo, un orden social coordinado y beneficioso. El panadero no te hornea el pan por amor — lo hace por su ganancia; pero para ganar tiene que darte algo que valores a un precio que aceptes. En un mercado con competencia, el camino al interés propio pasa por servir al interés ajeno. El orden resultante — a quién le llega qué, quién produce cuánto — no lo diseñó nadie: <b>emergió</b>.",
      "El mecanismo concreto de la coordinación son los <b>precios</b>, funcionando como sistema de información y de incentivos a la vez. Cada precio comprime en un número todo lo relevante: si una helada arruina la cosecha de café, el precio sube — y millones de personas que jamás se enteraron de la helada empiezan a economizar café, mientras a los productores del mundo entero les conviene producir más. Nadie necesitó entender la causa; el precio transmitió la escasez y ajustó las conductas. Hayek llevó la idea al hueso: el conocimiento que una economía necesita — qué falta dónde, qué sobra, qué quiere cada quién — está disperso en millones de cabezas y es imposible de centralizar; el sistema de precios es la única computadora que lo procesa. Por eso las economías de planificación central fracasaron en abundancia y calidad: no por falta de empeño, sino de información — sin precios de mercado, el planificador vuela a ciegas.",
      "Las condiciones de la letra chica importan tanto como el teorema: la mano invisible funciona cuando hay <b>competencia</b> (sin ella, el interés propio deviene poder de monopolio), <b>precios libres</b> (controlados, dejan de informar), derechos de propiedad seguros — y cuando cada decisión carga sus costos completos. Ya conocés la lista de excepciones: son las fallas de mercado — externalidades, bienes públicos, poder de mercado, información asimétrica. La lectura adulta de Smith no es 'el mercado siempre acierta': es que la coordinación sin coordinador no solo es posible sino que es el mecanismo más potente conocido — y que entender cuándo se rompe es exactamente para qué sirve el resto de la economía."
    ],
    "example": {
      "title": "El asado del sábado: una cadena que nadie dirige",
      "body": "Pensá en todo lo que convergió para tu asado del sábado: el ternero criado en Corrientes, el frigorífico de Rosario, el camión refrigerado, la estación de servicio que lo abasteció, la sal de las salinas pampeanas, el carbón de un monte chaqueño, el carnicero de tu barrio que calculó cuánta tira comprar para no quedarse corto ni tirar mercadería. Miles de personas que no se conocen, que no saben que existís, cooperaron en cadena para que haya asado — cada una siguiendo su propio interés, guiada solo por los precios que enfrentaba. Ningún funcionario planificó esa cadena; ningún genio podría. Ahora el contraste: cada vez que un precio de esa cadena se controló — carne, combustible, lo que sea — aparecieron faltantes, colas y mercado negro. El precio que 'informaba' dejó de hacerlo, y la coordinación invisible se volvió descoordinación visible."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Según el argumento de Hayek sobre el conocimiento disperso, ¿por qué la planificación central falla incluso con planificadores brillantes y bien intencionados?",
        "options": [
          "Porque la gente no obedece las órdenes del plan",
          "Porque la información que la economía necesita — qué falta, qué sobra, qué quiere cada quién — está dispersa en millones de personas y solo los precios de mercado la agregan y transmiten",
          "Porque los países planificados carecen de recursos naturales",
          "Porque los planificadores son corruptos por naturaleza"
        ],
        "answer": 1,
        "explain": "El argumento no es moral sino informacional: el conocimiento económico relevante es local, cambiante y a menudo tácito — imposible de centralizar en un ministerio a tiempo. El sistema de precios lo procesa de forma descentralizada: cada precio resume escasez y valoración sin que nadie deba conocer el cuadro completo. Sin precios libres, el planificador decide a ciegas — por brillante que sea."
      },
      {
        "type": "open",
        "q": "Una helada destruye la mitad de la cosecha mundial de café. Sin ninguna autoridad que ordene nada, en semanas los consumidores del mundo consumen menos café y los productores siembran más. Explicá cómo los precios lograron esa coordinación descentralizada.",
        "criterion": "Podés explicar cómo precios descentralizados coordinan la actividad sin un planificador central.",
        "model": "La helada achica la oferta: al precio viejo hay faltante, y el precio del café sube. Esa suba hace dos trabajos a la vez. Como información: le comunica al mundo entero que el café se volvió más escaso — sin que nadie necesite saber de la helada, ni dónde fue, ni por qué. Como incentivo: al consumidor le conviene racionar (toma menos, cambia a té) y al productor le conviene expandir (siembra más, invierte en rindes) — cada uno persiguiendo su propio bolsillo. Millones de ajustes locales, motivados por interés propio y guiados por un solo número, reasignan el consumo hacia quienes más lo valoran y la producción hacia donde más falta. La coordinación ocurrió sin coordinador: el precio fue el mensaje y el incentivo a la vez."
      }
    ],
    "takeaway": "Los precios son el idioma en que millones de desconocidos se coordinan sin conocerse: cada uno persigue lo suyo, y el orden emerge sin que nadie lo diseñe."
  },
  "escuelas_pensamiento": {
    "id": "escuelas_pensamiento",
    "hook": "Ante la misma recesión, un economista recomienda gastar más, otro emitir menos, y un tercero no hacer nada. No es que alguno no haya estudiado: estudiaron mapas distintos. Conocer esos mapas es saber qué te están recetando — y por qué.",
    "explanation": [
      "Las <b>escuelas de pensamiento</b> son las grandes tradiciones que responden distinto a las mismas dos preguntas: ¿se autorregula la economía? y ¿qué debe hacer el Estado? La escuela <b>clásica</b> (Smith, Ricardo) fundó el oficio: mercados que se autorregulan vía precios, ventajas del comercio, Estado limitado — la mano invisible como tesis central. Su heredera moderna, la <b>neoclásica</b>, formalizó todo en agentes optimizadores y equilibrio: es el esqueleto matemático de la micro que venís estudiando.",
      "La Gran Depresión partió la disciplina. <b>Keynes</b> argumentó que la economía puede quedarse atascada en desempleo masivo sin corregirse sola: si todos recortan gastos a la vez, la demanda se derrumba y el ajuste de precios no alcanza o llega tarde — 'a largo plazo estamos todos muertos'. Su receta: el Estado debe gestionar la demanda agregada, gastando en las recesiones lo que el sector privado no gasta. El <b>monetarismo</b> (Friedman) contraatacó en los 60-70: la inflación es 'siempre y en todas partes un fenómeno monetario', la política fiscal activa suele llegar tarde y politizada, y la discrecionalidad hace más daño que bien — mejor reglas monetarias estables y humildad. La estanflación de los 70 le dio la razón en lo central, y la síntesis moderna que practican los bancos centrales — metas de inflación, expectativas ancladas, estabilizadores fiscales — es hija de ese matrimonio forzado: keynesiana en las recesiones, monetarista en el diseño institucional.",
      "La escuela <b>austríaca</b> (Mises, Hayek) corre por afuera de la síntesis: desconfía de los agregados y la matematización, pone el foco en el conocimiento disperso, el emprendedor y los procesos — no los equilibrios —, y sostiene que los booms artificiales de crédito barato siembran las crisis que luego estallan; su receta es la más anti-intervencionista de todas. Para ubicar a cualquier economista en el mapa, dos ejes bastan: cuánto confía en la autorregulación del mercado (mucho: clásicos, austríacos, monetaristas; poco: keynesianos) y qué palanca estatal acepta (fiscal activa: keynesianos; solo reglas monetarias: monetaristas; ninguna, y encima el dinero estatal es el problema: austríacos). Ninguna escuela ganó del todo — cada crisis las rebaraja — y la madurez intelectual del oficio es saber qué mapa estás usando y qué es lo que ese mapa no muestra."
    ],
    "example": {
      "title": "Tres recetas para la misma recesión argentina",
      "body": "Recesión, capacidad ociosa, desempleo subiendo. El keynesiano receta: obra pública y transferencias YA — hay recursos parados, el multiplicador hará el resto, el déficit se corrige después. El monetarista objeta: el problema argentino es medio siglo de emisión para financiar déficits — más gasto es más inflación; lo que falta es una regla monetaria creíble y disciplina fiscal, aunque duela un tiempo. El austríaco va más hondo: la recesión ES la corrección de un boom artificial previo inflado con crédito barato y gasto político; estimular de nuevo es patear la purga y agrandar la próxima crisis — hay que dejar que los precios relativos se reacomoden. Los tres miran los mismos datos. Recetan según su mapa — y la política económica argentina de las últimas décadas es, literalmente, el péndulo entre estos tres relatos."
    },
    "check": [
      {
        "type": "mcq",
        "q": "'La inflación es siempre y en todas partes un fenómeno monetario; los gobiernos deben atarse a reglas y abandonar la discrecionalidad.' ¿De qué escuela es esta bandera?",
        "options": [
          "Keynesiana",
          "Monetarista",
          "Austríaca",
          "Clásica original"
        ],
        "answer": 1,
        "explain": "Es la frase más célebre de Milton Friedman y resume el monetarismo: el nivel de precios lo gobierna la cantidad de dinero, y como la política discrecional llega tarde y politizada, mejor reglas monetarias estables. Los austríacos comparten la desconfianza en el Estado pero desconfían también de la gestión técnica del dinero; los keynesianos defienden justamente la discrecionalidad fiscal que Friedman ataca."
      },
      {
        "type": "open",
        "q": "Ubicá a keynesianos, monetaristas y austríacos según dos ejes: su confianza en que el mercado se autorregula, y su visión sobre qué debe hacer el Estado con la demanda y el dinero. Una o dos frases por escuela.",
        "criterion": "Podés ubicar a keynesianos, monetaristas y austríacos según su visión del rol del Estado y del dinero.",
        "model": "Keynesianos: baja confianza en la autorregulación — la economía puede estancarse en desempleo persistente —; el Estado debe gestionar activamente la demanda agregada con política fiscal (gastar en recesiones), y la política monetaria acompaña. Monetaristas: alta confianza en el mercado a mediano plazo; el dinero es lo único que el Estado debe administrar — con reglas estables, no discreción — porque la inflación es fenómeno monetario y el activismo fiscal llega tarde y distorsiona. Austríacos: máxima confianza en el proceso de mercado y el conocimiento disperso; el Estado no debe manipular ni la demanda ni el crédito — la expansión monetaria artificial es justamente lo que fabrica los booms y las crisis; su receta es dinero duro y mínima intervención."
      }
    ],
    "takeaway": "Keynes desconfía del mercado y usa el gasto; Friedman desconfía del gobierno y ata el dinero a reglas; los austríacos desconfían de ambos gerentes — conocé el mapa detrás de cada receta."
  },
  "instituciones": {
    "id": "instituciones",
    "hook": "Corea del Norte y Corea del Sur: misma península, misma gente, misma cultura, misma historia hasta 1953. Setenta años después, una economía es 25 veces más grande que la otra. Lo único que difiere son las reglas del juego.",
    "explanation": [
      "Las <b>instituciones</b> son las reglas del juego de una sociedad: los <b>derechos de propiedad</b> (lo tuyo es tuyo y podés venderlo, alquilarlo, hipotecarlo), el cumplimiento de los <b>contratos</b> (lo pactado se honra, y un juez imparcial lo fuerza si hace falta), el Estado de derecho (las reglas valen para todos, incluido el gobierno, y no cambian con cada humor político). Vistas con tus lentes de economista, las instituciones son <b>estructuras de incentivos</b>: definen qué conductas pagan — producir, invertir, innovar — y cuáles no — expropiar, evadir, capturar favores del poder.",
      "El canal hacia la prosperidad es directo y se entiende con puro razonamiento de incentivos. Invertir es sembrar hoy para cosechar en años: nadie construye una fábrica, planta una viña o funda una empresa si duda de que la cosecha será suya — si el Estado puede expropiarla, un competidor conectado puede robársela, o las reglas pueden reescribirse a mitad del partido. Propiedad insegura = horizonte corto = capital que huye o se esconde. Además, sin contratos ejecutables solo comerciás con quien conocés — la confianza no escala más allá de la familia y el barrio —, mientras que un poder judicial confiable permite comerciar con extraños, y de las ganancias del intercambio entre extraños está hecha toda economía moderna. Y la letra fina de North: importan las reglas escritas Y las informales (la confianza, las normas sociales) — y sobre todo su estabilidad: reglas mediocres pero previsibles suelen ganarle a reglas óptimas que cambian cada dos años.",
      "La evidencia del peso institucional es de las más sólidas de la economía: los experimentos naturales — las dos Coreas, las dos Alemanias — mantienen geografía y cultura constantes y dejan solo las reglas como variable; el resultado es inapelable. Acemoglu y Robinson lo generalizaron distinguiendo instituciones <b>inclusivas</b> (propiedad segura para muchos, mercados abiertos, poder limitado) de <b>extractivas</b> (diseñadas para que una élite drene al resto): las primeras alinean el interés individual con la creación de riqueza; las segundas, con su captura. Es la respuesta a la pregunta que dejó pendiente la lección de crecimiento — por qué unos países logran productividad y otros no, con acceso a las mismas tecnologías: la tecnología se copia; las reglas del juego, no tan fácil."
    ],
    "example": {
      "title": "Por qué el ahorro argentino duerme en dólares bajo el colchón",
      "body": "Argentina tiene décadas de talento, recursos y ahorro — y una inversión crónicamente baja. La explicación institucional está en la memoria de cualquier ahorrista: depósitos confiscados (Plan Bonex 1989, corralito 2001), ahorros jubilatorios estatizados (AFJP 2008), contratos pesificados a la fuerza, reglas de exportación y precios que cambian con cada gobierno — a veces con cada ministro. Cada episodio enseñó la misma lección: lo que está a la vista y en el sistema puede ser tomado. La respuesta de la gente es racionalidad pura, no cultura: se estima que los argentinos guardan más de 200.000 millones de dólares fuera del sistema — colchones, cajas de seguridad, cuentas afuera. Ese capital que no se presta, no construye y no financia empresas es el precio, contante y sonante, de las reglas que no se sostienen."
    },
    "check": [
      {
        "type": "mcq",
        "q": "En el país A, registrar una propiedad es simple y los jueces hacen cumplir los contratos; en el país B, los títulos son inciertos y los pleitos duran 15 años con resultado politizado. ¿Qué diferencia económica predice el enfoque institucional?",
        "options": [
          "A solo se beneficia si además baja los impuestos",
          "Ninguna: la inversión depende de los recursos naturales",
          "En A habrá más inversión de largo plazo, más crédito (la propiedad sirve de garantía) y comercio con extraños; en B, horizontes cortos, informalidad y negocios solo entre conocidos",
          "B crecerá más porque sus empresarios son más audaces"
        ],
        "answer": 2,
        "explain": "Las instituciones definen los incentivos a invertir: propiedad segura y contratos ejecutables alargan el horizonte (la cosecha será tuya), habilitan el crédito (un título firme es garantía hipotecable) y permiten confiar en desconocidos (un juez respalda el trato). Donde eso falta, la respuesta racional es invertir poco, esconder el capital y operar solo con la confianza personal — que no escala."
      },
      {
        "type": "open",
        "q": "Explicá el mecanismo por el cual los derechos de propiedad seguros fomentan la inversión y el crecimiento: ¿qué se pregunta un inversor antes de construir una fábrica, y cómo cambia su respuesta según la calidad institucional del país?",
        "criterion": "Podés argumentar por qué instituciones seguras de propiedad favorecen la inversión y el crecimiento.",
        "model": "El inversor se pregunta: si esto sale bien, ¿la ganancia será mía — o se la llevará una expropiación, un impuesto sorpresa, un competidor con contactos, una regla reescrita? Invertir es hundir capital hoy por frutos que llegan en décadas: la decisión depende enteramente de creer que las reglas de hoy valdrán mañana. Con propiedad segura y justicia imparcial, el cálculo cierra: se construye, se contrata, se innova — y además la propiedad firme sirve de garantía para el crédito que financia a otros. Con reglas inciertas, la respuesta racional es no invertir, invertir a corto plazo o sacar el capital: no por cobardía, sino porque el retorno esperado debe descontar la probabilidad de que te lo quiten. Multiplicá esa decisión por millones de personas y décadas: esa es la brecha de crecimiento entre países — los incentivos de las reglas, compuestos en el tiempo."
      }
    ],
    "takeaway": "Nadie siembra donde no va a cosechar: la propiedad segura y los contratos que se cumplen son la infraestructura invisible de toda la prosperidad."
  },
  "eleccion_publica": {
    "id": "eleccion_publica",
    "hook": "El economista detecta una falla de mercado y receta: 'que intervenga el Estado'. La teoría de la elección pública lo interrumpe con una pregunta incómoda: ¿y quién es exactamente 'el Estado'? Spoiler: gente. Con incentivos. Como todos.",
    "explanation": [
      "La <b>teoría de la elección pública</b> (Buchanan, Tullock, Olson) aplica el análisis económico a la política: votantes, políticos y burócratas no son ángeles al servicio del bien común — son personas respondiendo a incentivos, como las de todas las demás lecciones. El político maximiza votos y poder; el burócrata, presupuesto y estabilidad; el votante... casi ni participa, y por una razón económica precisa: como un voto individual prácticamente nunca decide una elección, informarse a fondo no rinde — la <b>ignorancia racional</b>. No es apatía: es la respuesta óptima al costo de informarse contra el beneficio de un voto que no mueve la aguja.",
      "De esos incentivos sale el resultado central: los <b>grupos concentrados les ganan a las mayorías difusas</b>, sistemáticamente. Un arancel que enriquece a 10 empresas en millones a costa de encarecerle el producto a 45 millones de consumidores en unos pesos por cabeza: para las 10 empresas, organizarse, financiar campañas y lobbear es la mejor inversión de su vida; para cada consumidor, ni enterarse vale la pena. Beneficio concentrado, costo difuso: el lobby chico y motivado derrota a la mayoría desorganizada casi siempre. Agregale la <b>búsqueda de rentas</b> (rent-seeking): talento y recursos dedicados no a crear riqueza sino a capturar la existente vía favores estatales — aranceles, licencias, subsidios, monopolios legales. Es doblemente ruinoso: por la distorsión que crea y por el esfuerzo productivo que desvía hacia los pasillos del poder.",
      "La lección metodológica es el punto maduro del curso: las fallas de mercado que ya conocés justifican intervención EN PRINCIPIO — pero la intervención la ejecuta un Estado con sus propias fallas: políticos con horizonte electoral (de ahí el sesgo deficitario y los ciclos económicos electorales), reguladores capturados por los regulados, programas que nacen para una emergencia y viven para siempre porque sus beneficiarios se organizan y sus pagadores no. La comparación honesta nunca es mercado imperfecto contra Estado ideal: es mercado imperfecto contra Estado imperfecto, caso por caso. Y el corolario constitucional de Buchanan: más importante que elegir buenos gobernantes es diseñar reglas — límites, transparencia, contrapesos — que funcionen aun cuando los gobernantes no sean buenos."
    ],
    "example": {
      "title": "Protecciones eternas y consumidores distraídos",
      "body": "Argentina gravó y restringió importaciones de electrónica durante décadas para sostener el ensamblaje en Tierra del Fuego. El costo — celulares, teles y notebooks entre los más caros del mundo — lo pagan 45 millones de consumidores, unos miles de pesos por cabeza al año: difuso, casi invisible en el ticket. El beneficio se concentra en un puñado de empresas y unos miles de empleos fueguinos, perfectamente organizados: cámaras empresarias, gremios, gobernadores — todos con nombre, cara y capacidad de movilizarse al primer amague de apertura. Resultado de manual: el régimen sobrevive a gobiernos de todos los signos desde 1972. No hace falta ningún villano — cada actor sigue racionalmente sus incentivos; el sesgo está en la estructura: la minoría que gana mucho por cabeza siempre pelea más fuerte que la mayoría que pierde poquito por cabeza."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Por qué es 'racional' que un votante promedio no se informe a fondo sobre las políticas que vota, mientras que un lobby industrial financia estudios, abogados y campañas?",
        "options": [
          "Porque la información sobre políticas públicas es secreta",
          "Porque los lobbies son ilegales y por eso más eficientes",
          "Porque los votantes son menos inteligentes que los empresarios",
          "Porque para el votante el costo de informarse supera el beneficio esperado (su voto casi nunca decide), mientras que para el lobby el beneficio concentrado de una política favorable justifica cualquier inversión en influir"
        ],
        "answer": 3,
        "explain": "Es puro cálculo costo-beneficio: informarse cuesta horas y el retorno de un voto individual es casi nulo — ignorancia racional. Para el grupo concentrado, en cambio, una regulación favorable vale millones: invertir en lobby es su mejor negocio. Esa asimetría de incentivos — no la maldad ni la estupidez de nadie — es lo que inclina la política hacia los intereses organizados."
      },
      {
        "type": "open",
        "q": "Un arancel encarece un producto para millones de consumidores y beneficia a un puñado de fabricantes locales. Explicá, con la lógica de la elección pública, por qué medidas así se aprueban y sobreviven décadas aunque el costo total supere al beneficio total.",
        "criterion": "Podés explicar por qué grupos concentrados suelen imponerse sobre mayorías difusas en política.",
        "model": "El beneficio está concentrado: pocos fabricantes ganan mucho cada uno, así que les rinde organizarse, financiar campañas, lobbear y movilizarse — y lo hacen con nombre y apellido ante cada político. El costo está difuso: millones de consumidores pierden poco cada uno — tan poco que ni les conviene informarse (ignorancia racional), mucho menos organizarse para resistir. El político enfrenta entonces un grupo agradecido, visible y organizado contra una mayoría que ni se entera: apoyar el arancel maximiza su apoyo aunque destruya valor neto. Y una vez instalada, la protección crea su propia clientela — empleos, gremios, gobernadores — que pelea por mantenerla con más fuerza de la que nadie pelea por removerla. La asimetría organizativa, no la ignorancia de los economistas, explica su inmortalidad."
      }
    ],
    "takeaway": "El Estado no es un ángel corrector: es gente con incentivos — y la minoría que gana mucho por cabeza le gana casi siempre a la mayoría que pierde poquito."
  },
  "desigualdad": {
    "id": "desigualdad",
    "hook": "Dos países pueden tener el mismo ingreso promedio y ser mundos opuestos: en uno la mayoría vive cerca del promedio; en el otro, una élite dorada convive con multitudes que no llegan a fin de mes. El promedio no ve eso — para verlo hay que medir el reparto.",
    "explanation": [
      "La <b>desigualdad</b> describe cómo se reparte la torta — y lo primero es distinguir QUÉ torta. La desigualdad de <b>ingreso</b> mira el flujo: lo que cada hogar gana por año (salarios, rentas, transferencias). La de <b>riqueza</b> mira el stock: lo acumulado — propiedades, empresas, ahorros. La riqueza está siempre MUCHO más concentrada que el ingreso: se acumula, se hereda y genera rendimientos que se reacumulan; dos personas con igual sueldo pueden separarlas una casa heredada. Confundir ambas es el error número uno del debate — 'los ricos' del impuesto a los ingresos y 'los ricos' de la riqueza son, en gran parte, poblaciones distintas.",
      "La medida estándar es el <b>coeficiente de Gini</b>: 0 si todos ganan lo mismo (igualdad perfecta), 1 si uno se lleva todo. En la práctica: los países más igualitarios (nórdicos, con Ginis de ingreso cerca de 0,27) contra los más desiguales (Sudáfrica, arriba de 0,60); Argentina ronda 0,42 — desigual para Europa, moderada para América Latina, la región más desigual del mundo. Ojo al leerlo: el Gini resume TODA la distribución en un número, así que pierde información (dos países con igual Gini pueden diferir en si la brecha está arriba o abajo), cambia según se mida antes o después de impuestos y transferencias — la diferencia entre ambos ES el efecto redistributivo del Estado — y no dice nada del NIVEL: un país puede ser igualitario y pobre, o desigual y próspero.",
      "¿Por qué importa? Acá conviene usar tu separación de eficiencia y equidad. Hay argumentos normativos (¿es justo este reparto?) que son de valores. Pero hay también argumentos positivos, de eficiencia: desigualdad extrema puede significar talento sin acceso a educación ni crédito (inversiones rentables que no ocurren — pérdida de torta, no solo de reparto), y concentración económica que compra poder político y tuerce las reglas a su favor — el puente con la elección pública. Del otro lado: cierta desigualdad ES el sistema de incentivos funcionando — premios a la innovación, al esfuerzo, al riesgo — y aplanarla del todo mataría la señal. La pregunta madura no es desigualdad sí o no, sino cuál: la que viene de crear valor y la que viene de capturar rentas o heredar privilegios son moral Y económicamente distintas — aunque el Gini las sume igual."
    ],
    "example": {
      "title": "El Gini argentino: la moderación que esconde dos películas",
      "body": "El Gini de ingresos argentino ronda 0,42 tras décadas de vaivenes: subió brutalmente en los 90 y la crisis de 2001 (pico cerca de 0,53), bajó fuerte entre 2003 y 2013, y volvió a tensarse con las crisis recientes. Pero el número esconde las dos distinciones de la lección. Primera: ese es el Gini DESPUÉS de transferencias — AUH, jubilaciones, subsidios recortan varios puntos; el reparto 'de mercado' es bastante más desigual. Segunda: es ingreso, no riqueza — la propiedad de campos, empresas e inmuebles está muchísimo más concentrada, y una parte descansa fuera del país, invisible para toda estadística local. Dos personas con el mismo sueldo — una con departamento heredado de la abuela, la otra alquilando — tienen el mismo lugar en el Gini de ingresos y viven en planetas distintos: esa diferencia es exactamente la que la desigualdad de riqueza captura y la de ingreso no."
    },
    "check": [
      {
        "type": "mcq",
        "q": "El país A tiene Gini de ingreso 0,30 y el país B, 0,50. ¿Cuál de las siguientes conclusiones es correcta?",
        "options": [
          "A redistribuye más que B a través de impuestos",
          "En A la gente vive mejor que en B",
          "El ingreso está repartido de forma más pareja en A que en B — pero el Gini no dice nada sobre cuál país es más rico",
          "En B hay más pobreza absoluta que en A"
        ],
        "answer": 2,
        "explain": "El Gini mide solo la forma del reparto: más cerca de 0, más parejo. No informa el nivel de ingreso (A podría ser pobre e igualitario; B, rico y desigual), ni la pobreza absoluta, ni cuánto interviene el Estado — para eso harían falta el PIB per cápita, la línea de pobreza y la comparación de Gini antes y después de transferencias."
      },
      {
        "type": "open",
        "q": "Explicá qué mide el coeficiente de Gini y por qué la desigualdad de riqueza es sistemáticamente mayor que la de ingreso: ¿qué mecanismos hacen que el stock se concentre más que el flujo?",
        "criterion": "Podés interpretar un coeficiente de Gini y distinguir desigualdad de ingreso de la de riqueza.",
        "model": "El Gini resume en un número entre 0 y 1 cuánto se aparta una distribución de la igualdad perfecta: 0 es todos iguales, 1 es uno se lleva todo; un Gini de 0,45 indica una concentración considerablemente mayor que uno de 0,30. El ingreso es flujo (lo ganado por período); la riqueza es stock (lo acumulado). La riqueza se concentra más por tres mecanismos: se acumula — quien puede ahorrar suma año tras año mientras quien vive al día no acumula nada —; rinde — los activos generan rentas e intereses que se reinvierten, componiendo la ventaja —; y se hereda — cada generación arranca desde el stock de la anterior, transmitiendo la concentración. Por eso los Ginis de riqueza (típicamente 0,7-0,9) superan siempre por mucho a los de ingreso, y por eso dos personas con idéntico sueldo pueden estar en posiciones patrimoniales opuestas."
      }
    ],
    "takeaway": "El promedio esconde el reparto y el ingreso esconde la riqueza: el Gini mide lo primero, pero la concentración de verdad vive en lo segundo — el stock que se acumula, rinde y se hereda."
  },
  "desarrollo": {
    "id": "desarrollo",
    "hook": "Un chico nacido en Noruega y uno nacido en Níger no difieren en nada al nacer — y sus vidas económicas ya están, estadísticamente, a un abismo de distancia. Por qué existe ese abismo y cómo se cruza es, sencillamente, la pregunta más importante de la economía.",
    "explanation": [
      "La <b>economía del desarrollo</b> estudia por qué unos países son ricos y otros pobres, y qué saca a los pobres de ahí. No es solo 'crecimiento con menos PIB': el desarrollo incluye la <b>transformación</b> — de economías agrarias e informales a productivas y diversificadas, con salud, educación y Estados que funcionan. La pregunta hereda lo que ya sabés — el crecimiento de largo plazo lo domina la productividad, y la productividad depende de las instituciones — pero la agenda del desarrollo pregunta algo más incómodo: ¿por qué los países pobres no adoptan, sin más, las tecnologías e instituciones que ya demostraron funcionar?",
      "Las explicaciones compiten — y en serio. La <b>institucional</b> (Acemoglu-Robinson): instituciones extractivas, a menudo heredadas del diseño colonial, benefician a élites que bloquean el cambio — la pobreza no es un accidente sino un equilibrio que alguien defiende. La <b>geográfica</b> (Sachs, Diamond): trópicos con malaria, suelos pobres, países sin salida al mar y lejos de los mercados corren con pesas en los tobillos — y algo de esa desventaja opera incluso con buenas reglas. La del <b>capital humano</b>: sin salud y educación no hay productividad posible, y su falta se hereda. Y las <b>trampas de pobreza</b>: círculos que se autoalimentan — soy pobre, no ahorro; no ahorro, no invierto; no invierto, sigo pobre — o su versión nutricional: mal alimentado rindo poco, rindo poco y sigo mal alimentado. Si las trampas dominan, un empujón grande de una sola vez (el 'big push' de ayuda o inversión) puede saltar el círculo; si el problema es institucional, la misma ayuda se filtra hacia la élite de siempre — el diagnóstico decide la receta.",
      "El estado del arte tiene dos hitos honestos. Uno empírico: la revolución de los <b>experimentos aleatorios</b> (Duflo, Banerjee, Kremer — Nobel 2019) bajó la pregunta gigante a preguntas contestables: ¿qué mejora el aprendizaje, qué logra que se usen las mosquiteras, funciona el microcrédito? — con resultados a menudo humillantes para las grandes teorías. Otro histórico: los éxitos reales — Corea, Taiwán, China sacando a 800 millones de la pobreza, Botswana — no siguieron un único manual: combinaron a su manera mercados, Estado activo, apertura gradual e instituciones que — cada una a su modo — hicieron predecible el juego. La lección final es de humildad metodológica: cada milagro y cada fracaso del desarrollo refuta a alguna escuela — sospechá de cualquiera que te venda LA causa única de la riqueza de las naciones."
    ],
    "example": {
      "title": "Botswana y sus vecinos: diamantes con destinos opuestos",
      "body": "La 'maldición de los recursos' dice que las riquezas naturales suelen empobrecer: financian élites extractivas, aprecian la moneda matando al resto de la economía y vuelven innecesario cobrar impuestos — y con ellos, rendir cuentas. África la sufrió en serie: petróleo y minerales alimentando guerras y cleptocracias. Botswana tenía todos los números para lo mismo: sin salida al mar, semidesértica, y en 1966 uno de los países más pobres del planeta... hasta que encontró diamantes. La diferencia la hicieron las reglas: instituciones heredadas de jefaturas con contrapesos, élites que pactaron canalizar la renta diamantífera vía un fondo estatal transparente hacia educación e infraestructura, y medio siglo sin golpes de Estado. Resultado: décadas entre las economías de más rápido crecimiento del mundo, mientras vecinos con recursos comparables se estancaban. Mismos diamantes, geografía peor que la de muchos fracasados — otras reglas. Es el experimento que la teoría institucional muestra con orgullo... y que la geográfica contesta señalando que la malaria y el HIV igual le costaron carísimo. El debate sigue: eso también es la economía del desarrollo."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Qué es una 'trampa de pobreza' y qué implica para la política de desarrollo?",
        "options": [
          "Un círculo que se autoalimenta (pobreza → sin ahorro → sin inversión → pobreza), que implica que un empujón grande y único podría romper el círculo donde la ayuda gradual no alcanza",
          "La dependencia de un solo commodity de exportación",
          "Cualquier país con PIB bajo; implica que debe endeudarse",
          "Una política populista que empobrece; implica ajustar el gasto"
        ],
        "answer": 0,
        "explain": "La trampa es un equilibrio del que no se sale por acumulación gradual: cada peso extra se consume en sobrevivir y el círculo se cierra. Si el diagnóstico es correcto, la implicancia es el 'big push': una inyección suficientemente grande — de capital, salud o infraestructura — que salte el umbral de una vez. La crítica institucional responde que si las reglas son extractivas, el empujón se lo queda la élite: por eso el diagnóstico importa más que la receta."
      },
      {
        "type": "open",
        "q": "Nombrá al menos tres explicaciones en competencia sobre por qué unos países se desarrollan y otros no, con el mecanismo central de cada una — y explicá por qué el diagnóstico cambia la política recomendada.",
        "criterion": "Podés nombrar varias explicaciones en competencia sobre por qué unos países crecen y otros no.",
        "model": "Institucional: reglas extractivas permiten a una élite drenar la economía y bloquear el cambio — la receta es reformar las reglas del juego, y la ayuda sin reforma se filtra al poder de siempre. Geográfica: clima tropical con enfermedades, aislamiento y suelos pobres frenan la productividad más allá de las reglas — la receta es invertir contra la geografía: salud pública, infraestructura, acceso a mercados. Capital humano: sin educación ni salud no hay productividad, y su carencia se hereda — la receta es inversión masiva y sostenida en personas. Trampas de pobreza: círculos autoalimentados que la acumulación gradual no rompe — la receta es el empujón grande de una vez. Cada diagnóstico invalida la receta del otro: el big push fracasa contra instituciones extractivas, la reforma institucional no cura la malaria — por eso la evidencia empírica (incluidos los experimentos aleatorios) vale más que la lealtad a una escuela."
      }
    ],
    "takeaway": "La pobreza de las naciones no tiene una causa única: reglas, geografía, gente y trampas compiten como explicación — y equivocar el diagnóstico es recetar el remedio de otra enfermedad."
  },
  "gran_depresion": {
    "id": "gran_depresion",
    "hook": "Entre 1929 y 1933, la producción de Estados Unidos cayó 30%, uno de cada cuatro trabajadores quedó sin empleo y nueve mil bancos quebraron. La economía no se autorreguló: se hundió por cuatro años. De ese trauma nació la macroeconomía moderna.",
    "explanation": [
      "La <b>Gran Depresión</b> empezó con el crac bursátil de octubre de 1929, pero el derrumbe de la Bolsa fue el detonante, no la enfermedad. Lo que siguió fue una espiral de <b>demanda agregada</b> en caída libre — la que podés leer con tu modelo OA-DA: consumidores e inversores aterrados recortaron gasto; con menos ventas, las empresas despidieron; con menos empleo, menos gasto todavía. Y el amplificador decisivo fue monetario-bancario: <b>corridas</b> en cadena quebraron miles de bancos (sin seguro de depósitos, el pánico era racional), el crédito se evaporó y la cantidad de dinero se contrajo un tercio. La <b>deflación</b> — precios cayendo 25% — sonaba a alivio y era veneno: agrandaba las deudas en términos reales, quebrando a deudores y bancos por igual, y pagaba por esperar para comprar, hundiendo más la demanda.",
      "El escándalo teórico fue ese: la economía NO se autorreguló. La doctrina clásica decía que los precios y salarios ajustarían y el pleno empleo volvería solo; la política respondió con el manual de la época — equilibrar el presupuesto (recortando gasto en plena caída), defender el patrón oro con tasas altas, y hasta aranceles (Smoot-Hawley) que hundieron el comercio mundial. Cada medida 'prudente' profundizó el pozo. Ahí ataca <b>Keynes</b> (Teoría General, 1936): la economía puede quedarse atascada en un equilibrio con desempleo masivo, porque si todos ahorran y nadie gasta, la demanda que falta no reaparece sola — la paradoja de la frugalidad — y los salarios que caen deprimen la demanda tanto como abaratan el trabajo. Su conclusión revolucionaria: cuando el gasto privado se derrumba, el Estado debe reemplazarlo — déficit fiscal deliberado para sostener la demanda hasta que el sector privado vuelva.",
      "El legado institucional sigue vivo: seguro de depósitos y regulación bancaria (para cortar las corridas), estabilizadores automáticos, la síntesis keynesiana como manual de recesiones — y una lección monetaria que agregaron Friedman y Schwartz décadas después: la Reserva Federal convirtió una recesión en catástrofe al dejar contraer el dinero y caer los bancos; un banco central activo como prestamista de última instancia era la mitad de la cura. Esa relectura — ¿falló el mercado o falló la política monetaria? — es la madre de todos los debates entre keynesianos y monetaristas. Y su aplicación práctica quedó demostrada en 2008: enfrentados a una réplica casi exacta, los bancos centrales hicieron todo lo contrario que en 1930 — y el mundo tuvo una Gran Recesión, no una segunda Depresión."
    ],
    "example": {
      "title": "La paradoja de la frugalidad: cuando ahorrar hunde a todos",
      "body": "Pensalo a escala de un barrio. Golpea la incertidumbre y cada familia, prudentemente, recorta: menos restaurante, menos ropa, se posterga el auto. Cada una hizo lo correcto individualmente. Pero el gasto de cada uno es el ingreso de otro: el restaurante despide mozos, la tienda no repone stock, la concesionaria cancela pedidos a la fábrica. Los despedidos recortan a su vez — y la ola vuelve sobre las familias que ahorraron, ahora con menos ingresos y más miedo, recortando otra vez. El ahorro agregado ni siquiera sube: cae, porque cayó el ingreso del cual ahorrar. Esa es la trampa keynesiana en miniatura: lo individualmente prudente es colectivamente ruinoso, y no hay familia que pueda romper el círculo sola. La salida keynesiana: alguien con espaldas — el Estado — gasta cuando nadie más puede, corta la espiral y sostiene el ingreso hasta que el miedo pase."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Por qué la deflación de los años 30 — precios cayendo 25% — agravó la Depresión en vez de aliviarla?",
        "options": [
          "Porque encareció las exportaciones",
          "Porque obligó a subir los salarios",
          "Porque agrandó el peso real de las deudas (quebrando deudores y bancos) y premió postergar compras, hundiendo aún más la demanda",
          "Porque los precios bajos aumentaron el consumo de inmediato"
        ],
        "answer": 2,
        "explain": "Las deudas estaban fijadas en dólares nominales: con precios e ingresos cayendo, la misma deuda pesaba cada vez más en términos reales — cadena de quiebras de familias, empresas y los bancos que les habían prestado. Y con todo más barato mañana que hoy, esperar se volvió rentable: el consumo se postergó masivamente. Deflación con deudas es gasolina al fuego — la lección que hace que los bancos centrales modernos le teman tanto."
      },
      {
        "type": "open",
        "q": "Explicá por qué la Gran Depresión desacreditó la idea de que la economía se autorregula y cómo de ahí nació el enfoque keynesiano de gestión de la demanda: ¿cuál era el mecanismo clásico que falló y qué propuso Keynes en su lugar?",
        "criterion": "Podés explicar por qué la Depresión impulsó el enfoque keynesiano de gestión de la demanda.",
        "model": "El mecanismo clásico decía: ante el desempleo, salarios y precios bajan, el trabajo barato se recontrata y el pleno empleo vuelve solo. En los 30 el ajuste no llegó: cuatro años de caída, 25% de desempleo, deflación que — lejos de curar — quebraba deudores y bancos y hundía más la demanda; y el gasto que cada uno recortaba era el ingreso que otro perdía, espiral mediante. Keynes concluyó que la economía puede estancarse en un equilibrio con desempleo: la demanda insuficiente no se autorrepara, porque nadie tiene incentivo individual a gastar lo que el conjunto necesita. Su propuesta: gestionar la demanda agregada desde el Estado — déficit fiscal deliberado en la recesión, gastando lo que el sector privado no gasta, para cortar la espiral. La Depresión fue la demostración empírica que convirtió esa herejía en el manual estándar de las recesiones durante décadas."
      }
    ],
    "takeaway": "La Depresión enseñó que la economía puede hundirse sin tocar fondo por sí sola: cuando todos recortan a la vez, alguien tiene que gastar — de esa herejía nació la macro moderna."
  },
  "estanflacion": {
    "id": "estanflacion",
    "hook": "Según el manual de los años 60, era imposible: la inflación alta venía con desempleo bajo, y viceversa — elegías tu punto en el menú. En los 70, Estados Unidos tuvo 10% de inflación Y 8% de desempleo a la vez. El menú estaba mal impreso.",
    "explanation": [
      "La <b>estanflación</b> — estancamiento con inflación — fue el fenómeno de los años 70 que rompió la macroeconomía keynesiana ingenua. El cóctel: los <b>shocks del petróleo</b> (1973: la OPEP cuadruplica el precio del crudo; 1979: la revolución iraní lo duplica de nuevo) — el shock de OFERTA de tu modelo OA-DA: los costos de producir todo saltaron, la oferta agregada se corrió a la izquierda, y el resultado fue el par maldito: menos producto Y más precios, a la vez. Pero el petróleo no explica todo: la inflación ya venía incubándose de años de política monetaria y fiscal expansiva — gobiernos usando el 'menú' de la curva de Phillips, comprando empleo con inflación — y de <b>expectativas</b> que ya habían aprendido el truco.",
      "Ahí está el segundo golpe, el teórico: la estanflación confirmó en los datos lo que Friedman y Phelps habían predicho por pura lógica en 1968. El trade-off inflación-desempleo funciona solo mientras la inflación SORPRENDE; cuando trabajadores y empresas la incorporan a contratos y precios, el empleo vuelve a su tasa natural y queda solo la inflación — y encima persistente, porque las expectativas se realimentan: espero 10%, pido 10%, los costos suben 10%, la inflación da 10%. Los gobiernos de los 70 respondieron a cada suba de desempleo con más estímulo, que ya no compraba empleo — solo compraba más inflación. La espiral precios-salarios giró toda la década, con controles de precios (Nixon, 1971) que fallaron exactamente como tu lección de controles predice.",
      "El desenlace fijó el manual moderno. <b>Volcker</b> (Fed, 1979) hizo lo impensable: tasas al 20%, dos recesiones seguidas — y la inflación cayó de 13% a 3% para 1983. Caro, pero probó el punto monetarista: la inflación persistente es, al final, un fenómeno monetario, y matarla exige una determinación creíble que reancle las expectativas. El saldo institucional es el mundo actual: bancos centrales independientes con mandato antiinflacionario, metas de inflación explícitas, obsesión por la credibilidad y las expectativas — todo es cicatriz de los 70. Y una lección epistemológica que excede la macro: una correlación estadística (la curva de Phillips empírica) se desintegró apenas la política intentó explotarla — la gente aprende, y las 'leyes' hechas de gente cambian cuando las usás. Es la crítica de Lucas con fecha y víctimas."
    ],
    "example": {
      "title": "El colectivo, el asado y la espiral de los 70",
      "body": "El mecanismo de la espiral precios-salarios los argentinos lo conocen de memoria, y en los 70 fue global. Sube el petróleo: sube el colectivo, el flete, el plástico, la energía de la fábrica. El costo de vida salta, y los sindicatos — razonablemente — piden paritarias que lo compensen. Las empresas — razonablemente — trasladan el mayor costo salarial a precios. La nueva suba de precios dispara la siguiente ronda de paritarias, que dispara la siguiente remarcación... Cada actor se defiende; el conjunto fabrica inflación permanente. Y notá lo que NO hay en esta espiral: exceso de demanda. La economía puede estar en recesión con desempleo — y la calesita sigue girando sola, alimentada por costos y expectativas. Por eso el estímulo de demanda no la cura (le agrega nafta) y por eso frenarla exigió un shock de credibilidad: alguien — Volcker — que convenciera a todos, a la vez, de que la próxima ronda no iba a ser convalidada con emisión."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Por qué la estanflación de los 70 fue una anomalía imposible para la lectura ingenua de la curva de Phillips?",
        "options": [
          "Porque los shocks de petróleo bajaron los precios",
          "Porque esa lectura prometía un trade-off estable — más inflación, menos desempleo — y los 70 mostraron ambas cosas altas y subiendo a la vez",
          "Porque el desempleo era friccional y no cíclico",
          "Porque la inflación era demasiado alta para medirse bien"
        ],
        "answer": 1,
        "explain": "El menú de Phillips ofrecía elegir un punto: inflación alta CON desempleo bajo, o al revés. La estanflación se salió del menú: shocks de oferta más expectativas ya adaptadas produjeron el par 'imposible' — inflación y desempleo altos simultáneos. La curva estable resultó ser un espejismo de la era en que la inflación aún sorprendía."
      },
      {
        "type": "open",
        "q": "Explicá cómo la combinación de shock petrolero y expectativas adaptadas produjo estanflación, y por qué los gobiernos que respondieron con más estímulo de demanda solo empeoraron la inflación sin recuperar el empleo.",
        "criterion": "Podés explicar por qué la estanflación desafió la idea de un trade-off estable inflación-desempleo.",
        "model": "El shock petrolero corrió la oferta agregada a la izquierda: producir todo se encareció, así que cayó el producto Y subieron los precios a la vez — estancamiento con inflación, algo que un shock de demanda nunca produce. Sobre eso, las expectativas ya estaban entrenadas por años de inflación: sindicatos y empresas incorporaban cada suba a paritarias y precios por anticipado, armando la espiral precios-salarios que mantenía la inflación girando aun con desempleo alto. Cuando los gobiernos estimularon la demanda para recuperar empleo, el estímulo ya estaba descontado: no sorprendía a nadie, así que no abarataba el salario real ni generaba contrataciones — solo convalidaba la ronda siguiente de la espiral. Resultado: el mismo desempleo con inflación cada vez mayor. El trade-off explotable era, con expectativas despiertas, una ilusión — y sostenerlo a fuerza de estímulo solo compraba más inflación."
      }
    ],
    "takeaway": "Los 70 probaron que se puede tener lo peor de ambos mundos: contra un shock de oferta con expectativas despiertas, el estímulo de demanda no compra empleo — solo compra más inflación."
  },
  "crisis_2008": {
    "id": "crisis_2008",
    "hook": "Familias sin ingresos comprobables recibieron hipotecas; esas hipotecas, trituradas y reempaquetadas, obtuvieron sello AAA; y bancos apalancados 30 a 1 se las vendieron entre sí. Cuando la música paró, el sistema financiero mundial estuvo a días de fundirse. Nada de eso requirió villanos: alcanzó con incentivos.",
    "explanation": [
      "La cadena arranca en el mercado inmobiliario estadounidense. Años de tasas bajas y precios de viviendas que 'nunca caen' alimentaron las hipotecas <b>subprime</b>: préstamos a deudores de alto riesgo, muchos sin ingresos verificados. ¿Por qué prestarle a quien no puede pagar? Incentivos del modelo 'originar para distribuir': el banco que otorgaba la hipoteca NO la retenía — la vendía de inmediato para ser empaquetada, cobrando su comisión y pasándole el riesgo a otro. Quien evalúa el riesgo que otro va a sufrir, lo evalúa mal: <b>riesgo moral</b> de manual, tu lección de asimetría de información escalada a billones.",
      "Segundo eslabón: la <b>titulización</b>. Miles de hipotecas se trituraban y reempaquetaban en valores (MBS, CDO) vendidos a inversores del mundo entero, con la teoría de que la diversificación domaba el riesgo: algunas hipotecas caerían, nunca todas juntas. El error fatal fue de correlación — tu lección de diversificación al revés: si el precio nacional de la vivienda caía, TODAS caían juntas; el riesgo era sistemático, no diversificable. Las <b>calificadoras</b> — pagadas por los mismos emisores que calificaban, otro incentivo torcido — les pusieron AAA. Sobre esa base 'segura', los bancos se <b>apalancaron</b> 30 a 1: con 3 de capital propio y 97 prestados, una caída de 3% en los activos te deja en cero. Y todo interconectado por seguros contra default (CDS) que concentraban el riesgo en vez de dispersarlo — AIG asegurando al mundo sin capital para pagar si el 'nunca' ocurría.",
      "El 'nunca' ocurrió: los precios de las viviendas cayeron a escala nacional desde 2006, los AAA resultaron basura, y nadie sabía quién estaba quebrado — asimetría de información pura: el mercado interbancario se congeló porque ningún banco confiaba en otro. La quiebra de <b>Lehman Brothers</b> (septiembre 2008) convirtió la crisis en pánico global: corrida generalizada, no de ahorristas en ventanilla sino de instituciones entre sí. La respuesta fue el manual de la Gran Depresión aplicado al revés: la Fed como prestamista de última instancia en escala inédita, rescates masivos, tasas a cero, estímulo fiscal — y el mundo tuvo una Gran Recesión, no una Depresión: doloroso, pero un tercio del derrumbe de los años 30. La factura pendiente es el <b>riesgo moral</b> mayúsculo: instituciones 'demasiado grandes para caer' aprendieron que las ganancias son privadas y las pérdidas, del contribuyente — la regulación posterior (más capital, tests de estrés) intenta que la próxima vez el seguro implícito no invite a repetir la jugada."
    ],
    "example": {
      "title": "La cadena de nadie-es-responsable",
      "body": "Seguí una hipoteca subprime de punta a punta y contá los incentivos torcidos. El comprador toma un crédito que no puede pagar — apuesta a que la casa suba y refinancia: si sale mal, entrega las llaves. El broker que se lo vendió cobra comisión por volumen: más hipotecas, más bono — la calidad es problema de otro. El banco originador la vende en semanas: el riesgo viaja aguas abajo. El banco de inversión que la empaqueta cobra por estructurar: siguiente. La calificadora que la bendice AAA cobra del emisor — y si se pone exigente, el cliente se va a la calificadora de enfrente. El inversor final — un fondo de pensión alemán, digamos — compra 'AAA americano' sin poder mirar adentro. Cada eslabón actuó racionalmente según SUS incentivos; nadie era dueño del riesgo total. Cuando el precio de las casas cayó, la pregunta '¿de quién es la pérdida?' no tenía respuesta — y un riesgo sin dueño conocido es exactamente lo que congela un sistema financiero."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Por qué el modelo 'originar para distribuir' (otorgar hipotecas para venderlas de inmediato) degradó la calidad crediticia?",
        "options": [
          "Porque encareció el proceso de otorgar hipotecas",
          "Porque el originador cobraba por volumen y transfería el riesgo a otro: sin sufrir las pérdidas de sus malas decisiones, dejó de filtrar — riesgo moral aplicado al crédito",
          "Porque la ley obligaba a rechazar deudores solventes",
          "Porque las tasas altas expulsaron a los buenos deudores"
        ],
        "answer": 1,
        "explain": "Quien retiene el préstamo que otorga tiene la piel en juego: filtra deudores porque el default lo paga él. Quien lo vende en semanas cobra la comisión y el default es problema del comprador del paquete — su incentivo es volumen, no calidad. Multiplicado por todo el sistema, el filtro crediticio desapareció: es el riesgo moral de tu lección de asimetría de información, operando a escala de billones."
      },
      {
        "type": "open",
        "q": "Trazá la cadena de la crisis de 2008: de las hipotecas subprime a la titulización con sello AAA, de ahí al apalancamiento bancario, y de ahí al pánico sistémico y el rescate. Señalá en cada eslabón qué falla de información o incentivos operó.",
        "criterion": "Podés trazar la cadena desde hipotecas subprime hasta riesgo sistémico y rescate.",
        "model": "Uno: tasas bajas y precios de vivienda en alza alimentan hipotecas subprime — el originador las vende apenas otorgadas (riesgo moral: cobra comisión, el riesgo es de otro), así que presta sin filtrar. Dos: las hipotecas se titulizan en paquetes (MBS/CDO) que las calificadoras — pagadas por el emisor, incentivo capturado — sellan AAA, subestimando que el riesgo inmobiliario era sistemático: si los precios nacionales caían, caían todas juntas — la diversificación era ilusoria. Tres: sobre esos activos 'seguros', los bancos se apalancan 30 a 1 — una caída chica del activo licúa todo el capital — e interconectan el riesgo con seguros (CDS) concentrados en pocas manos. Cuatro: los precios caen desde 2006, los AAA se revelan incobrables y — asimetría de información — nadie sabe qué banco está quebrado: el mercado interbancario se congela, Lehman cae y la corrida institucional se hace global. Cinco: para evitar una segunda Depresión, la Fed y los Tesoros rescatan y prestan en escala inédita — parando el pánico, al costo de confirmar que los 'demasiado grandes para caer' juegan con red: el riesgo moral que la regulación posterior intenta desarmar."
      }
    ],
    "takeaway": "2008 no necesitó villanos: cada eslabón cobraba por pasar el riesgo al siguiente — y un sistema donde el riesgo no tiene dueño termina siendo dueño de todos."
  },
  "racionalidad_limitada": {
    "id": "racionalidad_limitada",
    "hook": "El consumidor de los modelos compara todas las opciones, calcula probabilidades y optimiza sin cansarse. Vos, en el súper, agarrás la marca de siempre porque hay 40 góndolas y la vida es corta. Esa distancia — entre el agente ideal y vos — tiene teoría propia.",
    "explanation": [
      "El agente de los modelos estándar — el <b>homo economicus</b> — tiene preferencias completas y estables, información perfecta o el cálculo probabilístico para procesarla, y capacidad ilimitada para optimizar: elige siempre LA mejor opción. Es el habitante de tu teoría del consumidor: el que encuentra la tangencia exacta. La <b>racionalidad limitada</b> (Herbert Simon, 1955) parte de una observación que es casi de sentido común pero dinamita el edificio: la información es costosa, el tiempo es escaso y la capacidad de cómputo del cerebro es finita. Optimizar de verdad — evaluar TODAS las alternativas — es imposible o carísimo; y gastar recursos infinitos en decidir perfectamente es, en sí mismo, irracional.",
      "¿Qué hace entonces la gente real? Simon lo llamó <b>satisficing</b> (conformarse con lo suficiente): en vez de buscar la mejor opción, fijás un umbral de 'aceptable' y agarrás la primera que lo cruza. No comparás los 200 departamentos publicados: visitás ocho y firmás uno que cumple. Usás <b>reglas simples</b> — la marca de siempre, dividir el ahorro en partes iguales, imitar lo que hizo tu hermano — porque deciden rápido y suelen andar bien. Ojo al matiz que hace interesante a Simon: esto no es estupidez sino adaptación — dado el costo de decidir, la regla simple ES la respuesta inteligente. La racionalidad limitada no dice que la gente sea tonta: dice que la racionalidad perfecta es la que resulta imposible.",
      "¿Cuándo importa la diferencia? Tu lección de modelos y supuestos da el criterio: para muchas preguntas — reacciones de mercado a precios, tendencias agregadas — el agente idealizado predice bien y la simplificación es útil. Pero para otras, la brecha es el fenómeno: por qué la gente no ahorra para la jubilación aunque 'sabe' que debe, por qué el orden del menú cambia qué se elige, por qué las opciones por defecto son tan poderosas (la mayoría no elige: acepta). Ahí el supuesto de optimización borra justo lo que se quiere entender. La racionalidad limitada es la puerta de entrada de la <b>economía del comportamiento</b>: el paso siguiente — que la gente no solo decide con límites, sino que se desvía de manera SISTEMÁTICA y predecible — es la próxima lección."
    ],
    "example": {
      "title": "Elegir prepaga (o no elegir nada)",
      "body": "Elegir plan de salud, AFJP en su momento, o fondo para tu ahorro: decisiones enormes, con decenas de opciones que difieren en cientos de cláusulas. El agente racional descargaría las cartillas, construiría escenarios de enfermedad y optimizaría el valor esperado. ¿La gente real? Elige la prepaga 'que tienen todos en el trabajo', el plan que recomendó el cuñado, o — el caso más masivo — no elige: se queda en la opción por defecto años, aunque haya mejores. No es pereza moral: evaluar de verdad exigiría semanas de trabajo experto, y la vida sigue. Los diseñadores de políticas aprendieron la lección al revés: como la gente decide poco, QUÉ opción es el default se vuelve la decisión más importante del sistema — inscribir automáticamente a los trabajadores en el plan de ahorro (con libertad de salir) multiplica la participación sin obligar a nadie. Con agentes optimizadores, el default no importaría nada; con humanos, es media política."
    },
    "check": [
      {
        "type": "mcq",
        "q": "En muchos países, cambiar la donación de órganos de 'anotarse para donar' a 'todos donan salvo que se anoten para no hacerlo' — mismo menú, distinto default — multiplicó los donantes. ¿Por qué este resultado incomoda al modelo del agente perfectamente racional?",
        "options": [
          "Porque muestra que la gente no valora donar órganos",
          "Porque los gobiernos no deberían influir en decisiones privadas",
          "Porque para un optimizador el default es irrelevante — evaluaría y elegiría lo mismo en ambos marcos —; que el default decida el resultado revela que la mayoría no optimiza: acepta",
          "Porque la donación de órganos no es una decisión económica"
        ],
        "answer": 2,
        "explain": "El agente racional ideal elige según sus preferencias, sea cual sea el punto de partida: cambiar el default no cambiaría nada. Que un reordenamiento sin costo altere masivamente el resultado muestra decisión con límites: informarse y decidir cuesta, así que la mayoría se queda donde la pusieron. El default no informa nada nuevo — solo aprovecha que no decidir es lo más barato."
      },
      {
        "type": "open",
        "q": "Contrastá cómo elige un consumidor perfectamente racional y uno de racionalidad limitada frente a una decisión compleja (elegir un seguro, un plan de celular, una inversión): qué hace cada uno y por qué Simon sostiene que la conducta del segundo no es 'irracional' sino adaptativa.",
        "criterion": "Podés contrastar el agente racional idealizado con uno de racionalidad limitada.",
        "model": "El racional ideal releva todas las opciones, procesa toda la información relevante, calcula el valor esperado de cada alternativa y elige el máximo — sin costo de tiempo ni esfuerzo cognitivo. El de racionalidad limitada enfrenta información costosa, tiempo escaso y cerebro finito: usa satisficing — fija un umbral de aceptable y toma la primera opción que lo supera —, recurre a reglas simples (la marca conocida, lo que eligió un par confiable) o directamente se queda en el default. Para Simon esto no es irracionalidad: dado que evaluar exhaustivamente cuesta más de lo que rinde (el plan de celular óptimo no justifica tres fines de semana de planillas), cortar la búsqueda en 'suficientemente bueno' es la asignación inteligente de recursos escasos — atención y tiempo incluidos. Lo irracional sería optimizar la elección ignorando el costo de optimizar."
      }
    ],
    "takeaway": "Nadie optimiza: la información es cara, el tiempo corto y el cerebro finito — elegir 'lo suficientemente bueno' no es un defecto de la racionalidad, es su versión posible."
  },
  "heuristicas_sesgos": {
    "id": "heuristicas_sesgos",
    "hook": "Preguntale a alguien si hay más muertes por accidente aéreo o por diabetes. Muchos dudan — y la diabetes mata cientos de veces más. No es ignorancia: es que los aviones caídos salen en la tele y los picos de glucemia no. El cerebro confunde 'me acuerdo fácil' con 'pasa seguido'.",
    "explanation": [
      "Si la racionalidad es limitada, ¿cómo decide la gente? Con <b>heurísticas</b>: atajos mentales que dan respuestas rápidas y baratas — y generalmente buenas. La contribución de Kahneman y Tversky fue mostrar que esos atajos fallan de manera <b>sistemática y predecible</b>: no ruido aleatorio, sino desvíos con dirección — los <b>sesgos</b>. Y eso lo cambia todo para la economía: el error aleatorio se cancela en el agregado (unos le erran para arriba, otros para abajo); el error sistemático NO — se acumula, y mueve mercados, precios y políticas en una dirección predecible.",
      "El repertorio esencial. <b>Anclaje</b>: el primer número que ves contamina tu estimación, aunque sea irrelevante — por eso el 'precio de lista' tachado junto a la 'oferta', por eso la primera cifra en una negociación fija el terreno. <b>Disponibilidad</b>: juzgás la probabilidad de algo por la facilidad con que recordás ejemplos — los riesgos vívidos y recientes (el robo del noticiero, el avión caído) se sobreestiman; los silenciosos y estadísticos (diabetes, inflación lenta) se subestiman. <b>Exceso de confianza</b>: la mayoría se cree mejor que el promedio manejando, invirtiendo y estimando plazos — los inversores sobreoperan convencidos de ver lo que el mercado no ve (y pagan comisiones por el privilegio de perder), los proyectos se presupuestan como si nada fuera a salir mal. <b>Representatividad</b>: juzgar por parecido al estereotipo ignorando las frecuencias de base — la racha de la ruleta que 'tiene que' cortarse, el fondo con tres años buenos que 'demuestra' talento (con miles de fondos, algunos acumulan rachas por puro azar — tu lección de mercados eficientes lo anticipó). Y el <b>sesgo de confirmación</b>: buscar y creer lo que confirma lo que ya pensabas — el pegamento que mantiene a todos los demás en su lugar.",
      "Dos cierres conceptuales. Primero: las heurísticas no son fallas de fábrica — son diseño adaptativo; el atajo que hoy te hace temer al avión te salvaba de predadores cuando la velocidad valía más que la precisión. El problema es el <b>desajuste</b>: decisiones financieras y estadísticas modernas ejecutadas con software paleolítico. Segundo: conocer la lista no te inmuniza — los sesgos operan automáticos, por debajo de la introspección (los expertos anclan igual que los novatos en los experimentos). La defensa realista no es 'pensar mejor' sino diseñar el entorno: reglas automáticas de ahorro e inversión, checklists, pedir la frecuencia de base antes de opinar, y desconfiar profesionalmente de las decisiones tomadas en caliente. La sistematización completa de estos desvíos — y su formalización en una teoría alternativa de la decisión — es la lección que sigue."
    ],
    "example": {
      "title": "El inversor argentino y su colección de sesgos",
      "body": "Mirá una rueda cualquiera del mercado local. Anclaje: 'compré esta acción a $500, no la vendo a $300' — el precio de compra, irrelevante para decidir hoy, gobierna la decisión; miles de carteras cargan muertos por no cristalizar la pérdida contra el ancla. Disponibilidad: tras cada corrida cambiaria, la demanda de dólares se dispara aun a precios absurdos — el recuerdo vívido del último salto pesa más que cualquier análisis de valor; y tras un año de calma, la misma gente se llena de pesos a tasa como si el riesgo hubiera muerto. Exceso de confianza: el aluvión de cuentas comitentes abiertas en cada bull market, operando corto, seguros de ganarle al mercado — la mayoría compra caro, vende barato en el pánico, y paga comisiones por el viaje completo. Representatividad: el fondo o el 'gurú' con tres aciertos seguidos junta seguidores como si tres puntos hicieran una recta. Ningún actor es tonto: son cerebros excelentes corriendo atajos excelentes — en el único hábitat donde los atajos cuestan plata."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Después de un accidente aéreo muy cubierto por los medios, mucha gente cancela vuelos y viaja en auto — que es, por kilómetro, decenas de veces más letal. ¿Qué sesgo opera?",
        "options": [
          "Anclaje: el precio del pasaje quedó fijado en la memoria",
          "Exceso de confianza: la gente se cree mejor piloto que el piloto",
          "Sesgo de confirmación: buscan noticias que critiquen a las aerolíneas",
          "Disponibilidad: el recuerdo vívido y reciente del accidente infla la probabilidad percibida de volar, mientras el riesgo silencioso de la ruta se subestima"
        ],
        "answer": 3,
        "explain": "Es disponibilidad de manual: juzgamos la probabilidad por la facilidad con que vienen ejemplos a la mente, y una tragedia televisada viene facilísimo. El riesgo vial — goteo diario sin cobertura mediática — no genera imágenes disponibles, y se subestima. El resultado es trágicamente medible: tras el 11-S, el desplazamiento masivo de aviones a autos en EE.UU. causó cientos de muertes viales adicionales."
      },
      {
        "type": "open",
        "q": "Identificá qué sesgo opera en cada caso y justificá: (a) una inmobiliaria publica un departamento a un precio absurdo de alto 'para negociar desde ahí'; (b) un ahorrista compra dólares a cualquier precio la semana después de una corrida; (c) un inversor amateur opera todos los días convencido de que detecta oportunidades que el mercado no ve.",
        "criterion": "Podés identificar sesgos como anclaje o disponibilidad en decisiones económicas reales.",
        "model": "(a) Anclaje: el precio inicial — aunque todos sepan que está inflado — fija el punto de referencia de la negociación; las contraofertas gravitan hacia el ancla, y el vendedor termina mejor que si hubiera publicado un precio 'razonable'. (b) Disponibilidad: la corrida reciente es un recuerdo vívido que infla la probabilidad percibida de otra corrida inminente; el ahorrista compra caro por un riesgo que estima con la memoria, no con las frecuencias — la misma persona no compraba cuando el dólar estaba planchado y el riesgo real era quizás mayor. (c) Exceso de confianza: cree tener información o criterio superiores al precio de mercado — que, como sabés de mercados eficientes, ya incorpora lo que miles de profesionales saben; la evidencia muestra que los que más operan, peor rinden neto de comisiones: la operación de más es la medida exacta de la confianza de más."
      }
    ],
    "takeaway": "Los atajos mentales son rápidos, baratos y sesgados en direcciones fijas — y como el error sistemático no se cancela en el agregado, mueve mercados enteros."
  },
  "teoria_prospectiva": {
    "id": "teoria_prospectiva",
    "hook": "Encontrás $50.000 en la calle: lindo día. Perdés $50.000 del bolsillo: semana arruinada. Mismo monto, dolor desproporcionado. Esa asimetría no es un defecto tuyo — es una regularidad tan robusta que le valió un Nobel a quien la midió.",
    "explanation": [
      "La <b>teoría prospectiva</b> (Kahneman y Tversky, 1979) es la alternativa descriptiva a la teoría de la utilidad esperada — la que subyace a tu lección de utilidad y riesgo. La teoría estándar dice que evaluás resultados por el nivel final de riqueza que te dejan: tener $10 millones te da la misma utilidad hayas llegado desde 9 o desde 11. La evidencia dice otra cosa: la gente evalúa <b>cambios</b> respecto de un <b>punto de referencia</b> — el statu quo, lo esperado, lo que tiene el vecino —, no niveles absolutos. Ganancia o pérdida se definen contra esa vara: el mismo sueldo es alegría si esperabas menos y agravio si esperabas más.",
      "Segunda pieza, la central: la <b>aversión a la pérdida</b>. Perder duele aproximadamente el doble de lo que gana alegra el mismo monto — el valor subjetivo tiene una curva quebrada en el punto de referencia, más empinada del lado de las pérdidas. De ahí sale un patrón de riesgo que la utilidad esperada no puede generar: somos <b>aversos al riesgo en ganancias</b> (entre $90.000 seguros y una moneda por $200.000, la mayoría toma lo seguro) pero <b>buscadores de riesgo en pérdidas</b> (entre perder $90.000 seguro y una moneda que puede costarte $200.000 o nada, la mayoría apuesta — cualquier cosa antes que consolidar la pérdida). La misma persona, conservadora e imprudente a la vez, según de qué lado del punto de referencia esté parada. Completan el cuadro el <b>efecto dotación</b> (lo que ya es tuyo vale más por ser tuyo: exigís por vender tu entrada más de lo que pagarías por comprarla) y el <b>framing</b>: como ganancia o pérdida se definen contra la referencia, la MISMA opción cambia de atractivo según cómo se presente — '90% de sobrevida' convence más que '10% de mortalidad'.",
      "Las huellas económicas están por todas partes. El inversor que vende rápido las acciones que subieron y retiene años las que cayeron — el <b>efecto disposición</b>: realizar la ganancia cierra en positivo, vender abajo consolida una pérdida que duele el doble (y en pérdidas se apuesta: 'ya va a volver'). El apostador fundido que dobla la apuesta. El vendedor que no baja el precio de su departamento 'porque lo pagué más caro'. La rigidez de los salarios nominales — recortar sueldos se siente robo aunque la inflación los recorte igual sin que nadie proteste: pérdida nominal versus pérdida enmarcada. Y las primas absurdas que paga la gente por seguros de electrodomésticos: aversión a pérdidas chicas y vívidas. La teoría prospectiva no reemplazó a la utilidad esperada como norma de decisión racional — te conviene decidir por niveles y valor esperado —; la reemplazó como DESCRIPCIÓN: así decide la gente de verdad, y todo diseño de productos, precios y políticas que lo ignore se sorprenderá."
    ],
    "example": {
      "title": "El plazo fijo que 'rinde' y el departamento que no baja",
      "body": "Dos postales argentinas de la curva quebrada. Primera: durante años, millones dejaron plata en plazos fijos con tasa real negativa — perdiendo poder de compra con certeza — antes que comprar dólares o activos volátiles. ¿Irracional? En el marco prospectivo, no: el plazo fijo nunca muestra un número rojo — la pérdida real queda escondida en el marco nominal —, mientras el dólar puede caer visiblemente un 10% el mes que lo compraste. La pérdida VISIBLE duele el doble; la invisible no existe. Segunda: el mercado inmobiliario post-2018 — la demanda se derrumbó, pero los precios publicados tardaron años en bajar: cada vendedor anclado en 'lo que vale mi casa' (su referencia: el precio de compra en dólares), prefiriendo no vender durante años antes que consolidar la pérdida. Miles de operaciones que no ocurrieron — el mercado congelado — son el costo agregado de que vender abajo de la referencia duela el doble de lo que la plata en mano alegra."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Ofrecen dos versiones del mismo programa sanitario para 600 personas en riesgo: versión A, 'se salvan 200 seguro'; versión B, 'mueren 400 seguro'. Son idénticas — y sin embargo la mayoría acepta A y rechaza B. ¿Qué concepto de la teoría prospectiva explica el vuelco?",
        "options": [
          "La utilidad marginal decreciente de las vidas",
          "El exceso de confianza de los médicos",
          "El efecto dotación: las vidas se sienten propias",
          "El framing: presentada como ganancia (vidas salvadas) la opción se evalúa con aversión al riesgo y se acepta; presentada como pérdida (muertes) se evalúa desde el dominio de pérdidas y se rechaza — la referencia cambió, la opción no"
        ],
        "answer": 3,
        "explain": "Es el experimento clásico de Tversky y Kahneman: la misma opción objetiva cambia de atractivo según el marco, porque ganancias y pérdidas se definen contra el punto de referencia que el enunciado instala. 'Salvar 200' se siente ganancia (se acepta lo seguro); 'mueren 400' se siente pérdida (se busca el riesgo de evitarla). Bajo utilidad esperada, dos descripciones del mismo resultado jamás podrían producir elecciones opuestas."
      },
      {
        "type": "open",
        "q": "Explicá qué es la aversión a la pérdida y por qué contradice la teoría de la utilidad esperada: usá el caso del inversor que vende rápido sus acciones ganadoras y retiene por años las perdedoras.",
        "criterion": "Podés explicar la aversión a la pérdida y por qué contradice la teoría de utilidad esperada.",
        "model": "La aversión a la pérdida es la asimetría de la valoración alrededor del punto de referencia: perder un monto duele aproximadamente el doble de lo que alegra ganarlo. Contradice la utilidad esperada en su base: esta evalúa por niveles finales de riqueza — cómo llegaste y desde dónde es irrelevante, y la actitud ante el riesgo es una sola —, mientras que la evidencia muestra evaluación por cambios contra una referencia, con aversión al riesgo en ganancias y búsqueda de riesgo en pérdidas. El inversor lo exhibe entero (efecto disposición): vende rápido la acción que subió — asegura la ganancia, aversión al riesgo del lado positivo — y retiene la que cayó, porque venderla convierte una pérdida 'de papel' en pérdida consolidada que duele el doble; prefiere el riesgo de que siga cayendo ('ya va a volver'). Para la utilidad esperada esto es incoherente — la decisión debería mirar solo el futuro esperado de cada acción, no el precio de compra, que es un costo hundido convertido en punto de referencia. Para la teoría prospectiva, es exactamente lo esperable — y los datos de millones de cuentas lo confirman."
      }
    ],
    "takeaway": "No evaluamos niveles sino cambios contra una referencia — y como perder duele el doble que ganar, somos cautos en las ganancias y temerarios en las pérdidas: al revés de lo que más nos convendría."
  },
  "modelo_agroexportador": {
    "id": "modelo_agroexportador",
    "hook": "Entre 1880 y 1914 la Argentina creció como pocos países del planeta: la pampa se llenó de inmigrantes, rieles y vacas, y el mundo compraba todo lo que producía. No fue magia ni casualidad — fue un modelo, con su lógica y su letra chica.",
    "explanation": [
      "El <b>modelo agroexportador</b> fue el patrón de crecimiento argentino entre la consolidación del Estado nacional (hacia 1880) y la Gran Depresión. Su lógica es la de tu lección de ventaja comparativa aplicada en escala histórica: la pampa producía granos y carnes con un costo de oportunidad ínfimo, el mundo — sobre todo la Inglaterra industrial — los demandaba sin límite, y a cambio entraban manufacturas, capitales y personas. Especializarse y comerciar, en ese mundo abierto de la primera globalización, era la estrategia de manual — y funcionó: hacia el Centenario, el PIB per cápita argentino estaba entre los diez más altos del planeta.",
      "Tres ingredientes hicieron posible el despegue, y ninguno era obvio de antemano. La <b>inmigración</b> masiva resolvió la escasez de brazos en un territorio semivacío. El <b>capital extranjero</b> — británico, sobre todo — financió los ferrocarriles, frigoríficos y puertos que conectaron la pampa con el Atlántico: sin rieles, el trigo no llegaba al puerto a costo competitivo; sin barcos frigoríficos, la carne no cruzaba el océano. Y hizo falta un Estado: Gerchunoff y Llach insisten en que el 'destino geográfico' no alcanzaba — la pacificación, el orden legal y la integración del territorio ('Paz y Administración') fueron la precondición institucional para que la tierra, el trabajo y el capital se combinaran.",
      "La letra chica es que el motor y la vulnerabilidad eran la misma cosa. Los canales que impulsaban el crecimiento — precios de exportación, demanda mundial, crédito de Londres — eran también los canales de contagio: una caída de los términos de intercambio o un corte del financiamiento externo sacudían toda la economía, y el país no elegía cuándo pasaba eso. Mientras el mundo fue abierto, la apuesta rindió como ninguna otra; cuando el mundo se cerró en los años 30, el mismo modelo que había sido la receta pasó a ser el problema. Esa dependencia de un contexto que no se controla es la primera 'ilusión' del ciclo que da nombre al libro."
    ],
    "example": {
      "title": "Trigo, vacas y rieles: la cadena del despegue",
      "body": "Seguí la cadena completa de una tonelada de trigo de 1905. La tierra pampeana la produce a un costo imbatible; el chacarero — probablemente un inmigrante piamontés llegado hacía una década — la cosecha; el ferrocarril de capital británico la lleva al puerto de Buenos Aires; un barco la descarga en Liverpool, donde alimenta a los obreros de la industria inglesa; y con las libras que pagó Inglaterra, la Argentina importa textiles, máquinas y carbón — y paga los intereses del capital que construyó el ferrocarril. Cada eslabón dependía de los demás, y el conjunto dependía de que el mundo siguiera comprando y prestando. En 1913, un ajuste financiero en Londres bastó para frenar la economía argentina en seco — el ensayo general, como señalan Gerchunoff y Llach, de lo que 1930 haría en serio."
    },
    "check": [
      {
        "type": "mcq",
        "q": "El modelo agroexportador produjo el crecimiento más rápido de la historia argentina y, a la vez, dejó al país muy expuesto. ¿Cuál es la mejor descripción de esa vulnerabilidad?",
        "options": [
          "El crecimiento era ilusorio: el sector primario tiene baja productividad y solo enriquecía a los exportadores ingleses",
          "El Estado era demasiado grande y consumía las rentas del agro en burocracia",
          "Los mismos canales que impulsaban el crecimiento — comercio y capital externos — eran los canales de contagio: la apertura era el motor y la exposición a la vez",
          "La falta de inversión en infraestructura impedía sacar la producción de la pampa"
        ],
        "answer": 2,
        "explain": "La productividad pampeana era altísima y la infraestructura abundaba — justamente porque el capital externo la financió —, así que ni el crecimiento era ilusorio ni faltaban rieles. La fragilidad estaba en la estructura misma del modelo: exportar mucho de pocos productos y depender del crédito de Londres significaba que un shock de precios o un corte de financiamiento — decisiones tomadas a diez mil kilómetros — frenaban toda la economía. El motor y el punto débil eran la misma apertura."
      },
      {
        "type": "open",
        "q": "¿Por qué un modelo tan exitoso en 1910 dejó a la Argentina tan golpeada cuando llegó la crisis de 1930? Explicá qué lo impulsaba y qué lo exponía.",
        "criterion": "Podés explicar cómo la inserción agroexportadora impulsó el crecimiento argentino hasta 1930 y por qué quedó expuesta a los shocks del comercio y el capital externos.",
        "model": "El modelo creció explotando la ventaja comparativa pampeana en un mundo abierto: exportaba granos y carnes a precios favorables, y con eso financiaba las importaciones de manufacturas y atraía el capital que construyó ferrocarriles y puertos. Todo el circuito — ingresos, importaciones, inversión, hasta la recaudación fiscal atada al comercio — colgaba de dos variables externas: la demanda mundial de alimentos y el flujo de capitales. Cuando la Depresión derrumbó los precios agrícolas, cerró los mercados y secó el crédito internacional, no falló una parte del modelo: falló el supuesto sobre el que descansaba entero — que el mundo seguiría comprando y prestando. La especialización que había maximizado el crecimiento maximizó también el tamaño del golpe."
      }
    ],
    "takeaway": "La belle époque argentina fue ventaja comparativa en estado puro: prosperidad de las más rápidas del mundo — colgada de un mundo abierto que el país no controlaba."
  },
  "isi": {
    "id": "isi",
    "hook": "Cuando el mundo dejó de comprar y de prestar, la Argentina empezó a fabricarse lo que ya no podía importar. La industrialización por sustitución de importaciones creó fábricas, empleo urbano y una clase obrera — y un problema de dólares que la perseguiría por décadas.",
    "explanation": [
      "La <b>industrialización por sustitución de importaciones</b> (ISI) es el proceso por el cual un país pasa a producir localmente bienes que antes compraba afuera. En la Argentina no nació de un plan: se consolidó en los años 30, cuando la Gran Depresión derrumbó los precios de exportación y cerró los mercados, y la respuesta defensiva — devaluación, aranceles, <b>control de cambios</b> — encareció o racionó todo lo importado. Con lo de afuera caro o inaccesible, fabricar adentro textiles, alimentos elaborados o metalurgia liviana pasó a ser rentable: el cierre forzado se convirtió en oportunidad. Gerchunoff y Llach marcan la continuidad — la industria ya venía creciendo — pero el salto es de los 30, y The Economist ya en 1936 se asombraba de una industria argentina que crecía sin carbón ni hierro, protegida por la crisis misma.",
      "El peronismo convirtió esa respuesta defensiva en proyecto: Estado activo, crédito industrial, redistribución hacia los salarios urbanos que agrandaba el mercado interno para las propias fábricas. La promesa era potente y en buena parte se cumplió — empleo urbano, salarios altos, una modernidad de clase media que el libro retrata como la gran ilusión distributiva de posguerra. El costado menos visible: para volcar alimentos baratos al mercado interno y financiar la industria, se desalentó al sector que generaba las divisas — el agro —, justo cuando el mundo tampoco ayudaba.",
      "El talón de Aquiles era estructural, no un accidente de gestión. Sustituir bienes de consumo no elimina la dependencia importadora: la <b>transforma</b>. La heladera se hace acá, pero la chapa, el motor, el combustible y la máquina que la fabrica siguen viniendo de afuera. Y esa nueva canasta importadora es más rígida que la anterior: antes, ante una crisis, se dejaba de importar bienes de consumo y dolía; ahora, recortar importaciones es parar las fábricas. Producir 'casi todo' y exportar 'casi nada' mejoraba el empleo del corto plazo mientras sembraba la escasez de divisas del mediano — la restricción externa que domina la lección siguiente."
    ],
    "example": {
      "title": "La heladera nacional y el acero importado",
      "body": "Imaginá una fábrica de heladeras en el Gran Buenos Aires en 1948. El arancel y el control de cambios hacen prohibitivo traer la heladera terminada, así que conviene armarla acá: se contratan operarios, crece el barrio, el sueldo industrial compra más que nunca. Pero mirá la lista de insumos: chapa importada, compresor importado, petróleo importado para la energía. Cada heladera vendida demanda dólares — solo que ahora escondidos adentro del producto 'nacional'. Si la fábrica duplica la producción, duplica su cuenta en divisas; y como las exportaciones del agro están estancadas, el éxito industrial se come las reservas del Banco Central. La paradoja de la ISI cabe en una góndola: cuanto mejor va la industria sustitutiva, más rápido se agotan los dólares que la mantienen funcionando."
    },
    "check": [
      {
        "type": "mcq",
        "q": "La ISI redujo drásticamente la importación de bienes de consumo. ¿Por qué, aun así, NO redujo la dependencia argentina de los dólares?",
        "options": [
          "Porque cambió la composición de las importaciones — de bienes de consumo a insumos, combustibles y maquinaria — sin generar exportaciones nuevas que las pagaran, y esa canasta era más rígida: recortarla implicaba parar fábricas",
          "Porque la inflación de posguerra licuaba las reservas del Banco Central más rápido de lo que el comercio las reponía",
          "Porque los industriales giraban al exterior sus ganancias en dólares, vaciando la balanza de pagos",
          "Porque los aranceles encarecían el dólar y eso hacía más caras todas las importaciones"
        ],
        "answer": 0,
        "explain": "El mecanismo es de composición, no de nivel: la industria sustitutiva necesitaba importar lo que no se producía localmente — chapa, química, bienes de capital, combustibles — y no exportaba lo suficiente para financiarlo. Peor: esa nueva canasta era rígida, porque recortarla frenaba la producción misma. La inflación no licúa reservas (son divisas, no pesos), y ni la remisión de utilidades ni los aranceles describen el cuello de botella central que el libro documenta."
      },
      {
        "type": "open",
        "q": "Explicá el mecanismo por el cual la ISI argentina 'funcionaba' en el corto plazo y a la vez incubaba un problema estructural: ¿qué la disparó en los años 30 y qué dependencia transformó sin eliminar?",
        "criterion": "Podés describir el mecanismo de la ISI argentina y por qué respondió al cierre de mercados de los años 30 y al agotamiento del modelo agroexportador.",
        "model": "La ISI arrancó como respuesta al derrumbe del modelo agroexportador: la Depresión cerró mercados y secó el crédito, y la devaluación, los aranceles y el control de cambios encarecieron lo importado — fabricar adentro se volvió rentable por defecto. En el corto plazo funcionó: creó industria, empleo urbano y salarios que agrandaban el mercado interno. Pero sustituir bienes de consumo transformó la dependencia en vez de eliminarla: la industria necesitaba insumos, combustibles y máquinas importados, financiados por exportaciones agropecuarias estancadas — en parte desalentadas por el propio modelo. Cada expansión industrial aumentaba la demanda de divisas sin aumentar su oferta: la ISI incompleta sembró el cuello de botella externo que definió la posguerra argentina."
      }
    ],
    "takeaway": "Sustituir importaciones no elimina la dependencia de dólares: la esconde adentro del producto — y la vuelve más rígida, porque recortar importaciones pasa a ser parar fábricas."
  },
  "restriccion_externa": {
    "id": "restriccion_externa",
    "hook": "En la Argentina de posguerra había un patrón casi mecánico: la economía arrancaba, crecía dos o tres años… y se quedaba sin dólares. Frenazo, devaluación, recesión — y vuelta a empezar. No era mala suerte: era un cuello de botella con nombre.",
    "explanation": [
      "La <b>restricción externa</b> es el límite que la escasez de <b>divisas</b> impone al crecimiento. En una economía cuya industria necesita importar para producir, no alcanza con que haya demanda interna y capacidad instalada: hacen falta dólares para pagar los insumos, los combustibles y las máquinas. Cuando las exportaciones no los generan y no hay financiamiento externo estable, la expansión se corta sola — no porque falte quien compre, sino porque falta con qué producir. Es tu lección de balanza de pagos convertida en el drama argentino de posguerra: el déficit de cuenta corriente que nadie financia no es sostenible, y el ajuste llega por las malas.",
      "Gerchunoff y Llach muestran el mecanismo funcionando casi como un reloj. Cuando la actividad industrial se recuperaba, lo que se disparaba no era la importación de bienes de consumo — ya sustituidos — sino la de materias primas, metales, químicos y petróleo: crecer ERA importar. Del otro lado, las exportaciones agropecuarias estaban estancadas — desalentadas por precios internos deprimidos y un mundo menos abierto —: en 1955 el país exportaba, a moneda constante, mucho menos que en los años 20. El Informe Prebisch de ese año clavó el diagnóstico: sin más exportaciones y sin producción local de insumos básicos, el desarrollo se ahogaba en la balanza de pagos.",
      "De ahí el patrón que la literatura bautizó <b>stop-go</b>: fases de expansión ('go') que drenan las reservas, seguidas de devaluación y ajuste ('stop') para recomponer la cuenta externa — con la crueldad distributiva de que la devaluación encarecía los alimentos (bienes exportables) y golpeaba el salario real justo cuando llegaba la recesión. Los controles de cambio y los permisos de importación pateaban el problema sin resolverlo. Las salidas de fondo eran dos, y ninguna era rápida: exportar más, o producir localmente los insumos y bienes de capital que más divisas se comían — la industrialización 'hacia atrás' que el desarrollismo convertiría en programa."
    ],
    "example": {
      "title": "El tanque de nafta de las reservas",
      "body": "Mirá la secuencia 1951-1955 que reconstruye el libro. Dos años de déficit comercial fuerte obligan a un plan de austeridad; una cosecha excepcional en 1953 devuelve el superávit y el alivio; la economía se reactiva… y en 1955 el rojo externo reaparece, sin que nadie haya comprado un solo auto importado de más. ¿Qué pasó? Las fábricas, para producir más para el mercado interno, demandaron más chapa, más química, más combustible — todo importado. Las reservas del Banco Central funcionan como el tanque de nafta de un auto en la ciudad: cuanto más acelerás, más rápido se vacía si no cargás. Y la única bomba de carga — las exportaciones — despachaba lo mismo que treinta años atrás. El 'go' llevaba escrito su 'stop'."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Una economía con ISI incompleta entra en expansión. Según el diagnóstico de la restricción externa, ¿cuál es la secuencia esperable?",
        "options": [
          "Más producción → más exportaciones industriales → superávit externo → apreciación de la moneda",
          "Más demanda → más inflación → suba de tasas del Banco Central → freno monetario: el ciclo era esencialmente monetario",
          "Más empleo y salarios → más ahorro interno → más inversión → crecimiento autosostenido",
          "Más producción → más importación de insumos y bienes de capital → drenaje de reservas → devaluación y ajuste recesivo"
        ],
        "answer": 3,
        "explain": "La clave está en qué pasaba con las importaciones al crecer: la industria sustitutiva demandaba insumos y máquinas de afuera, mientras las exportaciones — estancadas — no acompañaban. El freno no era una decisión monetaria ni faltaba ahorro: eran los dólares los que se acababan, y la devaluación-recesión era la forma brutal de volver a juntarlos. La primera opción describe exactamente lo que la ISI incompleta NO lograba: exportar industria."
      },
      {
        "type": "open",
        "q": "Explicá el patrón stop-go de la Argentina de posguerra: por qué crecer generaba déficit de dólares, cómo se resolvía cada episodio y por qué la solución de cada ciclo no evitaba el siguiente.",
        "criterion": "Podés explicar por qué, en la Argentina industrializada de posguerra, crecer generaba déficit de dólares y forzaba frenos recesivos (el patrón stop-go).",
        "model": "En la expansión ('go'), la industria demandaba más insumos, combustibles y bienes de capital importados — crecer era importar —, mientras las exportaciones agropecuarias, estancadas y desalentadas, no generaban las divisas para pagarlos: el déficit externo drenaba las reservas. El episodio se 'resolvía' con devaluación y ajuste ('stop'): la recesión cortaba las importaciones y la devaluación mejoraba transitoriamente el saldo, al costo de encarecer los alimentos y golpear el salario real. Pero nada de eso cambiaba la estructura — una industria que necesitaba dólares y no los producía, un agro sin incentivos para generarlos —, así que la siguiente recuperación reproducía el mismo cuello de botella. Salir del ciclo exigía otra cosa: exportar más o sustituir los insumos importados, no administrar mejor las reservas."
      }
    ],
    "takeaway": "Cuando crecer es importar y exportar está estancado, el auge fabrica su propio freno: el stop-go no era mala praxis — era la estructura cobrando peaje."
  },
  "desarrollismo": {
    "id": "desarrollismo",
    "hook": "Frondizi y Frigerio resumieron su programa en una fórmula casi publicitaria: petróleo + carne = acero + industria química. Detrás del eslogan había un diagnóstico preciso del cuello de botella argentino — y una apuesta polémica para romperlo de una vez.",
    "explanation": [
      "El <b>desarrollismo</b> — encarnado en la presidencia de Arturo Frondizi (1958-1962) y en el ideario de Rogelio Frigerio — partía del diagnóstico de época que había formulado <b>Prebisch</b>: los países que solo exportan productos primarios quedan atrapados, porque los términos de intercambio les juegan en contra y la demanda mundial de alimentos crece lento. Desarrollarse era, en esa lectura, completar la industrialización. La Argentina ya tenía la industria liviana de la ISI; lo que faltaba era el eslabón <b>vertical</b>: los insumos básicos y bienes de capital que la industria existente importaba — exactamente los que alimentaban la restricción externa.",
      "Las prioridades salían del diagnóstico con lógica contable. Primero, <b>petróleo y gas</b>: los combustibles se comían alrededor de un quinto de las importaciones, así que cada barril extraído en el país era un dólar que quedaba disponible para máquinas y plantas — sustitución de importaciones aplicada al insumo que más divisas drenaba. Después, <b>siderurgia</b> (SOMISA), química y petroquímica, automotores, energía, rutas. El agro, en cambio, no estaba en el centro del programa: el desarrollismo lo veía tecnológicamente atrasado y con mercados externos poco promisorios — un juicio que décadas después se revelaría demasiado pesimista. Y para financiar el salto sin dólares propios, la apuesta más polémica: abrir la puerta al <b>capital extranjero</b>, contratos petroleros incluidos, en plena era de nacionalismo económico.",
      "Gerchunoff y Llach muestran el programa chocando con la macro y con la política. El primer año combinó aumentos salariales, expansión y un déficit cercano al 9% del PIB; la inflación y el drenaje de reservas obligaron al giro estabilizador casi inmediato — el plan de largo plazo administrado con urgencias de corto. Y todo en una democracia a medias, con el peronismo proscripto y los militares tutelando: Frondizi terminó derrocado en 1962. El balance del libro es matizado: la estructura industrial argentina quedó efectivamente más completa — el autoabastecimiento petrolero estuvo cerca, la petroquímica y la industria automotriz despegaron —, pero el desarrollismo no llegó a demostrar si su receta rompía la restricción externa, porque la política no le dio el tiempo que el programa exigía."
    ],
    "example": {
      "title": "La batalla del petróleo",
      "body": "En 1958, apenas asumido, Frondizi firmó contratos con petroleras extranjeras para multiplicar la extracción local. La cuenta era simple: la Argentina gastaba una fortuna en divisas importando el combustible que tenía bajo el suelo, y YPF sola no podía acelerar al ritmo necesario. La apuesta era contable y política a la vez: cada barril local liberaba dólares para el resto de la industrialización. La oposición — incluida buena parte del propio radicalismo — lo leyó como entrega de soberanía, y el propio Frondizi había escrito años antes un libro ('Petróleo y política') contra lo que ahora hacía. Pocos episodios resumen mejor la tensión desarrollista: entre la soberanía simbólica y la escasez real de divisas, Frondizi eligió los dólares — y pagó el costo político hasta el final de su gobierno."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Por qué el desarrollismo puso al petróleo como prioridad número uno de su programa?",
        "options": [
          "Porque el petróleo era el principal producto de exportación argentino y había que potenciarlo",
          "Porque los combustibles importados consumían una porción enorme de las divisas: producirlos localmente era atacar la restricción externa en su renglón más pesado",
          "Porque el objetivo era estatizar toda la cadena energética y consolidar el monopolio de YPF",
          "Porque el agro había alcanzado su techo tecnológico y la energía era el único sector con margen de crecimiento"
        ],
        "answer": 1,
        "explain": "La Argentina no exportaba petróleo: lo importaba masivamente, y esos combustibles se llevaban cerca de un quinto de las divisas — el renglón individual más pesado de la cuenta importadora. Sustituirlo con producción local era la vía más rápida de aflojar el cuello de botella externo. La política real fue la opuesta a estatizar (contratos con petroleras extranjeras), y el juicio desarrollista sobre el agro era que estaba atrasado — no que hubiera llegado a techo alguno."
      },
      {
        "type": "open",
        "q": "Resumí el diagnóstico desarrollista: ¿por qué descreía de un modelo centrado en el agro, por qué apostó a las industrias básicas y qué papel le asignó al capital extranjero?",
        "criterion": "Podés resumir el diagnóstico desarrollista y por qué apostó a las industrias básicas y al capital externo como vía para superar el estancamiento.",
        "model": "El desarrollismo asumía el pesimismo de Prebisch sobre los productos primarios: términos de intercambio adversos y demanda mundial lenta hacían inviable volver al modelo agroexportador, y al agro local lo veía además tecnológicamente estancado. El problema argentino, en su lectura, era una ISI incompleta: industria liviana que importaba los insumos, combustibles y máquinas — la raíz de la restricción externa. La apuesta fue completar la pirámide 'hacia atrás': petróleo primero (el renglón que más divisas drenaba), después acero, química, automotores y energía. Como el país no tenía ni los dólares ni el ahorro para financiar ese salto, el capital extranjero era la pieza que cerraba el programa — la concesión pragmática que el nacionalismo de la época nunca le perdonó."
      }
    ],
    "takeaway": "El desarrollismo quiso fabricar en casa los dólares que faltaban: sustituir petróleo y acero en vez de heladeras — la ISI corregida en su renglón más caro, financiada con el capital extranjero que la época repudiaba."
  },
  "plan_austral": {
    "id": "plan_austral",
    "hook": "Junio de 1985: la inflación corre al 30% mensual y el país huele a hiperinflación. Un viernes a la noche, Alfonsín anuncia por cadena una moneda nueva, congelamiento general y una promesa: el Banco Central no financia más al Tesoro. El Austral fue el intento más sofisticado de la Argentina por desarmar su inflación — y su lección vale hasta hoy.",
    "explanation": [
      "El <b>Plan Austral</b> fue una estabilización <b>heterodoxa</b>: no confiaba en que bastara recortar emisión y gasto, porque su diagnóstico ponía en el centro la <b>inflación inercial</b>. En una economía con décadas de inflación alta, la inflación pasada coordina la presente: salarios, alquileres y precios se remarcan mirando el mes anterior, cada uno para no quedarse atrás — tu espiral de expectativas de la curva de Phillips, institucionalizada. Contra esa inercia, el gradualismo fracasa: bajar la emisión de a poco no convence a nadie de dejar de remarcar, y el que afloja primero pierde. Hacía falta un corte de coordinación: que todos dejaran de remarcar a la vez.",
      "La ingeniería del equipo de Sourrouille atacó ese problema con precisión. Moneda nueva (el <b>austral</b>), tipo de cambio fijo y congelamiento general de precios y salarios como anclas visibles; una 'precorrección' previa de los precios atrasados (tarifas, tipo de cambio) para no congelar desequilibrios; el <b>desagio</b> — una tabla de conversión que limpiaba de los contratos la inflación esperada que ya tenían incorporada, para no regalarles a los acreedores una ganancia por la desinflación —; y el corazón del asunto: un paquete fiscal (impuestos, ahorro forzoso) más el compromiso explícito de que el Banco Central dejaba de financiar al Tesoro. El congelamiento coordinaba expectativas; lo fiscal-monetario debía volver creíble la coordinación.",
      "El arranque fue espectacular: la inflación mensual se desplomó de dos dígitos a casi nada en meses, sin recesión ni inspectores en cada góndola. La remonetización y el freno del efecto <b>Olivera-Tanzi</b> — con alta inflación, la recaudación pierde valor real entre que se devenga y se cobra; al estabilizar, mejora sola — armaron un círculo virtuoso inicial. El desencanto llegó por la puerta que el diagnóstico mismo señalaba: el equilibrio fiscal nunca se consolidó del todo, los precios 'reprimidos' presionaban por descongelarse, los términos de intercambio jugaron en contra, y cuando la sociedad percibió que el motor fiscal seguía encendido, la inercia — y la indexación defensiva — volvieron. La lección que deja el libro es exactamente la de tu lección de hiperinflación, ahora con nombre propio: las expectativas se pueden coordinar de un shock, pero sin ancla fiscal duradera la coordinación se deshace."
    ],
    "example": {
      "title": "Cortar el dominó (y lo que pasa si el motor sigue encendido)",
      "body": "Imaginá que todos remarcan 25% mensual porque el mes pasado fue 25%: nadie quiere ser el único que se atrasa. El Austral fue una señal diseñada para que todos pudieran frenar A LA VEZ sin perder: tipo de cambio fijo, precios congelados, contratos desagiados, y la promesa de que ya no habría emisión para el fisco. Funcionó — el dominó dejó de caer de un día para el otro, algo que el gradualismo jamás había logrado. Pero un congelamiento es una foto, no una película: si por debajo el déficit sigue necesitando financiamiento, tarde o temprano reaparecen la emisión o la deuda, la gente lo huele, y cada uno vuelve a remarcar 'por las dudas' — la profecía autocumplida de siempre. El Austral demostró las dos mitades del teorema: que la inercia se corta con coordinación, y que la coordinación sin ancla fiscal tiene fecha de vencimiento."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Qué distinguía al Austral de un congelamiento de precios 'a secas' como los muchos que ya habían fracasado?",
        "options": [
          "Que el congelamiento era voluntario y alcanzaba solo a las empresas líderes formadoras de precios",
          "Que reemplazó el peso por el dólar como moneda de curso legal, eliminando la posibilidad de emitir",
          "Que se aplicó con superávit fiscal previo, lo que hacía innecesaria cualquier otra medida",
          "Que atacó las dos raíces a la vez: la inercia (moneda nueva, anclas, desagio, precorrección de precios atrasados) y el motor fiscal (paquete de ingresos y compromiso de no emitir para el Tesoro)"
        ],
        "answer": 3,
        "explain": "Un congelamiento solo tapa el síntoma: si los precios relativos quedan desalineados y el déficit sigue exigiendo emisión, la olla revienta al descongelar. El Austral precorrigió los precios atrasados antes de congelar, desagió los contratos para limpiar la inflación ya pactada, y — la parte decisiva — atacó el motor: compromiso de no financiar al Tesoro con emisión más paquete fiscal. No dolarizó (eso sería la lógica de la convertibilidad, años después) y el congelamiento fue general y obligatorio. Su falla no estuvo en el diseño del shock sino en la durabilidad del ancla fiscal."
      },
      {
        "type": "open",
        "q": "Explicá la lógica del Austral: qué es la inflación inercial, cómo el plan intentó cortarla, y por qué el éxito inicial se deshizo. ¿Qué enseña sobre lo que un shock de expectativas puede y no puede hacer?",
        "criterion": "Podés explicar la lógica del Austral —inercia, expectativas y anclas nominales— y por qué el éxito inicial no bastó sin consolidar el equilibrio fiscal.",
        "model": "La inflación inercial es la que se reproduce sola: cada actor remarca mirando la inflación pasada para no quedarse atrás, y esa conducta defensiva genera la inflación que todos temen — aunque el exceso de demanda original haya desaparecido. El Austral atacó la coordinación: moneda nueva, tipo de cambio fijo y congelamiento como anclas para que todos frenaran a la vez, desagio para limpiar de los contratos la inflación ya descontada, y precorrección de tarifas para no congelar precios desalineados. Funcionó de inmediato porque resolvía el problema de 'quién afloja primero'. Pero el shock solo compra tiempo: sin consolidación fiscal duradera, el Estado volvió a necesitar financiamiento, la credibilidad del 'no emitiremos' se erosionó y la remarcación defensiva regresó. La lección: las expectativas se coordinan con un golpe de credibilidad, pero se sostienen solo con fundamentos — un ancla nominal sin ancla fiscal es un congelamiento esperando su deshielo."
      }
    ],
    "takeaway": "El Austral probó las dos mitades del teorema antiinflacionario: la inercia se corta coordinando expectativas de un shock — y la coordinación se pudre si el déficit sigue pidiendo emisión por abajo."
  },
  "hiperinflacion_89": {
    "id": "hiperinflacion_89",
    "hook": "Julio de 1989: los precios suben casi 200% en un solo mes. Los supermercados remarcan entre góndola y góndola, hay saqueos en el conurbano y un presidente que entrega el mando cinco meses antes. La hiperinflación argentina no fue solo una cifra: fue la muerte de una moneda y el parto político de la década siguiente.",
    "explanation": [
      "La <b>hiperinflación de 1989</b> fue el desenlace de una década entera, no un accidente de un trimestre. Los 80 fueron años de inflación alta crónica con planes que funcionaban un tiempo y se desarmaban — el Austral, luego el Plan Primavera —, cada fracaso dejando menos credibilidad para el siguiente. El detonante llegó en febrero de 1989: colapsado el Plan Primavera, el Banco Central se quedó sin reservas para contener al dólar y la <b>corrida cambiaria</b> se desató — el tipo de cambio subió cerca de 200% en abril y siguió. En una economía que ya pensaba en dólares, cada salto del tipo de cambio se trasladaba a precios casi instantáneamente: el pass-through de tu lección de tipo de cambio, funcionando a velocidad terminal.",
      "Gerchunoff y Llach describen la espiral como un sistema donde cada defensa individual agravaba el conjunto — tu dilema del prisionero en versión monetaria. El Estado, sin crédito ni recaudación (el efecto Olivera-Tanzi ahora jugando en contra: con precios volando, lo recaudado llegaba licuado), pagaba una deuda interna cada vez más cara <b>emitiendo</b>; los ahorristas huían del austral al dólar; las empresas remarcaban preventivamente o directamente no vendían — el precio de reposición era incalculable —; los exportadores retenían; los trabajadores exigían adelantos quincenales. Y sobre todo eso, el vacío político: Alfonsín ya había perdido la elección, Menem todavía no asumía, y nadie sabía qué moneda, qué reglas ni qué gobierno habría en tres meses. Sin ancla fiscal, sin ancla monetaria y sin ancla política, la moneda quedó en caída libre.",
      "Es el caso argentino canónico de tu lección de hiperinflación: dominancia fiscal — un Estado que solo se financiaba emitiendo — más expectativas desancladas, hasta que el dinero perdió sus tres funciones y la economía se dolarizó de hecho. Pero el 89 dejó además una marca política duradera: el trauma reordenó las prioridades de la sociedad entera — cualquier cosa antes que la hiper —, adelantó el traspaso del mando y le dio al gobierno siguiente el mandato y la licencia para un remedio extremo. Sin la hiper del 89 no se entiende que la convertibilidad — atarse las manos por ley — fuera no solo aceptada sino celebrada. Los regímenes monetarios argentinos, muestra el libro, nacen de los traumas del régimen anterior."
    ],
    "example": {
      "title": "El supermercado sin precios",
      "body": "Un supermercado del Gran Buenos Aires, junio de 1989. Los repositores remarcan con etiquetadora en mano dos veces por día; sobre algunas góndolas cuelga un cartel que lo dice todo: 'sin precio hasta nuevo aviso' — el comerciante no sabe a cuánto repondrá la mercadería, así que prefiere no vender. El cajero anuncia que después de las 18 no se aceptan cheques: para esa hora valdrán menos. Un jubilado que cobró a la mañana corre a gastar todo antes del mediodía. Cada una de esas conductas es individualmente impecable — proteger el capital de trabajo, huir de una moneda que se derrite — y cada una acelera la espiral que las demás temen: no vender es restringir oferta, correr a gastar es disparar la velocidad del dinero, remarcar preventivamente es validar la expectativa. Cuando el sistema de precios deja de informar y la moneda deja de servir para calcular, la economía no tiene coordinador: eso — no un número mensual — es una hiperinflación."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Qué disparó la aceleración final hacia la hiperinflación en 1989?",
        "options": [
          "Un shock petrolero internacional que encareció los costos de toda la economía",
          "Una sequía que derrumbó las exportaciones y con ellas los ingresos fiscales",
          "El colapso del Plan Primavera y la corrida al dólar, con un Estado sin crédito que pagaba su deuda interna emitiendo y un traspaso político que dejó a la moneda sin ninguna ancla",
          "Un aumento salarial generalizado decretado por el gobierno saliente para mejorar su elección"
        ],
        "answer": 2,
        "explain": "La secuencia documentada es monetaria-fiscal-política: sin reservas para sostener el Plan Primavera, la corrida cambiaria se desató y el pass-through llevó el dólar a precios de inmediato; el Estado, sin financiamiento, emitía para pagar una deuda interna carísima; y el interregno Alfonsín-Menem dejó al país sin reglas creíbles de ningún tipo. No hubo shock externo de costos ni climático: fue el agotamiento terminal de un régimen que ya no podía financiarse ni hacerse creer."
      },
      {
        "type": "open",
        "q": "Trazá la cadena que va del desgaste de los planes de los 80 a la hiperinflación de 1989, y explicá qué huella dejó ese episodio sobre la política económica de la década siguiente.",
        "criterion": "Podés trazar la cadena desde el agotamiento de los planes de los 80 hasta la hiperinflación de 1989 y su impacto sobre la política económica posterior.",
        "model": "La cadena: una década de inflación alta con planes de estabilización que fracasaban en serie (Austral, Primavera) fue quemando la credibilidad estatal; en febrero de 1989 el Banco Central se quedó sin reservas, la corrida al dólar se desató y el traslado a precios fue inmediato en una economía ya dolarizada mentalmente; el Estado, sin crédito y con la recaudación licuada por la propia inflación, pagaba su deuda interna emitiendo — dominancia fiscal pura —; y el vacío político del traspaso Alfonsín-Menem removió la última ancla. Las conductas defensivas de cada sector (remarcar, retener, huir del austral) cerraron la espiral. La huella: el trauma hiperinflacionario reordenó las prioridades sociales — estabilidad ante todo — y legitimó el remedio extremo de la década siguiente: la convertibilidad, un autoatamiento por ley que sin el 89 hubiera sido políticamente impensable."
      }
    ],
    "takeaway": "La hiper del 89 fue el final de un régimen que ya nadie financiaba ni creía: cuando todos se defienden del precio de mañana, el sistema de precios deja de coordinar — y el trauma que dejó escribió el régimen siguiente."
  },
  "convertibilidad": {
    "id": "convertibilidad",
    "hook": "Abril de 1991: la Argentina ata el peso al dólar por ley y le prohíbe al Banco Central emitir sin respaldo en reservas. Como Ulises al mástil: sabiéndose incapaz de resistir el canto de la emisión, el país se ató a propósito. Funcionó de maravilla — hasta que hizo falta soltarse.",
    "explanation": [
      "La <b>convertibilidad</b> (ley de marzo de 1991, obra de Cavallo bajo Menem) fue mucho más que un tipo de cambio fijo: fue un régimen monetario con rango legal. Un peso igual a un dólar, y la <b>base monetaria respaldada por reservas</b> — el Banco Central solo podía emitir pesos si entraban dólares. Gerchunoff y Llach la leen como una estrategia de <b>autoatamiento</b>: después del 89, ninguna promesa verbal de 'no emitir' era creíble — todas se habían roto —, así que el Estado se quitó por ley la capacidad de romperla. La renuncia a la política monetaria no era un costo del diseño: ERA el diseño. Justamente porque el gobierno no podía devaluar ni emitir aunque quisiera, la gente le creyó.",
      "El éxito antiinflacionario fue total y rápido: la inflación cayó a un dígito anual en pocos años — de 1.344% en 1990 a virtualmente cero —, algo que ningún argentino menor de cuarenta había visto. Y la estabilidad trajo su dividendo: reapareció el crédito (hasta hipotecas a década, impensables con moneda que se derretía), desapareció el impuesto inflacionario que castigaba a los que no podían dolarizarse, y con la ola de capitales de los 90 la economía voló — el PIB creció a tasas excepcionales entre 1991 y 1994. Alrededor del ancla corrió el resto del paquete: apertura comercial, privatizaciones, reforma del Estado. La ilusión de los 90, en el vocabulario del libro: la Argentina parecía haber encontrado, por fin, el modelo.",
      "La otra cara era la rigidez, y es pura lógica de tu lección de tipo de cambio: al fijar la paridad por ley, el país renunció al amortiguador cambiario. Con inflación residual inicial y socios que devaluaban, la competitividad solo podía recomponerse por la vía lenta y dolorosa — productividad, deflación de costos —, nunca por la rápida. Y ante una salida de capitales (el Tequila de 1995 fue el ensayo general), el régimen funcionaba como el viejo patrón oro: los dólares que se iban contraían automáticamente la base monetaria, y el ajuste entraba entero por tasas, crédito, actividad y empleo. El mismo mástil que había domado la inflación amarraba el ciclo argentino al humor de los capitales — fortaleza y riesgo eran, otra vez, la misma cláusula de la misma ley."
    ],
    "example": {
      "title": "Un peso, un dólar, y el amortiguador que ya no estaba",
      "body": "Compará dos crisis con el mismo shock: se van los capitales del país. En un régimen flotante, el tipo de cambio salta, la moneda depreciada abarata lo local, encarece importaciones y turismo afuera, y el golpe se reparte — doloroso pero amortiguado. Bajo convertibilidad, ese amortiguador está prohibido por ley: los dólares que salen se llevan consigo base monetaria (cada peso está respaldado), el crédito se seca, las tasas vuelan y el ajuste cae entero sobre la actividad y el empleo. En el Tequila de 1995 la Argentina lo vivió en carne propia: recesión y desempleo del 18% con el tipo de cambio clavado — y aguantó, porque la memoria de la hiper hacía preferible cualquier recesión antes que tocar el uno a uno. La fortaleza del régimen era exactamente esa disposición a sufrir sin devaluar. Su riesgo: que el sufrimiento requerido creciera más rápido que la disposición."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Bajo la convertibilidad, estalla una crisis externa y los capitales huyen del país (Tequila, 1995). ¿Cómo ajusta la economía?",
        "options": [
          "El Banco Central emite pesos para sostener el crédito interno mientras dura la turbulencia",
          "Sin devaluación ni emisión posibles, la salida de dólares contrae la base monetaria y el ajuste entra por tasas, crédito, actividad y empleo — recesión con paridad intacta",
          "El peso se deprecia dentro de una banda preestablecida y amortigua el golpe",
          "El tipo de cambio flota transitoriamente hasta que pasa el shock y luego vuelve al uno a uno"
        ],
        "answer": 1,
        "explain": "La convertibilidad no tenía bandas ni flotaciones transitorias: la paridad era ley, y emitir sin respaldo estaba prohibido — esa imposibilidad era precisamente lo que la hacía creíble. Por eso el mecanismo de ajuste era el del patrón oro: los dólares que salen achican la cantidad de dinero, el crédito se seca y la recesión hace el trabajo que la devaluación no puede hacer. El régimen compraba credibilidad vendiendo el amortiguador."
      },
      {
        "type": "open",
        "q": "Explicá la convertibilidad como 'autoatamiento': por qué después de 1989 solo funcionaba una regla que el gobierno NO pudiera romper, qué se ganó con eso, y por qué la misma rigidez que era su fortaleza era también su riesgo.",
        "criterion": "Podés explicar cómo la convertibilidad ancló los precios, qué renunciaba el Estado al adoptarla y por qué su rigidez era a la vez su fortaleza y su riesgo.",
        "model": "Tras la hiper, la palabra del Estado argentino en materia monetaria valía cero: cualquier promesa discrecional de no emitir era papel mojado, porque todas se habían roto. La convertibilidad resolvió el problema de credibilidad quitándole al gobierno la discreción por ley: paridad fija uno a uno y emisión solo contra reservas — no era que no QUERÍA devaluar o emitir; no PODÍA. Esa imposibilidad ancló las expectativas y mató la inflación casi de inmediato, devolviendo crédito y horizonte. El costo fue renunciar a la política monetaria y al tipo de cambio como amortiguadores: con shocks externos o pérdida de competitividad, el ajuste solo podía entrar por recesión, deflación y desempleo. La rigidez era la fuente de la credibilidad Y la trampa: el mástil que te salva de las sirenas es el mismo que te impide maniobrar cuando viene la tormenta."
      }
    ],
    "takeaway": "La convertibilidad compró credibilidad vendiendo discrecionalidad: el mástil de Ulises mató la inflación — y dejó al país sin manos libres justo cuando llegó la tormenta."
  },
  "crisis_2001": {
    "id": "crisis_2001",
    "hook": "Diciembre de 2001: corralito, saqueos, estado de sitio, cinco presidentes en once días y el default más grande de la historia hasta entonces. El régimen que había sido el orgullo estabilizador del país se derrumbó en semanas — pero llevaba años muriéndose, y el libro muestra exactamente por dónde.",
    "explanation": [
      "La agonía empezó mucho antes del corralito. Desde 1998 la economía acumulaba recesión: Brasil — el principal socio — devaluó en 1999 y dejó carísima a la Argentina; el dólar fuerte encarecía todo lo local; y la competitividad, sin tipo de cambio para corregirla, solo podía recomponerse con deflación — bajar precios y salarios nominales, el ajuste más lento y doloroso que existe. Mientras tanto la deuda pública crecía y el <b>riesgo país</b> — tu prima de riesgo soberana — encarecía cada refinanciación: los mercados cobraban por adelantado la probabilidad de que el esquema no cerrara. La Alianza apostó a la austeridad para recuperar la confianza; la austeridad profundizó la recesión, que empeoró la recaudación, que agrandó el déficit que se quería cerrar — el círculo exactamente inverso al buscado.",
      "El 2001 fue el año de la <b>profecía autocumplida</b>, la lógica de expectativas que ya conocés aplicada a un régimen entero. Devaluar era impensable sin catástrofe: años de crédito en dólares — hipotecas, deudas empresarias, títulos públicos — con ingresos en pesos significaban que romper el uno a uno quebraba a medio país de un plumazo. Pero sostenerlo exigía financiamiento externo que el riesgo país volvía prohibitivo. Atrapado, el gobierno ensayó de todo — el regreso de Cavallo, canjes de deuda (el 'megacanje'), déficit cero, una futura canasta dólar-euro — y cada medida, leída como signo de desesperación, aceleró lo que quería impedir. Los depositantes hicieron la cuenta: si esto termina en devaluación, mejor sacar los dólares hoy. La corrida bancaria de noviembre fue la expectativa ejecutándose a sí misma.",
      "El <b>corralito</b> (diciembre de 2001) — la restricción a los retiros de efectivo — intentó frenar la corrida y firmó la sentencia: confirmó el pánico que pretendía calmar, estranguló una economía que funcionaba en efectivo y convirtió la crisis financiera en estallido social y político. Cacerolazos, saqueos, estado de sitio, la renuncia de De la Rúa, la semana de los cinco presidentes, el default declarado entre aplausos en el Congreso, y en enero de 2002 la devaluación con pesificación asimétrica. El PIB cayó más de 10% en 2002 y la pobreza superó el 50%: la 'gran depresión argentina', la llama el libro. Gerchunoff y Llach no señalan un único culpable — rigidez cambiaria, endeudamiento, shocks externos y política fiscal laxa en los años buenos se combinaron —, pero la moraleja estructural es nítida: el régimen no tenía puerta de salida barata, y cuando un esquema solo puede sostenerse o estallar, las expectativas eligen solas."
    ],
    "example": {
      "title": "La cuenta que hizo cada depositante",
      "body": "Ponete en los zapatos de alguien con 20.000 dólares depositados en un banco argentino en octubre de 2001. Escenario A: la convertibilidad aguanta — tus dólares siguen ahí, no ganaste ni perdiste nada por retirarlos. Escenario B: la convertibilidad cae — tus 'dólares' se pesifican quién sabe a cuánto, o quedan atrapados. Retirar no cuesta casi nada y te asegura contra la catástrofe: la jugada dominante es correr al banco, CREAS lo que creas sobre la probabilidad de B. Y acá está la maldición: como esa cuenta la hizo todo el mundo a la vez, los depósitos se fugaron en masa, el sistema — que como sabés de tu lección de bancos, nunca tiene la plata de todos a la vez — entró en colapso, y el gobierno respondió con el corralito… que les confirmó a todos que la corrida tenía razón. La expectativa de la caída produjo la caída: no hizo falta que nadie 'conspirara' — alcanzó con que cada uno se protegiera racionalmente."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Hacia 2001 era evidente que el peso estaba caro. ¿Por qué el gobierno no devaluó 'un poco' para recuperar competitividad y evitar el colapso?",
        "options": [
          "Porque el estatuto del FMI prohibía modificar paridades declaradas ante el organismo",
          "Porque el peso en realidad estaba subvaluado y una devaluación era técnicamente innecesaria",
          "Porque tras años de crédito en dólares con ingresos en pesos, cualquier devaluación quebraba masivamente a familias, empresas y al propio Estado — y admitir que la paridad era tocable destruía de un golpe toda la credibilidad del régimen",
          "Porque la ley de convertibilidad exigía un referéndum popular para cambiar la paridad"
        ],
        "answer": 2,
        "explain": "No existía la devaluación 'chica': una década de contratos, deudas y ahorros dolarizados sobre ingresos en pesos hacía que cualquier corrección quebrara balances en cadena — como efectivamente ocurrió en 2002. Y el régimen valía exactamente lo que valía su promesa de eternidad: el día que la paridad se admitía negociable, la corrida era instantánea. Ni el FMI ni ningún referéndum ataban al gobierno: lo ataban los balances dolarizados y la lógica de las expectativas — el autoatamiento había funcionado tan bien que ya no había forma barata de desatarse."
      },
      {
        "type": "open",
        "q": "Reconstruí por qué la convertibilidad se volvió insostenible hacia 2001 y cómo se encadenó el desenlace: recesión, deuda, corrida, corralito y colapso político. ¿Qué papel jugaron las expectativas en cada eslabón?",
        "criterion": "Podés reconstruir por qué el régimen convertibilizado se volvió insostenible y qué detonó el colapso económico y político de 2001.",
        "model": "La insostenibilidad venía de la rigidez: con Brasil devaluado y el dólar fuerte, la Argentina quedó cara y solo podía ajustar por deflación y recesión — que arrancó en 1998 y no paró. La recesión hundía la recaudación, agrandaba el déficit y la deuda, y el riesgo país encarecía cada refinanciación: los mercados ya cotizaban la probabilidad del final. Devaluar era imposible sin quebrar a un país endeudado en dólares con ingresos en pesos; sostener exigía dólares que nadie prestaba. Atrapado entre dos imposibles, cada gesto oficial (megacanje, déficit cero) fue leído como desesperación y aceleró la corrida: los depositantes, razonando que ante la mínima chance de pesificación convenía retirar, vaciaron los bancos — la profecía autocumplida ejecutándose. El corralito frenó la sangría confirmando el pánico, transformó la crisis financiera en estallido social, y el colapso político (De la Rúa, cinco presidentes) arrastró lo que quedaba: default, devaluación y la mayor depresión argentina en tiempos de paz."
      }
    ],
    "takeaway": "2001 enseñó el precio del autoatamiento: un régimen que solo puede sostenerse o estallar no tiene aterrizaje suave — y cuando las expectativas eligen el estallido, lo ejecutan ellas mismas."
  },
  "ciclo_ilusion_desencanto": {
    "id": "ciclo_ilusion_desencanto",
    "hook": "El país de crecimiento más rápido del mundo y el de los derrumbes más violentos. De la hiper a la inflación cero y de vuelta. Del Estado empresario al privatizador récord. Gerchunoff y Llach miraron ese péndulo de un siglo y le pusieron nombre: el ciclo de la ilusión y el desencanto.",
    "explanation": [
      "El <b>ciclo de la ilusión y el desencanto</b> es la tesis que organiza el libro entero: la historia económica argentina no es una decadencia monótona sino una oscilación violenta entre euforias de prosperidad rápida y derrumbes que devuelven al punto de partida. El origen del péndulo está en el arranque: la belle époque agroexportadora puso a la Argentina en el pelotón de los países ricos, y cuando la Gran Depresión la sacó de ese pelotón, quedó instalada una vara — el recuerdo de haber sido rica — que ninguna política posterior pudo satisfacer con paciencia. De ahí la tentación permanente que los autores describen: vivir como país rico antes de volver a serlo. Esa tentación tiene un nombre en el libro: los <b>atajos</b>.",
      "Un atajo, en el vocabulario de la tesis, es una política que entrega prosperidad hoy — salarios, consumo, empleo — por encima de lo que la base productiva y de divisas puede sostener, postergando la restricción en vez de resolverla. Los dos grandes atajos históricos: el <b>proteccionismo distributivo</b> de posguerra — cerrar la economía, volcar los alimentos al mercado interno, repartir empleo y salario urbano —, que funcionó hasta que la restricción externa presentó la cuenta en forma de stop-go e inflación; y el <b>endeudamiento con apreciación cambiaria</b> — la tablita de Martínez de Hoz en los 70, la convertibilidad en los 90 —, que regala salarios altos en dólares y consumo importado barato mientras el mundo preste, y termina en 1982, en 1989, en 2001. La ilusión es genuina en ambos casos: hay años en que el bienestar es real y parece que el modelo por fin apareció. El desencanto también: la restricción postergada vuelve con intereses.",
      "Dos precisiones salvan a la tesis de ser fatalismo. Primera: no es determinismo — los autores enumeran contrafácticos (un Plan Pinedo aprobado, un Austral con mejores términos de intercambio, una salida ordenada de la convertibilidad a tiempo) para insistir en que en cada bifurcación la historia pudo ser otra; el ciclo es un patrón de decisiones, no una maldición genética. Segunda: el atajo no tiene ideología — lo tomaron peronistas y liberales, civiles y militares, con cierre comercial o con apertura financiera; lo que comparten no es el signo político sino la estructura temporal: adelantar el bienestar, patear la restricción. Por eso la lente sirve como brújula hacia adelante: ante cada auge argentino, la pregunta del libro es siempre la misma — ¿esto lo banca la base productiva y de divisas, o es otro adelanto contra una restricción que va a volver? ¿Camino, o atajo?"
    ],
    "example": {
      "title": "Dos ilusiones con la misma partitura",
      "body": "Poné lado a lado el primer peronismo y la convertibilidad — enemigos ideológicos perfectos — y mirá la estructura. Ilusión uno (1946-1949): salarios reales récord, pleno empleo, consumo popular desatado; el instrumento es el cierre comercial y la redistribución de la renta agraria hacia la ciudad. Desencanto uno: hacia 1949 los dólares no alcanzan, llegan el stop-go, la inflación y el ajuste que el propio Perón debió administrar. Ilusión dos (1991-1997): inflación cero, crédito en cuotas, salarios altos en dólares, viajes a Miami; el instrumento es el ancla cambiaria financiada con deuda y privatizaciones. Desencanto dos: recesión desde 1998, corralito, default, 2002. Los instrumentos son opuestos — una economía cerrada, la otra abierta; un Estado gigante, el otro en retirada — pero la partitura es idéntica: bienestar adelantado contra una restricción (de divisas, de competitividad) que se posterga, se acumula y cobra todo junto al final. Eso es exactamente lo que la tesis llama un atajo — y por eso el libro desconfía por igual de las euforias de ambos signos."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Según la tesis de Gerchunoff y Llach, ¿qué convierte a una política económica en un 'atajo'?",
        "options": [
          "Que entregue un bienestar presente por encima de lo que la base productiva y de divisas sostiene, postergando la restricción en vez de resolverla — sea con cierre proteccionista o con deuda y apreciación",
          "Que sea heterodoxa: los atajos son los desvíos respecto de la ortodoxia fiscal y monetaria",
          "Que dependa de un contexto internacional favorable que el país no controla",
          "Que la implemente un gobierno populista con fines electorales"
        ],
        "answer": 0,
        "explain": "La definición es estructural, no ideológica: el atajo adelanta prosperidad que la economía todavía no genera, difiriendo la restricción — de divisas o de competitividad — que después vuelve con intereses. Por eso el libro pone en la misma bolsa al proteccionismo distributivo peronista y al endeudamiento con apreciación de Martínez de Hoz y los 90: ortodoxos y heterodoxos, populistas y liberales tomaron atajos. Depender del contexto externo es un rasgo de casi toda la historia argentina, no lo que define al atajo."
      },
      {
        "type": "open",
        "q": "Aplicá la lente del ciclo a dos episodios de la historia argentina: identificá en cada uno la ilusión, el atajo que la financió y el desencanto en que terminó.",
        "criterion": "Podés aplicar la idea de ciclos de ilusión y desencanto a al menos dos episodios de la historia económica argentina y nombrar los atajos típicos.",
        "model": "Episodio uno — el primer peronismo: la ilusión fue la prosperidad obrera de 1946-1949 (salarios récord, pleno empleo, consumo popular); el atajo, el proteccionismo distributivo — cerrar la economía y volcar la renta agraria al salario urbano, desalentando al sector que generaba las divisas —; el desencanto llegó cuando la restricción externa presentó la cuenta: crisis de divisas de 1949-1952, stop-go, inflación y el ajuste que el propio régimen tuvo que administrar. Episodio dos — la convertibilidad: la ilusión fue la estabilidad con boom de 1991-1997 (inflación cero, crédito, salarios en dólares); el atajo, el endeudamiento externo con apreciación cambiaria que financiaba consumo e importaciones mientras la competitividad se erosionaba; el desencanto fue la recesión de 1998-2001, el corralito, el default y la depresión de 2002. Instrumentos opuestos, idéntica estructura: bienestar adelantado contra una restricción postergada que volvió con intereses."
      }
    ],
    "takeaway": "La pregunta que el libro deja instalada ante cada auge argentino es una sola: ¿esto lo sostiene la base productiva, o es otro adelanto contra una restricción que va a volver? — ¿camino, o atajo?"
  },
  "peronismo_economico": {
    "id": "peronismo_economico",
    "hook": "Entre 1945 y 1949 los salarios reales argentinos subieron 62% y, por primera vez, la parte salarial del ingreso nacional superó a la de ganancias, intereses y renta. Parecía posible ser industrial, justo y soberano al mismo tiempo.",
    "explanation": [
      "El <b>peronismo económico</b> del primer gobierno de Perón (1946-1955) es, en el relato de Gerchunoff y Llach, la gran ilusión de posguerra: conciliar expansión industrial, salarios altos y un Estado que produce y redistribuye. No es solo 'más ISI': es un paquete político-económico. El discurso del <b>justicialismo</b> —ni capitalismo ni comunismo— se traduce en armonía de clases, sindicatos fuertes (sobre todo la CGT) y un Estado tutor que avanza como productor de servicios y energía: ferrocarriles, teléfonos, Gas del Estado, YCF, plantas hidroeléctricas, DINIE.",
      "El motor distributivo fue una política de ingresos agresiva (asociada al Primer Plan Quinquenal y a Miguel Miranda) y un triángulo redistributivo entre <b>campo, ciudad y Estado</b>. El <b>IAPI</b> monopolizó la comercialización de granos: compraba barato al productor y vendía caro afuera aprovechando los <b>términos de intercambio</b> más altos del siglo. Ese margen financiaba gasto público y abarataba alimentos internos, lo que permitía salarios reales altos sin destrozar del todo la rentabilidad industrial. Crédito barato y protección completaban el esquema.",
      "La ilusión descansaba en una coyuntura excepcional y en un pesimismo sobre el comercio mundial (se apostaba más a una Tercera Guerra que a la resurrección del multilateralismo). Cuando los precios externos cayeron y la industria pidió más insumos importados, reaparecieron el déficit externo y la inflación. El libro lo lee sin moralina: funcionó un tiempo porque el mundo pagaba muy bien los alimentos argentinos; al acabarse esa marea, el modelo mostró el peaje de haber desalentado al agro exportador y de haber extendido el Estado más allá de su capacidad de financiamiento no inflacionario."
    ],
    "example": {
      "title": "El triángulo del IAPI",
      "body": "Imaginá 1947: el trigo vale una fortuna en el mercado mundial. El IAPI se lo compra al chacarero a un precio interno contenido y lo vende afuera al precio pleno. Con la diferencia paga obra pública y sueldos. En la ciudad, el pan no se dispara y el salario rinde. La fábrica vende más al mercado interno y pide crédito. Todos ganan… mientras el precio internacional siga alto y las reservas den para importar máquinas e insumos. Cuando eso se corta, el triángulo se desequilibra: o cae el salario real, o sube la inflación, o faltan dólares."
    },
    "check": [
      {
        "type": "mcq",
        "q": "Según Gerchunoff y Llach, ¿qué rol cumplió el IAPI en el primer peronismo?",
        "options": [
          "Monopolizó el comercio de granos y transfirió renta del campo al Estado y a la ciudad vía precios internos contenidos",
          "Fue un banco central independiente con meta de inflación",
          "Privatizó los ferrocarriles británicos a favor del capital norteamericano",
          "Fijó el peso a la par del dólar con respaldo pleno de reservas"
        ],
        "answer": 0,
        "explain": "El IAPI compraba cosechas y las vendía internamente y al exterior, capturando el margen de los altos precios internacionales y barateando alimentos locales."
      },
      {
        "type": "open",
        "q": "¿Por qué el 'milagro' distributivo de 1946-49 era difícil de sostener cuando cambió el mundo?",
        "criterion": "Podés explicar el triángulo redistributivo del primer peronismo (campo, ciudad y Estado) y por qué dependía de una coyuntura externa excepcional.",
        "model": "Porque se apoyaba en términos de intercambio excepcionales y en transferir renta del agro exportador. Al caer esos precios y al necesitar la industria más importaciones de insumos, se agotaba el margen del IAPI y reaparecían restricción externa e inflación."
      }
    ],
    "takeaway": "Justicia social con soja (o trigo) cara es fácil; el test del modelo llega cuando el mundo deja de pagar la fiesta."
  },
  "reforma_financiera_77": {
    "id": "reforma_financiera_77",
    "hook": "En 1977, en medio de la dictadura, Martínez de Hoz soltó de un saque el sistema bancario que venía de décadas de tasas reguladas y control estatal. Fue uno de los cambios más drásticos del período… y de los más frágiles.",
    "explanation": [
      "La <b>reforma financiera de 1977</b> es el capítulo financiero del programa de José Alfredo Martínez de Hoz. Gerchunoff y Llach la destacan como excepción al gradualismo del gobierno militar: un rediseño profundo del sistema bancario. Desde 1946 la Argentina había alternado fases de libertad relativa con épocas de fuerte regulación —las últimas, asociadas a gobiernos peronistas—. La reforma empujó hacia la <b>liberalización</b>: tasas de interés más libres, nuevos intermediarios y un mercado de crédito que prometía asignar mejor el ahorro.",
      "La lógica era de manual de época: sin tasas artificialmente bajas ni racionamiento del crédito, el capital iría a usos más productivos y se rearmaría un mercado de capitales. En el corto plazo, el sistema creció y se volvió más sofisticado. Pero la transición se hizo en un país con inflación alta, apertura financiera al exterior y, más tarde, un ancla cambiaria (la tablita) que distorsionaba señales de riesgo y rentabilidad en pesos versus dólares.",
      "El libro no idealiza el resultado. Hacia el final del ciclo militar el sistema bancario reveló <b>fragilidades múltiples</b>: crisis de entidades, corridas, intervención del Banco Central y un proceso posterior de socialización de deudas. La reforma importa como pieza del atajo de los 70 —abrir y modernizar por la vía financiera— y como advertencia: liberalizar el crédito sin un ancla macro creíble y sin supervisión sólida puede fabricar un boom… y un rescate."
    ],
    "example": {
      "title": "Tasas libres en un país con inflación de tres dígitos",
      "body": "Si liberás las tasas cuando la inflación corre al 100% o 150% anual, el número nominal de la tasa se vuelve un volantazo permanente. Los bancos compiten por depósitos ofreciendo más; las empresas se endeudan si creen que el dólar o la inflación les licuará la deuda. Cuando la confianza se quiebra —como en 1980-81— las tasas reales se disparan, quiebran deudores y el Estado termina absorbiendo pedazos del sistema. La libertad de tasas no era el problema en abstracto: era el contexto macro en el que se la soltó."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Qué cambió de fondo la reforma financiera de 1977 en la Argentina?",
        "options": [
          "Nacionalizó todos los depósitos y volvió al IAPI bancario",
          "Pasó de un esquema más regulado de tasas y crédito a uno liberalizado de intermediación financiera",
          "Adoptó la convertibilidad uno a uno con el dólar",
          "Prohibió la banca privada y dejó solo al Banco Nación"
        ],
        "answer": 1,
        "explain": "El núcleo fue desregular el sistema bancario —en especial las tasas— rompiendo con décadas de fuerte regulación del crédito."
      },
      {
        "type": "open",
        "q": "¿Por qué una reforma que buscaba 'modernizar' el crédito pudo terminar en fragilidad sistémica?",
        "criterion": "Podés situar la reforma financiera de 1977 como giro de un sistema bancario regulado hacia uno liberalizado y anticipar por qué esa transición fue inestable.",
        "model": "Porque se combinó con inflación alta, apertura financiera y señales cambiarias distorsionadas: el boom de intermediación creció más rápido que la capacidad de evaluar riesgo, y al cortarse la confianza el Estado debió absorber quiebras y deudas."
      }
    ],
    "takeaway": "Liberar el crédito multiplica el sistema financiero… y multiplica también los errores si la macro no ancla las expectativas."
  },
  "tablita": {
    "id": "tablita",
    "hook": "El 20 de diciembre de 1978 el gobierno publicó una tablita: mes a mes, cuánto valdría el dólar. La idea era genial en el pizarrón. En la vida real, la inflación no se enteró… y el país se volvió carísimo en dólares.",
    "explanation": [
      "La <b>tablita</b> fue el crawling peg antiinflacionario de Martínez de Hoz: un cronograma preanunciado de devaluación decreciente (por ejemplo, del 5% mensual hacia tasas menores) para que la inflación local convergiera a la inflación internacional más el ritmo del dólar. Completaban el esquema 'pautas' de tarifas, salarios mínimos y crédito. Tras el fracaso de controlar la inflación solo con dinero, el tipo de cambio pasó a ser el ancla: se esperaba que los bienes comerciables no pudieran subir mucho más que 'afuera + devaluación'.",
      "Gerchunoff y Llach subrayan la doble cara del efecto inicial. Hubo expansión en 1979 (el PBI creció fuerte; el desempleo tocó mínimos) porque las tasas reales cayeron —en buena medida porque la inflación siguió alta, no porque el riesgo país se hubiera evaporado—. Pero la inflación minorista apenas bajó (del orden de 170% a 160% anual) mientras el dólar se movía mucho más despacio. Esa <b>divergencia</b> es el corazón del fracaso: se acumula <b>atraso cambiario</b>, se abaratan las importaciones, se castiga a exportadores y la balanza comercial se da vuelta.",
      "La credibilidad se fue erosionando en 1980: crisis bancaria, fuga, tasas en pesos disparadas y un chiste de época —los pobres de vacaciones a Uruguay, la clase media a Brasil, los ricos se quedan—. El libro la lee como caso de ancla cambiaria gradualista que no disciplina precios lo bastante rápido: cuando la gente duda del cronograma, la tablita se vuelve una invitación a apostar en contra. En 1981 se abandona; queda el legado de deuda, atraso y recesión."
    ],
    "example": {
      "title": "La cuenta que no cerraba",
      "body": "Supongamos que la tablita devalúa el peso 60% en el año y la inflación internacional de comerciables es 10%. El manual dice: inflación local de transables cerca de 70%. Si en la práctica los precios suben 150%, cada mes el país se encarece en dólares. Importar ropa o maquinaria se pone barato; exportar se pone cuesta arriba. Podés vivir un año de 'plata dulce' y turismo afuera… hasta que faltan reservas o estalla la desconfianza y hay que devaluar de un saque lo que la tablita no devaluó de a poco."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Cuál fue el mecanismo por el que la tablita generó atraso cambiario?",
        "options": [
          "El gobierno devaluó mucho más rápido que la inflación interna",
          "Se prohibieron todas las importaciones y sobraron dólares",
          "La inflación interna se mantuvo muy por encima del ritmo preanunciado de devaluación del dólar",
          "El Banco Central dejó de publicar el tipo de cambio"
        ],
        "answer": 2,
        "explain": "Al devaluar según la tablita más despacio de lo que subían los precios locales, el tipo de cambio real se apreciaba y el país se encarecía en dólares."
      },
      {
        "type": "open",
        "q": "¿Por qué un ancla cambiaria 'previsible' puede fallar aunque el cronograma se cumpla mes a mes?",
        "criterion": "Podés explicar la lógica antiinflacionaria de la tablita y por qué la divergencia entre devaluación e inflación generó atraso cambiario.",
        "model": "Porque la inflación puede no converger al ritmo del dólar por inercia, demanda o falta de credibilidad. Si los precios corren más que la devaluación, hay atraso real, deterioro externo y al final se duda del propio cronograma."
      }
    ],
    "takeaway": "Anunciar el dólar de agosto no baja la inflación de enero: si los precios no convergen, la tablita fabrica atraso."
  },
  "decada_perdida": {
    "id": "decada_perdida",
    "hook": "En 1982 México amenazó con no pagar y se cerró el grifo del crédito para toda América Latina. La Argentina llegó a esa fiesta ya borracha de deuda, inflación y recesión: le tocó lo peor de los 70 y lo peor de los 80.",
    "explanation": [
      "La <b>década perdida</b> es el nombre que Gerchunoff y Llach retoman para los 80 latinoamericanos: tras la crisis de la deuda desencadenada en 1982, se corta el financiamiento voluntario y hay que generar superávit comercial a la fuerza —casi siempre contrayendo importaciones e inversión—. Europa y EE.UU. se recuperan; la región se estanca. La Argentina, dice el libro, combina lo peor de cada época: estancamiento en los 70 y recesión en los 80.",
      "El tramo 1981-83 es 'crisis sobre crisis': se abandona la tablita, hay devaluaciones en cadena, se revierte la apertura, se re-regulan tasas y se socializa deuda privada vía seguros de cambio. El PBI cae del orden del 9% en 1981-82 (la mayor recesión desde los 30). Afuera, las tasas internacionales suben por el moneterismo del Norte y encarecen el servicio de la deuda. En 1983 la deuda ronda los 45 mil millones de dólares y cerca del 70% ya es pública: el Estado absorbió lo que el privado no podía pagar en moneda dura.",
      "La democracia de 1983 hereda, según el libro, un problema de dos caras: conseguir recursos fiscales y superávit comercial para servir deuda, en una economía acostumbrada a vivir con inflación de tres dígitos. No es solo un mal dato de crecimiento: es el puente entre el atajo de endeudamiento con apreciación de los 70 y los experimentos de estabilización (Austral) y la hiper de 1989. La década perdida es el precio de haber financiado con deuda lo que la productividad y las exportaciones no sostenían."
    ],
    "example": {
      "title": "Ajustar sin crédito",
      "body": "Cuando nadie te presta, la única forma de pagar intereses en dólares es exportar más de lo que importás. Si no podés exportar mucho más de golpe, cortás importaciones un 40% (como la región a inicios de los 80). Eso significa menos máquinas, menos insumos, menos actividad. El país 'ordena' la cuenta externa empobreciéndose: es el ajuste de la década perdida, no un plan de desarrollo."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Qué hecho externo marca el inicio de la crisis de la deuda latinoamericana que define la década perdida?",
        "options": [
          "La creación del Plan Austral en 1985",
          "La convertibilidad de 1991",
          "La entrada de China a la OMC en 2001",
          "La amenaza de moratoria mexicana en 1982 y el cierre del crédito voluntario internacional"
        ],
        "answer": 3,
        "explain": "El libro sitúa en la crisis de la deuda de 1982 —con México como detonante— el corte de financiamiento que fuerza el ajuste regional de los 80."
      },
      {
        "type": "open",
        "q": "¿Qué herencia económica recibió el gobierno democrático de 1983 según este relato?",
        "criterion": "Podés explicar por qué la crisis de la deuda convirtió a los 80 en una 'década perdida' y qué herencia (deuda, inflación, recesión) recibió la democracia en 1983.",
        "model": "Deuda externa elevada y mayormente pública, necesidad de superávit comercial y fiscal para servirla, recesión reciente e inflación crónica de tres dígitos: un margen de maniobra estrecho para estabilizar y crecer."
      }
    ],
    "takeaway": "Cuando se cierra el crédito externo, el ajuste no se negocia: se importa menos, se invierte menos y se pierde una década."
  },
  "posconvertibilidad": {
    "id": "posconvertibilidad",
    "hook": "Después del abismo de 2001-2002, la Argentina reapareció creciendo a tasas que parecían chinas. No fue magia: fue un tipo de cambio barato en dólares, fábricas a medio uso y un mundo que volvía a pagar bien la soja.",
    "explanation": [
      "La <b>posconvertibilidad</b> es el tramo de salida del régimen 1 a 1: devaluación, default/reestructuración, licuación de deudas en pesos y un <b>tipo de cambio real alto</b> que Gerchunoff y Llach ponen en el centro de la recuperación 2002-2007. Con la economía en el piso, había <b>capacidad ociosa</b>: se podía producir más sin mucha inversión nueva. El dólar alto abarataba costos laborales en moneda dura, favorecía exportar y sustituir importaciones, y —mientras la actividad era baja— permitía superávit de cuenta corriente.",
      "El libro describe un círculo virtuoso inicial: superávits gemelos (fiscal y externo), el Central comprando dólares para no dejar apreciar del todo el peso, confianza que vuelve al peso y reservas que suben. A eso se suma el <b>viento de cola</b>: mejora de términos de intercambio, Brasil creciendo (demanda de manufacturas argentinas) y tasas mundiales bajas. En lo fiscal, los primeros años preservan superávit aunque el gasto crezca; en lo cambiario, Néstor Kirchner prioriza el tipo de cambio competitivo incluso contra la preferencia más antiinflacionaria de Prat-Gay en el BCRA.",
      "Esa fase es la 'ilusión' del ciclo siguiente: parece posible reindustrializar, mejorar salarios y mantener superávits sin el ancla rígida de los 90. El matiz del libro es crucial: gran parte del milagro era rebotar desde muy abajo con un dólar alto y precios de commodities en alza. Cuando se acerque el pleno empleo y la inflación, ese menú se volverá más conflictivo. La posconvertibilidad explica el despegue; no garantiza que el modelo sea permanente."
    ],
    "example": {
      "title": "Fábrica a media máquina",
      "body": "En 2002 una planta metalúrgica del conurbano produce al 50% de su capacidad. Devalúan: el acero importado se encarece y el cliente local vuelve a comprar nacional. El dueño enciende el segundo turno sin construir una planta nueva. El empleo sube, el salario en pesos se recupera desde el pozo, y el Central acumula dólares porque el país exporta más de lo que importa. Eso es recuperación por capacidad ociosa + tipo de cambio real alto: potentísima… hasta que la planta se llena y los precios empiezan a pisar el acelerador."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Cuáles son, en el relato del libro, los pilares de la recuperación 2002-2007?",
        "options": [
          "Tipo de cambio real alto, capacidad ociosa, superávits y un contexto externo favorable",
          "Convertibilidad reforzada y ancla 1 a 1 más rígida",
          "Hiperinflación controlada solo con la tablita de 1978",
          "Cierre total del comercio y abandono del peso"
        ],
        "answer": 0,
        "explain": "La recuperación se apoya en el dólar alto post-devaluación, el rebote desde actividad deprimida, superávits y el viento de cola de commodities y Brasil."
      },
      {
        "type": "open",
        "q": "¿Por qué un tipo de cambio 'competitivo' puede alinear por un tiempo al campo y a la industria?",
        "criterion": "Podés explicar cómo el tipo de cambio competitivo y la capacidad ociosa impulsaron la recuperación 2002-2007 y qué rol jugó el 'viento de cola' externo.",
        "model": "Porque un dólar alto mejora la rentabilidad exportadora del agro y también la de la industria sustitutiva/exportadora, abaratando costos en moneda extranjera; esa coincidencia de intereses es frágil cuando aparece la inflación o se aprecia el tipo de cambio real."
      }
    ],
    "takeaway": "Salir del pozo con dólar alto y fábricas a media máquina es un rebote poderoso; no es, solo, un modelo de largo plazo."
  },
  "kirchnerismo": {
    "id": "kirchnerismo",
    "hook": "Gerchunoff y Llach cierran el libro con un veredicto nítido: el kirchnerismo completó un arco entero de ilusión y desencanto —el tercero de la democracia— sin explotar como 1989 o 2001, pero dejando desequilibrios de sobra.",
    "explanation": [
      "El <b>ciclo kirchnerista (2003-2015)</b> arranca sobre la posconvertibilidad: crecimiento alto, caída del desempleo, superávits y un relato de 'modelo de acumulación con inclusión social' y tipo de cambio competitivo. El prólogo del libro lo llama la nostalgia de la Argentina de posguerra —pleno empleo y salarios altos— pero en una economía más abierta y con soja cara. Mientras hubo holgura, el menú fue popular: campo e industria podían ganar a la vez con un dólar alto.",
      "Las grietas aparecen cuando se pide lo que la macro no puede dar para siempre: 'tasas chinas' y salarios reales en alza cerca del pleno empleo. Suben inflación y apreciación real; se manipula el IPC (desde 2007); estalla el conflicto de la <b>resolución 125</b> por retenciones móviles a la soja (2008). El expansionismo fiscal y monetario se sostiene con reservas, retenciones y, más tarde, con el BCRA y recursos de la seguridad social. Tras la reelección de 2011, la corrida lleva al <b>cepo cambiario</b> y al dólar blue: vuelve el control de cambios clásico de la Argentina post-1930 y, con él, el stop-go.",
      "El desencanto, en este relato, no es una sola fecha sino un agotamiento: desequilibrios fiscal, externo y de precios relativos; stocks de reservas y energía que se consumen; sintonía fina anunciada y postergada. El libro insiste en que no hubo hiper ni corralito final, pero sí un tercer péndulo de la democracia: de la reactivación en la que todos ganan a una política que elige una y otra vez el atajo de corto plazo. Leer el kirchnerismo con esta lente es ver la misma gramática de ilusión y desencanto con otro vestuario."
    ],
    "example": {
      "title": "Del superávit gemelo al cepo",
      "body": "En 2004 el gobierno se jacta de superávit fiscal y comercial con dólar alto. En 2011, con boom de consumo preelectoral, el Central vende reservas para calmar el dólar mientras la gente saca depósitos en moneda extranjera. Después de las elecciones llegan las restricciones para comprar dólares: nace el cepo. El mismo instrumento que en los 30 y en la ISI —el control de cambios— reaparece cuando la restricción externa vuelve al centro. No es un detalle técnico: es el final del menú fácil de la posconvertibilidad."
    },
    "check": [
      {
        "type": "mcq",
        "q": "¿Cómo caracterizan Gerchunoff y Llach el cierre del ciclo kirchnerista?",
        "options": [
          "Como un default idéntico al de 2001 con cinco presidentes en una semana",
          "Como el regreso exitoso y permanente al patrón oro",
          "Como un arco completo de ilusión y desencanto que termina en agotamiento, cepo y stop-go, sin una explosión tipo 1989 o 2001",
          "Como la adopción plena de metas de inflación al estilo chileno desde 2003"
        ],
        "answer": 2,
        "explain": "El libro habla de un tercer ciclo de ilusión y desencanto de la democracia, que se agota con desequilibrios y cepo pero sin el estallido de la hiper o del 2001."
      },
      {
        "type": "open",
        "q": "Señalá un elemento de la 'ilusión' inicial y uno del 'desencanto' final del ciclo 2003-2015.",
        "criterion": "Podés trazar el arco de ilusión y desencanto del kirchnerismo: recuperación inicial, tensiones (inflación, apreciación, 125) y agotamiento con cepo y restricción externa.",
        "model": "Ilusión: crecimiento alto con tipo de cambio competitivo, superávits y mejora social post-crisis. Desencanto: inflación, apreciación, manipulación del IPC, conflicto de la 125, cepo y vuelta del stop-go por restricción de divisas."
      }
    ],
    "takeaway": "El tercer péndulo democrático: la reactivación no puede ser un estado permanente, aunque se la administre con cepo y no con corralito."
  }
};
