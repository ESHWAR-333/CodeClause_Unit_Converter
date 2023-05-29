let fromId = document.getElementById("fromId");
let toId = document.getElementById("toId");
toId.placeholder = "Result";
fromId.placeholder = "Type here..."


let selectId1 = document.getElementById("selectId1");
let selectId2 = document.getElementById("selectId2");
let convertBtn = document.getElementById("convertBtnId");

let lengthBtn = document.getElementById("lengthBtn");
let tempBtn = document.getElementById("tempBtn");
let areaBtn = document.getElementById("areaBtn");
let volumeBtn = document.getElementById("volumeBtn");
let WeightBtn = document.getElementById("weightBtn");
let timeBtn = document.getElementById("timeBtn");

function convertFunction() {
    let from = document.getElementById('selectId1');
    let fromUnit = from.value;
    let to = document.getElementById('selectId2');
    let toUnit = to.value;
    if ((fromUnit === "Meters" || fromUnit === 'Kilometers' || fromUnit === 'Centimeters' || fromUnit === 'Miles' || fromUnit === 'Feets' || fromUnit === 'Inches') && (toUnit === "Meters" || toUnit === 'Kilometers' || toUnit === 'Centimeters' || toUnit === 'Miles' || toUnit === 'Feets' || toUnit === 'Inches')) {
        if (fromUnit === undefined) {
            toUnit = "Meters"
        }

        if (toUnit === undefined) {
            toUnit = "Meters"
        }
        let length = 0;
        length = document.getElementById("fromId").value;
        console.log(length)
        console.log(fromUnit, toUnit);
        switch (fromUnit) {
            case "Inches":
                switch (toUnit) {
                    case "Inches":
                        length = length * 1;
                        break
                    case "Centimeters":
                        length = length * 2.54;
                        break
                    case "Feets":
                        length = length / 12;
                        break
                    case "Meters":
                        length = length * 0.0254;
                        break
                    case "Miles":
                        length = length * 1.578283e-5;
                        break
                    case "Kilometers":
                        length = length * 2.54e-5;
                        break
                }
                break;
            case "Centimeters":
                switch (toUnit) {
                    case "Inches":
                        length = length / 2.54;
                        break
                    case "Centimeters":
                        length = length * 1;
                    case "Feets":
                        length = length / 30.48;
                        break
                    case "Meters":
                        length = length / 100;
                        break
                    case "Miles":
                        length = length * 6.213712e-6;
                        break
                    case "Kilometers":
                        length = length * 1e-5;
                        break
                }
                break;
            case "Feets":
                switch (toUnit) {
                    case "Inches":
                        length = length * 12;
                        break
                    case "Centimeters":
                        length = length * 30.48;
                        break
                    case "Feets":
                        length = length * 1;
                        break
                    case "Meters":
                        length = length * 0.3048;
                        break
                    case "Miles":
                        length = length * 1.893939e-4;
                        break
                    case "Kilometers":
                        length = length * 3.048e-4;
                        break
                }
                break;
            case "Meters":
                switch (toUnit) {
                    case "Inches":
                        length = length * 39.37008;
                        break
                    case "Centimeters":
                        length = length * 100;
                        break
                    case "Feets":
                        length = length * 3.28084;
                        break
                    case "Meters":
                        length = length * 1;
                        break
                    case "Miles":
                        length = length * 6.213712e-4;
                        break
                    case "Kilometers":
                        length = length * 0.001;
                        break
                }
                break;
            case "Miles":
                switch (toUnit) {
                    case "Inches":
                        length = length * 63360;
                        break
                    case "Centimeters":
                        length = length * 1.609344e+5;
                        break
                    case "Feets":
                        length = length * 5280;
                        break
                    case "Meters":
                        length = length * 1609.344;
                        break
                    case "Miles":
                        length = length * 1;
                        break
                    case "Kilometers":
                        length = length * 1.609344;
                        break
                }
                break;
            case "Kilometers":
                switch (toUnit) {
                    case "Inches":
                        length = length * 39370.08;
                        break
                    case "Centimeters":
                        length = length * 100000;
                        break
                    case "Feets":
                        length = length * 3280.84;
                        break
                    case "Meters":
                        length = length * 1000;
                        break
                    case "Miles":
                        length = length * 0.6213712;
                        break
                    case "Kilometers":
                        length = length * 1;
                        break
                }
                break;
        }
        console.log(length)

        let toId = document.getElementById("toId");
        toId.value = length;

    }


    if ((fromUnit === "Kelvin" || fromUnit === 'Celsius' || fromUnit === 'Fahrenheit' || fromUnit === 'Rankine') && (toUnit === "Kelvin" || toUnit === 'Celsius' || toUnit === 'Fahrenheit' || toUnit === 'Rankine')) {
        let from = document.getElementById('selectId1');
        let fromUnit = from.value;
        if (fromUnit === undefined) {
            toUnit = "Kelvin"
        }
        let to = document.getElementById('selectId2');
        let toUnit = to.value;
        if (toUnit === undefined) {
            toUnit = "Kelvin"
        }
        let temp = 0;
        temp = document.getElementById("fromId").value;
        console.log(length)
        console.log(fromUnit, toUnit);
        switch (fromUnit) {
            case "Kelvin":
                switch (toUnit) {
                    case "Kelvin":
                        temp = temp;
                        break
                    case "Celsius":
                        temp = temp - 272.15
                        break
                    case "Fahrenheit":
                        temp = temp - 457.87;
                        break
                    case "Rankine":
                        temp = temp * 1.8
                        break
                }
                break;
            case "Celsius":
                switch (toUnit) {
                    case "Kelvin":
                        temp = temp + 274.15;
                        break
                    case "Celsius":
                        temp = temp;
                        break
                    case "Fahrenheit":
                        temp = temp + 33.8;
                        break
                    case "Rankine":
                        temp = temp + 493.47
                        break
                }
                break;
            case "Fahrenheit":
                switch (toUnit) {
                    case "Kelvin":
                        temp = temp + 255.9278;
                        break
                    case "Celsius":
                        temp = temp - 17.22222;
                        break
                    case "Fahrenheit":
                        temp = temp;
                        break
                    case "Rankine":
                        temp = temp + 460.67
                        break
                }
                break;
            case "Rankine":
                switch (toUnit) {
                    case "Kelvin":
                        temp = temp * 0.5555556
                        break
                    case "Celsius":
                        temp = temp - 272.5944;
                        break
                    case "Fahrenheit":
                        temp = temp - 458.67;
                        break
                    case "Rankine":
                        temp = temp;
                        break
                }
                break;
        }
        console.log(temp)
        let toId = document.getElementById("toId");
        toId.value = temp;

    }


    if ((fromUnit === 'Square Meter' || fromUnit === 'Square Inch' || fromUnit === 'Square Feet' || fromUnit === 'Square Yard' || fromUnit === 'Square Mile') && (toUnit === 'Square Meter' || toUnit === 'Square Inch' || toUnit === 'Square Feet' || toUnit === 'Square Yard' || toUnit === 'Square Mile')) {
        let from = document.getElementById('selectId1');
        let fromUnit = from.value;
        if (fromUnit === undefined) {
            toUnit = 'Square Meter'
        }
        let to = document.getElementById('selectId2');
        let toUnit = to.value;
        if (toUnit === undefined) {
            toUnit = 'Square Meter'
        }
        let area = 0;
        area = document.getElementById("fromId").value;
        console.log(area)
        console.log(fromUnit, toUnit);
        switch (fromUnit) {
            case "Square Meter":
                switch (toUnit) {
                    case "Square Meter":
                        area = area;
                        break
                    case "Square Inch":
                        area = area * 1550.003
                        break
                    case "Square Feet":
                        area = area * 10.76391;
                        break
                    case "Square Yard":
                        area = area * 1.19599
                        break
                    case "Square Mile":
                        area = area * 3.861022e-7
                        break
                }
                break;
            case "Square Inch":
                switch (toUnit) {
                    case "Square Meter":
                        area = area * 6.4516e-4;
                        break
                    case "Square Inch":
                        area = area;
                        break
                    case "Square Feet":
                        area = area * 0.006944444;
                        break
                    case "Square Yard":
                        area = area * 7.716049e-4
                        break
                    case "Square Mile":
                        area = area * 2.490977e-10
                        break
                }
                break;
            case "Square Feet":
                switch (toUnit) {
                    case "Square Meter":
                        area = area * 0.09290304;
                        break
                    case "Square Inch":
                        area = area * 144
                        break
                    case "Square Feet":
                        area = area;
                        break
                    case "Square Yard":
                        area = area * 0.1111111
                        break
                    case "Square Mile":
                        area = area * 3.587006e-8
                        break
                }
                break;
            case "Square Yard":
                switch (toUnit) {
                    case "Square Meter":
                        area = area * 0.8361274;
                        break
                    case "Square Inch":
                        area = area * 1296
                        break
                    case "Square Feet":
                        area = area * 9;
                        break
                    case "Square Yard":
                        area = area
                        break
                    case "Square Mile":
                        area = area * 3.228306e-7
                        break
                }
                break;
            case "Square Mile":
                switch (toUnit) {
                    case "Square Meter":
                        area = area * 2.589988e+6;
                        break
                    case "Square Inch":
                        area = area * 4.01449e+9
                        break
                    case "Square Feet":
                        area = area * 27878400;
                        break
                    case "Square Yard":
                        area = area * 3097600
                        break
                    case "Square Mile":
                        area = area
                        break
                }
                break;
        }
        console.log(area)
        let toId = document.getElementById("toId");
        toId.value = area;

    }


    if ((fromUnit === 'Liter' || fromUnit === 'Cubic Meter' || fromUnit === 'Milliliter' || fromUnit === 'Cubic Kilometer' || fromUnit === 'Cubic Centimeter' || fromUnit === 'Cubic Millimeter') && (toUnit === 'Liter' || toUnit === 'Cubic Meter' || toUnit === 'Milliliter' || toUnit === 'Cubic Kilometer' || toUnit === 'Cubic Centimeter' || toUnit === 'Cubic Millimeter')) {
        let from = document.getElementById('selectId1');
        let fromUnit = from.value;
        if (fromUnit === undefined) {
            toUnit = 'Liter'
        }
        let to = document.getElementById('selectId2');
        let toUnit = to.value;
        if (toUnit === undefined) {
            toUnit = 'Liter'
        }
        let volume = 0;
        volume = document.getElementById("fromId").value;
        console.log(volume)
        console.log(fromUnit, toUnit);
        switch (fromUnit) {
            case "Liter":
                switch (toUnit) {
                    case "Liter":
                        volume = volume;
                        break
                    case "Cubic Meter":
                        volume = volume * 0.001
                        break
                    case "Milliliter":
                        volume = volume * 1000;
                        break
                    case "Cubic Kilometer":
                        volume = volume * 1.E-12
                        break
                    case "Cubic Centimeter":
                        volume = volume * 1000
                        break
                    case "Cubic Millimeter":
                        volume = volume * 1000000
                        break
                }
                break;
            case "Cubic Meter":
                switch (toUnit) {
                    case "Liter":
                        volume = volume * 1000;
                        break
                    case "Cubic Meter":
                        volume = volume;
                        break
                    case "Milliliter":
                        volume = volume * 1000000;
                        break
                    case "Cubic Kilometer":
                        volume = volume * 1.E-9
                        break
                    case "Cubic Centimeter":
                        volume = volume * 1000000
                        break
                    case "Cubic Millimeter":
                        volume = volume * 1000000000
                        break
                }
                break;
            case "Milliliter":
                switch (toUnit) {
                    case "Liter":
                        volume = volume * 0.001;
                        break
                    case "Cubic Meter":
                        volume = volume * 0.000001
                        break
                    case "Milliliter":
                        volume = volume * 1;
                        break
                    case "Cubic Kilometer":
                        volume = volume * 9.999999999E-16
                        break
                    case "Cubic Centimeter":
                        volume = volume * 1;
                        break
                    case "Cubic Millimeter":
                        volume = volume * 1000
                        break
                }
                break;
            case "Cubic Kilometer":
                switch (toUnit) {
                    case "Liter":
                        volume = volume * 1000000000000;
                        break
                    case "Cubic Meter":
                        volume = volume * 1000000000;
                        break
                    case "Milliliter":
                        volume = volume * 1000000000000000;
                        break
                    case "Cubic Kilometer":
                        volume = volume * 1;
                        break
                    case "Cubic Centimeter":
                        volume = volume * 1000000000000000;
                        break
                    case "Cubic Millimeter":
                        volume = volume * 1000000000000000000;
                        break
                }
                break;
            case "Cubic Centimeter":
                switch (toUnit) {
                    case "Liter":
                        volume = volume * 0.001;
                        break
                    case "Cubic Meter":
                        volume = volume * 0.000001;
                        break
                    case "Milliliter":
                        volume = volume * 1000;
                        break
                    case "Cubic Kilometer":
                        volume = volume * 9.999999999E-16;
                        break
                    case "Cubic Centimeter":
                        volume = volume * 1;
                        break
                    case "Cubic Millimeter":
                        volume = volume * 1000;
                        break
                }
                break;
            case "Cubic Millimeter":
                switch (toUnit) {
                    case "Liter":
                        volume = volume * 0.000001;
                        break
                    case "Cubic Meter":
                        volume = volume * 1.E-9
                        break
                    case "Milliliter":
                        volume = volume * 0.001;
                        break
                    case "Cubic Kilometer":
                        volume = volume * 1.E-18
                        break
                    case "Cubic Centimeter":
                        volume = volume * 0.001
                        break
                    case "Cubic Millimeter":
                        volume = volume * 1
                        break
                }
                break;
        }
        console.log(volume)
        let toId = document.getElementById("toId");
        toId.value = volume;

    }


    if ((fromUnit === 'Kilometer' || fromUnit === 'Gram' || fromUnit === 'Milligram') && (toUnit === 'Kilometer' || toUnit === 'Gram' || toUnit === 'Milligram')) {
        let from = document.getElementById('selectId1');
        let fromUnit = from.value;
        if (fromUnit === undefined) {
            toUnit = 'Kilometer'
        }
        let to = document.getElementById('selectId2');
        let toUnit = to.value;
        if (toUnit === undefined) {
            toUnit = 'Kilometer'
        }
        let weight = 0;
        weight = document.getElementById("fromId").value;
        console.log(weight)
        console.log(fromUnit, toUnit);
        switch (fromUnit) {
            case 'Kilometer':
                switch (toUnit) {
                    case 'Kilometer':
                        weight = weight;
                        break
                    case 'Gram':
                        weight = weight * 1000
                        break
                    case 'Milligram':
                        weight = weight * 1000000;
                        break
                }
                break;
            case 'Gram':
                switch (toUnit) {
                    case 'Kilometer':
                        weight = weight * 0.001;
                        break
                    case 'Gram':
                        weight = weight
                        break
                    case 'Milligram':
                        weight = weight * 1000;
                        break
                }
                break;
            case 'Milligram':
                switch (toUnit) {
                    case 'Kilometer':
                        weight = weight * 0.000001;
                        break
                    case 'Gram':
                        weight = weight * 0.001
                        break
                    case 'Milligram':
                        weight = weight * 1;
                        break
                }
                break;
        }
        console.log(weight)
        let toId = document.getElementById("toId");
        toId.value = weight;

    }

    if ((fromUnit === 'Seconds' || fromUnit === 'Milliseconds' || fromUnit === 'Microseconds' || fromUnit === 'Nanoseconds') && (toUnit === 'Seconds' || toUnit === 'Milliseconds' || toUnit === 'Microseconds' || toUnit === 'Nanoseconds')) {
        let from = document.getElementById('selectId1');
        let fromUnit = from.value;
        if (fromUnit === undefined) {
            toUnit = 'Seconds'
        }
        let to = document.getElementById('selectId2');
        let toUnit = to.value;
        if (toUnit === undefined) {
            toUnit = 'Seconds'
        }
        let time = 0;
        time = document.getElementById("fromId").value;
        console.log(time)
        console.log(fromUnit, toUnit);
        switch (fromUnit) {
            case 'Seconds':
                switch (toUnit) {
                    case 'Seconds':
                        time = time * 1;
                        break
                    case 'Milliseconds':
                        time = time * 1000
                        break
                    case 'Microseconds':
                        time = time * 1000000
                        break
                    case 'Nanoseconds':
                        time = time * 1000000000
                        break
                }
                break;
            case 'Milliseconds':
                switch (toUnit) {
                    case 'Seconds':
                        time = time * 0.001;
                        break
                    case 'Milliseconds':
                        time = time * 1
                        break
                    case 'Microseconds':
                        time = time * 1000
                        break
                    case 'Nanoseconds':
                        time = time * 1000000
                        break
                }
                break;
            case 'Microseconds':
                switch (toUnit) {
                    case 'Seconds':
                        time = time * 0.000001;
                        break
                    case 'Milliseconds':
                        time = time * 0.001
                        break
                    case 'Microseconds':
                        time = time * 1
                        break
                    case 'Nanoseconds':
                        time = time * 1000
                        break
                }
                break;
            case 'Nanoseconds':
                switch (toUnit) {
                    case 'Seconds':
                        time = time * 1.E-9;
                        break
                    case 'Milliseconds':
                        time = time * 0.000001
                        break
                    case 'Microseconds':
                        time = time * 0.001
                        break
                    case 'Nanoseconds':
                        time = time * 1
                        break
                }
                break;
        }
        console.log(time)
        let toId = document.getElementById("toId");
        toId.value = time;

    }

}

