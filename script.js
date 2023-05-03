

  const pagamentoSelect = document.getElementById('pagamento');
  const dinheiroForm = document.getElementById('dinheiro-form');
  const dinheiroInput = document.getElementById('dinheiro');
  const valorInput = document.getElementById('valor');
  const calcularTrocoButton = document.getElementById('calcular-troco');
  
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
    dinheiroInput.value = `R$ ${troco.toFixed(2)}`;
  });
  
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
  
    let dados = `Vendedor: ${vendedor}\n`;
    dados += `Nome do Cliente: ${nomeCliente}\n`;
    dados += `Endereço: ${endereco}\n`;
    dados += `Ponto de Referência: ${pontoReferencia}\n`;
    dados += `Telefone: ${telefone}\n`;
  
    if (valor) {
      dados += `Valor do Produto: R$ ${valor}\n`;
    }
  
    if (pagamento) {
      dados += `Forma de Pagamento: ${pagamento}\n`;
  
      if (pagamento === "dinheiro" && dinheiro) {
        dados += `Valor em Dinheiro: R$ ${dinheiro}\n`;
        dados += `Troco: R$ ${(dinheiro - valor).toFixed(2)}\n`;
      }
    }
  
    dados += `Receita: ${receita}\n`;
  
    const dadosSalvos = document.getElementById("dados-salvos");
    dadosSalvos.value = dados;
    document.getElementById("meuForm").reset();
  }
  


