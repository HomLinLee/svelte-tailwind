import { APPBridge } from './bridge'
interface Window extends globalThis {
    control?: APPBridge
}
