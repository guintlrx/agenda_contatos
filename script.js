document.getElementById("formularioContato").addEventListener("submit", function(event) {
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    adicionarContato(nome, telefone);
    limparFormulario();
});

function adicionarContato(nome, telefone) {
    var tabela = document.getElementById("tabelaContatos").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var colunaNome = novaLinha.insertCell(0);
    var colunaTelefone = novaLinha.insertCell(1);
    colunaNome.innerHTML = nome;
    colunaTelefone.innerHTML = telefone;
}

function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}