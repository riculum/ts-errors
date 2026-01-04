export type ErrorMetadata = Record<string, string | number | boolean | null | undefined>

export type HttpErrorPayload = {
    name: string
    message: string
    statusCode: number
    metadata?: ErrorMetadata
}
