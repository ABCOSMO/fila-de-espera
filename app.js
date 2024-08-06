//Criando o array listaDeNome
let listaDeNome = [];
//Criando o array listaDeIdade 
let listaDeIdade = [];
//Criando o array listaPerguntaPreferencial
let listaPerguntaPreferencial = [];
//Criando o array listaPerguntaNormal
let listaPerguntaNormal = [];
//Criando o array listaMotivoPreferencial
let listaMotivoPreferencial = [];
//Criando o array listaMotivoNormal
let listaMotivoNormal = [];
//Criando o array listaDeNomePreferencial
let listaDeNomePreferencial = [];
//Criando o array listaDeIdadePreferencial
let listaDeIdadePreferencial = [];
//Criando o array listaDeNomeChamados
let listaDeNomeChamados = [];
//Criando o array listaDeIdadeChamados
let listaDeIdadeChamados = [];
let listaDeChamadosPergunta = [];
let listaDeChamadosMotivo = [];

//função cadastroPessoa roda no index HTML
function cadastrarPessoa() {
    //cadastra o nome do input na variável nomeCadastro
    let nomeCadastrado = document.querySelector('#nome').value;
    //cadastra a idade do input na variável idade
    let idade = document.querySelector('#idade').value;
    //cadastrar resposta preferencial sim
    let respostaSim = document.querySelector('input[name="preferencial"]:checked').value;
    //cadastrar motivo preferencial
    let motivo = document.querySelector('#motivo').value;
     //Inclui na variável pessoa o nome e idade que foi cadastrado no input para validar no console
    let pessoa = `${nomeCadastrado}; ${idade}; ${respostaSim}; ${motivo}`;
    //Para visualizar no console chama a variável pessoa
    console.log(pessoa);
    if(idade > 59 || respostaSim == 'sim'){
        //inclui na última posição o nome que está na variável nomeCadastro no array listaDeNomePreferencial
        listaDeNomePreferencial.push(nomeCadastrado); 
        //inclui na última posição a idade que está na variável idade no array listaIdadePreferencial
        listaDeIdadePreferencial.push(idade);
        //inclui na última posição a pergunta preferencial no array listaPerguntaPreferencial
        listaPerguntaPreferencial.push(respostaSim);
        //incluir na últma posição o motivo preferencial no array listaMotivoPreferencial
        listaMotivoPreferencial.push(motivo);
        //chama a função geraLista para apresentar a lista preferencial na página web
        gerarListaPreferencial();
    }else{
        //inclui na última posição o nome que está na variável nomeCadastro no array listaDeNome
        listaDeNome.push(nomeCadastrado);    
        //inclui na última posição a idade que está na variável idade no array listaIdade
        listaDeIdade.push(idade);
        //inclui na última posição a pergunta preferencial no array listaPerguntaPreferencial
        listaPerguntaNormal.push(respostaSim);
        //incluir na últma posição o motivo preferencial no array listaMotivoPreferencial
        listaMotivoNormal.push(motivo);
        //chama a função geraLista para apresentar a lista na página web
        gerarLista();
    }
    //Roda a função na página index HTML
    function limparCampo() {
        nomeCadastrado = document.querySelector('#nome');
        nomeCadastrado.value = '';
        idade = document.querySelector('#idade');
        idade.value = '';
        motivo = document.querySelector('#motivo');
        motivo.value = '';
        let elementoSim = document.getElementById('sim');
        elementoSim.checked = false;
        let elementoNao = document.getElementById('nao');
        elementoNao.checked = false;
    }
    limparCampo();

}

function excluirDadosNormal() {
    let resposta = prompt('Se deseja excluir o cadastro digite "S" para Sim ou "N" para Não');
    if (resposta == 'S' || resposta == 's'){
        let excluirNome = listaDeNome.pop();
        let excluirIdade = listaDeIdade.pop();
        let excluirPergunta = listaPerguntaNormal.pop();
        let excluirMotivo = listaMotivoNormal.pop();
        gerarLista();
    }
}

function excluirDadosPreferencial() {
    let resposta = prompt('Se deseja excluir o cadastro digite "S" para Sim ou "N" para Não');
    if (resposta == 'S' || resposta == 's'){
        let excluirNomePreferencial = listaDeNomePreferencial.pop();
        let excluirIdadePreferencial = listaDeIdadePreferencial.pop();
        let excluirPergunta = listaPerguntaPreferencial.pop();
        let excluirMotivo = listaMotivoPreferencial.pop();
        gerarListaPreferencial();
    }
}

// Função para gerar a lista de atendimento Normal
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

