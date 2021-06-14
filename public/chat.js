var socket = io.connect('http://localhost:4000/');
var ouput = document.getElementById('output')
var handle = document.getElementById('handle')
var message = document.getElementById('message')
var btn = document.getElementById('send')
var feedback = document.getElementById('feedback')


if(btn){
btn.addEventListener('click',(event)=>{
    console.log('hello')

    socket.emit('name',{handle:handle.value , message:message.value })
})}
socket.on('message',(data)=>{
    console.log('poda mwonu')
    document.getElementById('message').value = ''
    output.innerHTML += '<p><strong>'+data.name+'</strong>'+':'+'<strong>'+data.message+'</strong></p>'
})
message.addEventListener('input',()=>{
    
    socket.emit('typing',handle.value)
   
})
socket.on('typing',(data)=>{
    console.log(data.name)
    feedback.innerHTML = '<p><em> '+data+'  is typing .......</em></p>'
})

/*// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');

// Emit events
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
})

// Listen for events
socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});*/