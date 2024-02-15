import './style.css'
import './solid/05-dependency-a'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<div>
<h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
<h3>Deuda Tecnica</h3>
<p>La deuda tecnica, es la falta de calidad del codigo, que genera una deuda que repercutirá a costos futuros</p>
<strong>COSTOS ECONÓMICOS</strong>

<ul>
<li>Tiempo en realizar mantenimiento</li>
<li>Tiempo en refactorizar codigo</li>
<li>Tiempo en comprender el codigo (de nosostros o de otras personas)</li>
<li>Tiempo adicional a la transferencia de codigo (Cuando de le hace la transferencia del codigo a otra persona, para explicarle y lo entienda)</li>
</ul>

<h4>Esque de la deuda tecnica</h4>

<strong>Inprudente o deliverada</strong>
<p>No hay tiempo, sólo copia y pega eso de nuevo</p>
<strong>Inprudente y inadvertido</strong>
<p>
Se genera por el desconocimiento o falta de experiencia.
es la deuda tecnica más peligrosa, es generada por un desarrollador de perfil junior o lo que es peor un falso senior
</p>

<strong>Prudente y deliverada</strong>
<p>Saber que la deuda existe, el peligro con la deuda tecnica es que se no paga a tiempo, se puede dar un ejempo, cuando se ponen mensajes de TODO: luego lo hacemos, o aplazar la refactorización por falta de tiempo</p>
  
<strong>Prudente y inadvertidad </strong>
<p>es un tipo de deuda, que uno se da cuenta cuando ya se ah avanzado en el proyecto, ahí es donde uno dice que no fue la mejor arquitectura o no se organizo bien, o podemos apretarno como se dice vulgarmente o seguir con el proyecto.</p>
</div>

<h2>Cómo se paga una deuda técnica?</h2>
<p> se paga con <b>Refactorización</b>, la refactorización  es el proceso de tiene como objetivo mejorar el código sin alterar si comportamiento para que sea más entendible y tolerante a cambios</p>
<p>Una refactorización funcione, es imprescindible contar con pruebas automáticas</p>
<h2>Clean Code</h2>
<p>Código limpio es aquel que se ha escrito con la intención de que otra persona (O tú mismo en el fucturo) lo entienda <b>- Carlos blé</b></p>
<p>Nuestro codigo tiene que ser simple y directo, debería leerse con la misma facilidad que un texto bien escrito. <b>Grady Booch</b></p>
<p>Programar es el arte de decirle a otro humano lo que quieres que la computadora haga - <b>Donald Knuth</b></p>  
<h2>Estructura recomendada de una Clase</h2>
<p>"EL buen código parece estar escrito por alguien a quien le importa" <b>- Michael feathers</b></p>
 <strong>Comenzar con lista de propiedades</strong>
 <ol>
 <li>Propiedades estáticas</li>
 <li>Propiedades Públicas de último</li>
 </ol>
 <strong>Métodos</strong>
 <ol>
 <li>Empezando por los contructores estáticos</li>
 <li>Luego el constructor</li>
 <li>Seguidamente métodos estáticoss</li>
 <li>Métodos privados después</li>
 <li>Resto de métodos de instancia ordenados de mayor a menor importancia</li>
 <li>Getters y Setters al final</li>
 
 </ol>
<h2>Comentarios</h2>
<p>los comentarios debería dar el <b>¿El por qué?</b> en lugar del <b>¿qué?</b> o <b>¿Cómo?</b> </p>
<h2>Uniformidad en el proyecto</h2>
<b>Problemas similares, soluciones similares!</b>
<p>Tratar de tener todo uniformado</p>
<p>Por ejemplo la creación de carpetas de un proyecto, la separación y organización de archivos debe ser oirdenado</p>
<b>Indentación</b>
<p>La indentación es dependiendo de los estandares del equipo de desarrollo, pero lo importante es que se mire facil de leer</p>
<h2>CodeSmells - Acrónimo STUPID</h2>
<b>6 Code Smells que debemos de evitar</b>
<ul>
<li><b>S</b>ingleton: patrón singleton</li>
<li><b>T</b>ight Coupling: alto acoplamiento</li>
<li><b>U</b>ntestability: código no probable (unit test)</li>
<li><b>P</b>remature optimization: optimizaciones prematuras</li>
<li><b>I</b>ndescriptive naming: nombres pocos descriptivos</li>
<li><b>D</b>uplication: duplicidad de códico, no aplicar el principio DRY</li>
</ul>

<h3>Untestability: Código no probable</h3>
<p>Código que es dificilmente testeable</p>
<ul>
<li>Códgo con alto acoplamiento</li>
<li>Códgo con muchas dependencias no inyectadas</li>
<li>Dependencias en el contexto global (Tyipo Singleton)</li>
<b>Debemos de tener el mente las pruebas desde la creación del código</b>
</ul>

