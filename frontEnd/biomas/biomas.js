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
        main.appendChild(await paginaBioma(categoria, id));
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

function criarFormularioBioma() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('crud-wrapper');

    const titulo = document.createElement('h3');
    titulo.textContent = '+ Novo Bioma';
    titulo.classList.add('crud-titulo');
    wrapper.appendChild(titulo);

    const form = document.createElement('div');
    form.classList.add('crud-form');

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = 'Nome';
    inputNome.classList.add('crud-input');

    const inputDimensao = document.createElement('input');
    inputDimensao.type = 'text';
    inputDimensao.placeholder = 'Dimensão (ex: Overworld)';
    inputDimensao.classList.add('crud-input');

    const inputCategoria = document.createElement('input');
    inputCategoria.type = 'text';
    inputCategoria.placeholder = 'Categoria';
    inputCategoria.classList.add('crud-input');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = '+ Adicionar';
    btn.classList.add('crud-btn-add');

    btn.addEventListener('click', () => {
        criarToastBioma('Bioma adicionado com sucesso!', 'sucesso');
        inputNome.value = '';
        inputDimensao.value = '';
        inputCategoria.value = '';
    });

    form.appendChild(inputNome);
    form.appendChild(inputDimensao);
    form.appendChild(inputCategoria);
    form.appendChild(btn);
    wrapper.appendChild(form);
    return wrapper;
}

