// 해법독서논술 고양파주지사 웹 애플리케이션 - High-End Luxury Edition

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // 1. 교재분석 섹션 렌더링 & 이벤트
  renderBookAnalyses('all');
  initBookFilter();

  // 2. 입시정보 섹션 렌더링
  renderAdmissions();

  // 3. 교실 찾기 렌더링 & 이벤트
  renderClasses('all');
  initClassSearchAndFilter();

  // 4. 가맹/창업 혜택 및 후기 렌더링
  renderFranchiseAndReviews();

  // 5. 상담 신청 폼 처리
  initConsultationForm();

  // 6. 모바일 메뉴 & 네비게이션 스크롤
  initNavigation();
}

/* ==========================================================================
   1. 교재분석 섹션 (Book Analysis)
   ========================================================================== */
function renderBookAnalyses(filter = 'all') {
  const container = document.getElementById('book-analysis-list');
  if (!container) return;

  const filtered = filter === 'all' 
    ? SITE_DATA.bookAnalyses 
    : SITE_DATA.bookAnalyses.filter(item => item.level === filter);

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-3 text-center py-12 text-slate-500">해당 분류의 교재 분석 자료가 준비 중입니다.</div>`;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="luxury-card overflow-hidden flex flex-col justify-between group">
      <div class="relative h-48 overflow-hidden">
        <img src="${item.coverImage}" alt="${item.title}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded-md shadow-md">${item.levelLabel}</span>
        </div>
        <div class="absolute bottom-3 left-4 right-4 text-white">
          <span class="text-xs text-amber-300 font-semibold mb-1 block">${item.featureTag}</span>
          <h4 class="font-bold text-lg leading-snug line-clamp-1">${item.title}</h4>
        </div>
      </div>
      
      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p class="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">${item.summary}</p>
          
          <div class="bg-black/40 p-3.5 rounded-xl border border-white/5 space-y-1.5">
            <div class="text-[11px] font-bold text-amber-400 flex items-center gap-1.5">
              <i class="fas fa-check-circle text-amber-400"></i> 핵심 교육 포인트
            </div>
            <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">${item.analysisPoints[0].title}</p>
          </div>
        </div>

        <div class="pt-3 border-t border-white/5 flex items-center justify-between">
          <span class="text-[11px] text-slate-400"><i class="fas fa-user-graduate mr-1 text-amber-400"></i>대상: ${item.targetAge}</span>
          <button onclick="openBookModal('${item.id}')" class="px-3.5 py-1.5 text-xs font-bold text-amber-300 hover:text-slate-950 bg-amber-400/10 hover:bg-amber-400 border border-amber-400/30 rounded-lg transition flex items-center gap-1.5">
            <span>심층 분석</span>
            <i class="fas fa-chevron-right text-[9px]"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function initBookFilter() {
  const buttons = document.querySelectorAll('[data-book-filter]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-book-filter');
      renderBookAnalyses(filter);
    });
  });
}

