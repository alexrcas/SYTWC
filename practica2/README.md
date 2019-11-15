# Práctica 2 - Sass

Esta práctica consiste en la creación de una landing page con Sass para aprender sus ventajas y familiarizarse con su uso.
Se ha creado una maqueta responsiva de muestra que cumpla los puntos adjuntados en el guión de la práctica.

<a href="http://i.imgur.com/9TZEgUG.png">
  <img src="http://imgur.com/9TZEgUGl.png" />
</a>

A continuación se comentan los aspectos más importantes del código Sass.
- Modularizar el código usando parciales.

  <a href="http://i.imgur.com/beWvT5f.png">
    <img src="http://imgur.com/beWvT5fl.png" />
  </a>
  
  Modularizar el código es muy sencillo con Sass. Únicamente debemos recordar incluir los parciales.
  
- Usar mixins para los encabezados, h1
- Usar el mismo estilo en dos encabezados pero con un cambio en el color del texto
  El código para resolver estos dos puntos se entiende mucho mejor si se explican al mismo tiempo.
  Lo primero es crear un mixin para aplicar al encabezado, pero más adelante nos piden que el color de otro encabezado
  sea diferente, respetando todo el estilo anterior. En CSS tradicional, podría aplicarse el color y sobreescribirlo
  en el elemento concreto deseado, pero una solución más elegante es extraer dicho color como una variable para poder
  utilizar el color que deseemos
  ```
  @mixin header($size, $color)
  font-family: $font-family
  font-size: $size
  color: $color;
  ```
  
  ```
  h1
  @include header(60px, white)
  ```

- Usar un mixin para centrar el contenido
  El mixin para centrar el contenido utiliza flex y recibe como parámetro si se desea organizar el contenido en filas
  o columnas, ya que es una opción que varía con mucha frecuencia según el contenedor y por eso es interesante
  parametrizarla. Este mixin es muy útil y aquí se deja ver la eficiencia de Sass. Si en algún momento creamos
  un elemento y deseamos centrarlo, basta con incorporarle este mixin y el problema estará solucionado.
  ```
  @mixin center($direction)
  display: flex
  justify-content: center
  align-items: center
  flex-direction: $direction
  ```

- Usar un mixin para los estilos del form
  Para los estilos del form se han utilizado dos mixins, uno para el fomulario y otro que define una animación que
  resaltará los elementos cuando se haga hover sobre ellos. Estos mixin se aplican utilizando la anidación en
  cumplimiento con el siguiente punto
  ```
  @mixin form-style
    width: 80%
    color: white
    background: #495C70;
    padding: 30px 30px 15px 30px;
    font-size: 16px

  @mixin form-element
    animation: color-fade linear 0.5s forwards

  ```

- Usar la anidación para aplicar estilos a botones y elementos del form cuando se aplique *hover* o *focus* sobre ellos
  Como se explicó en el punto anterior, se utiliza la anidación para aplicar los estilos. Este formato resulta
  mucho más cómodo, limpio y legible que el de CSS tradicional.
  ```
    .form-style-4
    input[type=text]:hover
      @include form-element

  .form-style-4
    input[type=submit]:hover
      @include form-element
  ```

- Utilizar algún componente de *materialize* pero sin incluir todos los estilos. Reutilizar solo algún componente



## Automatizando las tareas con Gulp

