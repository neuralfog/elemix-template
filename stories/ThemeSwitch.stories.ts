import type { ElemixMeta, ElemixStory } from '@neuralfog/elemix-storybook';

import '#src/components/ThemeSwitch';

const meta: ElemixMeta = {
    title: 'Components/ThemeSwitch',
    beforeEach: () => {
        localStorage.clear();
        document.documentElement.removeAttribute('data-theme-pref');
        document.documentElement.removeAttribute('data-theme');
    },
};

export default meta;

export const Default: ElemixStory = {
    render: () => '<theme-switch></theme-switch>',
};
