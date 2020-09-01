window.customElements.define('app-movie', class Movie extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const image = this.getAttribute('image');
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const link = this.getAttribute('link')

        let div_movie = document.createElement('div');
        div_movie.innerHTML = `
        <div class="card mr-2" style="width: 18rem;">
        <img class="card-img-top" src="${image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <a href="${link}" class="btn btn-primary">Ver en Tienda</a>
        </div>
      </div>
        `
        this.appendChild(div_movie);
    }
})

let selectItem = name => {
    $('#selected').text(name)
}

