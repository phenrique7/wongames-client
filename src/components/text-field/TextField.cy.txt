import * as React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from 'src/components/text-field/TextField.stories';

const CS = composeStories(stories);

describe('<TextField/> test suite', () => {
  it('should render the default layout', () => {
    cy.mount(<CS.Default />);

    cy.findByLabelText('Email').should('not.exist');
    cy.findByPlaceholderText(/type some text/i).should('exist');
    cy.get('input').should('have.attr', 'aria-invalid', 'false');
    cy.findByText(/email is required/i).should('not.exist');
    cy.findByTestId('left-element').should('not.exist');
    cy.findByTestId('right-element').should('not.exist');
  });

  it('should render input with label', () => {
    cy.mount(<CS.WithLabel />);

    cy.findByLabelText(/email/i).should('exist');
  });

  it('should render input with left element', () => {
    cy.mount(<CS.WithLeftElement />);

    cy.findByTestId('left-element').should('exist');
  });

  it('should render input with right element', () => {
    cy.mount(<CS.WithRightElement />);

    cy.findByTestId('right-element').should('exist');
  });

  it('should render input with validation error', () => {
    cy.mount(<CS.WithError />);

    cy.get('input').should('have.attr', 'aria-invalid', 'true');
    cy.findByText(/email is required/i).should('exist');
  });
});
