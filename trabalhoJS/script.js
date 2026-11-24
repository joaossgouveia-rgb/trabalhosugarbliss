
var produtos = [

    { id: 1, nome: "Oreo", categoria: "eua", preco: 9.90, descricao: "Biscoito de chocolate recheado com creme de baunilha.", imagem: "imagens/oreo.jpg" },
    { id: 2, nome: "Reese's Peanut Butter Cups", categoria: "eua", preco: 14.90, descricao: "Copinhos de chocolate ao leite com recheio de pasta de amendoim.", imagem: "imagens/reeses.jpg" },
    { id: 3, nome: "Hershey's Kisses", categoria: "eua", preco: 16.90, descricao: "Chocolates ao leite em formato de gotinha.", imagem: "imagens/hersheys-kisses.jpg" },
    { id: 4, nome: "M&M's", categoria: "eua", preco: 8.90, descricao: "Confeitos de chocolate coloridos com casquinha crocante.", imagem: "imagens/mms.jpg" },
    { id: 5, nome: "Pop-Tarts", categoria: "eua", preco: 19.90, descricao: "Torradinha recheada de morango com cobertura doce.", imagem: "imagens/pop-tarts.jpg" },

    { id: 6, nome: "Coelho Branco (White Rabbit)", categoria: "china", preco: 15.90, descricao: "Bala macia de leite embrulhada em papel comestível.", imagem: "imagens/coelho-branco.jpg" },
    { id: 7, nome: "Biscoito de Arroz Want Want", categoria: "china", preco: 12.90, descricao: "Biscoito de arroz crocante e levemente doce.", imagem: "imagens/want-want.jpg" },
    { id: 8, nome: "Haw Flakes", categoria: "china", preco: 9.90, descricao: "Discos doces e azedinhos feitos de fruta espinheiro-chinês.", imagem: "imagens/haw-flakes.jpg" },
    { id: 9, nome: "Sachima", categoria: "china", preco: 13.90, descricao: "Barrinha macia de massa frita com calda doce.", imagem: "imagens/sachima.jpg" },
    { id: 10, nome: "Balas de Leite Wangzai", categoria: "china", preco: 11.90, descricao: "Balas macias com sabor de leite.", imagem: "imagens/wangzai.jpg" },


    { id: 11, nome: "Paçoca", categoria: "brasil", preco: 4.00, descricao: "Doce de amendoim que desmancha na boca.", imagem: "imagens/pacoca.jpg" },
    { id: 12, nome: "Sonho de Valsa", categoria: "brasil", preco: 3.00, descricao: "Bombom de chocolate com recheio cremoso e wafer.", imagem: "imagens/sonho-de-valsa.jpg" },
    { id: 13, nome: "Bis", categoria: "brasil", preco: 7.50, descricao: "Wafer crocante coberto com chocolate ao leite.", imagem: "imagens/bis.jpg" },
    { id: 14, nome: "Ouro Branco", categoria: "brasil", preco: 3.00, descricao: "Bombom crocante com recheio cremoso e cobertura de chocolate.", imagem: "imagens/ouro-branco.jpg" },
    { id: 15, nome: "Chokito", categoria: "brasil", preco: 3.50, descricao: "Barra com cobertura de chocolate ao leite e recheio crocante.", imagem: "imagens/chokito.jpg" },

    { id: 16, nome: "Madeleines Bonne Maman", categoria: "franca", preco: 18.90, descricao: "Bolinhos macios em formato de conchinha, com sabor amanteigado.", imagem: "imagens/madeleines.jpg" },
    { id: 17, nome: "Carambar", categoria: "franca", preco: 6.90, descricao: "Bala mastigável de caramelo.", imagem: "imagens/carambar.jpg" },
    { id: 18, nome: "Petit Écolier (LU)", categoria: "franca", preco: 17.90, descricao: "Biscoito amanteigado coberto com chocolate.", imagem: "imagens/petit-ecolier.jpg" },
    { id: 19, nome: "Pépito (LU)", categoria: "franca", preco: 15.90, descricao: "Biscoito crocante com cobertura de chocolate.", imagem: "imagens/pepito.jpg" },
    { id: 20, nome: "Chocolate Poulain", categoria: "franca", preco: 14.90, descricao: "Tablete de chocolate tradicional francês.", imagem: "imagens/poulain.jpg" },

    { id: 21, nome: "Chupa Chups", categoria: "espanha", preco: 2.50, descricao: "Pirulito redondo em vários sabores de fruta.", imagem: "imagens/chupa-chups.jpg" },
    { id: 22, nome: "Turrón", categoria: "espanha", preco: 24.90, descricao: "Doce de amêndoas e mel, típico do Natal espanhol.", imagem: "imagens/turron.jpg" },
    { id: 23, nome: "Polvorones", categoria: "espanha", preco: 19.90, descricao: "Biscoitinhos de amêndoa que se desmancham na boca.", imagem: "imagens/polvorones.jpg" },
    { id: 24, nome: "Galletas María", categoria: "espanha", preco: 12.90, descricao: "Biscoito doce e simples, muito comum no café da manhã.", imagem: "imagens/galletas-maria.jpg" },
    { id: 25, nome: "Bollycao", categoria: "espanha", preco: 8.90, descricao: "Pãozinho macio recheado com creme de chocolate.", imagem: "imagens/bollycao.jpg" }
];
var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
var categoriaAtual = "eua";
var nomesPaises = {
    eua: "Estados Unidos",
    china: "China",
    brasil: "Brasil",
    franca: "França",
    espanha: "Espanha"
};
var cupomAtual = "";
function dinheiro(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}
function buscarProduto(id) {
    for (var i = 0; i < produtos.length; i++) {
        if (produtos[i].id == id) {
            return produtos[i];
        }
    }
}
function mostrarAviso(texto) {
    var aviso = document.getElementById("aviso");
    aviso.textContent = texto;
    aviso.style.display = "block";
    setTimeout(function () {
        aviso.style.display = "none";
    }, 1500);
}
function mostrarProdutos(lista) {
    var area = document.getElementById("lista-produtos");
    area.innerHTML = "";

    if (lista.length == 0) {
        area.innerHTML = "<p>Nenhum snack encontrado.</p>";
        return;
    }

    for (var i = 0; i < lista.length; i++) {
        var p = lista[i];
        area.innerHTML += `
            <div class="produto">
                <img src="${p.imagem}" alt="${p.nome}">
                <h3>${p.nome}</h3>
                <p>${p.descricao}</p>
                <p class="preco">${dinheiro(p.preco)}</p>
                <button onclick="adicionarAoCarrinho(${p.id})">Adicionar</button>
            </div>
        `;
    }
}
function filtrarProdutos() {
    var texto = document.getElementById("busca").value.toLowerCase();
    var filtrados = [];

    for (var i = 0; i < produtos.length; i++) {
        var p = produtos[i];
        var categoriaOk = (p.categoria == categoriaAtual);
        var textoOk = p.nome.toLowerCase().includes(texto);

        if (categoriaOk && textoOk) {
            filtrados.push(p);
        }
    }

    mostrarProdutos(filtrados);
}
function mudarAba(pais, botao) {
    categoriaAtual = pais;
    var abas = document.querySelectorAll(".aba");
    for (var i = 0; i < abas.length; i++) {
        abas[i].classList.remove("ativo");
    }
    botao.classList.add("ativo");
    document.getElementById("titulo-aba").textContent = "Os 5 doces mais famosos: " + nomesPaises[pais];
    document.getElementById("busca").value = "";

    filtrarProdutos();
}
function adicionarAoCarrinho(id) {
    var achou = false;

    // se o doce já está no carrinho, só aumenta a quantidade
    for (var i = 0; i < carrinho.length; i++) {
        if (carrinho[i].id == id) {
            carrinho[i].quantidade++;
            achou = true;
        }
    }
    if (!achou) {
        carrinho.push({ id: id, quantidade: 1 });
    }

    mostrarAviso(buscarProduto(id).nome + " adicionado!");
    atualizarCarrinho();
}

