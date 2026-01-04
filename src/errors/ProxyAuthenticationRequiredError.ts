import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 407 Proxy Authentication Required
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407
 */
export class ProxyAuthenticationRequiredError extends HttpError {
    constructor(message = 'Proxy Authentication Required', metadata?: ErrorMetadata) {
        super(message, 407, metadata)
    }
}
