import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 508 Loop Detected
 * The HyperText Transfer Protocol (HTTP) 508 Loop Detected response status code
 * may be given in the context of the Web Distributed Authoring and Versioning (WebDAV) protocol.
 *
 * It indicates that the server terminated an operation because it encountered an infinite loop
 * while processing a request with "Depth: infinity".
 * This status indicates that the entire operation failed.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508
 */
export class LoopDetectedError extends HttpError {
    constructor(message = 'Loop Detected', metadata?: ErrorMetadata) {
        super(message, 508, metadata)
    }
}
