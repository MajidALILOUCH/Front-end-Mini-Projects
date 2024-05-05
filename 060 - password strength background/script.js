const passwordInput = document.getElementById("password");
const bg = document.querySelector(".bg");

let passLength = 0;

console.log(passLength);

function blurring(length) {
  bg.style.filter = `blur(${10 - length}px)`;
}

blurring(passLength);

passwordInput.oninput = () => {
  passLength = passwordInput.value.length;
  console.log(passLength);
  blurring(passLength);
};
