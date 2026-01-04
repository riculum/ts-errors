import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 406 Not Acceptable
 * The HyperText Transfer Protocol (HTTP) 406 Not Acceptable client error response code indicates
 * that the server cannot produce a response matching the list of acceptable values defined in
 * the request's proactive content negotiation headers, and that the server is unwilling to supply
 * a default representation.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406
 */
export class NotAcceptableError extends HttpError {
    constructor(message = 'Not Acceptable', metadata?: ErrorMetadata) {
        super(message, 406, metadata)
    }
}
