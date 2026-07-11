import { tpl } from '@neuralfog/elemix';
import type { ElemixMeta, ElemixStory } from '@neuralfog/elemix-storybook';
import { expect } from '@neuralfog/elemix-testing-library';
import { click, keyDown, type } from '@neuralfog/elemix-testing-library/events';
import { find, query } from '@neuralfog/elemix-testing-library/query';

import '#src/components/TodoApp';

const meta: ElemixMeta = {
    title: 'Components/TodoApp',
    beforeEach: () => {
        localStorage.clear();
    },
};

export default meta;

export const Default: ElemixStory = {
    render: () => tpl`<todo-app />`,
    play: async ({ canvasElement, step }) => {
        const input = find<HTMLInputElement>('.input', canvasElement);
        if (!input) throw new Error('todo-app did not render its input');

        await step('starts from the seeded list', async () => {
            expect(query('todo-item', canvasElement).length).toBe(3);
            const footer = find('.footer', canvasElement)?.textContent ?? '';
            expect(footer).toContain('2 of');
            expect(footer).toContain('3 left');
        });

        await step('the Add button appends a todo', async () => {
            type(input, 'Buy milk');
            click(
                find<HTMLButtonElement>('.add', canvasElement) as HTMLElement,
            );
            expect(query('todo-item', canvasElement).length).toBe(4);
            expect(input.value).toBe('');
        });

        await step('Enter also adds a todo', async () => {
            type(input, 'Walk dog');
            keyDown(input, 'Enter');
            expect(query('todo-item', canvasElement).length).toBe(5);
            expect(input.value).toBe('');
        });

        await step('removing a todo drops the row', async () => {
            click(
                find<HTMLButtonElement>(
                    '.remove',
                    canvasElement,
                ) as HTMLElement,
            );
            expect(query('todo-item', canvasElement).length).toBe(4);
        });
    },
};
