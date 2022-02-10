document.body.style.backgroundColor = 'lightblue';
document.getElementById('button').addEventListener('click',function(){
    const inputAmount = document.getElementById('input-amount');
    const inputAmountValue = inputAmount.value;

    // deposit
    const depositAmount = document.getElementById('deposit-amount');
    // depositAmount.innerText = inputAmountValue.value
  
    const depositValue = depositAmount.innerText;
    const resultValue = parseFloat(inputAmountValue) + parseFloat(depositValue);
    depositAmount.innerText = resultValue;

    // now balance time 
    const balanced = document.getElementById('balanced');
    const balancedvalue = balanced.innerText;
    const balancedresult = parseFloat(balancedvalue) + parseFloat(inputAmountValue)
    balanced.innerText = balancedresult;
    if(balancedvalue > 0){
        alert('Money Receved')
    }
    // ita clear er 
    inputAmount.value = '';
  
});



document.getElementById('button-withdraw').addEventListener('click',function(){
    const buttonWithdraw = document.getElementById('input-withdraw');
    const withdrInputawValue = buttonWithdraw.value;
    const withdrawBox = document.getElementById('withdraw-box');
    const withdrawText = withdrawBox.innerText;
    const totalWIthdraw = parseFloat(withdrInputawValue) + parseFloat(withdrawText);
    withdrawBox.innerText = totalWIthdraw;
    // balenced
    const balancedWithdraw = document.getElementById('balanced');
    const balancedvalue = balancedWithdraw.innerText;
 const balancedresults = parseFloat(balancedvalue) - parseFloat(withdrInputawValue)
 balancedWithdraw.innerText = balancedresults;
 if(balancedvalue == 0){
     alert('Warning: Your Money Is Finish')
 }
 else{
     alert("Your withdraw Sucseesfull")
 }
    buttonWithdraw.value = '';
})