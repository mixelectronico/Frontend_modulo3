const togglerChat = document.getElementById('toggleChat')

$(function(){
    $('#chatList').hide()
});

togglerChat.addEventListener('click', function(){
    $('#chatList').slideToggle();
});