// 해법독서논술 고양파주지사 웹 애플리케이션 인터랙션 스크립트

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // 1. 슬라이더 초기화
  initHeroSlider();

  // 2. 교재분석 섹션 렌더링 & 이벤트
  renderBookAnalyses('all');
  initBookFilter();

  // 3. 입시정보 섹션 렌더링 & 이벤트
  renderAdmissions('all');
  initAdmissionFilter();

  // 4. 교실 찾기 렌더링 & 이벤트
  renderClasses('all');
  initClassSearchAndFilter();

  // 5. 가맹/창업 혜택 및 후기 렌더링
  renderFranchiseAndReviews();

  // 6. 상담 신청 폼 처리
  initConsultationForm();

  // 7. 모바일 메뉴 & 네비게이션 스크롤
  initNavigation();
}

/* ==========================================================================
   1. 히어로 슬라이더
   ========================================================================== */
let currentSlide = 0;
let slideInterval;

function initHeroSlider() {
  const container = document.getElementById('hero-slider');
  if (!container || !SITE_DATA.heroSlides.length) return;

  container.innerHTML = SITE_DATA.heroSlides.map((slide, idx) => `
    <div class="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${idx === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}" data-slide="${idx}">
      <div class="absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-90"></div>
      <div class="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div class="relative max-w-6xl mx-auto px-6 py-20 text-center text-white z-20">
        <span class="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white/20 backdrop-blur-md border border-white/30 mb-6 text-yellow-300">
          <i class="fas fa-sparkles mr-2"></i>${slide.badge}
        </span>
        <h1 class="hero-title text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
          ${slide.title}
        </h1>
        <p class="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          ${slide.subtitle}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <a href="${slide.ctaLink}" class="px-8 py-4 rounded-xl font-bold bg-orange-600 hover:bg-orange-500 text-white shadow-lg hover:shadow-orange-500/30 transition transform hover:-translate-y-0.5 flex items-center gap-2">
            <span>${slide.ctaText}</span>
            <i class="fas fa-arrow-right"></i>
          </a>
          <a href="#consultation" class="px-8 py-4 rounded-xl font-bold bg-white/15 hover:bg-white/25 text-white border border-white/40 backdrop-blur-sm transition flex items-center gap-2">
            <i class="fas fa-comments"></i>
            <span>1:1 빠른 상담신청</span>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  // 슬라이드 인디케이터
  const indicatorContainer = document.getElementById('slider-indicators');
  if (indicatorContainer) {
    indicatorContainer.innerHTML = SITE_DATA.heroSlides.map((_, idx) => `
      <button onclick="goToSlide(${idx})" class="w-3 h-3 rounded-full transition-all ${idx === 0 ? 'w-8 bg-orange-500' : 'bg-white/50 hover:bg-white'}" aria-label="Slide ${idx + 1}"></button>
    `).join('');
  }

  startSliderTimer();
}

function startSliderTimer() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    goToSlide((currentSlide + 1) % SITE_DATA.heroSlides.length);
  }, 6000);
}

window.goToSlide = function(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('#slider-indicators button');
  if (!slides.length) return;

  slides.forEach((s, idx) => {
    if (idx === index) {
      s.classList.remove('opacity-0', 'z-0', 'pointer-events-none');
      s.classList.add('opacity-100', 'z-10');
    } else {
      s.classList.remove('opacity-100', 'z-10');
      s.classList.add('opacity-0', 'z-0', 'pointer-events-none');
    }
  });

  indicators.forEach((ind, idx) => {
    if (idx === index) {
      ind.className = 'w-8 h-3 rounded-full transition-all bg-orange-500';
    } else {
      ind.className = 'w-3 h-3 rounded-full transition-all bg-white/50 hover:bg-white';
    }
  });

  currentSlide = index;
  startSliderTimer();
};

/* ==========================================================================
   2. 교재분석 섹션 (Book Analysis)
   ========================================================================== */
function renderBookAnalyses(filter = 'all') {
  const container = document.getElementById('book-analysis-list');
  if (!container) return;

  const filtered = filter === 'all' 
    ? SITE_DATA.bookAnalyses 
    : SITE_DATA.bookAnalyses.filter(item => item.level === filter);

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-3 text-center py-12 text-slate-400">해당 분류의 교재 분석 자료가 준비 중입니다.</div>`;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="book-card bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between border border-slate-200">
      <div class="relative h-48 overflow-hidden group">
        <img src="${item.coverImage}" alt="${item.title}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-sm">${item.levelLabel}</span>
        </div>
        <div class="absolute bottom-3 left-4 right-4 text-white">
          <span class="text-xs text-yellow-300 font-semibold mb-1 block">${item.featureTag}</span>
          <h4 class="font-bold text-lg leading-snug line-clamp-1">${item.title}</h4>
        </div>
      </div>
      
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p class="text-sm text-slate-600 mb-4 line-clamp-2">${item.summary}</p>
          
          <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-4 space-y-2">
            <div class="text-xs font-bold text-blue-900 flex items-center gap-1.5">
              <i class="fas fa-check-circle text-blue-600"></i> 핵심 분석 포인트
            </div>
            <p class="text-xs text-slate-600 line-clamp-2">${item.analysisPoints[0].title}</p>
          </div>
        </div>

        <div class="pt-2 border-t border-slate-100 flex items-center justify-between">
          <span class="text-xs text-slate-400"><i class="fas fa-user-graduate mr-1"></i>대상: ${item.targetAge}</span>
          <button onclick="openBookModal('${item.id}')" class="px-4 py-2 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-lg transition flex items-center gap-1">
            <span>심층 분석보기</span>
            <i class="fas fa-chevron-right text-[10px]"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function initBookFilter() {
  const buttons = document.querySelectorAll('[data-book-filter]');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('bg-blue-600', 'text-white', 'shadow-md'));
      buttons.forEach(b => b.classList.add('bg-white', 'text-slate-700'));
      btn.classList.add('bg-blue-600', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'text-slate-700');
      
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
    <div class="space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200">
        <div>
          <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">${item.levelLabel}</span>
          <span class="ml-2 text-xs text-orange-600 font-semibold">${item.featureTag}</span>
          <h2 class="text-2xl font-bold text-slate-900 mt-2">${item.title}</h2>
        </div>
        <div class="text-right">
          <span class="text-xs text-slate-500 block">학습 권장 대상</span>
          <span class="text-sm font-bold text-slate-800">${item.targetAge}</span>
        </div>
      </div>

      <div class="bg-blue-50/70 p-4 rounded-xl border border-blue-100 text-sm text-slate-700 leading-relaxed">
        <strong>교재 개요:</strong> ${item.summary}
      </div>

      <div>
        <h4 class="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
          <i class="fas fa-microscope text-orange-600"></i> 교재 심층 교육 분석 포인트
        </h4>
        <div class="space-y-4">
          ${item.analysisPoints.map(pt => `
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
              <h5 class="font-bold text-blue-900 text-sm mb-1">${pt.title}</h5>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${pt.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div class="p-4 rounded-xl bg-amber-50/80 border border-amber-200">
          <div class="text-xs font-bold text-amber-900 mb-1"><i class="fas fa-books mr-1"></i> 교재 패키지 구성</div>
          <p class="text-xs text-amber-800">${item.curriculumTable}</p>
        </div>
        <div class="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200">
          <div class="text-xs font-bold text-emerald-900 mb-1"><i class="fas fa-lightbulb mr-1"></i> 고양파주지사 지도 TIP</div>
          <p class="text-xs text-emerald-800">${item.teacherTip}</p>
        </div>
      </div>

      <div class="pt-4 text-center border-t border-slate-200">
        <a href="#consultation" onclick="closeDetailModal(); setConsultationBook('${item.title}')" class="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl shadow-md transition">
          <i class="fas fa-phone-alt"></i>
          <span>이 교재로 맞춤 학습 상담 신청하기</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

/* ==========================================================================
   3. 입시정보 섹션 (Admissions)
   ========================================================================== */
function renderAdmissions(filter = 'all') {
  const container = document.getElementById('admission-list');
  if (!container) return;

  const list = SITE_DATA.admissions;

  container.innerHTML = list.map(adm => `
    <div class="blog-card flex flex-col justify-between">
      <div class="relative h-48 overflow-hidden">
        <img src="${adm.thumbnail}" alt="${adm.title}" class="w-full h-full object-cover transition duration-500 hover:scale-105">
        <div class="absolute top-4 left-4 flex gap-2">
          <span class="badge-hot shadow-sm">${adm.badge}</span>
          <span class="px-2.5 py-0.5 bg-slate-900/70 text-white text-xs rounded-full backdrop-blur-sm">${adm.category}</span>
        </div>
      </div>

      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center text-xs text-slate-400 gap-3 mb-2">
            <span><i class="far fa-calendar-alt mr-1"></i>${adm.date}</span>
            <span><i class="far fa-user mr-1"></i>${adm.author}</span>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-3 hover:text-blue-700 transition cursor-pointer leading-snug line-clamp-2" onclick="openAdmissionModal('${adm.id}')">
            ${adm.title}
          </h3>
          <p class="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed">
            ${adm.summary}
          </p>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span class="text-xs font-semibold text-blue-600">해법독서논술 입시전략</span>
          <button onclick="openAdmissionModal('${adm.id}')" class="text-xs font-bold text-slate-700 hover:text-orange-600 flex items-center gap-1 transition">
            <span>전문 칼럼 읽기</span>
            <i class="fas fa-arrow-right text-[10px]"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function initAdmissionFilter() {
  // 추후 필요 시 카테고리 필터 연동
}

window.openAdmissionModal = function(id) {
  const adm = SITE_DATA.admissions.find(a => a.id === id);
  if (!adm) return;

  const modal = document.getElementById('detail-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="space-y-6">
      <div class="pb-4 border-b border-slate-200">
        <div class="flex items-center gap-2 mb-2">
          <span class="badge-hot">${adm.badge}</span>
          <span class="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">${adm.category}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">${adm.title}</h2>
        <div class="flex items-center gap-4 text-xs text-slate-500 mt-3">
          <span><i class="far fa-calendar mr-1"></i>${adm.date}</span>
          <span><i class="far fa-user mr-1"></i>${adm.author}</span>
        </div>
      </div>

      <div class="prose-analysis max-w-none text-slate-700 leading-relaxed text-sm sm:text-base">
        ${adm.content}
      </div>

      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 class="font-bold text-lg mb-1">우리 아이 2028 대입 문해력 진단이 필요하신가요?</h4>
          <p class="text-xs text-blue-200">고양·파주 가까운 교실에서 1:1 독서능력 무료 진단테스트를 받아보세요.</p>
        </div>
        <a href="#consultation" onclick="closeDetailModal()" class="px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white text-xs font-bold rounded-xl whitespace-nowrap transition shadow-md">
          진단 상담 신청하기
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

/* ==========================================================================
   4. 우리동네 교실 찾기 (Class Finder)
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
      <div class="col-span-3 text-center py-16 bg-white rounded-2xl border border-slate-200">
        <i class="fas fa-map-marker-alt text-4xl text-slate-300 mb-3"></i>
        <p class="text-slate-600 font-semibold">검색 조건에 맞는 교실이 없습니다.</p>
        <p class="text-xs text-slate-400 mt-1">고양파주지사로 문의하시면 인근 개설 예정 교실을 안내해 드립니다.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(cls => `
    <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">${cls.regionLabel}</span>
          <span class="text-xs font-medium text-slate-500"><i class="fas fa-user-tie mr-1 text-slate-400"></i>${cls.director}</span>
        </div>
        <h4 class="text-lg font-bold text-slate-900 mb-2">${cls.name}</h4>
        <p class="text-xs text-slate-500 mb-4 flex items-start gap-1.5">
          <i class="fas fa-map-marker-alt text-red-500 mt-0.5"></i>
          <span>${cls.address}</span>
        </p>

        <div class="flex flex-wrap gap-1.5 mb-6">
          ${cls.tags.map(tag => `<span class="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] rounded-md font-medium">#${tag}</span>`).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
        <a href="tel:${cls.tel}" class="text-xs font-bold text-slate-700 hover:text-blue-700 flex items-center gap-1.5">
          <i class="fas fa-phone-alt text-blue-600"></i>
          <span>${cls.tel}</span>
        </a>
        <button onclick="selectClassForConsultation('${cls.name}')" class="px-3 py-1.5 bg-orange-50 hover:bg-orange-600 text-orange-700 hover:text-white rounded-lg text-xs font-bold transition">
          교실 상담예약
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
      regionChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
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
    note.value = `[관심 교재: ${bookTitle}]에 대해 상담받고 싶습니다.`;
  }
};

/* ==========================================================================
   5. 가맹 혜택 및 후기 렌더링
   ========================================================================== */
function renderFranchiseAndReviews() {
  // 가맹 혜택
  const benefitsContainer = document.getElementById('franchise-benefits');
  if (benefitsContainer) {
    benefitsContainer.innerHTML = SITE_DATA.franchiseInfo.benefits.map(b => `
      <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-orange-300 transition">
        <div class="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-xl mb-4">
          <i class="${b.icon}"></i>
        </div>
        <h4 class="text-base font-bold text-slate-900 mb-2">${b.title}</h4>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${b.desc}</p>
      </div>
    `).join('');
  }

  // 창업 프로세스
  const stepsContainer = document.getElementById('franchise-steps');
  if (stepsContainer) {
    stepsContainer.innerHTML = SITE_DATA.franchiseInfo.steps.map(s => `
      <div class="relative p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white">
        <span class="text-3xl font-black text-orange-500/40 mb-2 block font-mono">${s.step}</span>
        <h4 class="text-base font-bold mb-2 text-white">${s.title}</h4>
        <p class="text-xs text-slate-400 leading-relaxed">${s.desc}</p>
      </div>
    `).join('');
  }

  // 후기
  const reviewsContainer = document.getElementById('review-list');
  if (reviewsContainer) {
    reviewsContainer.innerHTML = SITE_DATA.reviews.map(r => `
      <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-md border border-amber-200">${r.tag}</span>
            <div class="text-yellow-400 text-xs">
              ${'<i class="fas fa-star"></i>'.repeat(r.rating)}
            </div>
          </div>
          <p class="text-sm text-slate-700 leading-relaxed mb-6">"${r.text}"</p>
        </div>
        <div class="text-xs font-bold text-slate-500 pt-3 border-t border-slate-100 flex items-center gap-2">
          <i class="fas fa-user-circle text-slate-400 text-base"></i>
          <span>${r.author}</span>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   6. 상담 신청 폼
   ========================================================================== */
function initConsultationForm() {
  const form = document.getElementById('consultation-form');
  if (!form) return;

  // 교실 선택 옵션 주입
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
    const notes = document.getElementById('consult-notes').value;

    if (!name || !phone) {
      alert('신청자 성함과 연락처를 입력해 주세요.');
      return;
    }

    // 가상 접수 처리 및 완료 안내
    alert(`[상담 신청이 정상 접수되었습니다!]\n\n• 신청자: ${name} 님\n• 유형: ${type === 'student' ? '학부모 자녀 학습상담' : '원장님 가맹/창업 상담'}\n• 희망교실: ${targetClass || '전체/인근교실 배정'}\n\n고양파주지사 담당자가 기재해주신 번호(${phone})로 빠른 시간 내에 연락드리겠습니다.`);
    form.reset();
  });
}

/* ==========================================================================
   7. 네비게이션 & 모달 시스템
   ========================================================================== */
function initNavigation() {
  const navbar = document.getElementById('main-navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
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
