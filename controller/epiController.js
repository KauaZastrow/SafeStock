
import { Epi } from "../model/Epi.js";

import {
    cadastrarEpi,
    listarEpis,
    buscarEpiPorIndice,
    atualizarEpi,
    excluirEpi
} from "../repository/epiRepository.js";

export function cadastrarEpiController(codigo, nome, ca, quantidade) {
    if (quantidade < 0) {
        console.log("Quantidade inicial inválida.");
        return false;
    }

    const epi = new Epi(codigo, nome, ca, quantidade);
    cadastrarEpi(epi);

    console.log("EPI cadastrado com sucesso!");
    return epi;
}

export function listarEpisController() {
    const epis = listarEpis();

    if (epis.length === 0) {
        console.log("Nenhum EPI cadastrado.");
        return;
    }

    for (let indice = 0; indice < epis.length; indice++) {
        const epi = epis[indice];

        console.log("-------------------------");
        console.log(`Índice: ${indice}`);
        console.log(`Código: ${epi.codigo}`);
        console.log(`Nome: ${epi.nome}`);
        console.log(`CA: ${epi.ca}`);
        console.log(`Quantidade: ${epi.quantidade}`);
    }

    console.log("-------------------------");
}

export function buscarEpiController(indice) {
    const epi = buscarEpiPorIndice(indice);

    if (epi === undefined) {
        console.log("EPI não encontrado nesse índice.");
        return false;
    }

    console.log(epi);
    console.log(`Quantidade em estoque: ${epi.quantidade}`);

    return epi;
}

export function atualizarEpiController(
    indice, codigo, nome, ca, quantidade
) {
    if (indice < 0) {
        console.log("Índice inválido.");
        return false;
    }

    if (quantidade < 0) {
        console.log("Quantidade inicial inválida.");
        return false;
    }

    const epiAtual = buscarEpiPorIndice(indice);

    if (epiAtual === undefined) {
        console.log("EPI não encontrado para atualização.");
        return false;
    }

    const epiAtualizado = new Epi(codigo, nome, ca, quantidade);
    atualizarEpi(indice, epiAtualizado);

    console.log("EPI atualizado com sucesso!");
    return true;
}

export function excluirEpiController(indice) {
    if (indice < 0) {
        console.log("Índice inválido.");
        return false;
    }

    const epi = buscarEpiPorIndice(indice);

    if (epi === undefined) {
        console.log("EPI não encontrado para exclusão.");
        return false;
    }

    excluirEpi(indice);

    console.log("EPI excluído com sucesso!");
    return true;
}

export function adicionarQuantidadeController(indice, valor) {
    if (indice < 0) {
        console.log("Índice inválido.");
        return false;
    }

    const epi = buscarEpiPorIndice(indice);

    if (epi === undefined) {
        console.log("EPI não encontrado para adicionar estoque.");
        return false;
    }

    const sucesso = epi.adicionarQuantidade(valor);

    if (!sucesso) {
        console.log("Não foi possível adicionar a quantidade.");
        return false;
    }

    console.log(`Estoque atualizado: ${epi.quantidade}`);
    return true;
}

export function retirarQuantidadeController(indice, valor) {
    if (indice < 0) {
        console.log("Índice inválido.");
        return false;
    }

    const epi = buscarEpiPorIndice(indice);

    if (epi === undefined) {
        console.log("EPI não encontrado para retirar estoque.");
        return false;
    }

    const sucesso = epi.retirarQuantidade(valor);

    if (!sucesso) {
        console.log(
            "Retirada não realizada. Verifique o valor e o estoque disponível."
        );
        return false;
    }

    console.log(`Estoque atualizado: ${epi.quantidade}`);
    return true;
}