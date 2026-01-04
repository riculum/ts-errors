# @riculum/ts-errors

A lightweight, type-safe collection of HTTP error classes for TypeScript and JavaScript projects.

This package provides a consistent way to throw, handle, and serialize HTTP errors across backend applications, APIs, and frameworks like Next.js.

---

## Features

- Typed HTTP error classes for common status codes
- Single `HttpError` base class
- Built-in `statusCode`, `message`, and optional `metadata`
- JSON serialization via `toJSON()`
- ESM-first, works with modern Node.js and frameworks
- Zero runtime dependencies

---

## Installation

```bash
npm install @riculum/ts-errors
```

or

```bash
pnpm add @riculum/ts-errors
```

---

## Basic Usage

### Throwing an error

```ts
import { BadRequestError } from '@riculum/ts-errors'

throw new BadRequestError('Email is required', {
  field: 'email',
})
```

---

## Catching and handling errors

```ts
import { HttpError } from '@riculum/ts-errors'

try {
  // your logic
} catch (err) {
  if (err instanceof HttpError) {
    console.log(err.statusCode)
    console.log(err.message)
    console.log(err.metadata)
  }
}
```

---

## JSON Serialization

All errors extending `HttpError` can be converted to JSON.

### Using `toJSON()`

```ts
import { BadRequestError } from '@riculum/ts-errors'

const err = new BadRequestError('Invalid input', { field: 'email' })

console.log(err.toJSON())
```

Output:

```json
{
  "name": "BadRequestError",
  "message": "Invalid input",
  "statusCode": 400,
  "metadata": {
    "field": "email"
  }
}
```

### Using `JSON.stringify`

```ts
import { BadRequestError } from '@riculum/ts-errors'

const err = new BadRequestError('Invalid input', { field: 'email' })

console.log(JSON.stringify(err))
// internally calls toJSON()
```

---

## Example with Next.js Route Handler

```ts
import { HttpError, UnauthorizedError } from '@riculum/ts-errors'

export async function GET() {
  try {
    const user = null
    if (!user) {
      throw new UnauthorizedError('Authentication required')
    }

    return Response.json({ ok: true })
  } catch (err) {
    if (err instanceof HttpError) {
      return Response.json(err.toJSON(), { status: err.statusCode })
    }

    return Response.json(
      {
        name: 'InternalServerError',
        message: 'Unexpected error',
        statusCode: 500,
      },
      { status: 500 },
    )
  }
}
```

---

## License

MIT