<h3>Optimizaciones prematuras</h3>
<p>Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a lo que es más importante en una aplicación</p>
<strong>Nos permitira  tomar o tener ciertas información adiccional a las necesidades del proyecto</strong>
<p>No debemos anticiparnos a los requisitos y desarrollar adstracciones innecesarias que puedan añadir complejidad accidental</p>
<strong>Complejidad accidental</strong>
<p>Cuando implementamos una solución compleja a la mínima indispensable.</p>
<strong>Complejidad esencial</strong>
<p>La complejidad es inherente al problema.</p>

<h3>Indescriptive naming: Nombres pocos descriptivos</h3>


<dl>
<dt><b>Nombre de variables mas nombradas</b></dt>
<dd>Mál nombradas y cuando hace referencia a que el nombre es pocos descriptivo o muy generico</dd>
<dt><b>Nombre de clases genéricas</b></dt>
<dd>Cuando se le pone una nombre a una clase, poco descriptiva o muy generico, dando al paso de las clase puede hacer más de una acción de la misma</dd>
<dt><b>Nombre de funciones mal nombradas</b></dt>
<dd>Cuando se le pone nombre a una función, poco descriptivo o mombre muy largos</dd>
<dt><b>Ser muy especifico o demasiado genérico</b></dt>
<dd>a la hora de asignar un nombre a una función, clase o variable</dd>
</dl>

<h3>Duplication: Duplicidad de código, no aplicar el principio DRY</h3>
<p>Hay dos tipos de duplicidad de codigo</p>

<strong>Real</strong>
<ul>
<li>Código es idéntico y cumple la misma función</li>
<li>Un cambio implicaría actualizar todo el código idéntico en varios lugares</li>
<li>Incrementa las posibilidades de un error humano al olvidar una parte para actualizar</li>
<li>Mayor cantidad de pruebas innecesarias</li>
</ul>

<strong>Accidental</strong>
<ul>
<li>Código luce similar pero cumple funciones distintas.</li>
<li>Cuando hay un cambio, sólo hay que modificar un sólo lugar.</li>
<li>Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones.</li>
</ul>

<h2>Otros "code smells"</h2>
<b>Que merecen tener su mención especial</b>

<h3>Inflacción</h3>
<p>Cuando un metodo tiene inflacción es por que tiene demasiadas lineas o hace demasiadas cosas, por lo tanto es mejor cortarlo o dividirlo en submetodos y que cada metodo haga una tareas específica y la haga bien</p>

<strong>Large class</strong>
<p>Sí la clase es demasiada larga, es por que hace demasiadas cosas, entonces lo mejor es cortar o dividir por modulos que hagan un tarea y la haga bien.</p>

<strong>Obsesión primitiva</strong>
<p>El uso de primitivos en lugar de objectos para tareas simples, como manejar datos de maneda, rangos, cadenas especiales para números de teléfono, por ejemplo, el uso de constantes para codificar información, sí tenemos una constante que se llame <b>userAdminRole = 1,  o el uso de constantes de tipo string, como nombres de campos para el uso de matrices de datos</b></p>
<p>Las razones por las cuales esto es considerado un problema,  la obsesión primitiva nacen en momentos de debilidad <b>"Solo un campo para almacenar algunos datos"</b></p>
<p>al final por estar agregando datos primitivos, la clase o módulo se hizo muy grande, enorme y difícil de manejar, difícil de depurar y difícil de comprender</p>
<p>Cuando se vea esto, piensen en esa opsesión primitiva, eventualmente siempre se cae en eso, el tratamiento, si tienes una gran cantidad de variables de campos primitivos, puede posiblemente agruparlos de manera lógica, algunos de ellos en su propia clase o el su propio objecto, o aún mejor mueva el comportamiento asociado de estos a una nueva clase, nuevo metodo, una nueva función o un módulo, y nos permita en un futuro tener una reutilización de los mismo</p>

<strong>Lista larga de parametrós</strong>
<p>Más de tres o cuatro argumentos en un metodo,  las lista larga de parametros, tambien puede ser un subproducto de esfuerzos para tratar de hacer que un método haga o se junte para resolver otras necesidades a futuro </p>
<p>El tratamiento para esto sería, comprobar que los valores que se le pasan a los parametros, si todos en primera instancia son necesarios, son requeridos, o si se pueden eliminar algunos de ellos </p>
<p>En lugar se pasar un grupo de datos recibidos de otro objeto como parámetros, pase el objeto mismo al método.</p>

<strong>Acopladores</strong>
<p>Todos los olores de este grupo contribuyen al acoplamiento excesivo entre clases o muestra lo que sucede si el acoplamiento se reemplaza por una delegación excesiva</p>

