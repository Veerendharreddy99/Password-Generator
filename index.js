const passwordLength = document.getElementById("pws_length");
const generateBtn = document.getElementById("btn_generate");
const copyBtn = document.getElementById("btn_copy");
let inputValue = document.getElementById("input_password");

let length = parseInt(passwordLength.value);

passwordLength.addEventListener("change", () => {
  length = parseInt(passwordLength.value);
});
function passwordGenerator(length) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789012345678901234567890123456789!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=";

  const password = [...Array(length)].reduce((accumulator, _element) => {
    const randomIndex = Math.floor(Math.random() * chars.length);
    return accumulator + chars[randomIndex];
  }, "");
  inputValue.value = password;
}


generateBtn.addEventListener("click", () => {
  passwordGenerator(length);
});

copyBtn.addEventListener("click", () => {
  inputValue.select();
  document.execCommand("copy");
});