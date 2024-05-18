describe('distance 페이지 - 이동 가능 거리를 선택하는 페이지', () => {
  const stubbedPosition = {
    coords: {
      latitude: 37.4800384,
      longitude: 126.8580352,
    },
  };

  beforeEach(() => {
    cy.setCookie('onol_session', Cypress.env('session_stub'));

    cy.intercept('GET', '/api/auth/session', {
      statusCode: 200,
      body: {
        user: {
          avatar_url:
            'data:image/jpeg;base64,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',
        },
        isLoggedIn: true,
      },
    });

    cy.visit('http://localhost:3000/distance', {
      onBeforeLoad(win) {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(
          (cb) => cb(stubbedPosition)
        );
      },
    });

    cy.hideMap();
  });

  describe('페이지에 최초 진입하는 경우', () => {
    it('슬라이더의 기본 값은 250이어야 한다. 헤딩은 "250m 이내 이동 가능해요!"이어야 한다.', () => {
      cy.findByRole('slider').should('have.attr', 'aria-valuenow', '250');
      cy.findByRole('heading', { name: '250m 이내 이동 가능해요!' }).should(
        'exist'
      );

      cy.findByRole('heading', { name: '250m 이내 이동 가능해요!' }).should(
        'exist'
      );

      cy.compareSnapshot('initial');
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

      cy.compareSnapshot('250-left');
    });

    it('오른쪽 방향키를 타이핑하면 슬라이더의 값은 500이어야 한다. 헤딩은 "500m 이내 이동 가능해요!"여야 한다. ', () => {
      cy.findByRole('slider')
        .type('{rightArrow}')
        .should('have.attr', 'aria-valuenow', '500');
      cy.findByRole('heading', { name: '500m 이내 이동 가능해요!' }).should(
        'exist'
      );

      cy.compareSnapshot('250-right');
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

      cy.compareSnapshot('500-left');
    });

    it('오른쪽 방향키를 타이핑하면 슬라이더의 값은 1000이어야 한다. 헤딩은 "1km 이내 이동 가능해요!"여야 한다.', () => {
      cy.findByRole('slider')
        .type('{rightArrow}')
        .should('have.attr', 'aria-valuenow', '1000');

      cy.findByRole('heading', { name: '1km 이내 이동 가능해요!' }).should(
        'exist'
      );

      cy.compareSnapshot('500-right');
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

      cy.compareSnapshot('1000-left');
    });

    it('오른쪽 방향키를 타이핑하면 슬라이더의 값은 2000이어야 한다. 헤딩은 "1km 이상 이동 가능해요!"여야 한다.', () => {
      cy.findByRole('slider')
        .type('{rightArrow}')
        .should('have.attr', 'aria-valuenow', '2000');

      cy.findByRole('heading', { name: '1km 이상 이동 가능해요!' }).should(
        'exist'
      );

      cy.compareSnapshot('1000-right');
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

      cy.compareSnapshot('2000-left');
    });

    it('오른쪽 방향키를 타이핑하면 슬라이더의 값은 여전히 2000이어야 한다. 헤딩은 여전히 "1km 이상 이동 가능해요!"여야 한다.', () => {
      cy.findByRole('slider')
        .type('{rightArrow}')
        .should('have.attr', 'aria-valuenow', '2000');

      cy.findByRole('heading', { name: '1km 이상 이동 가능해요!' }).should(
        'exist'
      );

      cy.compareSnapshot('2000-right');
    });
  });
});
