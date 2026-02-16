// utils/statusCodes.js

export const STATUS_CODES = {
    // 2XX Success
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,

    // 4XX Client Errors
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409, // Great for "Email already exists"

    // 5XX Server Errors
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
};