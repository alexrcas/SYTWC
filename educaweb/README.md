# Shapy!
* Alexis Rodríguez Casañas

El objetivo de este proyecto es crear una aplicación web educativa utilizando Three.JS

### Descripción del proyecto
El juego consiste en un enunciado aleatorio que indica al usuario sobre qué figuras debe hacer click antes de que
se termine el tiempo a través de 5 niveles. El tiempo disponible y el número de figuras dependen del nivel elegido
antes de comenzar la partida

![](https://i.ibb.co/h9p5S4T/image.png)

Al final del nivel el usuario puede ver partidas anteriores tanto suyas como de cualquier persona.

![](https://i.ibb.co/sqQ7Vys/image.png)

### Lógica de funcionamiento
El algoritmo para aleatorizar los enunciados se basa en repartir los adjetivos y las funciones que se asocian con los mismos en vectores. Es decir,
podemos tener algo como lo siguiente (de manera simplificada).
Nótese que en Javascript podemos almacenar en variables y vectores no solo datos sino también funciones. Esto permite, utilizando el mismo índice
para una función y la palabra que la representa, construir los enunciados de forma totalmente aleatoria.
```
['rojo', 'azul', 'verde']
['esfera', 'cubo', 'cilindro']
[constructorEsfera, constructorCubo, constructorCilindro]
['se mueve', 'encoge', 'está quieto']
[funcionMover, funcionEncoger, funcionQuieto]
```

### Login
Para la persistencia de datos se utiliza una base de datos en la nube (Atlas), por lo que no hay que preocuparse de este módulo
para probar el proyecto. Los datos para la pantalla de login son:
* Usuario: alex
* Password: 1234

### Instrucciones de instalación
El proyecto está realizado en *Python 3.6.9*. Las dependencias se encuentran en el fichero *requirements.txt*
La forma más sencilla de ejecutar sin alterar el sistema es utilizando virtualenv:
```
virtualenv -p /path/to/python3.6.9 semantic
cd semantic
. bin/activate
pip install -r requeriments.txt
python app.py
```
Con lo anterior, ya tenemos el servidor corriendo y podemos acceder a la URL *localhost:5000*

### Tecnologías utilizadas

### Base de datos
* MongoDB (Atlas)

#### Back-end
* Python (Flask) - Un ligero microframework extensible para aplicaciones web
* Jinja2 - Es el motor de plantillas utilizado por Flask

#### Front-end
* Three.JS
* JQuery
* Bootstrap

