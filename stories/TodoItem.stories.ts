import { tpl } from '@neuralfog/elemix';
import type { ElemixMeta, ElemixStory } from '@neuralfog/elemix-storybook';

import type { Todo } from '#src/utils/todos';
import '#src/components/TodoItem';

type Args = {
    text: string;
    done: boolean;
};

const meta: ElemixMeta<Args> = {
    title: 'Components/TodoItem',
    args: { text: 'Learn Elemix', done: false },
    argTypes: {
        text: { control: 'text' },
        done: { control: 'boolean' },
    },
};

export default meta;

const todo = (args: Args): Todo => ({
    id: 'demo',
    text: args.text,
    done: args.done,
});

export const Unchecked: ElemixStory<Args> = {
    args: { text: 'Learn Elemix', done: false },
    render: (args) => tpl`<todo-item :todo=${todo(args)} :remove=${() => {}} />`,
};

export const Checked: ElemixStory<Args> = {
    args: { text: 'Ship it', done: true },
    render: (args) => tpl`<todo-item :todo=${todo(args)} :remove=${() => {}} />`,
};
