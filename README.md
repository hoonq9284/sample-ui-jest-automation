# sample-ui-jest-automation
- Selenium Webdriver와 Jest 프레임워크를 사용하여 웹 애플리케이션 테스트를 구축할 수 있는 환경을 제공합니다.
- jest-html-reporter 패키지를 이용하여 테스트 결과 보고서를 도출해낼 수 있습니다.

## 디렉토리 구조
- 📁 __tests__
    - mainPage.test.js
    - weatherPage.test.js
    - ...점진적으로 테스트 케이스 추가 가능...
- 📁 .idea
- 📁 base
    - basePage.js
- 📁 config
    - config.js
- 📁 pages
    - commonPage.js
    - mainPage.js
    - weatherPage.js
    - pageElements.js
    - ...점진적으로 테스트 스크립트 추가 가능...
- .gitignore
- jest-test-run.sh
- jest.config.js
- package-lock.json
- package.json
- README.md

## 설정 및 환경 구성
### 사전 요구사항
- `Node.js(v 14 이상)` 및 `npm` 이 설치되어 있어야 합니다.
- Chrome 브라우저가 설치되어 있어야 합니다.

### 종속성 설치
1. 프로젝트를 clone 합니다.
    ```bash
    git clone "https://github.com/hoonq9284/sample-ui-jest-automation.git"
    ```
2. 프로젝트 디렉토리로 이동한 뒤, npm 을 이용하여 필요 패키지를 설치합니다.
    ```bash
    npm install
    ```

## 테스트 실행
### 전체 테스트 실행 방법
- `npm test` 명령어를 이용하여 __tests__ 디렉토리 하위에 존재하는 테스트 케이스 파일을 모두 실행합니다. 기본적으로 병렬 구조로 실행됩니다. 테스트가 모두 완료되면, 루트 디렉토리에 `test-report.html` 파일이 생성됩니다.

### 단일 테스트 실행 방법
- `npm run test:mainPage` 명령어와 같이 __tests__ 디렉토리 하위에 존재하는 테스트 케이스 파일을 단일 실행합니다. 이는 package.json 의 scripts 필드에서 구성할 수 있습니다.

### 전체 테스트 실행 후 테스트 결과 파일 확인하기
- `./jest-test-run.sh` 명령어를 사용하면 전체 테스트를 실행하고, 이를 결과로 도출한 test-report.html 파일이 자동으로 오픈됩니다.
- 이 테스트 결과 문서는 jest-html-reporter 패키지로 생성하였습니다.

## 파일 구조 설명
### base/basePage.js
- 기본 페이지 객체로, 공통으로 사용되는 메서드를 모두 포함한 부모 클래스를 정의합니다.
- 공통으로 사용되는 메서드는 Selenium의 클릭, 입력 등의 액션을 모두 포함합니다.

### config/config.js
테스트에 필요한 환경 변수를 설정합니다. 이는 추후에 CI에서 환경 변수로 사용할 수 있습니다.
- `url` : 테스트할 도메인의 URL입니다.
- `waitTime` : 요소를 기다리는 시간(초) 입니다.

### pages/commonPage.js
- 테스트 환경 설정 및 종료를 위한 공통 로직을 정의합니다.
    - 테스트 케이스 시작 전 수행하는 `setUp()` 메서드를 구성합니다.
    - 테스트 케이스가 종료된 후 수행하는 `tearDown()` 메서드를 구성합니다.
    - 드라이버 인스턴스를 반환하는 `getDriver()` 메서드를 반환합니다.

### pages/mainPage.js
- 도메인에서 수행할 테스트 스크립트를 정의합니다.
- `commonPage` 모듈을 활용합니다.
- `BasePage` 클래스를 상속받습니다.

### __tests__/mainPage.test.js
- 기본적으로 `mainPage.js` <-> `mainPage.test.js` 와 같이 1:1 구성으로 지향합니다
    - 이는 테스트 스크립트를 함수로 정의하고, 테스트 실행 파일에서 함수를 실행하는 구조를 의미합니다.
- `commonPage` 모듈에서 정의한 setUp(), tearDown(), getDriver() 메서드를 활용하여 테스트 시나리오 시작 전과 후처리를 정의할 수 있도록 합니다.