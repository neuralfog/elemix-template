import { elemixDecorator } from '@neuralfog/elemix-storybook';
import type { Preview } from '@storybook/html-vite';

import '#src/scss/style.scss';
import '#storybook/preview.scss';
import { storyFrame } from '#storybook/storyFrame';

const preview: Preview = {
    decorators: [elemixDecorator, storyFrame],
    parameters: { onboarding: false },
};

export default preview;
