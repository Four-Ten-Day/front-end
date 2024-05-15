describe('interest 페이지 - 기분을 선택하는 페이지', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/interest');
  });

  describe('페이지에 최초 진입하는 경우', () => {
    it('페이지 최초 진입 시, 어떤 interest도 선택 돼있지 않아야 한다. "선택 완료" 버튼은 비활성화 상태여야 한다', () => {
      cy.findAllByRole('checkbox').each(($el) => {
        cy.wrap($el).should('not.have.attr', 'aria-checked', 'true');
      });

      cy.findByRole('button', { name: '선택 완료' }).should(
        'have.attr',
        'disabled'
      );
    });
  });

  describe('"전체 선택"을 체크하는 경우', () => {
    it('"전체 선택" 버튼을 클릭하면 나머지 모든 interests는 체크된 상태여야 한다. "선택 완료" 링크를 클릭하면 "/distance"페이지로 이동해야 한다.', () => {
      cy.findByRole('checkbox', { name: '전체 선택' }).click();

      cy.findAllByRole('checkbox').each(($el) => {
        cy.wrap($el).should('have.attr', 'aria-checked', 'true');
      });

      cy.findByRole('link', { name: '선택 완료' }).click();
      cy.location('pathname').should('equal', '/distance');
    });

    it('"전체 선택" 버튼을 제외한 나머지 모든 interests가 체크된 상태가 되면, "전체 선택" 버튼은 체크된 상태여야 한다. "선택 완료" 링크를 클릭하면 "/distance"페이지로 이동해야 한다.', () => {
      cy.findAllByRole('checkbox').each(($el) => {
        if ($el.text() !== '전체 선택') {
          cy.wrap($el).click();
        }
      });

      cy.findByRole('checkbox', { name: '전체 선택' }).should(
        'have.attr',
        'aria-checked',
        'true'
      );

      cy.findByRole('link', { name: '선택 완료' }).click();
      cy.location('pathname').should('equal', '/distance');
    });

    it('n개 미만의 interests를 선택한 후에 "전체 선택" 버튼을 클릭해도 모든 interests가 선택된 상태여야 한다. "선택 완료" 링크를 클릭하면 "/distance"페이지로 이동해야 한다.', () => {
      cy.findByRole('checkbox', { name: '트렌디한' })
        .click()
        .should('have.attr', 'aria-checked', 'true');

      cy.findByRole('checkbox', { name: '활동적인' })
        .click()
        .should('have.attr', 'aria-checked', 'true');

      cy.findByRole('checkbox', { name: '전체 선택' })
        .click()
        .should('have.attr', 'aria-checked', 'true');

      cy.findAllByRole('checkbox').each(($el) => {
        cy.wrap($el).should('have.attr', 'aria-checked', 'true');
      });

      cy.findByRole('link', { name: '선택 완료' }).click();
      cy.location('pathname').should('equal', '/distance');
    });
  });

  describe('"전체 선택"을 체크하지 않는 경우', () => {
    // TODO: 맥락 분리해야 할지 고민해보기
    it('특정 interest 버튼을 클릭하여 체크한 이후 다시 클릭하면 체크하지 않은 상태여야 한다. "선택 완료" 버튼은 비활성화 상태여야 한다.', () => {
      cy.findByRole('checkbox', { name: '도전적인' })
        .click()
        .should('have.attr', 'aria-checked', 'true')
        .click()
        .should('have.attr', 'aria-checked', 'false');

      cy.findByRole('button', { name: '선택 완료' }).should(
        'have.attr',
        'disabled'
      );
    });

    it('1개 이상 n개 미만의 interests를 체크한 경우 "전체 선택" 버튼은 체크되지 않아야 한다. "선택 완료" 링크를 클릭하면 "/distance"페이지로 이동해야 한다.', () => {
      cy.findByRole('checkbox', { name: '복고풍의' })
        .click()
        .should('have.attr', 'aria-checked', 'true');

      cy.findByRole('checkbox', { name: '이국적인' })
        .click()
        .should('have.attr', 'aria-checked', 'true');

      cy.findByRole('checkbox', { name: '전체 선택' }).should(
        'have.attr',
        'aria-checked',
        'false'
      );

      cy.findByRole('link', { name: '선택 완료' }).click();
      cy.location('pathname').should('equal', '/distance');
    });

    it('"전체 선택" 버튼이 체크된 상태에서 다시 "전체 선택" 버튼을 클릭하면 "전체 선택"을 포함한 모든 interests가 체크되지 않은 상태여야 한다. "선택 완료" 버튼은 비활성화 상태여야 한다.', () => {
      cy.findByRole('checkbox', { name: '전체 선택' }).click().click();

      cy.findAllByRole('checkbox').each(($el) => {
        cy.wrap($el).should('have.attr', 'aria-checked', 'false');
      });

      cy.findByRole('button', { name: '선택 완료' }).should(
        'have.attr',
        'disabled'
      );
    });
  });
});
