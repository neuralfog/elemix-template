/// <reference types="@vitest/browser-playwright" />
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [storybookTest({ configDir: '.storybook' })],
    optimizeDeps: {
        include: [
            '@neuralfog/elemix',
            '@neuralfog/elemix/runtime',
            '@neuralfog/elemix/directives',
            '@neuralfog/elemix-storybook',
            'storybook/test',
        ],
    },
    test: {
        name: 'storybook',
        browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: 'chromium' }],
        },
    },
});
