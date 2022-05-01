import * as React from 'react';
import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '@/components/icon-button/IconButton.stories';

const CS = composeStories(stories);

describe('<IconButton/> test suite', () => {
  it('should render primary layout with its sizes', () => {
    mount(<CS.Primary />);

    cy.findAllByLabelText(/primary/i).each((el, index) => {
      if (index === 0) {
        cy.wrap(el).should('have.css', 'padding', '4px');
      } else if (index === 1) {
        cy.wrap(el).should('have.css', 'padding', '8px');
      } else {
        cy.wrap(el).should('have.css', 'padding', '12px');
      }

      cy.wrap(el)
        .find('svg path')
        .should('have.css', 'fill', 'rgb(250, 250, 250)');
      cy.wrap(el).should(
        'have.css',
        'background',
        `rgba(0, 0, 0, 0) linear-gradient(rgb(255, 95, 95), rgb(240, 98, 192)) repeat scroll 0% 0% / auto padding-box border-box`
      );
    });
  });

  it('should render secondary layout with its sizes', () => {
    mount(<CS.Secondary />);

    cy.findAllByLabelText(/secondary/i).each((el, index) => {
      if (index === 0) {
        cy.wrap(el).should('have.css', 'padding', '4px');
      } else if (index === 1) {
        cy.wrap(el).should('have.css', 'padding', '8px');
      } else {
        cy.wrap(el).should('have.css', 'padding', '12px');
      }

      cy.wrap(el)
        .find('svg path')
        .should('have.css', 'fill', 'rgb(242, 49, 165)');
      cy.wrap(el).should(
        'have.css',
        'background',
        `rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box`
      );
    });
  });
});
