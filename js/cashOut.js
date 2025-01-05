// console.log("home added")

document.getElementById('cash-out-button').addEventListener('click',function(event){
    event.preventDefault()
   const Amount = getInputFieldValueById('cash-out-amount')

   const Pin = getInputFieldValueById('cash-out-pass')
   // console.log(typeof(Amount),typeof(Pin))

   //FOR NUMBER/INT DATATYPE WE MUST NOT USE ''/"" IN THE IF/ELSE CONDITION
   if(Pin === 111 ){
       // console.log(typeof(Amount),typeof(Pin))
       const availableAmount = getTextFieldValueById('available-balance')
       // console.log(availableAmount)
       const spentMoney = availableAmount-Amount

       
       document.getElementById('available-balance').innerText = spentMoney;
   }

   else{
    alert('Failed')
   }
})