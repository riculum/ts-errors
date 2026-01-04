import { HttpError } from './HttpError.js'
import type { ErrorMetadata } from '../types.js'

/**
 * 510 Not Extended
 * The HyperText Transfer Protocol (HTTP) 510 Not Extended response status code
 * is sent in the context of the HTTP Extension Framework, defined in RFC 2774.
 *
 * In that specification a client may send a request that contains an extension declaration,
 * that describes the extension to be used. If the server receives such a request,
 * but any described extensions are not supported for the request, then the server
 * responds with the 510 status code.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510
 */
export class NotExtendedError extends HttpError {
    constructor(message = 'Not Extended', metadata?: ErrorMetadata) {
        super(message, 510, metadata)
    }
}
