/* -------------------------------------------------------------
 * CONFYHOUSE - Premium Furniture Interactive JS Engine
 * Core Logic: Catalog, Shopping Drawer, Modals & WhatsApp
 * ------------------------------------------------------------- */

// --- PRODUCT DATA DATABASE ---
const PRODUCTS = [
    {
        id: "sofa-vimle",
        name: "Vimle",
        type: "Sofá de 3 lugares com chaise longue e braços largos",
        category: "sofa",
        ref: "952.030.16",
        price: "175.000 MT",
        priceValue: 175000,
        image: "Assets/vimle-sofa-3-lugares-c-chaise-longue-c-bracos-largos-gunnared-bege__0952030_pe801516_s5.avif",
        altImages: ["Assets/vimle-sofa-3-lugares-c-chaise-longue-c-bracos-largos-gunnared-bege__0952032_pe801518_s5.avif"],
        dimensions: "271 x 164 x 83 cm (Largura x Profundidade x Altura)",
        materials: "Estrutura em madeira maciça, contraplacado e espuma de alta resiliência. Estofo em tecido Gunnared (90% poliéster, 10% algodão) extremamente durável e suave ao toque.",
        description: "O sofá Vimle é sinónimo de conforto luxuoso e modularidade inteligente. Com braços largos que acrescentam um toque de robustez moderna, a sua chaise longue convida ao relaxamento completo. A capa em tecido Gunnared bege é fácil de limpar e mantém a sua cor vibrante mesmo sob o sol moçambicano."
    },
    {
        id: "sofa-kivik",
        name: "Kivik",
        type: "Sofá de 3 lugares com chaise longue",
        category: "sofa",
        ref: "781.552.58",
        price: "161.000 MT",
        priceValue: 161000,
        image: "Assets/kivik-sofa-3-lugares-c-chaise-longue-gunnared-bege__0781552_pe760858_s5.avif",
        altImages: [],
        dimensions: "280 x 163 x 83 cm (Largura x Profundidade x Altura)",
        materials: "Estrutura com molas ensacadas de aço, espuma viscoelástica de memória e almofadas de fibra de poliéster. Tecido premium lavável.",
        description: "Desfrute do conforto generoso do sofá Kivik. As suas almofadas profundas com núcleo de molas ensacadas e espuma de memória moldam-se perfeitamente ao seu corpo, proporcionando suporte excecional para as longas conversas em família."
    },
    {
        id: "sofa-eskilstuna",
        name: "Eskilstuna",
        type: "Sofá de 3 lugares com chaise longue reclinável",
        category: "sofa",
        ref: "125.627.95",
        price: "189.000 MT",
        priceValue: 189000,
        image: "Assets/eskilstuna-sofa-3-lugares-c-chaise-longue-hillared-bege__1256275_pe924995_s5.avif",
        altImages: [],
        dimensions: "268 x 162 x 100 cm (Largura x Profundidade x Altura)",
        materials: "Aço reforçado nas articulações, enchimento de poliuretano de alta densidade. Tecido Hillared de luxo de textura rica.",
        description: "O sofá Eskilstuna destaca-se pela sua cabeceira alta e ajustável e encostos reclináveis, garantindo conforto ergonómico absoluto. A chaise longue pode ser posicionada à esquerda ou à direita, adaptando-se perfeitamente ao layout da sua sala."
    },
    // Bestå TV Family
    {
        id: "besta-tv-white",
        name: "Bestå Lappviken Branco",
        type: "Móvel de TV minimalista com gavetas",
        category: "tv",
        ref: "999.733.49",
        price: "63.000 MT",
        priceValue: 63000,
        image: "Assets/besta-movel-de-tv-c-gavetas-branco-lappviken-stubbarp-branco__0999733_pe823749_s5.avif",
        altImages: ["Assets/besta-movel-de-tv-c-gavetas-branco-lappviken-stubbarp-branco__0375474_pe553091_s5.avif"],
        dimensions: "180 x 42 x 48 cm (Largura x Profundidade x Altura)",
        materials: "Estrutura em fibra de madeira com acabamento em folha de melamina de alta resistência. Pés Stubbarp elegantes.",
        description: "O móvel de TV Bestå Lappviken Branco é a própria definição de pureza visual. O seu acabamento branco brilhante e frentes lisas criam um aspeto contínuo que se funde com a decoração da sua sala, mantendo os cabos e aparelhos elegantemente ocultos.",
        family: "besta-tv",
        colorName: "Branco",
        colorCode: "#ffffff"
    },
    {
        id: "besta-tv-white-green",
        name: "Bestå Krukmakare Verde-Cinza",
        type: "Móvel de TV com gavetas e portas",
        category: "tv",
        ref: "142.062.30",
        price: "68.000 MT",
        priceValue: 68000,
        image: "Assets/besta-movel-de-tv-c-gavetas-branco-krukmakare-verde-acinzentado-escuro__1420625_pe977430_s5.avif",
        altImages: [],
        dimensions: "180 x 42 x 74 cm (Largura x Profundidade x Altura)",
        materials: "Frentes com acabamento lacado mate e Krukmakare verde-acinzentado escuro. Puxadores minimalistas e corrediças de fecho suave.",
        description: "Esta versão elegante da linha Bestå combina o minimalismo do branco com frentes texturizadas Krukmakare num tom verde-acinzentado escuro ultra-luxuoso. Ideal para acrescentar um contraste orgânico a paredes claras.",
        family: "besta-tv",
        colorName: "Verde-Cinza",
        colorCode: "#5f6c64"
    },
    {
        id: "besta-tv-oak",
        name: "Bestå Hanviken Carvalho",
        type: "Móvel de TV em tom carvalho natural",
        category: "tv",
        ref: "988.810.28",
        price: "66.000 MT",
        priceValue: 66000,
        image: "Assets/besta-movel-de-tv-c-gavetas-ef-carvalho-c-velatura-branca-hanviken-stubbarp-ef-carvalho-c-velatura-branca__0988810_pe818228_s5.avif",
        altImages: [],
        dimensions: "180 x 42 x 64 cm (Largura x Profundidade x Altura)",
        materials: "MDF revestido a folha de carvalho natural com velatura branca protetora, conferindo uma textura mate natural.",
        description: "Com um acabamento de carvalho com velatura branca, este móvel Bestå traz o calor e o aconchego da madeira natural sem perder a leveza visual. As portas Hanviken moldadas acrescentam um toque clássico-moderno sublime.",
        family: "besta-tv",
        colorName: "Carvalho",
        colorCode: "#e3d4c3"
    },
    {
        id: "besta-tv-black",
        name: "Bestå Lappviken Preto-Castanho",
        type: "Móvel de TV sóbrio com gavetas",
        category: "tv",
        ref: "999.676.68",
        price: "63.000 MT",
        priceValue: 63000,
        image: "Assets/besta-movel-de-tv-c-gavetas-preto-castanho-lappviken-stubbarp-preto-castanho__0999676_pe823768_s5.avif",
        altImages: ["Assets/besta-movel-de-tv-c-gavetas-preto-castanho-lappviken-stubbarp-preto-castanho__0341752_pe531768_s5.avif"],
        dimensions: "180 x 42 x 48 cm (Largura x Profundidade x Altura)",
        materials: "Frentes Lappviken preto-castanho com textura de madeira sutil ao toque. Estrutura robusta anti-riscos.",
        description: "Para salas de estar que procuram uma presença dramática e sofisticada, este Bestå preto-castanho é ideal. Combina lindamente com decorações modernas, contrastando com paredes em tons nude e elementos metálicos dourados.",
        family: "besta-tv",
        colorName: "Preto-Castanho",
        colorCode: "#2a2421"
    },
    {
        id: "besta-tv-walnut",
        name: "Bestå Lappviken Nogueira",
        type: "Móvel de TV efeito nogueira",
        category: "tv",
        ref: "146.571.49",
        price: "63.000 MT",
        priceValue: 63000,
        image: "Assets/besta-movel-de-tv-pret-cast-lappviken-efeito-nogueira__1465711_pe995149_s5.avif",
        altImages: ["Assets/besta-movel-de-tv-pret-cast-lappviken-efeito-nogueira__1449590_pe989968_s5.avif"],
        dimensions: "120 x 42 x 48 cm (Largura x Profundidade x Altura)",
        materials: "Frentes com acabamento em folha efeito nogueira e laterais em preto mate de alta qualidade.",
        description: "Compacto e elegante, este móvel Bestå exibe um impressionante efeito de nogueira de grão rico. Perfeito para apartamentos sofisticados em Maputo ou espaços que exigem arrumação otimizada sem comprometer o design luxuoso.",
        family: "besta-tv",
        colorName: "Nogueira",
        colorCode: "#5c4033"
    },
    {
        id: "besta-burs-white",
        name: "Bestå Burs",
        type: "Móvel de TV alto brilho branco",
        category: "tv",
        ref: "302.651.38",
        price: "68.000 MT",
        priceValue: 68000,
        image: "Assets/besta-burs-movel-tv-brilh-branco__1459114_pe993298_s5.avif",
        altImages: ["Assets/besta-burs-movel-tv-brilh-branco__65138_pe175906_s5.avif"],
        dimensions: "180 x 41 x 49 cm (Largura x Profundidade x Altura)",
        materials: "Frentes em placa de partículas de alto brilho lacadas a branco, com corrediças metálicas ocultas.",
        description: "O móvel Bestå Burs traz uma sofisticação elegante com o seu acabamento lacado branco brilhante. Perfeito para decorações modernas e minimalistas.",
        family: "besta-tv",
        colorName: "Branco Brilhante",
        colorCode: "#f3f3f3"
    },
    {
        id: "besta-eket-tv-white",
        name: "Bestå Eket Branco",
        type: "Móvel de TV suspenso minimalista",
        category: "tv",
        ref: "108.831.50",
        price: "48.000 MT",
        priceValue: 48000,
        image: "Assets/besta-eket-movel-de-tv-branco-lappviken-branco__1088315_pe861082_s5.avif",
        altImages: ["Assets/besta-eket-movel-de-tv-branco-lappviken-branco__1068919_pe853663_s5.avif"],
        dimensions: "120 x 40 x 38 cm",
        materials: "Frentes Lappviken brancas mate, estrutura Eket leve e resistente, abertura por pressão (push-open).",
        description: "O Bestå Eket suspenso cria uma sensação de leveza flutuante na sua sala. Sem pernas visíveis, facilita a limpeza e oferece um visual clean escandinavo impecável.",
        family: "besta-tv",
        colorName: "Eket Branco",
        colorCode: "#f9f9f9"
    },
    // Brimnes TV Family
    {
        id: "tv-brimnes-black",
        name: "Brimnes Preto",
        type: "Móvel de TV com prateleiras e gavetas",
        category: "tv",
        ref: "704.610.91",
        price: "34.000 MT",
        priceValue: 34000,
        image: "Assets/brimnes-movel-tv-preto__0704610_pe725291_s5.avif",
        altImages: ["Assets/brimnes-movel-tv-preto__1452002_pe990828_s5.avif", "Assets/brimnes-movel-tv-preto__1452004_pe990826_s5.avif"],
        dimensions: "120 x 41 x 53 cm (Largura x Profundidade x Altura)",
        materials: "Frentes de gaveta com vidro tempo, corrediças metálicas e compartimento de cabos no painel traseiro.",
        description: "O Brimnes oferece uma excelente arrumação compacta. As gavetas com detalhes em vidro dão um charme extra, ideal para guardar comandos e jogos, mantendo os aparelhos de multimédia organizados nas prateleiras abertas.",
        family: "brimnes-tv",
        colorName: "Preto",
        colorCode: "#000000"
    },
    {
        id: "tv-brimnes-white",
        name: "Brimnes Branco",
        type: "Móvel de TV com prateleiras e gavetas",
        category: "tv",
        ref: "704.610.92",
        price: "34.000 MT",
        priceValue: 34000,
        image: "Assets/brimnes-movel-tv-branco__1451999_pe990825_s5.avif",
        altImages: ["Assets/brimnes-movel-tv-branco__0601754_pe681623_s5.avif", "Assets/brimnes-movel-tv-branco__1454290_pe991599_s5.avif"],
        dimensions: "120 x 41 x 53 cm (Largura x Profundidade x Altura)",
        materials: "Madeira aglomerada com acabamento em folha branca, gavetas de vidro temperado e corrediças suaves.",
        description: "A versão branca do móvel Brimnes traz um visual brilhante e arejado para a sua sala de estar. Altamente funcional com amplo espaço para organizar consolas de jogos e ocultar cabos.",
        family: "brimnes-tv",
        colorName: "Branco",
        colorCode: "#ffffff"
    },
    {
        id: "tv-brimnes-combination",
        name: "Brimnes Combinação Branco",
        type: "Estante e móvel de TV combinado",
        category: "tv",
        ref: "107.048.21",
        price: "78.000 MT",
        priceValue: 78000,
        image: "Assets/brimnes-combinacao-movel-tv-branco__1452023_pe990849_s5.avif",
        altImages: ["Assets/brimnes-combinacao-movel-tv-branco__1070482_pe854621_s5.avif"],
        dimensions: "240 x 41 x 190 cm (Largura x Profundidade x Altura)",
        materials: "Estruturas MDF aglomeradas com folha acrílica branca, vitrinas de vidro temperado.",
        description: "Uma parede de entretenimento completa e elegante. Combina o móvel de TV central com duas estantes laterais de arrumação fechada e vitrinas, ideal para expor livros e decorações e guardar objetos do dia a dia.",
        family: "brimnes-tv-combo",
        colorName: "Branco Composto",
        colorCode: "#ececec"
    },
    // Kallax TV Family
    {
        id: "tv-kallax-white",
        name: "Kallax Branco",
        type: "Móvel de TV / Estante minimalista",
        category: "tv",
        ref: "123.898.71",
        price: "28.000 MT",
        priceValue: 28000,
        image: "Assets/kallax-tv-bench-white__1248783_pe923213_s5.avif",
        altImages: ["Assets/kallax-tv-bench-white__1238898_pe918671_s5.avif"],
        dimensions: "147 x 39 x 57 cm (Largura x Profundidade x Altura)",
        materials: "Estrutura alveolar leve em MDF com revestimento acrílico e folha de papel branca.",
        description: "Use o móvel de TV Kallax no chão ou como divisória de ambientes. A sua estrutura limpa com cubos abertos convida a uma personalização total com caixas ou cestos de arrumação.",
        family: "kallax-tv",
        colorName: "Branco",
        colorCode: "#ffffff"
    },
    {
        id: "tv-kallax-black",
        name: "Kallax Preto-Castanho",
        type: "Móvel de TV / Estante minimalista",
        category: "tv",
        ref: "123.897.69",
        price: "28.000 MT",
        priceValue: 28000,
        image: "Assets/kallax-tv-bench-black-brown__1272912_pe929814_s5.avif",
        altImages: ["Assets/kallax-tv-bench-black-brown__1238897_pe918669_s5.avif"],
        dimensions: "147 x 39 x 57 cm (Largura x Profundidade x Altura)",
        materials: "Estrutura em fibra de madeira revestida a folha preta e castanha de grão texturizado.",
        description: "A clássica estante e móvel de TV Kallax num acabamento preto-castanho profundo. Oferece 4 nichos abertos perfeitos para caixas organizadoras e prateleira superior robusta.",
        family: "kallax-tv",
        colorName: "Preto-Castanho",
        colorCode: "#27211e"
    },
    {
        id: "tv-kallax-oak",
        name: "Kallax Carvalho Velado",
        type: "Móvel de TV / Estante minimalista",
        category: "tv",
        ref: "123.899.70",
        price: "28.000 MT",
        priceValue: 28000,
        image: "Assets/kallax-tv-bench-white-stained-oak-effect__1248784_pe923212_s5.avif",
        altImages: ["Assets/kallax-tv-bench-white-stained-oak-effect__1238899_pe918670_s5.avif"],
        dimensions: "147 x 39 x 57 cm (Largura x Profundidade x Altura)",
        materials: "Estrutura alveolar com acabamento efeito carvalho com velatura branca escandinava.",
        description: "O acabamento efeito carvalho traz calor natural e textura orgânica mate ao Kallax, mantendo a versatilidade de cubos abertos que caracterizam o design.",
        family: "kallax-tv",
        colorName: "Carvalho",
        colorCode: "#d7c0a3"
    },
    // Vihals
    {
        id: "tv-vihals",
        name: "Vihals Branco",
        type: "Móvel de TV minimalista com prateleiras",
        category: "tv",
        ref: "103.557.11",
        price: "31.000 MT",
        priceValue: 31000,
        image: "Assets/vihals-movel-tv-branco__1035579_pe838111_s5.avif",
        altImages: [],
        dimensions: "146 x 37 x 49 cm (Largura x Profundidade x Altura)",
        materials: "Painel de partículas com folha de melamina branca premium e pés integrados niveladores.",
        description: "Clean, simples e incrivelmente prático. O Vihals adapta-se a qualquer espaço, oferecendo prateleiras abertas para facilitar o arrefecimento e a conexão de consolas de jogos e boxes de TV."
    },
    // Storage Hauga
    {
        id: "storage-hauga",
        name: "Hauga Cinzento",
        type: "Vitrina de vidro e armário de arrumação",
        category: "storage",
        ref: "943.810.54",
        price: "50.000 MT",
        priceValue: 50000,
        image: "Assets/hauga-vitrina-cinz__0943810_pe797054_s5.avif",
        altImages: ["Assets/hauga-vitrina-cinz__0914106_pe783848_s5.avif"],
        dimensions: "105 x 46 x 116 cm (Largura x Profundidade x Altura)",
        materials: "Portas em vidro temperado de alta segurança, dobradiças ajustáveis e acabamento em cinzento mate requintado.",
        description: "O armário vitrina Hauga é o local perfeito para expor as suas loiças mais finas ou peças de arte colecionadas. O seu tampo superior caraterístico e as portas de vidro conferem-lhe uma identidade intemporal que enriquece qualquer sala de jantar ou estar."
    },
    // Skruvby Cabinets
    {
        id: "storage-skruvby-white",
        name: "Skruvby Branco",
        type: "Armário de arrumação tradicional",
        category: "storage",
        ref: "129.170.68",
        price: "40.000 MT",
        priceValue: 40000,
        image: "Assets/skruvby-combinacao-de-arrumacao-branco__1291707_pe934968_s5.avif",
        altImages: [],
        dimensions: "70 x 37 x 90 cm (Largura x Profundidade x Altura)",
        materials: "Acabamento branco com frentes tradicionais em relevo e puxadores discretos.",
        description: "A versão branca do armário Skruvby traz uma leveza romântica e clássica para salas pequenas ou quartos, combinando o design tradicional com a funcionalidade de arrumação moderna.",
        family: "skruvby-cabinet",
        colorName: "Branco",
        colorCode: "#ffffff"
    },
    {
        id: "storage-skruvby-blue",
        name: "Skruvby Azul Escuro",
        type: "Armário de arrumação com portas de vidro",
        category: "storage",
        ref: "133.301.10",
        price: "40.000 MT",
        priceValue: 40000,
        image: "Assets/skruvby-combinacao-de-arrumacao-azul-preto__1333010_pe946381_s5.avif",
        altImages: [],
        dimensions: "70 x 37 x 90 cm (Largura x Profundidade x Altura)",
        materials: "Acabamento lacado azul-escuro profundo (quase preto), portas com vidro e puxadores em metal escurecido.",
        description: "Esta peça da linha Skruvby destaca-se pela sua cor azul profunda e elegante, que acrescenta sofisticação e personalidade instantânea ao ambiente. Perfeito como livreiro ou armário de bar.",
        family: "skruvby-cabinet",
        colorName: "Azul Escuro",
        colorCode: "#1a2535"
    },
    // Tonstad
    {
        id: "storage-tonstad",
        name: "Tonstad Branco/Bege",
        type: "Módulo de arrumação de alto padrão",
        category: "storage",
        ref: "137.272.98",
        price: "77.000 MT",
        priceValue: 77000,
        image: "Assets/tonstad-combinacao-de-arrumacao-branco-bege__1372724_pe959698_s5.avif",
        altImages: ["Assets/tonstad-combinacao-de-arrumacao-branco-bege__1335083_pe946957_s5.avif"],
        dimensions: "120 x 40 x 140 cm (Largura x Profundidade x Altura)",
        materials: "Frentes com acabamento especial em laca bege e branca de toque sedoso. Ferragens de luxo alemãs.",
        description: "O Tonstad é uma combinação de arrumação premium que joga perfeitamente com os tons nude do nosso conceito de design. As frentes refinadas e a divisória aberta central criam uma peça escultural que exala elegância discreta."
    },
    // Bedroom Category
    {
        id: "bedroom-hemnes-bed",
        name: "Hemnes Divã",
        type: "Cama individual/dupla com 3 gavetas",
        category: "bedroom",
        ref: "002.287.05",
        price: "96.000 MT",
        priceValue: 96000,
        image: "Assets/hemnes-cama-indiv-dupla-c-3-gav-branco__1078996_pe857423_s5.avif",
        altImages: ["Assets/hemnes-cama-indiv-dupla-c-3-gav-branco__1014369_pe829634_s5.avif", "Assets/hemnes-cama-indiv-dupla-c-3-gav-branco__1036901_pe838568_s5.avif", "Assets/hemnes-cama-indiv-dupla-c-3-gav-branco__1092123_pe863035_s5.avif"],
        dimensions: "209 x 89 x 86 cm (Comprimento x Largura x Altura)",
        materials: "Estrutura em madeira maciça de pinho com acabamento em verniz acrílico branco. Puxadores de metal preto.",
        description: "Este divã versátil transforma-se rapidamente de sofá de dia para cama individual ou de casal. Dispõe de 3 gavetas espaçosas integradas na base para guardar colchas, almofadas e lençóis de forma elegante."
    },
    {
        id: "bedroom-gullaberg-white",
        name: "Gullaberg Branco",
        type: "Mesa de cabeceira tradicional",
        category: "bedroom",
        ref: "204.836.71",
        price: "20.000 MT",
        priceValue: 20000,
        image: "Assets/gullaberg-mesa-de-cabeceira-com-1gaveta-c-porta-branco__1348181_pe951161_s5.avif",
        altImages: ["Assets/gullaberg-mesa-de-cabeceira-com-1gaveta-c-porta-branco__1283771_pe932625_s5.avif"],
        dimensions: "39 x 39 x 65 cm (Largura x Profundidade x Altura)",
        materials: "Fibra de madeira MDF com acabamento em laca branca fosca. Ferragens metálicas cromadas.",
        description: "A mesa de cabeceira Gullaberg oferece uma arrumação fechada de estilo clássico, com pernas torneadas e frentes em relevo. Perfeita para quartos luxuosos e aconchegantes.",
        family: "gullaberg-bed",
        colorName: "Branco",
        colorCode: "#ffffff"
    },
    {
        id: "bedroom-gullaberg-grey",
        name: "Gullaberg Cinzento",
        type: "Mesa de cabeceira tradicional",
        category: "bedroom",
        ref: "204.836.75",
        price: "20.000 MT",
        priceValue: 20000,
        image: "Assets/gullaberg-mesa-de-cabeceira-com-1gaveta-c-porta-cinz__1283775_pe932629_s5.avif",
        altImages: [],
        dimensions: "39 x 39 x 65 cm (Largura x Profundidade x Altura)",
        materials: "Fibra de madeira MDF com acabamento em laca cinza escuro mate de toque sedoso.",
        description: "A versão cinza mate da mesa Gullaberg traz um ton neutro rico e elegante para o quarto, encaixando-se perfeitamente com roupas de cama brancas e nude.",
        family: "gullaberg-bed",
        colorName: "Cinzento",
        colorCode: "#7d7d7d"
    },
    // Outdoor Category
    {
        id: "outdoor-bockoen-hammock",
        name: "Bockoen Rede",
        type: "Rede de descanso com suporte",
        category: "outdoor",
        ref: "594.286.13",
        price: "31.000 MT",
        priceValue: 31000,
        image: "Assets/bockoen-hamnoen-hammock-with-stand-black-anthracite-white__1185298_pe898345_s5.avif",
        altImages: ["Assets/bockoen-hamnoen-hammock-with-stand-black-anthracite-white__1146335_pe882997_s5.avif", "Assets/bockoen-hamnoen-hammock-with-stand-black-anthracite-white__1198275_pe904128_s5.avif"],
        dimensions: "301 x 119 x 129 cm (Comprimento x Largura x Altura)",
        materials: "Suporte em aço galvanizado pintado a pó preto. Rede em tecido 100% poliéster durável e cordas náuticas reforçadas.",
        description: "Desfrute de tardes preguiçosas e relaxamento absoluto no seu jardim ou terraço. A rede Bockoen com suporte de aço é estável, segura e não requer ganchos na parede ou árvores."
    },
    {
        id: "outdoor-vittskaer-set",
        name: "Vittskär Lounge",
        type: "Conjunto exterior em rattan plástico",
        category: "outdoor",
        ref: "894.250.11",
        price: "133.000 MT",
        priceValue: 133000,
        image: "Assets/vittskaer-3-seat-conversation-set-outdoor-plastic-rattan-dark-grey-froesoen-duvholmen-beige__1434223_pe983404_s5.avif",
        altImages: ["Assets/vittskaer-3-seat-conversation-set-outdoor-plastic-rattan-dark-grey-froesoen-duvholmen-beige__1474101_pe997934_s5.avif", "Assets/vittskaer-3-seat-conversation-set-outdoor-plastic-rattan-dark-grey-froesoen-duvholmen-beige__1419145_pe976882_s5.avif"],
        dimensions: "Sofá: 220 x 145 x 75 cm. Mesa: 68 x 68 x 38 cm.",
        materials: "Estrutura de aço galvanizado, rattan sintético cinza escuro resistente a UV. Almofadas de exterior bege com enchimento repelente à água.",
        description: "Transforme o seu pátio com o conjunto Vittskär. Feito em rattan sintético trançado à mão, combina o requinte do cinza escuro com almofadas acolhedoras em bege de alta resiliência, ideais para climas costeiros."
    },
    {
        id: "outdoor-segeroen-lounger",
        name: "Segerön Espreguiçadeira",
        type: "Espreguiçadeira exterior com rodas",
        category: "outdoor",
        ref: "294.132.83",
        price: "45.000 MT",
        priceValue: 45000,
        image: "Assets/segeroen-sun-lounger-outdoor-white-beige-froesoen-duvholmen-beige__1185546_pe898460_s5.avif",
        altImages: ["Assets/segeroen-sun-lounger-outdoor-white-beige-froesoen-duvholmen-beige__1190992_pe900370_s5.avif", "Assets/segeroen-sun-lounger-outdoor-white-beige-froesoen-duvholmen-beige__1191452_ph191307_s5.avif"],
        dimensions: "195 x 71 x 43 cm (Comprimento x Largura x Altura)",
        materials: "Alumínio termolacado branco, tecido sintético mesh de exterior resistente a sol e humidade. Almofada bege.",
        description: "A espreguiçadeira Segerön combina a leveza e durabilidade do alumínio com almofadas macias bege Frösön/Duvholmen. Com rodas integradas, é fácil de mover para seguir a sombra ou o sol no seu jardim."
    },
    {
        id: "outdoor-skarpoe-chair",
        name: "Skarpö Cadeira",
        type: "Poltrona de exterior empilhável",
        category: "outdoor",
        ref: "702.341.02",
        price: "12.000 MT",
        priceValue: 12000,
        image: "Assets/skarpoe-armchair-outdoor-white__0979042_ph175831_s5.avif",
        altImages: ["Assets/skarpoe-armchair-outdoor-white__0729491_pe737010_s5.avif"],
        dimensions: "74 x 74 x 71 cm (Largura x Profundidade x Altura)",
        materials: "Polipropileno moldado a alta pressão com aditivos anti-desbotamento UV.",
        description: "Um ícone contemporâneo do mobiliário de exterior. A cadeira Skarpö oferece um assento espaçoso, ergonómico e com um prático orifício central para drenagem da água da chuva."
    },
    {
        id: "outdoor-tegeloen-set",
        name: "Tegelön Conversação",
        type: "Conjunto lounge exterior de 4 lugares",
        category: "outdoor",
        ref: "394.087.73",
        price: "105.000 MT",
        priceValue: 105000,
        image: "Assets/tegeloen-4-seat-conversation-set-outdoor-dark-grey-black__1390873_pe965604_s5.avif",
        altImages: ["Assets/tegeloen-4-seat-conversation-set-outdoor-dark-grey-black__1377092_pe960751_s5.avif", "Assets/tegeloen-4-seat-conversation-set-outdoor-dark-grey-black__1413052_ph202086_s5.avif"],
        dimensions: "Sofá: 135 x 74 x 70 cm. Cadeiras: 68 x 74 x 70 cm.",
        materials: "Estrutura de aço galvanizado, corda elástica tecida à mão e almofadas cinza escuro de alta densidade.",
        description: "Conforto moderno e ventilação ideal. A linha Tegelön utiliza cordas flexíveis e resistentes à chuva tecidas sobre aço preto, criando um design arrojado e moderno que se adapta ao clima moçambicano."
    },
    // Skogsoen Easy Chairs
    {
        id: "outdoor-skogsoen-green",
        name: "Skogsön Verde",
        type: "Poltrona de exterior minimalista",
        category: "outdoor",
        ref: "135.223.33",
        price: "26.000 MT",
        priceValue: 26000,
        image: "Assets/skogsoen-easy-chair-light-green-outdoor__1368589_pe957813_s5.avif",
        altImages: ["Assets/skogsoen-easy-chair-light-green-outdoor__1352233_pe952159_s5.avif"],
        dimensions: "72 x 75 x 72 cm",
        materials: "Aço termolacado a pó verde claro e assento de tecido resistente a UV.",
        description: "Skogsön é a fusão de estilo industrial e aconchego. O tom verde claro harmoniza lindamente com plantas e jardins exteriores.",
        family: "skogsoen-chair",
        colorName: "Verde",
        colorCode: "#8ca893"
    },
    {
        id: "outdoor-skogsoen-grey",
        name: "Skogsön Cinzento",
        type: "Poltrona de exterior minimalista",
        category: "outdoor",
        ref: "135.223.32",
        price: "26.000 MT",
        priceValue: 26000,
        image: "Assets/skogsoen-easy-chair-light-grey-outdoor__1368584_pe957808_s5.avif",
        altImages: ["Assets/skogsoen-easy-chair-light-grey-outdoor__1352232_pe952160_s5.avif"],
        dimensions: "72 x 75 x 72 cm",
        materials: "Aço termolacado a pó cinza claro com capas acolchoadas laváveis.",
        description: "A esbelta cadeira de exterior Skogsön em cinza claro oferece um conforto envolvente e design clean que complementa qualquer espaço gourmet ou alpendre.",
        family: "skogsoen-chair",
        colorName: "Cinzento",
        colorCode: "#b8b8b8"
    },
    // Tanebro Side Tables
    {
        id: "outdoor-tanebro-anthracite",
        name: "Tanebro Antracite",
        type: "Mesa de apoio interior/exterior",
        category: "outdoor",
        ref: "129.832.29",
        price: "10.000 MT",
        priceValue: 10000,
        image: "Assets/tanebro-side-table-indoor-outdoor-anthracite__1322867_pe942311_s5.avif",
        altImages: ["Assets/tanebro-side-table-indoor-outdoor-anthracite__1298329_pe936207_s5.avif"],
        dimensions: "45 x 45 x 46 cm",
        materials: "Aço com revestimento em pó de poliéster mate antiderrapante.",
        description: "Tanebro é leve, robusta e fácil de transportar. A sua cor antracite confere um toque luxuoso minimalista, servindo perfeitamente de apoio a espreguiçadeiras.",
        family: "tanebro-table",
        colorName: "Antracite",
        colorCode: "#2e2e2e"
    },
    {
        id: "outdoor-tanebro-beige",
        name: "Tanebro Bege-Cinza",
        type: "Mesa de apoio interior/exterior",
        category: "outdoor",
        ref: "129.139.92",
        price: "10.000 MT",
        priceValue: 10000,
        image: "Assets/tanebro-side-table-indoor-outdoor-light-grey-beige__1323451_pe942710_s5.avif",
        altImages: ["Assets/tanebro-side-table-indoor-outdoor-light-grey-beige__1291392_pe934885_s5.avif"],
        dimensions: "45 x 45 x 46 cm",
        materials: "Aço galvanizado tratado termicamente em bege areia mate.",
        description: "Esta versão em bege-cinza é o epítome dos tons nude da Confyhouse. Neutralidade requintada e alta resistência a UV.",
        family: "tanebro-table",
        colorName: "Bege-Cinza",
        colorCode: "#d2c5b7"
    },
    {
        id: "outdoor-tanebro-yellow",
        name: "Tanebro Amarelo",
        type: "Mesa de apoio interior/exterior",
        category: "outdoor",
        ref: "146.090.00",
        price: "10.000 MT",
        priceValue: 10000,
        image: "Assets/tanebro-side-table-indoor-outdoor-pale-yellow__1460900_pe994050_s5.avif",
        altImages: ["Assets/tanebro-side-table-indoor-outdoor-pale-yellow__1463962_pe994553_s5.avif"],
        dimensions: "45 x 45 x 46 cm",
        materials: "Aço termolacado a pó em amarelo pastel suave de toque suave.",
        description: "Um ponto de luz e descontração. A mesa Tanebro amarelo claro traz vitalidade e leveza ao seu pátio de forma discreta.",
        family: "tanebro-table",
        colorName: "Amarelo",
        colorCode: "#f3e1a0"
    },
    // Runnen Decking
    {
        id: "outdoor-runnen-acacia",
        name: "Runnen Acácia",
        type: "Placas de deck exterior (9 un.)",
        category: "outdoor",
        ref: "115.115.71",
        price: "4.500 MT / m²",
        priceValue: 4500,
        image: "Assets/runnen-floor-decking-outdoor-acacia__1151158_pe884807_s5.avif",
        altImages: ["Assets/runnen-floor-decking-outdoor-acacia__1174005_ph190433_s5.avif"],
        dimensions: "30 x 30 x 2 cm (Placa)",
        materials: "Madeira maciça de acácia com velatura acrílica protetora e base em plástico de encaixe simples.",
        description: "Renove instantaneamente o seu pátio ou varanda. As placas Runnen em acácia natural dão o conforto quente e luxuoso da madeira verdadeira, com encaixe sob pressão simples.",
        family: "runnen-decking",
        colorName: "Acácia",
        colorCode: "#ac764c"
    },
    {
        id: "outdoor-runnen-grey",
        name: "Runnen Cinza Escuro",
        type: "Placas de deck exterior (9 un.)",
        category: "outdoor",
        ref: "023.743.41",
        price: "4.500 MT / m²",
        priceValue: 4500,
        image: "Assets/runnen-floor-decking-outdoor-dark-grey__0673250_pe717131_s5.avif",
        altImages: ["Assets/runnen-floor-decking-outdoor-dark-grey__0997243_ph177160_s5.avif"],
        dimensions: "30 x 30 x 2 cm (Placa)",
        materials: "Plástico de polipropileno reciclado cinza escuro de alta aderência e resistência térmica.",
        description: "Prático, limpo e sem necessidade de manutenção. O deck Runnen cinza traz um estilo gráfico contemporâneo a varandas e caminhos exteriores.",
        family: "runnen-decking",
        colorName: "Cinza",
        colorCode: "#4e4e4e"
    },
    {
        id: "outdoor-runnen-grass",
        name: "Runnen Relva Artificial",
        type: "Placas de deck com relva (9 un.)",
        category: "outdoor",
        ref: "054.720.01",
        price: "5.000 MT / m²",
        priceValue: 5000,
        image: "Assets/runnen-floor-decking-outdoor-artificial-grass__0907946_pe656500_s5.avif",
        altImages: ["Assets/runnen-floor-decking-outdoor-artificial-grass__0997453_ph176846_s5.avif"],
        dimensions: "30 x 30 x 2 cm (Placa)",
        materials: "Polietileno sintético com aspeto de relva fresca e base plástica drenante.",
        description: "Crie um canto verde luxuriante na sua varanda ou pátio sem regas. A relva sintética macia sob os pés convida à descontração completa.",
        family: "runnen-decking",
        colorName: "Relva",
        colorCode: "#4a703d"
    },
    // Decor Category
    {
        id: "decor-sandtrav",
        name: "Sandtrav",
        type: "Almofada decorativa texturizada",
        category: "decor",
        ref: "123.965.86",
        price: "4.500 MT",
        priceValue: 4500,
        image: "Assets/sandtrav-almofada-bege-amarelado-branco__1239653_pe918986_s5.avif",
        altImages: [],
        dimensions: "50 x 50 cm",
        materials: "Capa 100% algodão biológico texturizado. Enchimento de penas de pato macias e sustentáveis.",
        description: "Acrescente textura e calor ao seu sofá com a almofada Sandtrav. O seu padrão bege e branco cria um conforto tátil e visual acolhedor, integrando-se idealmente na nossa paleta de tons nude."
    },
    {
        id: "decor-blidvaeder-lamp",
        name: "Blidväder Candeeiro",
        type: "Candeeiro de mesa decorativo",
        category: "decor",
        ref: "505.059.59",
        price: "9.500 MT",
        priceValue: 9500,
        image: "Assets/blidvaeder-candeeiro-de-mesa-branco-bege-ceramica-bege__1059594_pe849715_s5.avif",
        altImages: ["Assets/blidvaeder-candeeiro-de-mesa-branco-bege-ceramica-bege__1371868_ph199286_s5.avif", "Assets/blidvaeder-candeeiro-de-mesa-branco-bege-ceramica-bege__1371869_ph199301_s5.avif"],
        dimensions: "35 x 50 cm (Diâmetro x Altura)",
        materials: "Base em cerâmica de grés esmaltado bege e abajur em tecido cru texturizado de linho.",
        description: "Com a sua base cerâmica elegante e abajur de linho texturado, o candeeiro Blidväder cria uma iluminação quente e suave que enobrece qualquer aparador ou quarto."
    },
    {
        id: "decor-sjaelsligt-set",
        name: "Själsligt Acessórios",
        type: "Conjunto de 3 cactos decorativos",
        category: "decor",
        ref: "003.748.06",
        price: "4.000 MT",
        priceValue: 4000,
        image: "Assets/sjaelsligt-decoracao-conjunto-de-3-verde__0637480_pe698310_s5.avif",
        altImages: ["Assets/sjaelsligt-decoracao-conjunto-de-3-verde__0903281_pe626420_s5.avif"],
        dimensions: "Vários tamanhos (entre 10 e 16 cm de altura)",
        materials: "Grés cerâmico pintado com vidrado verde mate texturizado.",
        description: "Estes cactos decorativos esculpidos dão um toque contemporâneo orgânico ao seu móvel Bestá, combinando a sobriedade cerâmica com o charme botânico."
    },
    {
        id: "decor-olivblad-stand",
        name: "Olivblad Pedestal",
        type: "Pedestal para plantas (preto)",
        category: "decor",
        ref: "101.078.41",
        price: "7.000 MT",
        priceValue: 7000,
        image: "Assets/olivblad-plant-stand-indoor-outdoor-black__1041728_pe841133_s5.avif",
        altImages: ["Assets/olivblad-plant-stand-indoor-outdoor-black__1010784_pe828333_s5.avif", "Assets/olivblad-plant-stand-indoor-outdoor-black__1383512_pe962579_s5.avif"],
        dimensions: "35 x 35 x 74 cm (Largura x Profundidade x Altura)",
        materials: "Aço termolacado a pó preto mate com proteção contra oxidação.",
        description: "Exiba as suas plantas em diferentes níveis com o pedestal Olivblad. O seu design geométrico preto e elegante serve para interior ou exterior, criando uma floresta vertical compacta."
    },
    {
        id: "decor-rug-starreklinte",
        name: "Starreklinte",
        type: "Tapete de tecido liso (natural/preto)",
        category: "decor",
        ref: "120.571.84",
        price: "5.000 MT",
        priceValue: 5000,
        image: "Assets/starreklinte-rug-flatwoven-natural-black__1205718_pe907217_s5.avif",
        altImages: ["Assets/starreklinte-rug-flatwoven-natural-black__1446059_pe988528_s5.avif"],
        dimensions: "120 x 180 cm (Largura x Comprimento)",
        materials: "100% algodão natural sustentável. Tecido plano resistente, fácil de sacudir e limpar.",
        description: "O tapete Starreklinte destaca-se pelo seu aspeto rústico e artesanal em tons neutros de natural e preto. Perfeito para dar um toque acolhedor e texturado a corredores, quartos ou salas de jantar minimalistas.",
        badge: "Novo"
    },
    {
        id: "decor-rug-vollerslev",
        name: "Vollerslev",
        type: "Tapete de pelo alto luxuoso (branco)",
        category: "decor",
        ref: "093.366.31",
        price: "21.000 MT",
        priceValue: 21000,
        image: "Assets/vollerslev-rug-high-pile-white__0933663_pe792171_s5.avif",
        altImages: ["Assets/vollerslev-rug-high-pile-white__1446083_pe988540_s5.avif"],
        dimensions: "160 x 230 cm (Largura x Comprimento)",
        materials: "Pelo de poliéster denso e ultra-suave com base de látex sintético antiderrapante.",
        description: "Traga o máximo de conforto para os seus pés com o tapete de pelo alto Vollerslev. A sua densidade luxuosa e toque incrivelmente macio criam uma atmosfera acolhedora e sumptuosa, ideal para salas de estar elegantes.",
        badge: "Novo"
    },
    {
        id: "decor-rug-laettbetong",
        name: "Lättbetong",
        type: "Tapete de tecido plano para interior/exterior",
        category: "decor",
        ref: "143.502.26",
        price: "12.000 MT",
        priceValue: 12000,
        image: "Assets/laettbetong-rug-flatwoven-in-outdoor-beige-light-brown__1435022_pe983672_s5.avif",
        altImages: ["Assets/laettbetong-rug-flatwoven-in-outdoor-beige-light-brown__1461201_pe994097_s5.avif"],
        dimensions: "200 x 300 cm (Largura x Comprimento)",
        materials: "100% polipropileno resistente a intempéries, raios UV e desgaste intenso.",
        description: "Versátil e duradouro, o tapete Lättbetong é perfeito para ligar os seus espaços interiores com o terraço ou varanda. Com um padrão geométrico subtil em beige e castanho claro, é impermeável e extremamente fácil de lavar.",
        badge: "Novo"
    },
    {
        id: "decor-rug-tagspar",
        name: "Tågspår",
        type: "Tapete de pelo alto geométrico",
        category: "decor",
        ref: "125.069.37",
        price: "14.000 MT",
        priceValue: 14000,
        image: "Assets/tagspar-rug-high-pile-white-beige__1250693_pe923950_s5.avif",
        altImages: ["Assets/tagspar-rug-high-pile-white-beige__1250694_pe923948_s5.avif"],
        dimensions: "133 x 195 cm (Largura x Comprimento)",
        materials: "Fibras sintéticas densas de polipropileno de alta qualidade. Revestimento protetor antiderrapante.",
        description: "Com um design nórdico moderno de padrão geométrico discreto em tons de branco e bege, o tapete Tågspår combina estilo e conforto de forma intemporal. O seu pelo espesso atenua o som e proporciona uma superfície suave e quente.",
        badge: "Novo"
    }
,
    {
        id: "decor-lohals-mat",
        name: "Lohals Tapete Porta",
        type: "Tapete de porta em fibra natural de juta",
        category: "decor",
        ref: "118.506.59",
        price: "2.000 MT",
        priceValue: 2000,
        image: "Assets/lohals-door-mat-indoor-natural__1185065_pe898246_s5.avif",
        altImages: ["Assets/lohals-door-mat-indoor-natural__1192088_pe900828_s5.avif"],
        dimensions: "60 x 90 cm",
        materials: "100% fibra natural de juta ecológica.",
        description: "O tapete Lohals é feito à mão e traz uma textura rústica e acolhedora para o hall de entrada. Altamente resistente e durável."
    },
    {
        id: "decor-stavreby-mat",
        name: "Stavreby Tapete Porta",
        type: "Tapete de entrada tecido à mão",
        category: "decor",
        ref: "124.085.29",
        price: "2.000 MT",
        priceValue: 2000,
        image: "Assets/stavreby-door-mat-handmade-natural__1240852_pe919499_s5.avif",
        altImages: ["Assets/stavreby-door-mat-handmade-natural__1240853_pe919498_s5.avif"],
        dimensions: "60 x 90 cm",
        materials: "Fibra de coco natural e base de látex antiderrapante.",
        description: "O tapete Stavreby tem um design trançado elegante e base antiderrapante, ideal para limpar a sujidade dos sapatos com estilo."
    },
    {
        id: "decor-trampa-mat",
        name: "Trampa Tapete Porta",
        type: "Tapete de fibra de coco resistente",
        category: "decor",
        ref: "072.130.89",
        price: "2.000 MT",
        priceValue: 2000,
        image: "Assets/trampa-door-mat-natural__0721308_pe733157_s5.avif",
        altImages: ["Assets/trampa-door-mat-natural__0892866_pe654233_s5.avif", "Assets/trampa-door-mat-natural__1294095_ph172237_s5.avif"],
        dimensions: "60 x 90 cm",
        materials: "100% fibra de coco natural de alta densidade.",
        description: "Clássico e extremamente funcional. A fibra de coco grossa absorve humidade e raspa poeira de forma eficaz."
    },
    {
        id: "decor-tidtabell-beige",
        name: "Tidtabell Bege",
        type: "Tapete de tecido plano rústico",
        category: "decor",
        ref: "118.518.09",
        price: "9.000 MT",
        priceValue: 9000,
        image: "Assets/tidtabell-rug-flatwoven-beige__1185180_pe898299_s5.avif",
        altImages: ["Assets/tidtabell-rug-flatwoven-beige__1192332_pe901047_s5.avif"],
        dimensions: "133 x 195 cm",
        materials: "100% algodão ecológico tecido plano.",
        description: "O tapete plano Tidtabell Bege traz elegância sóbria com a sua textura tecida em tons neutros, perfeito para salas e salas de jantar.",
        family: "tidtabell-rug",
        colorName: "Bege",
        colorCode: "#dfd5c6"
    },
    {
        id: "decor-tidtabell-greyblue",
        name: "Tidtabell Cinza-Azul",
        type: "Tapete de tecido plano rústico",
        category: "decor",
        ref: "118.507.49",
        price: "9.000 MT",
        priceValue: 9000,
        image: "Assets/tidtabell-rug-flatwoven-grey-blue__1185074_pe898255_s5.avif",
        altImages: ["Assets/tidtabell-rug-flatwoven-grey-blue__1192254_pe901039_s5.avif"],
        dimensions: "133 x 195 cm",
        materials: "100% algodão ecológico tecido plano.",
        description: "O tapete plano Tidtabell Cinza-Azul oferece uma tonalidade moderna que combina fios azuis e cinzentos de aspeto contemporâneo.",
        family: "tidtabell-rug",
        colorName: "Cinza-Azul",
        colorCode: "#a1b2b8"
    },
    {
        id: "decor-tidtabell-grey",
        name: "Tidtabell Cinza",
        type: "Tapete de tecido plano rústico",
        category: "decor",
        ref: "120.573.29",
        price: "9.000 MT",
        priceValue: 9000,
        image: "Assets/tidtabell-rug-flatwoven-grey__1205732_pe907227_s5.avif",
        altImages: [],
        dimensions: "133 x 195 cm",
        materials: "100% algodão ecológico tecido plano.",
        description: "O tapete plano Tidtabell em cor cinza sólida e natural é discreto e robusto, protegendo o chão com sobriedade.",
        family: "tidtabell-rug",
        colorName: "Cinza",
        colorCode: "#8a8b8d"
    },
    {
        id: "decor-tversted-beige",
        name: "Tversted Tapete",
        type: "Tapete de pelo curto bege",
        category: "decor",
        ref: "117.917.99",
        price: "17.000 MT",
        priceValue: 17000,
        image: "Assets/tversted-rug-low-pile-beige__1179179_pe895879_s5.avif",
        altImages: ["Assets/tversted-rug-low-pile-beige__1179213_pe895885_s5.avif"],
        dimensions: "160 x 230 cm",
        materials: "Pelo denso de polipropileno macio e lavável.",
        description: "O tapete Tversted tem pelo curto e denso que amortece o som e oferece uma superfície incrivelmente macia para os pés."
    },
    {
        id: "decor-vaexelfel-white",
        name: "Växelfel Tapete",
        type: "Tapete de pelo curto off-white",
        category: "decor",
        ref: "139.006.99",
        price: "17.000 MT",
        priceValue: 17000,
        image: "Assets/vaexelfel-rug-low-pile-off-white__1390069_pe965346_s5.avif",
        altImages: ["Assets/vaexelfel-rug-low-pile-off-white__1456930_pe992525_s5.avif", "Assets/vaexelfel-rug-low-pile-off-white__1456932_pe992526_s5.avif", "Assets/vaexelfel-rug-low-pile-off-white__1522780_pe1013738_s5.avif"],
        dimensions: "160 x 230 cm",
        materials: "100% lã artificial tecida de alta densidade.",
        description: "Sofisticado e limpo, o tapete off-white Växelfel traz luminosidade instantânea e textura fofa para quartos de casal de luxo."
    },
    {
        id: "decor-dekad-clock",
        name: "Dekad Relógio",
        type: "Relógio despertador clássico em aço",
        category: "decor",
        ref: "063.737.99",
        price: "1.500 MT",
        priceValue: 1500,
        image: "Assets/dekad-relogio-despertador-preto__0637379_pe698263_s5.avif",
        altImages: ["Assets/dekad-relogio-despertador-preto__0905279_pe597343_s5.avif"],
        dimensions: "10 x 14 cm",
        materials: "Estrutura de aço preto e vidro protetor de alta nitidez.",
        description: "Um relógio despertador clássico com ponteiros mecânicos e campainhas duplas que trazem um toque retro e funcional para a mesa de cabeceira."
    },
    {
        id: "decor-aengspalpmal-cushion",
        name: "Ängspalpmal Capa",
        type: "Capa de almofada floral branca",
        category: "decor",
        ref: "134.438.39",
        price: "1.250 MT",
        priceValue: 1250,
        image: "Assets/aengspalpmal-cushion-cover-white-floral-pattern__1344383_pe949872_s5.avif",
        altImages: ["Assets/aengspalpmal-cushion-cover-white-floral-pattern__1344386_pe949873_s5.avif"],
        dimensions: "50 x 50 cm",
        materials: "100% algodão de origem sustentável com padrão floral.",
        description: "Padrão floral clássico e delicado que traz frescura e design romântico escandinavo para poltronas e camas."
    },
    {
        id: "decor-gullbergsoe-cushion",
        name: "Gullbergsö Capa",
        type: "Capa de almofada outdoor listrada",
        category: "decor",
        ref: "146.846.39",
        price: "1.250 MT",
        priceValue: 1250,
        image: "Assets/gullbergsoe-cushion-cover-bright-pink-bright-orange-outdoor-indoor__1468463_pe996109_s5.avif",
        altImages: ["Assets/gullbergsoe-cushion-cover-bright-pink-bright-orange-outdoor-indoor__1468465_pe996111_s5.avif"],
        dimensions: "50 x 50 cm",
        materials: "Poliéster impermeável de alta resistência a UV.",
        description: "Cores vibrantes rosa e laranja ideais para decorar espreguiçadeiras e sofás de jardim sob o sol."
    },
    {
        id: "outdoor-gunnoen-gazebo",
        name: "Gunnön Gazebo",
        type: "Gazebo de exterior com cobertura protetora",
        category: "outdoor",
        ref: "096.134.29",
        price: "25.000 MT",
        priceValue: 25000,
        image: "Assets/gunnoen-gazebo-dark-grey-grey__0961342_pe807499_s5.avif",
        altImages: ["Assets/gunnoen-gazebo-dark-grey-grey__0961346_pe807501_s5.avif", "Assets/gunnoen-gazebo-dark-grey-grey__0997388_ph177166_s5.avif", "Assets/gunnoen-gazebo-dark-grey-grey__1017335_pe830777_s5.avif"],
        dimensions: "233 x 238 x 235 cm",
        materials: "Estrutura de aço galvanizado anticorrosivo e lona de poliéster impermeável.",
        description: "Crie um refúgio acolhedor de sombra no seu terraço ou jardim com o gazebo Gunnön. Altamente estável e resistente a UV."
    },
    {
        id: "outdoor-hammaroen-pergola",
        name: "Hammarön Pérgola",
        type: "Pérgola de luxo ajustável",
        category: "outdoor",
        ref: "118.072.09",
        price: "45.000 MT",
        priceValue: 45000,
        image: "Assets/hammaroen-pergola-grey-beige-dark-grey-beige__1180720_pe896429_s5.avif",
        altImages: ["Assets/hammaroen-pergola-grey-beige-dark-grey-beige__1233362_pe916723_s5.avif", "Assets/hammaroen-pergola-grey-beige-dark-grey-beige__1264313_pe927340_s5.avif"],
        dimensions: "300 x 300 x 225 cm",
        materials: "Estrutura de aço termolacado a pó e teto de tecido com corrediças suaves.",
        description: "A pérgola de topo Hammarön permite controlar a exposição solar através de uma cobertura de tecido retrátil. O expoente máximo do lounge exterior."
    },
    {
        id: "outdoor-himmelsoe-gazebo",
        name: "Himmelsö Gazebo",
        type: "Gazebo familiar de grandes dimensões",
        category: "outdoor",
        ref: "092.316.39",
        price: "39.000 MT",
        priceValue: 39000,
        image: "Assets/himmelsoe-gazebo-dark-grey-grey-beige__0923163_pe788310_s5.avif",
        altImages: ["Assets/himmelsoe-gazebo-dark-grey-grey-beige__0972593_pe811700_s5.avif", "Assets/himmelsoe-gazebo-dark-grey-grey-beige__1020695_pe831958_s5.avif"],
        dimensions: "300 x 300 x 250 cm",
        materials: "Estrutura de alumínio reforçado, e lona de alta durabilidade bege.",
        description: "O gazebo Himmelsö oferece uma fantástica área de convívio sombreada para churrascos ou jantares de jardim com proteção solar superior."
    },
    {
        id: "outdoor-hissoe-parasol",
        name: "Hissö Guarda-sol",
        type: "Guarda-sol suspenso de grande diâmetro",
        category: "outdoor",
        ref: "119.105.59",
        price: "15.000 MT",
        priceValue: 15000,
        image: "Assets/hissoe-iggoen-parasol-hanging-with-base-anthracite-dark-grey__1191055_pe900433_s5.avif",
        altImages: ["Assets/hissoe-iggoen-parasol-hanging-with-base-anthracite-dark-grey__1191057_pe900429_s5.avif", "Assets/hissoe-iggoen-parasol-hanging-with-base-anthracite-dark-grey__1373623_pe960025_s5.avif"],
        dimensions: "300 x 240 cm (Diâmetro x Altura)",
        materials: "Aço escuro termolacado, lona impermeável e base Iggön robusta.",
        description: "O guarda-sol suspenso Hissö roda e inclina para proteger toda a sua mesa de refeições do sol sem postes ao centro."
    },
    {
        id: "outdoor-samsoe-parasol",
        name: "Samsö Guarda-sol",
        type: "Guarda-sol de poste inclinável",
        category: "outdoor",
        ref: "070.091.49",
        price: "9.000 MT",
        priceValue: 9000,
        image: "Assets/samsoe-parasol-tilting-beige__0709144_pe726832_s5.avif",
        altImages: ["Assets/samsoe-parasol-tilting-beige__0979889_pe814743_s5.avif", "Assets/samsoe-parasol-tilting-beige__1177344_pe895298_s5.avif"],
        dimensions: "200 x 220 cm (Diâmetro x Altura)",
        materials: "Poste metálico lacado a branco e lona de poliéster bege.",
        description: "Simples, inclinável e leve. O Samsö é excelente para terraços, varandas ou ao lado de espreguiçadeiras de piscina."
    },
    {
        id: "outdoor-bondholmen-sofa",
        name: "Bondholmen Sofá",
        type: "Sofá de exterior de 2 lugares em madeira branca",
        category: "outdoor",
        ref: "132.509.79",
        price: "49.000 MT",
        priceValue: 49000,
        image: "Assets/bondholmen-2-seat-sofa-outdoor-white-beige-froesoen-duvholmen-beige__1325097_pe943799_s5.avif",
        altImages: [],
        dimensions: "139 x 81 x 83 cm",
        materials: "Madeira de eucalipto maciça lacada a branco e almofadas Frösön bege.",
        description: "Design artesanal escandinavo clássico em eucalipto resistente. As suas almofadas confortáveis e laváveis são adequadas para convívios exteriores."
    },
    {
        id: "outdoor-havsten-sofa",
        name: "Havsten Sofá",
        type: "Sofá de exterior de 2 lugares minimalista",
        category: "outdoor",
        ref: "118.554.79",
        price: "81.000 MT",
        priceValue: 81000,
        image: "Assets/havsten-2-seat-sofa-outdoor-beige-beige__1185547_pe898439_s5.avif",
        altImages: ["Assets/havsten-2-seat-sofa-outdoor-beige-beige__1115188_ph165986_s5.avif", "Assets/havsten-2-seat-sofa-outdoor-beige-beige__1185561_pe898446_s5.avif"],
        dimensions: "179 x 94 x 90 cm",
        materials: "Estrutura de aço galvanizado texturizado bege e assento de malha elástica de alta tecnologia.",
        description: "Conforto supremo ao ar livre. O Havsten destaca-se pela sua estrutura esguia de aço e almofadas fofas impermeáveis que parecem flutuar."
    },
    {
        id: "outdoor-havsten-set",
        name: "Havsten/Lagaskär Conjunto",
        type: "Conjunto de conversação exterior premium",
        category: "outdoor",
        ref: "114.679.39",
        price: "101.000 MT",
        priceValue: 101000,
        image: "Assets/havsten-lagaskaer-2-seat-conversation-set-outdoor-beige-beige__1146793_pe883115_s5.avif",
        altImages: ["Assets/havsten-2-seat-sofa-outdoor-beige-beige__1185547_pe898439_s5.avif"],
        dimensions: "Sofá: 179 x 94 cm. Mesa: 74 x 74 cm.",
        materials: "Aço termolacado bege, tampo de mesa resistente a intempéries.",
        description: "A combinação perfeita de conforto e funcionalidade. Inclui o luxuoso sofá de 2 lugares Havsten e a mesa de centro Lagaskär."
    },
    {
        id: "outdoor-jolpen-sofa",
        name: "Jolpen Sofá",
        type: "Sofá de exterior de 2 lugares moderno",
        category: "outdoor",
        ref: "113.895.69",
        price: "34.000 MT",
        priceValue: 34000,
        image: "Assets/jolpen-2-seat-sofa-outdoor-white-grey__1138956_pe880161_s5.avif",
        altImages: ["Assets/jolpen-2-seat-sofa-outdoor-white-grey__1175328_pe894656_s5.avif", "Assets/jolpen-2-seat-sofa-outdoor-white-grey__1180716_pe896424_s5.avif", "Assets/jolpen-2-seat-sofa-outdoor-white-grey__1191480_ph191228_s5.avif"],
        dimensions: "120 x 70 x 75 cm",
        materials: "Plástico moldado de alta resistência UV e estrutura interna de alumínio.",
        description: "Livre de manutenção e extremamente durável. O sofá Jolpen em branco e cinzento traz um design compacto e moderno à prova de chuva."
    },
    {
        id: "outdoor-jutholmen-2seat",
        name: "Jutholmen 2 Lugares",
        type: "Sofá de exterior modular em vime sintético",
        category: "outdoor",
        ref: "138.004.89",
        price: "39.000 MT",
        priceValue: 39000,
        image: "Assets/jutholmen-2-seat-modular-sofa-outdoor-dark-grey-kuddarna-light-grey-beige__1380048_pe961608_s5.avif",
        altImages: [],
        dimensions: "146 x 73 x 71 cm",
        materials: "Vime plástico entrançado à mão, estrutura em aço e almofadas Kuddarna cinza.",
        description: "Sofá modular elegante e confortável em vime sintético cinzento escuro de aspeto natural e livre de manutenção.",
        family: "jutholmen-sofa",
        colorName: "2 Lugares",
        colorCode: "#6e6e6e"
    },
    {
        id: "outdoor-jutholmen-corner",
        name: "Jutholmen Canto 3 Lugares",
        type: "Sofá de canto modular em vime sintético",
        category: "outdoor",
        ref: "138.004.49",
        price: "53.000 MT",
        priceValue: 53000,
        image: "Assets/jutholmen-modular-corner-sofa-3-seat-outdoor-dark-grey-kuddarna-light-grey-beige__1380044_pe961600_s5.avif",
        altImages: ["Assets/jutholmen-modular-corner-sofa-3-seat-outdoor-dark-grey-kuddarna-light-grey-beige__1389878_pe965286_s5.avif"],
        dimensions: "210 x 146 x 71 cm",
        materials: "Vime plástico entrançado à mão, estrutura em aço e almofadas Kuddarna cinza.",
        description: "Sofá modular de canto ideal para aproveitar melhor o espaço do seu terraço ou pátio com o aconchego clássico do vime.",
        family: "jutholmen-sofa",
        colorName: "3 Lugares Canto",
        colorCode: "#4a4a4a"
    },
    {
        id: "outdoor-krokholmen-table",
        name: "Krokholmen Mesa Centro",
        type: "Mesa de centro redonda para exterior",
        category: "outdoor",
        ref: "073.645.69",
        price: "12.000 MT",
        priceValue: 12000,
        image: "Assets/krokholmen-coffee-table-outdoor-beige__0736456_pe740544_s5.avif",
        altImages: ["Assets/krokholmen-coffee-table-outdoor-beige__0789771_ph159263_s5.avif", "Assets/krokholmen-coffee-table-outdoor-beige__0943748_pe797032_s5.avif"],
        dimensions: "73 x 44 cm (Diâmetro x Altura)",
        materials: "Aço termolacado bege mate resistente a intempéries.",
        description: "Mesa de centro redonda elegante e minimalista. A grelha metálica do tampo deixa a água da chuva escorrer facilmente."
    },
    {
        id: "outdoor-lagaskaer-table",
        name: "Lagaskär Mesa Centro",
        type: "Mesa de apoio quadrada para exterior",
        category: "outdoor",
        ref: "113.896.09",
        price: "9.000 MT",
        priceValue: 9000,
        image: "Assets/lagaskaer-coffee-table-outdoor-beige__1138960_pe880165_s5.avif",
        altImages: ["Assets/lagaskaer-coffee-table-outdoor-beige__1191458_ph191300_s5.avif", "Assets/lagaskaer-coffee-table-outdoor-beige__1195089_ph191686_s5.avif"],
        dimensions: "74 x 74 x 42 cm",
        materials: "Estrutura em aço galvanizado e lacado bege mate.",
        description: "Uma mesa quadrada resistente que funciona lindamente de forma individual ou como parte do conjunto de sofás."
    },
    {
        id: "outdoor-naemmaroe-foldable",
        name: "Nämmarö Cadeira Dobrável",
        type: "Cadeira dobrável de exterior em acácia",
        category: "outdoor",
        ref: "113.875.69",
        price: "7.500 MT",
        priceValue: 7500,
        image: "Assets/naemmaroe-chair-outdoor-foldable-light-brown-stained__1138756_pe880056_s5.avif",
        altImages: ["Assets/naemmaroe-chair-outdoor-foldable-light-brown-stained__1175370_ph190435_s5.avif", "Assets/naemmaroe-chair-outdoor-foldable-light-brown-stained__1175371_ph190441_s5.avif"],
        dimensions: "45 x 58 x 87 cm",
        materials: "Madeira de acácia maciça com acabamento em velatura castanha clara.",
        description: "Cadeira dobrável e leve, de aspeto rústico moderno. Arruma-se facilmente economizando espaço precioso.",
        family: "naemmaroe-furniture",
        colorName: "Cadeira Dobrável",
        colorCode: "#967455"
    },
    {
        id: "outdoor-naemmaroe-lounge",
        name: "Nämmarö Cadeira Lounge",
        type: "Poltrona lounge exterior baixa em acácia",
        category: "outdoor",
        ref: "113.875.59",
        price: "12.000 MT",
        priceValue: 12000,
        image: "Assets/naemmaroe-lounge-chair-outdoor-light-brown-stained__1138755_pe880055_s5.avif",
        altImages: ["Assets/naemmaroe-lounge-chair-outdoor-light-brown-stained__1185528_pe898427_s5.avif"],
        dimensions: "62 x 65 x 75 cm",
        materials: "Madeira de acácia maciça com acabamento em velatura castanha clara.",
        description: "A cadeira lounge Nämmarö convida ao relaxamento completo no jardim. Com design de ripas largas de estilo resort.",
        family: "naemmaroe-furniture",
        colorName: "Cadeira Lounge",
        colorCode: "#7e5d3d"
    },
    {
        id: "outdoor-naemmaroe-2seat",
        name: "Nämmarö 2 Lugares",
        type: "Sofá exterior de 2 lugares em acácia",
        category: "outdoor",
        ref: "143.405.09",
        price: "37.000 MT",
        priceValue: 37000,
        image: "Assets/naemmaroe-2-seat-sofa-light-brown-stained-outdoor-kuddarna-light-grey-beige__1434050_pe983360_s5.avif",
        altImages: ["Assets/naemmaroe-2-seat-sofa-light-brown-stained-outdoor-kuddarna-light-grey-beige__1458352_pe993003_s5.avif", "Assets/naemmaroe-2-seat-sofa-light-brown-stained-outdoor-kuddarna-light-grey-beige__1458642_pe993104_s5.avif", "Assets/naemmaroe-2-seat-sofa-light-brown-stained-outdoor-kuddarna-light-grey-beige__1469152_pe996437_s5.avif"],
        dimensions: "140 x 74 x 75 cm",
        materials: "Madeira de acácia maciça com acabamento em velatura castanha clara e almofadas bege Kuddarna.",
        description: "O sofá de 2 lugares modular Nämmarö proporciona um ótimo conforto para conversar no pátio ou varanda com almofadas acolchoadas.",
        family: "naemmaroe-furniture",
        colorName: "2 Lugares",
        colorCode: "#c4a68a"
    },
    {
        id: "outdoor-naemmaroe-3seat",
        name: "Nämmarö 3 Lugares",
        type: "Sofá modular de 3 lugares com puff",
        category: "outdoor",
        ref: "140.793.29",
        price: "59.000 MT",
        priceValue: 59000,
        image: "Assets/naemmaroe-3-seat-sofa-outdoor-with-footstool-light-brown-stained-kuddarna-light-grey-beige__1407932_pe971646_s5.avif",
        altImages: ["Assets/naemmaroe-2-seat-sofa-light-brown-stained-outdoor-kuddarna-light-grey-beige__1458352_pe993003_s5.avif", "Assets/naemmaroe-3-seat-sofa-outdoor-with-footstool-light-brown-stained-kuddarna-light-grey-beige__1539104_pe1017560_s5.avif"],
        dimensions: "220 x 74 x 75 cm",
        materials: "Madeira de acácia maciça e almofadas Kuddarna bege impermeáveis.",
        description: "Sofá modular de 3 lugares e puff móvel que pode ser usado como chaise longue para esticar as pernas com o máximo relaxamento.",
        family: "naemmaroe-furniture",
        colorName: "3 Lugares c/ Puff",
        colorCode: "#ad8e72"
    },
    {
        id: "outdoor-naemmaroe-table",
        name: "Nämmarö Mesa",
        type: "Mesa retangular de exterior em acácia",
        category: "outdoor",
        ref: "113.876.49",
        price: "15.000 MT",
        priceValue: 15000,
        image: "Assets/naemmaroe-table-outdoor-light-brown-stained__1138764_pe880049_s5.avif",
        altImages: [],
        dimensions: "140 x 75 x 75 cm",
        materials: "Madeira de acácia maciça com acabamento em velatura castanha clara.",
        description: "Mesa de jantar de jardim em acácia sustentável. Design de ripas que se enquadra na perfeição em refeições familiares ao ar livre.",
        family: "naemmaroe-furniture",
        colorName: "Mesa Jantar",
        colorCode: "#917154"
    },
    {
        id: "outdoor-naemmaroe-lounger",
        name: "Nämmarö Espreguiçadeira",
        type: "Espreguiçadeira regulável em acácia",
        category: "outdoor",
        ref: "113.875.29",
        price: "20.000 MT",
        priceValue: 20000,
        image: "Assets/naemmaroe-sun-lounger-outdoor-light-brown-stained__1138752_pe880052_s5.avif",
        altImages: ["Assets/naemmaroe-sun-lounger-outdoor-light-brown-stained__1185535_pe898456_s5.avif", "Assets/naemmaroe-sun-lounger-outdoor-light-brown-stained__1191023_pe900398_s5.avif"],
        dimensions: "190 x 60 x 30 cm",
        materials: "Madeira de acácia maciça com acabamento em velatura e encosto ajustável.",
        description: "Desfrute do banho de sol com a espreguiçadeira Nämmarö. Encosto regulável em 5 posições de inclinação para o máximo conforto.",
        family: "naemmaroe-furniture",
        colorName: "Espreguiçadeira",
        colorCode: "#694e36"
    },
    {
        id: "outdoor-naemmaroe-box",
        name: "Nämmarö Caixa & Biombo",
        type: "Caixa de arrumação exterior com painel protetor",
        category: "outdoor",
        ref: "117.464.59",
        price: "17.000 MT",
        priceValue: 17000,
        image: "Assets/naemmaroe-storage-box-and-privacy-screen-outdoor-light-brown-stained__1174645_pe894565_s5.avif",
        altImages: ["Assets/naemmaroe-storage-box-and-privacy-screen-outdoor-light-brown-stained__1185300_pe898346_s5.avif", "Assets/naemmaroe-storage-box-and-privacy-screen-outdoor-light-brown-stained__1187308_pe899179_s5.avif"],
        dimensions: "80 x 44 x 140 cm",
        materials: "Madeira de acácia maciça e revestimento interno impermeável.",
        description: "Uma caixa de arrumação exterior em acácia e biombo de privacidade integrado. Ideal para pendurar plantas e guardar almofadas do sol.",
        family: "naemmaroe-furniture",
        colorName: "Caixa & Biombo",
        colorCode: "#533c26"
    },
    {
        id: "outdoor-revskaer-set",
        name: "Revsär Conjunto",
        type: "Conjunto de conversação em alumínio antracite",
        category: "outdoor",
        ref: "124.016.49",
        price: "119.000 MT",
        priceValue: 119000,
        image: "Assets/revskaer-3-seat-conversation-set-outdoor-anthracite-froesoen-duvholmen-dark-grey__1240164_pe919196_s5.avif",
        altImages: ["Assets/revskaer-3-seat-conversation-set-outdoor-anthracite-froesoen-duvholmen-dark-grey__1240165_pe919197_s5.avif", "Assets/revskaer-3-seat-conversation-set-outdoor-anthracite-froesoen-duvholmen-dark-grey__1270800_pe929402_s5.avif"],
        dimensions: "Sofá: 200 x 80 x 74 cm. Mesa: 80 x 80 cm.",
        materials: "Alumínio de espessura elevada antracite e almofadas de exterior Frösön cinza escuro.",
        description: "O conjunto de exterior Revsär é extremamente resistente e moderno. Com estrutura geométrica em alumínio antracite antioxidante."
    },
    {
        id: "outdoor-segeroen-sofa",
        name: "Segerön Sofá 2L",
        type: "Sofá de exterior de 2 lugares minimalista",
        category: "outdoor",
        ref: "119.447.99",
        price: "50.000 MT",
        priceValue: 50000,
        image: "Assets/segeroen-2-seat-sofa-outdoor-white-beige-froesoen-duvholmen-beige__1194479_pe901954_s5.avif",
        altImages: ["Assets/segeroen-2-seat-sofa-outdoor-white-beige-froesoen-duvholmen-beige__1384099_pe962971_s5.avif"],
        dimensions: "145 x 75 x 75 cm",
        materials: "Estrutura de aço termolacado branco com corda flexível e almofadas Frösön bege.",
        description: "Sofá confortável e durável com a assinatura da linha Segerön, combinando linhas brancas fluidas com almofadas nude.",
        family: "segeroen-furniture",
        colorName: "Sofá 2 Lugares",
        colorCode: "#ffffff"
    },
    {
        id: "outdoor-tegeloen-set",
        name: "Tegelön Conjunto",
        type: "Conjunto de conversação com mesa de centro",
        category: "outdoor",
        ref: "137.709.19",
        price: "95.000 MT",
        priceValue: 95000,
        image: "Assets/tegeloen-4-seat-conversation-set-outdoor-dark-grey-black__1377091_pe960750_s5.avif",
        altImages: ["Assets/tegeloen-4-seat-conversation-set-outdoor-dark-grey-black__1377092_pe960751_s5.avif", "Assets/tegeloen-4-seat-conversation-set-outdoor-dark-grey-black__1390873_pe965604_s5.avif", "Assets/tegeloen-4-seat-conversation-set-outdoor-dark-grey-black__1413052_ph202086_s5.avif"],
        dimensions: "Sofá: 135 x 74 cm. Cadeiras: 68 x 74 cm. Mesa: 80 x 60 cm.",
        materials: "Estrutura de aço galvanizado antracite, tampo metálico e corda elástica.",
        description: "O conjunto completo de conversação Tegelön de 4 lugares traz um visual sofisticado e ventilação ideal ao seu pátio gourmet."
    }];

