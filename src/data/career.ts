import type { Project } from "@/types/career";

export const projects: Project[] = [
  {
    name: "삼성 패밀리허브 웹앱",
    platforms: ["Web"],
    role: "Web 개발 및 유지보수",
    period: "2017.09 - 2018.10",
    description: "삼성 패밀리허브 냉장고에 탑재되는 웹 애플리케이션 개발.",
    details: [
      {
        platform: "푸드알리미 (viewinside)",
        techStack: ["AngularJS", "Java", "Tizen"],
        items: [
          "냉장고 내부 사진 확인 및 유통기한 관리",
          "냉장실 내부 페이지 신규 기능 추가",
          "푸드 리스트 페이지 신규 기능 추가",
          "식품인식 API 이식",
          "이마트 장바구니 연동",
        ],
      },
      {
        platform: "푸드레시피",
        techStack: ["AngularJS", "Java", "Tizen"],
        items: ["레시피 제공 기능", "냉장고 속 재료 연동 장바구니 기능"],
      },
      {
        platform: "Club Des Chefs",
        techStack: ["AngularJS", "Java", "Tizen"],
        items: ["셰프 조리 동영상 제공", "레시피 제공 기능"],
      },
    ],
  },
  {
    name: "디스플레이 색상 보정 툴",
    platforms: ["Android", "Windows"],
    role: "Android, Windows 개발 및 유지보수",
    period: "2018.10 - 2020.01",
    description: "MDC 통신을 통해 연결된 디스플레이의 화면 상태를 조정하는 툴.",
    details: [
      {
        platform: "Android",
        techStack: ["Java", "Camera2", "OpenCV"],
        items: [
          "Camera2 API로 디스플레이 촬영 후 OpenCV로 분석",
          "MDC 통신으로 디스플레이 배열 및 현재 상태를 수신하여 레이아웃으로 시각화",
          "MDC 통신으로 분석값 전달하여 디스플레이 색상값 조정",
        ],
      },
      {
        platform: "Windows (WPF)",
        techStack: ["C#", "WPF"],
        items: [
          "Canon Camera SDK 연동으로 DSLR 원격 제어 및 촬영 기능 구현",
          "MDC 통신으로 분석값 전달하여 디스플레이 색상값 조정",
          "특정 좌표의 색코드를 변환하여 디스플레이로 전달",
          "C++ 선행 코드를 C#으로 포팅하여 동일 기능 구현",
          "윈도우 폼 크기 변경 시 Anchor를 이용한 레이아웃 고정/이동 기능 구현",
          "페이지 내 스크롤바 구현",
        ],
      },
    ],
  },
  {
    name: "구독 서비스 중계 플랫폼",
    platforms: ["Android"],
    role: "Android 개발",
    period: "2020.03 - 2020.05",
    description:
      "구독 옵션을 제공하는 서비스들을 리스트로 보여주고 사용자에게 홍보 및 구독 서비스를 신청할 수 있도록 하는 플랫폼.",
    details: [
      {
        platform: "Android",
        techStack: ["Java", "Retrofit", "Realm"],
        items: [
          "구독 서비스 리스트 및 신청 기능 개발",
          "Retrofit을 이용한 API 통신 구현",
          "Realm을 이용한 로컬 DB 구현",
        ],
      },
    ],
  },
  {
    name: "카테고리 기반 데일리 질문 답변 앱",
    platforms: ["Android", "iOS"],
    role: "Android, iOS 개발",
    period: "2020.06 - 2020.10",
    description:
      "매일 선택한 카테고리에 대한 질문이 배달되고 해당 질문에 대한 답을 저장하는 서비스. 런칭 이후 사용자 의견 반영 및 버그 수정.",
    details: [
      {
        platform: "Android",
        techStack: ["Java", "Retrofit2", "Realm", "FCM"],
        items: [
          "Retrofit2를 이용한 API 통신 구현",
          "Realm을 이용한 로컬 DB 구현",
          "Firebase Cloud Messaging 푸시 알림 구현",
          "Google Play Billing 인앱 결제 구현",
          "카카오 OAuth 로그인 구현",
          "Google Play Console을 통한 앱 등록, 리젝 사유 분석 및 대응, 프로덕션 배포",
        ],
      },
      {
        platform: "iOS",
        techStack: ["Swift", "Moya", "RxMoya", "Realm"],
        items: [
          "Moya / RxMoya를 이용한 API 통신 구현",
          "Realm을 이용한 로컬 DB 구현",
          "Apple StoreKit 인앱 결제 구현",
          "Firebase Cloud Messaging 푸시 알림 구현",
          "카카오, 애플 OAuth 로그인 구현",
          "App Store Connect를 통한 앱 등록, 리젝 사유 분석 및 대응, 프로덕션 배포",
        ],
      },
    ],
  },
  {
    name: "Flutter 커플 맞춤 앱",
    platforms: ["Flutter"],
    role: "Flutter 개발",
    period: "2020.10 - 2020.11",
    description:
      "커플·모임 맞춤 제작 앱 솔루션 기획.\n사진·텍스트를 교체해 고객별로 커스터마이징 가능한 형태로 설계.",
    details: [
      {
        platform: "Flutter",
        techStack: ["Flutter", "Dart"],
        items: [
          "기억력 카드 매칭 게임 개발",
          "고객별 사진·텍스트 교체가 가능한 솔루션 형태로 앱 구조 설계",
        ],
      },
    ],
  },
  {
    name: "자세 추정 모델을 이용한 게임 개발",
    platforms: ["Android"],
    role: "Android 개발",
    period: "2021.01 - 2021.04",
    description:
      "TensorFlow PoseNet을 이용해 사용자의 자세를 추정하고 얻은 값을 가공하여 게임으로 구현.",
    details: [
      {
        platform: "Android",
        techStack: ["Kotlin", "CameraX", "TensorFlow PoseNet", "MVVM"],
        items: [
          "CameraX preview를 프레임 단위로 분할 후 PoseNet 모델에 입력",
          "추정된 관절 좌표를 기반으로 preview 위에 Skeleton 오버레이 렌더링",
          "스켈레톤의 위치, 속도, 각도를 계산하여 사용자 동작 인식 로직 구현",
          "게임 대기, 목록, 상세, 랭킹, 게임, 결과 화면 구성",
        ],
      },
    ],
  },
  {
    name: "사내 출결관리 앱",
    platforms: ["Android", "iOS"],
    role: "Android, iOS 개발",
    period: "2021.05 - 2021.08",
    description:
      "사내 출결관리 앱 개발 및 런칭.\nAndroid 기존 MVP 앱 리팩토링.\niOS 신규 개발.",
    details: [
      {
        platform: "Android",
        techStack: ["Kotlin", "MVVM", "CameraX", "Retrofit2", "FCM"],
        items: [
          "MVC/Activity 구조를 MVVM 패턴으로 리팩토링, Activity/Fragment 병행 구조로 변경",
          "API 통신 데이터 암호화 대응을 위해 RSA, AES, 해시 암복호화 코드 구현",
          "CameraX를 이용한 QR 코드 스캔 및 WebSocket 통신을 통한 웹페이지 로그인 구현",
          "Firebase Cloud Messaging 클라이언트 구현",
          "TableLayout으로 구현된 리스트 화면을 RecyclerView로 리팩토링",
          "중복되는 뷰를 Custom View로 추출",
          "Kotlin Android Extension(KTX) 지원 중단 대응 리팩토링",
          "Retrofit2를 이용한 API 연동 구현",
          "다크모드 구현",
          "Google Play Console을 통한 앱 등록 및 프로덕션 배포",
        ],
      },
      {
        platform: "iOS",
        techStack: ["Swift", "Moya", "RxMoya", "RxSwift", "SnapKit", "FCM"],
        items: [
          "API 통신 데이터 암호화 대응을 위해 RSA, AES, 해시 암복호화 코드 구현",
          "AVFoundation을 이용한 QR 코드 스캔 및 WebSocket 통신을 통한 웹페이지 로그인 구현",
          "Moya / RxMoya를 이용한 API 연동 구현",
          "Storyboard, Auto Layout, SnapKit을 이용한 화면 구현",
          "Navigation Controller, TabBarController를 이용한 화면 전환",
          "Firebase Cloud Messaging 클라이언트 구현",
          "중복되는 뷰를 Custom View로 추출",
          "Collection View를 사용해 리스트 화면 구현",
          "다크모드 대응",
          "App Store Connect를 통한 앱 등록 및 프로덕션 배포",
        ],
      },
    ],
  },
  {
    name: "클라우드 인프라 구축 자동화 및 시각화 툴",
    platforms: ["Web"],
    role: "Frontend 개발",
    period: "2021.09 - 2022.01",
    description:
      "퍼블릭 클라우드(Azure, AWS, Ncloud) 인프라를 드래그 앤 드롭으로 시각적으로 구성·편집하고, 구성 데이터를 백엔드로 전달해 Terraform 기반 자동 배포로 이어지는 툴의 프론트엔드 개발.",
    details: [
      {
        platform: "Frontend",
        techStack: ["React", "SCSS", "Recoil"],
        items: [
          "드래그 앤 드롭으로 클라우드 인프라 구성요소를 배치하고 연결하는 시각화 편집기 구현",
          "Azure, AWS, Ncloud 각 클라우드 벤더별 리소스 컴포넌트 구현",
          "기존 인프라 데이터를 불러와 다이어그램으로 시각화하는 기능 구현",
          "시각화 편집기에서 구성한 인프라 데이터를 백엔드로 전달하여 Terraform 배포로 이어지는 흐름 구현",
          "Recoil을 이용한 인프라 구성 상태 관리",
          "Axios를 이용한 백엔드 API 통신 구현",
        ],
      },
    ],
  },
  {
    name: "핀테크 서비스 앱 개발 및 출시",
    platforms: ["Android"],
    role: "Android 개발 및 유지보수",
    period: "2022.02 - 2022.06",
    description:
      "레거시 프로젝트인 베타 앱의 신규 기능 개발 및 유지보수.\n베타 앱을 기반으로 아키텍처 전면 리팩토링 및 UI 리뉴얼을 거쳐 정식 서비스 출시.",
    details: [
      {
        platform: "정식 서비스 리뉴얼 및 출시",
        description: "2022.05 - 2022.06",
        techStack: [
          "Kotlin",
          "MVVM",
          "CameraX",
          "Retrofit2",
          "Navigation",
          "Firebase",
        ],
        items: [
          "MVC/Activity 구조를 MVVM 패턴으로 리팩토링, Activity/Fragment 병행 구조로 변경",
          "HttpURLConnection을 Retrofit2로 마이그레이션",
          "RelativeLayout을 ConstraintLayout으로 수정",
          "중복되는 뷰를 Custom View로 추출",
          "정식 서비스 디자인에 맞춰 전체 화면 수정 및 스타일 가이드(폰트·컬러·스타일) 적용",
          "Navigation Components로 페이지 탐색 관리",
          "Firebase App Distribution으로 테스트 배포 버전 관리",
          "Firebase Crashlytics 추가하여 비정상 종료 모니터링",
        ],
      },
      {
        platform: "Beta 신규 기능 개발 및 유지보수",
        description: "2022.02 - 2022.04",
        techStack: ["Kotlin", "MVC", "Camera2", "CameraX", "Firebase"],
        items: [
          "베타 오픈 후 수정 사항 반영 및 사용자 요청 사항 개발",
          "특정 기기에서 주민등록증 인증 실패 문제를 재현·분석하여 Camera2 레거시 코드를 CameraX로 마이그레이션해 해결",
          "Firebase App Distribution으로 테스트 배포 버전 관리",
          "Firebase Crashlytics 추가하여 비정상 종료 모니터링",
        ],
      },
    ],
  },
  {
    name: "전기차 충전소 운영 현황 시각화 툴",
    platforms: ["Web", "Backend"],
    role: "Frontend, Backend 개발",
    period: "2023.01",
    description:
      "전기차 충전소 운영 현황을 시각화하고 실시간 모니터링을 돕는 풀스택 툴 개발.",
    details: [
      {
        platform: "Frontend",
        techStack: ["React", "Recoil", "React Query", "Tailwind"],
        items: [
          "Axios로 백엔드 API 호출하여 충전소 운영 데이터 수신",
          "전기차 충전소 운영 현황 시각화 및 실시간 모니터링 화면 구현",
          "AWS EC2에 프론트 배포 후 NGINX로 외부 접속 가능하도록 구성",
        ],
      },
      {
        platform: "Backend",
        techStack: ["Java", "Spring Boot", "AWS EC2", "NGINX"],
        items: [
          "AWS EC2에 Spring Boot 서버 구축",
          "NGINX를 이용하여 프론트가 내부 서버에 요청하도록 구축",
          "DB에서 필요한 데이터를 가져오는 API 작업",
          "프론트에서 필요로 하는 데이터를 요청하고 받을 수 있도록 API 개발",
        ],
      },
    ],
  },
  {
    name: "전기차 충전 A/S 관리 백오피스",
    platforms: ["Android", "Web"],
    role: "Android, Frontend 개발",
    period: "2023.02",
    description:
      "현장 작업자·관리자용 Android 앱과 고객센터·관리자용 웹 백오피스 툴 개발.",
    details: [
      {
        platform: "Android",
        description: "현장 작업자·관리자용",
        techStack: ["Kotlin", "Android"],
        items: [
          "웹에서 배정된 A/S 태스크를 현장 단말기에서 확인",
          "태스크 처리 결과를 현장에서 직접 등록",
        ],
      },
      {
        platform: "Web",
        description: "고객센터·관리자용",
        techStack: ["React", "Recoil", "React Query", "Tailwind"],
        items: [
          "고객센터 및 외부 연계 업체로 접수된 A/S 요청 등록",
          "관리자가 등록된 A/S를 담당자에게 배정",
          "담당자별 태스크 목록 및 처리 결과 확인",
        ],
      },
    ],
  },
  {
    name: "골프 스코어를 이용한 커뮤니티 앱",
    platforms: ["React", "iOS", "Android"],
    role: "React, iOS, Android 개발",
    period: "2023.05 - 2023.12",
    description:
      "iOS, Android 네이티브 웹뷰 위에서 동작하는 골프 스코어 커뮤니티 앱.\n네이티브(iOS/Android), 웹뷰(React), 백오피스까지 1인 개발.",
    details: [
      {
        platform: "React",
        techStack: ["React", "TypeScript", "Recoil", "React Query", "MSW"],
        items: [
          "iOS, Android 네이티브 웹뷰에서 동작하는 웹 개발",
          "Recoil을 이용한 상태 관리",
          "MSW로 목업 API를 구축하여 백엔드 개발 상태에 구애받지 않고 프론트 작업",
          "Recoil selector와 React Query를 이용한 데이터 캐시 관리",
          "Custom hook을 이용한 로직 재사용",
          "네이티브와의 통신을 위한 Bridge 작업",
          "토큰 만료 시 axios 인터셉터를 이용한 재발행 로직 구축",
          "OAuth 로그인 구현 (카카오, 네이버, 구글)",
        ],
      },
      {
        platform: "iOS",
        techStack: ["Swift", "Moya"],
        items: [
          "Firebase Cloud Messaging 푸시 알림 구현",
          "카메라 및 앨범 선택 기능 구현",
          "JWT 토큰 만료 시 자동 재발행 로직 구축",
          "JWT 토큰을 웹과 동기화하는 로직 구축",
          "사진을 서버에 업로드 후 결과값을 웹으로 전달하는 로직 구축",
          "OAuth 로그인 구현 (카카오, 네이버, 구글, 애플)",
          "마켓 이동 및 알림 설정 화면 이동 구현",
        ],
      },
      {
        platform: "Android",
        techStack: ["Kotlin", "Retrofit2"],
        items: [
          "Firebase Cloud Messaging 푸시 알림 구현",
          "카메라 및 앨범 선택 기능 구현",
          "JWT 토큰 만료 시 자동 재발행 로직 구축",
          "JWT 토큰을 웹과 동기화하는 로직 구축",
          "사진을 서버에 업로드 후 결과값을 웹으로 전달하는 로직 구축",
          "OAuth 로그인 구현 (카카오, 네이버, 구글)",
          "마켓 이동 및 알림 설정 화면 이동 구현",
        ],
      },
      {
        platform: "Admin",
        techStack: ["React", "TypeScript", "Recoil", "React Query"],
        items: ["서비스 관리용 백오피스 개발"],
      },
    ],
  },
  {
    name: "택시 태블릿 광고/엔터테인먼트 시스템",
    platforms: ["Android"],
    role: "Android 개발 및 유지보수",
    period: "2024.04 - 2024.09",
    description:
      "택시 뒷좌석 태블릿에서 동작하는 광고/엔터테인먼트 제공 시스템 유지보수.",
    details: [
      {
        platform: "Android",
        techStack: ["Java", "ExoPlayer", "Media3"],
        items: [
          "ExoPlayer에서 Media3로 마이그레이션하여 최신 미디어 아키텍처 대응",
          "외부 저장장치 연동 라이브러리 마이그레이션으로 안정성 개선",
          "JCenter 종료 대응, MavenCentral 전환 및 최신 라이브러리에 맞춰 마이그레이션",
          "네트워크 오류 핸들링 개선으로 앱 안정성 향상",
        ],
      },
    ],
  },
  {
    name: "디바이스 간 양방향 통신 앱",
    platforms: ["Android", "iOS", "Backend"],
    role: "Android, iOS, Backend 개발 및 유지보수",
    period: "2024.04 - 2024.09",
    description:
      "Android 기반의 디바이스 간 양방향 통신 앱 유지보수 및 iOS 신규 개발.",
    details: [
      {
        platform: "Android",
        techStack: ["Java", "NDK", "MVVM", "Room DB"],
        items: [
          "NDK 버전을 16으로 마이그레이션하여 최신 빌드 환경 및 호환성 확보",
          "MVP에서 MVVM 아키텍처 전환 및 Room DB 도입으로 코드 유지보수성 개선",
          "음성 코덱 Silk → OPUS 전환으로 크로스 플랫폼 호환성 확보",
          "API 호출 인터셉터를 통해 네트워크 상태 확인 및 로딩 처리 자동화",
        ],
      },
      {
        platform: "iOS",
        techStack: ["Swift", "Swift-NIO"],
        items: ["신규 프로젝트 설계 및 개발", "Android JNI 로직 Swift 포팅"],
      },
      {
        platform: "Backend",
        techStack: ["Spring Boot"],
        items: [
          "인증, 토큰 발급, 권한 관리 등 핵심 로직 설계 및 구현",
          "RSA 기반 사용자 인증 시스템 구축",
        ],
      },
    ],
  },
  {
    name: "사내 디바이스 생산·등록·테스트 관리 앱",
    platforms: ["Android"],
    role: "Android 개발 및 유지보수",
    period: "2024.04 - 2025.12",
    description:
      "사내 디바이스의 생산, 등록, 테스트 과정을 통합 관리하기 위한 Android 앱 개발 및 연동 Python 프로그램 개발.",
    details: [
      {
        platform: "Android",
        techStack: ["Java", "Kotlin"],
        items: [
          "기기 정보(eSIM(IMEI, EID), Wi-Fi MAC 주소 등) 수집 로직 구현",
          "외부 기기와의 USB, RS232, GPIO 통신 로직 구현",
          "생산용 디바이스 등록 관리 기능 개선",
          "Python 기반 시리얼 통신 프로그램과 연동하여 검증 자동화",
          "서버 응답을 중첩된 문자열 JSON에서 표준 JSON 구조로 개선하여 파싱 처리 안정성과 유지보수성 강화",
        ],
      },
      {
        platform: "Python",
        techStack: ["Python"],
        items: [
          "Android 생산 관리 앱과 시리얼 포트를 통해 연동되는 Python 프로그램 개발",
          "USB-Serial 연결을 통해 디바이스와 문자열 데이터를 송수신하며 테스트, 등록, 상태 확인 등 목적에 맞는 통신 로직 구현",
          "생산 현장에서 디바이스 식별값, 상태 코드 등을 실시간으로 전송·수신하여 자동화된 검증 프로세스 지원",
        ],
      },
    ],
  },
  {
    name: "디지털 트윈 연계 기반 가상센서 프레임워크 개발",
    platforms: ["React", "Backend"],
    role: "React, Spring Boot 개발 및 유지보수",
    period: "2025.03 - 2025.12",
    description:
      "실물센서, 가상센서, 디지털트윈센서의 데이터를 확인하고 센서 재학습과 이상 감지를 관리하는 프레임워크 개발.",
    details: [
      {
        platform: "React",
        techStack: ["React", "TypeScript", "Jotai", "Bootstrap", "Sass"],
        items: [
          "상태 관리 라이브러리를 Redux에서 Jotai로 점진적으로 마이그레이션",
          "파일 업로드 및 다운로드 기능 구현",
          "Bootstrap을 활용한 기존 UI 화면 리팩터링 및 신규 화면 개발",
          "node-sass → sass로 sass 모듈 교체",
          "불필요한 레거시 모듈 제거 및 사용 중인 모듈 업데이트",
          "일정 시간 미사용 시 자동 로그아웃 처리 기능 구현",
          "API 호출 시 인터셉터를 활용해 로딩 처리 및 로그인 상태 검증 로직 추가",
        ],
      },
      {
        platform: "Spring Boot",
        techStack: ["Java", "Spring Boot"],
        items: [
          "사용자 로그인 시 히스토리 기록 기능 구현",
          "기존 API 기능 개선 및 신규 기능 추가",
        ],
      },
      {
        platform: "Python",
        techStack: ["Python"],
        items: [
          "협력업체 요구에 따라 가상센서 API 테스트 프로그램 개발",
          "다양한 입력 값에 따른 센서 데이터 송수신 기능 구현",
        ],
      },
    ],
  },
  {
    name: "해외 배송대행 중계 플랫폼",
    platforms: ["React Native", "React"],
    role: "React Native, React 개발",
    period: "2026.01 - 2026.03",
    description: "해외 배송대행 중계 플랫폼 프론트 개발.",
    details: [
      {
        platform: "React Native",
        techStack: [
          "React Native",
          "TypeScript",
          "Expo Router",
          "Jotai",
          "React Query",
          "Toss Payments",
        ],
        items: [
          "기존 Thymeleaf 웹 + 네이티브 웹뷰 구조를 React Native로 100% 신규 개발",
          "기존 앱과 동일한 패키지명으로 버전 업그레이드 배포하여 기존 유저 데이터 호환성 유지",
          "Expo Router 기반 네비게이션 구조 설계 및 구현",
          "Jotai를 이용한 전역 상태 관리",
          "Toss Payments 연동 결제 플로우 구현",
          "Axios 인터셉터를 통한 JWT 토큰 재발행 및 만료 시 자동 로그아웃 처리",
          "자체 로그인 및 OAuth 소셜 로그인 구현 (애플, 구글, 네이버, 카카오)",
          "Firebase Cloud Messaging 푸시 알림 구현",
          "Expo SecureStore로 민감 데이터 암호화 저장",
          "AsyncStorage로 일반 로컬 데이터 저장 구현",
          "Fastlane을 이용한 Google Play / App Store 배포 자동화",
        ],
      },
      {
        platform: "React",
        description: "어드민",
        techStack: [
          "React",
          "TypeScript",
          "TanStack Router",
          "Jotai",
          "React Query",
          "Tailwind",
        ],
        items: [
          "기존 Thymeleaf 기반 어드민을 React로 100% 신규 개발",
          "TanStack Router 기반 라우팅 구조 설계 및 구현",
          "세션 기반 로그인 구현",
          "데이터 엑셀 내보내기 기능 구현",
        ],
      },
    ],
  },
];
