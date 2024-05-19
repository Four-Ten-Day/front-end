describe('mode 페이지 - 혼자 놀지 같이 놀지 결정하는 페이지', () => {
  beforeEach(() => {
    cy.login();
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

      cy.compareSnapshot('initial');
    });
  });

  describe('하나의 mode를 체크하는 경우', () => {
    it('"혼자 놀거에요" 버튼을 클릭하면 체크된 상태여야 한다. "같이 놀거에요" 버튼은 체크 되지 않은 상태여야 한다. "선택 완료" 링크가 존재해야 한다.', () => {
      cy.findByRole('checkbox', { name: '혼자 놀거에요' })
        .click()
        .should('have.attr', 'aria-checked', 'true');

      cy.findByRole('checkbox', { name: '같이 놀거에요' }).should(
        'have.attr',
        'aria-checked',
        'false'
      );

      cy.findByRole('link', { name: '선택 완료' }).should('exist');

      cy.compareSnapshot('alone-checked');
    });

    it('"같이 놀거에요" 버튼을 클릭하면 체크된 상태여야 한다. "혼자 놀거에요" 버튼은 체크 되지 않은 상태여야 한다. "선택 완료" 링크가 존재해야 한다.', () => {
      cy.findByRole('checkbox', { name: '같이 놀거에요' })
        .click()
        .should('have.attr', 'aria-checked', 'true');

      cy.findByRole('checkbox', { name: '혼자 놀거에요' }).should(
        'have.attr',
        'aria-checked',
        'false'
      );

      cy.findByRole('link', { name: '선택 완료' });

      cy.compareSnapshot('together-checked');
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

      cy.compareSnapshot('alone-cancelled');
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

      cy.compareSnapshot('together-cancelled');
    });
  });

  describe('하나의 mode를 체크한 후 다른 mode를 체크하는 경우', () => {
    it('"혼자 놀거에요" 버튼을 클릭한 후 "같이 놀거에요" 버튼을 클릭하면 "혼자 놀거에요" 버튼은 체크 되지 않은 상태, "같이 놀거에요" 버튼은 체크된 상태여야 한다. "선택 완료" 링크가 존재 해야 한다.', () => {
      cy.findByRole('checkbox', { name: '혼자 놀거에요' }).click();

      cy.findByRole('checkbox', { name: '같이 놀거에요' })
        .click()
        .should('have.attr', 'aria-checked', 'true');

      cy.findByRole('checkbox', { name: '혼자 놀거에요' }).should(
        'have.attr',
        'aria-checked',
        'false'
      );

      cy.findByRole('link', { name: '선택 완료' });

      cy.compareSnapshot('alone-together');
    });

    it('"같이 놀거에요" 버튼을 클릭한 후 "혼자 놀거에요" 버튼을 클릭하면 "같이 놀거에요" 버튼은 체크 되지 않은 상태, "혼자 놀거에요" 버튼은 체크된 상태여야 한다. "선택 완료" 링크가 존재 해야 한다.', () => {
      cy.findByRole('checkbox', { name: '같이 놀거에요' }).click();

      cy.findByRole('checkbox', { name: '혼자 놀거에요' })
        .click()
        .should('have.attr', 'aria-checked', 'true');

      cy.findByRole('checkbox', { name: '같이 놀거에요' }).should(
        'have.attr',
        'aria-checked',
        'false'
      );

      cy.findByRole('link', { name: '선택 완료' });

      cy.compareSnapshot('together-alone');
    });
  });
});
