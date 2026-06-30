let biomasData = {};

export const mainBiomas = async (categoria, id) => {
    const res = await fetch("/frontEnd/biomas/biomas.json");
    biomasData = await res.json();

    const main = document.createElement("main");

    if (!document.getElementById("css-biomas")) {
        const linkcss = document.createElement("link");
        linkcss.id = "css-biomas";
        linkcss.rel = "stylesheet";
        linkcss.href = "/frontEnd/biomas/biomas.css";
        document.head.appendChild(linkcss);
    }

    if (categoria && id) {
        // /biomas/overworld/plains → página específica do bioma
        main.appendChild(paginaBioma(categoria, id));
    } else if (categoria) {
        // /biomas/overworld → lista de biomas
        main.appendChild(listaBiomas(categoria));
    } else {
        // /biomas → tela inicial
        main.appendChild(telaInicialBiomas());
    }

    return main;
};

function telaInicialBiomas() {
    const container = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "MINECRAFT BIOMES";

    const p = document.createElement("p");
    p.textContent = "Escolha uma dimensão para explorar";

    const subnav = document.createElement("div");
    subnav.classList.add("subnav");

    subnav.appendChild(cardBiomasCategoria("Overworld", "overworld", "card-overworld", "Todos os biomas do mundo normal", biomasData.overworld.length, biomasData.overworld[0].image));
    subnav.appendChild(cardBiomasCategoria("Nether", "nether", "card-nether", "Todos os biomas do Nether", biomasData.nether.length, biomasData.nether[0].image));
    subnav.appendChild(cardBiomasCategoria("The End", "end", "card-end", "Todos os biomas do End", biomasData.end.length, biomasData.end[0].image));

    container.appendChild(h1);
    container.appendChild(p);
    container.appendChild(subnav);

    return container;
}

function cardBiomasCategoria(titulo, tipo, classe, descricao, qtd, imgSrc) {
    const card = document.createElement("div");
    card.classList.add("card", classe);

    const info = document.createElement("div");
    info.classList.add("card-info");

    const h3 = document.createElement("h3");
    h3.textContent = titulo;

    const span = document.createElement("span");
    span.textContent = descricao;

    const count = document.createElement("span");
    count.textContent = `${qtd} biomas`;
    count.style.fontWeight = "700";

    info.appendChild(h3);
    info.appendChild(span);
    info.appendChild(count);

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = titulo;

    card.appendChild(info);
    card.appendChild(img);

    card.addEventListener("click", () => {
        history.pushState({}, "", `/biomas/${tipo}`);
        window.dispatchEvent(new PopStateEvent("popstate"));
    });

    return card;
}

function listaBiomas(categoria) {
    const container = document.createElement("div");

    const nomes = { overworld: "Overworld", nether: "Nether", end: "The End" };
    const h2 = document.createElement("h2");
    h2.textContent = nomes[categoria] || categoria;
    h2.style.cssText = "font-size:22px; font-weight:900; color:#fff; margin-bottom:20px; letter-spacing:2px;";
    container.appendChild(h2);

    const lista = document.createElement("div");
    lista.classList.add("lista-biomas");

    biomasData[categoria].forEach((bioma) => {
        const card = document.createElement("div");
        card.classList.add("card-bioma");
        card.style.cursor = 'pointer';

        const img = document.createElement("img");
        img.src = bioma.image;
        img.alt = bioma.name;

        const nome = document.createElement("h3");
        nome.textContent = bioma.name;

        card.appendChild(img);
        card.appendChild(nome);

        card.addEventListener('click', () => {
            history.pushState({}, '', `/biomas/${categoria}/${bioma.id}`);
            window.dispatchEvent(new PopStateEvent('popstate'));
        });

        lista.appendChild(card);
    });

    container.appendChild(lista);
    return container;
}

function paginaBioma(categoria, id) {
    const container = document.createElement("div");
    container.classList.add('bioma-detalhe');

    const bioma = biomasData[categoria]?.find(b => b.id === id);

    if (!bioma) {
        const erro = document.createElement('p');
        erro.textContent = 'Bioma não encontrado.';
        container.appendChild(erro);
        return container;
    }

    // Hero
    const hero = document.createElement('div');
    hero.classList.add('bioma-hero');

    const img = document.createElement('img');
    img.src = bioma.image;
    img.alt = bioma.name;
    img.classList.add('bioma-hero-img');

    const info = document.createElement('div');
    info.classList.add('bioma-hero-info');

    const h1 = document.createElement('h1');
    h1.textContent = bioma.name;
    info.appendChild(h1);

    const dim = document.createElement('span');
    dim.classList.add('bioma-dimensao');
    const nomes = { overworld: 'Overworld', nether: 'Nether', end: 'The End' };
    dim.textContent = nomes[categoria] || categoria;
    info.appendChild(dim);

    hero.appendChild(img);
    hero.appendChild(info);
    container.appendChild(hero);

    return container;
}