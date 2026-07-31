const dev = {
  nome: "Yuri Machado",
  idade: 19,
  cidade: "Magé, RJ",
  foco: ["Front-end", "Back-end"],
  tecnologias: ["HTML", "CSS", "JavaScript"],
};

console.log(
  "%cOlá! Bem-vindo ao Stack.dev 👋!",
  "color: #6c63ff; font-size: 20px;"
);


console.log(
  "%cEste site foi criado com muito carinho e dedicação por mim, Yuri Machado, para compartilhar meus conhecimentos e experiências como desenvolvedor web.",
  "color: #ffffff; font-size: 14px;"
);

console.log("Criado por " + dev.nome + " - " + dev.cidade);
console.log("Áreas de interesse: " + dev.foco[0] + " e " + dev.foco[1]);
console.log("Tecnologias usadas neste site:");

dev.tecnologias.forEach((tech) => {
  console.log("- " + tech);
});

const storageKey = "stackdevFeedback";

const getElement = (id) => document.getElementById(id);

const loadComments = () => {
  const stored = localStorage.getItem(storageKey);
  return stored ? JSON.parse(stored) : [];
};

const saveComments = (comments) => {
  localStorage.setItem(storageKey, JSON.stringify(comments));
};

const renderProfile = () => {
  const nomeEl = getElement("nome");
  const cidadeEl = getElement("cidade");
  const idadeEl = getElement("idade");
  const focoEl = getElement("foco");
  const tecnologiasEl = getElement("tecnologias");

  if (nomeEl) nomeEl.textContent = dev.nome;
  if (cidadeEl) cidadeEl.textContent = dev.cidade;
  if (idadeEl) idadeEl.textContent = `${dev.idade} anos`;
  if (focoEl) focoEl.textContent = dev.foco.join(" e ");

  if (tecnologiasEl) {
    tecnologiasEl.innerHTML = "";
    dev.tecnologias.forEach((tech) => {
      const li = document.createElement("li");
      li.textContent = tech;
      tecnologiasEl.appendChild(li);
    });
  }
};

const renderComments = (comments) => {
  const listaComentarios = getElement("lista-comentarios");
  if (!listaComentarios) return;

  listaComentarios.innerHTML = "";

  if (comments.length === 0) {
    listaComentarios.innerHTML = "<li>Nenhum comentário enviado ainda.</li>";
    return;
  }

  comments.forEach(({ nome, comentario }) => {
    const li = document.createElement("li");
    li.textContent = `${nome} disse: ${comentario}`;
    listaComentarios.appendChild(li);
  });
};

const showMessage = (element, text, color) => {
  if (!element) return;
  element.textContent = text;
  element.style.color = color;
  setTimeout(() => {
    element.textContent = "";
  }, 4000);
};

const handleFeedbackSubmit = (event) => {
  event.preventDefault();

  const inputNome = getElement("feedback-nome");
  const inputComentario = getElement("feedback-comentario");
  const mensagem = getElement("mensagem-feedback");

  if (!inputNome || !inputComentario || !mensagem) return;

  const nomeDigitado = inputNome.value.trim();
  const comentarioDigitado = inputComentario.value.trim();

  if (!nomeDigitado || !comentarioDigitado) {
    showMessage(mensagem, "Erro: preencha todos os campos! 🤔​", "#ff6b6b");
    return;
  }

  const comments = loadComments();
  const updatedComments = [
    { nome: nomeDigitado, comentario: comentarioDigitado },
    ...comments,
  ];

  saveComments(updatedComments);
  renderComments(updatedComments);

  showMessage(mensagem, "Feedback enviado com sucesso! ​👍​ ", "#2dd4bf");
  event.target.reset();
};

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();

  const comments = loadComments();
  renderComments(comments);

  const form = getElement("form-feedback");

  if (form) {
    form.addEventListener("submit", handleFeedbackSubmit);
  }
});
