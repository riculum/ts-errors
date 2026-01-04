import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 501 Not Implemented
 * The HyperText Transfer Protocol (HTTP) 501 Not Implemented server error response code means
 * that the server does not support the functionality required to fulfill the request.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
 */
export class NotImplementedError extends HttpError {
    constructor(message = 'Not Implemented', metadata?: ErrorMetadata) {
        super(message, 501, metadata)
    }
}
