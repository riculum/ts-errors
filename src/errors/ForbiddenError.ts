import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 403 Forbidden
 * The HTTP 403 Forbidden response status code indicates
 * that the server understands the request but refuses to authorize it.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
 */
export class ForbiddenError extends HttpError {
  constructor(message = 'Forbidden', metadata?: ErrorMetadata) {
    super(message, 403, metadata)
  }
}