<strong>feature envy</strong>
<p>¿Cuáles son los sintomas de este problema o de este olor?</p>
<p>Un método accede a los datos de otro objeto más que a sus propios datos.</p>
<p>¿cúal es el síntoma cuando estamos en alguna Clase, algún método o módulo, clase o función, y ese modulo, clase o función está llamando a más información que se encuentra en otro lugar que a su misma Clase, Módulo o función </p>
<strong>¿Cuáles son las razones por las cuales esto es un problema?</strong>
<p>Este olor puede ocurrir despupes que los campos se mueven a una o otra clase o se hace una refactorización, y puede que la refactorización no fue "exitosa" o digamos que todavía no ah terminado porque significaría que ese método posiblemente no pertenezca a ese lugar</p>
<p>Sí este fuera el caso es posible que tambien desee mover las operaciones sobre los datos de esta clase, ese módulo, o esa función.</p>
<strong>¿Cuál sería su tratamiento?</strong>
<p>Como regla basica, si las cosas cambian al mismo tiempo debes de mantenerlas en el mismo lugar, por lo general los datos y funciones que usan estos datos se cambiam juntos, aunque puede ser para ciertas excepciones.</p>
<strong>Explicación de otro manera</strong>
<p>Cuando algún método, valor, función o módulo hace mucha referencia a una función método de otro módulo, entonces eso nosotros tenemos que considerarlo, como que tal vez esa refactorización no fue muy buena y esa función, debería colocarse en otro lugar, pero esto es algo muy sibjectivo porque puede ser necesario, pero esto se ve con la practica, donde se cuenta de los mimos.</p>

<strong>Intimidad inapropiada</strong>
<p>¿Cuáles son los signos y síntomas de que estamos en esta intimidad inapropiada?</p>
<p>Cuando una clase usa campos y metodos internos de otra clase.</p>
<p>Hay que estar atento a que las clases que pasan demasiado tiermpo juntas, significa que realmente ahí hay algún tipo de inconveniente, las buenas clases debe de saber lo menos posible de otras clases, tales <b>Clases</b> son más fáciles de mantener y de reutilizar</p>
<i>¿Qué ganaríamos si nosotros hacemos este tipo de refactorización?</i>
<ul>
<li>Mejora la organización de código</li>
<li>Simplifica el soporte, la reutilización del codigo</li>
</ul>

<strong>Cadenas de mensajes</strong>
<p>El sintoma de este mal olor de codigo es cuando tenemos una función, módulo o metodo <b>A</b> que llama a <b>B</b> que llama a <b>C</b> y que llama a <b>D</b>, eso es el símbolo de que estamos cayendo en este olor </p>
<i>Razones por las cuales esto es un problema</i>
<p>Una cadena de mensajes ocurre cuando un cliente, solicita a otro objeto, ese objeto lo solicita a otro más y así sucesidamente, estás cadenas significan que el cliete depende de la navegación a alo largo de la estructura de clases o de funciones o módulos, cualquier cambio en estas relaciones requiere modificarse nuevamente o añadir un nuevo paso o remover un paso, pero como ya tenemos el puente hecho, entonces remover no sería tan complicado, pero cuando agregamos nuevas piezas en ese canal de comunicación, se van a dar cuenta que ahí es donde esta ese olor</p>

<strong>¿Cual sería la solución?</strong>
<p>La forma para solventarlo es ver si nosotros podemos eliminar esa comunicación de <b>A</b> si <b>A</b> quiere llamar a <b>D</b> , entonces tengamos algún de comunicación entre <b>A</b> directamente a <b>D</b> y así evitar la comunicación de padre a hijo de hijo a nieto, nieto-bisnieto, para llegar a la información al tataranieto.</p>
<p><i>Que ganamos con eso?</i> pues se reduce la cantidad de dependencias entre las clases o módulos, y también se reduce la cantidad de código</p>

<strong>The Middle Man</strong>
<p><i>¿Cuáles son los síntomas de que estamos cayendo en este olor?</i> 
Sí una clase realiza solo una acción y esa acción es delegar el trabajo a otra clase, si eo es el caso, entonces. ¿por qué existe esa clase?
</p>
<em>Razones por las cuales esto es un problema?</em>
<p>Este olor puede ser el resultado de la eliminación excesiva de cadenas de mensajes, hay veces que esto queda como resultado de una rezactorización del punto anterior.</p>
<p>Las clases tiene que tratar de evitar ese punto intermedio, en teoría, esto es un subproblema de la cadena de mensajes</p>

<h1>Principios SOLID</h1>
<p>Los principios de <b>SOLID</b> nos indican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componenentes deben estar interconectados.</p>

