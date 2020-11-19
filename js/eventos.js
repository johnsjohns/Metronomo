document.getElementById('botao').onclick = () => { som() };
document.getElementById('mais').onmousedown = () => { aumentar() };
document.getElementById('mais').onmouseup = () => { pararAumentar() };
document.getElementById('mais').onmouseleave = () => { pararAumentar() };
document.getElementById('menos').onmousedown = () => { diminuir() };
document.getElementById('menos').onmouseup = () => { pararDiminuir() };
document.getElementById('menos').onmouseleave  = () => { pararDiminuir() };

document.getElementById('volume').onmousemove = () => { volume() };