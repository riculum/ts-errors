import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 504 Gateway Timeout
 * The HyperText Transfer Protocol (HTTP) 504 Gateway Timeout server error response code
 * indicates that the server, while acting as a gateway or proxy, did not get a response
 * in time from the upstream server that it needed in order to complete the request.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504
 */
export class GatewayTimeoutError extends HttpError {
    constructor(message = 'Gateway Timeout', metadata?: ErrorMetadata) {
        super(message, 504, metadata)
    }
}
