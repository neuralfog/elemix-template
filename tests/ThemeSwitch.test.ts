import { expect } from '@neuralfog/elemix-testing-library';
import { click } from '@neuralfog/elemix-testing-library/events';
import { findByTestId } from '@neuralfog/elemix-testing-library/query';
import { beforeEach, test } from 'vitest';

import { ThemeSwitch } from '#src/components/ThemeSwitch';
import { cleanup, mount } from './mount';

beforeEach(() => {
    cleanup();
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme-pref');
    document.documentElement.removeAttribute('data-theme');
});

test('theme-switch defaults to system and switches', async () => {
    const host = await mount(ThemeSwitch, '[data-testid="theme-system"]');
    const light = findByTestId<HTMLButtonElement>('theme-light', host);
    const dark = findByTestId<HTMLButtonElement>('theme-dark', host);
    const system = findByTestId<HTMLButtonElement>('theme-system', host);
    if (!light || !dark || !system)
        throw new Error('theme-switch did not render its options');

    expect(system.classList.contains('is-active')).toBe(true);
    expect(dark.classList.contains('is-active')).toBe(false);
    expect(light.classList.contains('is-active')).toBe(false);

    click(dark);
    expect(dark.classList.contains('is-active')).toBe(true);
    expect(system.classList.contains('is-active')).toBe(false);
    expect(document.documentElement.dataset.themePref).toBe('dark');
    expect(document.documentElement.dataset.theme).toBe('dark');

    click(light);
    expect(light.classList.contains('is-active')).toBe(true);
    expect(dark.classList.contains('is-active')).toBe(false);
    expect(document.documentElement.dataset.theme).toBe('light');
});