// --- ROOM INSPIRATION MAP (Get the Look) ---
const ROOMS = {
    "living-classic": {
        title: "Harmonia em Tons Neutros",
        image: "Assets/PH_191155_2_62504fcfbb.jpg",
        products: ["sofa-vimle", "besta-tv-white", "decor-blidvaeder-lamp"]
    },
    "dining-cozy": {
        title: "Simplicidade Escandinava",
        image: "Assets/PE_878502_ab5c330185.jpg",
        products: ["sofa-kivik", "besta-tv-oak", "storage-tonstad"]
    },
    "lounge-luxury": {
        title: "Elegância Moderna",
        image: "Assets/PH_191127_1_d1dbd7d5c4.jpg",
        products: ["sofa-eskilstuna", "besta-tv-black", "storage-hauga"]
    },
    "reading-nook": {
        title: "Aconchego Minimalista",
        image: "Assets/PH182892.avif",
        products: ["decor-sandtrav", "storage-skruvby-white", "decor-rug-starreklinte"]
    }
};

// --- STATE MANAGEMENT ---
let cart = JSON.parse(localStorage.getItem('confyhouse_cart')) || [];
let activeCategory = 'all';
let searchQuery = '';

// --- DOM ELEMENTS ---
const preloader = document.getElementById('preloader');
const mainHeader = document.getElementById('main-header');
const heroSlides = document.querySelectorAll('.hero-slide');
const prevSlideBtn = document.querySelector('.slide-control-btn.prev');
const nextSlideBtn = document.querySelector('.slide-control-btn.next');
const slideDots = document.querySelectorAll('.slider-dots .dot');
const productGrid = document.getElementById('product-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const catalogSearchInput = document.getElementById('catalog-search-input');
const globalSearchInput = document.getElementById('global-search-input');
const searchTrigger = document.getElementById('search-trigger');
const searchOverlay = document.getElementById('search-overlay');
const searchClose = document.getElementById('search-close');
const searchResultsPreview = document.getElementById('search-results-preview');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const cartTrigger = document.getElementById('cart-trigger');
const cartDrawer = document.getElementById('cart-drawer');
const cartClose = document.getElementById('cart-close');
const cartCount = document.getElementById('cart-count');
const drawerItemCount = document.getElementById('drawer-item-count');
const drawerItemsContainer = document.getElementById('drawer-items-container');
const drawerFooter = document.getElementById('drawer-footer');
const inquiryForm = document.getElementById('inquiry-form');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast-notification');
const toastMessage = document.getElementById('toast-message');

// Modal Elements
const productModal = document.getElementById('product-modal');
const modalClose = document.getElementById('modal-close');
const modalProductImg = document.getElementById('modal-product-img');
const modalProductCat = document.getElementById('modal-product-cat');
const modalProductTitle = document.getElementById('modal-product-title');
const modalProductPrice = document.getElementById('modal-product-price');
const modalProductDesc = document.getElementById('modal-product-desc');
const modalProductDims = document.getElementById('modal-product-dims');
const modalProductMaterials = document.getElementById('modal-product-materials');
const modalQtyVal = document.getElementById('modal-qty-val');
const modalQtyMinus = document.querySelector('.quantity-selector .minus');
const modalQtyPlus = document.querySelector('.quantity-selector .plus');
const modalAddToCartBtn = document.getElementById('modal-add-to-cart-btn');

// Room Modal Elements
const roomModal = document.getElementById('room-modal');
const roomModalClose = document.getElementById('room-modal-close');
const roomModalImg = document.getElementById('room-modal-img');
const roomProductsList = document.getElementById('room-products-list');
const exploreRoomBtns = document.querySelectorAll('.explore-room-btn');

let currentActiveSlide = 0;
let slideInterval;
let selectedModalProduct = null;
let selectedModalQty = 1;

// --- INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
    // Hide Preloader after dynamic content setup
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 1000);

    renderProducts();
    updateCartUI();
    initHeroSlider();
    initScrollAnimations();
    setupEventListeners();
    checkUrlForProduct();
});

