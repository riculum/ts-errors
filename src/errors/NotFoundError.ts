import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 404 Not Found
 * The HTTP 404 Not Found response status code indicates
 * that the server cannot find the requested resource.
 * Links that lead to a 404 page are often called broken or
 * dead links and can be subject to link rot
 *
 * A 404 status code only indicates that the resource is missing:
 * not whether the absence is temporary or permanent.
 * If a resource is permanently removed, use the 410 (Gone) status instead.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404
 */

export class NotFoundError extends HttpError {
  constructor(message = 'Not found', metadata?: ErrorMetadata) {
    super(message, 404, metadata)
  }
}
