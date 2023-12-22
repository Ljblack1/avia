const btn = document.querySelector('.btn_success');
const cancelContainer = document.querySelector('.cancel_btn_container');
const waiting = document.querySelector('.waiting');
const btnProgress = document.querySelector('.btn_progress');
const successBtnAmount = document.querySelector('.btn_success .place_bet_btn_amount');
const btnAmount = document.querySelector('.btn_progress .place_bet_btn_amount');
const betValue = document.querySelector('.btn_progress .btn_value');
const stakeAmount = document.querySelector('.stake_amount');
const handleOne = document.querySelector('.handles');
const alert = document.querySelector('.cashout_alert');
const alertWithdraw = document.querySelector('.alert_withdraw');
const alertOdds = document.querySelector('.alert_odds');

console.log(btnAmount.textContent);
console.log(stakeAmount.value);

const balance = document.querySelector('.balance');

let mainBalance = 34567.45;

balance.textContent = mainBalance;



btn.addEventListener('click', () => {
  btn.style.display = "none";
  cancelContainer.style.display = "flex";
  handleOne.classList.add("handle_1");

  setTimeout(() => {
    waiting.style.display = "none";
    mainBalance -= Number(stakeAmount.value);
    balance.textContent = mainBalance;

    setTimeout(() => {
      cancelContainer.style.display = "none";
      btnProgress.style.display = "flex";
      betValue.textContent = "CASH OUT"
      let cashoutTime = setInterval(countCashout, 100);
      handleOne.style.borderColor = "#d07206";

      btnProgress.addEventListener('click', () => {
        cancelContainer.style.display = "none";
        btn.style.display = "flex";
        btnProgress.style.display = "none";
        const cashout = btnAmount.textContent;
        const newBalance = mainBalance + Number(cashout);
        balance.textContent = newBalance;
        clearInterval(cashoutTime);
        handleOne.classList.remove("handle_1");
        displayAlert(cashout);
        // setBackToDefault();
      })
    }, 1000)

  }, 3000)
})

successBtnAmount.textContent = stakeAmount.value;

// btns.forEach((btn) => {
  //   btn.addEventListener("click", (e) => {
//     const currentBtn = e.currentTarget;
//     // const cancelBtn = e.currentTarget.nextElementSibling;
//     if (currentBtn.dataset.id === "success") {
//       currentBtn.style.display = "none";
//       cancelContainer.style.display = "flex";
//       setTimeout(() => {
//         waiting.style.display = "none";
//         setTimeout(() => {
//           currentBtn.style.display = "flex";
//           currentBtn.style.backgroundColor = "black";
//           betValue.textContent = "CASH OUT";
//           cancelContainer.style.display = "none";
//           countCashout();
//         }, 2000)
//       }, 2000)
//     } else if (currentBtn.dataset.id === "danger") {
  //       cancelContainer.style.display = "none";
  //       currentBtn.parentElement.previousElementSibling.style.display = "flex";
//      } else if (btn.classList.contains("btn_progress")) {
//       btn.classList.remove("btn_progress");
//      }
//   })
//   if (btn.classList.contains("btn_progress")) {
  //     betValue.textContent = "CASH OUT";
//   }
// })


let counter = 1.00;

function countCashout() {
  
  counter += 0.01;
  setCashout(counter);
  
  if (counter > 1.5) {
    counter += 0.005;
    setCashout(counter);
    console.log("hello");
  }

  if (counter > 2) {
    counter += 0.005;
    setCashout(counter);
    console.log("hello");
  }

  if (counter > 2.5) {
    counter += 0.003;
    setCashout(counter);
    console.log("hello");
  }
  
  if (counter > 3) {
    counter += 0.0045;
    setCashout(counter);
    console.log("Tymer");
  }

  if (counter > 4) {
    counter += 0.0045;
    setCashout(counter);
    console.log("Am");
  }

  if (counter > 4.5) {
    counter += 0.0075;
    setCashout(counter);
    console.log("Am");
  }
  
  if (counter > 5) {
    counter += 0.01;
    setCashout(counter);
    console.log("Here");
  }
  
  if (counter > 6) {
    counter += 0.005;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 7) {
    counter += 0.005;
    setCashout(counter);
    console.log("Tymer");
  }
}

function setCashout(counter) {
  let value = Number(stakeAmount.value);
  let cashout = value * counter;
  btnAmount.textContent = `${Math.floor(cashout.toFixed(2))}.00`;
}

function displayAlert(cashout) {
  alertOdds.textContent = (Number(cashout) / Number(stakeAmount.value)).toFixed(2);
  alertWithdraw.textContent = cashout;
  alert.classList.add("show_alert");
  setTimeout(() => {
    alert.classList.add("hide_alert");
  }, 2000)
}

// setBackToDefault();

function setBackToDefault() {
  btnAmount.textContent = 0;
}
