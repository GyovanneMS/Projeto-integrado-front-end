'use strict'

const infoCursos = async () => {
    const cursos = `https://senai-api-gyovanne.netlify.app/.netlify/functions/api/informacoesDosCursos`

    const response = await fetch(cursos);

    const listaCursos = await response.json();

    return listaCursos.curso
}

const nomeCurso = async (sigla) => {
    const nome = `https://senai-api-gyovanne.netlify.app/.netlify/functions/api/nome/${sigla}`
 
    const response = await fetch(nome);
    
    const apenasONome = await response.json();

    return apenasONome
}

const infoAlunos = async (nomeCurso, status) => {
    if(status == '' || status == undefined){
        status = 'default';
    }
    const alunos = `https://senai-api-gyovanne.netlify.app/.netlify/functions/api/alunos/${nomeCurso}/?status=${status}`

    const response = await fetch(alunos);

    const listaAlunos = await response.json();
    
    return listaAlunos.alunos;
}

const infoUmAluno = async (nomeAluno) => {
    const aluno = `https://senai-api-gyovanne.netlify.app/.netlify/functions/api/disciplinas/${nomeAluno}`

    const response = await fetch(aluno);

    const listaDisciplinas = await response.json();

    return listaDisciplinas.Disciplinas;
}

const infoUmAlunoMatricula = async (nomeAluno) => {
    
    const aluno = `https://senai-api-gyovanne.netlify.app/.netlify/functions/api/informacoes/${nomeAluno}`

    const response = await fetch(aluno);

    const informacoes = await response.json();

    return informacoes.Informacoes;
}


export {
    infoCursos, infoAlunos, infoUmAluno, infoUmAlunoMatricula, nomeCurso
} 