function alterarQuantidade(id, mudanca) {
    for (var i = 0; i < carrinho.length; i++) {
        if (carrinho[i].id == id) {
            carrinho[i].quantidade += mudanca;

            if (carrinho[i].quantidade <= 0) {
                carrinho.splice(i, 1); // remove do array
            }
            break;
        }
    }
    atualizarCarrinho();
}

function removerItem(id) {
    for (var i = 0; i < carrinho.length; i++) {
        if (carrinho[i].id == id) {
            carrinho.splice(i, 1);
            break;
        }
    }
    atualizarCarrinho();
}

function limparCarrinho() {
    carrinho = [];
    cupomAtual = "";
    document.getElementById("cupom").value = "";
    document.getElementById("mensagem-cupom").textContent = "";
    atualizarCarrinho();
}

function calcularTotais() {
    var subtotal = 0;
    for (var i = 0; i < carrinho.length; i++) {
        subtotal += buscarProduto(carrinho[i].id).preco * carrinho[i].quantidade;
    }

    var desconto = 0;
    if (cupomAtual == "DOCE10") {
        desconto = subtotal * 0.10;
    }

    var frete = 0;
    var tipo = document.querySelector('input[name="entrega"]:checked').value;
    if (tipo == "entrega" && subtotal > 0 && subtotal < 60 && cupomAtual != "FRETEGRATIS") {
        frete = 7;
    }

    return {
        subtotal: subtotal,
        desconto: desconto,
        frete: frete,
        total: subtotal - desconto + frete
    };
}

