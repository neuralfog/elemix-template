import { Component, tpl } from '@neuralfog/elemix';
import type { Template } from '@neuralfog/elemix/types';

import css from '#src/components/ThemeSwitch.scss?inline';
import '#src/icons/SunIcon';
import '#src/icons/MoonIcon';
import '#src/icons/MonitorIcon';
import {
    type ThemePref,
    applyTheme,
    storedPref,
    watchSystemTheme,
} from '#src/utils/theme';

type State = {
    pref: ThemePref;
};

// #component
export class ThemeSwitch extends Component {
    // #styles
    styles = css;

    // #state
    state: State = {
        pref: storedPref(),
    };

    // #mount
    watchSystem(): void {
        watchSystemTheme(() => {
            if (this.state.pref === 'system') applyTheme('system');
        });
    }

    select = (pref: ThemePref): void => {
        applyTheme(pref);
        this.state.pref = pref;
    };

    template = (): Template => tpl`
        <div class="switch" role="group" aria-label="Theme">
            <button
                class="opt ${this.state.pref === 'light' ? 'is-active' : ''}"
                @click=${() => this.select('light')}
                aria-label="Light theme"
            >
                <icon-sun />
            </button>
            <button
                class="opt ${this.state.pref === 'dark' ? 'is-active' : ''}"
                @click=${() => this.select('dark')}
                aria-label="Dark theme"
            >
                <icon-moon />
            </button>
            <button
                class="opt ${this.state.pref === 'system' ? 'is-active' : ''}"
                @click=${() => this.select('system')}
                aria-label="System theme"
            >
                <icon-monitor />
            </button>
        </div>
    `;
}
