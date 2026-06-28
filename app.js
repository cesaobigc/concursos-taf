// ── Configuração ──────────────────────────────────────────────
const SHEET_ID = '1oUXGna-XpAT4x2C7uR5UNrLLCX_62FvtAS8z_o2REms';
const GID      = '2059023934';

// Links dos editais no Google Drive (mapeados pelo nome exato da planilha)
const EDITAIS = {
  'PP MG – Policial Penal':
    'https://drive.google.com/file/d/1iQCiJ5XN8tGxA4j-eg9to8cU8NkU_oF5/view',
  'PC RS – Escrivão e Inspetor':
    'https://drive.google.com/file/d/1RX6fWs_N1wdMAfmmiqFSoDr-9YWzQkBj/view',
  'GCM SP – Guarda Civil Metropolitana':
    'https://drive.google.com/file/d/17x5SwdmMwE8EuwMRYurjYPJvdo5t7LyC/view',
  'Policial Legislativo Federal – Câmara dos Deputados':
    'https://drive.google.com/file/d/1t3ZabC0MMlsGBOkeCyo5UuBOsIXzlrL_/view',
  'CBM ES – Oficial Combatente':
    'https://drive.google.com/file/d/1mu6ZiwfG9RYebKhorfryo0x-ReWMly44/view',
  'EAM – Marinha (Escola de Aprendizes-Marinheiros)':
    'https://drive.google.com/file/d/1SjHXGBEh7oDUWSuccMGZmmb90P-IQ5Vl/view',
  'EPCAR – FAB (Cadetes do Ar)':
    'https://drive.google.com/file/d/1EiTZIhz_M8GHBHX6yQnnI5ZfpM3C7gFa/view',
  'CIAAR – FAB (Oficiais Nível Superior)':
    'https://drive.google.com/file/d/10ZrIQP-ug4xwH2MdNc6Y7scJm-gcWPJg/view',
  'PCDF – Delegado':
    'https://drive.google.com/file/d/1msK2GZS_cEi972YDf63xRub-vK4JmxpT/view',
  'EsFCEx – Exército (Oficiais QC, Capelães e Saúde)':
    'https://drive.google.com/file/d/1n40Tvl3f07sWIWSgRuBw1bN65kpUmaiQ/view',
  'CBM MG – Oficial':
    'https://drive.google.com/file/d/1yCn-Jx96jrzia0gkGQHDl9lmA9b4FyAP/view',
  'CBM MG – Soldado Combatente':
    'https://drive.google.com/file/d/1LWFHmXx3qaZt6ICgF9xakGJnDtz9vgcv/view',
  'PP RS – Policial Penal':
    'https://drive.google.com/file/d/17NmjIqKoddSv9HiDxp9sv42B6XeZhb22/view',
  'PM SP – Oficial / Cadete PM':
    'https://drive.google.com/file/d/1ck1Zb2dCdNY0n48vFhVezdTGWeIFZmXd/view',
  'PM ES – Soldado Combatente e Músico':
    'https://drive.google.com/file/d/1-Dc3CPPK6Zjk6ajW9wDE06eDMoxj2Nvi/view',
  'PM AL – Soldado e Oficial':
    'https://drive.google.com/file/d/10Z_slh0s0MH9hp7GHooi6FhVMoJRHMiK/view',
  'Escola Naval – Marinha (CPAEN)':
    'https://drive.google.com/file/d/1xNt3McSh1hy5qCRYYOBFrfDsY6T2TRFP/view',
  'EsPCEx – Exército (Cadetes)':
    'https://drive.google.com/file/d/13ghCnuLBN4OV-jSfhKgQ7ULQC3TYgtF8/view',
  'PM SP – Soldado (Aluno-Soldado)':
    'https://drive.google.com/file/d/12NCp_zirZc7FT0EUmKXBDxGkKt-1Q5RN/view',
  'CBM AL – Oficial e Soldado':
    'https://drive.google.com/file/d/12Z6gqx4D0YVkybML17siZp84CfzOAEKC/view',
  'PM PI – Soldado PM':
    'https://drive.google.com/file/d/1F0R3T-mhrZur4CrcmC-uyu_goQ6oR3m3/view',
  'PP RN – Policial Penal':
    'https://drive.google.com/file/d/1XdvqHJD6bIsEt7r4DOQVPaxncVWBhTV2/view',
  'PMDF – Cadete PM (CFO)':
    'https://drive.google.com/file/d/1D_2S6V5eIWVLq3w-YFMBahNQCIlAzObe/view',
};

