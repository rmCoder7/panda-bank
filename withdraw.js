document.getElementById('btn-withdraw').addEventListener('click' , function(){

  const withDrawid = document.getElementById('user-withdraw');
  const withdrawOutput = withDrawid.value;
  const convertTostring = parseFloat(withdrawOutput);
//   console.log(convertTostring);


 const valueCalling = document.getElementById('value-withdraw');
 const valueToshow = valueCalling.innerText;
 const convertValurtostring = parseFloat(valueToshow);
//  console.log(convertValurtostring)

const cuurentWithdraw = convertTostring+convertValurtostring;
valueCalling.innerText = cuurentWithdraw;



const balancetotallagain = document.getElementById('btn-balance');
const balancetoatlOutout = balancetotallagain.innerText;
const convetStirng = parseFloat(balancetoatlOutout);

const newbalanceTotall = convetStirng-convertTostring
balancetotallagain.innerText = newbalanceTotall;



})