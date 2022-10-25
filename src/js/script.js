const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")
const diaSem = document.getElementById("weekDay")
const dayNumber = document.getElementById("numberDay")
const getMonth = document.getElementById("month")
const getYear = document.getElementById("year")

const semana = ["domingo", "segunda", "terça" ,"quarta", "quinta", "sexta", "sabado"]
const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

const relogio = setInterval(function time(){
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()
    let diaSemana = dateToday.getDay()
    let dia = dateToday.getDate()
    let mes = dateToday.getMonth()
    let year = dateToday.getFullYear()

    if(hr < 10 ) hr = "0" + hr

    if(min < 10 ) min = "0" + min

    if(s < 10 ) s = "0" + s

    if (dia < 10) dia = "0" + dia


    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = s
    diaSem.textContent = semana[diaSemana]
    dayNumber.textContent = dia
    getMonth.textContent = meses[mes]
    getYear.textContent = year
 

})