// Cores por estado (baseadas nas bandeiras)
const CORES = {
  MG:       '#006633',
  RS:       '#C41E3A',
  SP:       '#1a1a1a',
  ES:       '#003399',
  AL:       '#003087',
  BA:       '#E31B23',
  PR:       '#009033',
  RJ:       '#003087',
  PI:       '#007a33',
  PE:       '#CC0000',
  RN:       '#009B3A',
  Marinha:  '#003366',
  FAB:      '#1B3A8A',
  Exercito: '#3d6b4e',
  Federal:  '#006400',
  default:  '#546e7a',
};

// Bandeiras via Wikimedia Commons
const _WM = 'https://commons.wikimedia.org/wiki/Special:FilePath/';
const BANDEIRAS = {
  MG:       _WM + 'Bandeira_de_Minas_Gerais.svg',
  RS:       _WM + 'Bandeira_do_Rio_Grande_do_Sul.svg',
  SP:       _WM + 'Bandeira_do_estado_de_S%C3%A3o_Paulo.svg',
  ES:       _WM + 'Bandeira_do_Esp%C3%ADrito_Santo.svg',
  AL:       _WM + 'Bandeira_de_Alagoas.svg',
  BA:       _WM + 'Bandeira_da_Bahia.svg',
  PR:       _WM + 'Bandeira_do_Paran%C3%A1.svg',
  RJ:       _WM + 'Bandeira_do_estado_do_Rio_de_Janeiro.svg',
  PI:       _WM + 'Bandeira_do_Piau%C3%AD.svg',
  PE:       _WM + 'Bandeira_de_Pernambuco.svg',
  RN:       _WM + 'Bandeira_do_Rio_Grande_do_Norte.svg',
  Marinha:  _WM + 'Bandeira_da_Marinha_do_Brasil.svg',
  FAB:      _WM + 'Bandeira_da_For%C3%A7a_A%C3%A9rea_Brasileira.svg',
  Exercito: _WM + 'Bandeira_do_Ex%C3%A9rcito_Brasileiro.svg',
  Federal:  _WM + 'Bandeira_do_Distrito_Federal_%28Brasil%29.svg',
  default:  _WM + 'Flag_of_Brazil.svg',
};

function getBandeira(nome) {
  return BANDEIRAS[getEstado(nome)] || BANDEIRAS.default;
}

function getTipo(nome) {
  const n = nome.replace(/^Concurso\s+/i, '');
  if (/\bPRF\b/i.test(n))                                                                   return 'Rodoviária Federal';
  if (/^PM[^A-Z]|^PM[A-Z]{2}|PMERJ|PMMG|PMDF|PMPI|\bCBM\b|Bombeiro|Polícia Militar/i.test(n)) return 'Militar';
  if (/^PC[^A-Z]|^PCDF|Polícia Civil/i.test(n))                                            return 'Civil';
  if (/^PP[^A-Z]|^PPRN|Policial Penal|Polícia Penal/i.test(n))                             return 'Penal';
  if (/Câmara|Legislativo/i.test(n))                                                        return 'Legislativa';
  if (/Marinha|Exército|FAB|EsPCEx|EsFCEx|EAM|EPCAR|CIAAR|Escola Naval/i.test(n))          return 'Federal';
  if (/\bPF\b|Polícia Federal/i.test(n))                                                    return 'Federal';
  return 'Outros';
}

function getBanca(status) {
  const m = (status || '').match(/\(([^)]+)\)/);
  return m ? m[1].trim() : '';
}

