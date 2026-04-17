import * as R from "../src/lib/result";
import * as F from "../src/part3";

describe("Assignment 1 - Part 3", () => {
    describe("findResult", () => {
        // המקוריים שלך
        it("returns a Failure when no element was found 1", () => {
            const my_list: string[] = ["dog", "cat", "rat"]
            expect(F.findResult(x => x.length > 3, my_list)).toSatisfy(R.isFailure);
        });
        it("returns a Failure when no element was found 2", () => {
            const my_list: string[] = ["dog", "cat", "rat"]
            expect(F.findResult(x => x[0] === "z", my_list)).toSatisfy(R.isFailure);
        });
        it("returns an Ok when an element was found 1", () => {
            const my_list: string[] = ["raccoon", "ostrich", "slug"]
            expect(F.findResult(x => x.length > 3, my_list)).toSatisfy(R.isOk);
        });
        it("returns an Ok when an element was found 2", () => {
            const my_list: string[] = ["raccoon", "ostrich", "slug"]
            expect(F.findResult(x => x.length > 3, my_list)).toEqual(R.makeOk("raccoon"));
        });
        it("returns an Ok when an element was found 3", () => {
            const my_list: string[] = ["raccoon", "ostrich", "slug"]
            expect(F.findResult(x => x[0] === "s", my_list)).toEqual(R.makeOk("slug"));
        });
        // החדשים
        it("returns a Failure for an empty array", () => {
            expect(F.findResult(x => x > 5, [])).toSatisfy(R.isFailure);
        });
        it("works with number arrays", () => {
            const numbers: number[] = [1, 3, -5, 7];
            expect(F.findResult(x => x < 0, numbers)).toEqual(R.makeOk(-5));
        });
    });

    describe("returnSquaredIfFoundEven", () => {
        // המקוריים שלך
        it("returns an Ok of the first even number squared in v2 (1)", () => { expect(F.returnSquaredIfFoundEven_v2([1, 2, 3])).toEqual(R.makeOk(4)); });
        it("returns an Ok of the first even number squared in v2 (2)", () => { expect(F.returnSquaredIfFoundEven_v2([1, 4, 3])).toEqual(R.makeOk(16)); });
        it("returns an Ok of the first even number squared in v2 (3)", () => { expect(F.returnSquaredIfFoundEven_v2([32, 64, 128])).toEqual(R.makeOk(1024)); });
        it("return a Failure if no even numbers are in the array in v2 (1)", () => { expect(F.returnSquaredIfFoundEven_v2([1, 3, 5])).toSatisfy(R.isFailure); });
        it("return a Failure if no even numbers are in the array in v2 (2)", () => { expect(F.returnSquaredIfFoundEven_v2([])).toSatisfy(R.isFailure); });
        
        it("returns the first even number squared in v3 (1)", () => { expect(F.returnSquaredIfFoundEven_v3([1, 2, 3])).toBe(4); });
        it("returns the first even number squared in v3 (2)", () => { expect(F.returnSquaredIfFoundEven_v3([1, 4, 3])).toBe(16); });
        it("returns the first even number squared in v3 (3)", () => { expect(F.returnSquaredIfFoundEven_v3([32, 64, 128])).toBe(1024); });
        it("returns -1 if no even numbers are in the array in v3 (1)", () => { expect(F.returnSquaredIfFoundEven_v3([1, 3, 5])).toBe(-1); });
        it("returns -1 if no even numbers are in the array in v3 (2)", () => { expect(F.returnSquaredIfFoundEven_v3([])).toBe(-1); });

        // החדשים
        it("handles zero correctly in v2 (0 is even, 0^2 = 0)", () => { expect(F.returnSquaredIfFoundEven_v2([1, 0, 3])).toEqual(R.makeOk(0)); });
        it("handles negative even numbers correctly in v2", () => { expect(F.returnSquaredIfFoundEven_v2([3, -4, 5])).toEqual(R.makeOk(16)); });
        it("handles zero correctly in v3", () => { expect(F.returnSquaredIfFoundEven_v3([1, 0, 3])).toBe(0); });
        it("handles negative even numbers correctly in v3", () => { expect(F.returnSquaredIfFoundEven_v3([3, -4, 5])).toBe(16); });
    });
});