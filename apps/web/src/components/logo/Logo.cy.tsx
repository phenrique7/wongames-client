import * as React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '@/components/logo/Logo.stories';

const CS = composeStories(stories);

describe('<Logo /> test suite', () => {
  it('should render with a white label and normal size by default', () => {
    cy.mount(<CS.Default />);

    cy.findByLabelText(/won games/i).should('have.css', 'width', '126px');
    cy.findByTestId('text-path').should(
      'have.css',
      'fill',
      'rgb(248, 249, 250)'
    );
  });

  it('should render with a black label and large size', () => {
    cy.mount(<CS.LargeBlack />);

    cy.findByLabelText(/won games/i).should('have.css', 'width', '200px');
    cy.findByTestId('text-path').should('have.css', 'fill', 'rgb(33, 37, 41)');
  });

  it('should render without the label', () => {
    cy.mount(<CS.WithoutLabel />);

    cy.findByTestId('text-path').should('not.exist');
  });
});
