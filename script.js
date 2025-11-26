// Menu responsivo
const btnMenu = document.getElementById("btn-menu");
const nav = document.getElementById("nav");

btnMenu.addEventListener("click", () => {
    const ul = nav.querySelector("ul");
    ul.style.display = ul.style.display === "flex" ? "none" : "flex";
});

// Formulário com mensagem de sucesso
const form = document.getElementById("formContato");
const msg = document.getElementById("msg-sucesso");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.innerText = "Mensagem enviada com sucesso! Obrigado pelo contato 💖";
    form.reset();
});
