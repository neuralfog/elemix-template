import { tpl } from '@neuralfog/elemix';
import type { ElemixMeta, ElemixStory } from '@neuralfog/elemix-storybook';
import { expect } from '@neuralfog/elemix-testing-library';
import { click } from '@neuralfog/elemix-testing-library/events';
import { findByTestId } from '@neuralfog/elemix-testing-library/query';

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
    render: () => tpl`<theme-switch />`,
    play: async ({ canvasElement, step }) => {
        const light = findByTestId<HTMLButtonElement>(
            'theme-light',
            canvasElement,
        );
        const dark = findByTestId<HTMLButtonElement>(
            'theme-dark',
            canvasElement,
        );
        const system = findByTestId<HTMLButtonElement>(
            'theme-system',
            canvasElement,
        );
        if (!light || !dark || !system)
            throw new Error('theme-switch did not render its options');

        await step('defaults to the system preference', async () => {
            expect(system.classList.contains('is-active')).toBe(true);
            expect(dark.classList.contains('is-active')).toBe(false);
            expect(light.classList.contains('is-active')).toBe(false);
        });

        await step('selecting dark applies and activates it', async () => {
            click(dark);
            expect(dark.classList.contains('is-active')).toBe(true);
            expect(system.classList.contains('is-active')).toBe(false);
            expect(document.documentElement.dataset.themePref).toBe('dark');
            expect(document.documentElement.dataset.theme).toBe('dark');
        });

        await step('selecting light switches over', async () => {
            click(light);
            expect(light.classList.contains('is-active')).toBe(true);
            expect(dark.classList.contains('is-active')).toBe(false);
            expect(document.documentElement.dataset.theme).toBe('light');
        });
    },
};
