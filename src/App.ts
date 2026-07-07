import { Component, tpl } from '@neuralfog/elemix';
import type { Template } from '@neuralfog/elemix/types';

import './components/TodoApp';

// #component #tag app-root
export class App extends Component {
    template = (): Template => tpl`
        <todo-app></todo-app>
    `;
}
