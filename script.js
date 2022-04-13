let copyButton = document.querySelector(".copy-icon")
let emailDiv = document.querySelector("#email")

copyButton.addEventListener(
    "click",
    () => navigator.clipboard.writeText("katskuya@gmail.com"),
    false
)

emailDiv.onmouseover = () => copyButton.style.display = "flex"
emailDiv.onmouseleave = () => copyButton.style.display = "none"