import { expect } from '@neuralfog/elemix-testing-library';
import { click, keyDown, type } from '@neuralfog/elemix-testing-library/events';
import { find, query } from '@neuralfog/elemix-testing-library/query';
import { beforeEach, test } from 'vitest';

import { TodoApp } from '#src/components/TodoApp';
import { cleanup, mount } from './mount';

beforeEach(() => {
    cleanup();
    localStorage.clear();
});

test('todo-app seeds, adds, and removes todos', async () => {
    const host = await mount(TodoApp, '.input');
    const input = find<HTMLInputElement>('.input', host);
    if (!input) throw new Error('todo-app did not render its input');

    expect(query('todo-item', host).length).toBe(3);
    const footer = find('.footer', host)?.textContent ?? '';
    expect(footer).toContain('2 of');
    expect(footer).toContain('3 left');

    type(input, 'Buy milk');
    click(find<HTMLButtonElement>('.add', host) as HTMLElement);
    expect(query('todo-item', host).length).toBe(4);
    expect(input.value).toBe('');

    type(input, 'Walk dog');
    keyDown(input, 'Enter');
    expect(query('todo-item', host).length).toBe(5);
    expect(input.value).toBe('');

    click(find<HTMLButtonElement>('.remove', host) as HTMLElement);
    expect(query('todo-item', host).length).toBe(4);
});
