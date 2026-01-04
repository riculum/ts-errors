import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 402 Payment Required
 * The HTTP 402 Payment Required is a nonstandard response status code
 * that is reserved for future use.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402
 */
export class PaymentRequiredError extends HttpError {
    constructor(message = 'Payment Required', metadata?: ErrorMetadata) {
        super(message, 402, metadata)
    }
}
