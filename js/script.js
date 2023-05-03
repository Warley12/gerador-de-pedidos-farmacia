$(function () {


    //HEADER
    $(window).scroll(function () {
          if($(this).scrollTop() > 200)
          {
              if (!$('.main_header').hasClass('fixed'))
              {
                  $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
                      {
                          'top': '0px'
                      }, 500);
              }
          }
          else
          {
              $('.main_header').removeClass('fixed');
          }
    });


});

const pagamentoSelect = document.getElementById('pagamento');
    const dinheiroForm = document.getElementById('dinheiro-form');
    const dinheiroInput = document.getElementById('dinheiro');
    const valorInput = document.getElementById('valor');
    const trocoLabel = document.getElementById('troco-label');
    const calcularTrocoButton = document.getElementById('calcular-troco');
    const trocoDiv = document.getElementById('troco-div');

    pagamentoSelect.addEventListener('change', () => {
      if (pagamentoSelect.value === 'dinheiro') {
        dinheiroForm.style.display = 'block';
      } else {
        dinheiroForm.style.display = 'none';
      }
    });

    calcularTrocoButton.addEventListener('click', () => {
      const valor = parseFloat(valorInput.value);
      const dinheiro = parseFloat(dinheiroInput.value || 0);
      const troco = dinheiro - valor;
      trocoLabel.textContent = 'R$ ' + troco.toFixed(2);
      trocoDiv.style.display = 'block';
    });

// função mascara

  document.addEventListener('DOMContentLoaded', function() {
    $('#telefone').mask('(00) 00000-0000');
    


  });


    //função gerar
    function salvarDados() {
      const form = document.getElementById("meuForm");

      const vendedor = form.elements["vendedor"].value;
      const nomeCliente = form.elements["nome-cliente"].value;
      const endereco = form.elements["endereco"].value;
      const pontoReferencia = form.elements["ponto-referencia"].value;
      const telefone = form.elements["telefone"].value;
      const valor = form.elements["valor"].value;
      const pagamento = form.elements["pagamento"].value;
      const dinheiro = form.elements["dinheiro"].value;


      const receita = form.elements["receita"].value;

      let dados = `*Vendedor*: ${vendedor}\n`;
      dados += `*Nome do Cliente(a)*: ${nomeCliente}\n`;
      dados += `*Endereço*: ${endereco}\n`;
      dados += `*Ponto de Referência*: ${pontoReferencia}\n`;
      dados += `*Telefone*: ${telefone}\n`;

      if (valor) {
        dados += `*Valor do Produto*: R$ ${valor}\n`;
      }

      if (pagamento) {
        dados += `*Forma de Pagamento*: ${pagamento}\n`;

        if (pagamento === "dinheiro" && dinheiro) {
          dados += `*Valor em dinheiro*: R$ ${dinheiro}\n`;
        }
      }

      dados += `*Receita*: ${receita}\n`;

      const dadosSalvos = document.getElementById("dados-salvos");
      dadosSalvos.value = dados;
      document.querySelectorAll('#meuForm input:not(#vendedor):not([type="button"]), #meuForm select').forEach(function (input) {
        input.value = '';
      });



    }

    function enviarWhatsApp() {
  const textarea = document.querySelector('#dados-salvos');
  if (!textarea) {
    console.error('Elemento não encontrado');
    return;
  }

  const texto = encodeURIComponent(textarea.value);
  const numero = "+5562984357019";
  const url = `https://wa.me/${numero}?text=${texto}`;
  window.open(url, '_blank');
}
