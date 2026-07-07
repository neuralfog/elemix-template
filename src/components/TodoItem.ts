import { Component, tpl } from '@neuralfog/elemix';
import type { Template } from '@neuralfog/elemix/types';

import css from './TodoItem.scss?inline';

type Todo = { id: string; text: string; done: boolean };

type Props = {
    todo: Todo;
    remove: () => void;
};

// #component
export class TodoItem extends Component<Props> {
    // #styles
    styles = css;

    toggle = (): void => {
        this.props.todo.done = !this.props.todo.done;
    };

    template = (): Template => tpl`
        <div class="item ${this.props.todo.done ? 'is-done' : ''}">
            <button class="check" @click=${this.toggle} aria-label="Toggle done">${this.props.todo.done ? '✓' : ''}</button>
            <span class="text">${this.props.todo.text}</span>
            <button class="remove" @click=${this.props.remove} aria-label="Remove">×</button>
        </div>
    `;
}
