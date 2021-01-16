
// function that converts numbers into hexadecimals //
// the function will return a String value
function convertToHex(num) {
    const hexLetters = ["a", "b", "c", "d", "e", "f"];
    const numerator = Math.floor(num / 16);
    let decimal = num / 16 - numerator;
    let hex = "";

    //get the characters of hexadecimals
    const hexChar = value => {
        if (value >= 10) {
            return hexLetters[value - 10];
        } else {
            return value;
        }
    }

    //get first character of the hexadecimal
    hex += hexChar(numerator)
    //get second character of the hexadecimal
    hex += hexChar(decimal *= 16)

    return hex;
}

// STARTING DISPLAY //
//display slider starting value
document.querySelectorAll(".slider").forEach((input, index) => {
    input.nextElementSibling.innerText = input.value;
    document.querySelector(".hex").children[index + 1].innerText = convertToHex(input.value)
})

// SET EVENT FOR SLIDER AND INSERTED VALUES //
const container = document.querySelector('.container');

container.addEventListener('input', function (event) {

    if (event.target.matches(".slider") || event.target.matches(".insert")) {

        //display slider value
        if (event.target.matches(".slider")) {
            const slider = event.target;
            //display slider value
            slider.nextElementSibling.innerText = slider.value;
            //let insert input display nothing
            slider.nextElementSibling.nextElementSibling.value = "";
        }

        //display inserted value and change slider value
        if (event.target.matches(".insert")) {
            const insert = event.target;
            const slider = insert.previousElementSibling.previousElementSibling;
            const display = insert.previousElementSibling;

            if (insert.value >= 0 && insert.value <= 255 && !isNaN(insert.valueAsNumber)) {
                //change slider value to inserted value
                slider.value = insert.value;
            } else {
                //if any out of range or invalid value, use slider's default value
                slider.value = slider.defaultValue;
            }
            //display inserted value
            display.innerText = slider.value;
        }

        let hex = "";
        let index = 1;
        //convert rgb to hex and display hex value
        for (let section of this.children) { //cannot use forEach() as this.children is html collection
            const sectionHex = this.lastElementChild.children;

            if (section.matches('.rgb')) {
                let num = section.children[1].value;
                //display hex value
                sectionHex[index].innerText = convertToHex(num);
                //store hex value 
                hex += convertToHex(num);
                //increase index 
                index += 1;
            }
        }
        //change body background color to the hex color
        this.parentElement.style.backgroundColor = `#${hex}`
    }
})




