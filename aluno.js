export class Aluno {
    constructor(nome, faltas, notas) {
        this.nome = nome;
        this.faltas = faltas;
        this.notas = notas;
    }
    calcularMedia() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];


        }

        return soma / this.notas.length
    }
    faltas() {
        this.notas.map(function (num) {
            return this.faltas++

        })
    }
};