convertBtn.addEventListener('click', convertFunction);


lengthBtn.addEventListener('click', lengthFunction);

function lengthFunction() {
    selectId1.innerHTML = "";
    selectId2.innerHTML = "";
    lengthBtn.style.backgroundColor = "#FFBF00"
    tempBtn.style.backgroundColor = "gray"
    areaBtn.style.backgroundColor = "gray"
    volumeBtn.style.backgroundColor = "gray"
    WeightBtn.style.backgroundColor = "gray"
    timeBtn.style.backgroundColor = "gray"
    fromId.placeholder = "Enter Length"
    let lengthList = ['Meters', 'Kilometers', 'Centimeters', 'Miles', 'Feets', 'Inches']
    lengthList.map(each => {
        let option = document.createElement("option");
        option.text = each;
        selectId1.value = each;
        selectId1.appendChild(option)
        let option2 = document.createElement("option");
        option2.text = each;
        selectId2.appendChild(option2)
    })
}

// let tempBtn = document.getElementById("tempBtn");
tempBtn.addEventListener('click', function () {
    selectId1.innerHTML = "";
    selectId2.innerHTML = "";
    lengthBtn.style.backgroundColor = "gray"
    tempBtn.style.backgroundColor = "#FFBF00"
    areaBtn.style.backgroundColor = "gray"
    volumeBtn.style.backgroundColor = "gray"
    WeightBtn.style.backgroundColor = "gray"
    timeBtn.style.backgroundColor = "gray"
    fromId.placeholder = "Enter temperature"
    let tempList = ['Kelvin', 'Celsius', 'Fahrenheit', 'Rankine']
    tempList.map(each => {
        let option = document.createElement("option");
        option.text = each;
        selectId1.value = each;
        selectId1.appendChild(option)
        let option2 = document.createElement("option");
        option2.text = each;
        selectId2.appendChild(option2)
    })
});

