describe('distance 페이지 - 이동 가능 거리를 선택하는 페이지', () => {
  const stubbedPosition = {
    coords: {
      latitude: 37.4800384,
      longitude: 126.8580352,
    },
  };

  beforeEach(() => {
    cy.visit('http://localhost:3000/distance', {
      onBeforeLoad(win) {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(
          (cb) => cb(stubbedPosition)
        );
      },
    });
  });

  // TODO: 기본 값이 있기 때문에, 항상 이동 가능해야 함. 이걸 afterEach에 넣는게 맞는지 고민해보기
  afterEach(() => {
    cy.findByRole('link', { name: '추천 받기' }).click();
    cy.location('pathname').should('equal', '/result');
  });

  describe('페이지에 최초 진입하는 경우', () => {
    it('슬라이더의 기본 값은 250이어야 한다. 헤딩은 "250m 이내 이동 가능해요!"이어야 한다.', () => {
      cy.findByRole('slider').should('have.attr', 'aria-valuenow', '250');
      cy.findByRole('heading', { name: '250m 이내 이동 가능해요!' }).should(
        'exist'
      );
    });
  });

  describe('슬라이더 값이 250인 경우', () => {
    it('왼쪽 방향키를 타이핑하면 슬라이더의 값은 여전히 250이어야 한다. 헤딩은 여전히 "250m 이내 이동 가능해요!"여야 한다.', () => {
      cy.findByRole('slider')
        .type('{leftArrow}')
        .should('have.attr', 'aria-valuenow', '250');
      cy.findByRole('heading', { name: '250m 이내 이동 가능해요!' }).should(
        'exist'
      );
    });
    it('오른쪽 방향키를 타이핑하면 슬라이더의 값은 500이어야 한다. 헤딩은 "500m 이내 이동 가능해요!"여야 한다. ', () => {
      cy.findByRole('slider')
        .type('{rightArrow}')
        .should('have.attr', 'aria-valuenow', '500');
      cy.findByRole('heading', { name: '500m 이내 이동 가능해요!' }).should(
        'exist'
      );
    });
  });

  describe('슬라이더 값이 500인 경우', () => {
    beforeEach(() => {
      cy.findByRole('slider')
        .type('{rightArrow}')
        .should('have.attr', 'aria-valuenow', '500');

      cy.findByRole('heading', { name: '500m 이내 이동 가능해요!' }).should(
        'exist'
      );
    });

    it('왼쪽 방향키를 타이핑하면 슬라이더의 값은 250이어야 한다. 헤딩은 "250m 이내 이동 가능해요!"여야 한다.', () => {
      cy.findByRole('slider')
        .type('{leftArrow}')
        .should('have.attr', 'aria-valuenow', '250');

      cy.findByRole('heading', { name: '250m 이내 이동 가능해요!' }).should(
        'exist'
      );
    });

    it('오른쪽 방향키를 타이핑하면 슬라이더의 값은 1000이어야 한다. 헤딩은 "1km 이내 이동 가능해요!"여야 한다.', () => {
      cy.findByRole('slider')
        .type('{rightArrow}')
        .should('have.attr', 'aria-valuenow', '1000');

      cy.findByRole('heading', { name: '1km 이내 이동 가능해요!' }).should(
        'exist'
      );
    });
  });

  describe('슬라이더 값이 1000인 경우', () => {
    beforeEach(() => {
      cy.findByRole('slider')
        .type('{rightArrow}')
        .type('{rightArrow}')
        .should('have.attr', 'aria-valuenow', '1000');

      cy.findByRole('heading', { name: '1km 이내 이동 가능해요!' }).should(
        'exist'
      );
    });

    it('왼쪽 방향키를 타이핑하면 슬라이더의 값은 500이어야 한다. 헤딩은 "500m 이내 이동 가능해요!"여야 한다.', () => {
      cy.findByRole('slider')
        .type('{leftArrow}')
        .should('have.attr', 'aria-valuenow', '500');

      cy.findByRole('heading', { name: '500m 이내 이동 가능해요!' }).should(
        'exist'
      );
    });

    it('오른쪽 방향키를 타이핑하면 슬라이더의 값은 2000이어야 한다. 헤딩은 "1km 이상 이동 가능해요!"여야 한다.', () => {
      cy.findByRole('slider')
        .type('{rightArrow}')
        .should('have.attr', 'aria-valuenow', '2000');

      cy.findByRole('heading', { name: '1km 이상 이동 가능해요!' }).should(
        'exist'
      );
    });
  });

  describe('슬라이더 값이 2000인 경우', () => {
    beforeEach(() => {
      cy.findByRole('slider')
        .type('{rightArrow}')
        .type('{rightArrow}')
        .type('{rightArrow}')
        .should('have.attr', 'aria-valuenow', '2000');

      cy.findByRole('heading', { name: '1km 이상 이동 가능해요!' }).should(
        'exist'
      );
    });

    it('왼쪽 방향키를 타이핑하면 슬라이더의 값은 1000이어야 한다. 헤딩은 "1km 이내 이동 가능해요!"여야 한다.', () => {
      cy.findByRole('slider')
        .type('{leftArrow}')
        .should('have.attr', 'aria-valuenow', '1000');

      cy.findByRole('heading', { name: '1km 이내 이동 가능해요!' }).should(
        'exist'
      );
    });

    it('오른쪽 방향키를 타이핑하면 슬라이더의 값은 여전히 2000이어야 한다. 헤딩은 여전히 "1km 이상 이동 가능해요!"여야 한다.', () => {
      cy.findByRole('slider')
        .type('{rightArrow}')
        .should('have.attr', 'aria-valuenow', '2000');

      cy.findByRole('heading', { name: '1km 이상 이동 가능해요!' }).should(
        'exist'
      );
    });
  });
});
