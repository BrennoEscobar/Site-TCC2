function DarkMode() {
    let minhaImagem = document.getElementById('imgDark');
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Salvar a preferência do usuário em um cookie
    if (element.classList.contains("dark-mode")) {
        setCookie('darkMode', 'enabled', 30);
        minhaImagem.setAttribute('src', '../img/light.png');
    } else {
        setCookie('darkMode', 'disabled', 30);
        minhaImagem.setAttribute('src', '../img/dark.png');
    }
}

