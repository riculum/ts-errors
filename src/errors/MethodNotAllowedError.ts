import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 405 Method Not Allowed
 * The HyperText Transfer Protocol (HTTP) 405 Method Not Allowed response status code
 * indicates that the server knows the request method, but the target resource
 * doesn't support this method.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
 */
export class MethodNotAllowedError extends HttpError {
    constructor(message = 'Method Not Allowed', metadata?: ErrorMetadata) {
        super(message, 405, metadata)
    }
}
