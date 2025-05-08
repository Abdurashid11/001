let pepsi = document.getElementById('#pepsi01');

function subscribe() {
    Toastify({  
        text: "Спасиба за подписку!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: 'center', 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right,rgb(0, 102, 255),rgb(0, 38, 255))", 
            borderRadius: "10px", 
        },
        onClick: function(){}
    }).showToast();
};
  
  function toggleTheme() {
    document.body.style.color = "red";
    document.body.style.transition = 'all 1s';
  }

  function len() {
    document.body.style.color = "blue";
    document.body.style.transition = 'all 1s';
  }

  var typed = new Typed('#pepsi01', {
    strings: ['Освежись с Pepsi'],
    typeSpeed: 70,
    backSpeed: 70,           
    backDelay: 1000,         
    loop: true,             
    loopCount: Infinity,     
    showCursor: true,        
    cursorChar: '|',        
    autoInsertCss: true,     
    smartBackspace: true,   
    shuffle: false,        
    fadeOut: false,        
    fadeOutClass: 'typed-fade-out', 
    fadeOutDelay: 100,       
    attr: null,              
  });

  

  Toastify({
    text: "цвет текста изменен на красный",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "left",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} 
  }).showToast();

  Toastify({
    text: "цвет текста изменен на синий",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "left",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} 
  }).showToast();

