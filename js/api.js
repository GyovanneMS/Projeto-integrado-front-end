'use strict'

const infoCursos = async () => {
    const cursos = `http://localhost:8080/informacoesDosCursos`

    const response = await fetch(cursos);

    const listaCursos = await response.json();

    return listaCursos.curso
}

const nomeCurso = async (sigla) => {
    const nome = `http://localhost:8080/nome/${sigla}`
 
    const response = await fetch(nome);
    
    const apenasONome = await response.json();

    return apenasONome
}

const infoAlunos = async (nomeCurso, status) => {
    if(status == '' || status == undefined){
        status = 'default';
    }
    const alunos = `http://localhost:8080/alunos/${nomeCurso}/?status=${status}`

    const response = await fetch(alunos);

    const listaAlunos = await response.json();
    
    return listaAlunos.alunos;
}

const infoUmAluno = async (nomeAluno) => {
    const aluno = `http://localhost:8080/disciplinas/${nomeAluno}`

    const response = await fetch(aluno);

    const listaDisciplinas = await response.json();

    return listaDisciplinas.Disciplinas;
}

const infoUmAlunoMatricula = async (nomeAluno) => {
    
    const aluno = `http://localhost:8080/informacoes/${nomeAluno}`

    const response = await fetch(aluno);

    const informacoes = await response.json();

    return informacoes.Informacoes;
}


export {
    infoCursos, infoAlunos, infoUmAluno, infoUmAlunoMatricula, nomeCurso
} 