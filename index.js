const inputEl = document.getElementById('numIn');
const buttonEl = document.getElementById("conv-btn");
const outputEl = document.getElementById('output-sec')

let value = inputEl.value;

buttonEl.addEventListener('click', () => {
    value = parseInt(inputEl.value);
    convert(value)
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/*
Length(Metres | Feet)
Volume (Litres | Gallons)
Mass (Kilograms | Pounds)
 */

const sections = [
    {
    "Length (Metres | Feet)" : ["metres", "feet"],
    "Volume (Litres | Gallons)" : ["litres", "gallons"],
    "Mass (Kilograms | Pounds)" : ["kilograms", "pounds"],
    }
]

function convert(value) {
    // Length
    let feet = (value * 3.281).toFixed(2);
    let metres = (value / 3.281).toFixed(2);

    // Volume
    let gallons = (value * 0.264).toFixed(2);
    let litres = (value / 0.264).toFixed(2);

    // Mass
    let kilos = (value / 2.204).toFixed(2);
    let pounds = (value * 2.204).toFixed(2);



    outputs(value, feet, metres, gallons, litres, kilos, pounds);
}

function outputs(value, feet, metres, gallons, litres, kilos, pounds) {
    let content = '';
    const sectionKeys = Object.keys(sections[0]);

    for (let i = 0; i < sectionKeys.length; i++) {
        const sectionKey = sectionKeys[i];
        const [unit1, unit2] = sections[0][sectionKey];

        let conversionResult = '';
        let cardClass = '';

        // Determine which conversion to display and assign a card class
        if (sectionKey === "Length (Metres | Feet)") {
            conversionResult = `${value} ${unit1} = ${feet} ${unit2} | ${value} ${unit2} = ${metres} ${unit1}`;
            cardClass = 'length-card'; // Custom card class for length
        } else if (sectionKey === "Volume (Litres | Gallons)") {
            conversionResult = `${value} ${unit1} = ${gallons} ${unit2} | ${value} ${unit2} = ${litres} ${unit1}`;
            cardClass = 'volume-card'; // Custom card class for volume
        } else if (sectionKey === "Mass (Kilograms | Pounds)") {
            conversionResult = `${value} ${unit1} = ${pounds} ${unit2} | ${value} ${unit2} = ${kilos} ${unit1}`;
            cardClass = 'mass-card'; // Custom card class for mass
        }

        // Add individual card content
        content += `
            <div class="conversion-card ${cardClass}">
                <h3>${sectionKey}</h3>
                <p>${conversionResult}</p>
            </div>
        `;
    }

    outputEl.innerHTML = content;
}
