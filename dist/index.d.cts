type JsonValue = string | number | boolean | null | {
    [key: string]: JsonValue;
} | JsonValue[];
type ErrorMetadata = Record<string, JsonValue>;
type HttpErrorPayload = {
    name: string;
    message: string;
    statusCode: number;
    metadata?: ErrorMetadata;
};

declare class HttpError extends Error {
    readonly statusCode: number;
    readonly metadata: ErrorMetadata | undefined;
    constructor(message: string, statusCode: number, metadata?: ErrorMetadata);
    toJSON(): HttpErrorPayload;
}

/**
 * 502 Bad Gateway
 * The HyperText Transfer Protocol (HTTP) 502 Bad Gateway server error response code
 * indicates that the server, while acting as a gateway or proxy, received
 * an invalid response from the upstream server.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502
 */
declare class BadGatewayError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 400 Bad Request
 * The HyperText Transfer Protocol (HTTP) 400 Bad Request response status code
 * indicates that the server cannot or will not process the request due to something
 * that is perceived to be a client error (for example, malformed request syntax,
 * invalid request message framing, or deceptive request routing).
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
 */
declare class BadRequestError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 409 Conflict
 * The HTTP 409 Conflict response status code indicates
 * a request conflict with the current state of the target resource.
 *
 * Conflicts are most likely to occur in response to a PUT request.
 * For example, you may get a 409 response when uploading a file
 * that is older than the existing one on the server, resulting in
 * a version control conflict.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409
 */

declare class ConflictError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 417 Expectation Failed
 * The HTTP 417 Expectation Failed client error response code indicates
 * that the expectation given in the request's Expect header could not be met.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417
 */
declare class ExpectationFailedError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 403 Forbidden
 * The HTTP 403 Forbidden response status code indicates
 * that the server understands the request but refuses to authorize it.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
 */
declare class ForbiddenError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 504 Gateway Timeout
 * The HyperText Transfer Protocol (HTTP) 504 Gateway Timeout server error response code
 * indicates that the server, while acting as a gateway or proxy, did not get a response
 * in time from the upstream server that it needed in order to complete the request.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504
 */
declare class GatewayTimeoutError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 410 Gone
 * The HyperText Transfer Protocol (HTTP) 410 Gone client error response code indicates
 * that access to the target resource is no longer available at the origin server
 * and that this condition is likely to be permanent.
 *
 * If you don't know whether this condition is temporary or permanent,
 * a 404 status code should be used instead.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410
 */
declare class GoneError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 505 HTTP Version Not Supported
 * The HyperText Transfer Protocol (HTTP) 505 HTTP Version Not Supported response status code
 * indicates that the HTTP version used in the request is not supported by the server.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505
 */
declare class HTTPVersionNotSupportedError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 418 I'm a teapot
 * The HTTP 418 I'm a teapot client error response code indicates that the server refuses
 * to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee
 * should instead return 503. This error is a reference to Hyper Text Coffee Pot Control Protocol defined
 * in April Fools' jokes in 1998 and 2014.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418
 */
declare class ImATeapotError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 507 Insufficient Storage
 * The HyperText Transfer Protocol (HTTP) 507 Insufficient Storage response status code
 * may be given in the context of the Web Distributed Authoring and Versioning (WebDAV)
 * protocol (see RFC 4918).
 *
 * It indicates that a method could not be performed because the server
 * cannot store the representation needed to successfully complete the request.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507
 */
declare class InsufficientStorageError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 500 Internal Server Error
 * The HyperText Transfer Protocol (HTTP) 500 Internal Server Error
 * response code indicates that the server encountered
 * an unexpected condition that prevented it from fulfilling the request.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
 */
declare class InternalServerError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 411 Length Required
 * The HyperText Transfer Protocol (HTTP) 411 Length Required client error response code
 * indicates that the server refuses to accept the request without a defined Content-Length header.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411
 */
declare class LengthRequiredError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

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
declare class LoopDetectedError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 405 Method Not Allowed
 * The HyperText Transfer Protocol (HTTP) 405 Method Not Allowed response status code
 * indicates that the server knows the request method, but the target resource
 * doesn't support this method.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
 */
