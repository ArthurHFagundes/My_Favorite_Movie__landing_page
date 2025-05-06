document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('[data-faq-question]'); // ARMAZENA EM UMA CONSTANTE O ELEMENTO COM A TAG 'data-faq-question'
    
    const heroSection = document.querySelector('.hero'); // PARA SELECIONAR O ELEMENTO COM A CLASSE "hero"
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY // PARA VERIFICAR A DISTÂNCIA DO SCROLL NO EIXO Y

        if(posicaoAtual < alturaHero) { // QUANDO A POSIÇÃO DO SCROLL FOR MENOR QUE A ALTURA DO HERO ELE OCULTA (+ performance)
            ocultaElementosDoHeader();
        }
        else {
            exibeElementosDoHeader();
        }
    })

    // Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) { //* ESSA FUNÇÃO SERVE BASICAMENTE PARA VERIFICAR ATÉ ONDE O PROGRAMA VAI REPETIR UM LAÇO, OU SEJA, VAI REPETIR AS AÇÕES ATÉ INFORMAR O CONTRÁRIO
        questions[i].addEventListener('click', abreOuFechaResposta); // VE QUANDO O ELEMENTO COM A TAG 'data-faq-question' É CLICADO
    }
})

function ocultaElementosDoHeader() {
    const header = document.querySelector('header'); //* "elemento.getAttribute("nome do atributo") PARA SELECIONAR UM ATRIBUTO ESPECÍFICO
    header.classList.add('header--is-hidden')
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__list__item--is-open';
    const elementoPai = elemento.target.parentNode; // PARA PEGAR O PAI DO ALVO

    elementoPai.classList.toggle(classe); // ATIVA A CLASSE
}