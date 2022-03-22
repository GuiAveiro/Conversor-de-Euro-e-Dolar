let botao = document.getElementById("botao")

let selectMoedas = document.getElementById("select-moedas")

async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta) {
        return resposta.json()
    })
    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high


    let inputValorReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let inputReal = document.getElementById("input-real")
    if (selectMoedas.value === "US$ Dólar Americano") {
        let valorDolar = inputValorReais / dolar
        inputMoedas.innerHTML = valorDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    if (selectMoedas.value === "€ Euro") {
        let ValorEuro = inputValorReais / euro
        inputMoedas.innerHTML = ValorEuro.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }

    inputReal.innerHTML = inputValorReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

}

function trocadeMoeda() {
    let inputDolar = document.getElementById("input-moedas")
    let dolarEuro = document.getElementById("dolar-euro")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")


    if (selectMoedas.value === "US$ Dólar Americano") {
        dolarEuro.innerHTML = "Dólar Americano"
        inputDolar.innerHTML = "$ 2.000,00"
        bandeiraMoedas.src = "./img/eua.png"
    }
    if (selectMoedas.value === "€ Euro") {
        dolarEuro.innerHTML = "Euro"
        inputDolar.innerHTML = "€ 2.000,00"
        bandeiraMoedas.src = "./img/euro.png"
    }

    converterMoedas()

}


botao.addEventListener("click", converterMoedas)
selectMoedas.addEventListener("change", trocadeMoeda)