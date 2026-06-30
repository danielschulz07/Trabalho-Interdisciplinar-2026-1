let mobsData = {};

export const mainMobs = async (categoria, id) => {
    const res = await fetch('/frontEnd/mobs/imagens-mobs.json');
    mobsData = await res.json();

    const main = document.createElement('main');

    if (!document.getElementById('css-mobs')) {
        const linkcss = document.createElement('link');
        linkcss.id = 'css-mobs';
        linkcss.setAttribute('rel', 'stylesheet');
        linkcss.setAttribute('href', '/frontEnd/mobs/mobs.css');
        document.head.appendChild(linkcss);
    }

    if (categoria && id) {
        main.appendChild(await paginaMob(categoria, id));
    } else if (categoria === 'passive' || categoria === 'hostile') {
        main.appendChild(listaMobs(categoria));
    } else {
        main.appendChild(telaInicialMobs());
    }

    return main;
}

// TELA INICIAL
const telaInicialMobs = () => {
    const container = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = "MINECRAFT MOBS";
    container.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = "Bem-vindo à nossa coleção de Mobs!";
    container.appendChild(p);

    const subnav = document.createElement('div');
    subnav.classList.add('subnav');

    subnav.appendChild(cardMobsCategoria(
        'Mobs Passivos', 'passive', 'card-passive',
        'Criaturas pacíficas que nunca atacam...',
        mobsData.passive.length
    ));

    subnav.appendChild(cardMobsCategoria(
        'Mobs Hostis', 'hostile', 'card-hostile',
        'Criaturas perigosas que atacam jogadores...',
        mobsData.hostile.length
    ));

    container.appendChild(subnav);
    return container;
}

const cardMobsCategoria = (titulo, tipo, classe, descricao, qtd) => {
    const card = document.createElement('div');
    card.classList.add('card', classe);
    card.style.cursor = 'pointer';

    const info = document.createElement('div');
    info.classList.add('card-info');

    const h3 = document.createElement('h3');
    h3.textContent = titulo;
    info.appendChild(h3);

    const span = document.createElement('span');
    span.textContent = `${descricao} (${qtd} mobs)`;
    info.appendChild(span);

    card.appendChild(info);

    const mobAleatorio = mobsData[tipo][Math.floor(Math.random() * mobsData[tipo].length)];
    const img = document.createElement('img');
    img.src = mobAleatorio.url_imagem;
    img.alt = mobAleatorio.name;
    card.appendChild(img);

    card.addEventListener('click', () => {
        history.pushState({}, '', `/mobs/${tipo}`);
        window.dispatchEvent(new PopStateEvent('popstate'));
    });

    return card;
}

// LISTA DE MOBS
const listaMobs = (categoria) => {
    const container = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = categoria === 'passive' ? 'Mobs Passivos' : 'Mobs Hostis';
    container.appendChild(h2);

    const grid = document.createElement('div');
    grid.classList.add('cards-grid');

    mobsData[categoria].forEach(mob => {
        grid.appendChild(cardMob(mob, categoria));
    });

    container.appendChild(grid);
    return container;
}

const cardMob = (mob, categoria) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.cursor = 'pointer';

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

    card.addEventListener('click', () => {
        history.pushState({}, '', `/mobs/${categoria}/${mob.id}`);
        window.dispatchEvent(new PopStateEvent('popstate'));
    });

    return card;
}

// PÁGINA ESPECÍFICA DO MOB
const paginaMob = async (categoria, id) => {
    const container = document.createElement('div');
    container.classList.add('mob-detalhe');

    let mobInfo = null;
    try {
        const res = await fetch(`https://api.astroworldmc.com/api/v1/mobs/${id}`);
        const data = await res.json();
        mobInfo = data.data || data;
    } catch (e) {
        mobInfo = null;
    }

    const todos = [...mobsData.passive, ...mobsData.hostile];
    const mobImg = todos.find(m => m.id === id);

    if (!mobInfo && !mobImg) {
        const erro = document.createElement('p');
        erro.textContent = 'Mob não encontrado.';
        container.appendChild(erro);
        return container;
    }

    const nome = mobInfo?.name || mobImg?.name || id;
    const imagem = mobImg?.url_imagem || '';

    const hero = document.createElement('div');
    hero.classList.add('mob-hero');

    const img = document.createElement('img');
    img.src = imagem;
    img.alt = nome;
    img.classList.add('mob-hero-img');

    const heroInfo = document.createElement('div');
    heroInfo.classList.add('mob-hero-info');

    const h1 = document.createElement('h1');
    h1.textContent = nome;
    heroInfo.appendChild(h1);

    if (mobInfo) {
        const tipo = document.createElement('span');
        tipo.classList.add('mob-tipo');
        tipo.textContent = mobInfo.category || categoria;
        heroInfo.appendChild(tipo);

        const stats = document.createElement('div');
        stats.classList.add('mob-stats');

        stats.appendChild(criarStat('❤️ HP', mobInfo.hp));
        stats.appendChild(criarStat('⚔️ Dano (Normal)', mobInfo.damage?.normal));
        stats.appendChild(criarStat('✨ XP', `${mobInfo.xpDrop?.min}–${mobInfo.xpDrop?.max}`));

        heroInfo.appendChild(stats);

        if (mobInfo.behavior) {
            const section = criarSecao('Comportamento', mobInfo.behavior);
            heroInfo.appendChild(section);
        }

        if (mobInfo.drops?.length > 0) {
            const dropsEl = document.createElement('div');
            dropsEl.classList.add('mob-section');
            const dropsTitle = document.createElement('h3');
            dropsTitle.textContent = 'Drops';
            dropsEl.appendChild(dropsTitle);

            const dropsList = document.createElement('ul');
            mobInfo.drops.forEach(drop => {
                const li = document.createElement('li');
                li.textContent = `${drop.item} (${drop.count.min}–${drop.count.max}) — ${drop.chance}%`;
                dropsList.appendChild(li);
            });
            dropsEl.appendChild(dropsList);
            heroInfo.appendChild(dropsEl);
        }

        if (mobInfo.notes) {
            heroInfo.appendChild(criarSecao('Notas', mobInfo.notes));
        }
    }

    hero.appendChild(img);
    hero.appendChild(heroInfo);
    container.appendChild(hero);

    return container;
}

const criarStat = (label, valor) => {
    const div = document.createElement('div');
    div.classList.add('mob-stat');
    div.innerHTML = `<span class="stat-label">${label}</span><span class="stat-valor">${valor}</span>`;
    return div;
}

const criarSecao = (titulo, texto) => {
    const div = document.createElement('div');
    div.classList.add('mob-section');
    const h3 = document.createElement('h3');
    h3.textContent = titulo;
    const p = document.createElement('p');
    p.textContent = texto;
    div.appendChild(h3);
    div.appendChild(p);
    return div;
}