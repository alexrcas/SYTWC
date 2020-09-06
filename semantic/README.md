# Web Semántica
* Alexis Rodríguez Casañas

El objetivo de esta práctica es aprender a utilizar la web semántica, consultar a través de su servicio y presentar los resultados de forma
correcta en un front-end.

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

#### Back-end
* Python (Flask) - Un ligero microframework extensible para aplicaciones web
* Jinja2 - Es el motor de plantillas utilizado por Flask

#### Front-end
* JQuery
* Bootstrap

### Conclusiones
He encontrado el proyecto muy interesante ya que desconocía la existencia de la web semántica y me ha sorprendido su potencial, ya que
por su paradigma es realmente sencillo obtener información que en la web normal sería realmente costoso y necesitaría herramientas de scrapping
o APIs específicas. De forma extremadamente simple y genérica es posible obtener enormes cantidades de información organizada y las posibilidades
son infinitas.

Respecto al desarrollo, para este proyecto he intentado aplicar todo lo aprendido en el máster en cuanto a tecnologías y buenas prácticas.
Tanto a nivel de back-end como de front-end, he utilizado librerías y frameworks que me permitiesen un desarrollo muy ágil, y
en el front me he propuesto como reto no escribir una sola línea de Javascript ni CSS y mantener el HTML muy pequeño, lo
cual ha sido posible gracias al uso de las plantillas, algo que desconocía antes de comenzar la asignatura.
