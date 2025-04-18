function validarFormulario(e) {
    const nome = document.querySelector('input[placeholder="Nome"]').value.trim();
    const email = document.querySelector('input[placeholder="Email"]').value.trim();
    const mensagem = document.querySelector('textarea[placeholder="Mensagem"]').value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha os campos obrigatórios: Nome, Email e Mensagem.");
      e.preventDefault();
      return false;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      alert("Por favor, insira um e-mail válido.");
      e.preventDefault();
      return false;
    }

    alert("Mensagem enviada com sucesso!");
  }

  function tornarImagensClicaveis() {
    const imagens = document.querySelectorAll(".portfolio-item img");
    imagens.forEach(img => {
      const url = img.src;
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      img.parentNode.insertBefore(link, img);
      link.appendChild(img);
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", validarFormulario);
    tornarImagensClicaveis();
  });