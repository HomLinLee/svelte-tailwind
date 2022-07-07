import { wrap } from 'svelte-spa-router/wrap'
const pages = import.meta.glob('./pages/**/*.svelte')
console.log(pages, '-------pages')
// const _condition = (path: string): boolean => (path.indexOf('/components/') === -1 && path.indexOf('/assets/') === -1 )
export const routes = Object.entries(pages)
    .reduce((routes, [path, comp]) => {
        console.log(path, '------path')
        return {
            ...routes,
            [path.replace(/(^\.\/pages)|((index)?\.svelte$)/g, '')]: wrap({
                asyncComponent: comp,
            }),
        }
    }, {})
console.log(routes, '-------routes')