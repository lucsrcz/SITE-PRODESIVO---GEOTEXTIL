(function () {
  var ICONS = {
    layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 17l9 5 9-5"/>',
    wall: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9h18M3 14h18M9 4v5M15 4v5M6 9v5M12 9v5M18 9v5M9 14v6M15 14v6"/>',
    drain: '<path d="M4 6h16M4 10h16M4 14h16"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>',
    pipe: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/>',
    culvert: '<path d="M3 18a9 9 0 0 1 18 0"/><path d="M3 18h18"/><path d="M7 18a5 5 0 0 1 10 0"/>',
    leaf: '<path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z"/><path d="M5 19l7-7"/>',
    fabric: '<path d="M3 6h18M3 12h18M3 18h18"/><path d="M6 3v18M12 3v18M18 3v18" stroke-dasharray="2 3"/>',
    tank: '<ellipse cx="12" cy="6" rx="7" ry="2.5"/><path d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6"/>',
    mesh: '<path d="M3 3h18v18H3z"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
    cell: '<path d="M12 2l8.7 5v10L12 22l-8.7-5V7L12 2z"/><path d="M12 2v20M3.3 7L12 12l8.7-5"/>',
    cable: '<path d="M4 12h16"/><path d="M4 8c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2"/><path d="M4 16c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2"/>',
    felt: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h10M7 13h10"/>',
    farm: '<path d="M3 20h18"/><path d="M5 20V10l7-5 7 5v10"/><path d="M9 20v-6h6v6"/>',
    water: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    reinforce: '<path d="M3 18l6-6 4 4 8-8"/><path d="M14 8h7v7"/>',
    road: '<path d="M5 21L9 3M19 21L15 3"/><path d="M12 5v2M12 11v3M12 18v2"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/>',
    mine: '<path d="M3 20l6-9 4 5 3-4 5 8H3z"/>',
    build: '<rect x="4" y="9" width="16" height="12"/><path d="M8 9V4h8v5M9 13h2M13 13h2M9 17h2M13 17h2"/>',
    check: '<circle cx="12" cy="12" r="9"/>',
    team: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.5 3.3-5.5 6.5-5.5s5.7 2 6.5 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.5c2.6.2 4.5 1.8 5 4.5"/>',
    truck: '<path d="M2 6h12v10H2zM14 10h4l3 3v3h-7"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0 5 5L12 19l-3-3 7.7-7.7z"/><path d="M4 20l2-2"/>'
  };
  function svg(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || ICONS.layers) + '</svg>';
  }

  var PRODUCTS = [
    { id: 'geotextil-nao-tecido', nome: 'Geotêxtil Não Tecido', icon: 'felt', spec: 'Linhas RT 07 a RT 31 e T 1400 a TR 10000', desc: 'Material permeável de filamentos contínuos de poliéster para drenagem, separação e proteção em obras civis.', detalhe: 'Material permeável e flexível de filamentos contínuos de poliéster, usado em drenagem, separação de solos, reforço e proteção em obras civis. Atua como filtro, retendo partículas e evitando instabilidade.' },
    { id: 'geotextil-tecido', nome: 'Geotêxtil Tecido', icon: 'fabric', spec: 'Tecelagem tipo trama, baixa permeabilidade', desc: 'Reforço e estabilização em aterros e obras de solo reforçado.', detalhe: 'Elemento de reforço e estabilização em aterros e obras de solo reforçado, distribuindo cargas de forma uniforme e reduzindo custo e cronograma.' },
    { id: 'veu-poliester', nome: 'Véu de Poliéster', icon: 'felt', spec: 'VP-05 e VP-75', desc: 'Armadura de impermeabilizações moldadas in loco, a frio (50 g/m²) ou a quente (75 g/m²).', detalhe: 'Manta de geotêxtil não tecido agulhado de filamentos contínuos 100% poliéster, para armadura de impermeabilizações moldadas in loco. VP-05 para impermeabilização a frio (50 g/m²) e VP-75 para a quente (75 g/m²).' },
    { id: 'geomembrana', nome: 'Geomembrana PEAD', icon: 'shield', spec: '0,50 a 3,00 mm (20 a 120 mils), norma GM13', desc: 'Impermeabilização de aterros sanitários, lagoas, canais, barragens de rejeito e bacias.', detalhe: 'Impermeabilização de aterros sanitários e industriais, lagoas, canais de adução, barragens de rejeito e bacias de contenção. Emendas por termofusão, com aporte PEAD e perfil E para ancoragem.' },
    { id: 'geocomposto-drenante', nome: 'Geocomposto Drenante', icon: 'drain', spec: 'Modelos 1L, 2L, GTF e Trincheira', desc: 'Núcleo drenante com geotêxtil filtrante para captação de líquidos e gases.', detalhe: 'Núcleo drenante com geotêxtil filtrante para captação de líquidos e gases, drenagem vertical em muros de arrimo, aterros sanitários e proteção mecânica da geomembrana.' },
    { id: 'tubo-dreno', nome: 'Tubo Dreno Corrugado', icon: 'pipe', spec: '50, 100, 150 e 200 mm', desc: 'PEAD corrugado com furos radiais para drenagem de subsolo, pátios e estacionamentos.', detalhe: 'PEAD corrugado com furos radiais para coleta e escoamento de líquidos e gases, em drenagem de subsolo, pátios, estacionamentos e áreas com lençol freático alto. Rolos de 50 ou 100 m.' },
    { id: 'duto-drenagem', nome: 'Duto de Drenagem', icon: 'culvert', spec: '300 a 1600 mm', desc: 'Tubo corrugado de dupla parede para condução de grandes volumes.', detalhe: 'Tubo corrugado de dupla parede, parede interna lisa e externa corrugada, em PEAD, para condução de grandes volumes. Barras de 6 m, de 33 kg (300 mm) a 640 kg (1600 mm).' },
    { id: 'tubo-liso', nome: 'Tubo Liso PEAD', icon: 'water', spec: '20 a 315 mm, PN 6 a PN 16 (SDR 26 a SDR 11)', desc: 'PE100 para drenagem, esgoto, abastecimento de água, irrigação e transporte de chorume.', detalhe: 'PE100 para drenagem, esgoto, abastecimento de água, irrigação e transporte de chorume, com soldagem por termofusão e estanqueidade total.' },
    { id: 'eletroduto', nome: 'Eletroduto Corrugado PEAD', icon: 'cable', spec: 'Linhas ECCO, NBR e HL, de 3/4" a 8"', desc: 'Proteção de cabos de energia e telecomunicações em instalações subterrâneas.', detalhe: 'Proteção de cabos de energia (alta, média e baixa tensão) e telecomunicações em instalações subterrâneas. A linha NBR atende concessionárias de energia.' },
    { id: 'gabiao', nome: 'Gabião', icon: 'wall', spec: 'Caixa (8x10 cm), colchão (6x8 cm) e saco', desc: 'Tela hexagonal de dupla torção com revestimento Zn95+Al5-MM para contenção de encostas.', detalhe: 'Tela hexagonal de dupla torção em arame com revestimento Zn95+Al5-MM (245 g/m²). Estruturas flexíveis, drenantes e monolíticas para contenção de encostas, canalização e proteção de margens.' },
    { id: 'geocelula', nome: 'Geocélula PEAD', icon: 'cell', spec: 'GCW-356, GCW-445, GCW-580 e GCW-712', desc: 'Confinamento celular de 1,5 mm para estabilização de subleito e reforço de pavimento.', detalhe: 'Sistema de confinamento celular em PEAD de 1,5 mm, com painéis de 58 a 61 m², para estabilização de subleito, reforço de pavimento e contenção em taludes.' },
    { id: 'geogrelha-pet', nome: 'Geogrelha Poliéster PET', icon: 'reinforce', spec: 'PET 50/30 a PET 200/200, de 30 a 200 kN/m', desc: 'Alta resistência à tração e baixa fluência para reforço de aterros sobre solos moles.', detalhe: 'Estrutura tecida de alta resistência à tração com baixa deformação e baixa fluência, para reforço de aterros sobre solos moles e muros de solo reforçado.' },
    { id: 'geogrelha-biaxial', nome: 'Geogrelha Biaxial', icon: 'road', spec: 'P-BX 2020 e P-BX 3030', desc: 'Polipropileno extrudado com alta rigidez radial para estabilização de solos moles.', detalhe: 'Polipropileno extrudado, quimicamente inerte, com alta rigidez radial, para estabilização de solos moles e reforço de materiais granulares em vias, aterros e pistas.' },
    { id: 'geogrelha-fibra-vidro', nome: 'Geogrelha de Fibra de Vidro', icon: 'mesh', spec: 'R-50 e R-100 (50/50 e 100/100 kN/m)', desc: 'Controle de trincas por reflexão em repavimentação asfáltica.', detalhe: 'Alongamento menor que 3%. Controle de trincas por reflexão, fadiga e deformação plástica em pavimentação e repavimentação asfáltica, com revestimento betuminoso para aderência.' },
    { id: 'biomanta', nome: 'Biomanta e Manto TRM', icon: 'leaf', spec: 'Ecomatrix e TRM 500, 550, 700 e 1000', desc: 'Controle de erosão em taludes, canais e margens, temporário e permanente.', detalhe: 'Manta temporária Ecomatrix (biodegradável, proteção até o estabelecimento da vegetação) e manto permanente TRM 500, 550, 700 e 1000 (polipropileno estabilizado contra UV).' }
  ];

  var SOLUTIONS = [
    { nome: 'Estabilidade de solo', icon: 'reinforce', desc: 'Geogrelhas de PET e biaxiais estabilizam solos moles e aterros.', tags: ['Geogrelha PET', 'Geogrelha Biaxial'] },
    { nome: 'Drenagem', icon: 'drain', desc: 'Tubos dreno, dutos e geocompostos conduzem água e gases com segurança.', tags: ['Tubo Dreno', 'Duto de Drenagem', 'Geocomposto Drenante'] },
    { nome: 'Controle de erosão', icon: 'leaf', desc: 'Biomanta e manto TRM protegem taludes, canais e margens.', tags: ['Biomanta', 'Manto TRM'] },
    { nome: 'Reforço e contenção de solos', icon: 'fabric', desc: 'Geotêxteis tecidos e geocélulas reforçam aterros e confinam o solo.', tags: ['Geotêxtil Tecido', 'Geocélula PEAD'] },
    { nome: 'Impermeabilização com geomembrana', icon: 'shield', desc: 'Geomembrana PEAD e véu de poliéster para barreiras estanques.', tags: ['Geomembrana PEAD', 'Véu de Poliéster'] },
    { nome: 'Estruturas de contenção e estabilização', icon: 'wall', desc: 'Gabiões e geogrelhas formam muros e estruturas flexíveis.', tags: ['Gabião', 'Geogrelha PET'] },
    { nome: 'Gabiões', icon: 'mesh', desc: 'Caixas, colchões e sacos em tela de dupla torção para contenção.', tags: ['Gabião caixa', 'Gabião colchão'] },
    { nome: 'Repavimentação com geogrelhas', icon: 'road', desc: 'Geogrelha de fibra de vidro controla trincas em asfalto.', tags: ['Geogrelha Fibra de Vidro', 'Geogrelha Biaxial'] }
  ];
  var SEGMENTS = [
    { nome: 'Infraestrutura', desc: 'Obras viárias, ferroviárias e de drenagem.' },
    { nome: 'Saneamento', desc: 'Adução, esgoto e reservatórios.' },
    { nome: 'Aterros', desc: 'Impermeabilização e drenagem de resíduos.' },
    { nome: 'Mineração', desc: 'Bacias de contenção e barragens.' },
    { nome: 'Agronegócio', desc: 'Irrigação, proteção de solo e margens.' },
    { nome: 'Construção civil', desc: 'Drenagem e contenção em empreendimentos.' }
  ];

  var DIFFS = [
    { nome: 'Consultoria Técnica', icon: 'tool', desc: 'Serviço prestado pela Prodesivo para que os clientes realizem suas obras de forma assertiva, utilizando os recursos ideais para cada solução, com profissionais capacitados e em constante atualização.' },
    { nome: 'Portfólio completo', icon: 'layers', desc: '15 linhas de produtos para atender do dreno à impermeabilização, em um único fornecedor.' },
    { nome: 'Logística nacional', icon: 'truck', desc: 'Entrega em todo o Brasil, com programação de carregamentos por obra e por etapa.' },
    { nome: 'Assistência técnica em campo', icon: 'team', desc: 'Acompanhamento de instalação e solda, com orientação da equipe técnica no local.' }
  ];

  var UFS = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
  var UF_NAMES = {AC:'Acre',AL:'Alagoas',AP:'Amapá',AM:'Amazonas',BA:'Bahia',CE:'Ceará',DF:'Distrito Federal',ES:'Espírito Santo',GO:'Goiás',MA:'Maranhão',MT:'Mato Grosso',MS:'Mato Grosso do Sul',MG:'Minas Gerais',PA:'Pará',PB:'Paraíba',PR:'Paraná',PE:'Pernambuco',PI:'Piauí',RJ:'Rio de Janeiro',RN:'Rio Grande do Norte',RS:'Rio Grande do Sul',RO:'Rondônia',RR:'Roraima',SC:'Santa Catarina',SP:'São Paulo',SE:'Sergipe',TO:'Tocantins'};

  function fill(sel, items, placeholder) {
    var html = '<option value="">' + placeholder + '</option>';
    items.forEach(function (i) { html += '<option value="' + i.v + '">' + i.t + '</option>'; });
    sel.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Products
    var grid = document.getElementById('productsGrid');
    grid.innerHTML = PRODUCTS.map(function (p, idx) {
      return '<article class="product-card reveal">' +
        '<div class="product-top"><div class="product-icon">' + svg(p.icon) + '</div><h3>' + p.nome + '</h3></div>' +
        '<div class="product-body">' +
        '<p class="product-spec">' + p.spec + '</p>' +
        '<p class="product-desc">' + p.desc + '</p>' +
        '<button type="button" class="product-link" data-idx="' + idx + '" aria-haspopup="dialog">Ver detalhes →</button>' +
        '</div></article>';
    }).join('');

    grid.querySelectorAll('.product-link').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var p = PRODUCTS[+btn.getAttribute('data-idx')];
        document.getElementById('modalTitle').textContent = p.nome;
        document.getElementById('modalSpec').textContent = p.spec;
        document.getElementById('modalBody').innerHTML = '<p>' + p.detalhe + '</p><p class="muted">Solicite a especificação completa e as fichas técnicas do produto para o seu projeto.</p>';
        document.getElementById('productModal').showModal();
      });
    });

    // Segments
    (function () {
      var SOL_IMGS = {
        1: "assets/img/solucoes/solucao-1.webp",
        2: "assets/img/solucoes/solucao-2.webp",
        3: "assets/img/solucoes/solucao-3.webp",
        4: "assets/img/solucoes/solucao-4.webp",
        5: "assets/img/solucoes/solucao-5.webp",
        6: "assets/img/solucoes/solucao-6.webp",
        7: "assets/img/solucoes/solucao-7.webp",
        8: "assets/img/solucoes/solucao-8.webp"
      };
      var SOL_ALTS = {"1": "Equipe instalando geotêxtil para estabilidade de solo", "2": "Geotêxtil envolvendo dreno em valeta ao lado de rodovia", "3": "Mantas verdes de controle de erosão aplicadas em talude", "4": "Reforço de solo com geogrelha em obra de contenção", "5": "Geomembrana PEAD instalada para impermeabilização", "6": "Geocélula PEAD instalada em talude para contenção e estabilização", "7": "Muro de gabiões em obra de contenção", "8": "Geogrelha aplicada na repavimentação de rodovia"};
      function card(s, copy) {
        var n = SOLUTIONS.indexOf(s) + 1;
        return '<article class="sol-card"><div class="sol-media"><img src="' + SOL_IMGS[n] + '" alt="' + (copy ? '' : SOL_ALTS[n]) + '" width="560" height="320" loading="lazy" decoding="async" draggable="false"></div>' +
          '<div class="sol-body"><h3>' + s.nome + '</h3><p>' + s.desc + '</p></div></article>';
      }
      function row(items, dir, label) {
        var set0 = items.map(function (s) { return card(s, false); }).join(''), set1 = items.map(function (s) { return card(s, true); }).join('');
        var copy = function (n) { return '<div class="sol-set"' + (n ? ' aria-hidden="true"' : '') + '>' + (n ? set1 : set0) + '</div>'; };
        return '<div class="sol-row" data-dir="' + dir + '" role="group" aria-label="' + label + '"><div class="sol-track">' + copy(0) + copy(1) + copy(2) + '</div></div>';
      }
      document.getElementById('segGrid').innerHTML =
        '<div class="sol-carousel" id="solCarousel" aria-roledescription="carrossel" aria-label="Soluções por segmento">' +
        row(SOLUTIONS.slice(0, 4), -1, 'Soluções, linha 1') + row(SOLUTIONS.slice(4, 8), 1, 'Soluções, linha 2') + '</div>' +
        '<div class="sol-list reveal"><h3>Segmentos de atuação</h3><div class="tag-row">' +
        SEGMENTS.map(function (s) { return '<span class="tag" title="' + s.desc + '">' + s.nome + '</span>'; }).join('') + '</div></div>';
    })();

    // Differentials
    document.getElementById('diffGrid').innerHTML = DIFFS.map(function (d) {
      return '<article class="diff-card reveal"><div class="seg-icon">' + svg(d.icon) + '</div><h3>' + d.nome + '</h3><p>' + d.desc + '</p></article>';
    }).join('');

    // Form selects
    fill(document.getElementById('f-uf'), UFS.map(function (u) { return { v: u, t: u + ' — ' + UF_NAMES[u] }; }), 'Selecione o estado');
    fill(document.getElementById('f-produto'), PRODUCTS.map(function (p) { return { v: p.id, t: p.nome }; }), 'Selecione o produto');
    fill(document.getElementById('f-segmento'), SEGMENTS.map(function (s) { return { v: s.nome, t: s.nome }; }), 'Selecione o segmento');

    // Reveal on scroll
    var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 }) : null;
    document.querySelectorAll('.reveal').forEach(function (el) { io ? io.observe(el) : el.classList.add('in'); });

    // Header shadow & active link
    var header = document.getElementById('header');
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var links = document.querySelectorAll('.main-nav a');
    var sections = ['inicio','produtos','solucoes','diferenciais','empresa','contato'].map(function (id) { return document.getElementById(id); });
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { if (s) navObs.observe(s); });

    // Mobile menu
    var toggle = document.getElementById('menuToggle');
    var nav = document.getElementById('mainNav');
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Form validation
    var form = document.getElementById('quoteForm');
    var successBox = document.getElementById('successBox');
    var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true, first = null;
      form.querySelectorAll('[required]').forEach(function (el) {
        var wrap = el.closest('[data-field]');
        var msg = '';
        var v = el.value.trim();
        if (!v) msg = 'Campo obrigatório.';
        else if (el.type === 'email' && !EMAIL.test(v)) msg = 'Informe um e-mail válido.';
        else if (el.type === 'tel' && v.replace(/\D/g, '').length < 10) msg = 'Informe um telefone com DDD.';
        wrap.classList.toggle('invalid', !!msg);
        wrap.querySelector('.err').textContent = msg;
        if (msg) { ok = false; if (!first) first = el; }
      });
      successBox.classList.remove('show');
      if (!ok) {
        first.focus();
        if (window.skipUI && skipUI.toast) skipUI.toast('Revise os campos destacados.', { type: 'error' });
        return;
      }
      var pick = function (n) { var el = form.elements[n]; return el ? (el.tagName === 'SELECT' ? (el.options[el.selectedIndex] || {}).text : el.value).trim() : ''; };
      var lines = ['Olá, Prodesivo! Gostaria de solicitar um orçamento.', '',
        'Nome: ' + pick('nome'), 'Empresa: ' + pick('empresa'), 'E-mail: ' + pick('email'), 'Telefone: ' + pick('telefone'),
        'Estado: ' + pick('uf'), 'Produto: ' + pick('produto'), 'Segmento: ' + pick('segmento'), 'Área/quantidade: ' + pick('area')];
      if (pick('mensagem')) lines.push('Mensagem: ' + pick('mensagem'));
      var waUrl = 'https://wa.me/5561984311510?text=' + encodeURIComponent(lines.join('\n'));
      var waLink = document.getElementById('waRetry'); if (waLink) waLink.href = waUrl;
      window.open(waUrl, '_blank', 'noopener');
      successBox.classList.add('show');
      form.reset();
      if (window.skipUI && skipUI.toast) skipUI.toast('Abrindo o WhatsApp…', { type: 'success' });
    });
    form.querySelectorAll('[required]').forEach(function (el) {
      el.addEventListener('input', function () {
        var wrap = el.closest('[data-field]');
        wrap.classList.remove('invalid');
        wrap.querySelector('.err').textContent = '';
      });
    });
  });
})();
