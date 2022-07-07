import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import legacy from '@vitejs/plugin-legacy'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import { resolve } from 'path'
console.log(process, '--------process')
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        sourcemap: process.env.BUILD_ENV === 'DEV' ? true : false,
        minify: process.env.BUILD_ENV === 'DEV' ? false : 'esbuild',
        brotliSize: false,
        rollupOptions: {
            plugins: [
                visualizer({ open: true, gzipSize: true })
            ]
        }
    },
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11']
        }),
        svelte(),
        viteCompression({
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: "gzip",
            ext: '.gz'
        }),
        // brotli
        viteCompression({
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: "brotliCompress",
            ext: '.br'
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    }
})
