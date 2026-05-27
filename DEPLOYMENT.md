# 독고탁 에이젼시 2.0 배포 운영 방식

이 프로젝트는 2.0 버전 기준으로 로컬 작업과 라이브 발행을 분리해서 운영합니다.

## 로컬 작업

기본 수정과 테스트는 로컬에서만 확인합니다.

```bash
npm run dev:local
```

확인 주소:

```text
http://localhost:3002/
```

## 검증

라이브 발행 전에는 빌드를 확인합니다.

```bash
npm run build
```

## 라이브 발행

사용자가 "발행", "라이브 반영", "prod 배포"처럼 명시적으로 요청할 때만 Production으로 배포합니다.

```bash
npm run publish
```

## 참고

- Preview 배포만 필요할 때는 `npm run deploy:preview`를 사용합니다.
- Production 배포만 바로 실행할 때는 `npm run deploy:prod`를 사용합니다.
- 실제 Vercel 프로젝트 URL은 배포 후 발급되는 주소로 확인합니다.
- 로컬 브라우저 IndexedDB에 저장된 생성 결과는 Production으로 자동 동기화되지 않습니다.

## Vercel npm registry 설정

Vercel 설치 단계에서 내부 또는 사설 registry URL을 참조하지 않도록 루트에 `.npmrc`와 `vercel.json`을 포함했습니다.

- `.npmrc`: public npm registry 명시
- `vercel.json`: `npm ci --registry=https://registry.npmjs.org/`로 설치 명령 고정

배포 로그에 `packages.applied-caas-gateway1.internal.api.openai.org`가 다시 보이면, GitHub에 최신 `package-lock.json`이 반영되지 않은 것입니다.
