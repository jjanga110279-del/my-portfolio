# GEMINI.md - 프로젝트 안내서

이 파일은 Gemini CLI 에이전트가 프로젝트를 이해하고 효율적으로 작업을 수행하기 위한 지침과 맥락을 제공합니다.

## 1. 프로젝트 개요 (Project Overview)
본 프로젝트는 **황정화(Hwang Junghwa)**님의 개인 포트폴리오 웹사이트입니다. 패션 디자이너에서 반응형 웹 콘텐츠 개발 기획자로 성장하는 과정을 보여주며, 다양한 프로젝트와 개인적인 경험을 시각적으로 전달합니다.

- **핵심 기술 스택:**
  - **Frontend:** React 19, Vite 7
  - **Styling:** Vanilla CSS (CSS Modules 미사용, 전역 및 컴포넌트 스타일링)
  - **API/Service:** EmailJS (문의 폼 전송 기능)
  - **Build Tool:** Vite

## 2. 프로젝트 구조 (Directory Structure)
- `src/`: 모든 소스 코드가 포함된 메인 디렉토리
  - `App.jsx`: 포트폴리오의 모든 섹션(Hero, About, Work, Creations, Life, Footer)이 포함된 메인 컴포넌트
  - `assets/images/`: 프로젝트에 사용된 모든 이미지 자산
    - `index.js`: 이미지 파일을 한곳에서 import하여 내보내는(re-export) 중앙 관리 파일
  - `App.css`, `index.css`: 사이트의 전체적인 디자인과 레이아웃을 담당하는 스타일시트
- `public/`: 정적 자산(파비콘, 로고 등)이 위치함
- `index.html`: 프로젝트의 진입점 (Vite 원칙에 따라 루트에 위치)

## 3. 실행 및 빌드 명령어 (Building and Running)
프로젝트를 로컬 환경에서 실행하거나 배포용으로 빌드할 때 다음 명령어를 사용합니다.

- **개발 서버 실행:** `npm run dev` (또는 Windows 환경에서 `npm run dev:win`)
- **프로젝트 빌드:** `npm run build`
- **빌드 결과물 미리보기:** `npm run preview`
- **린트 체크:** `npm run lint`

## 4. 주요 개발 컨벤션 (Development Conventions)
- **자산 관리:** 새로운 이미지를 추가할 경우 `src/assets/images/` 디렉토리에 저장하고, `src/assets/images/index.js`에 등록하여 `App.jsx`에서 일관되게 import하여 사용합니다.
- **스타일링:** Vanilla CSS를 선호하며, 레이아웃 및 디자인 수정 시 `App.css`와 `index.css`를 참조합니다.
- **환경 변수:** EmailJS 연동을 위해 `.env` 파일에 다음 변수들이 설정되어야 합니다:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`
  *에이전트는 보안을 위해 `.env` 파일의 실제 값을 로그에 남기지 않도록 주의해야 합니다.*

## 5. 작업 시 주의사항
- **index.html 위치:** 정적 배포 환경 최적화를 위해 `index.html`은 반드시 루트 디렉토리에 유지해야 합니다.
- **한국어 우선:** 사용자 요청에 따라 모든 응답 및 주석은 한국어로 작성합니다.
- **Link 처리:** `App.jsx` 내의 일부 링크는 현재 경고창(`alert`)으로 처리되어 있으므로, 실제 연결이 필요할 경우 수정이 필요합니다.
