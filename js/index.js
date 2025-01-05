//step -1 add event handler
//step-2 prevent default behavior(reloading)
//step-3 get specific element by id

document.getElementById('login-button').addEventListener('click', function(event){
   event.preventDefault();

   const phoneNumber =document.getElementById('phone-number').value;
   const pin =document.getElementById('pin-number').value
   //    console.log(phoneNumber,pin)

   if( phoneNumber==='01820033756' && pin==='111' ){
      
       window.location.href = './homePage.html'   //this is important . 
   }
})