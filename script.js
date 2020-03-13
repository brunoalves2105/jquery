$(function(){

// evento click
$("#esconder").click(function () {
    $(".exemplos").css("display", "none");
});
var cont_html = $("#paragrafo").html();
console.log(cont_html);

// mudar conteudo html
cont_html = $("#paragrafo").html("mudar conteudo");
console.log(cont_html);

// seleciona e modifica os attr
var parag_link = $("#paragrafo-link").attr("href");
console.log(parag_link);

parag_link = $("#paragrafo-link").attr("href", "http://udemy.com");
console.log(parag_link);

var parag_empty = $("#empty").text();
console.log(parag_empty);
$("#empty").empty(); // remove texto
$("#empty").remove(); // remove toda a div 

// loop com each

var lista = ['javascript', 'html', 'css', 'jquery', 'ajax']; //array
$(lista).each(function (indice, valor) {
    console.log("este elemento de indice [" + indice + "] tem o valor de : " + valor);
});

var dados = {
    'nome': 'bruno',
    'cpf': '123456789',
    'tel': '078028587'
};
$.each(dados, function (chave, valor) {
    console.log("a chave " + chave + " tem o valor de : " + valor);
});

// pegando os valores de uma lista
var interesse = $("#interesse li");
$.each(interesse, function (indice, valor) {
    console.log($(valor).text());
});

// pegando o valor do input
var campo_nome = $("#campo_nome").val();
console.log(campo_nome);

// pegando o valor do campo selecionado
var local = $("#local").val();
console.log(local);
$("#local").find(":selected").text();
console.log($("#local").find(":selected").text());

// pegando o valor atualizado do campo selecionado
$("#local").change(function () {
    var novo_select = $("#local").find(":selected").text();
    console.log(novo_select);
});

// pegando o valor de radio button
console.log($("input[name=genero]:checked").val());

// pegando o conteudo do campo selecionado
console.log($("input[name=genero]:checked").parent("span").text());

// pegando valores atualizados do checkbox
$("input[name='cursos']").change(function () {
    var check_select = $("input[name='cursos']:checked");
    var texto = [];
    $(check_select).each(function (indice, valor) {
        texto.push($(valor).parent("span").text());
    });

    console.log(texto);
});

// adicionando - removendo e alternando classe CSS

$("#add_styling").click(function () {
    $("#paragrafo2").addClass("styling");
});

$("#remove_styling").click(function(){
    $("#paragrafo2").removeClass("styling");
});

$("#alternar_styling").click(function(){
    $("#paragrafo2").toggleClass("styling");
});

// adicionando eventos em conjunto
$("#enviar_nome").hide();
$("#c_nome").keyup(function(){
    var conteudo = $("#c_nome").val();
    if(conteudo){
        $("#enviar_nome").show();
    } else {
        $("#enviar_nome").hide();
    }
});

// efeitos

$("#btn-esconder").click(function(){
    $(this).hide(1000,function(){
        $("#txt-escondido").show();
    });
});

$("#btn").click(function(){
    $(this).toggleClass("flip"); 
    $("#toggle-content").fadeToggle(); // fadeToggle - slideToggle
});

// animate

$("#mudar-quad").click(function(){
    $("#quadrado").animate({ // a propriedade animate não muda background
        width: "+=200px", // propriedades CSS com " - " deve ser escrita em camelCase ex: "paddingLeft"
    },3000).animate({
        height: "+=200px"
    },3000, function(){
        $("#quadrado").css("background-color","green");
    });

});

});