<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AgroVida - Portal de Agronomia</title>
    <style>
        /* Definição das Paletas de Cores (Variáveis CSS) */
        :root {
            /* Modo Claro */
            --bg-principal: #f4f1ea; /* Bege claro/marrom suave */
            --bg-card: #ffffff;
            --texto: #2c3e2e; /* Verde escuro quase preto */
            --primaria-verde: #3b7a57; /* Verde folha */
            --secundaria-marrom: #6f4e37; /* Marrom café */
            --destaque-roxo: #702963; /* Roxo violeta */
            --borda: #d1ca41;
            --fonte-tamanho: 16px;
        }

        [data-theme="dark"] {
            /* Modo Escuro */
            --bg-principal: #1b1c17; /* Grafite terroso */
            --bg-card: #262921;
            --texto: #e1efe6; /* Branco esverdeado */
            --primaria-verde: #52a474; /* Verde mais brilhante */
            --secundaria-marrom: #a0785a; /* Marrom claro */
            --destaque-roxo: #b768a2; /* Roxo claro */
        }

        /* Estilos Gerais */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg-principal);
            color: var(--texto);
            font-size: var(--fonte-tamanho);
            margin: 0;
            padding: 0;
            transition: background-color 0.3s, color 0.3s, font-size 0.2s;
        }

        header {
            background-color: var(--primaria-verde);
            color: white;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 5px solid var(--secundaria-marrom);
        }

        h1 {
            margin: 0;
            color: #ffffff;
        }

        /* Painel de Acessibilidade e Configurações */
        .controles {
            display: flex;
            gap: 10px;
        }

        .btn-controle {
            background-color: var(--destaque-roxo);
            color: white;
            border: none;
            padding: 8px 15px;
            cursor: pointer;
            border-radius: 5px;
            font-weight: bold;
            transition: opacity 0.2s;
        }

        .btn-controle:hover {
            opacity: 0.9;
        }

        /* Conteúdo Principal */
        .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 0 20px;
        }

        .grid-conteudo {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .card {
            background-color: var(--bg-card);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            border-top: 4px solid var(--secundaria-marrom);
        }

        .imagem-placeholder {
            width: 100%;
            height: 200px;
            background-color: var(--secundaria-marrom);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }

        /* Imagens reais usariam a tag <img src="link" /> no lugar da div acima */
        .card-foto {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .card-conteudo {
            padding: 15px;
        }

        .card-conteudo h3 {
            color: var(--destaque-roxo);
            margin-top: 0;
        }

        footer {
            text-align: center;
            padding: 20px;
            background-color: var(--secundaria-marrom);
            color: white;
            margin-top: 40px;
        }
    </style>
</head>
<body>

    <header>
        <h1>AgroCultura</h1>
        <div class="controles">
            <button class="btn-controle" onclick="alternarTema()">Alternar Modo 🌗</button>
            <button class="btn-controle" onclick="mudarFonte(1)">Aumentar Letra ➕</button>
            <button class="btn-controle" onclick="mudarFonte(-1)">Diminuir Letra ➖</button>
        </div>
    </header>

    <div class="container">
        <h2>Inovações no Campo</h2>
        <p>Explore o mundo da agronomia moderna com foco em sustentabilidade, tecnologia e manejo de solo eficiente.</p>

        <div class="grid-conteudo">
            <div class="card">
                <img class="card-foto" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400&q=80" alt="Plantação verde">
                <div class="card-conteudo">
                    <h3>Manejo de Solo</h3>
                    <p>Aprenda técnicas para manter a terra fértil utilizando rotação de culturas e adubação orgânica protetiva.</p>
                </div>
            </div>

            <div class="card">
                <img class="card-foto" src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=400&q=80" alt="Tecnologia no campo">
                <div class="card-conteudo">
                    <h3>Tecnologia e Drones</h3>
                    <p>O uso de tecnologia de ponta e mapeamento aéreo para monitorar a saúde das folhas e otimizar a colheita.</p>
                </div>
            </div>

            <div class="card">
                <img class="card-foto" src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=400&q=80" alt="Cultivo roxo/lavanda">
                <div class="card-conteudo">
                    <h3>Cultivos Especiais</h3>
                    <p>Como o plantio de espécies alternativas e flores de alto valor agregado pode diversificar a renda do produtor.</p>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <p>© 2026 AgroCultura - Sustentabilidade e Tecnologia</p>
    </footer>

    <script>
        // Função para Alternar Modo Claro / Escuro
        function alternarTema() {
            const body = document.documentElement;
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
            } else {
                body.setAttribute('data-theme', 'dark');
            }
        }

        // Função para Aumentar/Diminuir o tamanho da letra
        let tamanhoAtual = 16; // Tamanho inicial em pixels
        function mudarFonte(acao) {
            const root = document.querySelector(':root');
            tamanhoAtual += acao * 2; // Aumenta ou diminui de 2 em 2 pixels
            
            // Limites para não ficar pequeno ou grande demais
            if(tamanhoAtual < 12) tamanhoAtual = 12;
            if(tamanhoAtual > 26) tamanhoAtual = 26;
            
            root.style.setProperty('--fonte-tamanho', tamanhoAtual + 'px');
        }
    </script>
</body>
</html>
