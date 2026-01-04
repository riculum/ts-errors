import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 412 Precondition Failed
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412
 */
export class PreconditionFailedError extends HttpError {
    constructor(message = 'Precondition Failed', metadata?: ErrorMetadata) {
        super(message, 412, metadata)
    }
}
