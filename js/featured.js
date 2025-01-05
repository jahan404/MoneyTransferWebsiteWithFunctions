document.getElementById('cash-out-feature-button').addEventListener('click',function(){

    document.getElementById('cash-out-form').classList.remove('hidden')

    document.getElementById('add-money-form').classList.add('hidden')
})

document.getElementById('add-money-feature-button').addEventListener('click',function(){

    document.getElementById('add-money-form').classList.remove('hidden')

    document.getElementById('cash-out-form').classList.add('hidden')
})