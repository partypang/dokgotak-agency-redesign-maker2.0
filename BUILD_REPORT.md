# 독고탁 에이젼시 2.0 빌드 리포트

## 패키지

- 산출물: `dokgotak-agency-20.zip`
- 패키지명: `dokgotak-agency`
- 버전: `2.0.0`

## 반영 사항

- 기존 2.0 상세페이지 리디자인 기능을 유지하면서 앱 전체 브랜딩을 `독고탁 에이젼시 2.0`으로 변경했습니다.
- 메타데이터, 앱 제목, 사이드바, 아이콘 이니셜, README, CHANGELOG, DEPLOYMENT 문서를 새 이름으로 정리했습니다.
- 로컬 저장소 키와 IndexedDB 이름을 독고탁 에이젼시 전용 키로 변경했습니다.
- API 분석/이미지 생성/섹션 편집 프롬프트에 서비스명 보호 규칙을 적용했습니다.

## 검증

아래 명령으로 확인했습니다.

```bash
npm run lint
npm run build
```

## 참고

- `node_modules`와 `.next`는 최종 ZIP에서 제외합니다.
- 보안 감사에서 Next.js 내부 `postcss` 관련 moderate advisory가 남을 수 있습니다. 자동 수정 경로가 breaking downgrade로 이어질 수 있어 무조건 적용하지 않았습니다.

## 잠금파일 메모

`pdfjs-dist 5.6.205`의 npm 배포 integrity 값이 현재 registry 값과 맞도록 `package-lock.json`을 정리했습니다. 이 수정 후 `npm ci --ignore-scripts`, `npm run lint`, `npm run build`를 다시 통과했습니다.
