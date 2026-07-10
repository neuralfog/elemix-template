import { Component, tpl } from '@neuralfog/elemix';
import type { ElemixMeta, ElemixStory } from '@neuralfog/elemix-storybook';
import type { Template } from '@neuralfog/elemix/types';

import type { Todo } from '#src/utils/todos';
import '#src/components/TodoItem';

type Args = {
    text: string;
    done: boolean;
};

type HarnessState = {
    todo: Todo;
};

// #component
export class TodoItemHarness extends Component {
    // #state
    state: HarnessState = {
        todo: {
            id: 'demo',
            text: this.getAttribute('text') ?? 'Todo',
            done: this.hasAttribute('done'),
        },
    };

    remove = (): void => {};

    template = (): Template => tpl`
        <todo-item :todo=${this.state.todo} :remove=${this.remove} />
    `;
}

const harness = (args: Args): string =>
    `<todo-item-harness text="${args.text}"${
        args.done ? ' done' : ''
    }></todo-item-harness>`;

const meta: ElemixMeta<Args> = {
    title: 'Components/TodoItem',
    args: { text: 'Learn Elemix', done: false },
    argTypes: {
        text: { control: 'text' },
        done: { control: 'boolean' },
    },
    excludeStories: ['TodoItemHarness'],
};

export default meta;

export const Unchecked: ElemixStory<Args> = {
    args: { text: 'Learn Elemix', done: false },
    render: (args) => harness(args),
};

export const Checked: ElemixStory<Args> = {
    args: { text: 'Ship it', done: true },
    render: (args) => harness(args),
};
