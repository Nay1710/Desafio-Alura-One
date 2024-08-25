const textArea = document.querySelector(".textarea");
const mensagem = document.querySelector(".mensagem");
const botaoCriptografar = document.querySelector('.botao__criptografar');
const botaoDescriptografar = document.querySelector('.botao__descriptografar');
const elementoComImagem = document.querySelector('.mensagem');

mensagem.addEventListener('input', mostrarTexto);


function mostrarTexto() {
  if (mensagem.value === "") {
      elementoComImagem.style.backgroundImage = "url('./IMG/cripto.jpg')"; // Restaura a imagem de fundo
  } else {
      elementoComImagem.style.backgroundImage = "none"; // Remove a imagem de fundo
  }
  mensagem.style.display = 'block';
}


function btnCriptografar () {
    const textoCriptografado = criptografar (textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = "";
    mostrarTexto();
}

function criptografar (stringEncriptada) {

let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
stringEncriptada = stringEncriptada.toLowerCase();

for (i=0; i< matrizCodigo.length; i++){
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

    }
}

return stringEncriptada;

}

function btnDescriptografar () {
    const textoDescriptografado = descriptografar (textArea.value);
    mensagem.value = textoDescriptografado;
    textArea.value = "";
    mostrarTexto();
}

function descriptografar (stringDesencriptada) {

let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
stringDesencriptada = stringDesencriptada.toLowerCase();

for (i=0; i< matrizCodigo.length; i++){
    if (stringDesencriptada.includes(matrizCodigo[i][0])) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

    }
}

return stringDesencriptada;

}

function copiarTexto() {
    const mensagem = document.getElementById('mensagem'); // Obtém o elemento textarea
    const textoCopiado = mensagem.value; // Obtém o valor (texto) do textarea
  
    navigator.clipboard.writeText(textoCopiado)
      .then(() => {
        console.log('Texto copiado com sucesso!');
        alert('Texto copiado para a área de transferência!');
      })
      .catch(err => {
        console.error('Falha ao copiar:', err);
      });
}

function lerTextoDigitado(){
  var mensagem = new SpeechSynthesisUtterance();
  const textoDoUsuario = document.querySelector(".textarea").value;
  mensagem.text = textoDoUsuario;
  speechSynthesis.speak(mensagem);
}
lerTextoDigitado();


function lerTextoResultado(){
  let mensagem = new SpeechSynthesisUtterance();
  const textoDoUsuario = document.querySelector(".mensagem").value;
  mensagem.text = textoDoUsuario;
  speechSynthesis.speak(mensagem);
 }
 lerTexto();


