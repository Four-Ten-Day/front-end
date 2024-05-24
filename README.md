# 오놀

### Overview

- '오늘 무엇하고 놀까'라는 고민에서 벗어날 수 있도록 원하는 컨셉을 입력하면, 카카오지도 공개 API를 기반으로 내 주변 컨셉에 맞는 놀거리와 장소를 랜덤으로 추천해드리는 서비스입니다.
- 쉬운 사용성, 테마 필터와 GPS 활용을 통한 맞춤형 정보제공이 특징인 서비스입니다.
- 배포된 프로젝트는 [여기서](https://o-nol.vercel.app/) 확인해보실 수 있습니다.

### 서비스 미리보기

![2024-05-2413-04-29-ezgif com-video-to-gif-converter](https://github.com/Four-Ten-Day/front-end/assets/76683390/99b37e74-40b8-4740-90c1-15235fba5724)

### 성능 개선

- 기존 리액트로 구현된 프로젝트를 Next로 포팅하였습니다.
- 적절한 렌더링 전략을 선택하여 웹 성능 지표들을 크게 향상시켰습니다.

### 접근성 개선

- 보조기술을 이용하는 사용자는 기존 서비스를 사용하는데 어려움이 있다고 느껴 접근성 개선 작업을 했습니다.
- [WAI-ARIA](https://caesar1030.tistory.com/23) 활용과 [KWCAG](https://caesar1030.tistory.com/27)를 참고하여 장애 환경에 구애 받지 않고 서비스를 사용할 수 있도록 접근성을 개선하였습니다.

### E2E, Visual Regression 테스트

- 접근성을 개선하면서 마크업의 변화를 매번 직접 확인해야 하는 어려움이 있어 Cypress를 활용하여 Visual Regression 테스트를 작성하였습니다.
- 마찬가지로 키보드 대응 등의 기능 변화의 Side Effect를 매번 직접 확인해야 하는 어려움이 있어 E2E 테스트를 작성하였습니다.
- 로그인, getServerSideProps, geo location 등을 mocking하여 좀 더 신뢰성 높은 E2E 테스트를 구현하였습니다.
