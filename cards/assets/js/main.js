$('.card-container').on('click', event => {
    let element = $(event.target).closest('.card-container').get(0)
    $('#m-title').text(element.dataset.title)
    $('#m-desc').text(element.dataset.description)
    $("#m-img").attr("src", element.dataset.link);
    $('#modal').modal().modal('open');
})

