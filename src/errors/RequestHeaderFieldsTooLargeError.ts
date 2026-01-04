import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 431 Request Header Fields Too Large
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431
 */
export class RequestHeaderFieldsTooLargeError extends HttpError {
    constructor(message = 'Request Header Fields Too Large', metadata?: ErrorMetadata) {
        super(message, 431, metadata)
    }
}