declare class MethodNotAllowedError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 511 Network Authentication Required
 * The HTTP 511 Network Authentication Required response status code
 * indicates that the client needs to authenticate to gain network access.
 *
 * This status is not generated by origin servers,
 * but by intercepting proxies that control access to the network.
 *
 * Network operators sometimes require some authentication,
 * acceptance of terms, or other user interaction before granting access
 * (for example in an internet café or at an airport). They often identify clients
 * who have not done so using their Media Access Control (MAC) addresses.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511
 */
declare class NetworkAuthenticationRequiredError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 406 Not Acceptable
 * The HyperText Transfer Protocol (HTTP) 406 Not Acceptable client error response code indicates
 * that the server cannot produce a response matching the list of acceptable values defined in
 * the request's proactive content negotiation headers, and that the server is unwilling to supply
 * a default representation.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406
 */
declare class NotAcceptableError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

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
declare class NotExtendedError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

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
declare class NotFoundError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 501 Not Implemented
 * The HyperText Transfer Protocol (HTTP) 501 Not Implemented server error response code means
 * that the server does not support the functionality required to fulfill the request.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
 */
declare class NotImplementedError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 413 Payload Too Large
 * The HTTP 413 Payload Too Large response status code indicates
 * that the request entity is larger than limits defined by server.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413
 */
declare class PayloadTooLargeError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 402 Payment Required
 * The HTTP 402 Payment Required is a nonstandard response status code
 * that is reserved for future use.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402
 */
declare class PaymentRequiredError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 412 Precondition Failed
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412
 */
declare class PreconditionFailedError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 428 Precondition Required
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428
 */
declare class PreconditionRequiredError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 407 Proxy Authentication Required
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407
 */
declare class ProxyAuthenticationRequiredError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 416 Range Not Satisfiable
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416
 */
declare class RangeNotSatisfiableError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 431 Request Header Fields Too Large
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431
 */
declare class RequestHeaderFieldsTooLargeError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 408 Request Timeout
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408
 */
declare class RequestTimeoutError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 425 Too Early
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425
 */
declare class TooEarlyError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 429 Too Many Requests
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
 */
declare class TooManyRequestsError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 401 Unauthorized
 * The HyperText Transfer Protocol (HTTP) 401 Unauthorized response status code
 * indicates that the client request has not been completed because it
 * lacks valid authentication credentials for the requested resource.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
 */
declare class UnauthorizedError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 451 Unavailable For Legal Reasons
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451
 */
declare class UnavailableForLegalReasonsError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 422 Unprocessable Entity
 * The HyperText Transfer Protocol (HTTP) 422 Unprocessable Entity response status code indicates
 * that the server understands the content type of the request entity,
 * and the syntax of the request entity is correct, but it was unable to process the contained instructions.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
 */
declare class UnprocessableEntityError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 415 Unsupported Media Type
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415
 */
declare class UnsupportedMediaTypeError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 426 Upgrade Required
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426
 */
declare class UpgradeRequiredError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 414 URI Too Long
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414
 */
declare class URITooLongError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

/**
 * 506 Variant Also Negotiates
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506
 */
declare class VariantAlsoNegotiatesError extends HttpError {
    constructor(message?: string, metadata?: ErrorMetadata);
}

export { BadGatewayError, BadRequestError, ConflictError, type ErrorMetadata, ExpectationFailedError, ForbiddenError, GatewayTimeoutError, GoneError, HTTPVersionNotSupportedError, HttpError, type HttpErrorPayload, ImATeapotError, InsufficientStorageError, InternalServerError, type JsonValue, LengthRequiredError, LoopDetectedError, MethodNotAllowedError, NetworkAuthenticationRequiredError, NotAcceptableError, NotExtendedError, NotFoundError, NotImplementedError, PayloadTooLargeError, PaymentRequiredError, PreconditionFailedError, PreconditionRequiredError, ProxyAuthenticationRequiredError, RangeNotSatisfiableError, RequestHeaderFieldsTooLargeError, RequestTimeoutError, TooEarlyError, TooManyRequestsError, URITooLongError, UnauthorizedError, UnavailableForLegalReasonsError, UnprocessableEntityError, UnsupportedMediaTypeError, UpgradeRequiredError, VariantAlsoNegotiatesError };
