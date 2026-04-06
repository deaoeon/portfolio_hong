import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/portfolio_hong/',
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: `@import "src/styles/index.scss";`,
            },
        },
    },
});
