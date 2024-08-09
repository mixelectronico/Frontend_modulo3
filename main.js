const togglerChat    = document.getElementById('toggleChat')
const showerBeth     = document.getElementById('showerBeth')
const showerCarlos   = document.getElementById('showerCarlos')
const showerIsaiah   = document.getElementById('showerIsaiah')
const showerJeanette = document.getElementById('showerJeanette')
const showerMaureen  = document.getElementById('showerMoureen')

$(function(){
    $('#chatList').hide()
    $('#chatBeth').hide()
    $('#chatCarlos').hide()
    $('#chatInput').hide()
});

togglerChat.addEventListener('click', function(){
    $('#chatList').slideToggle();
});

showerBeth.addEventListener('click', function(){
    $('#chatList').slideUp();
    $('#chatBeth').slideDown();
    $('#chatCarlos').slideUp();
    $('#chatIsaiah').slideUp();
    $('#chatJeanette').slideUp();
    $('#chatMaureen').slideUp();
    $('#chatInput').show();
});

showerCarlos.addEventListener('click', function(){
    $('#chatList').slideUp();
    $('#chatCarlos').slideDown();
    $('#chatBeth').slideUp();
    $('#chatIsaiah').slideUp();
    $('#chatJeanette').slideUp();
    $('#chatMaureen').slideUp();
    $('#chatInput').show();
});

showerIsaiah.addEventListener('click', function(){
    $('#chatList').slideUp();
    $('#chatBeth').slideUp();
    $('#chatCarlos').slideUp();
    $('#chatIsaiah').slideDown();
    $('#chatJeanette').slideUp();
    $('#chatMaureen').slideUp();
    $('#chatInput').show();
});

showerJeanette.addEventListener('click', function(){
    $('#chatList').slideUp();
    $('#chatBeth').slideUp();
    $('#chatCarlos').slideUp();
    $('#chatIsaiah').slideUp();
    $('#chatJeanette').slideDown();
    $('#chatMaureen').slideUp();
    $('#chatInput').show();
});

showerMaureen.addEventListener('click', function(){
    $('#chatList').slideUp();
    $('#chatBeth').slideUp();
    $('#chatCarlos').slideUp();
    $('#chatIsaiah').slideUp();
    $('#chatJeanette').slideUp();
    $('#chatMaureen').slideDown();
    $('#chatInput').show();
});