

const screen1 = document.querySelector(".screenone")
const screen2 = document.querySelector(".screentwo")
let randomNumber = Math.round(Math.random() * 10);
let xAttempsts = 1;

// eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
document.addEventListener('keydown', function (e) {
  if (e.key == "Enter") {
    handleResetClick()
  }
})



//função callback
function handleTryClick(event) {
  event.preventDefault() // nao faça o padrao do evento no caso o formulario 
  
  const inputNumber = document.querySelector("#inputNumber")
  
  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screenone").classList.add("hide")
    
    document.querySelector(".screentwo").classList.remove("hide")
    
    document.querySelector(".screentwo h2").innerHTML = (`Você acertou em ${xAttempsts} tentativas`)
  }
  
  inputNumber.value = ""
  xAttempsts++
}



btnTry.addEventListener('click', handleTryClick)

btnReset.addEventListener('click', function () {
  
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  xAttempsts = 1
})

/*
######### Codigo Refatorado #######################


const screen1 = document.querySelector(".screenone")
const screen2 = document.querySelector(".screentwo")
let randomNumber = Math.round(Math.random() * 10);
let xAttempsts = 1;

// eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
document.addEventListener('keypress', function (e) {
  if (e.key == "Enter") {
    handleResetClick()
  }
})






//funções
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//função callback
function handleTryClick(event) {
  event.preventDefault() // nao faça o padrao do evento no caso o formulario 
  
  const inputNumber = document.querySelector("#inputNumber")
  
  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screenone").classList.add("hide")
    
    document.querySelector(".screentwo").classList.remove("hide")
    
    document.querySelector(".screentwo h2").innerHTML = (`Você acertou em ${xAttempsts} tentativas`)
  }
  
  inputNumber.value = ""
  xAttempsts++
}

function handleResetClick() {
  
  toggleScreen()
  xAttempsts = 1
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  
}
*/