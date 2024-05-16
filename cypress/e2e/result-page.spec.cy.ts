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
    });

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

      cy.findByRole('button', { name: '처음으로 돌아갈래요' }).click();
      cy.location('pathname').should('equal', '/mode');
    });
  });
});
