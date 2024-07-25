import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from "path";
import dts from "vite-plugin-dts"


export default defineConfig({
    plugins: [vue(), dts({
        tsconfigPath: "../../tsconfig.build.json",
        outDir:"dist/types"
    })],
    build: {
        outDir: "dist/es",
        lib:{
            entry: resolve(__dirname, "./index.ts"),
            name: "XyElement",
            fileName: "index",
            formats: ["es"]
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                assetFileNames(assetInfo) {
                    if (assetInfo.name === "style.css") return "index.css";
                    return assetInfo.name as string;
                },
            }
        }
    },
})
