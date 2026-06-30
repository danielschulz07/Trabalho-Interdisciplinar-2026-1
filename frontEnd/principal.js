import { mainMobs } from "./mobs/mobs.js";
import { mainBiomas } from "./biomas/biomas.js";

const rotas = {
    "/": () => {
        const root = document.createElement('div-main');

        const h1 = document.createElement('h1');
        h1.textContent = "Bem-vindo ao Astroworld!";

        const p = document.createElement('p');
        p.textContent = "Explore o universo do Minecraft e descubra os biomas e mobs que habitam esse mundo incrível!!";

        root.appendChild(h1);
        root.appendChild(p);

        return root;
    },

    "/biomas": async (categoria, id) => {
        const root = document.createElement("div");
        root.appendChild(await mainBiomas(categoria, id));
        return root;
    },

    "/mobs": async (categoria, id) => {
        const root = document.createElement('div');
        root.appendChild(await mainMobs(categoria, id));
        return root;
    },
};

// CRIAÇÃO DO HEADER
const Criarheader = () => {
    const header = document.createElement("header");

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

const criarLink = (texto, link) => {
    const a = document.createElement('a');
    a.textContent = texto;
    a.setAttribute('href', link);
    a.setAttribute('data-link', '');
    return a;
}

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

const criaFooter = () => {
    const footerEl = document.getElementById('footer');
    const p = document.createElement('p');
    p.innerHTML = "© 2026 Astroworld. Todos os direitos reservados.";
    footerEl.appendChild(p);
}




// RENDERIZAÇÃO DAS ROTAS

async function renderizandoRotas(path) {
    const partes = path.split("/").filter(Boolean); // remove vazios
    const novoPath = "/" + (partes[0] || "");
    const categoria = partes[1] || null;
    const id = partes[2] || null;

    if (novoPath === "/index.html" || novoPath === "/") {
        const pagina = rotas["/"];
        const root = document.getElementById('root');
        root.innerHTML = '';
        root.appendChild(await pagina());
        return;
    }

    const pagina = rotas[novoPath];
    const root = document.getElementById('root');

    if (pagina) {
        root.innerHTML = '';
        root.appendChild(await pagina(categoria, id));
    } else {
        root.innerHTML = `<h1>404</h1><p>Página não encontrada.</p>`;
    }
}

criaFooter();

document.addEventListener("click", function (event) {
    if (event.target.matches("[data-link]")) {
        event.preventDefault();
        navegarPara(event.target.getAttribute("href"));
    }
});

function navegarPara(path) {
    history.pushState({}, "", path);
    renderizandoRotas(path);
}

window.addEventListener("popstate", function () {
    renderizandoRotas(window.location.pathname);
});