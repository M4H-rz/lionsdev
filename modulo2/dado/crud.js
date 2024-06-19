const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = [
    {nome:'Ana', cargo: 'Desenvolvedora', salario:500.00},
    {nome:'Fabinhogameplays', cargo:'Puxa saco do chefe', salario:1000000000000.00}

]

function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar funcionário
	2. Listar funcionário
    3.Mostrar funcionário com maior salário
    4. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
				rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: salario })
                parseFloat(salario)
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}