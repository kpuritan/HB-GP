// 해법독서논술 고양파주지사 웹 애플리케이션 - Bright & Warm Education Edition

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // 1. [해법독서논술] 브랜드 4대 기둥 렌더링
  renderBrandPillars();

  // 2. [프로그램] 4단계 학습시스템 & 3대 평가시스템 렌더링
  renderProgramSystems();

  // 3. [교재분석] 렌더링 & 탭 필터
  renderBookAnalyses('all');
  initBookFilter();

  // 4. [입시정보] 렌더링
  renderAdmissions();

  // 5. [교실모집] 3대 개설 모델, 7단계 절차, 지사 혜택 렌더링
  renderClassroomRecruit();

  // 6. [우리동네 교실] 렌더링 & 검색/필터
  renderClasses('all');
  initClassSearchAndFilter();

  // 7. 1:1 상담 신청 폼 및 네비게이션
  initConsultationForm();
  initNavigation();
}

/* ==========================================================================
   1. 브랜드 소개 기둥 (Brand Pillars)
   ========================================================================== */
function renderBrandPillars() {
  const container = document.getElementById('brand-pillars');
  if (!container || !SITE_DATA.brandIntro) return;

  container.innerHTML = SITE_DATA.brandIntro.pillars.map(p => `
    <div class="p-5 bg-orange-50/60 rounded-2xl border border-orange-100 flex items-start gap-3.5 hover:bg-orange-50 hover:border-orange-200 transition">
      <div class="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center text-lg shrink-0 shadow-sm">
        <i class="${p.icon}"></i>
      </div>
      <div>
        <h4 class="font-bold text-slate-900 text-sm mb-1">${p.title}</h4>
        <p class="text-xs text-slate-600 leading-relaxed">${p.desc}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   2. 프로그램 (학습시스템 & 평가시스템)
   ========================================================================== */
function renderProgramSystems() {
  // 4단계 학습 프로세스
  const processContainer = document.getElementById('learning-process-list');
  if (processContainer && SITE_DATA.programSystem.learningProcess) {
    processContainer.innerHTML = SITE_DATA.programSystem.learningProcess.map(proc => `
      <div class="edu-card p-6 bg-white flex flex-col justify-between border-t-4 border-t-orange-500">
        <div>
          <span class="text-2xl font-black text-orange-600 font-mono block mb-2">STEP ${proc.step}</span>
          <h4 class="text-base font-bold text-slate-900 mb-2">${proc.name}</h4>
          <p class="text-xs text-slate-600 leading-relaxed">${proc.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // 3대 과학적 평가시스템
  const evalContainer = document.getElementById('eval-system-list');
  if (evalContainer && SITE_DATA.programSystem.evalSystem) {
    evalContainer.innerHTML = SITE_DATA.programSystem.evalSystem.map(ev => `
      <div class="edu-card p-6 bg-white border-t-4 border-t-blue-600">
        <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-xl mb-4">
          <i class="${ev.icon}"></i>
        </div>
        <h4 class="text-base font-bold text-slate-900 mb-2">${ev.title}</h4>
        <p class="text-xs text-slate-600 leading-relaxed">${ev.desc}</p>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   3. 교재분석 섹션 (Book Analysis)
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
    <div class="edu-card overflow-hidden flex flex-col justify-between group bg-white">
      <div class="relative h-48 overflow-hidden">
        <img src="${item.coverImage}" alt="${item.title}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-lg shadow-sm">${item.levelLabel}</span>
        </div>
        <div class="absolute bottom-3 left-4 right-4 text-white">
          <span class="text-xs text-yellow-300 font-semibold mb-0.5 block">${item.featureTag}</span>
          <h4 class="font-bold text-lg leading-snug line-clamp-1">${item.title}</h4>
        </div>
      </div>
      
      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p class="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">${item.summary}</p>
          
          <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1.5">
            <div class="text-[11px] font-bold text-orange-700 flex items-center gap-1.5">
              <i class="fas fa-check-circle text-orange-500"></i> 핵심 교육 포인트
            </div>
            <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">${item.analysisPoints[0].title}</p>
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span class="text-[11px] text-slate-500"><i class="fas fa-user-graduate mr-1 text-orange-500"></i>대상: ${item.targetAge}</span>
          <button onclick="openBookModal('${item.id}')" class="px-3.5 py-1.5 text-xs font-bold text-orange-700 hover:text-white bg-orange-50 hover:bg-orange-600 rounded-lg transition flex items-center gap-1">
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
    <div class="space-y-6 text-slate-800">
      <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200">
        <div>
          <span class="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded">${item.levelLabel}</span>
          <span class="ml-2 text-xs text-orange-600 font-semibold">${item.featureTag}</span>
          <h2 class="text-2xl font-black text-slate-900 mt-2">${item.title}</h2>
        </div>
        <div class="text-right">
          <span class="text-xs text-slate-500 block">학습 권장 대상</span>
          <span class="text-sm font-bold text-slate-900">${item.targetAge}</span>
        </div>
      </div>

      <div class="bg-orange-50 p-4 rounded-xl border border-orange-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <strong class="text-slate-900">교재 개요:</strong> ${item.summary}
      </div>

      <div>
        <h4 class="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
          <i class="fas fa-microscope text-orange-600"></i> 교재 심층 교육 분석 포인트
        </h4>
        <div class="space-y-3">
          ${item.analysisPoints.map(pt => `
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 text-sm mb-1">${pt.title}</h5>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${pt.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <div class="text-xs font-bold text-amber-900 mb-1"><i class="fas fa-books mr-1"></i> 교재 패키지 구성</div>
          <p class="text-xs text-amber-800 leading-relaxed">${item.curriculumTable}</p>
        </div>
        <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
          <div class="text-xs font-bold text-emerald-900 mb-1"><i class="fas fa-lightbulb mr-1"></i> 고양파주지사 지도 TIP</div>
          <p class="text-xs text-emerald-800 leading-relaxed">${item.teacherTip}</p>
        </div>
      </div>

      <div class="pt-4 text-center border-t border-slate-200">
        <a href="#consultation" onclick="closeDetailModal(); setConsultationBook('${item.title}')" class="btn-primary-orange inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold shadow-md">
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
   4. 입시정보 섹션 (Admissions)
   ========================================================================== */
function renderAdmissions() {
  const container = document.getElementById('admission-list');
  if (!container) return;

  container.innerHTML = SITE_DATA.admissions.map(adm => `
    <div class="edu-card overflow-hidden flex flex-col justify-between group bg-white">
      <div class="relative h-44 overflow-hidden">
        <img src="${adm.thumbnail}" alt="${adm.title}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
        <div class="absolute top-3 left-3 flex gap-2">
          <span class="px-2.5 py-0.5 bg-red-600 text-white text-[10px] font-black rounded-full shadow-sm">${adm.badge}</span>
          <span class="px-2 py-0.5 bg-slate-900/70 text-white text-[10px] rounded-full backdrop-blur-md">${adm.category}</span>
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div class="flex items-center text-[11px] text-slate-400 gap-2 mb-1.5">
            <span><i class="far fa-calendar-alt mr-1"></i>${adm.date}</span>
          </div>
          <h3 class="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition cursor-pointer leading-snug line-clamp-2" onclick="openAdmissionModal('${adm.id}')">
            ${adm.title}
          </h3>
          <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed">
            ${adm.summary}
          </p>
        </div>

        <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span class="text-[11px] text-blue-700 font-semibold">입시 심층 분석</span>
          <button onclick="openAdmissionModal('${adm.id}')" class="text-xs font-bold text-slate-700 hover:text-orange-600 flex items-center gap-1 transition">
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
    <div class="space-y-6 text-slate-800">
      <div class="pb-4 border-b border-slate-200">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-0.5 bg-red-600 text-white text-xs font-bold rounded-full">${adm.badge}</span>
          <span class="px-3 py-0.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">${adm.category}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">${adm.title}</h2>
        <div class="flex items-center gap-4 text-xs text-slate-500 mt-3">
          <span><i class="far fa-calendar mr-1"></i>${adm.date}</span>
          <span><i class="far fa-user mr-1 text-orange-600"></i>${adm.author}</span>
        </div>
      </div>

      <div class="column-prose max-w-none text-slate-700 leading-relaxed text-sm sm:text-base">
        ${adm.content}
      </div>

      <div class="p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div>
          <h4 class="font-bold text-white text-base mb-1">우리 아이 2028 대입 문해력 진단이 필요하신가요?</h4>
          <p class="text-xs text-blue-200">고양·파주 가까운 교실에서 1:1 독서능력 무료 진단테스트를 받아보세요.</p>
        </div>
        <a href="#consultation" onclick="closeDetailModal()" class="btn-primary-orange px-6 py-3 rounded-xl text-xs font-bold whitespace-nowrap shadow-md">
          진단 상담 신청하기
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

/* ==========================================================================
   5. 교실모집 (Recruit & Franchise)
   ========================================================================== */
function renderClassroomRecruit() {
  const recruit = SITE_DATA.classroomRecruit;
  if (!recruit) return;

  // 3대 개설 모델
  const modelsContainer = document.getElementById('classroom-models');
  if (modelsContainer) {
    modelsContainer.innerHTML = recruit.models.map(m => `
      <div class="edu-card p-6 sm:p-8 bg-white flex flex-col justify-between border-t-4 border-t-orange-500">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 rounded bg-orange-100 text-orange-700 text-xs font-bold">${m.badge}</span>
            <div class="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-lg">
              <i class="${m.icon}"></i>
            </div>
          </div>
          <h3 class="text-xl font-black text-slate-900 mb-2">${m.type}</h3>
          <p class="text-xs text-orange-600 font-semibold mb-4">추천: ${m.target}</p>
          <ul class="space-y-2.5 mb-6">
            ${m.features.map(f => `
              <li class="text-xs text-slate-600 flex items-start gap-2">
                <i class="fas fa-check text-orange-500 mt-0.5"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <a href="#consultation" onclick="setConsultationRecruit('${m.type}')" class="py-3 text-center rounded-xl text-xs font-bold bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-800 transition block">
          ${m.type} 개설 상담신청
        </a>
      </div>
    `).join('');
  }

  // 7단계 개설 절차
  const procedureContainer = document.getElementById('recruit-procedure');
  if (procedureContainer) {
    procedureContainer.innerHTML = recruit.procedure.map(proc => `
      <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center flex flex-col justify-between">
        <span class="text-xs font-black text-orange-600 font-mono block mb-1">STEP ${proc.step}</span>
        <h5 class="text-xs font-bold text-slate-900 mb-1">${proc.title}</h5>
        <p class="text-[11px] text-slate-500 leading-snug">${proc.desc}</p>
      </div>
    `).join('');
  }

  // 지사 혜택
  const benefitsContainer = document.getElementById('recruit-benefits');
  if (benefitsContainer) {
    benefitsContainer.innerHTML = recruit.benefits.map(b => `
      <div class="edu-card p-6 bg-white">
        <div class="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl mb-4">
          <i class="${b.icon}"></i>
        </div>
        <h4 class="text-base font-bold text-slate-900 mb-2">${b.title}</h4>
        <p class="text-xs text-slate-600 leading-relaxed">${b.desc}</p>
      </div>
    `).join('');
  }
}

window.setConsultationRecruit = function(modelType) {
  const typeRadio = document.querySelector('input[name="consult-type"][value="franchise"]');
  if (typeRadio) typeRadio.checked = true;
  const note = document.getElementById('consult-notes');
  if (note) {
    note.value = `[${modelType}] 가맹/개설 상담을 희망합니다.`;
  }
};

/* ==========================================================================
   6. 우리동네 교실 찾기 (Find Class)
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
        <p class="text-slate-700 font-semibold">검색 조건에 맞는 교실이 없습니다.</p>
        <p class="text-xs text-slate-400 mt-1">고양파주지사로 문의하시면 인근 개설 예정 교실을 안내해 드립니다.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(cls => `
    <div class="edu-card p-6 bg-white flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100">${cls.regionLabel}</span>
          <span class="text-xs text-slate-500"><i class="fas fa-user-tie mr-1 text-slate-400"></i>${cls.director}</span>
        </div>
        <h4 class="text-lg font-bold text-slate-900 mb-2">${cls.name}</h4>
        <p class="text-xs text-slate-500 mb-4 flex items-start gap-1.5 leading-relaxed">
          <i class="fas fa-map-marker-alt text-red-500 mt-0.5"></i>
          <span>${cls.address}</span>
        </p>

        <div class="flex flex-wrap gap-1.5 mb-6">
          ${cls.tags.map(tag => `<span class="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-[11px] rounded font-medium">#${tag}</span>`).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
        <a href="tel:${cls.tel}" class="text-xs font-bold text-slate-700 hover:text-orange-600 flex items-center gap-1.5 transition">
          <i class="fas fa-phone-alt text-orange-500"></i>
          <span>${cls.tel}</span>
        </a>
        <button onclick="selectClassForConsultation('${cls.name}')" class="px-3.5 py-1.5 bg-orange-50 hover:bg-orange-600 text-orange-700 hover:text-white rounded-lg text-xs font-bold transition">
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
    note.value = `[관심 교재: ${bookTitle}]에 대해 1:1 상담받고 싶습니다.`;
  }
};

/* ==========================================================================
   7. 상담 신청 폼 & 네비게이션
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

    alert(`[상담 신청이 정상 접수되었습니다!]\n\n• 신청자: ${name} 님\n• 상담 유형: ${type === 'student' ? '학부모 자녀 학습상담' : '원장님 교실모집(가맹/창업) 문의'}\n• 지정 교실: ${targetClass || '고양파주지사 직속'}\n\n고양파주지사 담당자가 ${phone} 번호로 빠르게 안내드리겠습니다.`);
    form.reset();
  });
}

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
