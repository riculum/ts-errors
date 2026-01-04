import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 401 Unauthorized
 * The HyperText Transfer Protocol (HTTP) 401 Unauthorized response status code
 * indicates that the client request has not been completed because it
 * lacks valid authentication credentials for the requested resource.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
 */
export class UnauthorizedError extends HttpError {
  constructor(message = 'Unauthorized', metadata?: ErrorMetadata) {
    super(message, 401, metadata)
  }
}
