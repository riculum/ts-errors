import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 426 Upgrade Required
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426
 */
export class UpgradeRequiredError extends HttpError {
    constructor(message = 'Upgrade Required', metadata?: ErrorMetadata) {
        super(message, 426, metadata)
    }
}
