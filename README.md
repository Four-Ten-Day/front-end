# 오놀

### Overview

- 기존 [리액트로 구현된 프로젝트](https://github.com/Four-Ten-Day/front-end/tree/react)를 Next(Pages Router)로 포팅한 프로젝트입니다.
- 배포된 프로젝트는 [여기서](https://o-nol.vercel.app/) 확인해보실 수 있습니다.

### 성능 개선

- 적절한 렌더링 전략을 선택하여 웹 성능 지표들을 크게 향상시켰습니다.

### 접근성 개선

- 보조기술을 이용하는 사용자는 기존 서비스를 사용하는데 어려움이 있다고 느껴 접근성 개선 작업을 했습니다.
- [WAI-ARIA](https://caesar1030.tistory.com/23) 활용과 [KWCAG](https://caesar1030.tistory.com/27)를 참고하여 장애 환경에 구애 받지 않고 서비스를 사용할 수 있도록 접근성을 개선하였습니다.

### E2E, Visual Regression 테스트

- 접근성을 개선하면서 마크업의 변화를 매번 직접 확인해야 하는 어려움이 있어 Cypress를 활용하여 Visual Regression 테스트를 작성하였습니다.
- 마찬가지로 키보드 대응 등의 기능 변화의 Side Effect를 매번 직접 확인해야 하는 어려움이 있어 E2E 테스트를 작성하였습니다.
- 로그인, getServerSideProps, geo location 등을 mocking하여 좀 더 신뢰성 높은 E2E 테스트를 구현하였습니다.
