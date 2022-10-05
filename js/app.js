'use strict'

import { infoCursos } from './api.js'

const cardCursos = (object) => {
    const cursos = object;
    let card = document.createElement('a');
    card.classList.add('card')
    card.setAttribute("id", `${cursos.Sigla}`)
    card.innerHTML = `<img src="${cursos.Icone}" alt=""> <span>${cursos.Sigla}</span>`;
    console.log(cursos.Sigla)
    card.onclick = abrir
    card.href = './pages/turma.html'
    return card
}

const showCards = async () => {
    let card = await infoCursos();
    let cardsShow = card.map(cardCursos)
    cursos.replaceChildren(...cardsShow)
}

const abrir = (card) => {
    const nomeCurso = card.currentTarget.id
    console.log(nomeCurso)
    localStorage.setItem('nomeCurso', nomeCurso)
}

showCards()


