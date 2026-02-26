 /* ===== PESQUISA ===== */

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

function pesquisarNivel() {
  const input = document.getElementById("searchInput").value;

  if (input === "") {
    alert("Digite o nome de um Nível");
    return;
  }

  const idProcurado = normalizarTexto(input);
  const elemento = document.getElementById(idProcurado);

  if (elemento) {
    elemento.open = true;

    elemento.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    elemento.style.backgroundColor = "#ffeaa7";

    setTimeout(() => {
      elemento.style.backgroundColor = "";
    }, 2000);
  } else {
    alert("Nível não encontrado");
  }
};

//função para fechar os details
    const details = document.querySelectorAll("details");

    details.forEach(target => {
    target.addEventListener("toggle", () => {

    if (target.open) {
      details.forEach(d => {
        if (d !== target) {
          d.removeAttribute("open");
        }
      });
    }

      });
  });
