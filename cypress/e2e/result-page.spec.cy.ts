describe('result 페이지 - 유저 선택을 바탕으로 주변 놀거리를 추천해주는 페이지', () => {
  const stubbedPosition = {
    coords: {
      latitude: 37.4800384,
      longitude: 126.8580352,
    },
  };

  const mockServerSideProps = (
    pathname: string,
    props: Record<string, any>
  ) => {
    cy.intercept('GET', `**${pathname}.json?**`, (req) => {
      req.reply((res) => {
        res.body.pageProps = {
          ...res.body.pageProps,
          ...props,
        };
      });
    });
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
  });

  describe('추천 가능한 카테고리가 존재하는 경우', () => {
    const mockData = [
      {
        category: 'Cafes',
        documents: [
          {
            address_name: '123 Coffee St',
            category_group_code: 'CE7',
            category_group_name: 'Cafe',
            category_name: 'Coffee Shop',
            distance: '500',
            id: '1',
            phone: '123-456-7890',
            place_name: 'Coffee Heaven',
            place_url: 'http://example.com/coffee-heaven',
            road_address_name: '123 Coffee St, Suite 100',
            x: '37.4800384',
            y: '126.8580352',
          },
          {
            address_name: '456 Tea Blvd',
            category_group_code: 'CE7',
            category_group_name: 'Cafe',
            category_name: 'Tea House',
            distance: '300',
            id: '2',
            place_name: 'Tea Paradise',
            place_url: 'http://example.com/tea-paradise',
            road_address_name: '456 Tea Blvd, Floor 2',
            x: '37.4810384828548',
            y: '126.857362232861',
          },
          {
            address_name: '강남',
            category_group_code: 'CE8',
            category_group_name: '독서실',
            category_name: '독서실',
            distance: '200',
            id: '3',
            place_name: '강남 대성 독서실',
            place_url: 'http://example.com/tea-paradise',
            road_address_name: '456 강남로 3층',
            x: '37.4810384828548',
            y: '126.857362232861',
          },
        ],
      },
      {
        category: 'Restaurants',
        documents: [
          {
            address_name: '789 Food Ave',
            category_group_code: 'FD6',
            category_group_name: 'Restaurant',
            category_name: 'Fine Dining',
            distance: '200',
            id: '3',
            phone: '987-654-3210',
            place_name: 'Gourmet Delight',
            place_url: 'http://example.com/gourmet-delight',
            road_address_name: '789 Food Ave, Suite 300',
            x: '37.7300384',
            y: '126.8580352',
          },
          {
            address_name: '101 Grill Rd',
            category_group_code: 'FD6',
            category_group_name: 'Restaurant',
            category_name: 'Grill House',
            distance: '400',
            id: '4',
            phone: '654-321-0987',
            place_name: 'Grill Master',
            place_url: 'http://example.com/grill-master',
            road_address_name: '101 Grill Rd, Floor 1',
            x: '37.7300384',
            y: '126.8580352',
          },
        ],
      },
    ];

    beforeEach(() => {
      mockServerSideProps('/result', { placeInformations: mockData });

      cy.visit('http://localhost:3000/distance', {
        onBeforeLoad(win) {
          cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(
            (cb) => cb(stubbedPosition)
          );
        },
      });
      cy.findByRole('link', { name: '추천 받기' }).click();
      cy.location('pathname').should('equal', '/result');
    });

    it(`"오늘은... ${mockData[0].category} 어때요?" 헤딩이 존재해야 한다. "처음으로 돌아갈래요" 버튼과 "다시 추천 받을래요" 버튼이 존재해야 한다.
      "👀 주변 장소를 추천해줄게요 :)" 헤딩이 존재해야 한다.
      "${mockData[0].documents[0].place_name}" 헤딩이 존재해야 한다.`, () => {
      cy.findByRole('heading', {
        name: `오늘은.. ${mockData[0].category} 어때요?`,
      }).should('exist');

      cy.findByRole('button', { name: '처음으로 돌아갈래요' }).should('exist');
      cy.findByRole('button', { name: '다시 추천 받을래요' }).should('exist');

      cy.findByRole('heading', {
        name: '👀 주변 장소를 추천해줄게요 :)',
      }).should('exist');

      cy.findByRole('heading', {
        name: mockData[0].documents[0].place_name,
      }).should('exist');

      cy.hideMap();
      cy.wait(300);
      cy.compareSnapshot('with-category');
      cy.wait(300);
    });

    it(`"다시 추천 받을래요" 버튼을 1번 클릭하면, "오늘은... ${mockData[1].category} 어때요?" 헤딩이 존재해야 한다. "처음으로 돌아갈래요" 버튼과 "다시 추천 받을래요" 버튼이 존재해야 한다.
      "👀 주변 장소를 추천해줄게요 :)" 헤딩이 존재해야 한다.
      ${mockData[1].documents[0].place_name}" 헤딩이 존재해야 한다.`, () => {
      cy.findByRole('button', { name: '다시 추천 받을래요' }).click();

      cy.findByRole('heading', {
        name: `오늘은.. ${mockData[1].category} 어때요?`,
      }).should('exist');

      cy.findByRole('button', { name: '처음으로 돌아갈래요' }).should('exist');
      cy.findByRole('button', { name: '다시 추천 받을래요' }).should('exist');

      cy.findByRole('heading', {
        name: '👀 주변 장소를 추천해줄게요 :)',
      }).should('exist');

      cy.findByRole('heading', {
        name: mockData[1].documents[0].place_name,
      }).should('exist');
      cy.hideMap();

      cy.wait(300);
      cy.compareSnapshot('recommend-again');
      cy.wait(300);
    });

    it(`"다시 추천 받을래요" 버튼을 카테고리 수만큼 클릭하면, "앗 추천 데이터가 없어요! 좀 더 다양한 선택지를 골라보는건 어때요? 😊" 헤딩이 존재해야 한다. 
        "처음으로 돌아갈래요" 버튼이 존재해야 한다. "다시 추천 받을래요" 버튼은 존재하지 않아야 한다.
        "👀 주변 장소를 추천해줄게요 :)" 헤딩이 존재하지 않아야 한다.
        `, () => {
      Array.from({ length: mockData.length }).forEach(() => {
        cy.findByRole('button', { name: '다시 추천 받을래요' }).click();
      });

      cy.findByRole('heading', {
        name: `앗 추천 데이터가 없어요! 좀 더 다양한 선택지를 골라보는건 어때요? 😊`,
      }).should('exist');

      cy.findByRole('button', { name: '처음으로 돌아갈래요' }).should('exist');
      cy.findByRole('button', { name: '다시 추천 받을래요' }).should(
        'not.exist'
      );

      cy.findByRole('heading', {
        name: '👀 주변 장소를 추천해줄게요 :)',
      }).should('not.exist');

      cy.wait(300);
      cy.compareSnapshot('no-more-recommend');
      cy.wait(300);
    });

    // TODO: E2E에 들어갈 필요가 있나? 고민해보기
    describe('처음 캐루셀 아이템인 경우', () => {
      it('"캐루셀 왼쪽으로 이동" 버튼은 존재하지 않아야 한다.', () => {
        cy.findByRole('button', { name: '캐루셀 왼쪽 이동' }).should(
          'not.exist'
        );
      });
    });

    describe('마지막 캐루셀 아이템인 경우', () => {
      beforeEach(() => {
        Array.from({ length: mockData[0].documents.length - 1 }).forEach(() => {
          cy.findByRole('button', { name: '캐루셀 오른쪽 이동' }).click();
        });
      });

      it('"캐루셀 오른쪽으로 이동" 버튼은 존재하지 않아야 한다.', () => {
        cy.findByRole('button', { name: '캐루셀 오른쪽 이동' }).should(
          'not.exist'
        );
      });
    });

    describe('2번째 이상, n-1번째 이하 캐루셀 아이템인 경우', () => {
      beforeEach(() => {
        cy.findByRole('button', { name: '캐루셀 오른쪽 이동' }).click();
        cy.get('ul > li').eq(1).should('have.attr', 'aria-hidden', 'false');
      });

      it('"캐루셀 왼쪽 이동" 버튼 클릭 시 왼쪽 캐루셀 아이템으로 이동해야 한다.', () => {
        cy.findByRole('button', { name: '캐루셀 왼쪽 이동' }).click();
        cy.get('ul > li').eq(1).should('have.attr', 'aria-hidden', 'true');
        cy.get('ul > li').eq(0).should('have.attr', 'aria-hidden', 'false');
      });

      it('"캐루셀 오른쪽 이동" 버튼 클릭 시 오른쪽 캐루셀 아이템으로 이동해야 한다.', () => {
        cy.findByRole('button', { name: '캐루셀 오른쪽 이동' }).click();
        cy.get('ul > li').eq(1).should('have.attr', 'aria-hidden', 'true');
        cy.get('ul > li').eq(2).should('have.attr', 'aria-hidden', 'false');
      });
    });
  });

  describe('추천 가능한 카테고리가 존재하지 않는 경우', () => {
    const mockData = [] as number[];

    beforeEach(() => {
      mockServerSideProps('/result', { placeInformations: mockData });

      cy.visit('http://localhost:3000/distance', {
        onBeforeLoad(win) {
          cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(
            (cb) => cb(stubbedPosition)
          );
        },
      });
      cy.findByRole('link', { name: '추천 받기' }).click();
      cy.location('pathname').should('equal', '/result');
    });

    it(`"앗 추천 데이터가 없어요! 좀 더 다양한 선택지를 골라보는건 어때요? 😊" 헤딩이 존재해야 한다. 
    "처음으로 돌아갈래요" 버튼이 존재해야 한다. "다시 추천 받을래요" 버튼은 존재하지 않아야 한다.
    "👀 주변 장소를 추천해줄게요 :)" 헤딩이 존재하지 않아야 한다.
    "처음으로 돌아갈래요" 버튼을 클릭하면 "/mode"페이지로 이동해야 한다.
    `, () => {
      cy.findByRole('heading', {
        name: `앗 추천 데이터가 없어요! 좀 더 다양한 선택지를 골라보는건 어때요? 😊`,
      }).should('exist');

      cy.findByRole('button', { name: '처음으로 돌아갈래요' }).should('exist');
      cy.findByRole('button', { name: '다시 추천 받을래요' }).should(
        'not.exist'
      );

      cy.findByRole('heading', {
        name: '👀 주변 장소를 추천해줄게요 :)',
      }).should('not.exist');

      cy.wait(300);
      cy.compareSnapshot('without-category');
      cy.wait(300);

      cy.findByRole('button', { name: '처음으로 돌아갈래요' }).click();
      cy.location('pathname').should('equal', '/mode');
    });
  });
});
