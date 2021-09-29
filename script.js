window.addEventListener('scroll', function () {
    let header = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('nav-active', windowPosition);
    
})

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add('success');
      status.innerHTML = "Thanks! Your message is submitted";
    }
  
    function error() {
      status.classList.add('error');
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  

  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  
// this function is for navbar
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
 
// on click event in food ordering
function openbreakfast(){
  document.getElementById("defult-item").style.display="none";;
  document.getElementById("breakfast-item-1").style.display="block";
  document.getElementById("breakfast-item-2").style.display="block";
  document.getElementById("breakfast-item-3").style.display="block";
  document.getElementById("breakfast-item-4").style.display="block";
  document.getElementById("breakfast-item-5").style.display="block";
  document.getElementById("breakfast-item-6").style.display="block";
}
// for lunch
function openlunch(){
  document.getElementById("defult-item").style.display="none";
  document.getElementById("breakfast").style.display="none";
  document.getElementById("lunch-item-1").style.display="block";
  document.getElementById("lunch-item-2").style.display="block";
  document.getElementById("lunch-item-3").style.display="block";
  document.getElementById("lunch-item-4").style.display="block";
  document.getElementById("lunch-item-5").style.display="block";
  document.getElementById("lunch-item-6").style.display="block";
}
function opensnack(){
  document.getElementById("defult-item").style.display="none";
  document.getElementById("breakfast").style.display="none";
  document.getElementById("lunch").style.display="none";
  document.getElementById("snack-item-1").style.display="block";
  document.getElementById("snack-item-2").style.display="block";
  document.getElementById("snack-item-3").style.display="block";
  document.getElementById("snack-item-4").style.display="block";
  document.getElementById("snack-item-5").style.display="block";
  document.getElementById("snack-item-6").style.display="block";
  // .... 
}