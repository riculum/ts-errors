import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 428 Precondition Required
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428
 */
export class PreconditionRequiredError extends HttpError {
    constructor(message = 'Precondition Required', metadata?: ErrorMetadata) {
        super(message, 428, metadata)
    }
}
