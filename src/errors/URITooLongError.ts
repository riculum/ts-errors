import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 414 URI Too Long
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414
 */
export class URITooLongError extends HttpError {
    constructor(message = 'URI Too Long', metadata?: ErrorMetadata) {
        super(message, 414, metadata)
    }
}
