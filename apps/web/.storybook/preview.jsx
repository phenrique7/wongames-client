import App from '../src/pages/_app';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'won-light',
    values: [
      { name: 'won-dark', value: '#333333' },
      { name: 'won-light', value: '#F8F8F8' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, { componentId }) => (
    <div className={componentId.includes('components') ? 'p-4' : ''}>
      <App Component={Story} />
    </div>
  ),
];
