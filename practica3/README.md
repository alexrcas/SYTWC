# Práctica 3 - Ejercicios Jekyll

## 1. Desplegando Jekyll
### 1.1. Ejecutando Jekyll
Lo primero que debemos hacer es clonar el repositorio con el proyecto de ejemplo Jekyll.
`git clone https://github.com/jekyll/example`
Deberíamos tener instalado Jekyll. Si no es el caso, procedemos a instalarlo.
`sudo apt install -y jekyll`
Ahora, nos situamos en el repositorio y lanzamos el proyecto con el comando `jekyll serve`
**Nota:** Al ejecutar `jekyll serve` se lanzará el servidor web con la dirección *localhost* en el puerto 4000. El firewall del IaaS no permite el acceso a este puerto, por lo que si queremos desplegar el servidor desde ahí, debemos añadir en el fichero de configuración del proyecto *_config.yml* el parámetro `port: 80`.
Hay que tener en cuenta que después de hacer esto necesitaremos ejecutar `sudo jekyll serve`, ya que los puertos por debajo del 1024 necesitan permisos de superusuario para ser utilizados.
<a href="http://i.imgur.com/1DcBbhm.png">
  <img src="http://imgur.com/1DcBbhml.png" />
</a>

### 1.2. Añadiendo dos páginas y un post.
#### Añadiendo las páginas.
Añadir una nueva página en Jekyll es muy sencillo. Para tener nuestro contenido más organizado vamos a crear un directorio llamado *content* que es donde se alojarán nuestras páginas.
A continuación lo único que debemos hacer es crear una nueva página en formato markdown y añadirle la cabecera como la de la imagen, donde se especifica el layout, el título que aparecerá en la página y el permalink, que debe coincidir con el nombre del fichero ya que es el link al mismo. A continuación, podemos introducir el contenido que queramos.
<a href="http://i.imgur.com/L3aPV87.png">
  <img src="http://imgur.com/L3aPV87l.png" />
</a>

Siguiendo esta metodología podemos añadir las páginas que queramos.
<a href="http://i.imgur.com/VF6lQZc.png">
  <img src="http://imgur.com/VF6lQZcl.png" />
</a>

#### Añadiendo un post.
Añadir un post no es más complicado que el paso anterior. Tan solo debemos crear un fichero en el directorio *_posts* y nombrarlo con la fecha del post seguido de su título.
A continuación debemos añadirle una cabecera como la de la imagen. Véase que ahora, obviamente su layout será el de post. También tenemos el título con el que se mostrará el post en la página, la fecha y la categoría.
<a href="http://i.imgur.com/KnxSUgt.png">
  <img src="http://imgur.com/KnxSUgtl.png" />
</a>

<a href="http://i.imgur.com/Nas7m8K.png">
  <img src="http://imgur.com/Nas7m8Kl.png" />
</a>


## 2. Ejercicios
### 2.1.
<a href="http://i.imgur.com/n5mwiSz.png">
  <img src="http://imgur.com/n5mwiSzl.png" />
</a>

Itera sobre los episodios, que son fragmentos de código y los ordena por un atributo peso.
Cada iteración genera un div con el código html en su interior.

### 2.2.
<a href="http://i.imgur.com/xnRiTYJ.png">
  <img src="http://imgur.com/xnRiTYJl.png" />
</a>

Muestra el título del sitio junto con la cadena - Ejemplo Jekyll en la barra del navegador.
Carga el nav.html y a continuación añade el contenido del layout que tiene el mismo nombre que la página donde está escrito dicho content.

### 2.3.
<a href="http://i.imgur.com/HHd1tU4.png">
  <img src="http://imgur.com/HHd1tU4l.png" />
</a>

En este caso se muestra un párrafo y se obtiene la fecha. Esta fecha pasa por un filtro que se encarga de quedarse solamente con el año. A continuación se muestra el autor del sitio, que si no está definido aparecerá en blanco. Por tanto la salida sería algo como lo siguiente:
© Copyright 2019

### 2.4.
<a href="http://i.imgur.com/aQNOmzv.png">
  <img src="http://imgur.com/aQNOmzvl.png" />
</a>

En primer lugar se está importando Ajax desde un CDN.
Los dos siguientes scripts que se importan, se encuentran almacenados localmente.
En cuanto a los dos siguientes scripts, está refiriéndose a la carpeta del sitio, ya que está usando la url relativa, la cual está especificada en el fichero config.yaml como baseurl. Por tanto, el valor del filtro es /example/ y los scripts se hallarían en:

* */example/assets/js/main.js*
* */example/assets/js/highlight.js*


### 2.5.
<a href="http://i.imgur.com/x1crgJA.png">
  <img src="http://imgur.com/x1crgJAl.png" />
</a>

Itera sobre todas las páginas de la carpeta, de forma que crea una lista, donde cada elemento es un enlace a cada página y dicho enlace lleva por texto el título de cada página

### 2.6.
<a href="http://i.imgur.com/oxiyTCe.png">
  <img src="http://imgur.com/oxiyTCel.png" />
</a>

Se está creando una imagen que enlaza a la url que se encuentra en el atributo href= (en este caso no existe, quizá debido a un error)
