import { Result, makeFailure, makeOk, bind, either } from "./lib/result";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

//3.1:
//takes a predicate and an array
//returns an Ok on the first element that the predicate returns true for, or a Failure if no such element exists.
export const findResult = <T>(pred: (x: T) => boolean, a: T[]): Result<T> => {
    const filtered: T[] = a.filter(pred);
    return filtered.length === 0 ? makeFailure("no such elemnt exists") : makeOk(filtered[0]);
};

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

//3.2:
//Only using bind
//uses findResult
//return an Ok on the first even value squared, or a Failure if no even numbers exist.
export const returnSquaredIfFoundEven_v2 = (a: number[]): Result<number> => {
    //bind takes original monad anf square func
    //find result takes predicate&array
    return bind(findResult((x: number) => x % 2 === 0, a),(x: number) => makeOk(x*x));
};

//3.3
//Only using either 
//uses findResult
//return the first even value squared, or a -1 if no even numbers exist.
export const returnSquaredIfFoundEven_v3 = (a: number[]): number => {
    return either(findResult((x: number) => x % 2 === 0,a), (value: number) => value * value, (message: string) => -1);
}

