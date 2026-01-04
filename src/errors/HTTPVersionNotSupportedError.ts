import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 505 HTTP Version Not Supported
 * The HyperText Transfer Protocol (HTTP) 505 HTTP Version Not Supported response status code
 * indicates that the HTTP version used in the request is not supported by the server.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505
 */
export class HTTPVersionNotSupportedError extends HttpError {
    constructor(message = 'HTTP Version Not Supported', metadata?: ErrorMetadata) {
        super(message, 505, metadata)
    }
}
