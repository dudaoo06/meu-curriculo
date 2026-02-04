const cargo = "Programadora Junior | ADS";
let i = 0;

function typeWriter() {
    const el = document.getElementById("typing");
    if (el && i < cargo.length) {
        el.innerHTML += cargo.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

document.getElementById("toggle-theme").addEventListener("click", () => {
    const doc = document.documentElement;
    const isLight = doc.getAttribute("data-theme") === "light";
    doc.setAttribute("data-theme", isLight ? "dark" : "light");
    document.getElementById("toggle-theme").innerHTML = isLight ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
});

window.onload = typeWriter;