$(document).ready(function () { //o jquery ele funciona atraves do = $ e parente()//
    //função para o funcionamento do botão//
    $('header button').click(function () {
        $('form').slideDown(); // para que o formulario apareça usamos a função slideDown
    })

    $('#botao-cancelar').click(function () { //ao clicar no botão cacelar o formulario será recolhido//
        $('form').slideUp();
    })

    // remover o comportamento do formulario para não atualizar a pagina//
    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src= "${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); //para a imagem surgir//
        $('#endereco-imagem-nova').val('')//para limpar o endereço da imagens na url//
    })
})

