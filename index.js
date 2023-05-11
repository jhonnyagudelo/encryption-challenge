const textArea = document.getElementById("income");
const textMessage = document.getElementById("result");
const btn_encrypt = document.getElementById("encrypt");
const btn_decrypt = document.getElementById("decrypt");
const btn_copy = document.getElementById("copy");

const encryptionKeys = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const decryptionKeys = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

const encrypt = () => {
  return textArea.value
    .toLowerCase()
    .split("")
    .map((letter) => encryptionKeys[letter] || letter)
    .join("");
};

const decrypt = () => {
  return textArea.value
    .toLowerCase()
    .split("")
    .map((letter) => decryptionKeys[letter] || letter)
    .join("");
};

btn_encrypt.addEventListener("click", () => {
  textMessage.innerHTML = encrypt();
});

btn_decrypt.addEventListener("click", () => {
  textMessage.innerHTML = decrypt();
});
