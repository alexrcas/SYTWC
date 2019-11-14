# Práctica 3 - Jekyll

## Índice de contenidos

## 1. Desplegando Jekyll
### Paso 1
bla bla bla
### Paso 2
bla bla bla

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
