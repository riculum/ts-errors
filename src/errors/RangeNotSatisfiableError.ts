import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 416 Range Not Satisfiable
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416
 */
export class RangeNotSatisfiableError extends HttpError {
    constructor(message = 'Range Not Satisfiable', metadata?: ErrorMetadata) {
        super(message, 416, metadata)
    }
}
