import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 415 Unsupported Media Type
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415
 */
export class UnsupportedMediaTypeError extends HttpError {
    constructor(message = 'Unsupported Media Type', metadata?: ErrorMetadata) {
        super(message, 415, metadata)
    }
}
