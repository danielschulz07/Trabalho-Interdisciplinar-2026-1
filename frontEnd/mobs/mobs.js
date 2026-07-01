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
    subnav.classList.add('categoria-grid');

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
    card.classList.add('categoria-card', classe);
    card.style.cursor = 'pointer';

    const info = document.createElement('div');
    info.classList.add('categoria-info');

    const h3 = document.createElement('h2');
    h3.textContent = titulo;
    info.appendChild(h3);

    const span = document.createElement('p');
    span.textContent = descricao;
    info.appendChild(span);

    const count = document.createElement('span');
    count.classList.add('categoria-count');
    count.textContent = `${qtd} mobs`;
    info.appendChild(count);

    card.appendChild(info);

    const mobAleatorio = mobsData[tipo][Math.floor(Math.random() * mobsData[tipo].length)];
    const img = document.createElement('img');
    img.classList.add('categoria-img');
    img.src = mobAleatorio.url_imagem;
    img.alt = mobAleatorio.name || mobAleatorio.id;
    card.appendChild(img);

    card.addEventListener('click', () => {
        history.pushState({}, '', `/mobs/${tipo}`);
        window.dispatchEvent(new PopStateEvent('popstate'));
    });

    return card;
}

const criarToast = (mensagem, tipo) => {
    const toast = document.createElement('div');
    toast.classList.add(
        'crud-toast',
        `crud-toast-${tipo}`,
        'crud-toast-visivel'
    );
    toast.textContent = mensagem;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 2500);
};

const criarFormularioMob = (categoria) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('crud-wrapper');

    const titulo = document.createElement('h3');
    titulo.textContent = '+ Novo Mob';
    titulo.classList.add('crud-titulo');
    wrapper.appendChild(titulo);

    const form = document.createElement('div');
    form.classList.add('crud-form');

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = 'Nome';
    inputNome.classList.add('crud-input');

    const inputTipo = document.createElement('input');
    inputTipo.type = 'text';
    inputTipo.placeholder = 'Tipo';
    inputTipo.classList.add('crud-input');

    const inputVida = document.createElement('input');
    inputVida.type = 'number';
    inputVida.placeholder = 'Vida';
    inputVida.classList.add('crud-input');

    const inputDescricao = document.createElement('input');
    inputDescricao.type = 'text';
    inputDescricao.placeholder = 'Descrição';
    inputDescricao.classList.add('crud-input', 'crud-input-wide');

    form.appendChild(inputNome);
    form.appendChild(inputTipo);
    form.appendChild(inputVida);
    form.appendChild(inputDescricao);

    let inputDano = null;
    if (categoria === 'hostile') {
        inputDano = document.createElement('input');
        inputDano.type = 'number';
        inputDano.placeholder = 'Dano';
        inputDano.classList.add('crud-input');
        form.appendChild(inputDano);
    }

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = '+ Adicionar';
    btn.classList.add('crud-btn-add');

    btn.addEventListener('click', () => {
        criarToast('Mob adicionado com sucesso!', 'sucesso');
        inputNome.value = '';
        inputTipo.value = '';
        inputVida.value = '';
        inputDescricao.value = '';
        if (inputDano) inputDano.value = '';
    });

    form.appendChild(btn);
    wrapper.appendChild(form);
    return wrapper;
}

// MODAL DE EDIÇÃO (UPDATE)
const criarModalEdicao = (mob, categoria) => {
    const overlay = document.createElement('div');
    overlay.classList.add('crud-modal-overlay');

    const modal = document.createElement('div');
    modal.classList.add('crud-modal');

    const titulo = document.createElement('h3');
    titulo.textContent = 'Editar Mob';
    titulo.classList.add('crud-modal-titulo');
    modal.appendChild(titulo);

    const form = document.createElement('div');
    form.classList.add('crud-form');

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.value = mob.name || formatarNome(mob.id);
    inputNome.placeholder = 'Nome';
    inputNome.classList.add('crud-input');

    const inputTipo = document.createElement('input');
    inputTipo.type = 'text';
    inputTipo.value = mob.tipo || '';
    inputTipo.placeholder = 'Tipo';
    inputTipo.classList.add('crud-input');

    const inputVida = document.createElement('input');
    inputVida.type = 'number';
    inputVida.value = mob.vida || '';
    inputVida.placeholder = 'Vida';
    inputVida.classList.add('crud-input');

    const inputDescricao = document.createElement('input');
    inputDescricao.type = 'text';
    inputDescricao.value = mob.descricao || '';
    inputDescricao.placeholder = 'Descrição';
    inputDescricao.classList.add('crud-input', 'crud-input-wide');

    form.appendChild(inputNome);
    form.appendChild(inputTipo);
    form.appendChild(inputVida);
    form.appendChild(inputDescricao);

    let inputDano = null;
    if (categoria === 'hostile') {
        inputDano = document.createElement('input');
        inputDano.type = 'number';
        inputDano.value = mob.dano || '';
        inputDano.placeholder = 'Dano';
        inputDano.classList.add('crud-input');
        form.appendChild(inputDano);
    }

    const acoes = document.createElement('div');
    acoes.classList.add('crud-modal-acoes');

    const btnSalvar = document.createElement('button');
    btnSalvar.type = 'button';
    btnSalvar.textContent = '💾 Salvar';
    btnSalvar.classList.add('crud-btn-add');
    btnSalvar.addEventListener('click', () => {
        overlay.remove();
        criarToast('Mob atualizado com sucesso!', 'sucesso');
    });

    const btnCancelar = document.createElement('button');
    btnCancelar.type = 'button';
    btnCancelar.textContent = 'Cancelar';
    btnCancelar.classList.add('crud-btn-cancelar');
    btnCancelar.addEventListener('click', () => overlay.remove());

    acoes.appendChild(btnSalvar);
    acoes.appendChild(btnCancelar);

    modal.appendChild(form);
    modal.appendChild(acoes);
    overlay.appendChild(modal);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });

    return overlay;
}

