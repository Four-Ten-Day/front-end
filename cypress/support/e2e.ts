import './commands';
import { addCompareSnapshotCommand } from 'cypress-visual-regression/dist/command';

addCompareSnapshotCommand({
  capture: 'fullPage',
  overwrite: true,
  errorThreshold: 0.04,
});

Cypress.Commands.add('hideMap', () => {
  cy.get('[id="__react-kakao-maps-sdk___Map"]').invoke(
    'attr',
    'style',
    'display: none !important'
  );
});
