"use strict";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('asd', 20);