// let areaBtn = document.getElementById("areaBtn");
areaBtn.addEventListener('click', function () {
    selectId1.innerHTML = "";
    selectId2.innerHTML = "";
    lengthBtn.style.backgroundColor = "gray"
    tempBtn.style.backgroundColor = "gray"
    areaBtn.style.backgroundColor = "#FFBF00"
    volumeBtn.style.backgroundColor = "gray"
    WeightBtn.style.backgroundColor = "gray"
    timeBtn.style.backgroundColor = "gray"
    fromId.placeholder = "Enter Area"
    let areaList = ['Square Meter', 'Square Inch', 'Square Feet', 'Square Yard', 'Square Mile']
    areaList.map(each => {
        let option = document.createElement("option");
        option.text = each;
        selectId1.value = each;
        selectId1.appendChild(option)
        let option2 = document.createElement("option");
        option2.text = each;
        selectId2.appendChild(option2)
    })
})

// let volumeBtn = document.getElementById("volumeBtn");
volumeBtn.addEventListener('click', function () {
    selectId1.innerHTML = "";
    selectId2.innerHTML = "";
    lengthBtn.style.backgroundColor = "gray"
    tempBtn.style.backgroundColor = "gray"
    areaBtn.style.backgroundColor = "gray"
    volumeBtn.style.backgroundColor = "#FFBF00"
    WeightBtn.style.backgroundColor = "gray"
    timeBtn.style.backgroundColor = "gray"
    fromId.placeholder = "Enter Volume"
    let volumeList = ['Liter', 'Milliliter', 'Cubic Meter', 'Cubic Kilometer', 'Cubic Centimeter', 'Cubic Millimeter']
    volumeList.map(each => {
        let option = document.createElement("option");
        option.text = each;
        selectId1.value = each;
        selectId1.appendChild(option)
        let option2 = document.createElement("option");
        option2.text = each;
        selectId2.appendChild(option2)
    })
})

