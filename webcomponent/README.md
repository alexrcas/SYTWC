# Web Component

## Objetivo: crear una web insertando elementos como web components.

Para la realización de esta práctica se ha creado un sitio web siguiendo el diseño dado. Nótese que la cabecera y el pie de página no poseen funcionalidad
ya que el objetivo central de esta práctica es el web component.
A diferencia de la web realizada en Jekyll, ahora cada tarjeta es un web component reutilizable. Para ello se han seguido los siguientes pasos:

![](https://i.ibb.co/872p50X/image.png)

En el código Javascript que sigue, se crea el webcomponent con su correspondiente HTML incrustado. Esto lo que consigue es que se inyecte el HTML descrito al
escribir la etiqueta de HTML correspondiente.
La función `connectedCallback` se llama una vez se ha instanciado el componente. Esta función es similar al `ComponentDidMount` de React o Vue, por ejemplo,
ya que en general todos los frameworks modernos basados en el uso de componentes funcionan de manera muy similar.

Con la notación utilizada, pasando la clase Guitar como parámetro, nos ahorramos una línea de Javascript más adelante registrando el componente, ya que
aquí lo estamos haciendo todo de una sola vez.

```
window.customElements.define('app-guitar', class Guitar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const image = this.getAttribute('image');
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const link = this.getAttribute('link')

        let div_guitar = document.createElement('div');
        div_guitar.innerHTML = `
        <div class="card mr-2" style="width: 18rem;">
        <img class="card-img-top" src="${image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <a href="${link}" class="btn btn-primary">Ver en Tienda</a>
        </div>
      </div>
        `
        this.appendChild(div_guitar);
    }
})

let selectItem = name => {
    $('#selected').text(name)
}
```

Hecho esto, tan solo nos queda instanciar el componente en HTML utilizando nuestras etiquetas personalizadas.

```
        <app-guitar title="Gibson Les Paul"
        description="Descripción de prueba"
        link="https://www.gibson.com/Guitars/Les-Paul"
        image="https://www.ardemadrid.com/3916-thickbox_default/gibson-les-paul-custom-shop-cs9-standard-vos-stb.jpg"
        onclick="selectItem('Gibson Les Paul')">
        </app-guitar>
```

## Conclusión
Los componentes son muy interesantes porque permiten crear código reutilizable, muy poco acoplado y robusto. Prueba de ello es que en la actualidad
todos los frameworks de front-end de éxito están orientados a componentes. La programación web arrancó desde muchos frentes al mismo tiempo y siempre
se ha caracterizado por no ser demasiado estructurada o no existir un estándar, pero poco a poco, sobre todo en los últimos años, se está avanzando
hacia una programación robusta, tipada y estructurada que recuerda a los inicios, y los componentes son una parte fundamental.
