(function () {
  var PRODUCTS = [
    {
      id: 'geotextil-nao-tecido',
      nome: 'Geotêxtil Não Tecido',
      categoria: 'Reforço & Contenção',
      img: 'assets/img/produtos/geotextil-nao-tecido.jpg',
      icon: 'felt',
      spec: 'Linhas RT 07 a RT 31 e T 1400 a TR 10000',
      desc: 'Manta permeável de filamentos contínuos de poliéster para drenagem, separação e proteção em obras civis.',
      detalhe: 'Manta permeável e flexível feita de fibras contínuas 100% poliéster. Atua como filtro inteligente que permite a passagem da água e retém partículas sólidas, evitando acúmulo de umidade e instabilidade do solo.',
      onde: ['Subsolo de edificações', 'Rodovias e ferrovias', 'Campos esportivos e jardins', 'Pátios e estacionamentos', 'Muros de contenção e taludes', 'Mineração e saneamento'],
      como: 'Aplicado como camada de filtração, separação entre solos distintos ou proteção mecânica sobre geomembranas e em sistemas de drenagem, desenrolando a manta diretamente sobre o terreno preparado.',
      beneficios: ['Impede a mistura entre camadas de solo e brita', 'Evita colmatação e acúmulo de umidade', 'Protege geomembranas contra furos (puncionamento)', 'Instalação rápida e redução de custos com agregados']
    },
    {
      id: 'geotextil-tecido',
      nome: 'Geotêxtil Tecido',
      categoria: 'Reforço & Contenção',
      img: 'assets/img/produtos/geotextil-tecido.jpg',
      icon: 'fabric',
      spec: 'Tecelagem tipo trama, baixa permeabilidade',
      desc: 'Reforço e estabilização em aterros e obras de solo reforçado com distribuição uniforme de cargas.',
      detalhe: 'Tecido técnico de alta resistência mecânica desenvolvido para melhorar a capacidade de suporte do solo, distribuindo as cargas de forma uniforme e reduzindo custos e prazos executivos.',
      onde: ['Aterros sobre solos moles', 'Obras de solo reforçado', 'Rodovias e ferrovias', 'Muros de contenção', 'Pátios industriais'],
      como: 'Estendido em camadas horizontais entre o solo e o aterro compactado, atuando como elemento estrutural de reforço e separação.',
      beneficios: ['Aumenta a capacidade de suporte de solos moles', 'Reduz espessuras de aterro e prazos da obra', 'Distribui cargas de tráfego uniformemente', 'Menor interferência ambiental e maior durabilidade']
    },
    {
      id: 'veu-poliester',
      nome: 'Véu de Poliéster',
      categoria: 'Impermeabilização',
      img: 'assets/img/produtos/veu-poliester.jpg',
      icon: 'felt',
      spec: 'VP-05 (frio 50 g/m²) e VP-75 (quente 75 g/m²)',
      desc: 'Armadura leve 100% poliéster para estruturar impermeabilizações moldadas no local.',
      detalhe: 'Manta leve 100% poliéster criada para estruturar impermeabilizações moldadas in loco. Resiste à dilatação das estruturas, evita escorrimento da emulsão e prolonga a vida útil da camada impermeabilizada.',
      onde: ['Lajes e coberturas', 'Áreas molhadas e reservatórios', 'Impermeabilizações a frio (VP-05)', 'Impermeabilizações a quente (VP-75)'],
      como: 'Desenrolado diretamente sobre a primeira demão de emulsão ou manta líquida ainda fresca e recoberto em seguida, evitando bolhas, furos e trincas.',
      beneficios: ['Evita o escorrimento da emulsão em rampas e paredes', 'Impede imperfeições e furos na impermeabilização', 'Absorve dilatações térmicas da estrutura', 'Aplicação simples com menor custo frente a sistemas rígidos']
    },
    {
      id: 'geomembrana',
      nome: 'Geomembrana PEAD',
      categoria: 'Impermeabilização',
      img: 'assets/img/produtos/geomembrana-pead.jpg',
      icon: 'shield',
      spec: '0,50 a 3,00 mm (20 a 120 mils), norma GM13',
      desc: 'Barreira impermeável em PEAD para aterros, lagoas, canais, barragens e bacias de contenção.',
      detalhe: 'Barreira impermeável em polietileno de alta densidade (PEAD) que bloqueia e controla líquidos e gases com alta resistência química, mecânica e proteção contra raios UV garantida por negro de fumo.',
      onde: ['Aterros sanitários e industriais', 'Lagoas de efluentes e vinhaça', 'Reservatórios de água e piscicultura', 'Barragens de rejeito e mineração', 'Canais de irrigação e biodigestores'],
      como: 'Os rolos são estendidos sobre o terreno regularizado, ancorados em canaletas periféricas (com perfil E quando há concreto) e unidos por solda térmica (termofusão) para garantir estanqueidade total.',
      beneficios: ['Estanqueidade total com solda por termofusão', 'Alta resistência a agentes químicos e radiação UV', 'Proteção ambiental contra contaminação do lençol freático', 'Longa vida útil sob solicitações extremas']
    },
    {
      id: 'geocomposto-drenante',
      nome: 'Geocomposto Drenante',
      categoria: 'Drenagem',
      img: 'assets/img/produtos/geocomposto-drenante.jpg',
      icon: 'drain',
      spec: 'Modelos 1L, 2L, GTF e Trincheira',
      desc: 'Núcleo drenante com geotêxtil filtrante para captação rápida de líquidos e gases.',
      detalhe: 'Sistema pronto para drenagem que combina um núcleo tridimensional drenante com geotêxtil filtrante, substituindo camadas espessas de areia e brita com instalação rápida e alta vazão.',
      onde: ['Muros de arrimo (drenagem vertical)', 'Aterros sanitários e industriais', 'Rodovias e túneis', 'Campos esportivos e jardins suspensos', 'Proteção mecânica de geomembranas'],
      como: 'Desenrolado diretamente na vertical contra muros e taludes ou na horizontal sob pavimentos e aterros, captando água ou gases e conduzindo-os para a saída de drenagem.',
      beneficios: ['Substitui camadas pesadas de areia e brita com menor custo', 'Alta capacidade de vazão mesmo em espaços limitados', 'Instalação ágil sem mão de obra complexa', 'Evita infiltrações e alivia pressões atrás de contenções']
    },
    {
      id: 'tubo-dreno',
      nome: 'Tubo Dreno Corrugado',
      categoria: 'Drenagem',
      img: 'assets/img/produtos/tubo-dreno-corrugado.jpg',
      icon: 'pipe',
      spec: 'Diâmetros 50, 100, 150 e 200 mm',
      desc: 'Tubo flexível em PEAD corrugado com furos radiais para drenagem de subsolos e áreas úmidas.',
      detalhe: 'Tubo flexível de PEAD com furos radiais ao longo de toda a extensão para coletar e escoar líquidos e gases do subsolo, protegendo obras contra encharcamento e lençol freático alto.',
      onde: ['Subsolo de edificações', 'Pátios e estacionamentos', 'Drenagem agrícola', 'Obras de contenção e gabiões', 'Campos esportivos e áreas verdes'],
      como: 'Assentado em valas com caimento adequado, geralmente envolvido com manta geotêxtil e camada de brita para filtrar o solo e impedir o entupimento dos furos.',
      beneficios: ['Flexibilidade e excelente raio de curvatura na vala', 'Coleta uniforme de água em toda a extensão do tubo', 'Alta resistência química e à compressão do solo', 'Fornecido em rolos de 50 ou 100 m para menos emendas']
    },
    {
      id: 'duto-drenagem',
      nome: 'Duto de Drenagem',
      categoria: 'Drenagem',
      img: 'assets/img/produtos/duto-drenagem.jpg',
      icon: 'culvert',
      spec: 'Diâmetros de 300 a 1600 mm (dupla parede)',
      desc: 'Tubo corrugado de dupla parede em PEAD para condução de grandes volumes de água.',
      detalhe: 'Tubo corrugado de dupla parede — externa corrugada resistente a cargas e interna lisa para máximo fluxo — leve para transportar e ideal para obras de macrodrenagem.',
      onde: ['Rodovias e ferrovias', 'Obras de terraplenagem e galerias', 'Aterros sanitários', 'Barragens e túneis', 'Macrodrenagem urbana'],
      como: 'As barras de 6 m são posicionadas na vala escavada e acopladas rapidamente com conexões, suportando cargas elevadas de aterro e tráfego pesado.',
      beneficios: ['Parede interna lisa garante altíssima velocidade de escoamento', 'Muito mais leve que tubos de concreto, agilizando a obra', 'Suporta esforços mecânicos pesados e agentes químicos', 'Reduz tempo de escavação e assentamento na vala']
    },
    {
      id: 'tubo-liso',
      nome: 'Tubo Liso PEAD',
      categoria: 'Drenagem',
      img: 'assets/img/produtos/tubo-liso-pead.jpg',
      icon: 'water',
      spec: '20 a 315 mm, PN 6 a PN 16 (PE100)',
      desc: 'Tubulação lisa em PE100 para água, esgoto, irrigação, drenagem e chorume com vedação total.',
      detalhe: 'Tubulação lisa em PEAD de alta durabilidade, leve, flexível e resistente à corrosão e abrasão, indicada para condução pressurizada ou por gravidade de água, esgoto e efluentes.',
      onde: ['Abastecimento de água e irrigação', 'Redes de esgoto e drenagem', 'Transporte de chorume em aterros', 'Fluidos industriais'],
      como: 'Fornecido em barras ou rolos, é instalado em valas ou linhas aparentes com emendas soldadas por termofusão ou eletrofusão, formando uma rede contínua.',
      beneficios: ['Estanqueidade total com soldagem por termofusão', 'Imune à corrosão, incrustações e abrasão', 'Flexível para acompanhar curvas e movimentações do terreno', 'Baixa perda de carga e longa vida útil operacional']
    },
    {
      id: 'eletroduto',
      nome: 'Eletroduto Corrugado PEAD',
      categoria: 'Infraestrutura Elétrica',
      img: 'assets/img/produtos/eletroduto-corrugado.jpg',
      icon: 'cable',
      spec: 'Linhas ECCO, NBR e HL, de 3/4" a 8"',
      desc: 'Proteção de cabos de energia e telecomunicações em redes subterrâneas com linha NBR.',
      detalhe: 'Duto corrugado flexível projetado para proteger cabos de energia e telecomunicações em redes subterrâneas, com baixo atrito interno para facilitar a passagem dos fios.',
      onde: ['Redes de alta, média e baixa tensão', 'Fibra óptica e telecomunicações', 'Concessionárias de energia', 'Portos, aeroportos e indústrias', 'Condomínios residenciais e rodovias'],
      como: 'Estendido em valas subterrâneas com curvas suaves sem necessidade de muitas emendas, permitindo puxar os cabos com guia interna de forma segura e rápida.',
      beneficios: ['Atende normas técnicas de concessionárias (linha NBR)', 'Baixo coeficiente de atrito facilita a passagem dos cabos', 'Alta resistência química e mecânica no subsolo', 'Instalação ágil em longos trechos com menos conexões']
    },
    {
      id: 'gabiao',
      nome: 'Gabião',
      categoria: 'Reforço & Contenção',
      img: 'assets/img/produtos/gabiao.jpg',
      icon: 'wall',
      spec: 'Caixa (8x10 cm), colchão (6x8 cm) e saco',
      desc: 'Estruturas flexíveis e drenantes em tela hexagonal de dupla torção preenchidas com pedras.',
      detalhe: 'Gaiolas em tela hexagonal de dupla torção com zincagem pesada (e opção em PVC) preenchidas com pedras. Adaptam-se aos movimentos do solo, aliviam a pressão da água e integram-se ao meio ambiente.',
      onde: ['Muros de arrimo e contenção de encostas', 'Canalização e proteção de margens de rios', 'Escadas dissipadoras e bueiros', 'Apoios de pontes e barragens', 'Defesas costeiras'],
      como: 'Disponível nos formatos caixa, colchão e saco; as peças metálicas são montadas e amarradas no local, formando um conjunto monolítico preenchido com pedras britadas ou seixos.',
      beneficios: ['Estrutura drenante que alivia a pressão hidrostática', 'Flexibilidade para acompanhar recalques sem trincar', 'Efeito protetor imediato e alta durabilidade', 'Integração ecológica permitindo crescimento de vegetação']
    },
    {
      id: 'geocelula',
      nome: 'Geocélula PEAD',
      categoria: 'Reforço & Contenção',
      img: 'assets/img/produtos/geocelula-pead.jpg',
      icon: 'cell',
      spec: 'GCW-356, GCW-445, GCW-580 e GCW-712',
      desc: 'Confinamento celular tridimensional em colmeia para taludes, subleitos e pavimentos.',
      detalhe: 'Sistema tridimensional em formato de colmeia em PEAD de 1,5 mm que confina o solo, a brita ou o concreto dentro de cada célula, aumentando a resistência do terreno e evitando erosões.',
      onde: ['Proteção de taludes e encostas', 'Estabilização de subleito e rodovias', 'Reforço de pátios e fundações', 'Revestimento de canais'],
      como: 'Os painéis sanfonados são abertos sobre o talude ou base, fixados com grampos ou estacas e preenchidos com solo vegetado, brita ou concreto.',
      beneficios: ['Permite usar materiais locais de menor custo no preenchimento', 'Reduz espessuras de brita na estrutura do pavimento', 'Controla erosões em taludes íngremes e canais', 'Fácil transporte em painéis compactos e montagem rápida']
    },
    {
      id: 'geogrelha-pet',
      nome: 'Geogrelha Poliéster PET',
      categoria: 'Reforço & Contenção',
      img: 'assets/img/produtos/geogrelha-poliester-pet.jpg',
      icon: 'reinforce',
      spec: 'PET 50/30 a PET 200/200 (30 a 200 kN/m)',
      desc: 'Alta resistência à tração e baixa fluência para reforço de aterros e muros de solo reforçado.',
      detalhe: 'Malha estrutural leve e flexível de poliéster tecido com altíssima resistência à tração e baixa deformação ao longo do tempo, ideal para reforçar solos de baixa capacidade.',
      onde: ['Aterros sobre solos moles', 'Muros de solo reforçado', 'Reforço de rodovias e ferrovias', 'Taludes íngremes'],
      como: 'Desenrolada horizontalmente em camadas entre o solo compactado, travando os agregados na malha e distribuindo os esforços da estrutura.',
      beneficios: ['Altíssimo módulo de rigidez e baixa deformação (fluência)', 'Excelente interação e atrito com o solo envolvente', 'Leve e fácil de desenrolar e posicionar na obra', 'Permite erguer muros e aterros mais altos com segurança']
    },
    {
      id: 'geogrelha-biaxial',
      nome: 'Geogrelha Biaxial',
      categoria: 'Reforço & Contenção',
      img: 'assets/img/produtos/geogrelha-biaxial.jpg',
      icon: 'road',
      spec: 'Polipropileno extrudado P-BX 2020 e P-BX 3030',
      desc: 'Grelha rígida com resistência nos dois sentidos para estabilização de solos moles e bases.',
      detalhe: 'Polipropileno extrudado, quimicamente inerte e com alta rigidez radial nos dois eixos, que intertrava a brita e aumenta a capacidade de suporte da fundação.',
      onde: ['Estabilização de subleito', 'Base e sub-base de rodovias', 'Estruturas ferroviárias', 'Pátios logísticos e fundações'],
      como: 'Estendida diretamente sobre o solo mole ou subleito antes da camada de brita, evitando recalques diferenciais e aumentando a vida útil do pavimento.',
      beneficios: ['Reduz significativamente a espessura de brita na base', 'Previne afundamentos e recalques diferenciais', 'Aumenta a vida útil de rodovias, pátios e ferrovias', 'Quimicamente inerte e resistente a condições agressivas']
    },
    {
      id: 'geogrelha-fibra-vidro',
      nome: 'Geogrelha de Fibra de Vidro',
      categoria: 'Pavimentação & Erosão',
      img: 'assets/img/produtos/geogrelha-fibra-de-vidro.jpg',
      icon: 'mesh',
      spec: 'R-50 e R-100 (50/50 e 100/100 kN/m)',
      desc: 'Reforço asfáltico que bloqueia trincas por reflexão e multiplica a vida útil do pavimento.',
      detalhe: 'Reforço asfáltico com alongamento menor que 3% e revestimento betuminoso que garante aderência ao ligante, retardando o surgimento de trincas e deformações no asfalto.',
      onde: ['Recapeamento e repavimentação asfáltica', 'Rodovias e vias urbanas de tráfego pesado', 'Pistas de aeroportos'],
      como: 'Aplicada sobre o pavimento antigo fresado ou nivelado logo antes da nova capa asfáltica, aumentando de 5 a 10 vezes a resistência à fadiga.',
      beneficios: ['Bloqueia o espelhamento de trincas antigas no novo asfalto', 'Aumenta a vida útil e a resistência à fadiga do pavimento', 'Reduz drasticamente a frequência de manutenções viárias', 'Revestimento betuminoso garante aderência rápida ao asfalto']
    },
    {
      id: 'biomanta',
      nome: 'Biomanta e Manto TRM',
      categoria: 'Pavimentação & Erosão',
      img: 'assets/img/produtos/biomanta-trm.jpg',
      icon: 'leaf',
      spec: 'Ecomatrix (temporária) e TRM 500 a 1000',
      desc: 'Controle de erosão superficial em taludes, canais e margens, auxiliando o plantio.',
      detalhe: 'Mantas de proteção superficial contra erosão causadas pela chuva e pelo vento. Disponíveis em versão temporária biodegradável (Ecomatrix) ou permanente estabilizada contra UV (TRM).',
      onde: ['Taludes e encostas', 'Margens de rios e canais', 'Áreas de descarga de tubos', 'Revegetação de muros verdes e campos'],
      como: 'Desenroladas e fixadas com grampos sobre o solo já semeado, protegendo as sementes, conservando a umidade e estabilizando o terreno até e após a vegetação crescer.',
      beneficios: ['Protege imediatamente contra erosão hídrica e eólica', 'Conserva a umidade do solo e acelera a germinação', 'Adapta-se facilmente a qualquer relevo do terreno', 'Opção permanente (TRM) reforça as raízes em fluxos intensos']
    }
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

  var UFS = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  var UF_NAMES = { AC: 'Acre', AL: 'Alagoas', AP: 'Amapá', AM: 'Amazonas', BA: 'Bahia', CE: 'Ceará', DF: 'Distrito Federal', ES: 'Espírito Santo', GO: 'Goiás', MA: 'Maranhão', MT: 'Mato Grosso', MS: 'Mato Grosso do Sul', MG: 'Minas Gerais', PA: 'Pará', PB: 'Paraíba', PR: 'Paraná', PE: 'Pernambuco', PI: 'Piauí', RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte', RS: 'Rio Grande do Sul', RO: 'Rondônia', RR: 'Roraima', SC: 'Santa Catarina', SP: 'São Paulo', SE: 'Sergipe', TO: 'Tocantins' };

  function fill(sel, items, placeholder) {
    var html = '<option value="">' + placeholder + '</option>';
    items.forEach(function (i) { html += '<option value="' + i.v + '">' + i.t + '</option>'; });
    sel.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Products
    var grid = document.getElementById('productsGrid');
    var filtersWrap = document.getElementById('productFilters');
    var modal = document.getElementById('productModal');

    function openProductModal(idx) {
      var p = PRODUCTS[idx];
      if (!p || !modal) return;
      var ondeHtml = (p.onde || []).map(function (item) {
        return '<span class="modal-chip">' + item + '</span>';
      }).join('');
      var benHtml = (p.beneficios || []).map(function (item) {
        return '<li>' + item + '</li>';
      }).join('');

      document.getElementById('modalBody').innerHTML =
        '<div class="modal-showcase">' +
        '<div class="modal-media" role="button" tabindex="0" aria-label="Ampliar imagem de ' + p.nome + '" title="Clique para dar zoom">' +
        '<img src="' + p.img + '" alt="' + p.nome + '" width="800" height="500" decoding="async">' +
        '</div>' +
        '<div class="modal-overview">' +
        '<div class="modal-overview-head">' +
        '<div class="modal-overview-titles">' +
        '<span class="modal-cat-pill" id="modalCat">' + p.categoria + '</span>' +
        '<h3 class="modal-title-right" id="modalTitle">' + p.nome + '</h3>' +
        '<p class="modal-spec-right" id="modalSpec">' + p.spec + '</p>' +
        '</div>' +
        '<img class="modal-brand-symbol" src="assets/img/favicon.png" alt="Prodesivo" width="44" height="44" decoding="async">' +
        '</div>' +
        '<p class="modal-summary">' + p.detalhe + ' ' + p.como + '</p>' +
        (benHtml ? '<div class="modal-block"><span class="modal-block-lbl">Diferenciais técnicos</span><ul class="modal-ben-list">' + benHtml + '</ul></div>' : '') +
        (ondeHtml ? '<div class="modal-block"><span class="modal-block-lbl">Principais aplicações</span><div class="modal-chip-row">' + ondeHtml + '</div></div>' : '') +
        '</div>' +
        '</div>';

      var mediaBox = document.querySelector('#modalBody .modal-media');
      var mediaImg = mediaBox ? mediaBox.querySelector('img') : null;
      if (mediaBox && mediaImg) {
        function toggleZoom(e) {
          var on = mediaBox.classList.toggle('is-zoomed');
          if (on && e && e.clientX) {
            var r = mediaBox.getBoundingClientRect();
            mediaImg.style.transformOrigin = (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '% ' + (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%';
          } else if (!on) {
            mediaImg.style.transformOrigin = 'center center';
          }
        }
        mediaBox.addEventListener('click', toggleZoom);
        mediaBox.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleZoom(); }
        });
        mediaBox.addEventListener('pointermove', function (e) {
          if (!mediaBox.classList.contains('is-zoomed')) return;
          var r = mediaBox.getBoundingClientRect();
          mediaImg.style.transformOrigin = (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '% ' + (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%';
        });
      }

      var subj = encodeURIComponent('Orçamento — ' + p.nome + ' | Prodesivo');
      var bodyMail = encodeURIComponent('Olá, equipe Prodesivo!\n\nVi o produto "' + p.nome + '" no site e gostaria de solicitar um orçamento e especificação técnica.\n\nNome: \nEmpresa: \nTelefone: \nEstado/Cidade: \nÁrea ou quantidade estimada: ');
      var msgWa = encodeURIComponent('Olá, Prodesivo! Vi o produto "' + p.nome + '" no site e gostaria de solicitar um orçamento.');
      document.getElementById('modalGmail').href = 'mailto:leimar.leitao@prodesivo.com.br?subject=' + subj + '&body=' + bodyMail;
      document.getElementById('modalWa').href = 'https://wa.me/5561984311510?text=' + msgWa;
      var modalQuoteBtn = document.getElementById('modalQuoteBtn');
      if (modalQuoteBtn) {
        modalQuoteBtn.setAttribute('data-prod', p.nome);
      }
      modal.showModal();
    }

    function renderProducts(cat) {
      var items = PRODUCTS.map(function (p, idx) { return { p: p, idx: idx }; })
        .filter(function (entry) { return cat === 'Todos' || entry.p.categoria === cat; });

      grid.innerHTML = items.map(function (entry) {
        var p = entry.p;
        var idx = entry.idx;
        return '<article class="product-card reveal in" itemscope itemtype="https://schema.org/Product" data-idx="' + idx + '" tabindex="0" role="button" aria-haspopup="dialog" aria-label="Ver detalhes e especificações de ' + p.nome + '">' +
          '<meta itemprop="brand" content="Prodesivo">' +
          '<div class="product-media">' +
          '<img itemprop="image" src="' + p.img + '" alt="' + p.nome + ' — ' + p.categoria + ' | Prodesivo Geossintéticos" width="800" height="500" loading="lazy" decoding="async">' +
          '<span class="product-cat" itemprop="category">' + p.categoria + '</span>' +
          '</div>' +
          '<div class="product-body">' +
          '<h3 itemprop="name">' + p.nome + '</h3>' +
          '<p class="product-spec">' + p.spec + '</p>' +
          '<p class="product-desc" itemprop="description">' + p.desc + '</p>' +
          '<span class="product-link">Detalhes</span>' +
          '</div></article>';
      }).join('');

      grid.querySelectorAll('.product-card').forEach(function (card) {
        card.addEventListener('click', function () {
          openProductModal(+card.getAttribute('data-idx'));
        });
        card.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openProductModal(+card.getAttribute('data-idx'));
          }
        });
      });
    }

    if (filtersWrap) {
      var cats = ['Todos'];
      PRODUCTS.forEach(function (p) {
        if (cats.indexOf(p.categoria) === -1) cats.push(p.categoria);
      });
      filtersWrap.innerHTML = cats.map(function (cat) {
        return '<button type="button" class="filter-pill' + (cat === 'Todos' ? ' is-active' : '') + '" data-cat="' + cat + '" aria-pressed="' + (cat === 'Todos' ? 'true' : 'false') + '">' +
          cat + '</button>';
      }).join('');
      filtersWrap.addEventListener('click', function (e) {
        var btn = e.target.closest('.filter-pill');
        if (!btn) return;
        var cat = btn.getAttribute('data-cat');
        filtersWrap.querySelectorAll('.filter-pill').forEach(function (b) {
          var active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', String(active));
        });
        renderProducts(cat);
      });
    }

    renderProducts('Todos');

    if (modal) {
      modal.querySelectorAll('[data-dialog-close]').forEach(function (btn) {
        btn.addEventListener('click', function () { modal.close(); });
      });
      modal.addEventListener('click', function (e) {
        if (e.target === modal) modal.close();
      });
    }

    // Segments
    (function () {
      var SOL_IMGS = {
        1: "assets/img/solucoes/solucao-1.jpg",
        2: "assets/img/solucoes/solucao-2.jpg",
        3: "assets/img/solucoes/solucao-3.jpg",
        4: "assets/img/solucoes/solucao-4.jpg",
        5: "assets/img/solucoes/solucao-5.jpg",
        6: "assets/img/solucoes/solucao-6.jpg",
        7: "assets/img/solucoes/solucao-7.jpg",
        8: "assets/img/solucoes/solucao-8.jpg"
      };
      var SOL_ALTS = { "1": "Equipe instalando geotêxtil para estabilidade de solo", "2": "Geotêxtil envolvendo dreno em valeta ao lado de rodovia", "3": "Mantas verdes de controle de erosão aplicadas em talude", "4": "Reforço de solo com geogrelha em obra de contenção", "5": "Geomembrana PEAD instalada para impermeabilização", "6": "Geocélula PEAD instalada em talude para contenção e estabilização", "7": "Muro de gabiões em obra de contenção", "8": "Geogrelha aplicada na repavimentação de rodovia" };
      function card(s, copy) {
        var n = SOLUTIONS.indexOf(s) + 1;
        return '<article class="sol-card"><div class="sol-media"><img src="' + SOL_IMGS[n] + '" alt="' + (copy ? '' : SOL_ALTS[n]) + '" width="840" height="480" loading="lazy" decoding="async" draggable="false"></div>' +
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

    // Differentials (acordeão compacto no mobile, expandido no desktop)
    document.querySelectorAll('#diffGrid .diff-card').forEach(function (card) {
      var title = card.querySelector('h3');
      if (!title) return;
      var chev = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      chev.setAttribute('class', 'diff-chevron');
      chev.setAttribute('viewBox', '0 0 24 24');
      chev.setAttribute('fill', 'none');
      chev.setAttribute('stroke', 'currentColor');
      chev.setAttribute('stroke-width', '2.2');
      chev.setAttribute('stroke-linecap', 'round');
      chev.setAttribute('stroke-linejoin', 'round');
      chev.setAttribute('aria-hidden', 'true');
      chev.innerHTML = '<path d="m6 9 6 6 6-6"/>';
      title.appendChild(chev);

      card.addEventListener('click', function () {
        if (window.innerWidth > 640) return;
        card.classList.toggle('is-open');
      });
    });

    // Quote modal & structured B2B RFQ form
    var quoteModal = document.getElementById('quoteModal');
    var qUf = document.getElementById('q-uf');
    var qProd = document.getElementById('q-produto');
    if (qUf) {
      fill(qUf, UFS.map(function (u) { return { v: u, t: u + ' — ' + UF_NAMES[u] }; }), 'Selecione o estado');
    }
    if (qProd) {
      fill(qProd, PRODUCTS.map(function (p) { return { v: p.nome, t: p.nome }; }).concat([{ v: 'Outros', t: 'Outros' }]), 'Selecione o produto');
    }

    // Floating catalog popover
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
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          catFloat.classList.remove('is-open');
          catBtn.setAttribute('aria-expanded', 'false');
        }
      });
      document.querySelectorAll('.main-nav a[href="#contato"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          catFloat.classList.add('is-open');
          catBtn.setAttribute('aria-expanded', 'true');
        });
      });
    }

    document.querySelectorAll('a[data-open-quote]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (quoteModal) {
          quoteModal.showModal();
        } else if (catFloat && catBtn) {
          catFloat.classList.add('is-open');
          catBtn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    if (quoteModal) {
      quoteModal.querySelectorAll('[data-quote-close]').forEach(function (btn) {
        btn.addEventListener('click', function () { quoteModal.close(); });
      });
      quoteModal.addEventListener('click', function (e) {
        if (e.target === quoteModal) quoteModal.close();
      });
      var modalQuoteBtnEl = document.getElementById('modalQuoteBtn');
      if (modalQuoteBtnEl) {
        modalQuoteBtnEl.addEventListener('click', function () {
          var prodName = modalQuoteBtnEl.getAttribute('data-prod');
          if (modal && modal.open) modal.close();
          if (qProd && prodName) qProd.value = prodName;
          quoteModal.showModal();
        });
      }
    }

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
    var sections = ['inicio', 'produtos', 'solucoes', 'diferenciais', 'empresa', 'contato'].map(function (id) { return document.getElementById(id); });
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

    // Form validation (#quoteForm no #quoteModal)
    var form = document.getElementById('quoteForm');
    var feedback = document.getElementById('quoteFeedback');
    var emailBtn = document.getElementById('quoteEmailBtn');
    var copyEmailBtn = document.getElementById('quoteCopyEmail');
    if (form) {
      function validateQuoteForm() {
        var ok = true, first = null;
        form.querySelectorAll('[required]').forEach(function (el) {
          var wrap = el.closest('[data-field]');
          var msg = '';
          var v = el.value.trim();
          if (!v) msg = 'Campo obrigatório.';
          else if (el.type === 'tel' && v.replace(/\D/g, '').length < 10) msg = 'Informe um telefone com DDD.';
          wrap.classList.toggle('invalid', !!msg);
          wrap.querySelector('.err').textContent = msg;
          if (msg) { ok = false; if (!first) first = el; }
        });
        if (!ok && first) first.focus();
        return ok;
      }
      function buildQuoteLines() {
        var pick = function (n) { var el = form.elements[n]; return el ? (el.tagName === 'SELECT' ? (el.options[el.selectedIndex] || {}).text : el.value).trim() : ''; };
        var lines = ['Olá, Prodesivo! Gostaria de solicitar um orçamento.', '',
          'Nome: ' + pick('nome'),
          'Empresa: ' + (pick('empresa') || 'Não informada'),
          'Telefone: ' + pick('telefone'),
          'Estado: ' + (pick('uf') || 'Não informado'),
          'Produto: ' + (pick('produto') || 'A definir'),
          'Área/quantidade: ' + (pick('area') || 'Não informada')];
        if (pick('mensagem')) lines.push('Observações: ' + pick('mensagem'));
        return lines.join('\n');
      }
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!validateQuoteForm()) return;
        var waUrl = 'https://wa.me/5561984311510?text=' + encodeURIComponent(buildQuoteLines());
        window.open(waUrl, '_blank', 'noopener');
        if (feedback) feedback.textContent = 'Abrindo o WhatsApp com os dados da sua obra.';
      });
      if (emailBtn) {
        emailBtn.addEventListener('click', function () {
          if (!validateQuoteForm()) return;
          var subj = encodeURIComponent('Solicitação de Orçamento — Prodesivo');
          var body = encodeURIComponent(buildQuoteLines());
          window.location.href = 'mailto:leimar.leitao@prodesivo.com.br?subject=' + subj + '&body=' + body;
          if (feedback) feedback.textContent = 'Abrindo seu aplicativo de e-mail padrão.';
        });
      }
      if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', function () {
          var email = copyEmailBtn.getAttribute('data-email');
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(function () {
              if (feedback) feedback.textContent = 'E-mail copiado: ' + email;
            });
          } else if (feedback) {
            feedback.textContent = 'E-mail: ' + email;
          }
        });
      }
      form.querySelectorAll('[required]').forEach(function (el) {
        el.addEventListener('input', function () {
          var wrap = el.closest('[data-field]');
          wrap.classList.remove('invalid');
          wrap.querySelector('.err').textContent = '';
        });
      });
    }

    // Políticas de Privacidade (LGPD / Meta), Cookies e Termos de Uso
    var LEGAL_DOCS = {
      privacidade: {
        title: 'Política de Privacidade',
        html:
          '<p><strong>Última atualização:</strong> Novembro de 2026</p>' +
          '<p>A <strong>Prodesivo Indústria e Comércio Ltda</strong> (CSG 08, Lote 09, Taguatinga Sul, Brasília — DF, CEP 72035-508) valoriza a privacidade e a proteção dos dados pessoais de seus visitantes, clientes e parceiros, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e com os requisitos de plataformas de comunicação e anúncios como a Meta.</p>' +
          '<h4>1. Dados que coletamos</h4>' +
          '<ul>' +
            '<li><strong>Dados fornecidos por você:</strong> nome completo, empresa/construtora, telefone/WhatsApp, estado (UF), produto de interesse, área/quantidade estimada e observações técnicas enviadas nos canais de orçamento ou contato.</li>' +
            '<li><strong>Dados de navegação e dispositivos:</strong> endereço IP, tipo de navegador, páginas acessadas, origem do tráfego e eventos de interação (como cliques em botões de orçamento ou WhatsApp), coletados apenas conforme suas preferências de cookies.</li>' +
          '</ul>' +
          '<h4>2. Finalidade e base legal do tratamento</h4>' +
          '<ul>' +
            '<li><strong>Atendimento comercial e especificação técnica:</strong> elaborar orçamentos, dimensionar geossintéticos e responder solicitações (execução de procedimentos preliminares de contrato — Art. 7º, V, LGPD).</li>' +
            '<li><strong>Comunicação direta:</strong> contato via WhatsApp, telefone ou e-mail corporativo mediante sua solicitação.</li>' +
            '<li><strong>Mensuração e anúncios (Meta / Analytics):</strong> avaliar o desempenho de campanhas e otimizar a entrega de anúncios na plataforma Meta, exclusivamente mediante o seu consentimento no aviso de cookies (Art. 7º, I, LGPD).</li>' +
            '<li><strong>Segurança e obrigações legais:</strong> prevenção a fraudes e cumprimento de obrigações fiscais ou regulatórias.</li>' +
          '</ul>' +
          '<h4>3. Compartilhamento com terceiros</h4>' +
          '<p>Não vendemos seus dados pessoais. O compartilhamento ocorre apenas com ferramentas estritamente necessárias à operação e ao atendimento solicitado por você (como WhatsApp, provedor de e-mail, Google Maps para localização e, quando autorizado, plataformas de mensuração como Meta Platforms Inc.).</p>' +
          '<h4>4. Retenção e segurança</h4>' +
          '<p>Mantemos os dados pelo tempo necessário para cumprir as finalidades informadas ou prazos legais aplicáveis, adotando boas práticas técnicas e administrativas contra acessos não autorizados.</p>' +
          '<h4>5. Seus direitos como titular (Art. 18 da LGPD)</h4>' +
          '<p>Você pode solicitar a qualquer momento a confirmação da existência de tratamento, o acesso, a correção, a anonimização, a portabilidade, a eliminação de dados desnecessários ou a revogação do consentimento.</p>' +
          '<h4>6. Canal do Encarregado (DPO)</h4>' +
          '<p>Para exercer seus direitos ou tirar dúvidas sobre privacidade, entre em contato pelo e-mail <a href="mailto:leimar.leitao@prodesivo.com.br">leimar.leitao@prodesivo.com.br</a> ou telefone <a href="tel:+556133560060">(61) 3356-0060</a>.</p>' +
          '<p><button type="button" class="legal-cookie-trigger" data-open-cookie-prefs>Alterar preferências de cookies</button></p>'
      },
      cookies: {
        title: 'Política de Cookies',
        html:
          '<p><strong>Última atualização:</strong> Novembro de 2026</p>' +
          '<p>Esta Política explica como a <strong>Prodesivo Indústria e Comércio Ltda</strong> utiliza cookies e tecnologias semelhantes ao visitar nosso site.</p>' +
          '<h4>1. O que são cookies?</h4>' +
          '<p>Cookies são pequenos arquivos armazenados no seu navegador que ajudam o site a funcionar corretamente, lembrar suas preferências e, quando autorizado, medir a audiência e a eficácia de campanhas.</p>' +
          '<h4>2. Categorias utilizadas</h4>' +
          '<ul>' +
            '<li><strong>Cookies estritamente necessários:</strong> indispensáveis para o funcionamento básico da navegação e para registrar sua escolha de consentimento no navegador (<code>prodesivo_cookie_consent</code>). Não podem ser desativados nos sistemas essenciais.</li>' +
            '<li><strong>Cookies de análise e desempenho:</strong> ajudam a entender quais páginas e produtos são mais consultados para melhorar a usabilidade do site.</li>' +
            '<li><strong>Cookies de publicidade e mensuração (Meta):</strong> podem ser usados para mensurar conversões de anúncios da Meta (Instagram/Facebook) e exibir conteúdos relevantes sobre geossintéticos, somente se você clicar em <em>Aceitar todos</em>.</li>' +
          '</ul>' +
          '<h4>3. Como gerenciar ou revogar</h4>' +
          '<p>Você pode alterar sua preferência a qualquer momento clicando em <strong>Gerenciar Cookies</strong> no rodapé do site ou bloqueando cookies diretamente nas configurações do seu navegador (Chrome, Safari, Firefox, Edge).</p>'
      },
      termos: {
        title: 'Termos de Uso',
        html:
          '<p><strong>Última atualização:</strong> Novembro de 2026</p>' +
          '<p>Ao acessar o site da <strong>Prodesivo Indústria e Comércio Ltda</strong>, você concorda com as condições abaixo:</p>' +
          '<ul>' +
            '<li><strong>Caráter informativo e técnico:</strong> as especificações exibidas no catálogo digital servem como referência inicial. O dimensionamento definitivo de cada obra é confirmado por nossa equipe técnica mediante projeto e orçamento formal.</li>' +
            '<li><strong>Propriedade intelectual:</strong> marca, logotipos, fotografias, textos técnicos e recursos visuais pertencem à Prodesivo ou a seus licenciadores, sendo vedada a reprodução comercial sem autorização.</li>' +
            '<li><strong>Links externos:</strong> redirecionamentos para WhatsApp, cliente de e-mail, Google Maps ou redes sociais seguem as políticas de cada plataforma terceira.</li>' +
          '</ul>'
      }
    };

    var legalModal = document.getElementById('legalModal');
    var legalTitle = document.getElementById('legalModalTitle');
    var legalBody = document.getElementById('legalModalBody');
    function openLegal(key) {
      var doc = LEGAL_DOCS[key];
      if (!doc || !legalModal) return;
      legalTitle.textContent = doc.title;
      legalBody.innerHTML = doc.html;
      var prefTrigger = legalBody.querySelector('[data-open-cookie-prefs]');
      if (prefTrigger && cookieBanner) {
        prefTrigger.addEventListener('click', function () {
          legalModal.close();
          cookieBanner.hidden = false;
          if (cookiePrefsPanel) {
            cookiePrefsPanel.hidden = false;
            cookieAccept.textContent = 'Salvar preferências';
          }
        });
      }
      legalModal.showModal();
    }
    document.querySelectorAll('[data-legal]').forEach(function (el) {
      el.addEventListener('click', function () {
        openLegal(el.getAttribute('data-legal'));
      });
    });
    if (legalModal) {
      legalModal.querySelectorAll('[data-legal-close]').forEach(function (btn) {
        btn.addEventListener('click', function () { legalModal.close(); });
      });
      legalModal.addEventListener('click', function (e) {
        if (e.target === legalModal) legalModal.close();
      });
    }

    var cookieBanner = document.getElementById('cookieBanner');
    var cookieAccept = document.getElementById('cookieAccept');
    var cookieEssential = document.getElementById('cookieEssential');
    var cookieTogglePrefs = document.getElementById('cookieTogglePrefs');
    var cookiePrefsPanel = document.getElementById('cookiePrefsPanel');
    var prefAnalytics = document.getElementById('prefAnalytics');
    var prefMarketing = document.getElementById('prefMarketing');
    var openCookiePrefs = document.getElementById('openCookiePrefs');
    var CONSENT_KEY = 'prodesivo_cookie_consent';
    function saveConsent(val) {
      try { localStorage.setItem(CONSENT_KEY, typeof val === 'string' ? val : JSON.stringify(val)); } catch (_) {}
      if (cookieBanner) cookieBanner.hidden = true;
    }
    if (cookieBanner) {
      var saved = null;
      try { saved = localStorage.getItem(CONSENT_KEY); } catch (_) {}
      if (!saved) cookieBanner.hidden = false;
    }
    if (cookieTogglePrefs && cookiePrefsPanel) {
      cookieTogglePrefs.addEventListener('click', function () {
        var open = cookiePrefsPanel.hidden;
        cookiePrefsPanel.hidden = !open;
        cookieAccept.textContent = open ? 'Salvar preferências' : 'Aceitar cookies';
      });
    }
    if (cookieAccept) {
      cookieAccept.addEventListener('click', function () {
        if (cookiePrefsPanel && !cookiePrefsPanel.hidden) {
          saveConsent({ essential: true, analytics: !!(prefAnalytics && prefAnalytics.checked), marketing: !!(prefMarketing && prefMarketing.checked) });
        } else {
          saveConsent({ essential: true, analytics: true, marketing: true });
        }
      });
    }
    if (cookieEssential) {
      cookieEssential.addEventListener('click', function () {
        saveConsent({ essential: true, analytics: false, marketing: false });
      });
    }
    if (openCookiePrefs && cookieBanner) {
      openCookiePrefs.addEventListener('click', function () {
        cookieBanner.hidden = false;
        if (cookiePrefsPanel) {
          cookiePrefsPanel.hidden = false;
          cookieAccept.textContent = 'Salvar preferências';
        }
      });
    }
  });
})();
