'use strict'

import { infoAlunos, infoCursos, nomeCurso } from './api.js'
//import { criarAlunos } from './app.js'

const titulo = async () => {
    //const titulo = document.getElementsByClassName('h1');
    let curso = localStorage.getItem('nomeCurso');
    let cursoNome = await nomeCurso(curso)
    let title = cursoNome.Nome[0].Nome
    //console.log(cursoNome.split(' - '))
    //titulo.innerHTML = `a${title}a`;
    //titulo.append(title)
    document.getElementById('titulo-da-pagina').textContent = cortarTitulo(title)
}

const cortarTitulo = (titulo) => {
    const textoCerto = titulo.split(' em ');
    return textoCerto[1]
}
 
const filtro = async () => {
    let status = document.getElementById('status-dos-alunos').value
    let curso = localStorage.getItem('nomeCurso')
    let cards = await infoAlunos(curso, status)
    let cardsShow = cards.map(cardAlunos);
    alunos.replaceChildren(...cardsShow);
}

const cardAlunos = (object) => {
    console.log(localStorage.getItem('nomeCurso'))
    let alunos = object;
    let card = document.createElement('a');
    card.classList.add(`alunos`);
    //Id
    card.setAttribute('id', `${alunos.Matricula}`)
    if(alunos.Status == "Cursando"){
        card.classList.add('cursando');
    } else if(alunos.Status == "Finalizado"){
        card.classList.add('finalizado');
        //card.setAttribute("id", "cursando")
    } else if(alunos.Status == "Finalizado"){
        card.classList.add('finalizado');
       // card.setAttribute("id", "finalizado")
    } else {
        card.classList.add('sem-informacao') 
    } 
    card.href = './aluno.html'
    card.innerHTML = `<img src="${alunos.Icone}" alt=""> <p>${alunos.Nome.toUpperCase()}</p>`
    card.onclick = abrir
    return card;
}

const showCards = async () => {
    let curso = localStorage.getItem('nomeCurso')
    let cards = await infoAlunos(curso);
    let cardsShow = cards.map(cardAlunos);
    alunos.replaceChildren(...cardsShow);
}

const abrir = (card) => {
    const matricula = card.currentTarget.id
    localStorage.setItem('aluno', matricula)
}

document.getElementById('status-dos-alunos').addEventListener('change', filtro)
showCards()
titulo()

