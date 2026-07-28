const dev = {
  nome: "Yuri Machado",
  cidade: "Magé, RJ",
  foco: ["Front-end", "Back-end"],
  tecnologias: ["HTML", "CSS", "JavaScript"]
};

console.log("%cOlá! Bem-vindo ao Stack.dev 👋!", "color: blue; font-size: 20px;");

console.log("Criado por " + dev.nome + " - " + dev.cidade);

console.log("Áreas de interesse: " + dev.foco[0] + " e " + dev.foco[1]);

console.log("Tecnologias usadas neste site:");

for (let i = 0; i < dev.tecnologias.length; i++) {
  console.log("- " + dev.tecnologias[i]);
}

console.log("Gostou do site? Vamos trocar uma ideia!");
