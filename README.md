# 독고탁 에이젼시 2.0

기존 상세페이지 이미지/PDF를 업로드하면 AI가 원본 제품 정보와 구매전환 저해 요소를 분석하고, 9:16 상세페이지 섹션 이미지로 리디자인하는 Next.js 앱입니다.

## 2.0 핵심 변경점

- **독고탁 에이젼시 브랜딩 적용**: 앱 메타데이터, 사이드바, 대시보드, 패키지 이름, 아이콘/사이드바 이니셜을 DGT 기준으로 정리했습니다.
- **Hero-first 생성 흐름**: 히어로 1장을 먼저 확인한 뒤 S2~S8에 피드백을 반영해 확장하는 흐름을 명확하게 노출했습니다.
- **CRO 프롬프트 강화**: 채널별 구매 맥락, 원본 근거 보존, 허위 수치/인증/리뷰 방지, 섹션 간 레이아웃 반복 방지 규칙을 강화했습니다.
- **서비스명 보호 규칙**: 독고탁 에이젼시가 생성 이미지 안에서 제품명, 브랜드명, 로고, 후기, FAQ, CTA로 잘못 삽입되지 않도록 프롬프트를 보강했습니다.
- **결과 품질 점검**: 결과 화면에 2.0 품질 체크 카드와 프로젝트 품질 점수를 추가했습니다.
- **기획 JSON 내보내기**: 이미지 없이 프로젝트 분석/섹션 프롬프트/수정 이력을 JSON으로 다운로드할 수 있습니다.
- **섹션 수정 엔진 보강**: 수정 요청 시 제품 실물, 브랜드명, 수치, 인증, 혜택 조건을 유지하도록 편집 프롬프트를 보강했습니다.
- **빌드 안정화**: Google Fonts 원격 다운로드 의존성을 제거하고 타입 검사 스크립트를 정리했습니다.

## 로컬 실행

```bash
npm ci
npm run dev:local
```

브라우저에서 다음 주소를 엽니다.

```text
http://localhost:3002/
```

## 환경변수

`.env.example`을 참고해 필요한 키를 설정합니다.

```env
DATABASE_URL="<YOUR_NEON_POSTGRES_CONNECTION_URL>"
OPENAI_API_KEY="<YOUR_OPENAI_API_KEY>"
GOOGLE_API_KEY="<YOUR_GOOGLE_API_KEY>"
OPENAI_ANALYSIS_MODEL="gpt-5.5"
KNOWLEDGE_ACCESS_KEYS="<COMMA_SEPARATED_ACCESS_KEYS>"
KNOWLEDGE_ADMIN_KEY="<KNOWLEDGE_ADMIN_KEY>"
```

## 주요 명령어

```bash
npm run dev:local   # 로컬 개발 서버, 3002 포트
npm run build       # 프로덕션 빌드 검증
npm run start       # 빌드 결과 실행
npm run publish     # 빌드 후 Vercel Production 배포
```

## 배포

운영 방식은 `DEPLOYMENT.md`를 확인하세요. Production 배포는 사용자가 명시적으로 요청할 때만 실행하는 기준으로 정리되어 있습니다.
