let mobsData = {};

export const mainMobs = async (id) => {
    const res = await fetch('/frontEnd/mobs/imagens-mobs.json');
    mobsData = await res.json();

    const main = document.createElement('main');
    const linkcss = document.createElement('link');
    linkcss.setAttribute('rel', 'stylesheet');
    linkcss.setAttribute('href', '/frontEnd/mobs/mobs.css');
    document.head.appendChild(linkcss);

    if (id === 'passive' || id === 'hostile') {
        
        main.appendChild(listaMobs(id));
    } else {
        
        main.appendChild(telaInicial());
    }

    return main;
}

// Dois cards: Passivos e Hostis
const telaInicial = () => {
    const container = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = "MINECRAFT MOBS";
    container.appendChild(h1);

    const subnav = document.createElement('div');
    subnav.classList.add('subnav');

    subnav.appendChild(cardCategoria('Mobs Passivos', 'passive'));
    subnav.appendChild(cardCategoria('Mobs Hostis', 'hostile'));

    container.appendChild(subnav);
    return container;
}


const cardCategoria = (titulo, tipo) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.cursor = 'pointer';

    const h3 = document.createElement('h3');
    h3.textContent = titulo;
    card.appendChild(h3);

    card.addEventListener('click', () => {
        history.pushState({}, '', `/mobs/${tipo}`);
        window.dispatchEvent(new PopStateEvent('popstate'));
    });

    return card;
}


const listaMobs = (tipo) => {
    const container = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = tipo === 'passive' ? 'Mobs Passivos' : 'Mobs Hostis';
    container.appendChild(h2);

    const grid = document.createElement('div');
    grid.classList.add('cards-grid');

    mobsData[tipo].forEach(mob => {
        grid.appendChild(cardMobs(mob));
    });

    container.appendChild(grid);
    return container;
}

export const renderizarMobs = (tipo, container) => {
    const grid = document.createElement('div');
    grid.classList.add('cards-grid');

    mobsData[tipo].forEach(mob => {
        grid.appendChild(cardMobs(mob.name, mob.url_imagem));
    });

    container.appendChild(grid);
}
export const subnavCard = (mobs) => {
    const subnav = document.createElement('div');
    subnav.classList.add('subnav');
    card.addEventListener("click", () => {
        history.pushState({}, "", `/mobs/${mobs.id}`);
        window.dispatchEvent(new PopStateEvent("popstate"));
    });
    return subnav;
}

export const cardMobs = (mob) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const info = document.createElement('div');
    info.classList.add('card-info');
    const h3 = document.createElement('h3');
    h3.textContent = mob.name;
    info.appendChild(h3);

    const img = document.createElement('img');
    img.src = mob.url_imagem;
    img.alt = mob.name;

    card.appendChild(info);
    card.appendChild(img);

    return card;
}