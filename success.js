let dismissBtn = document.getElementById("dissmiss-btn")

// Code to dismiss the success page
function dismissFn() {
    window.open("index.html");
}
dismissBtn.onclick = function() {dismissFn()};