// --- HERO SLIDER ---
function initHeroSlider() {
    const showSlide = (index) => {
        heroSlides[currentActiveSlide].classList.remove('active');
        slideDots[currentActiveSlide].classList.remove('active');
        
        currentActiveSlide = (index + heroSlides.length) % heroSlides.length;
        
        heroSlides[currentActiveSlide].classList.add('active');
        slideDots[currentActiveSlide].classList.add('active');
    };

    const nextSlide = () => showSlide(currentActiveSlide + 1);
    const prevSlide = () => showSlide(currentActiveSlide - 1);

    // Auto slide change every 6 seconds
    slideInterval = setInterval(nextSlide, 6000);

    nextSlideBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 6000);
    });

    prevSlideBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 6000);
    });

    slideDots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(idx);
            slideInterval = setInterval(nextSlide, 6000);
        });
    });
}

// --- SCROLL ANIMATIONS ---
function initScrollAnimations() {
    // Scrolled Header styling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
        
        // Active link highlighting based on scroll position
        const sections = document.querySelectorAll('section');
        let currentSectionId = 'hero';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    // Fade-in elements on scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appeared');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-element').forEach(el => observer.observe(el));
}

// --- RENDER CATALOG PRODUCTS ---
function renderProducts() {
    productGrid.innerHTML = '';
    
    // Filter products
    const filteredProducts = PRODUCTS.filter(prod => {
        const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
        const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              prod.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              prod.ref.includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="no-results-msg" style="grid-column: 1/-1; text-align: center; padding: 48px 0; color: var(--text-secondary);">
                <i class="fa-solid fa-face-frown" style="font-size: 2.5rem; color: var(--nude-medium); margin-bottom: 16px;"></i>
                <p style="font-weight: 500;">Nenhum produto encontrado para a sua pesquisa.</p>
                <p style="font-size: 0.9rem; color: var(--text-muted);">Tente pesquisar com termos mais gerais.</p>
            </div>
        `;
        return;
    }

    // Grouping by family to avoid duplicates on the catalog grid while keeping all options available
    const displayedProducts = [];
    const seenFamilies = new Set();
    
    filteredProducts.forEach(prod => {
        if (prod.family) {
            if (!seenFamilies.has(prod.family)) {
                seenFamilies.add(prod.family);
                // Get the first variant of this family that matches the query to represent the card
                const familyMatches = filteredProducts.filter(p => p.family === prod.family);
                displayedProducts.push(familyMatches[0]);
            }
        } else {
            displayedProducts.push(prod);
        }
    });

    displayedProducts.forEach(prod => {
        const card = document.createElement('article');
        card.className = 'product-card';
        const badgeHtml = prod.badge ? `<span class="product-badge">${prod.badge}</span>` : '';
        
        // Find all variants in main database for color switcher options
        const variants = prod.family ? PRODUCTS.filter(p => p.family === prod.family) : [];
        let swatchesHtml = '';
        if (variants.length > 1) {
            swatchesHtml = `
                <div class="card-variants">
                    ${variants.map(v => `
                        <button class="card-variant-dot${v.id === prod.id ? ' active' : ''}" 
                                style="background-color: ${v.colorCode};" 
                                data-id="${v.id}"
                                data-name="${v.name}"
                                data-type="${v.type}"
                                data-price="${v.price}"
                                data-image="${v.image}"
                                aria-label="Cor ${v.colorName}">
                        </button>
                    `).join('')}
                </div>
            `;
        }

        card.innerHTML = `
            <div class="product-img-wrapper" style="cursor: pointer;">
                ${badgeHtml}
                <img src="${prod.image}" alt="${prod.name}" loading="lazy" class="card-product-img">
                <div class="product-overlay-actions">
                    <button class="product-action-btn view-details-btn" data-id="${prod.id}">Ver Detalhes</button>
                    <button class="product-action-btn btn-icon-only quick-add-btn" data-id="${prod.id}" aria-label="Adicionar à Seleção">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="product-info" style="cursor: pointer;">
                <span class="product-category">${getCategoryLabel(prod.category)}</span>
                <h4 class="product-title">${prod.name}</h4>
                <p class="product-type" style="text-transform: none; font-size: 0.85rem; margin-bottom: 8px;">
                    ${prod.type}
                </p>
                ${swatchesHtml}
                <div class="product-footer">
                    <span class="product-price">${prod.price}</span>
                </div>
            </div>
        `;
        
        // Color switcher logic inside card
        if (variants.length > 1) {
            const dots = card.querySelectorAll('.card-variant-dot');
            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    dots.forEach(d => d.classList.remove('active'));
                    dot.classList.add('active');
                    
                    const vId = dot.dataset.id;
                    const vName = dot.dataset.name;
                    const vType = dot.dataset.type;
                    const vPrice = dot.dataset.price;
                    const vImage = dot.dataset.image;
                    
                    card.querySelector('.card-product-img').src = vImage;
                    card.querySelector('.card-product-img').alt = vName;
                    card.querySelector('.product-title').textContent = vName;
                    card.querySelector('.product-type').textContent = vType;
                    card.querySelector('.product-price').textContent = vPrice;
                    
                    card.querySelector('.view-details-btn').dataset.id = vId;
                    card.querySelector('.quick-add-btn').dataset.id = vId;
                });
            });
        }

        card.addEventListener('click', (e) => {
            if (!e.target.closest('.quick-add-btn') && !e.target.closest('.card-variant-dot')) {
                const activeId = card.querySelector('.view-details-btn').dataset.id;
                openProductModal(activeId);
            }
        });
        
        productGrid.appendChild(card);
    });

    // Add listeners to new elements
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openProductModal(e.currentTarget.dataset.id);
        });
    });
    
    document.querySelectorAll('.quick-add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = e.currentTarget.dataset.id;
            addToCart(id, 1);
        });
    });
}

function getCategoryLabel(cat) {
    switch (cat) {
        case 'sofa': return 'Sofá & Poltrona';
        case 'tv': return 'Móvel de TV';
        case 'storage': return 'Arrumação';
        case 'bedroom': return 'Quarto';
        case 'outdoor': return 'Exterior';
        case 'decor': return 'Acessório';
        default: return 'Geral';
    }
}

// --- PRODUCT QUICK VIEW MODAL ---
function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    selectedModalProduct = product;
    selectedModalQty = 1;
    modalQtyVal.textContent = selectedModalQty;

    modalProductImg.src = product.image;
    modalProductImg.alt = product.name;
    modalProductCat.textContent = getCategoryLabel(product.category);
    modalProductTitle.textContent = product.name;
    modalProductPrice.textContent = product.price;
    modalProductDesc.textContent = product.description;
    modalProductDims.textContent = product.dimensions;
    modalProductMaterials.textContent = product.materials;

    // Update query param in URL without reload
    const newUrl = `${window.location.pathname}?product=${product.id}`;
    window.history.replaceState(null, '', newUrl);

    // Image gallery thumbnails setup
    const thumbnailsContainer = document.getElementById('modal-thumbnails');
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
        
        const allImages = [product.image];
        if (product.altImages && product.altImages.length > 0) {
            allImages.push(...product.altImages);
        }
        
        if (allImages.length > 1) {
            allImages.forEach((imgSrc, idx) => {
                const thumb = document.createElement('div');
                thumb.className = `thumbnail-item${idx === 0 ? ' active' : ''}`;
                thumb.innerHTML = `<img src="${imgSrc}" alt="Miniatura ${idx + 1}">`;
                thumb.addEventListener('click', () => {
                    modalProductImg.src = imgSrc;
                    thumbnailsContainer.querySelectorAll('.thumbnail-item').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                });
                thumbnailsContainer.appendChild(thumb);
            });
        }
    }

    // Variants/Acabamentos section
    const variantsContainer = document.getElementById('modal-product-variants');
    if (variantsContainer) {
        variantsContainer.innerHTML = '';
        if (product.family) {
            // Find all variants in family
            const variants = PRODUCTS.filter(p => p.family === product.family);
            if (variants.length > 1) {
                const variantsWrapper = document.createElement('div');
                variantsWrapper.className = 'modal-product-variants-wrapper';
                variantsWrapper.innerHTML = `
                    <span class="variants-title">Acabamentos / Cores:</span>
                    <div class="variants-list"></div>
                `;
                const list = variantsWrapper.querySelector('.variants-list');
                variants.forEach(v => {
                    const dot = document.createElement('button');
                    dot.className = `variant-dot${v.id === product.id ? ' active' : ''}`;
                    dot.style.backgroundColor = v.colorCode;
                    dot.setAttribute('data-color-name', v.colorName);
                    dot.setAttribute('aria-label', `Cor ${v.colorName}`);
                    dot.addEventListener('click', (e) => {
                        e.stopPropagation();
                        openProductModal(v.id);
                    });
                    list.appendChild(dot);
                });
                variantsContainer.appendChild(variantsWrapper);
            }
        }
    }

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
    selectedModalProduct = null;
    
    // Clear URL query parameter
    window.history.replaceState(null, '', window.location.pathname);
}

// --- ROOM EXPLORATION MODAL ---
function openRoomModal(roomId) {
    const room = ROOMS[roomId];
    if (!room) return;

    roomModalImg.src = room.image;
    roomModalImg.alt = room.title;
    roomProductsList.innerHTML = '';

    room.products.forEach(pId => {
        const prod = PRODUCTS.find(p => p.id === pId);
        if (prod) {
            const itemCard = document.createElement('div');
            itemCard.className = 'room-prod-card';
            itemCard.innerHTML = `
                <div class="room-prod-img">
                    <img src="${prod.image}" alt="${prod.name}">
                </div>
                <div class="room-prod-info">
                    <h4 class="room-prod-title">${prod.name}</h4>
                    <span class="room-prod-price">${prod.price}</span>
                </div>
                <div class="room-prod-action">
                    <button class="room-prod-add-btn" data-id="${prod.id}" title="Adicionar à Seleção">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            `;
            roomProductsList.appendChild(itemCard);
        }
    });

    roomModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Add listeners
    document.querySelectorAll('.room-prod-add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            addToCart(e.currentTarget.dataset.id, 1);
        });
    });
}

function closeRoomModal() {
    roomModal.classList.remove('active');
    document.body.style.overflow = '';
}

// --- CART STATE ACTIONS ---
function addToCart(productId, qty) {
    const quantity = parseInt(qty);
    const existingIndex = cart.findIndex(item => item.productId === productId);
    const product = PRODUCTS.find(p => p.id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({ productId, quantity });
    }

    localStorage.setItem('confyhouse_cart', JSON.stringify(cart));
    updateCartUI();
    showToast(`Adicionado: ${product.name} (${quantity}x)`);
}

function updateCartQuantity(productId, change) {
    const index = cart.findIndex(item => item.productId === productId);
    if (index > -1) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem('confyhouse_cart', JSON.stringify(cart));
        updateCartUI();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    localStorage.setItem('confyhouse_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    // Total count
    const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    cartCount.textContent = totalItems;
    drawerItemCount.textContent = totalItems;

    if (cart.length === 0) {
        drawerItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-couch"></i>
                <p>A sua lista está vazia.</p>
                <p>Explore as nossas coleções e adicione as peças de que gosta para solicitar uma encomenda.</p>
                <button id="drawer-explore-btn" class="btn btn-outline">Explorar Coleções</button>
            </div>
        `;
        drawerFooter.classList.add('hidden');
        
        // Re-attach explorer button listener
        const exploreBtn = document.getElementById('drawer-explore-btn');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', () => {
                closeCartDrawer();
                window.location.hash = '#collections';
            });
        }
    } else {
        drawerItemsContainer.innerHTML = '';
        drawerFooter.classList.remove('hidden');

        cart.forEach(item => {
            const product = PRODUCTS.find(p => p.id === item.productId);
            if (product) {
                const itemEl = document.createElement('div');
                itemEl.className = 'cart-item';
                itemEl.innerHTML = `
                    <div class="cart-item-img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${product.name}</h4>
                        <div class="cart-item-qty-price">
                            <div class="cart-item-qty-controls">
                                <button class="qty-btn minus" data-id="${product.id}"><i class="fa-solid fa-minus"></i></button>
                                <span class="qty-val">${item.quantity}</span>
                                <button class="qty-btn plus" data-id="${product.id}"><i class="fa-solid fa-plus"></i></button>
                            </div>
                            <span class="cart-item-price">${product.price}</span>
                        </div>
                    </div>
                    <button class="cart-item-remove" data-id="${product.id}" aria-label="Remover">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                `;
                drawerItemsContainer.appendChild(itemEl);
            }
        });

        // Add listeners inside drawer
        document.querySelectorAll('.cart-item .qty-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => updateCartQuantity(e.currentTarget.dataset.id, -1));
        });
        document.querySelectorAll('.cart-item .qty-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => updateCartQuantity(e.currentTarget.dataset.id, 1));
        });
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => removeFromCart(e.currentTarget.dataset.id));
        });
    }
}

