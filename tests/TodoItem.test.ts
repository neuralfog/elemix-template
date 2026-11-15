import { Component, tpl } from '@neuralfog/elemix';
import type { Template } from '@neuralfog/elemix/types';
import { expect } from '@neuralfog/elemix-testing-library';
import { find } from '@neuralfog/elemix-testing-library/query';
import { beforeEach, test } from 'vitest';

import '#src/components/TodoItem';
import type { Todo } from '#src/utils/todos';
import { cleanup, mount } from './mount';

const unchecked: Todo = { id: 'demo', text: 'Learn Elemix', done: false };
const checked: Todo = { id: 'demo', text: 'Ship it', done: true };

// #component
class UncheckedHarness extends Component {
    template = (): Template =>
        tpl`<todo-item :todo=${unchecked} :remove=${() => {}} />`;
}

// #component
class CheckedHarness extends Component {
    template = (): Template =>
        tpl`<todo-item :todo=${checked} :remove=${() => {}} />`;
}

beforeEach(() => cleanup());

test('renders an unchecked todo', async () => {
    const host = await mount(UncheckedHarness, '.text');
    expect(find('.text', host)?.textContent).toBe('Learn Elemix');
    expect(find('.item', host)?.classList.contains('is-done')).toBe(false);
    expect(find('.check', host)?.textContent).toBe('');
});

test('renders a checked todo', async () => {
    const host = await mount(CheckedHarness, '.text');
    expect(find('.text', host)?.textContent).toBe('Ship it');
    expect(find('.item', host)?.classList.contains('is-done')).toBe(true);
    expect(find('.check', host)?.textContent).toBe('✓');
});
