import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 506 Variant Also Negotiates
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506
 */
export class VariantAlsoNegotiatesError extends HttpError {
    constructor(message = 'Variant Also Negotiates', metadata?: ErrorMetadata) {
        super(message, 506, metadata)
    }
}