function openCartDrawer() {
    cartDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
    cartDrawer.classList.remove('active');
    document.body.style.overflow = '';
}

// --- GLOBAL SEARCH OVERLAY ---
function initGlobalSearch(query) {
    if (!query) {
        searchResultsPreview.innerHTML = '';
        return;
    }

    const matches = PRODUCTS.filter(prod => 
        prod.name.toLowerCase().includes(query.toLowerCase()) || 
        prod.type.toLowerCase().includes(query.toLowerCase()) ||
        prod.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 4); // Limit preview to 4 items

    searchResultsPreview.innerHTML = '';

    if (matches.length === 0) {
        searchResultsPreview.innerHTML = '<div style="padding: 12px; color: var(--text-muted); font-size: 0.9rem;">Nenhum produto corresponde à pesquisa.</div>';
        return;
    }

    matches.forEach(prod => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
            <div class="search-result-img">
                <img src="${prod.image}" alt="${prod.name}">
            </div>
            <div class="search-result-info">
                <h5>${prod.name}</h5>
                <span>${prod.type}</span>
            </div>
            <div style="margin-left: auto; font-weight: 600; font-size: 0.85rem; color: var(--nude-dark);">${prod.price}</div>
        `;
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
            openProductModal(prod.id);
        });
        searchResultsPreview.appendChild(item);
    });
}

// --- TOAST NOTIFICATIONS ---
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// --- WHATSAPP INQUIRY GENERATOR ---
function handleWhatsAppInquiry(e) {
    e.preventDefault();
    
    const clientName = document.getElementById('inquiry-name').value.trim();
    const clientLocation = document.getElementById('inquiry-location').value;
    const clientNotes = document.getElementById('inquiry-notes').value.trim();

    if (!clientName || !clientLocation) return;

    let messageText = `*SOLICITAÇÃO DE ENCOMENDA - CONFYHOUSE*\n\n`;
    messageText += `*Cliente:* ${clientName}\n`;
    messageText += `*Localização:* ${clientLocation}\n`;
    if (clientNotes) {
        messageText += `*Observações:* ${clientNotes}\n`;
    }
    messageText += `\n*ITENS SELECIONADOS:*\n`;

    let totalEstimate = 0;
    let hasPrices = true;

    cart.forEach((item, index) => {
        const product = PRODUCTS.find(p => p.id === item.productId);
        if (product) {
            const itemTotal = product.priceValue * item.quantity;
            totalEstimate += itemTotal;
            messageText += `${index + 1}. *${product.name}*\n`;
            messageText += `   Qtd: ${item.quantity} | Preço Unit: ${product.price}\n`;
            
            // Build the clean item link to automatically open the product modal
            const itemLink = `${window.location.origin}${window.location.pathname}?product=${product.id}`;
            messageText += `   Ver Produto: ${itemLink}\n\n`;
        }
    });

    if (totalEstimate > 0) {
        messageText += `*Estimativa Total:* ${totalEstimate.toLocaleString('pt-PT')} MT\n`;
        messageText += `_(Sujeito a taxas de entrega e confirmação de stock)_\n`;
    }

    messageText += `\nMuito obrigado! Aguardo o contacto para concluir a encomenda e alinhar prazos de entrega.`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappPhoneNumber = "258843842960"; // Real phone number configuration
    const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}?text=${encodedMessage}`;

    // Clear cart upon submission
    cart = [];
    localStorage.removeItem('confyhouse_cart');
    updateCartUI();
    closeCartDrawer();
    
    // Open Whatsapp
    window.open(whatsappUrl, '_blank');
}

// --- AUTO-OPEN PRODUCT MODAL FROM URL ---
function checkUrlForProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
    if (productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (product) {
            // Wait slightly for DOM to be ready and preloader to fade out
            setTimeout(() => {
                openProductModal(productId);
            }, 1200);
        }
    }
}