// ── Estado helpers ─────────────────────────────────────────────
function getEstado(nome) {
  const siglas = ['MG','RS','SP','ES','AL','BA','PR','RJ','PI','PE','RN'];
  for (const s of siglas) {
    if (new RegExp(`\\b${s}\\b`).test(nome)) return s;
  }
  if (/Marinha|EAM|Escola Naval/i.test(nome))            return 'Marinha';
  if (/FAB|EPCAR|CIAAR/i.test(nome))                     return 'FAB';
  if (/Exército|EsPCEx|EsFCEx/i.test(nome))              return 'Exercito';
  if (/Câmara|Legislativo|Federal|PCDF|DF/i.test(nome))  return 'Federal';
  return 'default';
}

function getEstadoLabel(nome) {
  const e = getEstado(nome);
  const labels = {
    Marinha: 'MB', FAB: 'FAB', Exercito: 'EB',
    Federal: 'Federal', default: '—',
  };
  return labels[e] || e;
}

function getCor(nome) {
  return CORES[getEstado(nome)] || CORES.default;
}

// ── Data helpers ───────────────────────────────────────────────
function nil(v) {
  if (!v) return true;
  const s = String(v).trim();
  return !s || s === '—' || s === '-' || s === '\\-';
}

function cell(c) {
  if (!c) return '';
  if (c.f) return c.f.trim();
  if (c.v === null || c.v === undefined) return '';
  return String(c.v).trim();
}

function findEdital(nome) {
  if (EDITAIS[nome]) return EDITAIS[nome];
  // Fuzzy: tentar correspondência parcial (caso o nome mude levemente na planilha)
  const lower = nome.toLowerCase();
  for (const [k, v] of Object.entries(EDITAIS)) {
    if (lower.includes(k.toLowerCase().substring(0, 8)) ||
        k.toLowerCase().includes(lower.substring(0, 8))) return v;
  }
  return null;
}