// Função para gerar a lista de atendimento Preferencial
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

// Função para gerar a lista das pessoas que foram chamadas
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
    let proximoPerguntaNormal = listaPerguntaNormal[0];
    let proximoMotivo = listaMotivoNormal[0];
    listaDeNomeChamados.push(proximoDaFila);
    listaDeIdadeChamados.push(proximoDaFilaIdade);
    listaDeChamadosPergunta.push(proximoPerguntaNormal);
    listaDeChamadosMotivo.push(proximoMotivo);
    let excluirNome = listaDeNome.shift();
    let excluirIdade = listaDeIdade.shift();
    let excluirPergunta = listaPerguntaNormal.shift();
    let excluirMotivo = listaMotivoNormal.shift();
    gerarLista();
    gerarListaDeChamada();
    exibirMensagemInicial();
}

function chamarFilaPreferencial() {
    let proximoDaFilaPreferencial = listaDeNomePreferencial[0];
    let proximoDaFilaIdadePreferencial = listaDeIdadePreferencial[0];
    let proximoPergunta = listaPerguntaPreferencial[0];
    let proximoMotivo = listaMotivoPreferencial[0];
    listaDeNomeChamados.push(proximoDaFilaPreferencial);
    listaDeIdadeChamados.push(proximoDaFilaIdadePreferencial);
    listaDeChamadosPergunta.push(proximoPergunta);
    listaDeChamadosMotivo.push(proximoMotivo);
    let excluirNome = listaDeNomePreferencial.shift();
    let excluirIdade = listaDeIdadePreferencial.shift();
    let excluirPergunta = listaPerguntaPreferencial.shift();
    let excluirMotivo = listaMotivoPreferencial.shift();
    gerarListaPreferencial();
    gerarListaDeChamada();
    exibirMensagemInicial();
}

function retonarFila() {
    let ultimoNumeroIdade = listaDeIdadeChamados.length - 1;
    let ultimoNumeroNome = listaDeNomeChamados.length - 1;
    let ultimaPergunta = listaDeChamadosPergunta.length - 1;
    let ultimoMotivo = listaDeChamadosMotivo.length -1;
    let ultimoIdadeDaFila = listaDeIdadeChamados[ultimoNumeroIdade];
    let ultimoNomeDaFila = listaDeNomeChamados[ultimoNumeroNome];
    let ultimaPerguntaFila = listaDeChamadosPergunta[ultimaPergunta];
    let ultimoMotivoFila = listaDeChamadosMotivo[ultimoMotivo];
    console.log(ultimaPerguntaFila);
        if (listaDeIdadeChamados[ultimoNumeroIdade] > 59 || listaDeChamadosPergunta[ultimaPergunta] == 'sim') {
        listaDeNomePreferencial.unshift(ultimoNomeDaFila);
        listaDeIdadePreferencial.unshift(ultimoIdadeDaFila);
        listaPerguntaPreferencial.unshift(ultimaPerguntaFila);
        listaMotivoPreferencial.unshift(ultimoMotivoFila);
        let excluirNomeChamadoPreferencial = listaDeNomeChamados.pop();
        let excluirIdadeChamadosPreferencial = listaDeIdadeChamados.pop();
        let excluirChamadosPergunta = listaDeChamadosPergunta.pop();
        let excluirChamadosMotivos = listaDeChamadosMotivo.pop();
        //let excluirPergunta = listaPerguntaPreferencial.pop();
        //let excluirMotivo = listaMotivoPreferencial.pop();
        gerarListaPreferencial();       
        gerarListaDeChamada();
    }else {
        listaDeNome.unshift(ultimoNomeDaFila);
        listaDeIdade.unshift(ultimoIdadeDaFila);
        listaPerguntaNormal.unshift(ultimaPerguntaFila);
        listaMotivoNormal.unshift(ultimoMotivoFila);
        let excluirNomeChamado = listaDeNomeChamados.pop();
        let excluirIdadeChamado = listaDeIdadeChamados.pop();
        let excluirPergunta = listaDeChamadosPergunta.pop();
        let excluirMotivo = listaDeChamadosMotivo.pop();
        gerarLista();
        gerarListaDeChamada();
    }
}

function limparChamada() {
    listaDeNomeChamados = [];
    gerarListaDeChamada();
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1});
}

function exibirMensagemInicial() {
    let ultimoNumeroNome = listaDeNomeChamados.length - 1;
    let chamarNaFila = listaDeNomeChamados[ultimoNumeroNome];
    let fala = ' comparecer a sala de atendimento';
    exibirTextoNaTela('h3', `${chamarNaFila}${fala}`);
}

