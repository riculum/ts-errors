export type JsonValue =
    | string
    | number
    | boolean
    | null
    | { [key: string]: JsonValue }
    | JsonValue[]

export type ErrorMetadata = Record<string, JsonValue>

export type HttpErrorPayload = {
    name: string
    message: string
    statusCode: number
    metadata?: ErrorMetadata
}