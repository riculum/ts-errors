import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 422 Unprocessable Entity
 * The HyperText Transfer Protocol (HTTP) 422 Unprocessable Entity response status code indicates
 * that the server understands the content type of the request entity,
 * and the syntax of the request entity is correct, but it was unable to process the contained instructions.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
 */
export class UnprocessableEntityError extends HttpError {
  constructor(message = 'Unprocessable Entity', metadata?: ErrorMetadata) {
    super(message, 422, metadata)
  }
}
