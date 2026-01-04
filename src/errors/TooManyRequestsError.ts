import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 429 Too Many Requests
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
 */
export class TooManyRequestsError extends HttpError {
    constructor(message = 'Too Many Requests', metadata?: ErrorMetadata) {
        super(message, 429, metadata)
    }
}
