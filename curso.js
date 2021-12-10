import { Aluno } from "./aluno.js";
export class Curso {
    constructor(nomeCurso, notaAprovacao, faltasMaximas, listaEstudantes) {
        this.nomeCurso = nomeCurso;
        this.notaAprovacao = notaAprovacao;
        this.faltasMaximas = faltasMaximas;
        this.listaEstudantes = listaEstudantes;
    }
    alunosSitucaoCurso(alunos) {
        let alunosSituacaoCurso = [];
        alunos.map((dadosAluno) => {
            let aluno = new Aluno(dadosAluno.nome, dadosAluno.faltas, dadosAluno.notas);
            alunosSituacaoCurso.push({ aprovado: this.situacaoAluno(aluno) })

        });
        return alunosSituacaoCurso;



    }

    situacaoAluno(aluno) {
        let aprovado = false;
        let mediaAluno = aluno.calcularMedia();

        if (mediaAluno >= this.notaAprovacao) {
            if (aluno.faltas == this.faltasMaximas) {
                let notaAprovacaoFaltas = this.notaAprovacao + (this.notaAprovacao * 10 / 100);
                if (mediaAluno >= notaAprovacaoFaltas) { aprovado = true }

            } else { aprovado = true }
        }
        return aprovado;
    }

}

