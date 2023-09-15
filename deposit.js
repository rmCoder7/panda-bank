// active deposite button by adding eventlistener

document.getElementById('btn-deposit').addEventListener('click' , function(){
    // console.log("addd to clcik")


    // add input of deposite
    const depomoney = document.getElementById('user-deposit');
    const depoOut = depomoney.value;
    // console.log(depoOut)


    // step 3 get deposite total $00 add function

    const depositeTexts = document.getElementById('depo-txt');
    const textValue = depositeTexts.innerText;
    depositeTexts.innerText = depoOut;

})
