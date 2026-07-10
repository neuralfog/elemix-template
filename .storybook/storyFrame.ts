import type { Decorator } from '@storybook/html-vite';

export const storyFrame: Decorator = (Story, context) => {
    const inner = Story(context) as unknown as string | Node;
    if (context.parameters?.frame === false) {
        return inner;
    }

    const frame = document.createElement('div');
    frame.setAttribute('data-story-frame', '');

    const box = document.createElement('div');
    box.setAttribute('data-story-box', '');
    if (typeof inner === 'string') box.innerHTML = inner;
    else box.appendChild(inner);

    frame.appendChild(box);
    return frame;
};
