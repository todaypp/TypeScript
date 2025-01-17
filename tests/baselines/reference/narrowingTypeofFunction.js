//// [narrowingTypeofFunction.ts]
type Meta = { foo: string }
interface F { (): string }

function f1(a: (F & Meta) | string) {
    if (typeof a === "function") {
        a;
    }
    else {
        a;
    }
}

function f2<T>(x: (T & F) | T & string) {
    if (typeof x === "function") {
        x;
    }
    else {
        x;
    }
}

//// [narrowingTypeofFunction.js]
"use strict";
function f1(a) {
    if (typeof a === "function") {
        a;
    }
    else {
        a;
    }
}
function f2(x) {
    if (typeof x === "function") {
        x;
    }
    else {
        x;
    }
}
