// vite.config.mts
import { dirname, relative } from "node:path";
import { defineConfig } from "file:///Users/yangshuaiwei/WebstormProjects/up-mode-extension/node_modules/.pnpm/vite@5.4.2_@types+node@22.5.0/node_modules/vite/dist/node/index.js";
import Vue from "file:///Users/yangshuaiwei/WebstormProjects/up-mode-extension/node_modules/.pnpm/@vitejs+plugin-vue@5.1.2_vite@5.4.2_@types+node@22.5.0__vue@3.4.38_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Icons from "file:///Users/yangshuaiwei/WebstormProjects/up-mode-extension/node_modules/.pnpm/unplugin-icons@0.19.2_@vue+compiler-sfc@3.4.38/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///Users/yangshuaiwei/WebstormProjects/up-mode-extension/node_modules/.pnpm/unplugin-icons@0.19.2_@vue+compiler-sfc@3.4.38/node_modules/unplugin-icons/dist/resolver.js";
import Components from "file:///Users/yangshuaiwei/WebstormProjects/up-mode-extension/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.3_rollup@4.21.0_vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///Users/yangshuaiwei/WebstormProjects/up-mode-extension/node_modules/.pnpm/unplugin-auto-import@0.18.2_@vueuse+core@11.0.1_vue@3.4.38_typescript@5.5.4___rollup@4.21.0/node_modules/unplugin-auto-import/dist/vite.js";
import UnoCSS from "file:///Users/yangshuaiwei/WebstormProjects/up-mode-extension/node_modules/.pnpm/unocss@0.62.2_postcss@8.4.41_rollup@4.21.0_vite@5.4.2_@types+node@22.5.0_/node_modules/unocss/dist/vite.mjs";

// scripts/utils.ts
import { resolve } from "node:path";
import process from "node:process";
import { bgCyan, black } from "file:///Users/yangshuaiwei/WebstormProjects/up-mode-extension/node_modules/.pnpm/kolorist@1.8.0/node_modules/kolorist/dist/esm/index.mjs";
var __vite_injected_original_dirname = "/Users/yangshuaiwei/WebstormProjects/up-mode-extension/scripts";
var port = Number(process.env.PORT || "") || 3303;
var r = (...args) => resolve(__vite_injected_original_dirname, "..", ...args);
var isDev = process.env.NODE_ENV !== "production";
var isFirefox = process.env.EXTENSION === "firefox";

// package.json
var package_default = {
  name: "up-mode-extension",
  displayName: "UP Mode",
  version: "0.0.1",
  private: true,
  packageManager: "pnpm@9.7.1",
  description: "This is a browser extension that protects the author's privacy",
  scripts: {
    dev: "npm run clear && cross-env NODE_ENV=development run-p dev:*",
    "dev-firefox": "npm run clear && cross-env NODE_ENV=development EXTENSION=firefox run-p dev:*",
    "dev:prepare": "esno scripts/prepare.ts",
    "dev:background": "npm run build:background -- --mode development",
    "dev:web": "vite",
    "dev:js": "npm run build:js -- --mode development",
    build: "cross-env NODE_ENV=production run-s clear build:web build:prepare build:background build:js",
    "build:prepare": "esno scripts/prepare.ts",
    "build:background": "vite build --config vite.config.background.mts",
    "build:web": "vite build",
    "build:js": "vite build --config vite.config.content.mts",
    pack: "cross-env NODE_ENV=production run-p pack:*",
    "pack:zip": "rimraf extension.zip && jszip-cli add extension/* -o ./extension.zip",
    "pack:crx": "crx pack extension -o ./extension.crx",
    "pack:xpi": "cross-env WEB_EXT_ARTIFACTS_DIR=./ web-ext build --source-dir ./extension --filename extension.xpi --overwrite-dest",
    "start:chromium": "web-ext run --source-dir ./extension --target=chromium",
    "start:firefox": "web-ext run --source-dir ./extension --target=firefox-desktop",
    clear: "rimraf --glob extension/dist extension/manifest.json extension.*",
    lint: "eslint --cache .",
    test: "vitest test",
    "test:e2e": "playwright test",
    postinstall: "simple-git-hooks",
    typecheck: "tsc --noEmit"
  },
  devDependencies: {
    "@antfu/eslint-config": "^2.27.0",
    "@ffflorian/jszip-cli": "^3.7.1",
    "@iconify/json": "^2.2.239",
    "@playwright/test": "^1.46.1",
    "@types/fs-extra": "^11.0.4",
    "@types/node": "^22.5.0",
    "@types/webextension-polyfill": "^0.12.0",
    "@typescript-eslint/eslint-plugin": "^8.2.0",
    "@unocss/reset": "^0.62.2",
    "@vitejs/plugin-vue": "^5.1.2",
    "@vue/compiler-sfc": "^3.4.38",
    "@vue/test-utils": "^2.4.6",
    "@vueuse/core": "^11.0.1",
    chokidar: "^3.6.0",
    "cross-env": "^7.0.3",
    crx: "^5.0.1",
    eslint: "^9.9.0",
    esno: "^4.7.0",
    "fs-extra": "^11.2.0",
    jsdom: "^24.1.1",
    kolorist: "^1.8.0",
    "lint-staged": "^15.2.9",
    "npm-run-all": "^4.1.5",
    rimraf: "^6.0.1",
    "simple-git-hooks": "^2.11.1",
    typescript: "^5.5.4",
    unocss: "^0.62.2",
    "unplugin-auto-import": "^0.18.2",
    "unplugin-icons": "^0.19.2",
    "unplugin-vue-components": "^0.27.4",
    vite: "^5.4.2",
    vitest: "^2.0.5",
    vue: "^3.4.38",
    "vue-demi": "^0.14.10",
    "web-ext": "^8.2.0",
    "webext-bridge": "^6.0.1",
    "webextension-polyfill": "^0.12.0"
  },
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*": "eslint --fix"
  }
};

