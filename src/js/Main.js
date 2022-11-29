
document.querySelector("#App").innerHTML = `
<div class="face-Icon">
    <img src="./src/assets/FACE-DESIGN.png" alt="">
</div>

<main class="container">
    <div class="calendario">
        <div>
            <span class="data" id="weekDay">segunda</span>
        </div>

        <div>
            <span class="data" id="numberDay">00</span>
        </div>

        <div>
            <span class="data" id="month">janeiro</span>
        </div>

        <div>
            <span class="data" id="year">0000</span>
        </div>
    </div>

    <div class="relogio">
        <div>
            <span id="horas">00</span>
            <span class="tempo">horas</span>
        </div>

        <div>
            <span id="minutos">00</span>
            <span class="tempo">minutos</span>  
        </div>

        <div>
            <span id="segundos">00</span>
            <span class="tempo">segundos</span>
        </div>
    </div>
</main>
`