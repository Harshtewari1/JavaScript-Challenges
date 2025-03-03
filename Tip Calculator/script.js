function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(billAmount) || billAmount <= 0) {
        document.getElementById("result").innerText = "please enter a valid amount!"
        return;
    }

    const tipAmount = (billAmount * tipPercentage).toFixed(2);
    const totalAmount = (billAmount * parseFloat(tipAmount)).toFixed(2);

    document.getElementById("result").innerText = `Tip : $${tipAmount} | Total : $${totalAmount}`
}