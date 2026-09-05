// 해법독서논술 고양파주지사 (BACCAL) 메인 스크립트

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // 1. [해법독서논술] 4대 핵심 가치 렌더링
  renderBrandValues();

  // 2. [프로그램] 4단계 학습시스템 & 3대 평가시스템 렌더링
  renderProgramSystems();

  // 3. [교재연구 아카이브] 폴더 트리 렌더링
  renderBookArchive();

  // 4. [입시정보] 글 칼럼 & 영상 큐레이션 렌더링 및 탭 전환
  initAdmissionSection();

  // 5. [교실모집] 개설 모델, 7단계 절차, 지사 혜택 렌더링
  renderClassroomRecruit();

  // 6. [우리동네 교실] 18개 전 지역 교실 렌더링 & 필터/검색
  renderClasses('all');
  initClassFilterAndSearch();

  // 7. 1:1 상담 폼 및 네비게이션
  initConsultationForm();
  initNavigation();
}

/* ==========================================================================
   1. 브랜드 소개 4대 가치
   ========================================================================== */
function renderBrandValues() {
  const container = document.getElementById('brand-values');
  if (!container || !SITE_DATA.brandIntro) return;

  container.innerHTML = SITE_DATA.brandIntro.coreValues.map(v => `
    <div class="p-5 bg-sky-50/70 rounded-2xl border border-sky-100 flex items-start gap-3.5 hover:bg-sky-50 hover:border-sky-300 transition">
      <div class="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
        ${v.number}
      </div>
      <div>
        <h4 class="font-bold text-slate-900 text-sm mb-1">${v.title}</h4>
        <p class="text-xs text-slate-600 leading-relaxed">${v.desc}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   2. 프로그램 (학습시스템 & 평가시스템)
   ========================================================================== */
function renderProgramSystems() {
  // 4단계 학습 프로세스
  const processContainer = document.getElementById('learning-steps-list');
  if (processContainer && SITE_DATA.programSystem.learningSteps) {
    processContainer.innerHTML = SITE_DATA.programSystem.learningSteps.map(proc => `
      <div class="card-clean p-6 bg-white flex flex-col justify-between border-t-4 border-t-sky-500">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-black text-sky-600 font-mono">${proc.step}</span>
            <i class="${proc.icon} ${proc.color} text-lg"></i>
          </div>
          <h4 class="text-base font-bold text-slate-900 mb-2">${proc.title}</h4>
          <p class="text-xs text-slate-600 leading-relaxed">${proc.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // 3대 과학적 평가시스템
  const evalContainer = document.getElementById('evaluations-list');
  if (evalContainer && SITE_DATA.programSystem.evaluations) {
    evalContainer.innerHTML = SITE_DATA.programSystem.evaluations.map(ev => `
      <div class="card-clean p-6 bg-white border-t-4 border-t-blue-600">
        <span class="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-md border border-blue-100 mb-3 inline-block">${ev.badge}</span>
        <h4 class="text-base font-bold text-slate-900 mb-2">${ev.title}</h4>
        <p class="text-xs text-slate-600 leading-relaxed">${ev.desc}</p>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   3. 교재 연구실 아카이브 (Folder Tree)
   ========================================================================== */
function renderBookArchive() {
  const container = document.getElementById('book-archive-list');
  if (!container || !SITE_DATA.bookArchive) return;

  container.innerHTML = SITE_DATA.bookArchive.map(folder => `
    <div class="folder-card p-6 flex flex-col justify-between" onclick="openFolderModal('${folder.folderId}')">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-lg">${folder.gradeBadge}</span>
          <span class="text-xs text-slate-400 font-medium">${folder.bookCount}</span>
        </div>
        <h3 class="text-lg font-black text-slate-900 mb-2 hover:text-sky-600 transition flex items-center gap-2">
          <span>${folder.folderName}</span>
        </h3>
        <p class="text-xs text-sky-700 font-bold mb-3">연구 테마: ${folder.theme}</p>
        <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">${folder.summary}</p>
        
        <div class="bg-white/80 p-3 rounded-xl border border-sky-100 space-y-1 text-xs text-slate-600">
          <div class="font-bold text-sky-900 flex items-center gap-1.5 mb-1">
            <i class="fas fa-file-signature text-sky-600"></i> 핵심 연구 포인트
          </div>
          <p class="line-clamp-1">• ${folder.researchPoints[0]}</p>
        </div>
      </div>

      <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600">
        <span>연구 보고서 열람</span>
        <i class="fas fa-folder-open text-sm"></i>
      </div>
    </div>
  `).join('');
}

window.openFolderModal = function(folderId) {
  const folder = SITE_DATA.bookArchive.find(f => f.folderId === folderId);
  if (!folder) return;

  const modal = document.getElementById('detail-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="space-y-6 text-slate-800">
      <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200">
        <div>
          <span class="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-bold rounded">${folder.gradeBadge}</span>
          <span class="ml-2 text-xs text-sky-600 font-semibold">${folder.theme}</span>
          <h2 class="text-2xl font-black text-slate-900 mt-2">${folder.folderName}</h2>
        </div>
        <div class="text-right">
          <span class="text-xs text-slate-400 block">교재 볼륨</span>
          <span class="text-sm font-bold text-slate-800">${folder.bookCount}</span>
        </div>
      </div>

      <div class="bg-sky-50 p-4 rounded-xl border border-sky-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <strong class="text-slate-900">교재 연구 개요:</strong> ${folder.summary}
      </div>

      <div>
        <h4 class="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
          <i class="fas fa-microscope text-sky-600"></i> 세부 교재 연구 및 지도 포인트
        </h4>
        <div class="space-y-3">
          ${folder.researchPoints.map((pt, idx) => `
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">${idx + 1}</span>
              <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${pt}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
        <div class="text-xs font-bold text-amber-900 mb-1"><i class="fas fa-boxes mr-1"></i> 월간 패키지 세부 구성</div>
        <p class="text-xs text-amber-800 leading-relaxed">${folder.curriculumDetails}</p>
      </div>

      <div class="pt-4 text-center border-t border-slate-200">
        <a href="#consultation" onclick="closeDetailModal(); setConsultationFolder('${folder.folderName}')" class="btn-brand-orange inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold shadow-md">
          <i class="fas fa-edit"></i>
          <span>이 단계 맞춤 학습 상담 신청하기</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

window.setConsultationFolder = function(name) {
  const note = document.getElementById('consult-notes');
  if (note) {
    note.value = `[관심 연구 과정: ${name}]에 대해 상담받고 싶습니다.`;
  }
};

/* ==========================================================================
   4. 입시정보 (글 칼럼 & 영상 큐레이션)
   ========================================================================== */
function initAdmissionSection() {
  const articlesContainer = document.getElementById('admission-articles-view');
  const videosContainer = document.getElementById('admission-videos-view');
  const btnArticle = document.getElementById('tab-btn-article');
  const btnVideo = document.getElementById('tab-btn-video');

  // 1) 글 칼럼 렌더링
  if (articlesContainer && SITE_DATA.admissionData.articles) {
    articlesContainer.innerHTML = SITE_DATA.admissionData.articles.map(art => `
      <div class="card-clean overflow-hidden flex flex-col justify-between group bg-white">
        <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <div class="flex items-center justify-between text-[11px] text-slate-400 mb-2">
              <span class="px-2.5 py-0.5 bg-red-600 text-white font-bold rounded-full text-[10px]">${art.badge}</span>
              <span><i class="far fa-clock mr-1"></i>${art.readTime} 읽기</span>
            </div>
            <h3 class="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition cursor-pointer leading-snug line-clamp-2" onclick="openArticleModal('${art.id}')">
              ${art.title}
            </h3>
            <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed">
              ${art.summary}
            </p>
          </div>

          <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span class="text-[11px] text-slate-500">${art.date}</span>
            <button onclick="openArticleModal('${art.id}')" class="text-xs font-bold text-blue-700 hover:text-orange-600 flex items-center gap-1 transition">
              <span>칼럼 전문</span>
              <i class="fas fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 2) 영상 렌더링
  if (videosContainer && SITE_DATA.admissionData.videos) {
    videosContainer.innerHTML = SITE_DATA.admissionData.videos.map(vid => `
      <div class="card-clean overflow-hidden flex flex-col justify-between group bg-white">
        <div class="relative h-44 overflow-hidden">
          <img src="${vid.thumbnail}" alt="${vid.title}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition">
            <a href="${vid.youtubeUrl}" target="_blank" class="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl shadow-lg hover:scale-110 transition">
              <i class="fas fa-play ml-1"></i>
            </a>
          </div>
          <span class="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-white text-[10px] font-bold rounded">${vid.duration}</span>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <span class="text-[11px] text-sky-700 font-bold block mb-1">${vid.channel}</span>
            <h4 class="text-sm font-bold text-slate-900 line-clamp-2 leading-snug mb-1.5">${vid.title}</h4>
            <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed">${vid.desc}</p>
          </div>
          <a href="${vid.youtubeUrl}" target="_blank" class="text-xs font-bold text-red-600 hover:underline flex items-center gap-1">
            <span>유튜브에서 시청하기</span>
            <i class="fas fa-external-link-alt text-[10px]"></i>
          </a>
        </div>
      </div>
    `).join('');
  }

  // 탭 전환 핸들러
  if (btnArticle && btnVideo) {
    btnArticle.addEventListener('click', () => {
      btnArticle.className = 'px-4 py-2 rounded-lg text-xs font-bold bg-blue-600 text-white transition flex items-center gap-1.5 shadow-sm';
      btnVideo.className = 'px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 transition flex items-center gap-1.5';
      articlesContainer.classList.remove('hidden');
      videosContainer.classList.add('hidden');
    });

    btnVideo.addEventListener('click', () => {
      btnVideo.className = 'px-4 py-2 rounded-lg text-xs font-bold bg-red-600 text-white transition flex items-center gap-1.5 shadow-sm';
      btnArticle.className = 'px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 transition flex items-center gap-1.5';
      videosContainer.classList.remove('hidden');
      articlesContainer.classList.add('hidden');
    });
  }
}

window.openArticleModal = function(id) {
  const art = SITE_DATA.admissionData.articles.find(a => a.id === id);
  if (!art) return;

  const modal = document.getElementById('detail-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="space-y-6 text-slate-800">
      <div class="pb-4 border-b border-slate-200">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-0.5 bg-red-600 text-white text-xs font-bold rounded-full">${art.badge}</span>
          <span class="px-3 py-0.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">${art.category}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">${art.title}</h2>
        <div class="flex items-center gap-4 text-xs text-slate-500 mt-3">
          <span><i class="far fa-calendar mr-1"></i>${art.date}</span>
          <span><i class="far fa-user mr-1 text-blue-600"></i>${art.author}</span>
        </div>
      </div>

      <div class="prose-column max-w-none text-slate-700 leading-relaxed text-sm sm:text-base">
        ${art.content}
      </div>

      <div class="p-6 rounded-2xl bg-gradient-to-r from-sky-900 to-blue-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div>
          <h4 class="font-bold text-white text-base mb-1">우리 아이 2028 대입 문해력 진단이 필요하신가요?</h4>
          <p class="text-xs text-sky-200">고양·파주 가까운 교실에서 1:1 독서능력 무료 진단테스트를 받아보세요.</p>
        </div>
        <a href="#consultation" onclick="closeDetailModal()" class="btn-brand-orange px-6 py-3 rounded-xl text-xs font-bold whitespace-nowrap shadow-md">
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
      <div class="card-clean p-6 sm:p-8 bg-white flex flex-col justify-between border-t-4 border-t-sky-500">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 rounded bg-sky-100 text-sky-800 text-xs font-bold">${m.badge}</span>
            <div class="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-lg">
              <i class="${m.icon}"></i>
            </div>
          </div>
          <h3 class="text-xl font-black text-slate-900 mb-2">${m.type}</h3>
          <p class="text-xs text-sky-700 font-semibold mb-4">추천: ${m.target}</p>
          <ul class="space-y-2.5 mb-6">
            ${m.features.map(f => `
              <li class="text-xs text-slate-600 flex items-start gap-2">
                <i class="fas fa-check text-sky-500 mt-0.5"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <a href="#consultation" onclick="setConsultationRecruit('${m.type}')" class="py-3 text-center rounded-xl text-xs font-bold bg-slate-100 hover:bg-sky-600 hover:text-white text-slate-800 transition block">
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
        <span class="text-xs font-black text-sky-600 font-mono block mb-1">STEP ${proc.step}</span>
        <h5 class="text-xs font-bold text-slate-900 mb-1">${proc.title}</h5>
        <p class="text-[11px] text-slate-500 leading-snug">${proc.desc}</p>
      </div>
    `).join('');
  }

  // 지사 혜택
  const benefitsContainer = document.getElementById('recruit-benefits');
  if (benefitsContainer) {
    benefitsContainer.innerHTML = recruit.benefits.map(b => `
      <div class="card-clean p-6 bg-white">
        <div class="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-xl mb-4">
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
   6. 우리동네 교실 (고양·파주 전 지역 18개 교실 렌더링)
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
    <div class="card-clean overflow-hidden bg-white flex flex-col justify-between group">
      <div class="relative h-44 overflow-hidden">
        <img src="${cls.image}" alt="${cls.name}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-sky-600 text-white shadow-sm">${cls.regionLabel}</span>
        <div class="absolute bottom-3 left-3 right-3 text-white">
          <h4 class="text-base font-black leading-snug drop-shadow-sm">${cls.name}</h4>
          <span class="text-xs text-sky-200"><i class="fas fa-user-tie mr-1"></i>${cls.director}</span>
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p class="text-xs text-slate-600 mb-3 flex items-start gap-1.5 leading-relaxed">
            <i class="fas fa-map-marker-alt text-red-500 mt-0.5 shrink-0"></i>
            <span>${cls.address}</span>
          </p>

          <div class="flex flex-wrap gap-1 mb-2">
            ${cls.tags.map(tag => `<span class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] rounded font-medium">#${tag}</span>`).join('')}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <a href="${cls.blogUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white rounded-lg text-xs font-bold transition flex items-center gap-1">
            <i class="fab fa-neos"></i>
            <span>블로그</span>
          </a>
          <button onclick="selectClassForConsultation('${cls.name}')" class="px-3.5 py-1.5 bg-sky-50 hover:bg-sky-600 text-sky-700 hover:text-white rounded-lg text-xs font-bold transition">
            상담예약
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function initClassFilterAndSearch() {
  const tabs = document.querySelectorAll('.pill-tab');
  const searchInput = document.getElementById('class-search');
  let currentRegion = 'all';

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentRegion = tab.getAttribute('data-region');
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
