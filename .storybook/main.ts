import { resolve } from 'node:path';
import { elemix } from '@neuralfog/elemix-vite';
import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
    stories: ['../stories/**/*.stories.ts'],
    addons: ['@storybook/addon-vitest'],
    framework: '@storybook/html-vite',
    viteFinal: (cfg) => {
        cfg.plugins = [...(cfg.plugins ?? []), elemix()];
        cfg.resolve = {
            ...cfg.resolve,
            alias: {
                ...cfg.resolve?.alias,
                '#src': resolve(import.meta.dirname, '../src'),
                '#stories': resolve(import.meta.dirname, '../stories'),
                '#storybook': resolve(import.meta.dirname, '.'),
            },
        };
        return cfg;
    },
};

export default config;
