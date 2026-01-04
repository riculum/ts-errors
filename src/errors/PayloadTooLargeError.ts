import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 413 Payload Too Large
 * The HTTP 413 Payload Too Large response status code indicates
 * that the request entity is larger than limits defined by server.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413
 */
export class PayloadTooLargeError extends HttpError {
    constructor(message = 'Payload Too Large', metadata?: ErrorMetadata) {
        super(message, 413, metadata)
    }
}
