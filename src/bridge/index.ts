type ClickArg =
    | 'tel'
    | 'email'

export interface APPBridge {
    getBaseInfo?: () => string
    onClick?: (type: ClickArg, data: string) => void
}