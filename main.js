function abrir() {
    window.open('/nfc_processada.html', "_self");

    localStorage.setItem("nome_da_empresa", document.form.nome_da_empresa.value);
    localStorage.setItem("endereco", document.form.endereco.value);
    localStorage.setItem("cnpf", document.form.cnpf.value);
    localStorage.setItem("nome_do_cliente", document.form.nome_do_cliente.value);
    localStorage.setItem("cpf", document.form.cpf.value);
    localStorage.setItem("forma_de_pagamento", document.form.forma_de_pagamento.value);
    localStorage.setItem("valor_total", document.form.valor_total.value);
}

function exibir() {
    document.querySelector(".nome_da_empresa").innerText = "Nome da empresa: " + localStorage.getItem("nome_da_empresa")

    document.querySelector(".endereco").innerText = "Endereço: " + localStorage.getItem("endereco")

    document.querySelector(".cnpf").innerText = "Cnpj: " + localStorage.getItem("cnpf")

    document.querySelector(".nome_do_cliente").innerText = "Nome do Cliente: " + localStorage.getItem("nome_do_cliente")

    document.querySelector(".cpf").innerText = "Cpf: " + localStorage.getItem("cpf")

    document.querySelector(".forma_de_pagamento").innerText = "Forma de pagamento: " + localStorage.getItem("forma_de_pagamento")

    document.querySelector(".valor_total_sem_impostos").innerText = `R$ ${localStorage.getItem("valor_total")}`



    var total = localStorage.getItem("valor_total")


    if (total > 0 && total <= 100) {

        total = total * 1.10;

        document.querySelector("#text_com_imposto").append("10 %")

        document.querySelector(".valor_total_com_impostos").innerText = `R$ ${total.toFixed(2)}`
    } else if (total > 100) {
        total = total * 1.20;

        document.querySelector("#text_com_imposto").append(" 20%")
        document.querySelector(".valor_total_com_impostos").innerText = `R$ ${total.toFixed(2)}`
    } else {

        document.querySelector("#text_sem_imposto").innerText = "Não é possível calcular para valores menores ou iguais a zero"

        document.querySelector("#text_com_imposto").innerText = ""

        document.querySelector(".valor_total_sem_impostos").innerText = ""
    }

}
