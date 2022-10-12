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
  let altura = inAltura.value.replace(',', '.')
  altura = Number(altura)
  let pesoh = 0

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
     pesoh = 22 * Math.pow(altura, 2) // Math.pow eleva ao quadrado
  } else {
     pesoh = 21 * Math.pow(altura, 2)
  }
  //alert(pesoh)
  //Apresenta a resposta (altera o conteúdo da linha outResposta)
  outResposta.textContent = nome + ': Seu peso ideal é ' + pesoh.toFixed(3) + 'kg'
}

//Cria referência ao elemento btCalcular e registra um evento associado a function calcularPeso
let btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularPeso)

let btLimpar = document.getElementById('btLimpar')
btLimpar.addEventListener('click', limparCampos)

function limparCampos() {
   document.getElementById('inNome').value =''
   //document.getElementsByName('sexo').checked =false 
   document.getElementById('inAltura').value = ''
   document.getElementById('outResposta').textContent=''

  var inputs = document.querySelectorAll('input[type="radio"]');
  for (var i = 0, l = inputs.length; i < l; i++){
    inputs[i].checked = false;
  }
}
