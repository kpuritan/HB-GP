// 해법독서논술 고양파주지사 (BACCAL) - Full SPA Controller

let currentBookCategory = 'pre';
let currentSpecialSubCat = 'history';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // 1. [해법독서논술] 4대 핵심 가치 렌더링
  renderBrandValues();

  // 2. [프로그램] 학습시스템, 평가시스템, 교재소개 렌더링
  renderLearningSystem();
  renderEvalSystem();
  renderBookIntro('pre');

  // 3. [교재연구 아카이브] 폴더 트리 렌더링
  renderBookArchive();

  // 4. [입시정보] 글 칼럼 & 영상 큐레이션 렌더링 및 탭 전환
  initAdmissionSection();

  // 5. [교실모집] 개설 모델, 7단계 절차, 지사 혜택 렌더링
  renderClassroomRecruit();

  // 6. [고양파주 교실] 18개 전 지역 교실 렌더링 & 필터/검색
  renderClasses('all');
  initClassFilter();

  // 7. 1:1 상담 폼 및 네비게이션
  initConsultationForm();
  initNavigation();
}

/* ==========================================================================
   화면 탭 전환 시스템 (스크롤 없이 상단 폴더로 즉시 전환)
   ========================================================================== */
window.switchView = function(viewName) {
  // 1. 모든 view-panel 숨기기
  const panels = document.querySelectorAll('.view-panel');
  panels.forEach(p => p.classList.remove('active'));

  // 2. 대상 패널 활성화
  const targetPanel = document.getElementById(`view-${viewName}`);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  // 3. 상단 네비게이션 탭 버튼 active 상태 동기화
  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  tabButtons.forEach(btn => {
    if (btn.getAttribute('data-target-view') === viewName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 4. 모바일 메뉴 열려있으면 닫기
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.add('hidden');
  }

  // 화면 맨 위로 리셋
  window.scrollTo({ top: 0, behavior: 'instant' });
};

/* ==========================================================================
   프로그램 서브 탭 전환 (학습시스템 / 평가시스템 / 교재소개)
   ========================================================================== */
window.switchProgramSubTab = function(subTabName) {
  const tabs = ['learn', 'eval', 'bookintro'];
  tabs.forEach(t => {
    const btn = document.getElementById(`subtab-btn-${t}`);
    const panel = document.getElementById(`program-subpanel-${t}`);
    if (btn && panel) {
      if (t === subTabName) {
        btn.classList.add('active');
        panel.classList.remove('hidden');
      } else {
        btn.classList.remove('active');
        panel.classList.add('hidden');
      }
    }
  });
};

/* ==========================================================================
   1. 브랜드 소개 4대 가치
   ========================================================================== */
function renderBrandValues() {
  const container = document.getElementById('brand-values');
  if (!container || !SITE_DATA.brandIntro) return;

  container.innerHTML = SITE_DATA.brandIntro.coreValues.map(v => `
    <div class="p-4 bg-sky-50/70 rounded-2xl border border-sky-100 flex items-start gap-3 hover:bg-sky-50 hover:border-sky-300 transition">
      <div class="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-sm">
        ${v.number}
      </div>
      <div>
        <h4 class="font-bold text-slate-900 text-sm mb-0.5">${v.title}</h4>
        <p class="text-xs text-slate-600 leading-relaxed">${v.desc}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   2-1. 학습시스템 렌더링 (2번째 사진 100% 동일 구현)
   ========================================================================== */
function renderLearningSystem() {
  const container = document.getElementById('learning-system-steps');
  if (!container || !SITE_DATA.programs.learningSystem) return;

  const steps = SITE_DATA.programs.learningSystem.steps;

  container.innerHTML = steps.map((step) => {
    return `
      <div class="flex flex-col md:flex-row items-stretch gap-3.5 group">
        <!-- 좌측 스텝 뱃지 박스 -->
        <div class="learn-step-badge-box ${step.iconBg}">
          <span class="step-tag text-slate-800">${step.stepNumber}</span>
          <div class="text-3xl mb-1.5 opacity-95">
            <i class="${step.icon}"></i>
          </div>
          <span class="font-black text-lg text-white">${step.name}</span>
        </div>

        <!-- 우측 프로세스 플로우 박스 -->
        <div class="learn-step-content-box ${step.cardBg}">
          ${step.items.map((item, idx) => `
            <div class="learn-sub-item">
              <h5 class="font-extrabold text-slate-900 text-sm sm:text-base mb-1">${item.title}</h5>
              <p class="text-xs text-slate-600">${item.desc}</p>
            </div>
            ${idx < step.items.length - 1 ? `
              <div class="learn-arrow-icon ${step.iconBg} hidden sm:flex">
                <i class="fas fa-chevron-right"></i>
              </div>
            ` : ''}
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   2-2. 평가시스템 렌더링 (3번째 사진 100% 동일 구현)
   ========================================================================== */
function renderEvalSystem() {
  const container = document.getElementById('eval-system-cards');
  if (!container || !SITE_DATA.programs.evalSystem) return;

  const cards = SITE_DATA.programs.evalSystem.cards;

  container.innerHTML = cards.map(c => `
    <div class="eval-card-box bg-gradient-to-b ${c.gradient}">
      <div class="w-full">
        <span class="px-3 py-1 rounded-full text-xs font-black bg-white/20 backdrop-blur-md mb-4 inline-block">${c.badge}</span>
        <h4 class="text-2xl font-black text-white mb-6">${c.title}</h4>
      </div>

      <!-- 일러스트 영역 -->
      <div class="my-6 p-6 rounded-3xl bg-white/10 backdrop-blur-md w-full flex items-center justify-center">
        ${c.illustrationType === 'bubbles' ? `
          <div class="grid grid-cols-2 gap-2 text-xs font-black">
            <span class="px-3.5 py-2 rounded-xl bg-cyan-400 text-slate-950 shadow-sm">어휘</span>
            <span class="px-3.5 py-2 rounded-xl bg-blue-400 text-white shadow-sm">문법</span>
            <span class="px-3.5 py-2 rounded-xl bg-indigo-400 text-white shadow-sm">읽기</span>
            <span class="px-3.5 py-2 rounded-xl bg-purple-400 text-white shadow-sm">쓰기</span>
          </div>
        ` : `
          <div class="text-5xl text-white/90">
            <i class="${c.icon}"></i>
          </div>
        `}
      </div>

      <!-- 하단 설명 -->
      <div class="w-full text-center">
        <p class="text-xs text-white/80">${c.targetText}</p>
        <p class="text-sm font-bold text-white mt-1">${c.desc}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   2-3. 교재소개 렌더링 (공식 본사 사이트와 동일)
   ========================================================================== */
window.switchBookCategory = function(catId) {
  currentBookCategory = catId;

  // 버튼 스타일 동기화
  const buttons = document.querySelectorAll('.book-cat-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-cat') === catId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const specialNav = document.getElementById('special-subcat-nav');
  if (catId === 'special') {
    if (specialNav) specialNav.classList.remove('hidden');
    renderBookIntro('special', currentSpecialSubCat);
  } else {
    if (specialNav) specialNav.classList.add('hidden');
    renderBookIntro(catId);
  }
};

window.switchSpecialSubCat = function(subCatId) {
  currentSpecialSubCat = subCatId;

  const buttons = document.querySelectorAll('.book-subcat-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-subcat') === subCatId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderBookIntro('special', subCatId);
};

function renderBookIntro(catId, subCatId = 'history') {
  const container = document.getElementById('book-intro-list');
  if (!container || !SITE_DATA.programs.bookIntro) return;

  const category = SITE_DATA.programs.bookIntro.categories.find(c => c.id === catId);
  if (!category) return;

  let books = [];
  if (catId === 'special') {
    const subCat = category.subCategories.find(s => s.subId === subCatId);
    books = subCat ? subCat.books : [];
  } else {
    books = category.books;
  }

  container.innerHTML = books.map(b => `
    <div class="book-box-card flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-xs font-extrabold text-sky-600">${b.tag}</span>
          <button onclick="openBookModal('${b.title}', '${b.target}', '${b.composition}', '${encodeURIComponent(JSON.stringify(b.features))}')" class="px-3 py-1 rounded-full bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white transition text-xs font-bold border border-sky-200 flex items-center gap-1">
            <i class="fas fa-search-plus text-[10px]"></i> 상세보기
          </button>
        </div>

        <h3 class="text-xl font-black text-slate-900 mb-4">${b.title}</h3>

        <div class="space-y-3 text-xs mb-4">
          <div class="flex items-start gap-2">
            <span class="px-2 py-0.5 rounded font-bold color-target shrink-0">학습 대상</span>
            <span class="text-slate-700 font-semibold">${b.target}</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="px-2 py-0.5 rounded font-bold color-bundle shrink-0">교재 구성</span>
            <span class="text-slate-700 font-semibold">${b.composition}</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="px-2 py-0.5 rounded font-bold color-point shrink-0">교재 특징</span>
            <div class="text-slate-600 space-y-1">
              ${b.features.map(f => `<p>• ${f}</p>`).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span class="text-slate-400 font-medium">천재교과서 바칼로레아</span>
        <button onclick="switchView('consultation'); setConsultationFolder('${b.title}');" class="font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
          <span>교재 상담 신청</span>
          <i class="fas fa-chevron-right text-[9px]"></i>
        </button>
      </div>
    </div>
  `).join('');
}

window.openBookModal = function(title, target, composition, featuresJson) {
  const features = JSON.parse(decodeURIComponent(featuresJson));
  const modal = document.getElementById('detail-modal');
  const modalBody = document.getElementById('modal-body');
  const modalTag = document.getElementById('modal-tag');
  if (!modal || !modalBody) return;

  if (modalTag) modalTag.textContent = "공식 교재 상세 안내";

  modalBody.innerHTML = `
    <div class="space-y-4 text-slate-800">
      <div class="pb-3 border-b border-slate-200">
        <span class="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 font-bold text-xs">${target}</span>
        <h2 class="text-2xl font-black text-slate-900 mt-2">${title}</h2>
      </div>

      <div class="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs">
        <strong class="text-amber-900 block mb-1"><i class="fas fa-box-open mr-1"></i> 교재 패키지 세부 구성</strong>
        <p class="text-amber-800 font-semibold">${composition}</p>
      </div>

      <div>
        <h4 class="text-sm font-bold text-slate-900 mb-2.5 flex items-center gap-1.5">
          <i class="fas fa-check-circle text-emerald-600"></i> 교재 핵심 특장점 & 지도 방향
        </h4>
        <div class="space-y-2">
          ${features.map((f, i) => `
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-sky-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">${i + 1}</span>
              <p class="text-xs text-slate-700 leading-relaxed font-medium">${f}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="pt-4 text-center border-t border-slate-200">
        <button onclick="closeDetailModal(); switchView('consultation'); setConsultationFolder('${title}')" class="btn-orange inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-bold shadow-sm">
          <i class="fas fa-edit"></i>
          <span>${title} 1:1 맞춤 학습 문의</span>
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
};

/* ==========================================================================
   3. 교재 연구실 아카이브 (Folder Tree)
   ========================================================================== */
function renderBookArchive() {
  const container = document.getElementById('book-archive-list');
  if (!container || !SITE_DATA.bookArchive) return;

  container.innerHTML = SITE_DATA.bookArchive.map(folder => `
    <div class="folder-item flex flex-col justify-between" onclick="openFolderModal('${folder.folderId}')">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="px-2.5 py-0.5 bg-sky-100 text-sky-800 text-[11px] font-bold rounded-md">${folder.gradeBadge}</span>
          <span class="text-[11px] text-slate-400 font-medium">${folder.bookCount}</span>
        </div>
        <h3 class="text-base font-black text-slate-900 mb-1.5 hover:text-sky-600 transition flex items-center gap-1.5">
          <span>${folder.folderName}</span>
        </h3>
        <p class="text-xs text-sky-700 font-bold mb-2">테마: ${folder.theme}</p>
        <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">${folder.summary}</p>
      </div>

      <div class="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600">
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
  const modalTag = document.getElementById('modal-tag');
  if (!modal || !modalBody) return;

  if (modalTag) modalTag.textContent = "교재 연구 보고서";

  modalBody.innerHTML = `
    <div class="space-y-5 text-slate-800">
      <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
        <div>
          <span class="px-2.5 py-0.5 bg-sky-100 text-sky-700 text-xs font-bold rounded">${folder.gradeBadge}</span>
          <span class="ml-2 text-xs text-sky-600 font-semibold">${folder.theme}</span>
          <h2 class="text-xl font-black text-slate-900 mt-1">${folder.folderName}</h2>
        </div>
        <div class="text-right">
          <span class="text-xs text-slate-400 block">교재 볼륨</span>
          <span class="text-xs font-bold text-slate-800">${folder.bookCount}</span>
        </div>
      </div>

      <div class="bg-sky-50 p-3.5 rounded-xl border border-sky-100 text-xs text-slate-700 leading-relaxed">
        <strong class="text-slate-900">교재 연구 개요:</strong> ${folder.summary}
      </div>

      <div>
        <h4 class="text-sm font-bold text-slate-900 mb-2.5 flex items-center gap-1.5">
          <i class="fas fa-microscope text-sky-600"></i> 세부 교재 연구 및 지도 포인트
        </h4>
        <div class="space-y-2">
          ${folder.researchPoints.map((pt, idx) => `
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-sky-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">${idx + 1}</span>
              <p class="text-xs text-slate-700 leading-relaxed">${pt}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs">
        <strong class="text-amber-900 block mb-1"><i class="fas fa-boxes mr-1"></i> 월간 패키지 세부 구성:</strong>
        <p class="text-amber-800 leading-relaxed">${folder.curriculumDetails}</p>
      </div>

      <div class="pt-3 text-center border-t border-slate-200">
        <button onclick="closeDetailModal(); switchView('consultation'); setConsultationFolder('${folder.folderName}')" class="btn-orange inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-bold shadow-sm">
          <i class="fas fa-edit"></i>
          <span>이 단계 맞춤 학습 상담 신청하기</span>
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
};

window.setConsultationFolder = function(name) {
  const note = document.getElementById('consult-notes');
  if (note) {
    note.value = `[관심 과정: ${name}]에 대해 상담받고 싶습니다.`;
  }
};

/* ==========================================================================
   4. 입시정보 (글 칼럼 & 영상 큐레이션 - 4/8/12개 선택 보기)
   ========================================================================== */
let currentAdmissionTab = 'article';
let currentAdmissionPageSize = 4;

function initAdmissionSection() {
  const btnArticle = document.getElementById('tab-btn-article');
  const btnVideo = document.getElementById('tab-btn-video');
  const articlesContainer = document.getElementById('admission-articles-view');
  const videosContainer = document.getElementById('admission-videos-view');

  renderAdmissionArticles();
  renderAdmissionVideos();

  if (btnArticle && btnVideo) {
    btnArticle.addEventListener('click', () => {
      currentAdmissionTab = 'article';
      btnArticle.classList.add('active');
      btnVideo.classList.remove('active');
      if (articlesContainer) articlesContainer.classList.remove('hidden');
      if (videosContainer) videosContainer.classList.add('hidden');
    });

    btnVideo.addEventListener('click', () => {
      currentAdmissionTab = 'video';
      btnVideo.classList.add('active');
      btnArticle.classList.remove('active');
      if (videosContainer) videosContainer.classList.remove('hidden');
      if (articlesContainer) articlesContainer.classList.add('hidden');
    });
  }
}

window.setAdmissionPageSize = function(size) {
  currentAdmissionPageSize = size;

  // 버튼 스타일 동기화
  const btns = document.querySelectorAll('.page-size-btn');
  btns.forEach(b => {
    if (parseInt(b.getAttribute('data-size')) === size) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  renderAdmissionArticles();
  renderAdmissionVideos();
};

function renderAdmissionArticles() {
  const container = document.getElementById('admission-articles-view');
  if (!container || !SITE_DATA.admissionData.articles) return;

  const items = SITE_DATA.admissionData.articles.slice(0, currentAdmissionPageSize);

  container.innerHTML = items.map(art => `
    <div class="clean-card overflow-hidden flex flex-col justify-between group bg-white hover:border-blue-300">
      <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div class="flex items-center justify-between text-[10px] text-slate-400 mb-2">
            <span class="px-2.5 py-0.5 bg-blue-600 text-white font-bold rounded-full">${art.badge}</span>
            <span><i class="far fa-clock mr-1"></i>${art.readTime}</span>
          </div>
          <h3 class="text-sm font-black text-slate-900 mb-2 group-hover:text-blue-700 transition cursor-pointer leading-snug line-clamp-2" onclick="openArticleModal('${art.id}')">
            ${art.title}
          </h3>
          <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed">
            ${art.summary}
          </p>
        </div>

        <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span class="text-[10px] text-slate-400">${art.date}</span>
          <button onclick="openArticleModal('${art.id}')" class="text-xs font-extrabold text-blue-700 hover:text-orange-600 flex items-center gap-1 transition">
            <span>전문 읽기</span>
            <i class="fas fa-arrow-right text-[9px]"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderAdmissionVideos() {
  const container = document.getElementById('admission-videos-view');
  if (!container || !SITE_DATA.admissionData.videos) return;

  const items = SITE_DATA.admissionData.videos.slice(0, currentAdmissionPageSize);

  container.innerHTML = items.map(vid => `
    <div class="clean-card overflow-hidden flex flex-col justify-between bg-white group hover:border-red-300">
      <a href="${vid.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="relative block aspect-video overflow-hidden bg-slate-900">
        <img src="${vid.thumbnail}" alt="${vid.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3 justify-between">
          <span class="px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded">${vid.tag}</span>
          <span class="text-[10px] font-mono text-white bg-black/60 px-1.5 py-0.5 rounded">${vid.duration}</span>
        </div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-10 h-10 rounded-full bg-red-600/90 text-white flex items-center justify-center text-sm shadow-lg group-hover:scale-110 transition">
            <i class="fas fa-play ml-0.5"></i>
          </div>
        </div>
      </a>
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-[10px] font-bold text-sky-600 block mb-1">${vid.channel}</span>
          <h4 class="text-xs font-bold text-slate-900 leading-snug line-clamp-2 mb-1.5">${vid.title}</h4>
          <p class="text-[11px] text-slate-500 line-clamp-2">${vid.desc}</p>
        </div>
        <div class="mt-3 pt-2 border-t border-slate-100 text-right">
          <a href="${vid.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1">
            <span>유튜브 무료 시청</span>
            <i class="fas fa-external-link-alt text-[9px]"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

window.openArticleModal = function(articleId) {
  const art = SITE_DATA.admissionData.articles.find(a => a.id === articleId);
  if (!art) return;

  const modal = document.getElementById('detail-modal');
  const modalBody = document.getElementById('modal-body');
  const modalTag = document.getElementById('modal-tag');
  if (!modal || !modalBody) return;

  if (modalTag) modalTag.textContent = "입시 심층 분석 칼럼";

  modalBody.innerHTML = `
    <div class="space-y-4">
      <div class="pb-3 border-b border-slate-200">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">${art.category}</span>
          <span class="text-xs text-slate-400">${art.date} · ${art.author}</span>
        </div>
        <h2 class="text-xl font-black text-slate-900 leading-snug">${art.title}</h2>
      </div>

      <div class="prose-article">
        ${art.content}
      </div>

      <div class="pt-4 border-t border-slate-200 flex items-center justify-between">
        <span class="text-xs text-slate-500 font-semibold">해법독서논술 고양파주지사</span>
        <button onclick="closeDetailModal(); switchView('consultation');" class="btn-orange px-5 py-2 rounded-xl text-xs font-bold shadow-sm">
          입시 상담 신청
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
};

/* ==========================================================================
   5. 교실모집 (가맹/창업)
   ========================================================================== */
function renderClassroomRecruit() {
  // 3대 창업 모델
  const modelsContainer = document.getElementById('classroom-models');
  if (modelsContainer && SITE_DATA.classroomRecruit) {
    modelsContainer.innerHTML = SITE_DATA.classroomRecruit.models.map(m => `
      <div class="clean-card p-6 bg-white flex flex-col justify-between border-t-4 border-t-orange-500">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="px-2.5 py-0.5 bg-orange-100 text-orange-800 text-[11px] font-bold rounded-md">${m.badge}</span>
            <i class="${m.icon} text-orange-500 text-lg"></i>
          </div>
          <h3 class="text-lg font-black text-slate-900 mb-1">${m.type}</h3>
          <p class="text-xs text-slate-500 font-bold mb-4">추천 대상: ${m.target}</p>
          <ul class="space-y-2 text-xs text-slate-600 mb-6">
            ${m.features.map(f => `
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-orange-500 mt-0.5 text-[10px]"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <button onclick="switchView('consultation'); setConsultationType('franchise', '${m.type}');" class="w-full py-2.5 rounded-xl bg-orange-50 text-orange-700 hover:bg-orange-600 hover:text-white font-bold text-xs transition text-center">
          ${m.type} 개설 상담 신청
        </button>
      </div>
    `).join('');
  }

  // 7단계 개설 절차
  const procContainer = document.getElementById('recruit-procedure');
  if (procContainer && SITE_DATA.classroomRecruit) {
    procContainer.innerHTML = SITE_DATA.classroomRecruit.procedure.map(p => `
      <div class="p-3 bg-white rounded-xl border border-slate-200 text-center flex flex-col justify-between">
        <div>
          <span class="text-xs font-black text-orange-600 font-mono block mb-1">${p.step}</span>
          <h4 class="text-xs font-bold text-slate-900 mb-1 leading-snug">${p.title}</h4>
        </div>
        <p class="text-[10px] text-slate-500 leading-tight mt-1">${p.desc}</p>
      </div>
    `).join('');
  }
}

window.setConsultationType = function(type, subtype) {
  const select = document.getElementById('consult-type');
  if (select) select.value = type;
  const note = document.getElementById('consult-notes');
  if (note) note.value = `[${subtype}] 모델 개설(가맹) 상담을 희망합니다.`;
};

/* ==========================================================================
   6. 고양파주 교실 (18개 지점 - 실제 블로그 및 지도 링크 & 실제 사진)
   ========================================================================== */
function renderClasses(regionFilter = 'all', searchTerm = '') {
  const container = document.getElementById('classes-grid');
  if (!container || !SITE_DATA.classes) return;

  let filtered = SITE_DATA.classes;

  if (regionFilter !== 'all') {
    filtered = filtered.filter(c => c.region === regionFilter);
  }

  if (searchTerm.trim() !== '') {
    const term = searchTerm.trim().toLowerCase();
    filtered = filtered.filter(c => 
      c.name.toLowerCase().includes(term) ||
      c.address.toLowerCase().includes(term) ||
      c.tags.some(t => t.toLowerCase().includes(term))
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-400">
        <i class="fas fa-search text-3xl mb-3 block"></i>
        <p class="text-sm font-bold">검색 조건에 일치하는 교실이 없습니다.</p>
        <p class="text-xs mt-1">지역 필터를 변경하시거나 검색어를 확인해 주세요.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(cls => `
    <div class="clean-card overflow-hidden flex flex-col justify-between bg-white group">
      <!-- 사진 영역 -->
      <div class="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img src="${cls.image}" alt="${cls.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div class="absolute top-3 left-3 flex items-center gap-1.5">
          <span class="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white font-bold text-[11px] shadow-sm">
            ${cls.regionLabel}
          </span>
        </div>
      </div>

      <!-- 내용 영역 -->
      <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <h3 class="text-base font-extrabold text-slate-900 group-hover:text-emerald-700 transition">${cls.name}</h3>
          </div>
          
          <p class="text-xs text-slate-500 font-semibold mb-2 flex items-center gap-1.5">
            <i class="fas fa-user-circle text-emerald-600"></i> ${cls.director}
          </p>

          <p class="text-xs text-slate-600 flex items-start gap-1.5 mb-2 leading-relaxed">
            <i class="fas fa-map-marker-alt text-slate-400 mt-0.5 shrink-0"></i>
            <span>${cls.address}</span>
          </p>

          <!-- 태그 -->
          <div class="flex flex-wrap gap-1 mt-2">
            ${cls.tags.map(t => `<span class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] rounded-md font-medium">#${t}</span>`).join('')}
          </div>
        </div>

        <!-- 하단 바로가기 버튼들 (블로그, 지도, 전화) -->
        <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-1.5">
          <a href="${cls.blogUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 py-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition text-center font-bold text-xs flex items-center justify-center gap-1">
            <i class="fab fa-neos text-[10px]"></i>
            <span>블로그 보기</span>
          </a>
          <a href="${cls.mapUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-700 hover:text-white transition text-center font-bold text-xs flex items-center justify-center gap-1">
            <i class="fas fa-map text-[10px]"></i>
            <span>지도/위치</span>
          </a>
          <a href="tel:${cls.tel}" class="w-9 h-9 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white transition flex items-center justify-center text-xs shrink-0" title="전화걸기">
            <i class="fas fa-phone"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function initClassFilter() {
  const filterButtons = document.querySelectorAll('#region-filter-bar .region-tab');
  const searchInput = document.getElementById('class-search-input');

  let currentRegion = 'all';

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentRegion = btn.getAttribute('data-region');
      renderClasses(currentRegion, searchInput ? searchInput.value : '');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderClasses(currentRegion, e.target.value);
    });
  }
}

/* ==========================================================================
   7. 1:1 상담 예약 폼 & 공통 기능
   ========================================================================== */
function initConsultationForm() {
  const form = document.getElementById('consultation-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('consult-name').value;
    const phone = document.getElementById('consult-phone').value;
    const type = document.getElementById('consult-type').value;

    alert(`[상담 신청 접수 완료]\n\n신청자: ${name}님\n연락처: ${phone}\n\n고양파주지사 담당자가 확인 후 빠른 시간 내에 연락드리겠습니다.`);
    form.reset();
    switchView('home');
  });
}

function initNavigation() {
  // 모바일 메뉴 토글
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });

    // 화면 바깥 클릭 시 메뉴 닫기
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // 모달 배경 클릭 시 닫기
  const modal = document.getElementById('detail-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeDetailModal();
      }
    });
  }
}

window.closeDetailModal = function() {
  const modal = document.getElementById('detail-modal');
  if (modal) modal.classList.add('hidden');
};
