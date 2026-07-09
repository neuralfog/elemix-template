import { Component, tpl } from '@neuralfog/elemix';
import type { Template } from '@neuralfog/elemix/types';

import '#src/components/ThemeSwitch';
import '#src/components/TodoApp';

// #component #tag app-root
export class App extends Component {
    template = (): Template => tpl`
        <theme-switch />
        <todo-app />
    `;
}
