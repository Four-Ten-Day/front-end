describe('mode 페이지 - 혼자 놀지 같이 놀지 결정하는 페이지', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/mode');
  });

  describe('페이지에 최초 진입하는 경우', () => {
    it('페이지 최초 진입 시, "혼자 놀거에요", "같이 놀거에요" 버튼은 모두 체크돼있지 않아야 한다. "선택 완료" 버튼은 비활성화 상태여야 한다', () => {
      cy.findByRole('checkbox', { name: '혼자 놀거에요' }).should(
        'have.attr',
        'aria-checked',
        'false'
      );
      cy.findByRole('checkbox', { name: '같이 놀거에요' }).should(
        'have.attr',
        'aria-checked',
        'false'
      );
      cy.findByRole('button', { name: '선택 완료' }).should(
        'have.attr',
        'disabled'
      );
    });
  });

  describe('하나의 mode를 체크하는 경우', () => {
    it('"혼자 놀거에요" 버튼을 클릭하면 체크된 상태여야 한다. "같이 놀거에요" 버튼은 체크 되지 않은 상태여야 한다. "선택 완료" 링크를 클릭하면 "/interest" 페이지로 이동해야 한다.', () => {
      cy.findByRole('checkbox', { name: '혼자 놀거에요' })
        .click()
        .should('have.attr', 'aria-checked', 'true');

      cy.findByRole('checkbox', { name: '같이 놀거에요' }).should(
        'have.attr',
        'aria-checked',
        'false'
      );

      cy.findByRole('link', { name: '선택 완료' }).click();
      cy.location('pathname').should('equal', '/interest');
    });

    it('"같이 놀거에요" 버튼을 클릭하면 체크된 상태여야 한다. "혼자 놀거에요" 버튼은 체크 되지 않은 상태여야 한다. "선택 완료" 링크를 클릭하면 "/interest"로 이동해야 한다.', () => {
      cy.findByRole('checkbox', { name: '같이 놀거에요' })
        .click()
        .should('have.attr', 'aria-checked', 'true');

      cy.findByRole('checkbox', { name: '혼자 놀거에요' }).should(
        'have.attr',
        'aria-checked',
        'false'
      );

      cy.findByRole('link', { name: '선택 완료' }).click();
      cy.location('pathname').should('equal', '/interest');
    });
  });

  describe('하나의 mode를 체크한 후 다시 체크 해제 하는 경우', () => {
    it('"혼자 놀거에요" 버튼을 클릭한 후 다시 클릭하면 체크 되지 않은 상태여야 한다. "같이 놀거에요" 버튼은 여전히 체크 되지 않은 상태여야 한다. "선택 완료" 버튼은 비활성화 상태여야 한다.', () => {
      cy.findByRole('checkbox', { name: '혼자 놀거에요' })
        .click()
        .click()
        .should('have.attr', 'aria-checked', 'false');

      cy.findByRole('checkbox', { name: '같이 놀거에요' }).should(
        'have.attr',
        'aria-checked',
        'false'
      );

      cy.findByRole('button', { name: '선택 완료' }).should(
        'have.attr',
        'disabled'
      );
    });

    it('"같이 놀거에요" 버튼을 클릭한 후 다시 클릭하면 체크 되지 않은 상태여야 한다. "혼자 놀거에요" 버튼은 여전히 체크 되지 않은 상태여야 한다. "선택 완료" 버튼은 비활성화 상태여야 한다.', () => {
      cy.findByRole('checkbox', { name: '같이 놀거에요' })
        .click()
        .click()
        .should('have.attr', 'aria-checked', 'false');

      cy.findByRole('checkbox', { name: '혼자 놀거에요' }).should(
        'have.attr',
        'aria-checked',
        'false'
      );

      cy.findByRole('button', { name: '선택 완료' }).should(
        'have.attr',
        'disabled'
      );
    });
  });

  describe('하나의 mode를 체크한 후 다른 mode를 체크하는 경우', () => {
    it('"혼자 놀거에요" 버튼을 클릭한 후 "같이 놀거에요" 버튼을 클릭하면 "혼자 놀거에요" 버튼은 체크 되지 않은 상태, "같이 놀거에요" 버튼은 체크된 상태여야 한다. "선택 완료" 링크는 클릭 시 "/interest" 페이지로 이동해야 한다.', () => {
      cy.findByRole('checkbox', { name: '혼자 놀거에요' }).click();

      cy.findByRole('checkbox', { name: '같이 놀거에요' })
        .click()
        .should('have.attr', 'aria-checked', 'true');

      cy.findByRole('checkbox', { name: '혼자 놀거에요' }).should(
        'have.attr',
        'aria-checked',
        'false'
      );

      cy.findByRole('link', { name: '선택 완료' }).click();
      cy.location('pathname').should('equal', '/interest');
    });

    it('"같이 놀거에요" 버튼을 클릭한 후 "혼자 놀거에요" 버튼을 클릭하면 "같이 놀거에요" 버튼은 체크 되지 않은 상태, "혼자 놀거에요" 버튼은 체크된 상태여야 한다. "선택 완료" 링크는 클릭 시 "/interest" 페이지로 이동해야 한다.', () => {
      cy.findByRole('checkbox', { name: '같이 놀거에요' }).click();

      cy.findByRole('checkbox', { name: '혼자 놀거에요' })
        .click()
        .should('have.attr', 'aria-checked', 'true');

      cy.findByRole('checkbox', { name: '같이 놀거에요' }).should(
        'have.attr',
        'aria-checked',
        'false'
      );

      cy.findByRole('link', { name: '선택 완료' }).click();
      cy.location('pathname').should('equal', '/interest');
    });
  });
});
