document.getElementById('btn-deposit').addEventListener('click', function(){
    const deposittField = document.getElementById('deposit-field');
    const newDepositAmountString = deposittField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount);
    deposittField.value = '';

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const newDepostitTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = newDepostitTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousbalanceTotalString = balanceTotalElement.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceTotalString);


    const newBalnceTotal = previousbalanceTotal + newDepostitTotal;
    balanceTotalElement.innerText = newBalnceTotal;

})