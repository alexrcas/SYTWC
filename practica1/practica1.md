# Práctica 1: preparando el entorno de desarrollo
**Alexis Rodríguez Casañas**

## Tabla de contenidos
1. [Preparando de entorno](#id1)
2. [Creando y desplegando el proyecto](#id2)
## 1. Preparando el entorno<a name="id1"></a>
Conectamos a la máquina del IaaS por SSH  para trabajar con más comodidad.
<a href="http://i.imgur.com/i8olS9U.png">
  <img src="http://imgur.com/i8olS9Ul.png" />
</a>

Instalamos npm, el gestor de paquetes del entorno NodeJS.

`sudo apt install -y npm`

Ahora, podemos instalar Yeoman mediante npm. Yeoman es un generador de proyectos que evita que perdamos tiempo en crear directorios y ficheros de configuración cada vez que comencemos un nuevo proyecto.

`sudo npm install -g yo`

Ahora necesitamos un generador. Los generadores son utilizados para crear proyectos con Yeoman. Por ejemplo, un generador de React nos generará toda la estructura y configuración necesaria para arrancar un proyecto con dicha tecnología. En nuestro caso, instalaremos *generator-webapp*.

`sudo npm install -g generator-webapp`

## 2. Creando y desplegando el proyecto<a name="id2"></a>
Ya estamos listos para crear un directorio y arrancar un nuevo proyecto con Yeoman.
```
mkdir Miproyecto && cd Miproyecto
yo webapp
```
Un sencillo asistente en consola nos ofrecerá algunas opciones de configuración para el proyecto.
<a href="http://i.imgur.com/TpV1ddT.png">
  <img src="http://imgur.com/TpV1ddTl.png" />
</a>

Al completarlo, Yeoman creará toda la estructura del proyecto y el contenido básico de los ficheros de configuración por nosotros.

Hay que recordar que estamos en la máquina del IaaS, pero en mi caso, utilizo para programar VSCode y su extensión SSH FS, que permite trabajar en directorios remotos a través de SSH de forma transparente como si se estuviese en local. Véase a la izquierda todo el directorio y los ficheros creado por Yeoman.
<a href="http://i.imgur.com/7kBdTrF.png">
  <img src="http://imgur.com/7kBdTrFl.png" />
</a>

Como el servidor se encuentra en la máquina del Iaas, la cual por motivos de seguridad está tras un firewall que únicamente tiene abierto el puerto 80, entre otros pocos, en mi caso ha sido necesario modificar la línea del fichero *gulpfile.js* para que el puerto por defecto sea el 80 en lugar del 9000.

`const  port  =  argv.port  ||  80;`

Una vez hecho esto, ahora sí podemos lanzar nuestro servidor.

`npm start`

<a href="http://i.imgur.com/4LSiiDa.png">
  <img src="http://imgur.com/4LSiiDal.png" />
</a>

Introduciendo en el navegador de cualquier ordenador remoto, la IP pública de nuestra máquina del IaaS, podemos ver el resultado.

<a href="http://i.imgur.com/huTdnAg.png">
  <img src="http://imgur.com/huTdnAgl.png" />
</a>

Obśervese que cada vez que realizamos un cambio en el código fuente y guardamos, el navegador se actualiza automáticamente sin que sea necesario refrescar de forma manual.
