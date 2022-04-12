let copyButton = document.querySelector(".copy-icon")


copyButton.addEventListener(
    "click",
    () => navigator.clipboard.writeText("kastkuya@gmail.com"),
    false
)