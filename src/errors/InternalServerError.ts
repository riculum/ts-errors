import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 500 Internal Server Error
 * The HyperText Transfer Protocol (HTTP) 500 Internal Server Error
 * response code indicates that the server encountered
 * an unexpected condition that prevented it from fulfilling the request.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
 */
export class InternalServerError extends HttpError {
  constructor(message = 'Internal Server Error', metadata?: ErrorMetadata) {
    super(message, 500, metadata)
  }
}
