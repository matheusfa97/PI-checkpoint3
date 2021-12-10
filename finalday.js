import { Aluno } from "./aluno.js";
import { Curso } from "./curso.js";
import { Estudantes } from "./estudantes.js"

function main() {

    let curso = new Curso("Digital House", 2, 20, Estudantes);
    return curso.alunosSitucaoCurso(Estudantes)
}

console.log(main())