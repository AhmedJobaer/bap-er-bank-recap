document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositFiled = document.getElementById('deposit-filed');
    const depositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(depositAmountString);

    depositFiled.value = '';

    const previousDepositElement = document.getElementById('deposit-total');
    const previousDepositElementString = previousDepositElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositElementString);

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    previousDepositElement.innerText = newDepositTotal;

    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceString = previousBalanceElement.innerText;
    const previousBlanceAmount = parseFloat(previousBalanceString);

    const newbalanceTotal = previousBlanceAmount + newDepositTotal;

    previousBalanceElement.innerText = newbalanceTotal;
})