let btn = document.querySelector(".register");
let inval = document.querySelector(".invalid");
let last = document.querySelector(".thanks");
let news = document.querySelector(".news");
let number = 1;
let lastPara = document.querySelector(".para");
btn.addEventListener("click", () => {
  number += 1;
  let emailInput = document.querySelector(".email-in").value;
  if (emailInput === "") {
    alert("No email found enter a email for subscription");
  }

  let char = ["#", "!", "$", "%", "^", "&", "*"];
  for (let i = 0; i < char.length; i++) {
    if (emailInput.includes(char[i])) {
      inval.innerHTML = "Valid email required";
    } else if (emailInput.includes("@")) {
      inval.innerHTML = " ";
      if (emailInput) {
        news.style.display = "none";
        last.style.display = "block";
        localStorage.setItem(`email${number}`, emailInput);
        lastPara.innerHTML = ` A confirmation email has been sent to ${emailInput} .
        Please open it and click
        the button inside to confirm your subscription.
      </p>`;
      }
    }
  }
});



//To show the front page shown after the dismiss button is clicked 

let dismiss = document.querySelector(".dismiss");

dismiss.addEventListener("click", () => {
  news.style.display = "flex";
  last.style.display = "none";
});
