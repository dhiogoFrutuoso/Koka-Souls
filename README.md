# 🔥 Koka Souls

> A melhor loja de venda de itens e XP de jogos Souls-like.

Site desenvolvido para a **Koka Souls**, loja especializada na venda de itens, runas, almas, armaduras, armas e serviços in-game para os principais jogos do gênero Souls-like.
Projeto desenvolvimento para um cliente.

🌐 **Site:** [koka-souls.vercel.app](https://koka-souls.vercel.app)

---

## 🎮 Jogos Suportados

- Dark Souls Remastered
- Dark Souls II Scholar of the First Sin
- Dark Souls III
- Elden Ring
- Demon's Souls
- Lords of the Fallen

---

## 🛒 Serviços Oferecidos

- Venda de Almas / Runas
- Armas e Armaduras
- Anéis e Talismãs
- Titanitas e materiais de upgrade
- Consumíveis e Itens de Pacto
- Ajuda em Bosses
- Level máximo (nível máximo do personagem)

---

## 🗂️ Estrutura do Projeto

```
Koka-Souls/
├── main/                  # Página principal
│   ├── assets/            # Imagens e ícones
│   ├── css/               # Estilos
│   ├── js/                # Scripts
│   └── index.html         # Página inicial
├── shop/                  # Páginas de cada jogo
│   ├── darksouls_1/
│   ├── darksouls_2/
│   ├── darksouls_3/
│   ├── demon_souls/
│   ├── elden_ring/
│   └── lords_of_the_fallen/
├── vercel.json            # Configuração de rotas do Vercel
└── .gitattributes
```

---

## 🚀 Deploy

O projeto está hospedado na **Vercel**, com deploy automático a cada `git push` na branch `main`.

O arquivo `vercel.json` gerencia as rotas para que cada página da loja seja acessível corretamente:

```json
{
  "rewrites": [
    { "source": "/", "destination": "/main/index.html" },
    { "source": "/shop/darksouls_1", "destination": "/shop/darksouls_1/index.html" },
    ...
  ]
}
```

---

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- Vercel (Hospedagem)

---

© 2026 Koka Souls. Todos os direitos reservados.
