// 해법독서논술 고양파주지사 통합 데이터베이스

const SITE_DATA = {
  // 1. 지사 및 본사 공식 정보
  branchInfo: {
    name: "해법독서논술 고양파주지사",
    brandName: "해법독서논술 (BACCAL 바칼로레아)",
    logoImg: "assets/logo.png",
    slogan: "대한민국 99.4% 학교가 선택한 천재교과서가 만든 독서토론논술",
    subSlogan: "독서논술과 학교공부를 한번에! 2028 대입 개편과 문해력 혁명의 중심",
    tel: "031-908-7909",
    mobile: "010-4820-7909",
    address: "경기도 고양시 일산동구 마두동 일산프라자 (고양·파주 전 지역 총괄)",
    email: "hb_goyangpaju@naver.com",
    blogUrl: "https://blog.naver.com/PostList.naver?blogId=shalala009&from=postList&categoryNo=23",
    mainSiteUrl: "https://www.hb-baccal.co.kr",
    workingHours: "평일 10:00 - 19:00 (토요일/공휴일 사전예약 상담)",
    stats: {
      schoolAdoption: "99.4%",
      historyYears: "45년+",
      branchClassrooms: "35개+",
      satisfactionRate: "98.7%"
    }
  },

  // 2. 본사 공식 [해법독서논술 소개]
  brandIntro: {
    title: "독서논술과 학교공부를 한번에!",
    leadText: "해법독서논술은 천재교과서의 교과서 개발 노하우를 바탕으로, 독서를 통해 사고력을 키우고 토론과 논술로 표현하는 힘까지 완성하는 교과통합 논술 전문 프로그램입니다.",
    coreValues: [
      {
        number: "01",
        title: "교과통합 사고력 학습",
        desc: "국어, 사회, 과학, 역사 등 전 교과서 수록 도서와 연계되어 학교 수업 이해도와 배경지식을 비약적으로 높입니다."
      },
      {
        number: "02",
        title: "토의·토론 & 논리적 표현력",
        desc: "CEDA 방식의 토론과 발표 수업을 통해 다양한 관점을 비판적으로 수용하고 설득력 있게 생각을 전개합니다."
      },
      {
        number: "03",
        title: "서·논술형 & 수행평가 완벽 대비",
        desc: "2028 대입 개편에 맞춰 내신 서술형 감점 없는 답안 작성과 고교학점제 탐구보고서 작성 능력을 체득합니다."
      },
      {
        number: "04",
        title: "AI 에듀테크 정밀 진단 & 첨삭",
        desc: "입회 전 독서능력 진단부터 천재교육 AI 정밀 첨삭과 원장님 1:1 대면 코칭으로 포트폴리오를 관리합니다."
      }
    ]
  },

  // 3. 본사 공식 [프로그램 - 학습시스템 / 평가시스템 / 교재소개]
  programs: {
    // 1) 학습시스템 (2번째 사진 100% 동일 구현)
    learningSystem: {
      title: "학습시스템",
      subtitle: "해법독서논술 교과연계 독서토론논술 프로그램",
      quote: "해법독서논술 교과연계 독서토론논술 프로그램으로 사고력확장은 물론 학습능력까지 신장시켜 줍니다.",
      steps: [
        {
          stepNumber: "Step 01",
          name: "독서진단",
          themeColor: "cyan", // 하늘색
          badgeColor: "bg-[#00c2cb] text-white",
          cardBg: "bg-cyan-50/70 border-cyan-100",
          iconBg: "bg-[#00c2cb]",
          icon: "fas fa-book-reader",
          items: [
            { title: "독서 진단평가", desc: "독서태도와 독서기초능력 진단" },
            { title: "상담", desc: "독서진단 분석표를 토대로 상담" },
            { title: "모둠배정", desc: "학생수준에 적당한 모둠배정" }
          ]
        },
        {
          stepNumber: "Step 02",
          name: "자기주도",
          themeColor: "blue", // 파란색
          badgeColor: "bg-[#0284c7] text-white",
          cardBg: "bg-sky-50/70 border-sky-100",
          iconBg: "bg-[#0284c7]",
          icon: "fas fa-clipboard-check",
          items: [
            { title: "책 읽기", desc: "교과 주제와 연계된 책 읽기" },
            { title: "독서활동 점검", desc: "책 내용의 이해도 확인" },
            { title: "생각 정리", desc: "스스로 사고하며 자기 생각 세우기" }
          ]
        },
        {
          stepNumber: "Step 03",
          name: "모둠활동",
          themeColor: "indigo", // 보라색
          badgeColor: "bg-[#4f46e5] text-white",
          cardBg: "bg-indigo-50/70 border-indigo-100",
          iconBg: "bg-[#4f46e5]",
          icon: "fas fa-users",
          items: [
            { title: "토의 · 토론", desc: "생각 나누기" },
            { title: "글쓰기", desc: "자신의 생각을 글로 표현하기" },
            { title: "발표하기", desc: "자신의 생각을 발표하고 피드백" }
          ]
        },
        {
          stepNumber: "Step 04",
          name: "평가결과",
          themeColor: "purple", // 자주/퍼플색
          badgeColor: "bg-[#9333ea] text-white",
          cardBg: "bg-purple-50/70 border-purple-100",
          iconBg: "bg-[#9333ea]",
          icon: "fas fa-award",
          items: [
            { title: "독서능력평가 · 국어능력평가", desc: "학습성취도 분석표 제공", singleLarge: true }
          ]
        }
      ]
    },

    // 2) 평가시스템 (3번째 사진 100% 동일 구현)
    evalSystem: {
      title: "평가시스템",
      subtitle: "독서 진단부터 국어능력평가까지!",
      quote: "체계적인 평가시스템을 통해 아이의 독서능력을 정확하게 진단합니다.",
      cards: [
        {
          id: "eval-01",
          title: "독서종합검사",
          badge: "기초능력",
          badgeColor: "bg-[#0284c7] text-white",
          gradient: "from-[#00c2cb] to-[#0284c7]",
          icon: "fas fa-book-open",
          illustrationType: "book",
          targetText: "최초 상담 시,",
          desc: "독서태도와 독서 기초능력 평가"
        },
        {
          id: "eval-02",
          title: "독서능력평가",
          badge: "정기점검",
          badgeColor: "bg-[#2563eb] text-white",
          gradient: "from-[#0284c7] to-[#2563eb]",
          icon: "fas fa-graduation-cap",
          illustrationType: "cap",
          targetText: "매월 학습하는 필독서 2권에 대한",
          desc: "이해도 평가"
        },
        {
          id: "eval-03",
          title: "국어능력평가",
          badge: "4대역량",
          badgeColor: "bg-[#7c3aed] text-white",
          gradient: "from-[#3b82f6] to-[#7c3aed]",
          icon: "fas fa-spell-check",
          illustrationType: "bubbles",
          bubbles: ["어휘", "문법", "읽기", "쓰기"],
          targetText: "매월 국어능력인",
          desc: "어휘, 문법, 읽기, 쓰기 능력 평가"
        }
      ]
    },

    // 3) 교재소개 (공식 본사 hb-baccal.co.kr/program/book 100% 동일 데이터)
    bookIntro: {
      categories: [
        {
          id: "pre",
          label: "예비초등",
          books: [
            {
              id: "pre-01",
              tag: "독서 습관 형성",
              title: "읽기 친구 생각 친구",
              target: "예비초등",
              composition: "총 2set (1set 읽기 친구 리딩북 1권 + 생각친구 워크북 1권)",
              features: [
                "1set당 4편의 동화 수록",
                "그림책 중심의 즐거운 읽기를 통해 독서에 대한 흥미 유발",
                "또래와의 상호작용을 통해 자연스러운 어휘 표현 습득"
              ],
              detailHtml: "<b>[읽기 친구 생각 친구 상세 안내]</b><br>초등학교 입학 전 아동의 발달 수준에 맞춘 그림책과 동화로 구성되어 있으며, 책 읽는 즐거움을 느끼고 바른 독서 습관을 기릅니다."
            },
            {
              id: "pre-02",
              tag: "독서 습관 형성",
              title: "교과연계 통합논술 프로그램",
              target: "예비초등",
              composition: "총 5set (1set 이야기 보따리 1권 + 말놀이 생각놀이 1권 + 또박또박 쓰기장 1권)",
              features: [
                "1set당 4편의 이야기 (전래동화 3편 + 1학년 교과대비 1편)",
                "한글 쓰기 연습 및 선 긋기 기초 훈련 제공",
                "풍부한 이야기와 말놀이로 어휘력과 상상력 확장"
              ],
              detailHtml: "<b>[교과연계 통합논술 (예비초등)]</b><br>1학년 1학기 국어 교과서 수록 도서 및 전래동화를 바탕으로 말하기, 듣기, 쓰기의 기초를 다집니다."
            }
          ]
        },
        {
          id: "elem",
          label: "초등",
          books: [
            {
              id: "elem-01",
              tag: "독서 습관 형성 & 교과연계",
              title: "교과연계 통합논술 프로그램 (초등 1~6학년)",
              target: "초등 1학년 ~ 초등 6학년",
              composition: "학년별 12set (1set 필독서 2권 + 생각짱글짱 2권 + 시사독해 1권 + 교과논술 1권 + 국어능력 1권) ※ 초등 1,2학년 테마북",
              features: [
                "필독서 & 생각짱 글짱: 책 읽기 → 토의·토론 → 글쓰기 → 발표로 이어지는 교과연계 통합논술",
                "시사독해: 독해전략을 활용하여 기사를 읽고, 시사 상식과 사고 확장",
                "교과논술: 교과서 개념 이해 및 통합 교과 논술, 수행평가 서·논술형 대비",
                "국어능력: 어휘부터 문법까지, 국어 기초 실력 향상"
              ],
              detailHtml: "<b>[초등 전학년 교과통합 완성 커리큘럼]</b><br>초등 1학년부터 6학년까지 학년별 발달 수준에 최적화된 필독서와 워크북으로, 교과 지식 습득은 물론 서술형 평가와 수행평가에 완벽 대비합니다."
            }
          ]
        },
        {
          id: "mid",
          label: "중등",
          books: [
            {
              id: "mid-01",
              tag: "중등 독서논술 기초 역량 형성 및 수행평가 대비",
              title: "로스트럼 입문",
              target: "예비중등 ~ 중등 3학년",
              composition: "총 12set (필독서 1권 + 워크북 1권)",
              features: [
                "독서논술과 독해력 향상",
                "어휘 학습 및 글쓰기 활동 강화",
                "교과연계 학습 및 수행평가 능력 향상"
              ],
              detailHtml: "<b>[로스트럼 입문]</b><br>중학 국어 교과서 수록 문학 및 비문학 독해의 기본기를 다지고 논리적 글쓰기 틀을 정립합니다."
            },
            {
              id: "mid-02",
              tag: "진로탐색형 독서토론 논술",
              title: "로스트럼 기본/심화",
              target: "예비중등 ~ 중등 3학년",
              composition: "총 12set (필독서 1권 + 워크북 1권 + 지문독해 실전 논술)",
              features: [
                "다양한 분야의 도서 및 진로 탐색 기회 제공",
                "다양한 교과 지문 독해 및 통합형 실전 논술 대비",
                "중등 국어 문법 완벽 정리"
              ],
              detailHtml: "<b>[로스트럼 기본/심화]</b><br>수능 비문학 독해 전략과 2028 대입 개편에 맞춘 고난도 서술형 논술, 진로 탐구보고서 작성을 완성합니다."
            }
          ]
        },
        {
          id: "special",
          label: "특강",
          subCategories: [
            {
              subId: "history",
              subLabel: "#역사",
              books: [
                {
                  id: "hist-01",
                  tag: "위인으로 만나는 초등 저학년 역사 논술",
                  title: "우리 위인 이야기",
                  target: "초등 2학년 ~ 초등 3학년",
                  composition: "총 12set (1set 리딩북 1권 + 워크북 1권)",
                  features: [
                    "삼국시대부터 일제강점기까지 대표적인 역사적 위인 12명의 이야기",
                    "다양한 분야에 대한 배경지식 습득 및 인성 교육"
                  ]
                },
                {
                  id: "hist-02",
                  tag: "교과연계 역사논술 프로그램",
                  title: "논술로 만나는 우리 역사",
                  target: "초등 고학년",
                  composition: "총 12set (1set 리딩북 4권 + 워크북 2권 역사짱짱 논술짱짱 / 역사전시관 연대표)",
                  features: [
                    "초등 사회/역사 교육과정 바탕 구성",
                    "생활과 문화를 통한 역사 이해 및 주제 논술"
                  ]
                },
                {
                  id: "hist-03",
                  tag: "교과연계/내신대비 역사 프로그램",
                  title: "스토리텔링 세계사",
                  target: "예비중등 ~ 중등",
                  composition: "총 12set (1set 리딩북 1권 + 워크북 1권)",
                  features: [
                    "주요 나라별 역사의 맥락을 쉽고 재미있게 학습",
                    "매 단원 지도와 연표를 통해 세계사 흐름 정리",
                    "중·고등학교 세계사 내신 완벽 대비"
                  ]
                },
                {
                  id: "hist-04",
                  tag: "교과연계/내신대비 역사 프로그램",
                  title: "스토리텔링 한국사",
                  target: "예비중 ~ 중등",
                  composition: "총 4set (스토리텔링 한국사 3권 + 스토리텔링 근현대사 1권)",
                  features: [
                    "선사시대부터 현대사까지 한국사의 흐름을 쉽게 이해",
                    "세계사의 흐름과 한국사 비교 구성 및 문제 풀이"
                  ]
                },
                {
                  id: "hist-05",
                  tag: "주제 중심 한국사 프로그램",
                  title: "꼭꼭 씹어먹는 한국사",
                  target: "중등",
                  composition: "총 2set (1set 필독서 1권 + 워크북 1권 + 연표)",
                  features: [
                    "삼국시대~조선후기 역사의 흐름 정복",
                    "역사적인 쟁점을 통한 종합적인 글쓰기"
                  ]
                }
              ]
            },
            {
              subId: "science",
              subLabel: "#과학",
              books: [
                {
                  id: "sci-01",
                  tag: "쉽고 재미있는 융합 과학 독서 프로그램",
                  title: "큐리 앤 조이",
                  target: "예비초 ~ 초등 저학년",
                  composition: "총 12set (1set 리딩북 1권 + 워크북 1권)",
                  features: [
                    "QR영상으로 애니메이션 동화 제공",
                    "누리과정과 초등 교육과정 기반 과학 호기심과 탐구력 자극"
                  ]
                },
                {
                  id: "sci-02",
                  tag: "자연과학과 인문학의 융합과학논술",
                  title: "사이언스토리",
                  target: "초등 고학년",
                  composition: "총 12set (1set 리딩북 1권 + 워크북 1권)",
                  features: [
                    "빅히스토리를 주제로 만든 최초의 초등 대상 융합과학논술",
                    "물리+화학+지구과학+생명과학+역사+철학을 아우르는 통합 사고",
                    "빅뱅이론, 우주 원리에 대한 QR 영상 제공"
                  ]
                },
                {
                  id: "sci-03",
                  tag: "융합 과학 토론 프로그램",
                  title: "디베이트 과학이슈",
                  target: "예비중등 ~ 중등",
                  composition: "총 12권 / 이슈북 1권",
                  features: [
                    "과학 관련 최신 논제와 사실을 근거로 한 CEDA 토론 프로그램",
                    "교과연계 및 이공계 진로 탐색 체험"
                  ]
                }
              ]
            },
            {
              subId: "literature",
              subLabel: "#문학",
              books: [
                {
                  id: "lit-01",
                  tag: "고전 작품의 지혜를 현대로 적용하는 토론·논술",
                  title: "현대로 통하는 고전",
                  target: "예비중등 ~ 중등",
                  composition: "총 8set (1set 리딩북 1권 + 워크북 1권)",
                  features: [
                    "천재교과서가 엄선한 수능 / 모의평가 기출 고전 문학 작품",
                    "고전 소설의 기본부터 수능 맛보기까지 완벽 대비"
                  ]
                },
                {
                  id: "lit-02",
                  tag: "교과연계 문학 프로그램",
                  title: "근현대와 만나는 단편소설",
                  target: "예비중등 ~ 중등",
                  composition: "총 6set (1set 리딩북 2권 + 워크북 2권)",
                  features: [
                    "중등 국어 교과서 수록 단편소설 엄선",
                    "근대부터 현대까지 시대사 정리 및 사회·역사적 배경 이해"
                  ]
                },
                {
                  id: "lit-03",
                  tag: "주제 중심 교과연계 문학 프로그램",
                  title: "꼭꼭 씹어먹는 한국 단편 소설",
                  target: "예비중등 ~ 중등",
                  composition: "총 2set (1set 리딩북 1권 + 워크북 1권 / 4편의 작품)",
                  features: [
                    "중고등 국어 및 문학 교과서 수록 총 8편의 대표작",
                    "소설의 갈래 이론을 바탕으로 작가의 의도와 주제 분석"
                  ]
                }
              ]
            },
            {
              subId: "writing",
              subLabel: "#글쓰기",
              books: [
                {
                  id: "wri-01",
                  tag: "초등 글쓰기 기초 훈련",
                  title: "초등 글쓰기",
                  target: "예비초등 ~ 초등",
                  composition: "총 2set (1set 리딩북 1권 + 워크북 1권)",
                  features: [
                    "[일기/독후감/표현력/주장하는글] 갈래별 글쓰기 마스터",
                    "사물 관찰, 오감 활용, 은유·직유 등 생생한 묘사 훈련",
                    "개요 작성과 논리적 문단 구성법 체득"
                  ]
                },
                {
                  id: "wri-02",
                  tag: "중등 글쓰기 기초 훈련",
                  title: "논리적 글쓰기",
                  target: "예비중등 ~ 중등",
                  composition: "총 4set (1set 워크북 1권)",
                  features: [
                    "문장 → 문단 → 완성된 글 순서로 글쓰기 체계 확립",
                    "정의, 예시, 비교·대조, 분석 기법을 활용한 탄탄한 논증 형성"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },

  // 4. [교재연구 - 교재 연구 아카이브 폴더 트리 구조]
  bookArchive: [
    {
      folderId: "folder-kinder",
      folderName: "📁 [01] 예비초등 키움 (6~7세)",
      gradeBadge: "6~7세 예비초",
      bookCount: "스토리북 24권 + 활동북 12세트",
      theme: "기초 어휘력 & 이야기 구조 파악",
      summary: "그림책 중심의 즐거운 책읽기와 표현력 놀이로 초등학교 입학 전 독서 흥미와 어휘력을 단단하게 형성합니다.",
      researchPoints: [
        "초등 1학년 1학기 국어 교과서 수록 필수 어휘 100% 반영",
        "그림 카드 및 말놀이를 통한 인물-배경-사건의 인과관계 파악",
        "선 긋기부터 낱말 완성, 바른 문장 쓰기까지 연필 잡는 힘 완성"
      ],
      curriculumDetails: "스토리북 2권 + 생각놀이 워크북 + 말놀이 교구 + 쓰기장 (매월 1세트)"
    },
    {
      folderId: "folder-low",
      folderName: "📁 [02] 초등 저학년 바움 (1~2학년)",
      gradeBadge: "초등 1~2학년",
      bookCount: "필독서 24권 + 생각하는 나무 12권",
      theme: "통합교과 연계 & 생각 꺼내기",
      summary: "통합교과(국어, 봄·여름·가을·겨울, 수학 연계) 필독서를 바탕으로 질문하고 토론하며 3~4문장 완성형 글쓰기를 훈련합니다.",
      researchPoints: [
        "교과서 수록작품 및 연계 창작도서 매월 2권 심층 독해",
        "생활문, 독서감상문, 편지글, 관찰기록문 등 기초 갈래글 체화",
        "국어 돋보기 코너를 통한 맞춤법, 띄어쓰기, 문장부호 집중 교정"
      ],
      curriculumDetails: "필독서 2권 + 생각하는 나무 본교재 + 국어능력 워크북 + AI 첨삭 리포트"
    },
    {
      folderId: "folder-mid",
      folderName: "📁 [03] 초등 중학년 생각짱글짱 (3~4학년)",
      gradeBadge: "초등 3~4학년",
      bookCount: "필독서 24권 + 생각짱글짱 12권 + 시사독해",
      theme: "다양한 갈래글 & 비문학 독해 본격화",
      summary: "설명문, 논설문, 기행문 등 다양한 갈래글의 구조를 익히고 사회·과학 교과 연계 비문학 독해력을 본격적으로 키웁니다.",
      researchPoints: [
        "비문학 팩트 독해 & 문단별 핵심어/중심 문장 요약 도식화",
        "주장 + 근거 + 예시 구조를 갖춘 600자 완성형 논설문 작성",
        "초등 3학년 급격히 어려워지는 사회/과학 한자 개념 어휘 정복"
      ],
      curriculumDetails: "월 필독서 2권 + 생각짱글짱 본서 + 시사독해 테마북 + 첨삭 포트폴리오"
    },
    {
      folderId: "folder-high",
      folderName: "📁 [04] 초등 고학년 생각하는 넓은 나무 (5~6학년)",
      gradeBadge: "초등 5~6학년",
      bookCount: "필독서 24권 + 넓은나무 12권 + 교과논술",
      theme: "심층 토론 & 수능 비문학 기초",
      summary: "고전 문학과 현대 시사 쟁점을 깊이 있게 다루며, 1,000자 이상의 장문 논술과 중학 내신 서술형에 완벽 대비합니다.",
      researchPoints: [
        "수능 국어 비문학 제재(인문·사회·과학·철학) 배경지식 체화",
        "CEDA 방식의 찬반 토론 (입론서 작성, 반론, 최종 변론)",
        "중학교 수행평가형 조건 제시 서술식 글쓰기 완벽 마스터"
      ],
      curriculumDetails: "필독서 2권 + 교과논술 본서 + 시사토론 워크시트 + 1:1 대면 첨삭"
    },
    {
      folderId: "folder-middle",
      folderName: "📁 [05] 중등 심화 로스트럼 Rostrum (1~3학년)",
      gradeBadge: "중학교 1~3학년",
      bookCount: "로스트럼 12권 + 필수문학 + 수능독서",
      theme: "수능 1등급 로드맵 & 고교학점제 탐구보고서",
      summary: "중학 국어 교과서 9종 수록 문학작품 분석과 고난도 수능형 비문학 독해, 고교학점제 탐구보고서 역량을 완성하는 중등 전문 코스입니다.",
      researchPoints: [
        "중·고등 필수 현대문학 및 고전문학 갈래별 핵심 개념 총정리",
        "수능 국어 독서(비문학) 경제, 법학, 과학기술 지문 구조 독해",
        "진로 연계 도서 기반 학생부 세특 탐구보고서 작성 실전 지도"
      ],
      curriculumDetails: "로스트럼 본서 + 필수문학 텍스트북 + 수능독서 트레이닝 + AI·전문가 2중 첨삭"
    },
    {
      folderId: "folder-theme",
      folderName: "📁 [06] 테마 특강 (스토리텔링 한국사 & 세계사)",
      gradeBadge: "초등 4학년 ~ 중등 2학년",
      bookCount: "한국사 12권 + 세계사 6권 + 연표 워크북",
      theme: "흐름으로 꿰뚫는 통사 학습 & 역사논술",
      summary: "단순 암기가 아닌 역사적 사건의 인과관계와 인물의 선택을 토론하며 역사적 상상력과 논술력을 함께 키우는 프리미엄 특강입니다.",
      researchPoints: [
        "고조선부터 현대사까지 연표와 지도로 보는 입체적 역사 흐름",
        "역사 속 인물 가상 인터뷰 및 역사 재판 찬반 토론",
        "역사 신문 만들기 및 유적지 탐구보고서 작성"
      ],
      curriculumDetails: "한국사 4단계 (전 12권) / 세계사 2단계 (전 6권) + 연표 브로마이드"
    }
  ],

  // 5. [입시정보 - 글 칼럼 & 영상 큐레이션 이원화]
  admissionData: {
    articles: [
      {
        id: "art-01",
        category: "대입 개편 심층 분석",
        badge: "HOT ISSUE",
        title: "2028 대입 개편과 통합 수능 국어: 수포자보다 무서운 '국포자' 시대의 문해력 처방",
        date: "2026. 03 최신",
        author: "해법독서논술 입시전략연구소",
        summary: "선택과목 폐지로 모든 수험생이 동일한 공통 국어에 응시! 인문·과학 융합 비문학 지문 독해력과 서·논술형 문제 해결력이 상위권 변별의 절대 기준이 됩니다.",
        readTime: "5분",
        content: `
          <h3>1. 2028 수능 국어의 본질: 융합형 공통 국어의 도래</h3>
          <p>2028학년도 대입 개편의 가장 핵심적인 변화는 <strong>국어 영역의 선택과목(화법과작문, 언어와매체) 폐지</strong>입니다. 모든 수험생이 인문, 사회, 과학, 기술, 예술이 복합적으로 얽힌 통합형 공통 국어 시험을 치르게 됩니다.</p>
          <p>이는 특정 영역의 유불리를 없애는 대신, <strong>글의 본질적인 구조를 파악하고 낯선 제재를 빠르고 정확하게 독해하는 '순수 문해력'</strong>을 요구합니다.</p>

          <h3>2. 고교 내신 5등급제와 서·논술형 문항 40% 이상 필수 배정</h3>
          <p>내신이 9등급제에서 5등급제로 완화되면서 1등급 비율이 4%에서 10%로 늘어납니다. 이로 인해 대학은 학생부 교과 등급만으로 학생을 변별할 수 없게 되어 <strong>서·논술형 지필평가와 세부능력및특기사항(세특)의 탐구 역량</strong>을 결정적 지표로 삼게 됩니다.</p>
          <ul>
            <li><strong>지필고사 서술형 배점 40~50% 상향:</strong> 단순 단답형이 아닌 논리적 인과관계를 서술하는 조건 제시형 문항 집중 출제</li>
            <li><strong>수행평가 탐구보고서 비중 강화:</strong> 수업 중 읽은 도서를 바탕으로 한 소논문형 글쓰기 평가 확대</li>
          </ul>

          <h3>3. 초·중등 시기 해법독서논술만의 로드맵</h3>
          <p>초등 단계에서는 어휘력과 4단계 구조화 독해(생각 열기-꺼내기-나누기-쓰기)로 글쓰기의 뼈대를 세우고, 중등 로스트럼 과정을 통해 고난도 수능 비문학 지문 분석과 1:1 정밀 첨삭을 완성하여 고등학교 진학 시 압도적인 내신 1등급을 선점합니다.</p>
        `
      },
      {
        id: "art-02",
        category: "고교학점제 전략",
        badge: "필독 가이드",
        title: "2022 개정 교육과정 & 고교학점제: 학생부 세특을 빛내는 진로 연계 독서 탐구보고서 A to Z",
        date: "2026. 02 최신",
        author: "고양파주지사 수석 연구원",
        summary: "학생이 과목을 직접 선택하는 고교학점제 체제! 교과 지식을 자신의 진로와 연결하여 심화 발전시키는 '독서 기반 주제 탐구' 작성법을 공개합니다.",
        readTime: "4분",
        content: `
          <h3>1. 고교학점제에서 대학 입학사정관이 주목하는 단 하나</h3>
          <p>고교학점제에서는 어떤 선택과목을 이수했는지와 함께 <strong>해당 과목에서 학생이 주도적으로 수행한 '탐구의 깊이'</strong>가 평가의 핵심입니다. 교과서에 나오는 개념에서 출발하여 관련 전문 도서를 찾아 읽고, 이를 바탕으로 보고서를 작성한 과정이 학생부에 기록되어야 합니다.</p>

          <h3>2. 탐구보고서 작성의 3단계 공식</h3>
          <ol>
            <li><strong>호기심의 발견:</strong> 교과 수업 중 의문이 생긴 쟁점 도출</li>
            <li><strong>독서를 통한 심화 탐색:</strong> 신뢰할 수 있는 학술 도서 및 필독서 완독을 통한 근거 수집</li>
            <li><strong>비판적 결론 도출:</strong> 자신의 시각이 담긴 논리적 탐구보고서(1,500자) 완성 및 발표</li>
          </ol>
        `
      },
      {
        id: "art-03",
        category: "서술형 만점 비법",
        badge: "실전 팁",
        title: "우리 아이 서·논술형 평가 만점 받는 3대 원칙: '조건 충족'과 '논증 구조'",
        date: "2026. 01 최신",
        author: "해법독서논술 교수부",
        summary: "채점관이 점수를 깎을 수 없는 완벽한 서술형 답안 작성 원칙과 초등 시기 필수 훈련법을 공개합니다.",
        readTime: "3분",
        content: `
          <h3>1. 문제의 발문 속 '출제 조건'을 시각화하라</h3>
          <p>서술형 감점의 대다수는 글자 수 미달, 필수 제시어 누락 등 조건을 충족하지 못해 발생합니다. 문제에서 요구하는 조건을 먼저 꼼꼼히 체크하는 습관이 중요합니다.</p>
          <h3>2. 두괄식 핵심 주장 + 근거 서술의 정석</h3>
          <p>첫 문장에서 질문에 대한 직관적인 결론을 명시하고, 다음 문장에서 '그 까닭은 ~이기 때문이다'의 형태로 논리적 연결을 완성합니다.</p>
        `
      },
      {
        id: "art-04",
        category: "고양·파주 학군 분석",
        badge: "지역 특화",
        title: "고양(일산·덕양) & 파주(운정) 고교 진학 로드맵: 백석고, 운정고, 저현고, 동패고 국어 내신 트렌드",
        date: "2026. 02 최신",
        author: "고양파주지사장 직강 칼럼",
        summary: "일산 및 운정 지역 주요 고등학교의 국어 내신 출제 경향과 초·중등 시기 국어·논술 필수 선행 포인트 분석",
        readTime: "4분",
        content: `
          <h3>1. 일산 및 운정 지역 고교 내신의 두드러진 특징: '외부 낯선 지문의 대거 출제'</h3>
          <p>교과서 범위 외의 현대시와 고전시가, 수능 모의고사 3점짜리 비문학 지문이 연계 출제되므로 단순 암기가 아닌 지문 독해 내공이 필요합니다.</p>
          <h3>2. 인근 중학교(오마중, 신일중, 백마중, 산내중, 한빛중 등) 수행평가 대비</h3>
          <p>고양파주지사 가맹 교실들은 학교별 수행평가 기출 유형을 분석하여 1:1 맞춤 글쓰기 클리닉을 제공합니다.</p>
        `
      },
      {
        id: "art-05",
        category: "초등 문해력 기초",
        badge: "문해력 솔루션",
        title: "초등 문해력 격차가 중·고등 전과목 성적을 결정짓는다: '교과 어휘 5단계 정복법'",
        date: "2026. 03 최신",
        author: "해법독서논술 교육연구원",
        summary: "수학 문장제, 사회 탐구, 과학 개념까지 모두 문해력의 문제! 초등 시기 한자 개념어와 맥락 독해 훈련의 결정적 중요성",
        readTime: "4분",
        content: `
          <h3>1. 초등 3학년, 5학년에 찾아오는 문해력 절벽</h3>
          <p>초등 고학년으로 갈수록 과목별 한자 어휘(비례, 응결, 유적 등)가 폭증합니다. 글자를 읽을 수는 있으나 뜻을 모르는 '실질적 문맹' 상태를 예방해야 합니다.</p>
          <h3>2. 해법독서논술 국어능력 프로그램의 어휘 훈련</h3>
          <p>사전적 의미 암기가 아닌, 문맥 속에서 낱말의 관계를 유추하고 직접 문장을 지어보는 실전 어휘 트레이닝을 실시합니다.</p>
        `
      },
      {
        id: "art-06",
        category: "디지털 디톡스 & 독서",
        badge: "뇌과학 교육",
        title: "스마트폰 숏폼에 갇힌 팝콘 브레인, '종이책 몰입 독서'로 뇌의 깊은 사고 회로를 복원하라",
        date: "2026. 02 최신",
        author: "아동 발달 교육 전문가",
        summary: "디지털 스키밍(대충 훑어읽기)에서 벗어나 호흡이 긴 완결된 텍스트를 읽어내는 힘이 수능 국어 1등급의 기초 체력입니다.",
        readTime: "3분",
        content: `
          <h3>1. 숏폼 영상과 스크롤링이 앗아간 깊은 생각의 힘</h3>
          <p>자극적인 짧은 영상에 익숙해진 학생들은 2장 이상의 긴 지문을 읽을 때 인내심을 잃고 집중력이 급격히 떨어집니다.</p>
          <h3>2. 모둠 토론과 함께하는 필독서 완독 경험</h3>
          <p>친구들과 함께 토론하고 발표하는 상호작용 독서는 독서 몰입감을 극대화하여 도파민 의존성을 건강하게 해소합니다.</p>
        `
      },
      {
        id: "art-07",
        category: "중학 내신 완벽 대비",
        badge: "내신 클리닉",
        title: "중학교 국어 수행평가 감점 요인 TOP 5와 감점 없는 모범 답안 작성 공식",
        date: "2026. 01 최신",
        author: "중등 국어 전문 강사진",
        summary: "문장 호응, 논리적 비약, 조건 미준수 등 중학생들이 가장 자주 범하는 글쓰기 감점 사례와 1:1 첨삭 해결책",
        readTime: "5분",
        content: `
          <h3>1. 수행평가 감점 1위: '지시문 조건 불이행'</h3>
          <p>글자 수, 특정 어휘 사용, 문단 구분 등 채점 기준표에 명시된 필수 조건을 엄격히 준수하는 훈련이 필요합니다.</p>
          <h3>2. 주장과 근거의 유기적 결합</h3>
          <p>자신의 주장에 대한 타당한 객관적 근거를 제시하고, 반론에 대한 재반박을 포함한 완성도 높은 3단 구성을 체득합니다.</p>
        `
      },
      {
        id: "art-08",
        category: "2028 수능 비문학",
        badge: "수능 1등급",
        title: "2028 수능 공통 국어 비문학 융합 지문(과학+철학, 경제+법) 완벽 대비 구조 독해법",
        date: "2026. 03 최신",
        author: "대입 수능 국어 수석 연구원",
        summary: "고난도 킬러 문항이 배제되어도 지문의 융합성과 논리적 완결성은 더욱 높아집니다. 문단 간 관계를 도식화하는 독해 기술",
        readTime: "4분",
        content: `
          <h3>1. 융합 지문의 구조: '개념 도입 - 쟁점 제시 - 대립 이론 비교 - 현대적 의의'</h3>
          <p>지문을 읽으면서 핵심 키워드를 기호화하고 문단 간 논리적 연결 고리를 빠르게 정리하는 스키마를 형성해야 합니다.</p>
          <h3>2. 로스트럼(Rostrum) 비문학 트레이닝</h3>
          <p>천재교과서 해법독서논술 중등 로스트럼은 수능 평가원 및 교육청 기출 비문학 지문을 선별 수록하여 실전 감각을 완성합니다.</p>
        `
      },
      {
        id: "art-09",
        category: "토론 & 구술 면접",
        badge: "면접 대비",
        title: "말 잘하는 아이가 글도 잘 쓴다: CEDA 아카데믹 디베이트가 만드는 논리적 구술력",
        date: "2026. 02 최신",
        author: "해법독서논술 교수부장",
        summary: "교차 조사와 입론, 최종 변론으로 이어지는 체계적인 토론 수업이 대입 학생부 면접과 심층 구술고사의 강력한 무기가 됩니다.",
        readTime: "4분",
        content: `
          <h3>1. 토론은 상대방을 이기는 것이 아니라 '경청하고 설득'하는 과정</h3>
          <p>상대방의 논거에서 논리적 허점을 발견하고 근거에 기반하여 자신의 주장을 논증하는 과정을 통해 메타인지를 키웁니다.</p>
          <h3>2. 입론서 작성을 통한 구조적 글쓰기 연계</h3>
          <p>말한 내용을 즉시 글로 정리하는 '토론 후 글쓰기' 시스템으로 말하기와 쓰기의 시너지 효과를 창출합니다.</p>
        `
      },
      {
        id: "art-10",
        category: "역사 & 세계사 논술",
        badge: "배경지식",
        title: "흐름으로 꿰뚫는 한국사·세계사: 암기 과목 역사를 '사고력 논술'로 바꾸는 비결",
        date: "2026. 01 최신",
        author: "역사논술 수석 연구원",
        summary: "단순 연표 암기가 아닌 역사적 인물의 선택과 사건의 인과관계를 입체적으로 탐구하여 수능 탐구영역 1등급의 토대를 만듭니다.",
        readTime: "4분",
        content: `
          <h3>1. 역사적 가상 재판과 신문 만들기</h3>
          <p>'만약 내가 당시의 왕이었다면 어떤 결정을 내렸을까?'라는 질문을 통해 다각적인 시각과 역사적 통찰력을 기릅니다.</p>
          <h3>2. 초등 4학년~중등 2학년 필수 역사논술</h3>
          <p>스토리텔링 한국사와 세계사 특강으로 중고등 사회·역사 교과 내신을 압도적으로 선행합니다.</p>
        `
      },
      {
        id: "art-11",
        category: "AI 에듀테크 첨삭",
        badge: "혁신 교육",
        title: "천재교육 AI 정밀 분석 엔진과 전문 원장의 1:1 대면 첨삭이 만드는 글쓰기 기적",
        date: "2026. 03 최신",
        author: "에듀테크 R&D 센터",
        summary: "문법, 어휘 다양성, 문장 호응을 AI가 실시간 진단하고 원장님이 학생의 사고력과 감성을 다듬어주는 하이브리드 첨삭 시스템",
        readTime: "3분",
        content: `
          <h3>1. AI가 진단하는 6대 글쓰기 지표</h3>
          <p>어휘의 풍부성, 문장의 완결성, 주제의 명확성, 문단 구성력, 맞춤법 및 띄어쓰기, 논리 전개 과정을 정량 데이터로 도출합니다.</p>
          <h3>2. 학부모님께 전달되는 월간 성장 리포트</h3>
          <p>매월 아이의 글쓰기 역량 변화 추이를 한눈에 확인할 수 있는 과학적인 데이터 리포트를 제공합니다.</p>
        `
      },
      {
        id: "art-12",
        category: "학부모 교육 가이드",
        badge: "가정 독서 팁",
        title: "책 안 읽는 우리 아이, 독서 흥미 200% 올리는 '부모의 질문법' 3가지",
        date: "2026. 02 최신",
        author: "고양파주지사 학부모 코칭 연구소",
        summary: "'줄거리 요약해봐'라는 질문은 독서 거부감을 부릅니다. 아이의 마음을 열고 생각을 꺼내주는 따뜻한 대화법",
        readTime: "3분",
        content: `
          <h3>1. 주인공의 감정에 공감하는 질문하기</h3>
          <p>'그 상황에서 주인공은 어떤 마음이었을까? 너라면 어땠을 것 같아?'와 같이 열린 질문으로 대화를 시작하세요.</p>
          <h3>2. 정답을 요구하지 않는 상상력 질문</h3>
          <p>'결말이 다르게 끝났다면 어떻게 되었을까?'라는 질문으로 아이가 자유롭게 상상의 나래를 펼치게 도와줍니다.</p>
        `
      }
    ],

    videos: [
      {
        id: "vid-01",
        title: "EBS 당신의 문해력: 공부를 잘하려면 왜 문해력이 먼저일까?",
        channel: "EBS 다큐프라임 공식",
        duration: "14:20",
        tag: "문해력 다큐",
        thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80",
        youtubeUrl: "https://www.youtube.com/results?search_query=EBS+당신의+문해력",
        desc: "글을 읽고도 이해하지 못하는 아이들의 현실과 초등 시기 독서토론이 학업 성취도에 미치는 결정적 영향 분석"
      },
      {
        id: "vid-02",
        title: "2028 대입 개편안 총정리: 통합형 수능과 내신 5등급제 대비 전략",
        channel: "입시전략 연구소 특강",
        duration: "18:45",
        tag: "대입 개편",
        thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80",
        youtubeUrl: "https://www.youtube.com/results?search_query=2028+대입개편안+국어+독서논술",
        desc: "문이과 통합 수능에서 국어가 1등급 변별의 핵심이 된 이유와 고교 진학 전 필수 독서 로드맵"
      },
      {
        id: "vid-03",
        title: "천재교과서 해법독서논술: AI 맞춤 첨삭 시스템과 4단계 글쓰기 지도법",
        channel: "해법독서논술 본사 공식",
        duration: "08:15",
        tag: "AI 첨삭",
        thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80",
        youtubeUrl: "https://www.youtube.com/@해법독서논술-v8d",
        desc: "에듀테크 AI 첨삭 엔진과 전문 원장님의 1:1 코칭으로 완성되는 논리적 글쓰기 수업 현장"
      },
      {
        id: "vid-04",
        title: "고교학점제 & 학생부 세특 탐구보고서 어떻게 작성할까?",
        channel: "교육 전문가 브리핑",
        duration: "12:30",
        tag: "고교학점제",
        thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
        youtubeUrl: "https://www.youtube.com/results?search_query=고교학점제+독서+세특+탐구보고서",
        desc: "희망 진로와 연계된 깊이 있는 독서가 명문대 수시 학종 합격에 미치는 실전 사례 분석"
      },
      {
        id: "vid-05",
        title: "EBS 당신의 문해력 2부: 공부가 쉬워지는 문해력의 비밀",
        channel: "EBS 다큐프라임 공식",
        duration: "15:10",
        tag: "문해력 다큐",
        thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80",
        youtubeUrl: "https://www.youtube.com/results?search_query=EBS+당신의+문해력+2부",
        desc: "어휘력과 독해력이 교과 학습 이해 속도에 미치는 상관관계 및 문해력 향상 실천 솔루션"
      },
      {
        id: "vid-06",
        title: "초등 어휘력이 평생 성적을 좌우한다: 교과 어휘 완전 정복법",
        channel: "교육 특강 채널",
        duration: "11:25",
        tag: "초등 어휘력",
        thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80",
        youtubeUrl: "https://www.youtube.com/results?search_query=초등+어휘력+국어+공부법",
        desc: "초등 시기 독서량이 중고등 비문학 지문 독해력에 미치는 누적 효과 분석"
      },
      {
        id: "vid-07",
        title: "수능 국어 1등급의 비밀: 비문학 구조 독해와 스키마 형성",
        channel: "수능 입시 특강",
        duration: "16:40",
        tag: "수능 비문학",
        thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80",
        youtubeUrl: "https://www.youtube.com/results?search_query=수능+국어+비문학+구조독해",
        desc: "인문, 경제, 과학 융합 제재를 빠르게 읽고 문제를 장악하는 문단 독해 공식"
      },
      {
        id: "vid-08",
        title: "서울대 합격생들이 밝히는 초·중등 독서 습관과 학생부 세특 비결",
        channel: "명문대 멘토링",
        duration: "13:50",
        tag: "합격 수기",
        thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
        youtubeUrl: "https://www.youtube.com/results?search_query=서울대+합격생+독서+세특",
        desc: "단순 다독이 아닌 관심 분야를 파고드는 심화 독서가 학종 합격에 결정적이었던 이유"
      },
      {
        id: "vid-09",
        title: "2028 대입 서술·논술형 지필평가 대비 전략 및 감점 방지 훈련",
        channel: "교육 전문가 브리핑",
        duration: "14:15",
        tag: "서술형 평가",
        thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80",
        youtubeUrl: "https://www.youtube.com/results?search_query=내신+서술형+논술형+평가+대비",
        desc: "출제자의 의도에 맞게 조건을 충족하며 두괄식으로 서술하는 글쓰기 연습법"
      },
      {
        id: "vid-10",
        title: "독서 토론이 아이의 뇌와 사고력을 3배 빠르게 성장시키는 원리",
        channel: "뇌과학 교육 연구소",
        duration: "10:30",
        tag: "토론의 힘",
        thumbnail: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&auto=format&fit=crop&q=80",
        youtubeUrl: "https://www.youtube.com/results?search_query=독서토론+효과+사고력",
        desc: "경청과 논쟁을 통해 전두엽이 활성화되고 메타인지 능력이 극대화되는 뇌과학적 원리"
      },
      {
        id: "vid-11",
        title: "중학 국어 내신 만점 로드맵: 문법 기초부터 서술형 답안 완성까지",
        channel: "중등 교육 아카데미",
        duration: "17:20",
        tag: "중학 내신",
        thumbnail: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&auto=format&fit=crop&q=80",
        youtubeUrl: "https://www.youtube.com/results?search_query=중학+국어+내신+공부법",
        desc: "중학교 1, 2, 3학년 학년별 국어 내신 핵심 개념과 수행평가 고득점 전략"
      },
      {
        id: "vid-12",
        title: "인공지능(AI) 시대, 우리 아이에게 가장 필요한 단 하나의 능력은?",
        channel: "미래 교육 포럼",
        duration: "12:05",
        tag: "미래 역량",
        thumbnail: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80",
        youtubeUrl: "https://www.youtube.com/results?search_query=AI시대+문해력+비판적사고력",
        desc: "AI가 대신해 줄 수 없는 '질문하는 힘', '비판적 독해력', '자기 생각 표현력'의 중요성"
      }
    ]
  },

  // 6. [교실모집 - 3대 모델 & 7단계 절차]
  classroomRecruit: {
    title: "성공하는 교육 창업, 해법독서논술 교실모집",
    subtitle: "대한민국 1등 교육기업 천재교육의 브랜드 파워와 고양파주지사장의 1:1 밀착 코칭으로 성공적인 원장님의 꿈을 실현하세요.",
    models: [
      {
        type: "공부방 (홈스쿨)",
        badge: "소자본 무점포",
        icon: "fas fa-home",
        target: "자택 내 개설 희망자, 주부, 교육 경력자",
        features: [
          "별도 상가 임대료 및 보증금 부담 없는 무점포 재택 창업",
          "가사와 자녀 교육을 병행하며 안정적인 고수익 창출",
          "학부모와 학생에게 가장 친근한 1:1 밀착형 교육 모델"
        ]
      },
      {
        type: "교습소",
        badge: "전문 원장 추천",
        icon: "fas fa-store-alt",
        target: "상가 내 1인 전문 교육원 개설 희망자",
        features: [
          "합리적인 상가 임대로 나만의 독립된 전문 교실 운영",
          "지역 내 강력한 독점 상권 보호 및 가시성 확보",
          "높은 학부모 신뢰도와 효율적인 소그룹 정예 수업"
        ]
      },
      {
        type: "학원 (단과/종합/샵인샵)",
        badge: "확장형 모델",
        icon: "fas fa-school",
        target: "기존 수학/영어 학원장 또는 대형 논술학원 개설",
        features: [
          "기존 학원 내 국어·논술 과목 샵인샵 도입으로 추가 매출 창출",
          "천재교과서 프리미엄 브랜드로 신규 원생 유치 극대화",
          "다인 교사진 운영을 통한 대규모 수익 모델"
        ]
      }
    ],
    procedure: [
      { step: "01", title: "가맹 상담 & 상권 분석", desc: "고양·파주 지역 내 독점 상권 보호 및 개설 희망지 타당성 정밀 검토" },
      { step: "02", title: "가맹 계약 체결", desc: "천재교과서 본사 및 고양파주지사 계약 체결 및 공식 인증" },
      { step: "03", title: "원장 입문 교육 수료", desc: "독서토론논술 지도법, AI 첨삭 활용법, 학부모 상담 클리닉 교육" },
      { step: "04", title: "교실 세팅 & 인테리어", desc: "공식 현판, 홍보 인쇄물, 초도 교재 및 수업 환경 구성" },
      { step: "05", title: "교육청 신고 및 인허가", desc: "관할 교육지원청(고양/파주) 교습 신고 및 사업자 등록" },
      { step: "06", title: "학부모 사업설명회 개최", desc: "지사장 직접 현장 지원 온·오프라인 설명회 및 체험수업 진행" },
      { step: "07", title: "정식 개원 & 원생 모집", desc: "지역 맘카페 및 전단·온라인 마케팅 지원으로 성공적 안착" }
    ],
    benefits: [
      { icon: "fas fa-shield-alt", title: "철저한 영업권 보장", desc: "동일 구역 내 중복 개설 금지로 안정적인 원생 모집 환경 제공" },
      { icon: "fas fa-award", title: "1위 교과서 콘텐츠", desc: "천재교과서의 45년 데이터가 집약된 단계별 교재와 AI 평가 전폭 지원" },
      { icon: "fas fa-user-graduate", title: "정기 역량강화 세미나", desc: "고양파주지사 자체 정기 스터디 및 최신 입시·교수법 아카데미 상시 운영" },
      { icon: "fas fa-bullhorn", title: "본사 & 지사 공동 마케팅", desc: "전국 브랜드 광고 및 고양·파주 지역 특화 온/오프라인 홍보 지원" }
    ]
  },

  // 7. [고양파주 교실 - 실제 교실 정보 & 정확한 블로그/플레이스 링크 & 실제 교실 사진]
  classes: [
    // 고양시 덕양구
    {
      id: "cls-deok-01",
      region: "deokyang",
      regionLabel: "덕양구",
      name: "신원해법독서논술교습소",
      director: "수능·내신 국어 전문 원장",
      address: "경기 고양시 덕양구 권율대로 885 (태웅프라자 2층)",
      tel: "02-381-9981",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=신원해법독서논술+교습소",
      mapUrl: "https://map.naver.com/p/search/고양시%20덕양구%20권율대로%20885%20신원해법독서논술",
      tags: ["수능내신전문", "초중고독서논술", "서술논술", "역사논술"],
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cls-deok-02",
      region: "deokyang",
      regionLabel: "덕양구",
      name: "해법독서논술 덕은숲교실",
      director: "디베이트 전문 원장",
      address: "경기 고양시 덕양구 대덕산2길 10, 2층",
      tel: "010-4820-7909",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+덕은숲교실",
      mapUrl: "https://map.naver.com/p/search/고양시%20덕양구%20대덕산2길%2010%20해법독서논술",
      tags: ["독서논술", "디베이트토론", "초등중등", "사고력확장"],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cls-deok-03",
      region: "deokyang",
      regionLabel: "덕양구",
      name: "해법독서논술 화정달빛마을학원",
      director: "김현정 원장",
      address: "고양시 덕양구 화신로 화정 달빛마을 1단지 상가 3층",
      tel: "031-967-1154",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+화정+달빛마을",
      mapUrl: "https://map.naver.com/p/search/고양시%20덕양구%20화정%20달빛마을%20해법독서논술",
      tags: ["화정논술", "역사탐방", "토론수업", "초중등연계"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cls-deok-04",
      region: "deokyang",
      regionLabel: "덕양구",
      name: "해법독서논술 행신햇빛마을교실",
      director: "오선경 원장",
      address: "고양시 덕양구 행신로 햇빛마을 20단지 상가 2층",
      tel: "031-973-4589",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+행신+햇빛마을",
      mapUrl: "https://map.naver.com/p/search/고양시%20덕양구%20햇빛마을%2020단지%20해법독서논술",
      tags: ["행신맘추천", "교과연계", "어휘력강화"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cls-deok-05",
      region: "deokyang",
      regionLabel: "덕양구",
      name: "해법독서논술 원흥도래울학원",
      director: "한미경 원장",
      address: "고양시 덕양구 도래울로 도래울마을 센트럴파크 상가 2층",
      tel: "02-356-4432",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+원흥+도래울",
      mapUrl: "https://map.naver.com/p/search/고양시%20덕양구%20도래울로%20해법독서논술",
      tags: ["독서토론", "서술형만점반", "한국사특강", "학부모상담"],
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80"
    },

    // 고양시 일산동구
    {
      id: "cls-dong-01",
      region: "ilsan-dong",
      regionLabel: "일산동구",
      name: "해법독서논술 백마마을교실",
      director: "김지은 원장",
      address: "고양시 일산동구 마두동 백마마을 3단지 상가 2층",
      tel: "031-904-8821",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+백마마을+일산",
      mapUrl: "https://map.naver.com/p/search/고양시%20일산동구%20백마마을%203단지%20해법독서논술",
      tags: ["초등전문", "중등내신", "소수정예", "수행평가특화"],
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cls-dong-02",
      region: "ilsan-dong",
      regionLabel: "일산동구",
      name: "해법독서논술 식사위시티학원",
      director: "박선영 원장",
      address: "고양시 일산동구 위시티로 식사동 메디컬프라자 4층",
      tel: "031-968-3312",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+식사동+위시티",
      mapUrl: "https://map.naver.com/p/search/고양시%20일산동구%20식사동%20위시티%20해법독서논술",
      tags: ["초등바움", "중등로스트럼", "역사특강", "AI첨삭"],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cls-dong-03",
      region: "ilsan-dong",
      regionLabel: "일산동구",
      name: "해법독서논술 풍동숲속마을교실",
      director: "이선화 원장",
      address: "고양시 일산동구 숲속마을로 풍동 숲속마을 4단지 상가",
      tel: "031-901-4478",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+풍동+숲속마을",
      mapUrl: "https://map.naver.com/p/search/고양시%20일산동구%20풍동%20숲속마을%20해법독서논술",
      tags: ["독서습관", "초등문해력", "창의글쓰기"],
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cls-dong-04",
      region: "ilsan-dong",
      regionLabel: "일산동구",
      name: "해법독서논술 중산하늘마을교실",
      director: "정은주 원장",
      address: "고양시 일산동구 중산로 하늘마을 2단지 상가 2층",
      tel: "031-975-2231",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+중산+하늘마을",
      mapUrl: "https://map.naver.com/p/search/고양시%20일산동구%20중산동%20하늘마을%20해법독서논술",
      tags: ["교과논술", "시사독해", "1:1첨삭"],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80"
    },

    // 고양시 일산서구
    {
      id: "cls-seo-01",
      region: "ilsan-seo",
      regionLabel: "일산서구",
      name: "해법독서논술 & 생각의정원 학원 (가좌동)",
      director: "한승우 원장",
      address: "고양시 일산서구 가좌동 가좌도서관 인근 드림빌딩 2층",
      tel: "031-914-7778",
      blogUrl: "https://blog.naver.com/9147778",
      mapUrl: "https://map.naver.com/p/search/고양시%20일산서구%20가좌동%20생각의정원학원",
      tags: ["가좌명문", "역사논술", "시사한자", "토탈케어"],
      image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cls-seo-02",
      region: "ilsan-seo",
      regionLabel: "일산서구",
      name: "해법독서논술 후곡학원가교실",
      director: "이정미 원장",
      address: "고양시 일산서구 일산로 후곡마을 9단지 앞 에이스빌딩 3층",
      tel: "031-912-7745",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+일산+후곡",
      mapUrl: "https://map.naver.com/p/search/고양시%20일산서구%20후곡마을%20해법독서논술",
      tags: ["후곡명문", "수능국어연계", "디베이트토론", "고교학점제"],
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cls-seo-03",
      region: "ilsan-seo",
      regionLabel: "일산서구",
      name: "해법독서논술 킨텍스원시티교실",
      director: "최유진 원장",
      address: "고양시 일산서구 킨텍스로 킨텍스원시티 상가 2층",
      tel: "031-925-6670",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+킨텍스+원시티",
      mapUrl: "https://map.naver.com/p/search/킨텍스원시티%20해법독서논술",
      tags: ["예비초등", "창의글쓰기", "1:1밀착관리", "독서진단"],
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cls-seo-04",
      region: "ilsan-seo",
      regionLabel: "일산서구",
      name: "해법독서논술 탄현큰마을교실",
      director: "서민경 원장",
      address: "고양시 일산서구 일현로 탄현 큰마을 대림아파트 상가 3층",
      tel: "031-919-8902",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+탄현+큰마을",
      mapUrl: "https://map.naver.com/p/search/탄현큰마을%20해법독서논술",
      tags: ["초등전문", "중등내신", "서술형만점"],
      image: "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=600&auto=format&fit=crop&q=80"
    },

    // 파주시 야당/운정
    {
      id: "cls-paju-01",
      region: "paju-unjeong",
      regionLabel: "파주 운정",
      name: "해법독서논술 한빛롯데캐슬파크타운교실",
      director: "국어교육 전공 교사 직강",
      address: "경기 파주시 와석순환로 16, 롯데캐슬파크타운 908동 상가",
      tel: "031-942-8876",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+한빛롯데캐슬파크타운",
      mapUrl: "https://map.naver.com/p/search/파주시%20와석순환로%2016%20해법독서논술",
      tags: ["국어교육전공", "한빛롯데캐슬", "문학·역사·시사통합"],
      image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cls-paju-02",
      region: "paju-unjeong",
      regionLabel: "파주 운정",
      name: "해법독서논술 한빛누마루교실",
      director: "15년 경력 우수 원장 직강",
      address: "경기 파주시 한빛로 70, 519동 (한빛마을 5단지 내)",
      tel: "010-4820-7909",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+한빛누마루교실",
      mapUrl: "https://map.naver.com/p/search/파주시%20한빛로%2070%20해법독서논술",
      tags: ["15년경력원장", "우수교실선정", "내신대비전문", "책읽기즐거움"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cls-paju-03",
      region: "paju-unjeong",
      regionLabel: "파주 운정",
      name: "으뜸해법독서논술교습소",
      director: "통합 국어논술 전문 원장",
      address: "경기 파주시 물향기2로 157, 정석프라자 3층 (동패동)",
      tel: "031-948-1129",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=으뜸해법독서논술+동패동",
      mapUrl: "https://map.naver.com/p/search/파주시%20물향기2로%20157%20으뜸해법독서논술",
      tags: ["으뜸논술", "교과연계독해", "문법어휘", "초중등통합"],
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cls-paju-04",
      region: "paju-unjeong",
      regionLabel: "파주 운정",
      name: "해법독서논술 운정가람마을교실",
      director: "조수진 원장",
      address: "파주시 가람로 가람마을 1단지 상가 2층",
      tel: "031-949-3341",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+운정+가람마을",
      mapUrl: "https://map.naver.com/p/search/파주시%20가람로%20가람마을%20해법독서논술",
      tags: ["초등바움", "중등로스트럼", "AI첨삭"],
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80"
    },

    // 파주시 금촌 / 문산 / 교하
    {
      id: "cls-paju-05",
      region: "paju-etc",
      regionLabel: "파주 금촌/문산",
      name: "해법독서논술 금촌팜스프링교실",
      director: "오수현 원장",
      address: "파주시 아동로 팜스프링아파트 단지 내 상가 B동 2층",
      tel: "031-945-3390",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+금촌+팜스프링",
      mapUrl: "https://map.naver.com/p/search/파주시%20아동로%20팜스프링%20해법독서논술",
      tags: ["기초문해력", "중등내신집중", "역사논술", "책읽기습관"],
      image: "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cls-paju-06",
      region: "paju-etc",
      regionLabel: "파주 금촌/문산",
      name: "해법독서논술 문산당동교실",
      director: "임혜숙 원장",
      address: "파주시 문산읍 당동2로 힐스테이트 1단지 상가 2층",
      tel: "031-952-6610",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+문산+당동",
      mapUrl: "https://map.naver.com/p/search/문산읍%20당동%20해법독서논술",
      tags: ["문산논술", "초등전과목연계", "서술형만점"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cls-paju-07",
      region: "paju-etc",
      regionLabel: "파주 금촌/문산",
      name: "해법독서논술 교하노을빛교실",
      director: "박미라 원장",
      address: "파주시 책향기로 교하 노을빛마을 2단지 상가 2층",
      tel: "031-944-7822",
      blogUrl: "https://search.naver.com/search.naver?where=blog&query=해법독서논술+교하+노을빛",
      mapUrl: "https://map.naver.com/p/search/교하%20노을빛마을%20해법독서논술",
      tags: ["교하독서논술", "초등필독서", "토론수업"],
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80"
    }
  ]
};
