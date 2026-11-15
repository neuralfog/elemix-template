import { createApp } from '@neuralfog/elemix';
import { expect, waitFor } from '@neuralfog/elemix-testing-library';
import { find } from '@neuralfog/elemix-testing-library/query';

export async function mount(
    root: CustomElementConstructor,
    ready: string,
): Promise<HTMLElement> {
    const host = document.createElement('div');
    document.body.appendChild(host);
    createApp(root).mount(host);
    await waitFor(() => expect(find(ready, host)).not.toBeNull());
    return host;
}

export function cleanup(): void {
    document.body.replaceChildren();
}
