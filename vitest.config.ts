/// <reference types="@vitest/browser-playwright" />
import { resolve } from 'node:path';
import { elemix } from '@neuralfog/elemix-vite';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [elemix()],
    resolve: {
        alias: {
            '#src': resolve(import.meta.dirname, 'src'),
        },
    },
    optimizeDeps: {
        include: [
            '@neuralfog/elemix',
            '@neuralfog/elemix/runtime',
            '@neuralfog/elemix/directives',
            '@neuralfog/elemix-testing-library',
            '@neuralfog/elemix-testing-library/query',
            '@neuralfog/elemix-testing-library/events',
        ],
    },
    test: {
        browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: 'chromium' }],
        },
    },
});
