import type { AsyncSvelteComponent } from 'svelte-spa-router'

export interface RouteInterface {
    path: string,
    name: string,
    label: string,
    component: AsyncSvelteComponent,
    redirect?: string,
    children?: RouteInterface[]
}

export const BaseRoutes: RouteInterface[] = [
    {
        path: '/aboutUs',
        name: 'about us',
        label: '关于我们',
        component: () => import('@/pages/aboutUs/index.svelte')
    }
]