function atualizarCarrinho() {
    var lista = document.getElementById("lista-carrinho");
    var quantidadeTotal = 0;
    lista.innerHTML = "";

    if (carrinho.length == 0) {
        lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
    }

    for (var i = 0; i < carrinho.length; i++) {
        var item = carrinho[i];
        var p = buscarProduto(item.id);
        quantidadeTotal += item.quantidade;

        lista.innerHTML += `
            <li class="item-carrinho">
                <span class="item-nome">${p.nome}</span>
                <div class="controle">
                    <button class="mini" onclick="alterarQuantidade(${p.id}, -1)">-</button>
                    <span>${item.quantidade}</span>
                    <button class="mini" onclick="alterarQuantidade(${p.id}, 1)">+</button>
                </div>
                <span>${dinheiro(p.preco * item.quantidade)}</span>
                <button class="remover" onclick="removerItem(${p.id})">X</button>
            </li>
        `;
    }

    var t = calcularTotais();
    document.getElementById("subtotal").textContent = dinheiro(t.subtotal);
    document.getElementById("desconto").textContent = "- " + dinheiro(t.desconto);
    document.getElementById("frete").textContent = dinheiro(t.frete);
    document.getElementById("total").textContent = dinheiro(t.total);
    document.getElementById("contador").textContent = quantidadeTotal;

    var tipo = document.querySelector('input[name="entrega"]:checked').value;
    var campoEndereco = document.getElementById("campo-endereco");
    if (tipo == "entrega") {
        campoEndereco.classList.remove("escondido");
    } else {
        campoEndereco.classList.add("escondido");
    }

    atualizarParcelas();

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}


function aplicarCupom() {
    var codigo = document.getElementById("cupom").value.toUpperCase().trim();
    var mensagem = document.getElementById("mensagem-cupom");

    if (codigo == "DOCE10") {
        cupomAtual = codigo;
        mensagem.textContent = "Cupom aplicado: 10% de desconto!";
        mensagem.style.color = "green";
    } else if (codigo == "FRETEGRATIS") {
        cupomAtual = codigo;
        mensagem.textContent = "Cupom aplicado: frete grátis!";
        mensagem.style.color = "green";
    } else {
        cupomAtual = "";
        mensagem.textContent = "Cupom inválido.";
        mensagem.style.color = "red";
    }

    atualizarCarrinho();
}

