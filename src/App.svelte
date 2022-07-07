<script lang="ts">
import Router from 'svelte-spa-router'
import { routes, BaseRoutes, RouteInterface } from './router'

let y = 0
let _title: string
console.log(BaseRoutes, 'BaseRoutes')
let _matchedRoute: RouteInterface[] = BaseRoutes.filter(item => location.hash.includes(item.path))
// console.log(_matchedRoute[0].name, '----match')

$: {
    _title = (_matchedRoute[0] as any)?.name || 'TopCredi'
}

</script>

<svelte:window bind:scrollY={y} />
<!-- title -->
<svelte:head>
    <title>{_title}</title>
</svelte:head>
<main >
    <!-- 路由体 -->
    <Router {routes} />

</main>

