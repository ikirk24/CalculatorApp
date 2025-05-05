const inputScreen = document.getElementById('calcScreen');
const screenText = document.getElementById('screenText');

const delNums = () => {
    // const nums = screenText.textContent;
    // console.log(screenText)
    // const newNums = nums.substring(0, nums.length - 1);
    // screenText.textContent = newNums;
    // console.log(newNums);
    alert('no');
}

const appendToDisplay = (input) => {
    inputScreen.value += input;
}

const clearDisplay = () => {
    inputScreen.value = "";
}

const calculate = () => {
    try {
        inputScreen.value = eval(inputScreen.value)
    }
    catch (error) {
        inputScreen.value = "Error";
    }
 }

 const negPos = () => {
    inputScreen.value * -1;
 }