function triBtn() {
    const base = getInput('inp-b');
    const height = getInput('inp-h');
    
    area = 0.5 * base * height;
    // const triValue = document.getElementById('tri-val');
    // triValue.innerText=area;
    setValue('tri-val', area)
}

function recBtn() {
    const weight = getInput('w')
    const length = getInput('l')

    area = weight * length;
    setValue('we', area)
}

function paraBtn(){
    const ba = getInput('ba');
    console.log(ba)
    const he = getInput('he');
    console.log(he)

    area = ba*he;

    setValue('ar',area);
}



// reusable function

function getInput(value) {
    const input = document.getElementById(value);
    const inputValueString = input.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;

}

function setValue(element, area) {
    const triVal = document.getElementById(element, area);
    triVal.innerText = area;
}

