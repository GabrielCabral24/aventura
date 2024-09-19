document.addEventListener('DOMContentLoaded', () => {
    const scenes = {
        inicio: {
            image: 'https://sampi.net.br/dir-arquivo-imagem/2022/02/9fb4d3f5cb0e47a839a70d8f2d5c4d09.jpg',
            text: 'Você está prestes a embarcar em uma jornada pela Lua. Suas escolhas moldarão sua aventura.',
            choices: [
                { text: 'Iniciar Aventura', nextScene: 'exploracao' }
            ]
        },
        exploracao: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt12-opVvXmIdLlC2geSMrv8XB58DEa_FQMXfYZg1o4WaEwqY6AQSPb-ek7H8gtbgJcuo&usqp=CAU',
            text: 'Você chegou à superfície lunar. O que deseja fazer?',
            choices: [
                { text: 'Explorar a cratera', nextScene: 'explorar_cratera' },
                { text: 'Navegar para a base lunar', nextScene: 'navegar_base' }
            ]
        },
        explorar_cratera: {
            image: 'https://cdn.pixabay.com/photo/2023/06/29/07/16/ai-generated-8095843_1280.jpg',
            text: 'Você encontrou uma cratera misteriosa. O que deseja fazer?',
            choices: [
                { text: 'Investigar a cratera', nextScene: 'investigar_cratera' },
                { text: 'Explorar os arredores', nextScene: 'explorar_arredores' }
            ]
        },
        navegar_base: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLIf2Vy7pshkUFP09S5OF9oqWKn72-D-T3QQ&s',
            text: 'Você chegou à base lunar. O que deseja fazer?',
            choices: [
                { text: 'Visitar o laboratório', nextScene: 'visitar_laboratorio' },
                { text: 'Explorar o espaço', nextScene: 'explorar_espaco' }
            ]
        },
        investigar_cratera: {
            image: 'https://www.traduzca.com/wp-content/uploads/2022/03/conquista-da-lua.png',
            text: 'Dentro da cratera, você encontra amostras de solo lunar e artefatos antigos.',
            choices: [
                { text: 'Coletar amostras', nextScene: 'final' },
                { text: 'Sair e explorar mais', nextScene: 'exploracao' }
            ]
        },
        explorar_arredores: {
            image: 'https://img.freepik.com/fotos-premium/astronauta-andar-na-lua-usar-cosmosuit-conceito-futuro_63762-4714.jpg',
            text: 'Você encontrou montanhas lunares impressionantes.',
            choices: [
                { text: 'Escalar a montanha', nextScene: 'final' },
                { text: 'Voltar ao início', nextScene: 'inicio' }
            ]
        },
        visitar_laboratorio: {
            image: 'https://static.vecteezy.com/ti/fotos-gratis/p1/48008707-uma-grupo-do-moderno-astronautas-e-retratado-explorando-a-perigoso-superficie-do-a-lua-dentro-exterior-espaco-exibindo-a-ousadia-missao-do-descoberta-e-aventura-dentro-lunar-exploracao-foto.jpg',
            text: 'Você encontra tecnologias incríveis e experimentos em andamento.',
            choices: [
                { text: 'Examinar os equipamentos', nextScene: 'final' },
                { text: 'Sair e explorar mais', nextScene: 'exploracao' }
            ]
        },
        explorar_espaco: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDah-LXm1BLTEi3VKojRC3s2z8RXuZyBVyUg&s',
            text: 'Você observa as estrelas e constelações de uma perspectiva única.',
            choices: [
                { text: 'Anotar descobertas', nextScene: 'final' },
                { text: 'Voltar para a base', nextScene: 'navegar_base' }
            ]
        },
        final: {
            image: 'https://sampi.net.br/dir-arquivo-imagem/2022/02/9fb4d3f5cb0e47a839a70d8f2d5c4d09.jpg',
            text: 'Sua aventura na Lua foi incrível! Você coletou muitos segredos lunares.',
            choices: [
                { text: 'Voltar ao início', nextScene: 'inicio' }
            ]
        }
    };

    const sceneImage = document.getElementById('scene-image');
    const sceneText = document.getElementById('scene-text');
    const choicesContainer = document.getElementById('choices-container');
    const restartButton = document.getElementById('restart-button');

    function renderScene(sceneKey) {
        const scene = scenes[sceneKey];

        if (scene) {
            sceneImage.src = scene.image;
            sceneText.textContent = scene.text;
            choicesContainer.innerHTML = '';

            scene.choices.forEach(choice => {
                const button = document.createElement('button');
                button.textContent = choice.text;
                button.className = 'choice-button';
                button.onclick = () => renderScene(choice.nextScene);
                choicesContainer.appendChild(button);
            });

            restartButton.style.display = sceneKey === 'final' ? 'block' : 'none';
        }
    }

    document.querySelector('button').onclick = () => {
        document.querySelector('.overlay').style.display = 'none';
        renderScene('exploracao');
    };

    restartButton.onclick = () => {
        document.querySelector('.overlay').style.display = 'flex';
        renderScene('inicio');
    };

    renderScene('inicio');
});
