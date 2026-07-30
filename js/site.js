const dev = {
  nome: "Yuri Machado",
  idade: 19,
  cidade: "Magé, RJ",
  foco: ["Front-end", "Back-end"],
  tecnologias: ["HTML", "CSS", "JavaScript"],
};


console.log(
  "%cOlá! Bem-vindo ao Stack.dev 👋!",
  "color: #6c63ff; font-size: 20px;",
);

console.log("Criado por " + dev.nome + " - " + dev.cidade);

console.log("Áreas de interesse: " + dev.foco[0] + " e " + dev.foco[1]);

console.log("Tecnologias usadas neste site:");

for (let i = 0; i < dev.tecnologias.length; i++) {
  console.log("- " + dev.tecnologias[i]);
}

console.log("Gostou do site? Vamos trocar uma ideia!");

document.addEventListener("DOMContentLoaded", () => {

  const nomeEl = document.getElementById("nome");
  const cidadeEl = document.getElementById("cidade");
  const idadeEl = document.getElementById("idade");
  const focoEl = document.getElementById("foco");
  const tecnologiasEl = document.getElementById("tecnologias");


  if (nomeEl) nomeEl.textContent = dev.nome;
  if (cidadeEl) cidadeEl.textContent = dev.cidade;
  if (idadeEl) idadeEl.textContent = dev.idade + " anos";


  if (focoEl) {
    focoEl.textContent = dev.foco.join(" e ");
  }

  if (tecnologiasEl) {
    tecnologiasEl.innerHTML = ""; 

    dev.tecnologias.forEach((tech) => {
      const li = document.createElement("li");
      li.textContent = tech;
      tecnologiasEl.appendChild(li);
    });
  }
});
