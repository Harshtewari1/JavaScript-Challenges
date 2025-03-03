function convertTemperature(){
    const temp = parseFloat(document.getElementById('tempInp').value);
    const conversionType = document.getElementById('convertiontype').value;
    let result = "";


    if (isNaN(temp)) {
        result = 'please enter a valid number !';
    }
    else {
        if (conversionType === "celsius") {
            result = `${temp}°C = ${(temp * 9 / 5 + 32).toFixed(2)}°F`;
        }
        else if (conversionType === 'fahrenheit') {
            result = `${temp}°F = ${((temp - 32) * 5 / 9).toFixed(2)}°C`;
        }
        else if (conversionType = "kelvin") {
            result = `${temp}°C = ${(temp + 273.15).toFixed(2)}K`;
        }
    }

    document.getElementById("result").innerText = result;

}