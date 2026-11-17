
/* CONFIGURAÇÕES DAS VELAS */

const cardsVelas = document.querySelectorAll(".card");

const descricoesAroma = {
    lavanda:
        "Um aroma relaxante que pode diminuir o estresse e até melhorar o seu sono. Sem falar que o cheirinho é um clássico delicioso.",

    eucalipto:
        "Ótimo aroma para deixar o ambiente mais sofisticado enquanto te ajuda a ter mais foco, clareza mental, além de também ser descongestionante e revigorante!"
};

const descricaoPadrao =
    "Escolha um aroma para ver a descrição.";

const descricaoPadraoDecorada =
    "Escolha aroma e formato para ver a descrição.";


/* ATUALIZAÇÃO DOS CARDS DE VELAS */

cardsVelas.forEach(card => {

    const img = card.querySelector("img");
    const descricao = card.querySelector(".descricao");

    const aromaSelect = card.querySelector(".aroma");
    const formatoSelect = card.querySelector(".formato");

    const btn = card.querySelector(".btn");

    // Identifica se é uma vela personalizada
    const velaDecorada = formatoSelect !== null;

    // Imagem inicial de cada modelo
    const imagemInicial = velaDecorada
        ? "vela-rosa.jpg"
        : "vela-lavanda.jpg";


    /* BOTÃO DE COMPRA - ABRE O POPUP */

    if (btn) {
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            abrirModal();
        });
    }


    function atualizarCard() {

        const aroma = aromaSelect ? aromaSelect.value : "";
        const formato = formatoSelect
            ? formatoSelect.value
            : "";


        /* VELA PERSONALIZADA */

        if (velaDecorada) {

            if (aroma && formato) {

                const baseName = `vela-${formato}-${aroma}`;

                img.src = `${baseName}.jpeg`;

                descricao.textContent =
                    `Vela decorada com ${formato}. ${descricoesAroma[aroma]}`;

            } else {

                img.src = imagemInicial;

                descricao.textContent =
                    descricaoPadraoDecorada;

            }

        }


        /* VELAS AROMÁTICAS SIMPLES */

        else {

            if (aroma) {

                img.src = `vela-${aroma}.jpg`;

                descricao.textContent =
                    descricoesAroma[aroma];

            } else {

                img.src = imagemInicial;

                descricao.textContent =
                    descricaoPadrao;

            }

        }

    }


    /* EVENTOS DOS SELETORES */

    if (aromaSelect) {
        aromaSelect.addEventListener("change", atualizarCard);
    }

    if (formatoSelect) {
        formatoSelect.addEventListener("change", atualizarCard);
    }

});


/* POPUP - LOJA INATIVA */

function abrirModal() {

    const modal = document.getElementById("modalLoja");

    if (modal) {
        modal.classList.add("ativo");
    }

}


function fecharModal() {

    const modal = document.getElementById("modalLoja");

    if (modal) {
        modal.classList.remove("ativo");
    }

}


/* FECHAR AO CLICAR FORA DA JANELA */

document.addEventListener("click", function(event) {

    const modal = document.getElementById("modalLoja");

    if (modal && event.target === modal) {
        fecharModal();
    }

});


/* FECHAR AO PRESSIONAR ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        fecharModal();
    }

});
