
    const passwordInput = document.getElementById("passwordInput");
    const copyBtn = document.getElementById("copy-btn");
    const tooltip = document.querySelector(".tooltip");
    const notificationBar = document.querySelector(".notification");

    const passwordLengthInput = document.getElementById("passwordLength");
        
    const checkboxLowercase = document.getElementById("includeLowercase");
    const checkboxUppercase = document.getElementById("includeUppercase");
    const checkboxNumbers = document.getElementById("includeNumbers");
    const checkboxSymbols = document.getElementById("includeSymbols");

function generatePassword(){

    const passwordLength = Number(passwordLengthInput.value);

    const includesLowercase = checkboxLowercase.checked;
    const includesUppercase = checkboxUppercase.checked;
    const includesNumbers = checkboxNumbers.checked;
    const includesSymbols = checkboxSymbols.checked;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = '';

    allowedChars += includesLowercase ? lowercaseChars : "";
    allowedChars += includesUppercase ? uppercaseChars : "";
    allowedChars += includesNumbers ? numberChars : "";
    allowedChars += includesSymbols ? symbolChars : "";

    if(allowedChars.length > 1)
        //Checking to see if at least an option was selected, because if none was selected, then the length of allowedChars will be 0 : 1 to be safe
        {

        for(let i = 0; i < passwordLength; i++){

            const randIndex = Math.floor(Math.random()*allowedChars.length);
            password += allowedChars[randIndex];
    
        }
    
        passwordInput.value = password;
    }

    else{

        notificationBar.style = "top: 0; opacity: 100%;";
        setTimeout(function(){
                notificationBar.style = "opacity: 0%; top: 30px;"
            }, 1800);

    }
}

function copyPassword(){

    const inputValue = passwordInput.value;

    // How To Copy to Clipboard - ChatGPT Answer
    navigator.clipboard.writeText(inputValue).then(() => {
        //Returns a promise allowing for error handling with then and catch
        tooltip.style = "opacity: 100%";
        setTimeout(function(){
                tooltip.style = "opacity: 0%;"
            }, 1500);
    }).catch(err => {
        tooltip.innerHTML = "Failed to copy!";
        tooltip.style = "background-color: #b72e13; opacity: 100%;"
        setTimeout(function(){
            tooltip.style = "opacity: 0%;"
        }, 1500);
        console.error("Error copying to clipboard: ", err);
    });
}

