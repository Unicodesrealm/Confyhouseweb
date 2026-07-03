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
        price: "125.000 MT",
        priceValue: 125000,
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
        price: "115.000 MT",
        priceValue: 115000,
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
        price: "135.000 MT",
        priceValue: 135000,
        image: "Assets/eskilstuna-sofa-3-lugares-c-chaise-longue-hillared-bege__1256275_pe924995_s5.avif",
        altImages: [],
        dimensions: "268 x 162 x 100 cm (Largura x Profundidade x Altura)",
        materials: "Aço reforçado nas articulações, enchimento de poliuretano de alta densidade. Tecido Hillared de luxo de textura rica.",
        description: "O sofá Eskilstuna destaca-se pela sua cabeceira alta e ajustável e encostos reclináveis, garantindo conforto ergonómico absoluto. A chaise longue pode ser posicionada à esquerda ou à direita, adaptando-se perfeitamente ao layout da sua sala."
    },
    {
        id: "besta-tv-white-green",
        name: "Bestå",
        type: "Móvel de TV com gavetas e portas",
        category: "tv",
        ref: "142.062.30",
        price: "48.500 MT",
        priceValue: 48500,
        image: "Assets/besta-movel-de-tv-c-gavetas-branco-krukmakare-verde-acinzentado-escuro__1420625_pe977430_s5.avif",
        altImages: [],
        dimensions: "180 x 42 x 74 cm (Largura x Profundidade x Altura)",
        materials: "Frentes com acabamento lacado mate e Krukmakare verde-acinzentado escuro. Puxadores minimalistas e corrediças de fecho suave.",
        description: "Esta versão elegante da linha Bestå combina o minimalismo do branco com frentes texturizadas Krukmakare num tom verde-acinzentado escuro ultra-luxuoso. Ideal para acrescentar um contraste orgânico a paredes claras."
    },
    {
        id: "besta-tv-white",
        name: "Bestå Lappviken Branco",
        type: "Móvel de TV minimalista com gavetas",
        category: "tv",
        ref: "999.733.49",
        price: "42.000 MT",
        priceValue: 42000,
        image: "Assets/besta-movel-de-tv-c-gavetas-branco-lappviken-stubbarp-branco__0999733_pe823749_s5.avif",
        altImages: ["Assets/besta-movel-de-tv-c-gavetas-branco-lappviken-stubbarp-branco__0375474_pe553091_s5.avif"],
        dimensions: "180 x 42 x 48 cm (Largura x Profundidade x Altura)",
        materials: "Estrutura em fibra de madeira com acabamento em folha de melamina de alta resistência. Pés Stubbarp elegantes.",
        description: "O móvel de TV Bestå Lappviken Branco é a própria definição de pureza visual. O seu acabamento branco brilhante e frentes lisas criam um aspeto contínuo que se funde com a decoração da sua sala, mantendo os cabos e aparelhos elegantemente ocultos."
    },
    {
        id: "besta-tv-oak",
        name: "Bestå Hanviken Carvalho",
        type: "Móvel de TV em tom carvalho natural",
        category: "tv",
        ref: "988.810.28",
        price: "46.900 MT",
        priceValue: 46900,
        image: "Assets/besta-movel-de-tv-c-gavetas-ef-carvalho-c-velatura-branca-hanviken-stubbarp-ef-carvalho-c-velatura-branca__0988810_pe818228_s5.avif",
        altImages: [],
        dimensions: "180 x 42 x 64 cm (Largura x Profundidade x Altura)",
        materials: "MDF revestido a folha de carvalho natural com velatura branca protetora, conferindo uma textura mate natural.",
        description: "Com um acabamento de carvalho com velatura branca, este móvel Bestå traz o calor e o aconchego da madeira natural sem perder a leveza visual. As portas Hanviken moldadas acrescentam um toque clássico-moderno sublime."
    },
    {
        id: "besta-tv-black",
        name: "Bestå Lappviken Preto-Castanho",
        type: "Móvel de TV sóbrio com gavetas",
        category: "tv",
        ref: "999.676.68",
        price: "43.500 MT",
        priceValue: 43500,
        image: "Assets/besta-movel-de-tv-c-gavetas-preto-castanho-lappviken-stubbarp-preto-castanho__0999676_pe823768_s5.avif",
        altImages: ["Assets/besta-movel-de-tv-c-gavetas-preto-castanho-lappviken-stubbarp-preto-castanho__0341752_pe531768_s5.avif"],
        dimensions: "180 x 42 x 48 cm (Largura x Profundidade x Altura)",
        materials: "Frentes Lappviken preto-castanho com textura de madeira sutil ao toque. Estrutura robusta anti-riscos.",
        description: "Para salas de estar que procuram uma presença dramática e sofisticada, este Bestå preto-castanho é ideal. Combina lindamente com decorações modernas, contrastando com paredes em tons nude e elementos metálicos dourados."
    },
    {
        id: "besta-tv-walnut",
        name: "Bestå Lappviken Nogueira",
        type: "Móvel de TV efeito nogueira",
        category: "tv",
        ref: "146.571.49",
        price: "45.000 MT",
        priceValue: 45000,
        image: "Assets/besta-movel-de-tv-pret-cast-lappviken-efeito-nogueira__1465711_pe995149_s5.avif",
        altImages: ["Assets/besta-movel-de-tv-pret-cast-lappviken-efeito-nogueira__1449590_pe989968_s5.avif"],
        dimensions: "120 x 42 x 48 cm (Largura x Profundidade x Altura)",
        materials: "Frentes com acabamento em folha efeito nogueira e laterais em preto mate de alta qualidade.",
        description: "Compacto e elegante, este móvel Bestå exibe um impressionante efeito de nogueira de grão rico. Perfeito para apartamentos sofisticados em Maputo ou espaços que exigem arrumação otimizada sem comprometer o design luxuoso."
    },
    {
        id: "tv-brimnes",
        name: "Brimnes Preto",
        type: "Móvel de TV funcional com prateleiras e gavetas",
        category: "tv",
        ref: "704.610.91",
        price: "24.500 MT",
        priceValue: 24500,
        image: "Assets/brimnes-movel-tv-preto__0704610_pe725291_s5.avif",
        altImages: [],
        dimensions: "120 x 41 x 53 cm (Largura x Profundidade x Altura)",
        materials: "Frentes de gaveta com vidro temperado, corrediças metálicas e compartimento de cabos no painel traseiro.",
        description: "O Brimnes oferece uma excelente arrumação compacta. As gavetas com detalhes em vidro dão um charme extra, ideal para guardar comandos e jogos, mantendo os aparelhos de multimédia organizados nas prateleiras abertas."
    },
    {
        id: "tv-vihals",
        name: "Vihals Branco",
        type: "Móvel de TV minimalista com prateleiras",
        category: "tv",
        ref: "103.557.11",
        price: "21.900 MT",
        priceValue: 21900,
        image: "Assets/vihals-movel-tv-branco__1035579_pe838111_s5.avif",
        altImages: [],
        dimensions: "146 x 37 x 49 cm (Largura x Profundidade x Altura)",
        materials: "Painel de partículas com folha de melamina branca premium e pés integrados niveladores.",
        description: "Clean, simples e incrivelmente prático. O Vihals adapta-se a qualquer espaço, oferecendo prateleiras abertas para facilitar o arrefecimento e a conexão de consolas de jogos e boxes de TV."
    },
    {
        id: "storage-hauga",
        name: "Hauga Cinzento",
        type: "Vitrina de vidro e armário de arrumação",
        category: "storage",
        ref: "943.810.54",
        price: "36.000 MT",
        priceValue: 36000,
        image: "Assets/hauga-vitrina-cinz__0943810_pe797054_s5.avif",
        altImages: ["Assets/hauga-vitrina-cinz__0914106_pe783848_s5.avif"],
        dimensions: "105 x 46 x 116 cm (Largura x Profundidade x Altura)",
        materials: "Portas em vidro temperado de alta segurança, dobradiças ajustáveis e acabamento em cinzento mate requintado.",
        description: "O armário vitrina Hauga é o local perfeito para expor as suas loiças mais finas ou peças de arte colecionadas. O seu tampo superior caraterístico e as portas de vidro conferem-lhe uma identidade intemporal que enriquece qualquer sala de jantar ou estar."
    },
    {
        id: "storage-skruvby-blue",
        name: "Skruvby Azul Escuro",
        type: "Armário de arrumação com portas de vidro",
        category: "storage",
        ref: "133.301.10",
        price: "28.500 MT",
        priceValue: 28500,
        image: "Assets/skruvby-combinacao-de-arrumacao-azul-preto__1333010_pe946381_s5.avif",
        altImages: [],
        dimensions: "70 x 37 x 90 cm (Largura x Profundidade x Altura)",
        materials: "Acabamento lacado azul-escuro profundo (quase preto), portas com vidro e puxadores em metal escurecido.",
        description: "Esta peça da linha Skruvby destaca-se pela sua cor azul profunda e elegante, que acrescenta sofisticação e personalidade instantânea ao ambiente. Perfeito como livreiro ou armário de bar."
    },
    {
        id: "storage-skruvby-white",
        name: "Skruvby Branco",
        type: "Armário de arrumação tradicional",
        category: "storage",
        ref: "129.170.68",
        price: "26.500 MT",
        priceValue: 26500,
        image: "Assets/skruvby-combinacao-de-arrumacao-branco__1291707_pe934968_s5.avif",
        altImages: [],
        dimensions: "70 x 37 x 90 cm (Largura x Profundidade x Altura)",
        materials: "Acabamento branco com frentes tradicionais em relevo e puxadores discretos.",
        description: "A versão branca do armário Skruvby traz uma leveza romântica e clássica para salas pequenas ou quartos, combinando o design tradicional com a funcionalidade de arrumação moderna."
    },
    {
        id: "storage-tonstad",
        name: "Tonstad Branco/Bege",
        type: "Módulo de arrumação de alto padrão",
        category: "storage",
        ref: "137.272.98",
        price: "54.900 MT",
        priceValue: 54900,
        image: "Assets/tonstad-combinacao-de-arrumacao-branco-bege__1372724_pe959698_s5.avif",
        altImages: ["Assets/tonstad-combinacao-de-arrumacao-branco-bege__1335083_pe946957_s5.avif"],
        dimensions: "120 x 40 x 140 cm (Largura x Profundidade x Altura)",
        materials: "Frentes com acabamento especial em laca bege e branca de toque sedoso. Ferragens de luxo alemãs.",
        description: "O Tonstad é uma combinação de arrumação premium que joga perfeitamente com os tons nude do nosso conceito de design. As frentes refinadas e a divisória aberta central criam uma peça escultural que exala elegância discreta."
    },
    {
        id: "decor-sandtrav",
        name: "Sandtrav",
        type: "Almofada decorativa texturizada",
        category: "decor",
        ref: "123.965.86",
        price: "3.200 MT",
        priceValue: 3200,
        image: "Assets/sandtrav-almofada-bege-amarelado-branco__1239653_pe918986_s5.avif",
        altImages: [],
        dimensions: "50 x 50 cm",
        materials: "Capa 100% algodão biológico texturizado. Enchimento de penas de pato macias e sustentáveis.",
        description: "Acrescente textura e calor ao seu sofá com a almofada Sandtrav. O seu padrão bege e branco cria um conforto tátil e visual acolhedor, integrando-se idealmente na nossa paleta de tons nude."
    }
];

