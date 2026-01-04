import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 425 Too Early
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425
 */
export class TooEarlyError extends HttpError {
    constructor(message = 'Too Early', metadata?: ErrorMetadata) {
        super(message, 425, metadata)
    }
}
