import * as React from 'react';
import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '@/components/heading/Heading.stories';

const CS = composeStories(stories);

describe('<Heading /> test suite', () => {
  it('should render a black heading by default', () => {
    mount(<CS.Default />);

    cy.findByRole('heading', { name: /won games/i }).should(
      'have.css',
      'color',
      'rgb(33, 37, 41)'
    );
  });

  it('should render a white heading when color is passed', () => {
    mount(<CS.WhiteColor />);

    cy.findByRole('heading', { name: /won games/i }).should(
      'have.css',
      'color',
      'rgb(248, 249, 250)'
    );
  });

  it('should render a heading with a line to the left side', () => {
    mount(<CS.WithLineLeft />);

    cy.findByRole('heading', { name: /won games/i }).then(($els) => {
      const win = $els[0].ownerDocument.defaultView;
      const before = win?.getComputedStyle($els[0], 'before');
      const contentValue = before?.getPropertyValue('width');
      expect(contentValue).to.eq('7.1875px');
    });
  });

  it('should render a heading with a line at the bottom', () => {
    mount(<CS.WithLineBottom />);

    cy.findByRole('heading', { name: /won games/i }).then(($els) => {
      const win = $els[0].ownerDocument.defaultView;
      const before = win?.getComputedStyle($els[0], 'after');
      const contentValue = before?.getPropertyValue('height');
      expect(contentValue).to.eq('7.1875px');
    });
  });
});
