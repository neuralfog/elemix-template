import { Component, tpl } from '@neuralfog/elemix';
import type { Template } from '@neuralfog/elemix/types';
import type { ElemixMeta, ElemixStory } from '@neuralfog/elemix-storybook';

import css from '#src/icons/Icons.scss?inline';
import '#src/icons/MonitorIcon';
import '#src/icons/MoonIcon';
import '#src/icons/SunIcon';

// #component
export class IconGallery extends Component {
    // #styles
    styles = css;

    onSearch = (e: Event): void => {
        const q = (e.target as HTMLInputElement).value.trim().toLowerCase();
        const cells =
            this.shadowRoot?.querySelectorAll<HTMLElement>('.icon-cell');
        if (!cells) return;
        for (const cell of cells) {
            const name = cell.getAttribute('data-name') ?? '';
            cell.style.display = name.includes(q) ? '' : 'none';
        }
    };

    template = (): Template => tpl`
        <div class="icon-gallery-wrap">
            <input
                class="icon-search"
                type="text"
                placeholder="Search icons..."
                @input=${this.onSearch}
            />
            <div class="icon-gallery">
                <div class="icon-cell" data-name="icon-sun">
                    <icon-sun />
                    <span class="icon-cell-name">icon-sun</span>
                </div>
                <div class="icon-cell" data-name="icon-moon">
                    <icon-moon />
                    <span class="icon-cell-name">icon-moon</span>
                </div>
                <div class="icon-cell" data-name="icon-monitor">
                    <icon-monitor />
                    <span class="icon-cell-name">icon-monitor</span>
                </div>
            </div>
        </div>
    `;
}

const meta: ElemixMeta = {
    title: 'Icons/All',
    parameters: { frame: false },
    excludeStories: ['IconGallery'],
};

export default meta;

export const Gallery: ElemixStory = {
    render: () => '<icon-gallery></icon-gallery>',
};