function criarModalEdicaoBioma(bioma) {
    const overlay = document.createElement('div');
    overlay.classList.add('crud-modal-overlay');

    const modal = document.createElement('div');
    modal.classList.add('crud-modal');

    const titulo = document.createElement('h3');
    titulo.textContent = 'Editar Bioma';
    titulo.classList.add('crud-modal-titulo');
    modal.appendChild(titulo);

    const form = document.createElement('div');
    form.classList.add('crud-form');

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.value = bioma.name || '';
    inputNome.placeholder = 'Nome';
    inputNome.classList.add('crud-input');

    const inputDimensao = document.createElement('input');
    inputDimensao.type = 'text';
    inputDimensao.value = bioma.dimensao || '';
    inputDimensao.placeholder = 'Dimensão';
    inputDimensao.classList.add('crud-input');

    const inputCategoria = document.createElement('input');
    inputCategoria.type = 'text';
    inputCategoria.value = bioma.categoria || '';
    inputCategoria.placeholder = 'Categoria';
    inputCategoria.classList.add('crud-input');

    form.appendChild(inputNome);
    form.appendChild(inputDimensao);
    form.appendChild(inputCategoria);

    const acoes = document.createElement('div');
    acoes.classList.add('crud-modal-acoes');

    const btnSalvar = document.createElement('button');
    btnSalvar.type = 'button';
    btnSalvar.textContent = '💾 Salvar';
    btnSalvar.classList.add('crud-btn-add');
    btnSalvar.addEventListener('click', () => {
        overlay.remove();
        criarToastBioma('Bioma atualizado com sucesso!', 'sucesso');
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

function listaBiomas(categoria) {
    const container = document.createElement("div");

    const nomes = { overworld: "Overworld", nether: "Nether", end: "The End" };
    const h2 = document.createElement("h2");
    h2.textContent = nomes[categoria] || categoria;
    h2.style.cssText = "font-size:22px; font-weight:900; color:#fff; margin-bottom:20px; letter-spacing:2px;";
    container.appendChild(h2);

    container.appendChild(criarFormularioBioma());

    const lista = document.createElement("div");
    lista.classList.add("lista-biomas");

    biomasData[categoria].forEach((bioma) => {
        const card = document.createElement("div");
        card.classList.add("card-bioma");
        card.style.cursor = 'pointer';

        const img = document.createElement("img");
        img.src = bioma.image;
        img.alt = bioma.name;

        // CRIANDO O NOME DO BIOMA PARA O CARD
        const nome = document.createElement("h3");
        nome.textContent = bioma.name || formatarNomeBioma(bioma.id);

        const acoes = document.createElement("div");
        acoes.classList.add("card-acoes");

        const btnEditar = document.createElement("button");
        btnEditar.type = "button";
        btnEditar.textContent = "✏️ Editar";
        btnEditar.classList.add("crud-btn-edit");
        btnEditar.addEventListener("click", (e) => {
            e.stopPropagation();
            document.body.appendChild(criarModalEdicaoBioma(bioma));
        });

        const btnExcluir = document.createElement("button");
        btnExcluir.type = "button";
        btnExcluir.textContent = "🗑️ Excluir";
        btnExcluir.classList.add("crud-btn-delete");
        btnExcluir.addEventListener("click", (e) => {
            e.stopPropagation();
            document.body.appendChild(criarModalConfirmacaoBioma(
                `Excluir "${bioma.name}"?`,
                () => criarToastBioma('Bioma excluído com sucesso!', 'erro')
            ));
        });

        acoes.appendChild(btnEditar);
        acoes.appendChild(btnExcluir);

        card.appendChild(img);
        card.appendChild(nome); 
        card.appendChild(acoes);

        card.addEventListener('click', () => {
            history.pushState({}, '', `/biomas/${categoria}/${bioma.id}`);
            window.dispatchEvent(new PopStateEvent('popstate'));
        });

        lista.appendChild(card);
    });

    container.appendChild(lista);
    return container;
}

async function paginaBioma(categoria, id) {
    const container = document.createElement("div");
    container.classList.add("bioma-detalhe");

    const biomaLocal = biomasData[categoria]?.find(b => b.id === id);

    let biomaApi = null;
    try {
        const apiId = id.includes(':') ? id : `minecraft:${id}`;
        const res = await fetch(`https://api.astroworldmc.com/api/v1/biomes/${apiId}`);
        const data = await res.json();
        biomaApi = data.data || data;
    } catch (e) {
        console.error("Erro na API", e);
    }

    if (!biomaLocal && !biomaApi) {
        const erro = document.createElement("p");
        erro.textContent = "Bioma não encontrado.";
        container.appendChild(erro);
        return container;
    }

    const nomesDimensoes = { overworld: "Overworld", nether: "Nether", end: "The End" };

    const hero = document.createElement("div");
    hero.classList.add("bioma-hero");

    const img = document.createElement("img");
    img.src = biomaLocal?.image || "";
    img.alt = id;
    img.classList.add("bioma-hero-img");

    const info = document.createElement("div");
    info.classList.add("bioma-hero-info");

    const h1 = document.createElement("h1");
    h1.textContent = biomaApi?.name || formatarNomeBioma(id);
    info.appendChild(h1);

    const tags = document.createElement("div");
    tags.style.display = "flex";
    tags.style.gap = "10px";

    const dim = document.createElement("span");
    dim.classList.add("bioma-dimensao");
    const dimVal = biomaApi?.dimension || categoria;
    dim.textContent = dimVal.charAt(0).toUpperCase() + dimVal.slice(1);
    tags.appendChild(dim);

    if (biomaApi?.category) {
        const cat = document.createElement("span");
        cat.classList.add("bioma-categoria");
        cat.textContent = biomaApi.category;
        tags.appendChild(cat);
    }

    info.appendChild(tags);
    hero.appendChild(img);
    hero.appendChild(info);
    container.appendChild(hero);

    const section = document.createElement("div");
    section.classList.add("bioma-section");
    const titulo = document.createElement("h3");
    titulo.textContent = "Descrição";
    const descricao = document.createElement("p");
    descricao.textContent = biomaLocal?.description || biomaApi?.notes || "Sem descrição.";
    section.appendChild(titulo);
    section.appendChild(descricao);
    container.appendChild(section);

    return container;
}

function formatarNomeBioma(id) {
    const cleanId = id.includes(':') ? id.split(':')[1] : id;
    return cleanId.split("_").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
}

function criarToastBioma(mensagem, tipo) {
    const toast = document.createElement('div');
    toast.classList.add('crud-toast', `crud-toast-${tipo}`, 'crud-toast-visivel');
    toast.textContent = mensagem;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

function criarModalConfirmacaoBioma(mensagem, onConfirm) {
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
    btnSim.onclick = () => { onConfirm(); overlay.remove(); };
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
}
