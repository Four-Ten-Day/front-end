describe('고객 여정', () => {
  const stubbedPosition = {
    coords: {
      latitude: 37.4800384,
      longitude: 126.8580352,
    },
  };

  const interests = [
    'active',
    'romantic',
    'exotic',
    'trendy',
    'contemplative',
    'retro',
    'challenging',
  ];

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
          x: '37.4786692733295',
          y: '126.856240684731',
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

  it('mode, interest, distance를 선택 후 추천 장소를 볼 수 있다.', () => {
    cy.login();

    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(
          (cb) => cb(stubbedPosition)
        );
      },
    });
    cy.mockServerSideProps('/result', { placeInformations: mockData });

    cy.findByRole('link', { name: '네 좋아요!' }).click();
    cy.location('pathname').should('equal', '/mode');

    cy.findByRole('checkbox', { name: '혼자 놀거에요' })
      .should('have.attr', 'aria-checked', 'false')
      .click()
      .should('have.attr', 'aria-checked', 'true');

    cy.findByRole('link', { name: '선택 완료' }).click();
    cy.location('pathname').should('equal', '/interest');

    cy.findByRole('checkbox', { name: '전체 선택' })
      .should('have.attr', 'aria-checked', 'false')
      .click();

    cy.findByRole('link', { name: '선택 완료' }).click();
    cy.location('pathname').should('equal', '/distance');

    cy.findByRole('slider')
      .should('have.attr', 'aria-valuenow', 250)
      .focus()
      .type('{rightArrow}')
      .should('have.attr', 'aria-valuenow', 500);

    cy.findByRole('link', { name: '추천 받기' }).click();

    cy.location().should((loc) => {
      expect(loc.search).to.include('mode=alone');
      interests.forEach((interest) =>
        expect(loc.search).to.include(`interests=${interest}`)
      );
      expect(loc.search).to.include('distance=500');
      expect(loc.search).to.include(`lat=${stubbedPosition.coords.latitude}`);
      expect(loc.search).to.include(`lng=${stubbedPosition.coords.longitude}`);

      expect(loc.pathname).to.eq('/result');
    });

    cy.findByRole('heading', {
      name: `오늘은.. ${mockData[0].category} 어때요?`,
    });

    cy.findByRole('heading', {
      name: `${mockData[0].documents[0].place_name}`,
    });
    cy.findByRole('button', { name: '캐루셀 오른쪽 이동' }).click();
    cy.findByRole('heading', {
      name: `${mockData[0].documents[1].place_name}`,
    });

    cy.findByRole('button', { name: '처음으로 돌아갈래요' });
    cy.findByRole('button', { name: '다시 추천 받을래요' }).click();

    cy.findByRole('heading', {
      name: `오늘은.. ${mockData[1].category} 어때요?`,
    });

    cy.findByRole('button', { name: '다시 추천 받을래요' }).click();
    cy.findByRole('button', { name: '처음으로 돌아갈래요' }).click();
    cy.location('pathname').should('equal', '/mode');
  });
});
