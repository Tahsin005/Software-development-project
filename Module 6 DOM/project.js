function handleDeposit () {
    var convertedInputValue = getConvertedValue("deposit-input", "value");
    
    var convertedDepositAmount = getConvertedValue("deposit-amount", "innerText");

    // console.log(inputValue);
    // console.log(depositAmount);

    var sum = convertedInputValue + convertedDepositAmount;
    // console.log(sum);


    setInnerText("deposit-amount", sum)


    var convertedTotalAmount = getConvertedValue("total-amount", "innerText");

    var totalsum = convertedTotalAmount + convertedInputValue;


    setInnerText("total-amount", totalsum)





    document.getElementById("deposit-input").value = "";
}

function getConvertedValue (id, element) {
    if (element == "innerText") {
        var value = document.getElementById(id).innerText;
    } else {
        var value = document.getElementById(id).value;
    }
    return parseFloat(value);
}





function handleWithdraw () {
    var convertedInputValue = getConvertedValue("withdraw-input", "value");
    // console.log(typeof convertedInputValue);

    var convertedWithdrawAmount = getConvertedValue("withdraw-amount", "innerText");

    var convertedTotalAmount = getConvertedValue("total-amount", "innerText");
    // console.log(typeof convertedWithdrawAmount);
    if (convertedTotalAmount < convertedInputValue) {
        alert("Tui shala gorib... tr eto teka nai..");
        return;
    }
    var sum = convertedInputValue + convertedWithdrawAmount;



    setInnerText("withdraw-amount", sum);



    var totalsum = convertedTotalAmount - convertedInputValue;


    setInnerText("total-amount", totalsum)


    document.getElementById("withdraw-input").value = "";


}


function setInnerText (id, value) {
    document.getElementById(id).innerText = value;
}