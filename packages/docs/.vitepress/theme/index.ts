import type { App } from "vue";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import DefaultTheme from "vitepress/theme";
import XyElement from "xy-element";

import '@vitepress-demo-preview/component/dist/style.css'
import "xy-element/dist/index.css";

export default {
    ...DefaultTheme,
    enhanceApp({ app }: { app: App }) {
        app.component("demo-preview", ElementPlusContainer);
        app.use(XyElement);
    },
};
