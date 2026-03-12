# 🔥 Koka Souls

> A melhor loja de venda de itens e XP de jogos Souls-like.

Site desenvolvido para a **Koka Souls**, loja especializada na venda de itens, runas, almas, armaduras, armas e serviços in-game para os principais jogos do gênero Souls-like.
Projeto desenvolvido para um cliente.

🌐 **Site:** [kokasouls.com.br](https://kokasouls.com.br)

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
├── assets/                # Imagens e ícones globais
├── css/                   # Estilos globais
├── js/                    # Scripts globais
├── shop/                  # Páginas de cada jogo
│   ├── darksouls_1/
│   │   ├── assets/
│   │   ├── styles.css
│   │   └── dark-souls-1.html
│   ├── darksouls_2/
│   │   ├── assets/
│   │   ├── styles.css
│   │   └── dark-souls-2.html
│   ├── darksouls_3/
│   │   ├── assets/
│   │   ├── styles.css
│   │   └── dark-souls-3.html
│   ├── demon_souls/
│   │   ├── assets/
│   │   ├── styles.css
│   │   └── demon-souls.html
│   ├── elden_ring/
│   │   ├── assets/
│   │   ├── styles.css
│   │   └── elden-ring.html
│   └── lords_of_the_fallen/
│       ├── assets/
│       ├── styles.css
│       └── lords-of-the-fallen.html
├── home.html              # Página inicial
├── sitemap.xml            # Sitemap para SEO
├── vercel.json            # Configuração de rotas do Vercel
└── .gitattributes
```

---

## 🚀 Deploy

O projeto está hospedado na **Vercel**, com deploy automático a cada `git push` na branch `main`.

O arquivo `vercel.json` gerencia as rotas limpas (sem `.html` nas URLs):

```json
{
  "rewrites": [
    { "source": "/", "destination": "/home.html" },
    { "source": "/elden-ring", "destination": "/shop/elden_ring/elden-ring.html" },
    { "source": "/dark-souls-1", "destination": "/shop/darksouls_1/dark-souls-1.html" },
    { "source": "/dark-souls-2", "destination": "/shop/darksouls_2/dark-souls-2.html" },
    { "source": "/dark-souls-3", "destination": "/shop/darksouls_3/dark-souls-3.html" },
    { "source": "/demon-souls", "destination": "/shop/demon_souls/demon-souls.html" },
    { "source": "/lords-of-the-fallen", "destination": "/shop/lords_of_the_fallen/lords-of-the-fallen.html" }
  ]
}
```

### URLs do site

| Página | URL |
|---|---|
| Home | `kokasouls.com.br/` |
| Elden Ring | `kokasouls.com.br/elden-ring` |
| Dark Souls Remastered | `kokasouls.com.br/dark-souls-1` |
| Dark Souls II | `kokasouls.com.br/dark-souls-2` |
| Dark Souls III | `kokasouls.com.br/dark-souls-3` |
| Demon's Souls | `kokasouls.com.br/demon-souls` |
| Lords of the Fallen | `kokasouls.com.br/lords-of-the-fallen` |

---

## 🔍 SEO

- `sitemap.xml` na raiz do projeto com todas as URLs cadastradas
- Sitemap enviado ao **Google Search Console**
- Domínio registrado no **Registro.br** com DNS gerenciado pela Vercel

---

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- Vercel (Hospedagem e gerenciamento de rotas)

---

© 2026 Koka Souls. Todos os direitos reservados.