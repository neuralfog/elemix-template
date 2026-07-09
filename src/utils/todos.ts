export type Todo = { id: string; text: string; done: boolean };

const STORAGE_KEY = 'elemix-todos';

const seed = (): Todo[] => [
    { id: crypto.randomUUID(), text: 'Read the elemix docs', done: true },
    { id: crypto.randomUUID(), text: 'Scaffold a component', done: false },
    { id: crypto.randomUUID(), text: 'Ship something', done: false },
];

export const loadTodos = (): Todo[] => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Todo[]) : seed();
};

export const saveTodos = (todos: Todo[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const newTodo = (text: string): Todo => ({
    id: crypto.randomUUID(),
    text,
    done: false,
});
