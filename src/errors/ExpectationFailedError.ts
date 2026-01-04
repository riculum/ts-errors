import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 417 Expectation Failed
 * The HTTP 417 Expectation Failed client error response code indicates
 * that the expectation given in the request's Expect header could not be met.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417
 */
export class ExpectationFailedError extends HttpError {
    constructor(message = 'Expectation Failed', metadata?: ErrorMetadata) {
        super(message, 417, metadata)
    }
}