// vite.config.mts
var sharedConfig = {
  root: r("src"),
  resolve: {
    alias: {
      "~/": `${r("src")}/`
    }
  },
  define: {
    __DEV__: isDev,
    __NAME__: JSON.stringify(package_default.name)
  },
  plugins: [
    Vue(),
    AutoImport({
      imports: [
        "vue",
        {
          "webextension-polyfill": [
            ["=", "browser"]
          ]
        }
      ],
      dts: r("src/auto-imports.d.ts")
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: [r("src/components")],
      // generate `components.d.ts` for ts support with Volar
      dts: r("src/components.d.ts"),
      resolvers: [
        // auto import icons
        IconsResolver({
          prefix: ""
        })
      ]
    }),
    // https://github.com/antfu/unplugin-icons
    Icons(),
    // https://github.com/unocss/unocss
    UnoCSS(),
    // rewrite assets to use relative path
    {
      name: "assets-rewrite",
      enforce: "post",
      apply: "build",
      transformIndexHtml(html, { path }) {
        return html.replace(/"\/assets\//g, `"${relative(dirname(path), "/assets")}/`);
      }
    }
  ],
  optimizeDeps: {
    include: [
      "vue",
      "@vueuse/core",
      "webextension-polyfill"
    ],
    exclude: [
      "vue-demi"
    ]
  }
};
var vite_config_default = defineConfig(({ command }) => ({
  ...sharedConfig,
  base: command === "serve" ? `http://localhost:${port}/` : "/dist/",
  server: {
    port,
    hmr: {
      host: "localhost"
    },
    origin: `http://localhost:${port}`
  },
  build: {
    watch: isDev ? {} : void 0,
    outDir: r("extension/dist"),
    emptyOutDir: false,
    sourcemap: isDev ? "inline" : false,
    // https://developer.chrome.com/docs/webstore/program_policies/#:~:text=Code%20Readability%20Requirements
    terserOptions: {
      mangle: false
    },
    rollupOptions: {
      input: {
        options: r("src/options/index.html"),
        popup: r("src/popup/index.html"),
        sidepanel: r("src/sidepanel/index.html")
      }
    }
  },
  test: {
    globals: true,
    environment: "jsdom"
  }
}));
export {
  vite_config_default as default,
  sharedConfig
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIiwgInNjcmlwdHMvdXRpbHMudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3lhbmdzaHVhaXdlaS9XZWJzdG9ybVByb2plY3RzL3VwLW1vZGUtZXh0ZW5zaW9uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveWFuZ3NodWFpd2VpL1dlYnN0b3JtUHJvamVjdHMvdXAtbW9kZS1leHRlbnNpb24vdml0ZS5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy95YW5nc2h1YWl3ZWkvV2Vic3Rvcm1Qcm9qZWN0cy91cC1tb2RlLWV4dGVuc2lvbi92aXRlLmNvbmZpZy5tdHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5cbmltcG9ydCB7IGRpcm5hbWUsIHJlbGF0aXZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgeyBpc0RldiwgcG9ydCwgciB9IGZyb20gJy4vc2NyaXB0cy91dGlscydcbmltcG9ydCBwYWNrYWdlSnNvbiBmcm9tICcuL3BhY2thZ2UuanNvbidcblxuZXhwb3J0IGNvbnN0IHNoYXJlZENvbmZpZzogVXNlckNvbmZpZyA9IHtcbiAgcm9vdDogcignc3JjJyksXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ34vJzogYCR7cignc3JjJyl9L2AsXG4gICAgfSxcbiAgfSxcbiAgZGVmaW5lOiB7XG4gICAgX19ERVZfXzogaXNEZXYsXG4gICAgX19OQU1FX186IEpTT04uc3RyaW5naWZ5KHBhY2thZ2VKc29uLm5hbWUpLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgVnVlKCksXG5cbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgIHtcbiAgICAgICAgICAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJzogW1xuICAgICAgICAgICAgWyc9JywgJ2Jyb3dzZXInXSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGR0czogcignc3JjL2F1dG8taW1wb3J0cy5kLnRzJyksXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGRpcnM6IFtyKCdzcmMvY29tcG9uZW50cycpXSxcbiAgICAgIC8vIGdlbmVyYXRlIGBjb21wb25lbnRzLmQudHNgIGZvciB0cyBzdXBwb3J0IHdpdGggVm9sYXJcbiAgICAgIGR0czogcignc3JjL2NvbXBvbmVudHMuZC50cycpLFxuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIC8vIGF1dG8gaW1wb3J0IGljb25zXG4gICAgICAgIEljb25zUmVzb2x2ZXIoe1xuICAgICAgICAgIHByZWZpeDogJycsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1pY29uc1xuICAgIEljb25zKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdW5vY3NzL3Vub2Nzc1xuICAgIFVub0NTUygpLFxuXG4gICAgLy8gcmV3cml0ZSBhc3NldHMgdG8gdXNlIHJlbGF0aXZlIHBhdGhcbiAgICB7XG4gICAgICBuYW1lOiAnYXNzZXRzLXJld3JpdGUnLFxuICAgICAgZW5mb3JjZTogJ3Bvc3QnLFxuICAgICAgYXBwbHk6ICdidWlsZCcsXG4gICAgICB0cmFuc2Zvcm1JbmRleEh0bWwoaHRtbCwgeyBwYXRoIH0pIHtcbiAgICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvXCJcXC9hc3NldHNcXC8vZywgYFwiJHtyZWxhdGl2ZShkaXJuYW1lKHBhdGgpLCAnL2Fzc2V0cycpfS9gKVxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXG4gICAgICAndnVlJyxcbiAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCcsXG4gICAgXSxcbiAgICBleGNsdWRlOiBbXG4gICAgICAndnVlLWRlbWknLFxuICAgIF0sXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kIH0pID0+ICh7XG4gIC4uLnNoYXJlZENvbmZpZyxcbiAgYmFzZTogY29tbWFuZCA9PT0gJ3NlcnZlJyA/IGBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vYCA6ICcvZGlzdC8nLFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0LFxuICAgIGhtcjoge1xuICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgfSxcbiAgICBvcmlnaW46IGBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gLFxuICB9LFxuICBidWlsZDoge1xuICAgIHdhdGNoOiBpc0RldlxuICAgICAgPyB7fVxuICAgICAgOiB1bmRlZmluZWQsXG4gICAgb3V0RGlyOiByKCdleHRlbnNpb24vZGlzdCcpLFxuICAgIGVtcHR5T3V0RGlyOiBmYWxzZSxcbiAgICBzb3VyY2VtYXA6IGlzRGV2ID8gJ2lubGluZScgOiBmYWxzZSxcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd2Vic3RvcmUvcHJvZ3JhbV9wb2xpY2llcy8jOn46dGV4dD1Db2RlJTIwUmVhZGFiaWxpdHklMjBSZXF1aXJlbWVudHNcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBtYW5nbGU6IGZhbHNlLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgb3B0aW9uczogcignc3JjL29wdGlvbnMvaW5kZXguaHRtbCcpLFxuICAgICAgICBwb3B1cDogcignc3JjL3BvcHVwL2luZGV4Lmh0bWwnKSxcbiAgICAgICAgc2lkZXBhbmVsOiByKCdzcmMvc2lkZXBhbmVsL2luZGV4Lmh0bWwnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gIH0sXG59KSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3lhbmdzaHVhaXdlaS9XZWJzdG9ybVByb2plY3RzL3VwLW1vZGUtZXh0ZW5zaW9uL3NjcmlwdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95YW5nc2h1YWl3ZWkvV2Vic3Rvcm1Qcm9qZWN0cy91cC1tb2RlLWV4dGVuc2lvbi9zY3JpcHRzL3V0aWxzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy95YW5nc2h1YWl3ZWkvV2Vic3Rvcm1Qcm9qZWN0cy91cC1tb2RlLWV4dGVuc2lvbi9zY3JpcHRzL3V0aWxzLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2VzcydcbmltcG9ydCB7IGJnQ3lhbiwgYmxhY2sgfSBmcm9tICdrb2xvcmlzdCdcblxuZXhwb3J0IGNvbnN0IHBvcnQgPSBOdW1iZXIocHJvY2Vzcy5lbnYuUE9SVCB8fCAnJykgfHwgMzMwM1xuZXhwb3J0IGNvbnN0IHIgPSAoLi4uYXJnczogc3RyaW5nW10pID0+IHJlc29sdmUoX19kaXJuYW1lLCAnLi4nLCAuLi5hcmdzKVxuZXhwb3J0IGNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuZXhwb3J0IGNvbnN0IGlzRmlyZWZveCA9IHByb2Nlc3MuZW52LkVYVEVOU0lPTiA9PT0gJ2ZpcmVmb3gnXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cobmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgY29uc29sZS5sb2coYmxhY2soYmdDeWFuKGAgJHtuYW1lfSBgKSksIG1lc3NhZ2UpXG59XG4iLCAie1xuICBcIm5hbWVcIjogXCJ1cC1tb2RlLWV4dGVuc2lvblwiLFxuICBcImRpc3BsYXlOYW1lXCI6IFwiVVAgTW9kZVwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMVwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJwYWNrYWdlTWFuYWdlclwiOiBcInBucG1AOS43LjFcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgaXMgYSBicm93c2VyIGV4dGVuc2lvbiB0aGF0IHByb3RlY3RzIHRoZSBhdXRob3IncyBwcml2YWN5XCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJucG0gcnVuIGNsZWFyICYmIGNyb3NzLWVudiBOT0RFX0VOVj1kZXZlbG9wbWVudCBydW4tcCBkZXY6KlwiLFxuICAgIFwiZGV2LWZpcmVmb3hcIjogXCJucG0gcnVuIGNsZWFyICYmIGNyb3NzLWVudiBOT0RFX0VOVj1kZXZlbG9wbWVudCBFWFRFTlNJT049ZmlyZWZveCBydW4tcCBkZXY6KlwiLFxuICAgIFwiZGV2OnByZXBhcmVcIjogXCJlc25vIHNjcmlwdHMvcHJlcGFyZS50c1wiLFxuICAgIFwiZGV2OmJhY2tncm91bmRcIjogXCJucG0gcnVuIGJ1aWxkOmJhY2tncm91bmQgLS0gLS1tb2RlIGRldmVsb3BtZW50XCIsXG4gICAgXCJkZXY6d2ViXCI6IFwidml0ZVwiLFxuICAgIFwiZGV2OmpzXCI6IFwibnBtIHJ1biBidWlsZDpqcyAtLSAtLW1vZGUgZGV2ZWxvcG1lbnRcIixcbiAgICBcImJ1aWxkXCI6IFwiY3Jvc3MtZW52IE5PREVfRU5WPXByb2R1Y3Rpb24gcnVuLXMgY2xlYXIgYnVpbGQ6d2ViIGJ1aWxkOnByZXBhcmUgYnVpbGQ6YmFja2dyb3VuZCBidWlsZDpqc1wiLFxuICAgIFwiYnVpbGQ6cHJlcGFyZVwiOiBcImVzbm8gc2NyaXB0cy9wcmVwYXJlLnRzXCIsXG4gICAgXCJidWlsZDpiYWNrZ3JvdW5kXCI6IFwidml0ZSBidWlsZCAtLWNvbmZpZyB2aXRlLmNvbmZpZy5iYWNrZ3JvdW5kLm10c1wiLFxuICAgIFwiYnVpbGQ6d2ViXCI6IFwidml0ZSBidWlsZFwiLFxuICAgIFwiYnVpbGQ6anNcIjogXCJ2aXRlIGJ1aWxkIC0tY29uZmlnIHZpdGUuY29uZmlnLmNvbnRlbnQubXRzXCIsXG4gICAgXCJwYWNrXCI6IFwiY3Jvc3MtZW52IE5PREVfRU5WPXByb2R1Y3Rpb24gcnVuLXAgcGFjazoqXCIsXG4gICAgXCJwYWNrOnppcFwiOiBcInJpbXJhZiBleHRlbnNpb24uemlwICYmIGpzemlwLWNsaSBhZGQgZXh0ZW5zaW9uLyogLW8gLi9leHRlbnNpb24uemlwXCIsXG4gICAgXCJwYWNrOmNyeFwiOiBcImNyeCBwYWNrIGV4dGVuc2lvbiAtbyAuL2V4dGVuc2lvbi5jcnhcIixcbiAgICBcInBhY2s6eHBpXCI6IFwiY3Jvc3MtZW52IFdFQl9FWFRfQVJUSUZBQ1RTX0RJUj0uLyB3ZWItZXh0IGJ1aWxkIC0tc291cmNlLWRpciAuL2V4dGVuc2lvbiAtLWZpbGVuYW1lIGV4dGVuc2lvbi54cGkgLS1vdmVyd3JpdGUtZGVzdFwiLFxuICAgIFwic3RhcnQ6Y2hyb21pdW1cIjogXCJ3ZWItZXh0IHJ1biAtLXNvdXJjZS1kaXIgLi9leHRlbnNpb24gLS10YXJnZXQ9Y2hyb21pdW1cIixcbiAgICBcInN0YXJ0OmZpcmVmb3hcIjogXCJ3ZWItZXh0IHJ1biAtLXNvdXJjZS1kaXIgLi9leHRlbnNpb24gLS10YXJnZXQ9ZmlyZWZveC1kZXNrdG9wXCIsXG4gICAgXCJjbGVhclwiOiBcInJpbXJhZiAtLWdsb2IgZXh0ZW5zaW9uL2Rpc3QgZXh0ZW5zaW9uL21hbmlmZXN0Lmpzb24gZXh0ZW5zaW9uLipcIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgLS1jYWNoZSAuXCIsXG4gICAgXCJ0ZXN0XCI6IFwidml0ZXN0IHRlc3RcIixcbiAgICBcInRlc3Q6ZTJlXCI6IFwicGxheXdyaWdodCB0ZXN0XCIsXG4gICAgXCJwb3N0aW5zdGFsbFwiOiBcInNpbXBsZS1naXQtaG9va3NcIixcbiAgICBcInR5cGVjaGVja1wiOiBcInRzYyAtLW5vRW1pdFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBhbnRmdS9lc2xpbnQtY29uZmlnXCI6IFwiXjIuMjcuMFwiLFxuICAgIFwiQGZmZmxvcmlhbi9qc3ppcC1jbGlcIjogXCJeMy43LjFcIixcbiAgICBcIkBpY29uaWZ5L2pzb25cIjogXCJeMi4yLjIzOVwiLFxuICAgIFwiQHBsYXl3cmlnaHQvdGVzdFwiOiBcIl4xLjQ2LjFcIixcbiAgICBcIkB0eXBlcy9mcy1leHRyYVwiOiBcIl4xMS4wLjRcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIyLjUuMFwiLFxuICAgIFwiQHR5cGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiOiBcIl4wLjEyLjBcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjguMi4wXCIsXG4gICAgXCJAdW5vY3NzL3Jlc2V0XCI6IFwiXjAuNjIuMlwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI6IFwiXjUuMS4yXCIsXG4gICAgXCJAdnVlL2NvbXBpbGVyLXNmY1wiOiBcIl4zLjQuMzhcIixcbiAgICBcIkB2dWUvdGVzdC11dGlsc1wiOiBcIl4yLjQuNlwiLFxuICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwiXjExLjAuMVwiLFxuICAgIFwiY2hva2lkYXJcIjogXCJeMy42LjBcIixcbiAgICBcImNyb3NzLWVudlwiOiBcIl43LjAuM1wiLFxuICAgIFwiY3J4XCI6IFwiXjUuMC4xXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOS45LjBcIixcbiAgICBcImVzbm9cIjogXCJeNC43LjBcIixcbiAgICBcImZzLWV4dHJhXCI6IFwiXjExLjIuMFwiLFxuICAgIFwianNkb21cIjogXCJeMjQuMS4xXCIsXG4gICAgXCJrb2xvcmlzdFwiOiBcIl4xLjguMFwiLFxuICAgIFwibGludC1zdGFnZWRcIjogXCJeMTUuMi45XCIsXG4gICAgXCJucG0tcnVuLWFsbFwiOiBcIl40LjEuNVwiLFxuICAgIFwicmltcmFmXCI6IFwiXjYuMC4xXCIsXG4gICAgXCJzaW1wbGUtZ2l0LWhvb2tzXCI6IFwiXjIuMTEuMVwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjUuNFwiLFxuICAgIFwidW5vY3NzXCI6IFwiXjAuNjIuMlwiLFxuICAgIFwidW5wbHVnaW4tYXV0by1pbXBvcnRcIjogXCJeMC4xOC4yXCIsXG4gICAgXCJ1bnBsdWdpbi1pY29uc1wiOiBcIl4wLjE5LjJcIixcbiAgICBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzXCI6IFwiXjAuMjcuNFwiLFxuICAgIFwidml0ZVwiOiBcIl41LjQuMlwiLFxuICAgIFwidml0ZXN0XCI6IFwiXjIuMC41XCIsXG4gICAgXCJ2dWVcIjogXCJeMy40LjM4XCIsXG4gICAgXCJ2dWUtZGVtaVwiOiBcIl4wLjE0LjEwXCIsXG4gICAgXCJ3ZWItZXh0XCI6IFwiXjguMi4wXCIsXG4gICAgXCJ3ZWJleHQtYnJpZGdlXCI6IFwiXjYuMC4xXCIsXG4gICAgXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIjogXCJeMC4xMi4wXCJcbiAgfSxcbiAgXCJzaW1wbGUtZ2l0LWhvb2tzXCI6IHtcbiAgICBcInByZS1jb21taXRcIjogXCJwbnBtIGxpbnQtc3RhZ2VkXCJcbiAgfSxcbiAgXCJsaW50LXN0YWdlZFwiOiB7XG4gICAgXCIqXCI6IFwiZXNsaW50IC0tZml4XCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQVMsU0FBUyxnQkFBZ0I7QUFFbEMsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFlBQVk7OztBQ1Y2VSxTQUFTLGVBQWU7QUFDeFgsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsUUFBUSxhQUFhO0FBRjlCLElBQU0sbUNBQW1DO0FBSWxDLElBQU0sT0FBTyxPQUFPLFFBQVEsSUFBSSxRQUFRLEVBQUUsS0FBSztBQUMvQyxJQUFNLElBQUksSUFBSSxTQUFtQixRQUFRLGtDQUFXLE1BQU0sR0FBRyxJQUFJO0FBQ2pFLElBQU0sUUFBUSxRQUFRLElBQUksYUFBYTtBQUN2QyxJQUFNLFlBQVksUUFBUSxJQUFJLGNBQWM7OztBQ1BuRDtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsYUFBZTtBQUFBLEVBQ2YsU0FBVztBQUFBLEVBQ1gsU0FBVztBQUFBLEVBQ1gsZ0JBQWtCO0FBQUEsRUFDbEIsYUFBZTtBQUFBLEVBQ2YsU0FBVztBQUFBLElBQ1QsS0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsZUFBZTtBQUFBLElBQ2Ysa0JBQWtCO0FBQUEsSUFDbEIsV0FBVztBQUFBLElBQ1gsVUFBVTtBQUFBLElBQ1YsT0FBUztBQUFBLElBQ1QsaUJBQWlCO0FBQUEsSUFDakIsb0JBQW9CO0FBQUEsSUFDcEIsYUFBYTtBQUFBLElBQ2IsWUFBWTtB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
