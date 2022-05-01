import * as React from 'react';
import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '@/components/button/Button.stories';

const CS = composeStories(stories);

describe('<Button/> test suite', () => {
  it('should render the primary variant with its sizes', () => {
    mount(<CS.Primary />);

    cy.findByText(/primary sm/i).should('have.css', 'font-size', '12px');
    cy.findByText(/primary sm/i).should('have.css', 'padding', '4px 28px');

    cy.findByText(/primary md/i).should('have.css', 'font-size', '14px');
    cy.findByText(/primary md/i).should('have.css', 'padding', '8px 32px');

    cy.findByText(/primary lg/i).should('have.css', 'font-size', '16px');
    cy.findByText(/primary lg/i).should('have.css', 'padding', '12px 48px');

    cy.get('button').each((el) => {
      cy.wrap(el).should('have.css', 'color', 'rgb(255, 255, 255)');
      cy.wrap(el).should(
        'have.css',
        'background',
        `rgba(0, 0, 0, 0) linear-gradient(rgb(255, 95, 95), rgb(240, 98, 192)) repeat scroll 0% 0% / auto padding-box border-box`
      );
    });
  });

  it('should render the secondary variant with its sizes', () => {
    mount(<CS.Secondary />);

    cy.findByText(/secondary sm/i).should('have.css', 'font-size', '12px');
    cy.findByText(/secondary sm/i).should('have.css', 'padding', '4px 28px');

    cy.findByText(/secondary md/i).should('have.css', 'font-size', '14px');
    cy.findByText(/secondary md/i).should('have.css', 'padding', '8px 32px');

    cy.findByText(/secondary lg/i).should('have.css', 'font-size', '16px');
    cy.findByText(/secondary lg/i).should('have.css', 'padding', '12px 48px');

    cy.get('button').each((el) => {
      cy.wrap(el).should('have.css', 'color', 'rgb(242, 49, 165)');
      cy.wrap(el).should(
        'have.css',
        'background',
        `rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box`
      );
    });
  });

  it('should render a full width layout', () => {
    mount(<CS.FullWidth />);

    cy.get('button')
      .parent()
      .then((el) => {
        const compStyles = window.getComputedStyle(el[0]);
        const parentWidth = compStyles.getPropertyValue('width');
        cy.get('button').should('have.css', 'width', parentWidth);
      });
  });

  it('should render with a icon', () => {
    mount(<CS.WithPrimaryIcon />);

    cy.findByText(/with icon sm/i)
      .find('span')
      .should('have.css', 'width', '12px');

    cy.findByText(/with icon md/i)
      .find('span')
      .should('have.css', 'width', '14px');

    cy.findByText(/with icon lg/i)
      .find('span')
      .should('have.css', 'width', '16px');
  });
});
