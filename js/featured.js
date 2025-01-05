// document.getElementById('cash-out-feature-button').addEventListener('click',function(){

//     document.getElementById('cash-out-form').classList.remove('hidden')

//     document.getElementById('add-money-form').classList.add('hidden')
// })

// document.getElementById('add-money-feature-button').addEventListener('click',function(){

//     document.getElementById('add-money-form').classList.remove('hidden')

//     document.getElementById('cash-out-form').classList.add('hidden')
// })


document.getElementById('add-money-feature-button').addEventListener('click',function(){
    removeHiddenClassFromID('add-money-form');
})

document.getElementById('cash-out-feature-button').addEventListener('click',function(){
    removeHiddenClassFromID('cash-out-form');
})

document.getElementById('transaction-feature-button').addEventListener('click',function(){
    removeHiddenClassFromID('transaction-history');
})