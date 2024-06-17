//Criando o array listaDeNome
let listaDeNome = [];
//Criando o array listaDeIdade 
let listaDeIdade = [];
//Criando o array listaDeNomePreferencial
let listaDeNomePreferencial = [];
//Criando o array listaDeIdadePreferencial
let listaDeIdadePreferencial = [];
//Criando o array listaDeNomeChamados
let listaDeNomeChamados = [];
//Criando o array listaDeIdadeChamados
let listaDeIdadeChamados = [];

//função cadastroPessoa roda no index HTML
function cadastrarPessoa() {
    //cadastra o nome do input na variável nomeCadastro
    let nomeCadastrado = document.querySelector('#nome').value;
    //cadastra a idade do input na variável idade
    let idade = document.querySelector('#idade').value;
     //Inclui na variável pessoa o nome e idade que foi cadastrado no input para validar no console
    let pessoa = `${nomeCadastrado}, ${idade}`;
    //Para visualizar no console chama a variável pessoa
    //console.log(pessoa);
    if(idade > 59){
        //inclui na última posição o nome que está na variável nomeCadastro no array listaDeNomePreferencial
        listaDeNomePreferencial.push(nomeCadastrado); 
        //inclui na última posição a idade que está na variável idade no array listaIdadePreferencial
        listaDeIdadePreferencial.push(idade);
        //chama a função geraLista para apresentar a lista preferencial na página web
        gerarListaPreferencial();
    }else{
        //inclui na última posição o nome que está na variável nomeCadastro no array listaDeNome
        listaDeNome.push(nomeCadastrado);    
        //inclui na última posição a idade que está na variável idade no array listaIdade
        listaDeIdade.push(idade);
        //chama a função geraLista para apresentar a lista na página web
        gerarLista();
    }
    //Roda a função na página index HTML
    function limparCampo() {
        nomeCadastrado = document.querySelector('#nome');
        nomeCadastrado.value = '';
        idade = document.querySelector('#idade');
        idade.value = '';
    }
    limparCampo();

}

function excluirDadosNormal() {
    let resposta = prompt('Se deseja excluir o cadastro digite "S" para Sim ou "N" para Não');
    if (resposta == 'S' || resposta == 's'){
        let excluirNome = listaDeNome.pop();
        let excluirIdade = listaDeIdade.pop();
        gerarLista();
    }
}

function excluirDadosPreferencial() {
    let resposta = prompt('Se deseja excluir o cadastro digite "S" para Sim ou "N" para Não');
    if (resposta == 'S' || resposta == 's'){
        let excluirNomePreferencial = listaDeNomePreferencial.pop();
        let excluirIdadePreferencial = listaDeIdadePreferencial.pop();
        gerarListaPreferencial();
    }
}

// Função para gerar a lista
function gerarLista() {    
    let lista = document.getElementById('lista');
    // Limpa a lista antes de adicionar os itens    
    lista.innerHTML = '';
    // Adiciona cada nome como um item da lista
    listaDeNome.forEach(nome => {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function gerarListaPreferencial() {    
    let listaPreferencial = document.getElementById('listaPreferencial');
    // Limpa a lista antes de adicionar os itens    
    listaPreferencial.innerHTML = '';
    // Adiciona cada nome como um item da lista
    listaDeNomePreferencial.forEach(nomePreferencial => {
        let itemPreferencial = document.createElement('li');
        itemPreferencial.textContent = nomePreferencial;
        listaPreferencial.appendChild(itemPreferencial);
    });
}

function gerarListaDeChamada() {    
    let listaDeChamados = document.getElementById('chamar');
    // Limpa a lista antes de adicionar os itens    
    listaDeChamados.innerHTML = '';
    // Adiciona cada nome como um item da lista
    listaDeNomeChamados.forEach(nomeChamados => {
        let itemChamados = document.createElement('li');
        itemChamados.textContent = nomeChamados;
        listaDeChamados.appendChild(itemChamados);
    });
}

function chamarFilaNormal() {
    let proximoDaFila = listaDeNome[0];
    let proximoDaFilaIdade = listaDeIdade[0];
    listaDeNomeChamados.push(proximoDaFila);
    listaDeIdadeChamados.push(proximoDaFilaIdade);
    //console.log(listaDeNomeChamados);
    let excluirNome = listaDeNome.shift();
    let excluirIdade = listaDeIdade.shift();
    gerarLista();
    gerarListaDeChamada();
}

function chamarFilaPreferencial() {
    let proximoDaFilaPreferencial = listaDeNomePreferencial[0];
    let proximoDaFilaIdadePreferencial = listaDeIdadePreferencial[0];
    listaDeNomeChamados.push(proximoDaFilaPreferencial);
    listaDeIdadeChamados.push(proximoDaFilaIdadePreferencial);
    //console.log(listaDeNomeChamados);
    let excluirNome = listaDeNomePreferencial.shift();
    let excluirIdade = listaDeIdadePreferencial.shift();
    gerarListaPreferencial();
    gerarListaDeChamada();
}

function retonarFila() {
    let ultimoNumeroIdade = listaDeIdadeChamados.length - 1;
    let ultimoNumeroNome = listaDeNomeChamados.length - 1;
    let ultimoIdadeDaFila = listaDeIdadeChamados[ultimoNumeroIdade];
    let ultimoNomeDaFila = listaDeNomeChamados[ultimoNumeroNome];
        if (listaDeIdadeChamados[ultimoNumeroIdade] > 59) {
        listaDeNomePreferencial.unshift(ultimoNomeDaFila);
        listaDeIdadePreferencial.unshift(ultimoIdadeDaFila);
        let excluirNomeChamadoPreferencial = listaDeNomeChamados.pop();
        let excluirIdadeChamadosPreferencial = listaDeIdadeChamados.pop();
        gerarListaPreferencial();       
        gerarListaDeChamada();
    }else {
        listaDeNome.unshift(ultimoNomeDaFila);
        listaDeIdade.unshift(ultimoIdadeDaFila);
        let excluirNomeChamado = listaDeNomeChamados.pop();
        let excluirIdadeChamado = listaDeIdadeChamados.pop();
        gerarLista();
        gerarListaDeChamada();
    }
}

function limparChamada() {
    listaDeNomeChamados = [];
    gerarListaDeChamada();
}
