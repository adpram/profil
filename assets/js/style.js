const text = "Halo, I'm Adi.";
const speed = 100;

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("halo").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;