// let WeightBtn = document.getElementById("weightBtn");
WeightBtn.addEventListener('click', function () {
    selectId1.innerHTML = "";
    selectId2.innerHTML = "";
    lengthBtn.style.backgroundColor = "gray"
    tempBtn.style.backgroundColor = "gray"
    areaBtn.style.backgroundColor = "gray"
    volumeBtn.style.backgroundColor = "gray"
    WeightBtn.style.backgroundColor = "#FFBF00"
    timeBtn.style.backgroundColor = "gray"
    fromId.placeholder = "Enter Weight"
    let WeightList = ['Kilometer', 'Gram', 'Milligram']
    WeightList.map(each => {
        let option = document.createElement("option");
        option.text = each;
        selectId1.value = each;
        selectId1.appendChild(option)
        let option2 = document.createElement("option");
        option2.text = each;
        selectId2.appendChild(option2)
    })
})

// let timeBtn = document.getElementById("timeBtn");
timeBtn.addEventListener('click', function () {
    selectId1.innerHTML = "";
    selectId2.innerHTML = "";
    lengthBtn.style.backgroundColor = "gray"
    tempBtn.style.backgroundColor = "gray"
    areaBtn.style.backgroundColor = "gray"
    volumeBtn.style.backgroundColor = "gray"
    WeightBtn.style.backgroundColor = "gray"
    timeBtn.style.backgroundColor = "#FFBF00"
    fromId.placeholder = "Enter Time"
    let timeList = ['Seconds', 'Milliseconds', 'Microseconds', 'Nanoseconds']
    timeList.map(each => {
        let option = document.createElement("option");
        option.text = each;
        selectId1.value = each;
        selectId1.appendChild(option)
        let option2 = document.createElement("option");
        option2.text = each;
        selectId2.appendChild(option2)
    })
})

convertBtn.addEventListener('click', convertFunction);


let restBtnId = document.getElementById("restBtnId");

restBtnId.addEventListener('click', () => {
    fromId.value = "";
    toId.value = "";
})

lengthFunction()