import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 451 Unavailable For Legal Reasons
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451
 */
export class UnavailableForLegalReasonsError extends HttpError {
    constructor(message = 'Unavailable For Legal Reasons', metadata?: ErrorMetadata) {
        super(message, 451, metadata)
    }
}
