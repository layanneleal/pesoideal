function calcularPeso() {
  //Cria refência aos elementos manipulados pela function
  let inNome = document.getElementById('inNome')
  let rbMasculino = document.getElementById('rbMasculino')
  let rbFeminino = document.getElementById('rbFeminino')
  let inAltura = document.getElementById('inAltura')
  let outResposta = document.getElementById('outResposta')

  //Obtem os conteúdos dos campos de entrada
  let nome = inNome.value.toUpperCase()
  let masculino = rbMasculino.checked
  let feminino = rbFeminino.checked
  let altura = Number(inAltura.value).replace(',', '.')
  let peso = 0

  //Verifica se o nome foi preenchido e sexo selecionado
  if (nome == '' || (masculino == false && feminino == false)) {
    alert('Por favor, informe o nome e selecione o sexo.')
    inNome.focus() //posiciona (joga o foco) no campos de edição
    return
  }
  
  //Se alrura vazio(0) ou NaN (ex: se for informado um texto)
  if (altura == 0 || isNaN(altura)) {
    alert('Por favor, informe a altura corretamente.')
    inAltura.focus()
    return
  }

  //Se masculino == true
  if (masculino) {
     peso = 22 * 2//Math.pow(altura, 2) // Math.pow eleva ao quadrado
  } else {
     peso = 21 * 2//Math.pow(altura, 2)
  }
  //Apresenta a resposta (altera o conteúdo da linha outResposta)
  outResposta.textContent = nome + ': Seu peso ideal é ' + peso.toFixed(3) + 'kg'
}

//Cria referência ao elemento btCalcular e registra um evento associado a function calcularPeso
let btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularPeso)

