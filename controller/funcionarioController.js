import { Funcionario } from "../model/Funcionario.js";
import {
    cadastrarFuncionario,
    listarFuncionarios,
    buscarFuncionarioPorIndice,
    atualizarFuncionario,
    excluirFuncionario
} from "../repository/funcionarioRepository.js";

function validarIndice(indice) {
    const funcionario = buscarFuncionarioPorIndice(indice);
    if (!Number.isInteger(indice) || indice < 0 || funcionario === undefined) {
        console.log(`Erro: Funcionário não encontrado no índice ${indice}.`);
        return false;
    }
    return true;
}

export function cadastrarFuncionarioController(dados) {
    const novoFuncionario = new Funcionario(
        dados.matricula,
        dados.nome,
        dados.setor,
        dados.cargo
    );
    cadastrarFuncionario(novoFuncionario);
    console.log("Funcionário cadastrado com sucesso!");
    return novoFuncionario;
}

export function listarFuncionariosController() {
    const lista = listarFuncionarios();

    if (lista.length === 0) {
        console.log("Nenhum funcionário cadastrado.");
        return;
    }

    for (let i = 0; i < lista.length; i++) {
        const f = lista[i];
        console.log(`Índice: ${i} | Matrícula: ${f.matricula} | Nome: ${f.nome} | Setor: ${f.setor} | Cargo: ${f.cargo} | Status: ${f.status}`);
    }
}

export function buscarFuncionarioController(indice) {
    if (validarIndice(indice)) {
        const f = buscarFuncionarioPorIndice(indice);
        console.log(`Funcionário encontrado -> Matrícula: ${f.matricula} | Nome: ${f.nome} | Setor: ${f.setor} | Cargo: ${f.cargo} | Status: ${f.status}`);
        return f;
    }
    return false;
}

export function atualizarFuncionarioController(indice, novosDados) {
    if (validarIndice(indice)) {
        const funcionarioAtual = buscarFuncionarioPorIndice(indice);
        const funcionarioAtualizado = new Funcionario(
            novosDados.matricula,
            novosDados.nome,
            novosDados.setor,
            novosDados.cargo
        );
        if (funcionarioAtual.status === "Inativo") {
            funcionarioAtualizado.desativar();
        }
        atualizarFuncionario(indice, funcionarioAtualizado);
        console.log("Funcionário atualizado com sucesso!");
        return true;
    }
    return false;
}

export function excluirFuncionarioController(indice) {
    if (validarIndice(indice)) {
        excluirFuncionario(indice);
        console.log("Funcionário excluído com sucesso!");
        return true;
    }
    return false;
}

export function ativarFuncionarioController(indice) {
    if (validarIndice(indice)) {
        buscarFuncionarioPorIndice(indice).ativar();
        console.log("Funcionário ativado com sucesso!");
        return true;
    }
    return false;
}

export function desativarFuncionarioController(indice) {
    if (validarIndice(indice)) {
        buscarFuncionarioPorIndice(indice).desativar();
        console.log("Funcionário desativado com sucesso!");
        return true;
    }
    return false;
}