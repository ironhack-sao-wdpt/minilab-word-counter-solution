// 1. Ter acesso as referências dos elementos HTML: textarea, button e span

const textareaElement = document.getElementById("textBox");
const btnElement = document.getElementById("btnCountWords");
const wordCountElement = document.getElementById("wordCount");

// 2. Detectar o clique no botão

btnElement.addEventListener("click", () => {
  // 3. Extrair o que foi digitado pelo usuário no textarea

  // A propriedade .value só existe em inputs
  console.log(textareaElement.value);

  // 4. Contar quantas palavras têm no texto extraído

  let wordCount;

  if (textareaElement.value.length < 1) {
    wordCount = 0;
  } else {
    wordCount = textareaElement.value.split(" ").length;
  }

  // 5. Atualizar o span com a quantidade de palavras
  wordCountElement.innerText = wordCount;
});
