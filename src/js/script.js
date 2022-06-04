async function goatsAdvice(){
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    const json = await resposta.json()
    const conselho = json.slip.advice
    const gerarConselho = document.getElementById('quote')
    gerarConselho.innerHTML = conselho
    const assinatura = document.getElementById('assinatura')
    assinatura.innerHTML = '-Goat'
}


function carregarConselho(){
    goatsAdvice()
}