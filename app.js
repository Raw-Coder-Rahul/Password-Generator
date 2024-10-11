const passwordBox = document.getElementById("password");
const passwordBox2 = document.getElementById("password2");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_-=+{}[]?><"; // Changed 'symbol' to 'symbols'

const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    passwordBox.value = password;
}

// Function to create password using user details
function createPasswordm() {
    const name = document.getElementById("name").value.replace(/\s+/g, '') || "";
    const email = document.getElementById("email").value.replace(/\s+/g, '') || "";
    const phone = document.getElementById("output").value.replace(/\s+/g, '') || ""; 
    const date = document.getElementById("date").value.replace(/\s+/g, '') || "";

    const allChars = (phone + email + name + symbols + date).replace(/\s+/g, '');
    let password2 = "";

    if (name) password2 += name[Math.floor(Math.random() * name.length)];
    if (email) password2 += email[Math.floor(Math.random() * email.length)];
    if (phone) password2 += phone[Math.floor(Math.random() * phone.length)];
    if (date) password2 += date[Math.floor(Math.random() * date.length)];

    password2 += symbols[Math.floor(Math.random() * symbols.length)];

    while (password2.length < length) {
        password2 += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox2.value = password2; // Ensure this matches the input ID
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}

function copyPassword2() {
    passwordBox2.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}
