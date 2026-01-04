// src/errors/HttpError.ts
var HttpError = class extends Error {
  statusCode;
  metadata;
  constructor(message, statusCode, metadata) {
    super(message);
    this.name = new.target.name;
    this.statusCode = statusCode;
    this.metadata = metadata;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      statusCode: this.statusCode,
      ...this.metadata ? { metadata: this.metadata } : {}
    };
  }
};

// src/errors/BadGatewayError.ts
var BadGatewayError = class extends HttpError {
  constructor(message = "Bad Gateway", metadata) {
    super(message, 502, metadata);
  }
};

// src/errors/BadRequestError.ts
var BadRequestError = class extends HttpError {
  constructor(message = "Bad Request", metadata) {
    super(message, 400, metadata);
  }
};

// src/errors/ConflictError.ts
var ConflictError = class extends HttpError {
  constructor(message = "Conflict", metadata) {
    super(message, 409, metadata);
  }
};

// src/errors/ExpectationFailedError.ts
var ExpectationFailedError = class extends HttpError {
  constructor(message = "Expectation Failed", metadata) {
    super(message, 417, metadata);
  }
};

// src/errors/ForbiddenError.ts
var ForbiddenError = class extends HttpError {
  constructor(message = "Forbidden", metadata) {
    super(message, 403, metadata);
  }
};

// src/errors/GatewayTimeoutError.ts
var GatewayTimeoutError = class extends HttpError {
  constructor(message = "Gateway Timeout", metadata) {
    super(message, 504, metadata);
  }
};

// src/errors/GoneError.ts
var GoneError = class extends HttpError {
  constructor(message = "Gone", metadata) {
    super(message, 410, metadata);
  }
};

// src/errors/HTTPVersionNotSupportedError.ts
var HTTPVersionNotSupportedError = class extends HttpError {
  constructor(message = "HTTP Version Not Supported", metadata) {
    super(message, 505, metadata);
  }
};

// src/errors/ImATeapotError.ts
var ImATeapotError = class extends HttpError {
  constructor(message = "I'm a teapot", metadata) {
    super(message, 418, metadata);
  }
};

// src/errors/InsufficientStorageError.ts
var InsufficientStorageError = class extends HttpError {
  constructor(message = "Insufficient Storage", metadata) {
    super(message, 507, metadata);
  }
};

// src/errors/InternalServerError.ts
var InternalServerError = class extends HttpError {
  constructor(message = "Internal Server Error", metadata) {
    super(message, 500, metadata);
  }
};

// src/errors/LengthRequiredError.ts
var LengthRequiredError = class extends HttpError {
  constructor(message = "Length Required", metadata) {
    super(message, 411, metadata);
  }
};

// src/errors/LoopDetectedError.ts
var LoopDetectedError = class extends HttpError {
  constructor(message = "Loop Detected", metadata) {
    super(message, 508, metadata);
  }
};

// src/errors/MethodNotAllowedError.ts
var MethodNotAllowedError = class extends HttpError {
  constructor(message = "Method Not Allowed", metadata) {
    super(message, 405, metadata);
  }
};

// src/errors/NetworkAuthenticationRequiredError.ts
var NetworkAuthenticationRequiredError = class extends HttpError {
  constructor(message = "Network Authentication Required", metadata) {
    super(message, 511, metadata);
  }
};

// src/errors/NotAcceptableError.ts
var NotAcceptableError = class extends HttpError {
  constructor(message = "Not Acceptable", metadata) {
    super(message, 406, metadata);
  }
};

// src/errors/NotExtendedError.ts
var NotExtendedError = class extends HttpError {
  constructor(message = "Not Extended", metadata) {
    super(message, 510, metadata);
  }
};

// src/errors/NotFoundError.ts
var NotFoundError = class extends HttpError {
  constructor(message = "Not found", metadata) {
    super(message, 404, metadata);
  }
};

// src/errors/NotImplementedError.ts
var NotImplementedError = class extends HttpError {
  constructor(message = "Not Implemented", metadata) {
    super(message, 501, metadata);
  }
};

// src/errors/PayloadTooLargeError.ts
var PayloadTooLargeError = class extends HttpError {
  constructor(message = "Payload Too Large", metadata) {
    super(message, 413, metadata);
  }
};

// src/errors/PaymentRequiredError.ts
var PaymentRequiredError = class extends HttpError {
  constructor(message = "Payment Required", metadata) {
    super(message, 402, metadata);
  }
};