<ul>
<li><b>S</b>ingle Responsibility: Responsabilidad única</li>
<dd><b>"Nunca debería haber más de un motivo por el cual cambiar una clase o un módulo"</b></dd>
<dd>"Tener una única responsabilidad" <b>!==</b> "hacer una única cosa"</dd>
<li><b>O</b>pen and <b>C</b>lose: Abierto y cerrado</li>
<li><b>L</b>iskov Substitution: Sustitución de Liskov</li>
<li><b>I</b>nterface segregation: Segregación de interfaz</li>
<li><b>D</b>ependency inversion: Inversión de dependencias</li>
</ul>
<em>Tener en cuenta que son principios, más <b>NO</b> son reglas</em>

<h4>Como detectar violaciones del principio de responsabilidad única</h4>

<ul>
<li>Nombres de clases y módulos demasiados genéricos.</li>
<li>Cambios en el código suele afectar la clase o módulo.</li>
<li>La clase involucra múltiples capas.</li>
<li>Número elevado de importaciones.</li>
<li>Cantidad elevada de métodos públicos.</li>
<li>Excesivo número de líneas de código.</li>
</ul>

<h4>Principio de Open and Close (Abierto y Cerrado)</h4>
<p>Es un principio que depende mucho del contexto.</p>
<p>Este principio estable que las entidades de software (clases, módulos, métodos, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación.</p>
<em>La forma más sencilla de demostrar este principio es considerar un método que hace una cosa.</em>

<div>
<p>Escribir en archivo hola.txt</p>
<strong>Nuevos requisitos =>>>>></strong>
<p>Escribir en archivo adios.txt</p>
</div>
<p>EL principio abierto-cerrado también se puede lograr de muchas otras maneras, incluso mediante el uso de la herencia o mediante patrones de diseño de composición como el patrón de estrategia.</p>

<h3>Detectar violaciones del principio OPC</h3>

<ul>
<li>Cuando los cambios normalmente afectan nuestra clase o módulo.</li>
<li>Cuando una clase o módulo  afecta muchas capas. (Presentación, almacenamiento, etc.)</li>
</ul>

<h4>Liskov Substitution: Sustitución de Liskov</h4>
<p><em>"Las funciones que utilicen punteros o referencias a clases deben ser capaces de usar objetos de clases de derivadas sin saberlo - <b>Robert C. Martin</b>"</em></p>
<p><em>Siendo <b>U</b> un subtipo de <b>T</b>, cualquier instancia de <b>T</b> debería poder ser sustituida por cualquier instancia de <b>U</b> sin alterar las propiedades del sistema</em></p>

<h4>Principio de Interface segregation: Segregación de interfaz.</h4>
<p><em>"Los clientes no deberían estar oblicados a depender de interfaces que no utilicen" <b>- Robert C. Martin</b></em></p>
<strong>Como detectar violaciones de el principio de segregación de interfaz: segregation interfaz (ISP)</strong>
<ul>
<li>Si las interfaces que diseñamos nos obligan a violar los principios de responsabilidad única y substitución de Liskov.</li>
</ul>

<h4>Principio de inversión de dependencias (dependency inversion)</h4>
<p><em>"Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones. Las abstracciones no deben depender de concreciones. Los detalles deben depender de abstracciones <b>- Robert C. Martin</b>"</em></p>

<ul>
<li>Los módulos de alto nivel no deberían depender de módulos de bajo nivel.</li>
<li>Ambos deberían depender de abstracciones.</li>
<li>Las abstracciones no deberían depender de detalles.</li>
<li>Los detalles deberían depender de abstracciones.</li>
</ul>
<p>Los componentes más importantes son aquellos centrados en resolver el problema subyacente al negocio, es decir la capa de dominio.</p>
<p>Los menos importantes son los que están próximos a la infraestructura, es decir aquellos relacionados con la <b>UI, la persistencia, la comunicación con API externas, etc.</b></p>

<strong>Depender de adstracciones</strong>
<p>Uno de los motivos más importantes por el cual las reglas de negocio o capa de dominio deben depender de estas y no de concreciones es que aumenta su tolerancia al cambio.</p>
<strong>¿Por qué obtenemos este beneficio?</strong>
<p>Cada cambio en un componente abstracto implica un cambio en su implementación.</p>
<p>Por el contrario, los cambios en implementaciones concretas, la mayoría de las veces, no requieren cambios en las interfaces que implementa.</p>
<h5>Inyección de dependencias</h5>
<p>Dependencia en programación, significa que un módulo o componente requiere de otro para poder realizar su trabajo.</p>
<p>En algún momento nuestro programa o aplicación llegará a estar formado por muchos módulos, Cuando esto pase, es cuando debemos usar inyección de dependencias.</p>

`