function mostrarCampos() {
    var forma = document.getElementById("forma").value;

    document.getElementById("campo-pix").classList.add("escondido");
    document.getElementById("campo-cartao").classList.add("escondido");
    document.getElementById("campo-dinheiro").classList.add("escondido");

    if (forma == "pix") {
        document.getElementById("campo-pix").classList.remove("escondido");
    }
    if (forma == "cartao") {
        document.getElementById("campo-cartao").classList.remove("escondido");
    }
    if (forma == "dinheiro") {
        document.getElementById("campo-dinheiro").classList.remove("escondido");
    }
}

function atualizarParcelas() {
    var select = document.getElementById("parcelas");
    var escolhida = select.value;
    var total = calcularTotais().total;

    select.innerHTML = "";
    for (var i = 1; i <= 3; i++) {
        select.innerHTML += `<option value="${i}">${i}x de ${dinheiro(total / i)}</option>`;
    }

    if (escolhida != "") {
        select.value = escolhida;
    }
}

function finalizarCompra() {
    var nome = document.getElementById("nome").value.trim();
    var telefone = document.getElementById("telefone").value.trim();
    var endereco = document.getElementById("endereco").value.trim();
    var forma = document.getElementById("forma").value;
    var tipo = document.querySelector('input[name="entrega"]:checked').value;
    var total = calcularTotais().total;

    // ----- Validações -----
    if (carrinho.length == 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    if (nome == "") {
        alert("Digite seu nome!");
        return;
    }

    if (!/^\d{10,11}$/.test(telefone)) {
        alert("Digite um telefone válido com DDD (só números)!");
        return;
    }

    if (tipo == "entrega" && endereco == "") {
        alert("Digite o endereço de entrega!");
        return;
    }

    if (forma == "") {
        alert("Escolha uma forma de pagamento!");
        return;
    }

    if (forma == "cartao") {
        var numero = document.getElementById("numero-cartao").value;
        var validade = document.getElementById("validade").value;
        var cvv = document.getElementById("cvv").value;

        if (!/^\d{16}$/.test(numero)) {
            alert("O cartão precisa ter 16 números!");
            return;
        }
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(validade)) {
            alert("Validade inválida! Use o formato MM/AA.");
            return;
        }
        if (!/^\d{3}$/.test(cvv)) {
            alert("O CVV precisa ter 3 números!");
            return;
        }
    }

    if (forma == "dinheiro") {
        var troco = document.getElementById("troco").value;
        if (troco != "" && Number(troco) < total) {
            alert("O valor do troco precisa ser maior que o total do pedido!");
            return;
        }
    }

    var numeroPedido = Math.floor(Math.random() * 90000) + 10000;
    var textoEntrega = (tipo == "entrega") ? "Entrega em: " + endereco : "Retirada na loja";

    document.getElementById("modal-mensagem").textContent =
        "Obrigado, " + nome + "! Pedido nº " + numeroPedido + ". " + textoEntrega + ".";

    var listaModal = document.getElementById("modal-itens");
    listaModal.innerHTML = "";
    for (var i = 0; i < carrinho.length; i++) {
        var p = buscarProduto(carrinho[i].id);
        var li = document.createElement("li");
        li.textContent = carrinho[i].quantidade + "x " + p.nome;
        listaModal.appendChild(li);
    }

    document.getElementById("modal-total").textContent = "Total: " + dinheiro(total) + " (" + forma + ")";
    document.getElementById("modal").classList.remove("escondido");

    limparCarrinho();
    var campos = ["nome", "telefone", "endereco", "numero-cartao", "validade", "cvv", "troco"];
    for (var j = 0; j < campos.length; j++) {
        document.getElementById(campos[j]).value = "";
    }
    document.getElementById("forma").value = "";
    mostrarCampos();
}

function fecharModal() {
    document.getElementById("modal").classList.add("escondido");
}

document.getElementById("titulo-aba").textContent = "Os 5 doces mais famosos: " + nomesPaises[categoriaAtual];
filtrarProdutos();
atualizarCarrinho();