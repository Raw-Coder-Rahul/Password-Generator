function country_code() {
    let val = document.getElementById("country").value;
    let output = document.getElementById("output");

    switch(val) {
        case 'us':
            output.value = "+1 ";
            break;
        case 'uk':
            output.value = "+44 ";
            break;
        case 'in':
            output.value = "+91 ";
            break;
        case 'au':
            output.value = "+61 ";
            break;
        case 'ca':
            output.value = "+1 ";
            break;
        case 'de':
            output.value = "+49 ";
            break;
        case 'fr':
            output.value = "+33 ";
            break;
        case 'jp':
            output.value = "+81 ";
            break;
        default:
            output.value = "";
    }
}