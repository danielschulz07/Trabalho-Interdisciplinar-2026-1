import { mainMobs, renderizarMobs } from "./mobs/mobs.js";

const rotas = {
    "/": () => {
        const root = document.createElement('div-main');

        const h1 = document.createElement('h1');
        h1.textContent = "Bem-vindo ao Astroworld!";

        const p = document.createElement('p');
        p.textContent = "Explore o universo do Minecraft e descubra os biomas e mobs que habitam esse mundo incrível na verção 1.21";

        root.appendChild(h1);
        root.appendChild(p);

        return root;
    },
    "/biomas": () => {
        const root = document.createElement('div');


        return root;
    },
    "/mobs": async (id) => {
        const root = document.createElement('div');
        if (id) {
            root.appendChild(await mainMobs(id));
        } else {
            root.appendChild(await mainMobs());
        }
        return root;
    },
};

//CRIAÇÃO DO HEADER
const Criarheader = () => {
    const header = document.createElement("header");
    const logo = document.createElement("div");
    logo.classList.add("logo");

    const div = document.createElement("div");
    div.classList.add("logo");

    const img = document.createElement("img");
    img.src = "/frontEnd/astroworld-logo.webp";
    img.alt = "Astroworld";

    const span = document.createElement("span");
    span.textContent = "ASTROWORLD";

    const nav = document.createElement("nav");
    nav.setAttribute("id", "subnav");
    const a1 = criarLink('inicio', '/');
    const a2 = criarLink('biomas', '/biomas');
    const a3 = criarLink('mobs', '/mobs');
    div.appendChild(img);
    div.appendChild(span);
    header.appendChild(div);
    header.appendChild(nav);
    nav.appendChild(a1);
    nav.appendChild(a2);
    nav.appendChild(a3);

    return header;
}
//CRIAÇÃO DO LINK PARA O HEADER
const criarLink = (texto, link) => {
    const a = document.createElement('a');
    a.textContent = texto;
    a.setAttribute('href', link);
    a.setAttribute('data-link', '');
    return a;
}


//CRIAÇÃO DO MAIN
const criarMain = () => {
    const linkcss = document.createElement('link');
    linkcss.setAttribute('rel', 'stylesheet');
    linkcss.setAttribute('href', '/frontEnd/principal.css');
    document.head.appendChild(linkcss);

    const headerEl = document.getElementById('header');
    headerEl.appendChild(Criarheader());
    renderizandoRotas(window.location.pathname);
}
criarMain();



//CRIAÇÃO DO FOOTER
const criaFooter = () => {
    const footerEl = document.getElementById('footer');
    const p = document.createElement('p');
    p.innerHTML = "© 2026 Astroworld. Todos os direitos reservados.";
    footerEl.appendChild(p);
}

//RENDERIZAÇÃO DAS ROTAS
async function renderizandoRotas(path) {
    let partes = path.split("/");
    let novoPath = "/" + partes[1];
    const id = partes[2] || null;
    if (novoPath === "/index.html") {
        novoPath = "/";
    }
    const pagina = rotas[novoPath];
    const root = document.getElementById('root');
    if (pagina) {
        root.innerHTML = '';
        root.appendChild(await pagina(id));
    } else {
        root.innerHTML = `<h1>404</h1><p>Página não encontrada.</p>`;
    }
}
criaFooter();
document.addEventListener("click", function (event) {
    if (event.target.matches("[data-link]")) {
        event.preventDefault();
        const novocaminho = event.target.getAttribute("href");
        navegarPara(novocaminho);
    }
});

function navegarPara(path) {
    history.pushState({}, "", path);
    renderizandoRotas(path);
}

window.addEventListener("popstate", function () {
    renderizandoRotas(window.location.pathname);
});