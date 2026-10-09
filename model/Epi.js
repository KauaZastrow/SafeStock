export class Epi {

    #quantidadEstoque;

    constructor(codigo, nome, CA, quantidadEstoque) {
        this.codigo = codigo;
        this.nome = nome;
        this.CA = CA;
        this.#quantidadEstoque = quantidadEstoque;
    }

    get quantidadEstoque() {
        return this.#quantidadEstoque;
    }

    adicionarQuantidade(valor) {
        if (valor <= 0) {
            return false;
        }

        this.#quantidadEstoque += valor;
        return true;
    }

    retirarQuantidade(valor) {
        if (valor <= 0) {
            return false;
        }

        if (valor > this.#quantidadEstoque) {
            return false;
        }

        this.#quantidadEstoque -= valor;
        return true;
    }

}