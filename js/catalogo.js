(function () {
  var CATALOG_PRODUCTS = [
    {
      id: 'geotextil-nao-tecido',
      nome: 'Geotêxtil Não Tecido',
      categoria: 'Reforço & Contenção',
      catSlug: 'reforco',
      img: 'assets/img/produtos/geotextil-nao-tecido.jpg',
      desc: 'Manta permeável e flexível feita de fibras contínuas de poliéster. Atua como filtro inteligente que deixa a água passar e retém partículas sólidas, evitando acúmulo de umidade e instabilidade.',
      onde: ['Subsolo de edificações', 'Rodovias e ferrovias', 'Campos esportivos e jardins', 'Pátios e estacionamentos', 'Muros de contenção e taludes', 'Mineração e saneamento'],
      como: 'Aplicado como camada de filtração, separação entre solos distintos ou proteção mecânica sobre geomembranas e em sistemas de drenagem, desenrolando a manta diretamente sobre o terreno preparado.'
    },
    {
      id: 'geotextil-tecido',
      nome: 'Geotêxtil Tecido',
      categoria: 'Reforço & Contenção',
      catSlug: 'reforco',
      img: 'assets/img/produtos/geotextil-tecido.jpg',
      desc: 'Tecido técnico de alta resistência mecânica desenvolvido para melhorar a capacidade de suporte do solo, distribuindo as cargas de forma uniforme e reduzindo custos e prazos da obra.',
      onde: ['Aterros sobre solos moles', 'Obras de solo reforçado', 'Rodovias e ferrovias', 'Muros de contenção', 'Pátios industriais'],
      como: 'Estendido em camadas horizontais entre o solo e o aterro compactado, atuando como elemento estrutural de reforço e separação.'
    },
    {
      id: 'veu-poliester',
      nome: 'Véu de Poliéster',
      categoria: 'Impermeabilização',
      catSlug: 'impermeabilizacao',
      img: 'assets/img/produtos/veu-poliester.jpg',
      desc: 'Manta leve 100% poliéster criada para estruturar impermeabilizações moldadas no local. Resiste à dilatação das superfícies, evita escorrimento e prolonga a vida útil da camada impermeabilizada.',
      onde: ['Lajes e coberturas', 'Áreas molhadas', 'Impermeabilizações a frio e a quente', 'Estruturas horizontais e verticais'],
      como: 'Desenrolado diretamente sobre a primeira demão de emulsão ou manta líquida ainda fresca e recoberto em seguida, evitando bolhas, furos e trincas.'
    },
    {
      id: 'geomembrana-pead',
      nome: 'Geomembrana PEAD',
      categoria: 'Impermeabilização',
      catSlug: 'impermeabilizacao',
      img: 'assets/img/produtos/geomembrana-pead.jpg',
      desc: 'Barreira impermeável em polietileno de alta densidade que bloqueia e controla líquidos e gases com alta resistência química, mecânica e proteção contra raios solares.',
      onde: ['Aterros sanitários e industriais', 'Lagoas de efluentes e vinhaça', 'Reservatórios de água e piscicultura', 'Barragens de rejeito', 'Canais de irrigação e biodigestores'],
      como: 'Os rolos são estendidos sobre o terreno regularizado, ancorados em canaletas periféricas (com perfil E quando há concreto) e unidos por solda térmica (termofusão) para garantir estanqueidade total.'
    },
    {
      id: 'geocomposto-drenante',
      nome: 'Geocomposto Drenante',
      categoria: 'Drenagem',
      catSlug: 'drenagem',
      img: 'assets/img/produtos/geocomposto-drenante.jpg',
      desc: 'Sistema pronto para drenagem que combina um núcleo drenante com geotêxtil filtrante, substituindo camadas espessas de areia e brita com instalação rápida e alta vazão.',
      onde: ['Muros de arrimo (drenagem vertical)', 'Aterros sanitários e industriais', 'Rodovias e túneis', 'Campos esportivos e jardins suspensos', 'Proteção de geomembranas'],
      como: 'Desenrolado diretamente na vertical contra muros e taludes ou na horizontal sob pavimentos e aterros, captando água ou gases e conduzindo-os para a saída de drenagem.'
    },
    {
      id: 'tubo-dreno-corrugado',
      nome: 'Tubo Dreno Corrugado',
      categoria: 'Drenagem',
      catSlug: 'drenagem',
      img: 'assets/img/produtos/tubo-dreno-corrugado.jpg',
      desc: 'Tubo flexível de PEAD com furos radiais ao longo de toda a extensão para coletar e escoar água do subsolo, evitando encharcamento e alívio de pressão hidrostática.',
      onde: ['Subsolo de edificações', 'Pátios e estacionamentos', 'Drenagem agrícola', 'Obras de contenção', 'Campos esportivos e áreas verdes'],
      como: 'Assentado em valas com caimento adequado, geralmente envolvido com manta geotêxtil e camada de brita para filtrar o solo e impedir o entupimento dos furos.'
    },
    {
      id: 'duto-drenagem',
      nome: 'Duto de Drenagem',
      categoria: 'Drenagem',
      catSlug: 'drenagem',
      img: 'assets/img/produtos/duto-drenagem.jpg',
      desc: 'Tubo corrugado de dupla parede (externa corrugada resistente e interna lisa para alto fluxo), leve para transportar e ideal para conduzir grandes volumes de água.',
      onde: ['Rodovias e ferrovias', 'Obras de terraplenagem e galerias', 'Aterros sanitários', 'Barragens e túneis', 'Macrodrenagem urbana'],
      como: 'As barras são posicionadas na vala escavada e acopladas de forma rápida com conexões, permitindo o escoamento contínuo sob cargas elevadas de aterro e tráfego.'
    },
    {
      id: 'tubo-liso-pead',
      nome: 'Tubo Liso PEAD',
      categoria: 'Drenagem',
      catSlug: 'drenagem',
      img: 'assets/img/produtos/tubo-liso-pead.jpg',
      desc: 'Tubulação lisa em PEAD de alta durabilidade, leve, flexível e resistente à corrosão e abrasão, indicada para condução segura de água, esgoto e efluentes.',
      onde: ['Abastecimento de água e irrigação', 'Redes de esgoto e drenagem', 'Transporte de chorume em aterros', 'Fluidos industriais'],
      como: 'Fornecido em barras ou rolos, é instalado em valas ou linhas aparentes com emendas soldadas por termofusão, formando uma linha contínua sem vazamentos.'
    },
    {
      id: 'eletroduto-corrugado',
      nome: 'Eletroduto Corrugado PEAD',
      categoria: 'Infraestrutura Elétrica',
      catSlug: 'eletrica',
      img: 'assets/img/produtos/eletroduto-corrugado.jpg',
      desc: 'Duto corrugado flexível projetado para proteger cabos de energia e telecomunicações em redes subterrâneas, com baixo atrito interno para facilitar a passagem dos fios.',
      onde: ['Redes de alta, média e baixa tensão', 'Fibra óptica e telecomunicações', 'Concessionárias de energia', 'Portos, aeroportos e indústrias', 'Condomínios residenciais e rodovias'],
      como: 'Estendido em valas subterrâneas com curvas suaves sem necessidade de muitas emendas, permitindo puxar os cabos com guia interna de forma segura e rápida.'
    },
    {
      id: 'gabiao',
      nome: 'Gabião',
      categoria: 'Reforço & Contenção',
      catSlug: 'reforco',
      img: 'assets/img/produtos/gabiao.jpg',
      desc: 'Estruturas flexíveis e drenantes em tela metálica de dupla torção preenchidas com pedras. Adaptam-se ao movimento do terreno, aliviam a pressão da água e integram-se à vegetação.',
      onde: ['Muros de arrimo e contenção de encostas', 'Canalização e proteção de margens de rios', 'Escadas dissipadoras e bueiros', 'Apoios de pontes e barragens', 'Defesas costeiras'],
      como: 'Disponível nos formatos caixa, colchão e saco; as gaiolas metálicas são montadas no local, interligadas entre si e preenchidas com pedras britadas ou seixos.'
    },
    {
      id: 'geocelula-pead',
      nome: 'Geocélula PEAD',
      categoria: 'Reforço & Contenção',
      catSlug: 'reforco',
      img: 'assets/img/produtos/geocelula-pead.jpg',
      desc: 'Sistema tridimensional em formato de colmeia que confina o solo, a brita ou o concreto dentro de cada célula, aumentando a resistência do terreno e evitando erosões.',
      onde: ['Proteção de taludes e encostas', 'Estabilização de subleito e rodovias', 'Reforço de pátios e fundações', 'Revestimento de canais'],
      como: 'Os painéis sanfonados são abertos sobre o talude ou base, fixados com grampos ou estacas e preenchidos com solo vegetado, brita ou concreto.'
    },
    {
      id: 'geogrelha-poliester-pet',
      nome: 'Geogrelha Poliéster PET',
      categoria: 'Reforço & Contenção',
      catSlug: 'reforco',
      img: 'assets/img/produtos/geogrelha-poliester-pet.jpg',
      desc: 'Malha estrutural leve e flexível de poliéster com altíssima resistência à tração e baixa deformação ao longo do tempo, ideal para reforçar solos de baixa capacidade.',
      onde: ['Aterros sobre solos moles', 'Muros de solo reforçado', 'Reforço de rodovias e ferrovias', 'Taludes íngremes'],
      como: 'Desenrolada horizontalmente em camadas entre o solo compactado, travando os agregados na malha e distribuindo os esforços da estrutura.'
    },
    {
      id: 'geogrelha-biaxial',
      nome: 'Geogrelha Biaxial',
      categoria: 'Reforço & Contenção',
      catSlug: 'reforco',
      img: 'assets/img/produtos/geogrelha-biaxial.jpg',
      desc: 'Grelha rígida de polipropileno com resistência igual nos dois sentidos, que intertrava a brita e reduz a espessura necessária de material granular na base de vias e pátios.',
      onde: ['Estabilização de subleito', 'Base e sub-base de rodovias', 'Estruturas ferroviárias', 'Pátios logísticos e fundações'],
      como: 'Estendida diretamente sobre o solo mole ou subleito antes da camada de brita, evitando recalques diferenciais e aumentando a vida útil do pavimento.'
    },
    {
      id: 'geogrelha-fibra-de-vidro',
      nome: 'Geogrelha de Fibra de Vidro',
      categoria: 'Pavimentação & Erosão',
      catSlug: 'pavimentacao',
      img: 'assets/img/produtos/geogrelha-fibra-de-vidro.jpg',
      desc: 'Reforço asfáltico com baixíssima deformação e revestimento betuminoso que bloqueia o aparecimento de trincas por reflexão e reduz a necessidade de manutenção no asfalto.',
      onde: ['Recapeamento e repavimentação asfáltica', 'Rodovias e vias urbanas de tráfego pesado', 'Pistas de aeroportos'],
      como: 'Aplicada sobre o pavimento antigo fresado ou nivelado logo antes da nova capa asfáltica, aumentando em várias vezes a durabilidade do recapeamento.'
    },
    {
      id: 'biomanta-trm',
      nome: 'Biomanta e Manto TRM',
      categoria: 'Pavimentação & Erosão',
      catSlug: 'pavimentacao',
      img: 'assets/img/produtos/biomanta-trm.jpg',
      desc: 'Mantas de proteção superficial contra erosão causadas pela chuva e pelo vento. Disponíveis em versão temporária biodegradável ou permanente (TRM) para auxiliar o crescimento da vegetação.',
      onde: ['Taludes e encostas', 'Margens de rios e canais', 'Áreas de descarga de tubos', 'Revegetação de muros verdes e campos'],
      como: 'Desenroladas e fixadas com grampos sobre o solo já semeado, protegendo as sementes, conservando a umidade e estabilizando o terreno até e após a vegetação crescer.'
    }
  ];

  var grid = document.getElementById('catalogGrid');
  var empty = document.getElementById('catalogEmpty');
  var searchInput = document.getElementById('catalogSearch');
  var filterBtns = document.querySelectorAll('.cat-filter-btn');
  var activeCat = 'all';

  function render() {
    var q = (searchInput ? searchInput.value : '').trim().toLowerCase();
    var filtered = CATALOG_PRODUCTS.filter(function (p) {
      var catOk = activeCat === 'all' || p.catSlug === activeCat;
      if (!catOk) return false;
      if (!q) return true;
      var hay = (p.nome + ' ' + p.categoria + ' ' + p.desc + ' ' + p.onde.join(' ') + ' ' + p.como).toLowerCase();
      return hay.indexOf(q) !== -1;
    });

    if (!filtered.length) {
      grid.innerHTML = '';
      empty.classList.add('show');
      return;
    }
    empty.classList.remove('show');
    grid.innerHTML = filtered.map(function (p) {
      var waMsg = encodeURIComponent('Olá, Prodesivo! Vi o catálogo de produtos e gostaria de solicitar um orçamento para: ' + p.nome + '.');
      return '<article class="cat-product-card" id="' + p.id + '">' +
        '<div class="cat-product-media">' +
          '<img src="' + p.img + '" alt="' + p.nome + '" width="800" height="500" loading="lazy" decoding="async">' +
          '<span class="cat-product-cat">' + p.categoria + '</span>' +
        '</div>' +
        '<div class="cat-product-body">' +
          '<h3>' + p.nome + '</h3>' +
          '<p class="cat-product-desc">' + p.desc + '</p>' +
          '<div class="cat-info-block">' +
            '<span class="cat-info-label">Onde é aplicado</span>' +
            '<div class="cat-app-tags">' + p.onde.map(function (o) { return '<span class="cat-app-tag">' + o + '</span>'; }).join('') + '</div>' +
          '</div>' +
          '<div class="cat-info-block">' +
            '<span class="cat-info-label">Como é aplicado</span>' +
            '<p class="cat-how-text">' + p.como + '</p>' +
          '</div>' +
          '<div class="cat-product-foot">' +
            '<a class="cat-quote-btn" href="https://wa.me/5561984311510?text=' + waMsg + '" target="_blank" rel="noopener">' +
              '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/><path d="M12 2a10 10 0 0 0-8.56 15.17L2 22l4.98-1.31A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.96.78.79-2.88-.2-.3A8.2 8.2 0 1 1 12 20.2z" fill-rule="evenodd"/></svg>' +
              'Solicitar orçamento' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('is-active'); b.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');
      activeCat = btn.getAttribute('data-cat') || 'all';
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', render);
  }

  render();

  // Header & mobile menu
  var header = document.getElementById('header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Floating popover
  var catFloat = document.getElementById('catFloat');
  var catBtn = document.getElementById('catFloatBtn');
  if (catFloat && catBtn) {
    catBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = catFloat.classList.toggle('is-open');
      catBtn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', function (e) {
      if (!catFloat.contains(e.target)) {
        catFloat.classList.remove('is-open');
        catBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
