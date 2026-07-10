import type { ElemixMeta, ElemixStory } from '@neuralfog/elemix-storybook';

import '#src/components/TodoApp';

const meta: ElemixMeta = {
    title: 'Components/TodoApp',
    beforeEach: () => {
        localStorage.clear();
    },
};

export default meta;

export const Default: ElemixStory = {
    render: () => '<todo-app></todo-app>',
};
