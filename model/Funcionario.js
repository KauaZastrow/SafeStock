export class Funcionario {

    #status;

    constructor(matricula, nome, setor, cargo) {
        this.matricula = matricula;
        this.nome = nome;
        this.setor = setor;
        this.cargo = cargo;
        this.#status = "Ativo";
    }

    get status() {
        return this.#status;
    }

    ativar() {
        this.#status = "Ativo";
    }

    desativar() {
        this.#status = "Inativo";
    }
}