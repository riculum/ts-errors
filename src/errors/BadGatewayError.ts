import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 502 Bad Gateway
 * The HyperText Transfer Protocol (HTTP) 502 Bad Gateway server error response code
 * indicates that the server, while acting as a gateway or proxy, received
 * an invalid response from the upstream server.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502
 */
export class BadGatewayError extends HttpError {
    constructor(message = 'Bad Gateway', metadata?: ErrorMetadata) {
        super(message, 502, metadata)
    }
}
