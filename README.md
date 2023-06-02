# COVID-19 현황판 만들기

> COVID-19 데이터를 활용해서 대쉬보드를 만들어보는 스터디에 사용된 코드 입니다. 이번 스터디의 주된 목적은 소규모 IoT 서비스에서 데이터 수집을 위한 기술을 연습하는 것 입니다. Node 기반의 `Express`를 사용해서 스터디를 진행하고, Python 기반의 `FastAPI`로 변경을 목표로 합니다. 두번째 목표는 간단한 그래프를 활용해서 수집된 IoT 정보를 시각화하는 것입니다. 현재는 `Gatsby`를 사용해서 스터디를 진행하고, 이후에 `Next.js`로 변경을 목표로 합니다. 학습용 코드이기 때문에 코드 품질이 좋지 않을 수 있으니 참고하실 때 주의하세요. 감사합니다.

## 프로젝트 설정

- `Node.js` == `LTS(v18)`
  - 사용되는 패키지 중에서 v18 이상에서 약간의 오류가 발생할 수 있으니 가능하면 `v18`을 사용하세요.
- VSCode
  - `Web Storm`의 경우 사용제품이라서 스터디에 어울리지 않아서, VSCode를 사용합니다.

## 실행방법

### for `api`

1. `npm install`을 사용해서 필요한 패키지 설치
1. `googlesheets` 폴더에서 아래 과정을 진행
   1. [Google Cloud](https://console.cloud.google.com)에서 인증관련 `json`을 다운로드 후 `credentials.json`으로 이름 변경
   1. `googlesheets` 폴더에서 `main.js`를 실행하면, `accessToken.json`을 생성
   1. `main.js` 파일에서 `spreadsheetId`를 수정
   1. `node main.js`를 실행해서 Google Sheets의 데이터를 JSON으로 변경
1. `node index.js`를 사용해서 데이터베이스 생성 및 서버(`8080`)를 실행

### for `web`

1. `npm install`을 사용해서 필요한 패키지 설치
2. `npm run develop`를 사용해서 실행