// --- LISTENERS CONFIGURATION ---
function setupEventListeners() {
    // Navigation link smooth offset scroll
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = e.currentTarget.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetEl = document.querySelector(href);
                if (targetEl) {
                    const offsetTop = targetEl.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close drawers
                    mobileNavDrawer.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });

    // Category filter click
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            activeCategory = e.target.dataset.filter;
            renderProducts();
        });
    });

    // Sub-menus in footer or other elements category filter shortcut
    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = e.currentTarget.dataset.cat;
            const targetFilterBtn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
            if (targetFilterBtn) {
                targetFilterBtn.click();
                const targetEl = document.querySelector('#collections');
                if (targetEl) {
                    window.scrollTo({
                        top: targetEl.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Search bar catalog
    catalogSearchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderProducts();
    });

    // Global search input overlay trigger
    searchTrigger.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        globalSearchInput.focus();
    });

    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
        globalSearchInput.value = '';
        searchResultsPreview.innerHTML = '';
    });

    globalSearchInput.addEventListener('input', (e) => {
        initGlobalSearch(e.target.value.trim());
    });

    // Close global search when clicking outside
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
        }
    });

    // Mobile nav toggler
    mobileMenuToggle.addEventListener('click', () => {
        mobileNavDrawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    mobileMenuClose.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close mobile nav when clicking outside on backdrop
    mobileNavDrawer.addEventListener('click', (e) => {
        if (e.target === mobileNavDrawer) {
            mobileNavDrawer.classList.remove('active');
            document.body.style.overflow = '';
        }
    });


    // Cart trigger drawer
    cartTrigger.addEventListener('click', () => {
        openCartDrawer();
    });

    cartClose.addEventListener('click', () => {
        closeCartDrawer();
    });

    cartDrawer.addEventListener('click', (e) => {
        if (e.target === cartDrawer) {
            closeCartDrawer();
        }
    });

    // Product Modal Qty Adjustment
    modalQtyMinus.addEventListener('click', () => {
        if (selectedModalQty > 1) {
            selectedModalQty--;
            modalQtyVal.textContent = selectedModalQty;
        }
    });

    modalQtyPlus.addEventListener('click', () => {
        selectedModalQty++;
        modalQtyVal.textContent = selectedModalQty;
    });

    modalAddToCartBtn.addEventListener('click', () => {
        if (selectedModalProduct) {
            addToCart(selectedModalProduct.id, selectedModalQty);
            closeProductModal();
        }
    });

    // Modal close hooks
    modalClose.addEventListener('click', closeProductModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            closeProductModal();
        }
    });

    // Room Modal Close
    roomModalClose.addEventListener('click', closeRoomModal);
    roomModal.addEventListener('click', (e) => {
        if (e.target === roomModal) {
            closeRoomModal();
        }
    });

    // Inspiration explore buttons
    document.querySelectorAll('.moodboard-item').forEach(item => {
        const btn = item.querySelector('.explore-room-btn');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                openRoomModal(item.dataset.room);
            });
        }
        item.addEventListener('click', () => {
            openRoomModal(item.dataset.room);
        });
    });

    // Inquiry form submit
    inquiryForm.addEventListener('submit', handleWhatsAppInquiry);

    // Contact form submit simulation
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('form-name').value.trim();
        showToast(`Obrigado ${name}! Mensagem enviada.`);
        contactForm.reset();
    });
}
