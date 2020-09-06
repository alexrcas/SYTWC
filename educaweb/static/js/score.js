$('#w-label').hide()
$('#save-score-btn').on('click', () => {
    let data = {'score': parseInt($('#score').html())}
    console.log(data)
    $.ajax({
        url: '/save',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: res => {
            $('#save-score-btn').attr('disabled', true)
            $('#w-label').show()
        }
    })
})