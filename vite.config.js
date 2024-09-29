import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
        input: {
            main: resolve(__dirname, 'index.html'), // укажи путь к своему html файлу
        },
        },
    },
})
