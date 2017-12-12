// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one()
  two()
  three() 
  makeVisible() 
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  var one = document.getElementById('one')
  one.classList.add('blue')
}

function two () {
  var two = document.getElementById('two')
  two.classList.add('green')
}

function three () {
  var three = document.getElementById('three')
  three.classList.add('new')
}



function makeVisible () {
  var makeVisible = document.getElementsByClassName[0]
  makevisible.classList.add('visible')
}

// if (elements && elements.length >= 1) {
 // elements[0].classList.toggle('visible');

 // var hiddenDiv = document.getElementsByClassName('invisible');
 // hiddenDiv[0].classList.add('visible');
//}//
