const adviceId = document.getElementById('number');
const adviceTX = document.getElementById('advice');
const adviceBtn = document.getElementById('btn');
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
    const res = await fetch(url);
    const {slip:{id,advice}} = await res.json();
    adviceId.innerText = id;
    adviceTX.innerText = advice;
}

getAdvice()

adviceBtn.addEventListener("click", getAdvice);