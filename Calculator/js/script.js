displayValue = num => {
  let numberElement = document.getElementById("screen");
  numberElement.value += num;
};

clearValue = () => {
  let numberElement = document.getElementById("screen");
  numberElement.value = "";
};

calculate = () => {
  let numberElement = document.getElementById("screen").value;

  let result = eval(numberElement);

  document.getElementById("screen").value = result;
};

getRoot = () => {
  let numberElement = document.getElementById("screen").value;
  let resultval = Math.sqrt(numberElement);

  document.getElementById("screen").value = resultval;
};

getValue = () => {
  let numberElement = document.getElementById("screen").value;
  let result = numberElement.slice(0, -1);
  document.getElementById("screen").value = result;
};

getMinusPlus=()=>{
  let numberElement = document.getElementById("screen");
  let result=numberElement.value += '-';
  document.getElementById("screen").value = result;
}

displaySquare=()=>{
  let numberElement = document.getElementById("screen").value;
  let result=Math.pow(numberElement,2);
  document.getElementById("screen").value = result;
}

disableInput=()=>{
  let desabled='false';
  (desabled==false)? (document.getElementById("screen").desabled=false) : (document.getElementById("screen").desabled=true);

}
