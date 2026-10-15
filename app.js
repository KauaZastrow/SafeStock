
import {
    cadastrarEpiController,
    listarEpisController,
    buscarEpiController,
    adicionarQuantidadeController,
    retirarQuantidadeController,
    atualizarEpiController,
    excluirEpiController
} from "./controller/epiController.js";
import {
    cadastrarFuncionarioController,
    listarFuncionariosController,
    buscarFuncionarioController,
    desativarFuncionarioController,
    ativarFuncionarioController,
    atualizarFuncionarioController,
    excluirFuncionarioController
} from "./controller/funcionarioController.js";

console.log("===== 1. CADASTRO DE EPIs =====");

cadastrarEpiController(101, "Capacete de segurança", "12345", 20);
cadastrarEpiController(102, "Luva de proteção", "23456", 50);
cadastrarEpiController(103, "Óculos de proteção", "34567", 30);

console.log("\n===== 2. LISTAGEM DOS EPIs =====");

listarEpisController();

console.log("\n===== 3. BUSCA PELO ÍNDICE 1 =====");

buscarEpiController(1);

console.log("\n===== 4. ADICIONAR 5 UNIDADES AO ÍNDICE 0 =====");

adicionarQuantidadeController(0, 5);

console.log("\n===== 5. RETIRAR 2 UNIDADES DO ÍNDICE 0 =====");

retirarQuantidadeController(0, 2);

console.log("\n===== 6. TENTAR RETIRAR 100 UNIDADES =====");

retirarQuantidadeController(0, 100);

console.log("\n===== 7. ATUALIZAR O EPI DO ÍNDICE 1 =====");

atualizarEpiController(
    1,
    102,
    "Luva de proteção reforçada",
    "23456",
    60
);

console.log("\n===== 8. EXCLUIR O EPI DO ÍNDICE 2 =====");

excluirEpiController(2);

console.log("\n===== 9. LISTAGEM FINAL =====");

listarEpisController();

console.log("\n===== 10. CADASTRO DE FUNCIONÁRIOS =====");

cadastrarFuncionarioController({
    matricula: 201,
    nome: "Ana Souza",
    setor: "Produção",
    cargo: "Técnica de segurança"
});
cadastrarFuncionarioController({
    matricula: 202,
    nome: "Bruno Lima",
    setor: "Almoxarifado",
    cargo: "Estoquista"
});
cadastrarFuncionarioController({
    matricula: 203,
    nome: "Carla Mendes",
    setor: "Manutenção",
    cargo: "Supervisora"
});

console.log("\n===== 11. LISTAGEM DOS FUNCIONÁRIOS =====");

listarFuncionariosController();

console.log("\n===== 12. BUSCA DO FUNCIONÁRIO NO ÍNDICE 1 =====");

buscarFuncionarioController(1);

console.log("\n===== 13. DESATIVAÇÃO DO FUNCIONÁRIO NO ÍNDICE 1 =====");

desativarFuncionarioController(1);

console.log("\n===== 14. STATUS DO FUNCIONÁRIO NO ÍNDICE 1 =====");

buscarFuncionarioController(1);

console.log("\n===== 15. ATIVAÇÃO DO FUNCIONÁRIO NO ÍNDICE 1 =====");

ativarFuncionarioController(1);

console.log("\n===== 16. ATUALIZAÇÃO DO FUNCIONÁRIO NO ÍNDICE 0 =====");

atualizarFuncionarioController(0, {
    matricula: 201,
    nome: "Ana Souza Silva",
    setor: "Segurança do trabalho",
    cargo: "Técnica de segurança sênior"
});

console.log("\n===== 17. EXCLUSÃO DO FUNCIONÁRIO NO ÍNDICE 2 =====");

excluirFuncionarioController(2);

console.log("\n===== 18. LISTAGEM FINAL DOS FUNCIONÁRIOS =====");

listarFuncionariosController();