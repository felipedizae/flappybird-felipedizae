console.log('[DevSoltinho] Flappy Bird');

const sprite = new Image();
sprite.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

// [PLANO DE FUNDO]
const planoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha() {
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0, 0, canvas.width, canvas.height);

        contexto.drawImage(
            sprite,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura
        );

        contexto.drawImage(
            sprite,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            (planoDeFundo.x + chao.largura), planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura
        );
    }
}

// [CHÃO]
const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    desenha() {
        contexto.drawImage(
            sprite,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura
        );

        contexto.drawImage(
            sprite,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            (chao.x + chao.largura), chao.y,
            chao.largura, chao.altura
        );
    }
}

const flappybird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    gravidade: 0.25,
    velocidade: 0,
    atualiza() {
        flappybird.velocidade = flappybird.velocidade + flappybird.gravidade;

        flappybird.y = flappybird.y + flappybird.velocidade;
    },
    desenha() {
        contexto.drawImage(
            sprite,
            flappybird.spriteX, flappybird.spriteY, // Sprite x, Sprite y
            flappybird.largura, flappybird.altura, // Tamanho de recorte da sprite
            flappybird.x, flappybird.y, // posição na tela
            flappybird.largura, flappybird.altura
        );
    }
}

function loop() {
    flappybird.atualiza();

    planoDeFundo.desenha();
    chao.desenha();
    flappybird.desenha();

    requestAnimationFrame(loop);
}

loop();
