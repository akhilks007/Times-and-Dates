const clock = document.querySelector('.container-sm');
const tittle = document.querySelector('title');

function tick(){

    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
        `;
    clock.innerHTML = html;
    tittle.textContent = h +" : "+ m +" : "+ s;

}

setInterval(tick, 1000);