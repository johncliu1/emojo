const toast = document.createElement("div")

toast.id = "toast"

document.getElementsByTagName("body")[0].appendChild(toast);

function showToast(message) {
    console.log("showing messag ", message);
    toast.className = "show";
    toast.innerText = message;
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}