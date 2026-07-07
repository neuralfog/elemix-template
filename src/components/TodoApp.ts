import { Component, ref, tpl } from '@neuralfog/elemix';
import { repeat } from '@neuralfog/elemix/directives';
import type { Ref, Template } from '@neuralfog/elemix/types';

import css from './TodoApp.scss?inline';
import './TodoItem';

type Todo = { id: string; text: string; done: boolean };

type State = {
    draft: Ref<string>;
    todos: Todo[];
};

const STORAGE_KEY = 'elemix-todos';

const seed = (): Todo[] => [
    { id: crypto.randomUUID(), text: 'Read the elemix docs', done: true },
    { id: crypto.randomUUID(), text: 'Scaffold a component', done: false },
    { id: crypto.randomUUID(), text: 'Ship something', done: false },
];

const load = (): Todo[] => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Todo[]) : seed();
};

// #component
export class TodoApp extends Component {
    // #styles
    styles = css;

    // #state
    state: State = {
        draft: ref(''),
        todos: load(),
    };

    // #effect
    persist(): void {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.todos));
    }

    add = (): void => {
        const text = this.state.draft.value.trim();
        if (!text) return;
        this.state.todos.push({ id: crypto.randomUUID(), text, done: false });
        this.state.draft.value = '';
    };

    removeTodo = (id: string): void => {
        const index = this.state.todos.findIndex((t) => t.id === id);
        if (index !== -1) this.state.todos.splice(index, 1);
    };

    template = (): Template => tpl`
        <div class="card">
            <p class="eyebrow">elemix</p>
            <h1 class="title">Todos</h1>

            <div class="row">
                <input
                    class="input"
                    type="text"
                    placeholder="What needs doing?"
                    ~model=${this.state.draft}
                    @keydown=${(e: KeyboardEvent) => {
                        if (e.key === 'Enter') this.add();
                    }}
                />
                <button class="add" @click=${this.add}>Add</button>
            </div>

            <div class="list">
                ${repeat(
                    this.state.todos,
                    (todo) => tpl`
                        <todo-item
                            :todo=${todo}
                            :remove=${() => this.removeTodo(todo.id)}
                        ></todo-item>
                    `,
                    (todo) => todo.id,
                )}
            </div>

            <p class="footer">
                ${
                    this.state.todos.length
                        ? tpl`${this.state.todos.filter((t) => !t.done).length} of ${this.state.todos.length} left`
                        : 'Nothing here — add your first todo'
                }
            </p>
        </div>
    `;
}
