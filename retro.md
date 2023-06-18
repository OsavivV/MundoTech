Retrospectiva del 1° Sprint: Introducción y wireframing

En esta etapa, empeze a maquetar en mi mente como queria que luciera mi proyecto, imaginando un home super llamativo lleno de caruseles que hicieran la visita del cliente mas comoda segun sus necesidades, tambien imagine como los estilos la paleta de colores y con esto en mente procedi a realizar los respectivos wireframes y bocetos para tener una ruta mas clara al momento de empezar a codear asi como tambien la base de referencia de paginas en las cuales tome ideas que posteriormente ire aplicando durante el desarrollo.


Retrospectiva del 2° Sprint: Aplicacion Node + Express + HTML + CSS

En esta etapa, como ya tenia una paleta de colores predefinida en mi mente, inicie maquetando la estructura del de la aplicacion Node +express , luego se desarrollo las diferentes vistas siendo la primera el ( Home ) de forma un poco mas dinamica, como ya tenia conocimientos previos de Ejs, me fui directo  utilizando esta maravillosa herramienta para avanazar un poco mas ordenada y dinamicamente , defini archivos parciales, y luego requiriendolos donde era necesario, al finalizar cuando ya tuve la estructura ejs con los referectivos archivos ejs , que a su vez contenian toda la informacion de cajas, rutas, secciones, articulos, menus, parrafos, titulos, y por supuestos los estilos visuales de cada uno de ellos en distintos archivos Css, logre definir un par de sliders, animaciones y transiciones que hacian ver visualmente interactivo mi producto, por supuesto sin descuidar que siempre apuntara a que fuece mobile frist  o dise;o responsive. considero que una oportunidad de mejora para mi en esta etapa es el hecho de ser tan perfeccionista con los detalles visuales, pude haber ahorrado mucho mas tiempo y no bloquearme tanto en cosas que se que en el futuro con el uso de otras herramientas, se pudo haber resuelto mejor.



Retrospectiva del 3° Sprint: Template Engines

En esta etapa, como se menciono anteriormente, practicamente este spring ya habia completado solo, en su medida porque adelante bastante al momento de estructurar el proyecto con el uso de ejs. pero no quiere decir que se quedo solo alli, en este parte del proceso me hize la interrogante? que podriamos hacer para reducir codigo y que se vea un poco mas reducido , adicionalmente tambien otras de estas preguntas fue que sabia que debia imprimir mediante ejs las etiquetas para poder hacer unas par de validaciones y asi fue , con el uso de los template engines pude resolver estas incognitas y mi proyecto se acercaba cada vez mas a lo deseado. 



Retrospectiva del 4° Sprint:  JSON + Métodos HTTP

En esta etapa, se definio una carpeta llamada data en la cual fue almacenado los registros de usuarios, y los productos con sus categorias,  tambien mediante uno de los modulos que nos ofrece express llamado multer se empezo a almacenar imagenes de forma local , pero se empezaron a hacer pruebas de almacenamiento alterno de informacion en una base de datos de pruebas para ir abriendo camino al futuro uso de las bases de datos, Ademas tambien se aplico integracion de metodos de Crud para compartir , y traer informacion desde Json y la Db con las vistas del proyecto.


Retrospectiva del 5° Sprint:  Middlewares y autenticación 

en esta etapa , se definieron los form de regisro y login con los campos requeridos , se encrytpo las contraselas mediante el uso de la libreria bcrypt, tambien se definieron ciertos middleware de aplicacion , para que al momento que nuestros usuarios se logearan como usuario, administrador o invitado cada uno fuece re dirigido a un sitio en especial. tambien de bloqueo el acceso desde las rutas a posibles usuarios que no se logearan.  para evitar procesos de inconvenientes de suplantacion de indentidad con la funcionalidad de auth. ademas con ciertas etiquetas de ejs pudimos definiir porcionesy fragmentos de rutas visibles dependiendo de casa rol de usuario.

Retrospectiva del 6° Sprint:  Bases de datos

En esta etapa, tuvimos que hacer una pausa y mirar hacia atras y hacer una retrospectiva general de como hemos venido trabajando, sacando los puntos fuertes valencias y puntos de meejora , y asi como antes de iniciar el primer spring en este spring tuvimos que hacer algo similar. visualizar el futuro y  las posibilidades que las bases de datos nos ofrecian y asi fue. empezamos a diagramar un boceto de nuestra propia base de datos, definiendo tablas columnas y imaginando como las mismas podrian ser usadas dentro de nuestro proyecto, los resultados obtenidos fueron muy favorables, y ya al tener la misma lista el siguiente paso fue empezar a implementarlas en nuestro proyecto. mediante el uso de sequelize y sequelize cli. tuvimos acceso a herramientas de gran ayuda como lo son las migraciones, modelos, seeders y sus respectivas asociaciones, que nos hicieron el proceso muy ameno y agradable. la transicion fue sencilla y no apburta y ya estabamos listos para empezar a hacer algunos cambios que se necesitaron para eliminar mucha informacion basura que ahora podriamos tener mejor alojada en los hostings . 



Retrospectiva del 7° Sprint:  Validaciones (Back + Front)

Para esta etapa, Nosotros ya habiamos dejado un plus desde el spring N`3 , es decir ya habiamos imprimido un par de validaciones mediante etiquetas de ejs que nos hicieron un poco mas comodo trabajar esta parte, aunque esto no significa que fue sencillo, al contrario, represento un reto grande para nuestro desarrollo, porque como nuestra vista de login y register es dinamica y comparten la pantalla , al momento de hacer las validaciones el codigo se rompia , no funcionaba no reconocia bien los estilos, ni las clases , pero finalmente de la mano del equipo docente pudimos resolver estos problemas y se pudo completar, funcionando perfectamente , ahora cada formulario reconoce mediante express validator y js cuando hay algun problema y no deja logearse ni registrarse si algun campo no cumple con los requirimientos previamente establecidos.
