describe('고객 여정', () => {
  const stubbedPosition = {
    coords: {
      latitude: 37.7300384,
      longitude: 126.8580352,
    },
  };

  it('mode, interest, distance를 선택 후 추천 장소를 볼 수 있다.', () => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(
          (cb) => {
            return cb(stubbedPosition);
          }
        );
      },
    });

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
      const interests = [
        'active',
        'romantic',
        'exotic',
        'trendy',
        'contemplative',
        'retro',
        'challenging',
      ];
      interests.forEach((interest) => {
        expect(loc.search).to.include(`interests=${interest}`);
      });
      expect(loc.search).to.include('distance=500');
      expect(loc.search).to.include(`lat=${stubbedPosition.coords.latitude}`);
      expect(loc.search).to.include(`lng=${stubbedPosition.coords.longitude}`);

      expect(loc.pathname).to.eq('/result');
    });
  });
});
