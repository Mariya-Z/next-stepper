import {configure, addDecorator} from '@storybook/angular';
import {withOptions} from '@storybook/addon-options';
import './styles.css';

addDecorator(
  withOptions({
    name: 'Storybook',
    url: '#',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sortStoriesByKind: false,
    hierarchySeparator: null,
    hierarchyRootSeparator: null,
    sidebarAnimations: true,
    selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    enableShortcuts: false, // true by default
  }),
);
const req = require.context('../src/stories', true, /.stories.ts$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
