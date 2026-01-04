import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 408 Request Timeout
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408
 */
export class RequestTimeoutError extends HttpError {
    constructor(message = 'Request Timeout', metadata?: ErrorMetadata) {
        super(message, 408, metadata)
    }
}
