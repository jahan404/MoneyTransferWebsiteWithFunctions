function getInputFieldValueById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

function getTextFieldValueById(id){
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;
}


function removeHiddenClassFromID(id){
    //adding hidden to every section
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');

    
    //removing hidden class
     document.getElementById(id).classList.remove('hidden');
}