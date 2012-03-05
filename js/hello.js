var body = document.getElementsByTagName('body').item(0);
var span = document.createElement('span');
span.setAttribute('id', 'hellocontainer');
span.appendChild(document.createTextNode('hello, world.'));
body.appendChild(span);