window.openBookModal = function(id) {
  const item = SITE_DATA.bookAnalyses.find(b => b.id === id);
  if (!item) return;

  const modal = document.getElementById('detail-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="space-y-6 text-slate-200">
      <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
        <div>
          <span class="px-3 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded">${item.levelLabel}</span>
          <span class="ml-2 text-xs text-amber-300 font-semibold">${item.featureTag}</span>
          <h2 class="text-2xl font-extrabold text-white mt-2">${item.title}</h2>
        </div>
        <div class="text-right">
          <span class="text-xs text-slate-400 block">권장 대상</span>
          <span class="text-sm font-bold text-amber-400">${item.targetAge}</span>
        </div>
      </div>

      <div class="bg-black/50 p-4 rounded-xl border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <strong class="text-white">교재 개요:</strong> ${item.summary}
      </div>

      <div>
        <h4 class="text-base font-bold text-white mb-3 flex items-center gap-2">
          <i class="fas fa-microscope text-amber-400"></i> 교재 심층 교육 분석 포인트
        </h4>
        <div class="space-y-3">
          ${item.analysisPoints.map(pt => `
            <div class="p-4 bg-white/5 rounded-xl border border-white/5">
              <h5 class="font-bold text-amber-300 text-sm mb-1">${pt.title}</h5>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${pt.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
          <div class="text-xs font-bold text-amber-300 mb-1"><i class="fas fa-books mr-1"></i> 교재 패키지 구성</div>
          <p class="text-xs text-slate-300 leading-relaxed">${item.curriculumTable}</p>
        </div>
        <div class="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <div class="text-xs font-bold text-blue-300 mb-1"><i class="fas fa-lightbulb mr-1"></i> 고양파주지사 지도 TIP</div>
          <p class="text-xs text-slate-300 leading-relaxed">${item.teacherTip}</p>
        </div>
      </div>

      <div class="pt-4 text-center border-t border-white/10">
        <a href="#consultation" onclick="closeDetailModal(); setConsultationBook('${item.title}')" class="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold">
          <i class="fas fa-edit"></i>
          <span>이 교재로 맞춤 학습상담 신청하기</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

/* ==========================================================================
   2. 입시정보 섹션 (Admissions)
   ========================================================================== */
function renderAdmissions() {
  const container = document.getElementById('admission-list');
  if (!container) return;

  container.innerHTML = SITE_DATA.admissions.map(adm => `
    <div class="luxury-card overflow-hidden flex flex-col justify-between group">
      <div class="relative h-44 overflow-hidden">
        <img src="${adm.thumbnail}" alt="${adm.title}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
        <div class="absolute top-3 left-3 flex gap-2">
          <span class="px-2.5 py-0.5 bg-amber-500 text-slate-950 text-[10px] font-black rounded-full">${adm.badge}</span>
          <span class="px-2 py-0.5 bg-black/60 text-slate-300 text-[10px] rounded-full backdrop-blur-md border border-white/10">${adm.category}</span>
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div class="flex items-center text-[11px] text-slate-500 gap-2 mb-2">
            <span><i class="far fa-calendar-alt mr-1"></i>${adm.date}</span>
          </div>
          <h3 class="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition cursor-pointer leading-snug line-clamp-2" onclick="openAdmissionModal('${adm.id}')">
            ${adm.title}
          </h3>
          <p class="text-xs text-slate-400 line-clamp-3 leading-relaxed">
            ${adm.summary}
          </p>
        </div>

        <div class="pt-3 border-t border-white/5 flex items-center justify-between">
          <span class="text-[11px] text-blue-400 font-semibold">입시 심층 분석</span>
          <button onclick="openAdmissionModal('${adm.id}')" class="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition">
            <span>칼럼 전문</span>
            <i class="fas fa-arrow-right text-[10px]"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

window.openAdmissionModal = function(id) {
  const adm = SITE_DATA.admissions.find(a => a.id === id);
  if (!adm) return;

  const modal = document.getElementById('detail-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="space-y-6 text-slate-200">
      <div class="pb-4 border-b border-white/10">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-0.5 bg-amber-500 text-slate-950 text-xs font-black rounded-full">${adm.badge}</span>
          <span class="px-3 py-0.5 bg-white/5 text-slate-300 text-xs font-semibold rounded-md border border-white/10">${adm.category}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white leading-tight">${adm.title}</h2>
        <div class="flex items-center gap-4 text-xs text-slate-400 mt-3">
          <span><i class="far fa-calendar mr-1"></i>${adm.date}</span>
          <span><i class="far fa-user mr-1 text-amber-400"></i>${adm.author}</span>
        </div>
      </div>

      <div class="article-body max-w-none text-slate-300 leading-relaxed text-sm sm:text-base">
        ${adm.content}
      </div>

      <div class="p-6 rounded-2xl bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 class="font-bold text-white text-base mb-1">우리 아이 2028 대입 문해력 진단이 필요하신가요?</h4>
          <p class="text-xs text-slate-400">고양·파주 가까운 교실에서 1:1 독서능력 무료 진단테스트를 받아보세요.</p>
        </div>
        <a href="#consultation" onclick="closeDetailModal()" class="btn-gold px-6 py-3 rounded-xl text-xs font-bold whitespace-nowrap">
          진단 상담 신청하기
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

/* ==========================================================================
   3. 우리동네 교실 찾기 (Find Class)
   ========================================================================== */
function renderClasses(regionFilter = 'all', searchQuery = '') {
  const container = document.getElementById('class-list');
  if (!container) return;

  let list = SITE_DATA.classes;

  if (regionFilter !== 'all') {
    list = list.filter(cls => cls.region === regionFilter);
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.trim().toLowerCase();
    list = list.filter(cls => 
      cls.name.toLowerCase().includes(q) || 
      cls.address.toLowerCase().includes(q) ||
      cls.director.toLowerCase().includes(q)
    );
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-3 text-center py-16 glass-panel">
        <i class="fas fa-map-marker-alt text-4xl text-slate-600 mb-3"></i>
        <p class="text-slate-300 font-semibold">검색 조건에 맞는 교실이 없습니다.</p>
        <p class="text-xs text-slate-500 mt-1">고양파주지사로 문의하시면 인근 개설 예정 교실을 안내해 드립니다.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(cls => `
    <div class="luxury-card p-6 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">${cls.regionLabel}</span>
          <span class="text-xs text-slate-400"><i class="fas fa-user-tie mr-1 text-slate-500"></i>${cls.director}</span>
        </div>
        <h4 class="text-lg font-bold text-white mb-2">${cls.name}</h4>
        <p class="text-xs text-slate-400 mb-4 flex items-start gap-1.5 leading-relaxed">
          <i class="fas fa-map-marker-alt text-amber-500 mt-0.5"></i>
          <span>${cls.address}</span>
        </p>

        <div class="flex flex-wrap gap-1.5 mb-6">
          ${cls.tags.map(tag => `<span class="px-2 py-0.5 bg-white/5 text-slate-300 text-[10px] rounded font-medium border border-white/5">#${tag}</span>`).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-white/5 flex items-center justify-between">
        <a href="tel:${cls.tel}" class="text-xs font-bold text-slate-300 hover:text-amber-400 flex items-center gap-1.5 transition">
          <i class="fas fa-phone-alt text-amber-500"></i>
          <span>${cls.tel}</span>
        </a>
        <button onclick="selectClassForConsultation('${cls.name}')" class="px-3.5 py-1.5 bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/30 rounded-lg text-xs font-bold transition">
          상담예약
        </button>
      </div>
    </div>
  `).join('');
}

function initClassSearchAndFilter() {
  const regionChips = document.querySelectorAll('.region-chip');
  const searchInput = document.getElementById('class-search');
  let currentRegion = 'all';

  regionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      regionChips.forEach(c => c.classList.remove('active', 'bg-amber-500', 'text-slate-950'));
      chip.classList.add('active', 'bg-amber-500', 'text-slate-950');
      currentRegion = chip.getAttribute('data-region');
      renderClasses(currentRegion, searchInput ? searchInput.value : '');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderClasses(currentRegion, e.target.value);
    });
  }
}

window.selectClassForConsultation = function(className) {
  const select = document.getElementById('consult-class-select');
  if (select) {
    select.value = className;
  }
  const section = document.getElementById('consultation');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

window.setConsultationBook = function(bookTitle) {
  const note = document.getElementById('consult-notes');
  if (note) {
    note.value = `[관심 교재: ${bookTitle}]에 대해 1:1 상담받고 싶습니다.`;
  }
};

/* ==========================================================================
   4. 가맹 혜택 및 후기 렌더링
   ========================================================================== */
function renderFranchiseAndReviews() {
  // 가맹 혜택
  const benefitsContainer = document.getElementById('franchise-benefits');
  if (benefitsContainer) {
    benefitsContainer.innerHTML = SITE_DATA.franchiseInfo.benefits.map(b => `
      <div class="glass-panel p-6 hover:border-amber-400/40 transition">
        <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl mb-4 border border-amber-500/20">
          <i class="${b.icon}"></i>
        </div>
        <h4 class="text-base font-bold text-white mb-2">${b.title}</h4>
        <p class="text-xs text-slate-400 leading-relaxed">${b.desc}</p>
      </div>
    `).join('');
  }

  // 후기
  const reviewsContainer = document.getElementById('review-list');
  if (reviewsContainer) {
    reviewsContainer.innerHTML = SITE_DATA.reviews.map(r => `
      <div class="glass-panel p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 bg-amber-500/10 text-amber-300 text-xs font-bold rounded border border-amber-500/20">${r.tag}</span>
            <div class="text-amber-400 text-xs">
              ${'<i class="fas fa-star"></i>'.repeat(r.rating)}
            </div>
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">"${r.text}"</p>
        </div>
        <div class="text-xs font-bold text-slate-400 pt-3 border-t border-white/5 flex items-center gap-2">
          <i class="fas fa-user-circle text-amber-500 text-base"></i>
          <span>${r.author}</span>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   5. 상담 신청 폼
   ========================================================================== */
function initConsultationForm() {
  const form = document.getElementById('consultation-form');
  if (!form) return;

  const classSelect = document.getElementById('consult-class-select');
  if (classSelect) {
    SITE_DATA.classes.forEach(cls => {
      const opt = document.createElement('option');
      opt.value = cls.name;
      opt.textContent = `[${cls.regionLabel}] ${cls.name}`;
      classSelect.appendChild(opt);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('consult-name').value;
    const phone = document.getElementById('consult-phone').value;
    const type = document.querySelector('input[name="consult-type"]:checked').value;
    const targetClass = classSelect ? classSelect.value : '고양파주지사 직속';

    if (!name || !phone) {
      alert('신청자 성함과 연락처를 입력해 주세요.');
      return;
    }

    alert(`[상담 신청이 정상 접수되었습니다!]\n\n• 신청자: ${name} 님\n• 상담 유형: ${type === 'student' ? '학부모 자녀 학습상담' : '원장님 가맹/창업 상담'}\n• 지정 교실: ${targetClass || '고양파주지사 직속'}\n\n고양파주지사 담당자가 ${phone} 번호로 빠르게 안내드리겠습니다.`);
    form.reset();
  });
}

/* ==========================================================================
   6. 네비게이션 & 모달 시스템
   ========================================================================== */
function initNavigation() {
  const navbar = document.getElementById('main-navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

window.closeDetailModal = function() {
  const modal = document.getElementById('detail-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
};
