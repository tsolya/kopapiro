let kogomb= document.getElementById("ko")
let ollogomb= document.getElementById("ollo")
let papirgomb= document.getElementById("papir")
let eredmeny= document.getElementById("kerdojel")
let jatekospont = 0
let geppont = 0
let jatekosp = document.getElementById('jatekospontize')
let gepp = document.getElementById('geppontize')
let kerdo = document.getElementById('keroize')

kogomb.addEventListener('click', () => kor('ko'))
ollogomb.addEventListener('click', () => kor('ollo'))
papirgomb.addEventListener('click', () => kor('papir'))

function kor(valasztott){
    let valaszthatoHE = ['ko','papir','ollo']
    let gep = valaszthatoHE[Math.floor(Math.random()* valaszthatoHE.length)]
    if(gep=== 'ko'){
        kerdo.src="ko.png"
    }
    else if(gep==='papir'){
        kerdo.src="papir.png"
    }
    else if(gep==='ollo'){
        kerdo.src="ollo.png"
    }

    if(valasztott === gep){
        eredmeny.textContent="Ez egy döntetlen"
    }
    else if(
        (valasztott === 'ko' && gep ==='ollo') ||
        (valasztott === 'papir' && gep ==='ko') ||
        (valasztott === 'ollo' && gep ==='papir')
    )
    {
        eredmeny.textContent="Nyertél"
        jatekospont++;
    }
     else{
        eredmeny.textContent="Vesztettél"
        geppont++;
    }
    
    jatekosp.textContent = "Te pontjaid: " + jatekospont
    gepp.textContent="Gép pontjai: " + geppont
}