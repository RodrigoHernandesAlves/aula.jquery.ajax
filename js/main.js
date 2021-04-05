function consultaCep() {
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/ " + cep + "/json/";

    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("cep" + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
            //$("#logradouro").html(response.logradouro) // ajax 

        }
    })
}
$(function() {
    $(".cep").hide(); // faz sumiu as divs que mostram as informacoes e so aparece em cima no .show quando feita a consulta
    $(".barra-progresso").hide();
});



// requisicao ajax utiliando a biblioteca jquery