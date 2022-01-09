import * as React from 'react';
import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Logo.stories';

const CS = composeStories(stories);

describe('<Logo /> test suite', () => {
  it('should render with a white label and normal size by default', () => {
    mount(<CS.Default />);

    cy.findByLabelText(/won games/i).should('have.css', 'width', '110px');
    cy.findByTestId('text-path').should(
      'have.css',
      'fill',
      'rgb(248, 249, 250)'
    );
  });

  it('should render with a black label and large size', () => {
    mount(<CS.LargeBlack />);

    cy.findByLabelText(/won games/i).should('have.css', 'width', '200px');
    cy.findByTestId('text-path').should('have.css', 'fill', 'rgb(33, 37, 41)');
  });

  it('should render without the label', () => {
    mount(<CS.WithoutLabel />);

    cy.findByTestId('text-path').should('not.exist');
  });
});
