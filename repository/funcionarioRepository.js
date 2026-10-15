const funcionarios = [];

export function cadastrarFuncionario(funcionario) {
    funcionarios.push(funcionario);
    return funcionario;
}

export function listarFuncionarios() {
    return funcionarios;
}

export function buscarFuncionarioPorIndice(indice) {
    return funcionarios[indice];
}

export function atualizarFuncionario(indice, funcionario) {
    if (funcionarios[indice] === undefined) {
        return false;
    }
    funcionarios[indice] = funcionario;
    return true;
}

export function excluirFuncionario(indice) {
    if (funcionarios[indice] === undefined) {
        return false;
    }
    funcionarios.splice(indice, 1);
    return true;
}