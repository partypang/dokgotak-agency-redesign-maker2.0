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