// src/errors/PreconditionFailedError.ts
var PreconditionFailedError = class extends HttpError {
  constructor(message = "Precondition Failed", metadata) {
    super(message, 412, metadata);
  }
};

// src/errors/PreconditionRequiredError.ts
var PreconditionRequiredError = class extends HttpError {
  constructor(message = "Precondition Required", metadata) {
    super(message, 428, metadata);
  }
};

// src/errors/ProxyAuthenticationRequiredError.ts
var ProxyAuthenticationRequiredError = class extends HttpError {
  constructor(message = "Proxy Authentication Required", metadata) {
    super(message, 407, metadata);
  }
};

// src/errors/RangeNotSatisfiableError.ts
var RangeNotSatisfiableError = class extends HttpError {
  constructor(message = "Range Not Satisfiable", metadata) {
    super(message, 416, metadata);
  }
};

// src/errors/RequestHeaderFieldsTooLargeError.ts
var RequestHeaderFieldsTooLargeError = class extends HttpError {
  constructor(message = "Request Header Fields Too Large", metadata) {
    super(message, 431, metadata);
  }
};

// src/errors/RequestTimeoutError.ts
var RequestTimeoutError = class extends HttpError {
  constructor(message = "Request Timeout", metadata) {
    super(message, 408, metadata);
  }
};

// src/errors/TooEarlyError.ts
var TooEarlyError = class extends HttpError {
  constructor(message = "Too Early", metadata) {
    super(message, 425, metadata);
  }
};

// src/errors/TooManyRequestsError.ts
var TooManyRequestsError = class extends HttpError {
  constructor(message = "Too Many Requests", metadata) {
    super(message, 429, metadata);
  }
};

// src/errors/UnauthorizedError.ts
var UnauthorizedError = class extends HttpError {
  constructor(message = "Unauthorized", metadata) {
    super(message, 401, metadata);
  }
};

// src/errors/UnavailableForLegalReasonsError.ts
var UnavailableForLegalReasonsError = class extends HttpError {
  constructor(message = "Unavailable For Legal Reasons", metadata) {
    super(message, 451, metadata);
  }
};

// src/errors/UnprocessableEntityError.ts
var UnprocessableEntityError = class extends HttpError {
  constructor(message = "Unprocessable Entity", metadata) {
    super(message, 422, metadata);
  }
};

// src/errors/UnsupportedMediaTypeError.ts
var UnsupportedMediaTypeError = class extends HttpError {
  constructor(message = "Unsupported Media Type", metadata) {
    super(message, 415, metadata);
  }
};

// src/errors/UpgradeRequiredError.ts
var UpgradeRequiredError = class extends HttpError {
  constructor(message = "Upgrade Required", metadata) {
    super(message, 426, metadata);
  }
};

// src/errors/URITooLongError.ts
var URITooLongError = class extends HttpError {
  constructor(message = "URI Too Long", metadata) {
    super(message, 414, metadata);
  }
};

// src/errors/VariantAlsoNegotiatesError.ts
var VariantAlsoNegotiatesError = class extends HttpError {
  constructor(message = "Variant Also Negotiates", metadata) {
    super(message, 506, metadata);
  }
};
export {
  BadGatewayError,
  BadRequestError,
  ConflictError,
  ExpectationFailedError,
  ForbiddenError,
  GatewayTimeoutError,
  GoneError,
  HTTPVersionNotSupportedError,
  HttpError,
  ImATeapotError,
  InsufficientStorageError,
  InternalServerError,
  LengthRequiredError,
  LoopDetectedError,
  MethodNotAllowedError,
  NetworkAuthenticationRequiredError,
  NotAcceptableError,
  NotExtendedError,
  NotFoundError,
  NotImplementedError,
  PayloadTooLargeError,
  PaymentRequiredError,
  PreconditionFailedError,
  PreconditionRequiredError,
  ProxyAuthenticationRequiredError,
  RangeNotSatisfiableError,
  RequestHeaderFieldsTooLargeError,
  RequestTimeoutError,
  TooEarlyError,
  TooManyRequestsError,
  URITooLongError,
  UnauthorizedError,
  UnavailableForLegalReasonsError,
  UnprocessableEntityError,
  UnsupportedMediaTypeError,
  UpgradeRequiredError,
  VariantAlsoNegotiatesError
};
//# sourceMappingURL=index.js.map