// --- ROOM INSPIRATION MAP (Get the Look) ---
const ROOMS = {
    "living-classic": {
        title: "Harmonia em Tons Neutros",
        image: "Assets/PH_191155_2_62504fcfbb.jpg",
        products: ["sofa-vimle", "besta-tv-white", "decor-sandtrav"]
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
        products: ["decor-sandtrav", "storage-skruvby-white"]
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
        
        document.querySelectorAll('.nav-link').forEach(link => {
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

    filteredProducts.forEach(prod => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${prod.image}" alt="${prod.name}" loading="lazy">
                <div class="product-overlay-actions">
                    <button class="product-action-btn view-details-btn" data-id="${prod.id}">Ver Detalhes</button>
                    <button class="product-action-btn btn-icon-only quick-add-btn" data-id="${prod.id}" aria-label="Adicionar à Seleção">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryLabel(prod.category)}</span>
                <h4 class="product-title">${prod.name}</h4>
                <p class="product-category" style="text-transform: none; font-size: 0.8rem; margin-bottom: 12px; height: 32px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                    ${prod.type}
                </p>
                <div class="product-footer">
                    <span class="product-price">${prod.price}</span>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });

    // Add listeners to new elements
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => openProductModal(e.target.dataset.id));
    });
    
    document.querySelectorAll('.quick-add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            addToCart(id, 1);
        });
    });
}

function getCategoryLabel(cat) {
    switch (cat) {
        case 'sofa': return 'Sofá';
        case 'tv': return 'Móvel de TV';
        case 'storage': return 'Arrumação';
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

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
    selectedModalProduct = null;
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
