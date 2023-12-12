let emailInput = document.getElementById("user-email");
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let signUpBtn = document.getElementById("suscribe-btn");
let dismissBtn = document.getElementById("dissmiss-btn");
let errorMsg = document.getElementById("error-msg");

// Email validation code
function btnClickfn() {
    if (emailInput.value.match(mailFormat)){
        window.open("success.html");
    }
    else{
        emailInput.style.backgroundColor = "rgba(255, 0, 0, 0.241)";
        emailInput.style.borderColor = "rgba(255, 0, 0, 0.744)";
        emailInput.style.color = "rgba(255, 0, 0, 0.744)";
        errorMsg.style.color = "red"
        errorMsg.style.display = "inline";
    }
}
signUpBtn.onclick = function() {btnClickfn()};