// LISTA DE MOBS
const listaMobs = (categoria) => {
    const container = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = categoria === 'passive' ? 'Mobs Passivos' : 'Mobs Hostis';
    container.appendChild(h2);

    container.appendChild(criarFormularioMob(categoria));

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
    h3.textContent = mob.name || formatarNome(mob.id);
    info.appendChild(h3);

    const acoes = document.createElement('div');
    acoes.classList.add('card-acoes');

    const btnEditar = document.createElement('button');
    btnEditar.type = 'button';
    btnEditar.textContent = '✏️ Editar';
    btnEditar.classList.add('crud-btn-edit');
    btnEditar.addEventListener('click', (e) => {
        e.stopPropagation();
        document.body.appendChild(criarModalEdicao(mob, categoria));
    });

    const btnExcluir = document.createElement('button');
    btnExcluir.type = 'button';
    btnExcluir.textContent = '🗑️ Excluir';
    btnExcluir.classList.add('crud-btn-delete');

    btnExcluir.addEventListener('click', (e) => {
        e.stopPropagation();

        document.body.appendChild(
            criarModalConfirmacaoMob(
                `Excluir "${mob.name || formatarNome(mob.id)}"?`,
                () => criarToast('Mob excluído com sucesso!', 'erro')
            )
        );
    });

    acoes.appendChild(btnEditar);
    acoes.appendChild(btnExcluir);
    info.appendChild(acoes);

    const img = document.createElement('img');
    img.src = mob.url_imagem;
    img.alt = mob.name || mob.id;

    card.appendChild(info);
    card.appendChild(img);

    card.addEventListener('click', () => {
        history.pushState({}, '', `/mobs/${categoria}/${mob.id}`);
        window.dispatchEvent(new PopStateEvent('popstate'));
    });

    return card;
}

const formatarNome = (id) => {
    return id
        .split('_')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ');
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

    const nome = mobInfo?.name || mobImg?.name || formatarNome(id);
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
        stats.style.display = "flex";
        stats.style.flexWrap = "wrap";
        stats.style.gap = "15px";
        stats.style.margin = "15px 0";

        // Vida de todos os mobs
        if (mobInfo.hp != null) {
            stats.appendChild(criarStat("❤️ HP", mobInfo.hp));
        }

        // Dano (somente hostis)
        if (mobInfo.category === "hostile" && mobInfo.damage?.normal != null) {
            stats.appendChild(criarStat("⚔️ Dano", mobInfo.damage.normal));
        }

        heroInfo.appendChild(stats);

        const descTexto =
            mobInfo.notes ||
            mobInfo.behavior ||
            "Sem descrição disponível.";

        heroInfo.appendChild(
            criarSecao("Descrição", descTexto)
        );
    }

    hero.appendChild(img);
    hero.appendChild(heroInfo);

    container.appendChild(hero);

    return container;
}

const criarStat = (label, valor) => {
    const div = document.createElement('div');
    div.classList.add('mob-stat');
    div.innerHTML = `<span class="stat-label" style="font-weight:bold; color:#ff4d4d; margin-right:5px;">${label}</span><span class="stat-valor" style="color:#fff;">${valor}</span>`;
    return div;
}

const criarSecao = (titulo, texto) => {
    const div = document.createElement('div');
    div.classList.add('mob-section');
    div.style.marginTop = "20px";
    div.style.padding = "20px";
    div.style.background = "rgba(255,255,255,0.05)";
    div.style.borderRadius = "10px";
    div.style.border = "1px solid rgba(255,255,255,0.1)";

    const h3 = document.createElement('h3');
    h3.textContent = titulo;
    h3.style.color = "#4a9eff";
    h3.style.marginBottom = "10px";
    h3.style.textTransform = "uppercase";
    h3.style.fontSize = "16px";

    const p = document.createElement('p');
    p.textContent = texto;
    p.style.color = "#ccc";
    p.style.lineHeight = "1.6";

    div.appendChild(h3);
    div.appendChild(p);
    return div;
}

const criarModalConfirmacaoMob = (mensagem, onConfirm) => {
    const overlay = document.createElement('div');
    overlay.classList.add('crud-modal-overlay');

    const modal = document.createElement('div');
    modal.classList.add('crud-modal', 'crud-modal-confirm');

    const titulo = document.createElement('h3');
    titulo.textContent = mensagem;
    titulo.classList.add('crud-modal-titulo');

    const acoes = document.createElement('div');
    acoes.classList.add('crud-modal-acoes');

    const btnSim = document.createElement('button');
    btnSim.textContent = 'Sim, Excluir';
    btnSim.classList.add('crud-btn-delete-confirm');

    btnSim.onclick = () => {
        onConfirm();
        overlay.remove();
    };

    const btnNao = document.createElement('button');
    btnNao.textContent = 'Cancelar';
    btnNao.classList.add('crud-btn-cancelar');

    btnNao.onclick = () => overlay.remove();

    acoes.appendChild(btnSim);
    acoes.appendChild(btnNao);

    modal.appendChild(titulo);
    modal.appendChild(acoes);

    overlay.appendChild(modal);

    return overlay;
};