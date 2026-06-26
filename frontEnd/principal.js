const rotas = {
    "/": () => {
        const root = document.createElement('div');
        root.style.padding = '60px 10%';

        const h1 = document.createElement('h1');
        h1.textContent = "Bem-vindo ao Astroworld!";

        const p = document.createElement('p');
        p.textContent = "Explore os biomas e mobs do mundo de Astroworld.";

        root.appendChild(h1);
        root.appendChild(p);
        return root;
    },
    "/biomas": () => {
         const root = document.createElement('div');
         return root;
    },
    "/mobs": () => {
        const root = document.createElement('div');
        return root;
    },
};

//CRIAÇÃO DO HEADER

const Criarheader = () => {
    const header = document.createElement("header");
    const div = document.createElement("div");
    div.classList.add("logo");
    div.textContent = "ASTROWORLD";
    const nav = document.createElement("nav");
    nav.setAttribute("id", "subnav");
    const a1 = criarLink('inicio', '/');
    const a2 = criarLink('biomas', '/biomas');
    const a3 = criarLink('mobs', '/mobs');

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
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.textContent = "©2026 ASTROWORLD. Todos os direitos reservados.";
    footer.appendChild(p);
    return footer;
}


//RENDERIZAÇÃO DAS ROTAS
function renderizandoRotas(path) {
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
        root.appendChild(pagina(id));
    } else {
        root.innerHTML = `<h1>404</h1><p>Página não encontrada.</p>`;
    }
}

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