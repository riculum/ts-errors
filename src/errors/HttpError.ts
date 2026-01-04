import type { ErrorMetadata, HttpErrorPayload } from '../types.js'

export class HttpError extends Error {
    public readonly statusCode: number
    public readonly metadata: ErrorMetadata | undefined

    constructor(message: string, statusCode: number, metadata?: ErrorMetadata) {
        super(message)
        this.name = new.target.name
        this.statusCode = statusCode
        this.metadata = metadata
    }

    toJSON(): HttpErrorPayload {
        return {
            name: this.name,
            message: this.message,
            statusCode: this.statusCode,
            ...(this.metadata ? { metadata: this.metadata } : {}),
        }
    }
}