// ── Fetch Google Sheets ────────────────────────────────────────
async function fetchData() {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${GID}&t=${Date.now()}`;
  const res  = await fetch(url);
  const text = await res.text();
  const m    = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);?\s*$/);
  if (!m) throw new Error('Formato inesperado da API');
  const data = JSON.parse(m[1]);
  if (data.status !== 'ok') throw new Error(data.errors?.[0]?.message || 'Erro na API');
  return parseRows(data.table);
}

function parseRows(table) {
  return table.rows
    .map(row => {
      if (!row.c) return null;
      const nome = cell(row.c[0]);
      if (!nome || nome === 'Concurso') return null; // pula cabeçalho
      return {
        nome,
        etapa:        cell(row.c[1]),
        status:       cell(row.c[2]),
        provaData:    cell(row.c[3]),
        tafData:      cell(row.c[4]),
        barraFixaM:   cell(row.c[5]),
        barraFixaF:   cell(row.c[6]),
        abdomSupra:   cell(row.c[7]),
        abdomRemador: cell(row.c[8]),
        impulsao:     cell(row.c[9]),
        flexBraco:    cell(row.c[10]),
        corridaRes:   cell(row.c[11]),
        corrida50:    cell(row.c[12]),
        natacao50:    cell(row.c[13]),
        natacao200:   cell(row.c[14]),
        shuttleRun:   cell(row.c[15]),
        obs:          cell(row.c[16]),
        cor:          getCor(nome),
        estado:       getEstadoLabel(nome),
        edital:       findEdital(nome),
        bandeira:     getBandeira(nome),
        tipo:         getTipo(nome),
        banca:        getBanca(cell(row.c[2])),
      };
    })
    .filter(Boolean);
}

// ── HTML escape ────────────────────────────────────────────────
function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── TAF rows ───────────────────────────────────────────────────
function buildTafRows(c) {
  const rows = [];

  // Barra Fixa: duas colunas separadas (M e F podem ter exercícios diferentes)
  if (!nil(c.barraFixaM) || !nil(c.barraFixaF)) {
    rows.push({
      prova: 'Barra Fixa',
      masc:  nil(c.barraFixaM) ? '—' : c.barraFixaM,
      fem:   nil(c.barraFixaF) ? '—' : c.barraFixaF,
    });
  }

  // Demais provas: coluna única (já pode ter "H / M" interno)
  const singles = [
    ['Abdominal Supra / Curl Up', c.abdomSupra],
    ['Abdominal Remador',         c.abdomRemador],
    ['Impulsão Horizontal',       c.impulsao],
    ['Flexão de Braço',           c.flexBraco],
    ['Corrida de Resistência',    c.corridaRes],
    ['Corrida de 50m',            c.corrida50],
    ['Natação 50m',               c.natacao50],
    ['Natação 200m',              c.natacao200],
    ['Shuttle Run / Agilidade',   c.shuttleRun],
  ];

  for (const [prova, val] of singles) {
    if (nil(val)) continue;
    // Tenta separar "X H / Y M" em duas colunas
    const split = val.match(/^(.+?)\s*H\s*\/\s*(.+?)\s*M$/i);
    if (split) {
      rows.push({ prova, masc: split[1].trim(), fem: split[2].trim() });
    } else {
      rows.push({ prova, valor: val });
    }
  }

  return rows;
}

// ── Filtros ───────────────────────────────────────────────────
const activeFilters = { tipo: '', status: '', data: '', banca: '' };

function getFiltered() {
  const q = document.getElementById('search').value.toLowerCase().trim();
  return allData.filter(c => {
    if (q && !c.nome.toLowerCase().includes(q) &&
             !c.etapa.toLowerCase().includes(q) &&
             !c.estado.toLowerCase().includes(q)) return false;
    if (activeFilters.tipo   && c.tipo  !== activeFilters.tipo)          return false;
    if (activeFilters.status && c.status !== 'Edital publicado')         return false;
    if (activeFilters.data   && (nil(c.provaData) || /a definir/i.test(c.provaData))) return false;
    if (activeFilters.banca  && c.banca !== activeFilters.banca)         return false;
    return true;
  });
}

// ── Seções ────────────────────────────────────────────────────
const SECOES = [
  {
    id:    'andamento',
    icon:  '🟢',
    title: 'Em Andamento',
    test:  c => /andamento/i.test(c.etapa),
  },
  {
    id:    'prova',
    icon:  '📅',
    title: 'Prova Prevista',
    test:  c => /prova/i.test(c.etapa),
  },
  {
    id:    'edital',
    icon:  '📋',
    title: 'Edital Previsto',
    test:  c => /edital/i.test(c.etapa),
  },
];

// ── Render: lista ─────────────────────────────────────────────
function renderList(concursos) {
  const container = document.getElementById('sections');
  container.innerHTML = '';

  let totalVisible = 0;

  for (const sec of SECOES) {
    const items = concursos.filter(sec.test);
    if (!items.length) continue;
    totalVisible += items.length;

    const div = document.createElement('div');
    div.className = 'section';
    div.innerHTML = `
      <div class="section-header" data-section="${sec.id}">
        <span class="section-icon">${sec.icon}</span>
        <span class="section-title">${sec.title}</span>
        <span class="section-badge">${items.length}</span>
        <span class="section-chevron">▼</span>
      </div>
      <div class="section-body">
        ${items.map(c => cardHTML(c)).join('')}
      </div>
    `;
    container.appendChild(div);
  }

  if (!totalVisible) {
    container.innerHTML = '<div class="empty-state">Nenhum concurso encontrado.</div>';
  }

  // Delegação de eventos: cards
  container.addEventListener('click', e => {
    // Toggle seção
    const sh = e.target.closest('.section-header');
    if (sh) {
      sh.closest('.section').classList.toggle('collapsed');
      return;
    }
    // Abrir detalhe
    const card = e.target.closest('.card[data-nome]');
    if (card) showDetail(card.dataset.nome);
  });
}

function cardHTML(c) {
  const statusBadge = c.status === 'Edital publicado'
    ? `<span class="badge badge-green">✓ Edital</span>`
    : `<span class="badge badge-orange">⏳ Previsto</span>`;

  const dataProva = !nil(c.provaData)
    ? `<span class="card-date">📅 ${esc(c.provaData)}</span>`
    : '';

  return `
    <div class="card" data-nome="${esc(c.nome)}">
      <div class="card-flag" style="border-left:3px solid ${c.cor}">
        <img src="${c.bandeira}" alt="${esc(c.estado)}" loading="lazy"
             onerror="this.closest('.card-flag').style.background='${c.cor}';this.remove()">
      </div>
      <div class="card-body">
        <div class="card-name" title="${esc(c.nome)}">${esc(c.nome)}</div>
        <div class="card-meta">
          ${statusBadge}
          ${dataProva}
        </div>
      </div>
      <div class="card-arrow">›</div>
    </div>
  `;
}

// ── Render: detalhe ───────────────────────────────────────────
let currentConcurso = null;

function showDetail(nome) {
  const c = allData.find(x => x.nome === nome);
  if (!c) return;
  currentConcurso = c;

  const tafRows = buildTafRows(c);
  const hasEdital = !!c.edital;
  const hasTAF = tafRows.length > 0;

  const editalBtn = hasEdital
    ? `<a href="${c.edital}" target="_blank" rel="noopener" class="edital-btn" style="background:${c.cor}">
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
         Abrir Edital
       </a>`
    : `<div class="edital-btn disabled">
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
         Edital não disponível
       </div>`;

  const tafSection = hasTAF
    ? `<button class="taf-btn" id="btn-open-taf">
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${c.cor}" stroke-width="2.5"><path d="M6 4v16M18 4v16M6 12h12"/><rect x="2" y="3" width="20" height="18" rx="2"/></svg>
         <span class="taf-btn-label">Provas do TAF</span>
         <span class="taf-count">${tafRows.length} provas</span>
         <span style="color:#ccc;font-size:18px">›</span>
       </button>`
    : `<div class="no-taf-card">Sem TAF físico para este cargo.<br><small>${esc(c.obs || '')}</small></div>`;

  const obsSection = !nil(c.obs)
    ? `<div class="obs-card">
         <div class="obs-label">📝 Observações</div>
         <div class="obs-text">${esc(c.obs)}</div>
       </div>`
    : '';

  document.getElementById('detail-header').style.background = c.cor;
  document.getElementById('main-detail').innerHTML = `
    <div class="detail-hero" style="background:${c.cor}">
      <div class="detail-estado">${esc(c.estado)}</div>
      <div class="detail-name">${esc(c.nome)}</div>
      <div class="detail-badges">
        <span class="detail-badge">${esc(c.etapa)}</span>
        <span class="detail-badge">${esc(c.status)}</span>
      </div>
    </div>
    <div class="detail-body">
      ${editalBtn}
      <div class="info-grid">
        <div class="info-card">
          <div class="info-label">📅 Prova</div>
          <div class="info-value">${nil(c.provaData) ? 'A definir' : esc(c.provaData)}</div>
        </div>
        <div class="info-card">
          <div class="info-label">🏃 TAF</div>
          <div class="info-value">${nil(c.tafData) ? 'A definir' : esc(c.tafData)}</div>
        </div>
      </div>
      ${tafSection}
      ${obsSection}
    </div>
  `;

  navigate('detail');

  if (hasTAF) {
    document.getElementById('btn-open-taf')?.addEventListener('click', showTAF);
  }
}

// ── Render: TAF ───────────────────────────────────────────────
function showTAF() {
  const c = currentConcurso;
  if (!c) return;

  const tafRows = buildTafRows(c);

  const hasDual = tafRows.some(r => 'masc' in r);

  let tableHead, tableBody;

  if (hasDual) {
    tableHead = `<tr><th>Prova</th><th>Masculino</th><th>Feminino</th></tr>`;
    tableBody = tafRows.map(r => {
      if ('masc' in r) {
        return `<tr><td>${esc(r.prova)}</td><td>${esc(r.masc)}</td><td>${esc(r.fem)}</td></tr>`;
      }
      return `<tr><td>${esc(r.prova)}</td><td colspan="2" style="text-align:center">${esc(r.valor)}</td></tr>`;
    }).join('');
  } else {
    tableHead = `<tr><th>Prova</th><th>Índice</th></tr>`;
    tableBody = tafRows.map(r =>
      `<tr><td>${esc(r.prova)}</td><td>${esc(r.valor || '')}</td></tr>`
    ).join('');
  }

  document.getElementById('taf-header').style.background = c.cor;
  document.getElementById('taf-title').textContent = 'Provas do TAF';
  document.getElementById('main-taf').innerHTML = `
    <div class="taf-body">
      <p class="taf-subtitle">${esc(c.nome)}</p>
      <div class="taf-table-card">
        <table class="taf-table">
          <thead>${tableHead}</thead>
          <tbody>${tableBody}</tbody>
        </table>
      </div>
      ${!nil(c.obs) ? `<div class="obs-card" style="margin-top:12px"><div class="obs-label">📝 Observações</div><div class="obs-text">${esc(c.obs)}</div></div>` : ''}
    </div>
  `;

  navigate('taf');
}

// ── Navegação ─────────────────────────────────────────────────
const VIEWS = ['list', 'detail', 'taf'];
let viewStack = ['list'];

function navigate(view) {
  VIEWS.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.classList.toggle('active', v === view);
  });
  window.scrollTo(0, 0);
  viewStack.push(view);
}

function goBack() {
  viewStack.pop();
  const prev = viewStack[viewStack.length - 1] || 'list';
  VIEWS.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.classList.toggle('active', v === prev);
  });
  window.scrollTo(0, 0);
}

// ── Busca ─────────────────────────────────────────────────────
let allData = [];

function setupSearch() {
  document.getElementById('search').addEventListener('input', () => renderList(getFiltered()));
}

function setupFilters() {
  Object.keys(activeFilters).forEach(k => activeFilters[k] = '');
  document.querySelectorAll('.chip[data-group="tipo"]').forEach(c =>
    c.classList.toggle('chip-active', c.dataset.val === ''));
  document.querySelectorAll('.chip[data-group="status"], .chip[data-group="data"], .chip[data-group="banca"]').forEach(c =>
    c.classList.remove('chip-active'));

  const extraRow = document.getElementById('chips-extra');
  extraRow.querySelectorAll('.chip-sep, [data-group="banca"]').forEach(el => el.remove());
  const bancas = [...new Set(allData.map(c => c.banca).filter(Boolean))].sort();
  if (bancas.length) {
    const sep = document.createElement('span');
    sep.className = 'chip-sep';
    sep.textContent = '|';
    extraRow.appendChild(sep);
    bancas.forEach(b => {
      const btn = document.createElement('button');
      btn.className = 'chip';
      btn.dataset.group = 'banca';
      btn.dataset.val = b;
      btn.textContent = b;
      extraRow.appendChild(btn);
    });
  }
}

// ── Init ──────────────────────────────────────────────────────
async function init() {
  const loading = document.getElementById('loading-state');
  const error   = document.getElementById('error-state');
  const sections = document.getElementById('sections');

  loading.classList.remove('hidden');
  error.classList.add('hidden');
  sections.innerHTML = '';

  try {
    allData = await fetchData();
    setupFilters();
    loading.classList.add('hidden');
    renderList(allData);
  } catch (err) {
    loading.classList.add('hidden');
    error.classList.remove('hidden');
    document.getElementById('error-msg').textContent =
      `Erro ao carregar: ${err.message}. Verifique se a planilha está compartilhada como "Qualquer pessoa com o link".`;
  }
}

// ── Eventos ───────────────────────────────────────────────────
document.getElementById('btn-refresh').addEventListener('click', init);

document.getElementById('filters-wrap').addEventListener('click', e => {
  const chip = e.target.closest('.chip[data-group]');
  if (!chip) return;
  const group = chip.dataset.group;
  const val   = chip.dataset.val;
  if (group === 'tipo') {
    document.querySelectorAll('.chip[data-group="tipo"]').forEach(c => c.classList.remove('chip-active'));
    chip.classList.add('chip-active');
    activeFilters.tipo = val;
  } else {
    const isActive = chip.classList.contains('chip-active');
    chip.classList.toggle('chip-active', !isActive);
    activeFilters[group] = isActive ? '' : val;
  }
  renderList(getFiltered());
});
document.getElementById('btn-back').addEventListener('click', goBack);
document.getElementById('btn-back-taf').addEventListener('click', goBack);

window.addEventListener('popstate', goBack);

setupSearch();

// ── Service Worker ────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// ── Start ─────────────────────────────────────────────────────
init();
