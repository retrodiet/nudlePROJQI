document.getElementById('present-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const imagemInput = document.getElementById('imagem');
    const link = document.getElementById('link').value;

    const li = document.createElement('li');
    li.innerHTML = `
        ${imagemInput.files[0] ? `<img src="" alt="${nome}" width="50" height="50" data-file="${imagemInput.files[0].name}">` : ''}
        <strong>${nome}</strong> - R$ ${valor} 
        <a href="${link}" target="_blank">Comprar</a>
        <button class="remover">Remover</button>
    `;

    document.getElementById('presentes-list').appendChild(li);

    // Lê a imagem, se houver
    if (imagemInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (event) {
            li.querySelector('img').src = event.target.result;
        };
        reader.readAsDataURL(imagemInput.files[0]);
    }

    // Adiciona o evento de remover
    li.querySelector('.remover').addEventListener('click', function () {
        li.remove();
    });

    // Exibe a seção de alteração de cor da lista se ainda não estiver visível
    if (document.getElementById('cor-da-lista-container').style.display === 'none') {
        document.getElementById('cor-da-lista-container').style.display = 'block';
    }

    document.getElementById('present-form').reset();
});

// Evento para adicionar o nome da lista
document.getElementById('adicionar-nome-da-lista').addEventListener('click', function () {
    const nomeDaLista = document.getElementById('nome-da-lista').value;
    const tituloDaLista = document.getElementById('titulo-da-lista');

    if (nomeDaLista.trim() !== '') {
        tituloDaLista.textContent = nomeDaLista;
        tituloDaLista.style.display = 'block';
    } else {
        alert('Por favor, insira um nome válido para a lista.');
    }

    document.getElementById('nome-da-lista').value = '';
});

// Evento para alterar a cor da lista
document.getElementById('alterar-cor').addEventListener('click', function () {
    const corSelecionada = document.getElementById('cor-da-lista').value;
    let cor;

    switch (corSelecionada) {
        case 'vermelho':
            cor = 'red';
            break;
        case 'azul':
            cor = 'blue';
            break;
        case 'preto':
            cor = 'black';
            break;
        case 'rosa':
            cor = 'pink';
            break;
        case 'verde':
            cor = 'green';
            break;
    }

    // Alterar a cor do título da lista e dos itens da lista
    document.getElementById('titulo-da-lista').style.color = cor;
    document.getElementById('presentes-list').style.color = cor;
});
