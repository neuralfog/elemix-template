import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const elemix = create({
    base: 'dark',

    brandTitle: `<span style="display: inline-flex; align-items: center; gap: 0.25rem;"><img src="/logo.svg" alt="elemix" width="34" height="34" style="filter: drop-shadow(0 0 10px rgba(76, 168, 255, 0.35));" /><span style="font-weight: 600; font-size: 1.5rem; letter-spacing: -0.02em;">elemix</span></span>`,
    brandUrl: 'https://elemix.dev',
    brandTarget: '_blank',

    colorPrimary: '#4ca8ff',
    colorSecondary: '#1e4fd8',

    appBg: '#070b16',
    appContentBg: '#0b1326',
    appPreviewBg: '#0b1326',
    appBorderColor: 'rgba(140, 170, 255, 0.14)',
    appBorderRadius: 8,

    textColor: '#e7ecfb',
    textMutedColor: '#64749e',
    textInverseColor: '#070b16',

    barTextColor: '#64749e',
    barSelectedColor: '#4ca8ff',
    barHoverColor: '#4ca8ff',
    barBg: '#0b1326',

    inputBg: 'rgba(140, 170, 255, 0.05)',
    inputBorder: 'rgba(140, 170, 255, 0.14)',
    inputTextColor: '#e7ecfb',
    inputBorderRadius: 8,

    fontBase: 'system-ui, -apple-system, sans-serif',
    fontCode: 'ui-monospace, SFMono-Regular, monospace',
});

addons.setConfig({ theme: elemix });
