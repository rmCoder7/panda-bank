// active deposite button by adding eventlistener

document.getElementById('btn-deposit').addEventListener('click' , function(){
    // console.log("addd to clcik")


    // add input of deposite
    const depomoney = document.getElementById('user-deposit');
    const depoOuted = depomoney.value;
    // console.log(depoOut)
    const finallyresultOut = parseFloat(depoOuted);

    // step 3 get deposite total $00 add function

    const depositeTexts = document.getElementById('depo-txt');
    const textValue = depositeTexts.innerText;
    const finallyOutput = parseFloat(textValue);
    // console.log(textValue) 

    // step-4 add numbers to set the total balance
    const finallResultget = finallyOutput+finallyresultOut;
    
    depositeTexts.innerText = finallResultget; 


    //   step 4 

    const takeBalance = document.getElementById('btn-balance');
    const balanceValue = takeBalance.innerText;
    const previousbalancetoString = parseFloat(balanceValue);

    const currentBalanceTotal = previousbalancetoString+finallyresultOut;
    takeBalance.innerText = currentBalanceTotal;   









})
