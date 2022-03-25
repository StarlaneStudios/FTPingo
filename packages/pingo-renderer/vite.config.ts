import { defineConfig, type ConfigEnv } from 'vite';
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
    const basePath = mode == 'production' ? '' : '/';

    return defineConfig({
        plugins: [ vue() ],
        base: basePath,
        build: {
            outDir: '../pingo-electron/dist-web',
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    });
}