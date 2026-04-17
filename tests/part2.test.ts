import { countVowels, isPalindrome, treeToSentence, WordTree } from "../src/part2";

describe("Assignment 1 Part 2", () => {
    describe("countVowels", () => {
        // המקוריים שלך
        it("counts letters 1", () => { expect(countVowels("aaabbbb")).toEqual(3); });
        it("counts letters 2", () => { expect(countVowels("AaaBbbb")).toEqual(3); });
        it("counts letters 3", () => { expect(countVowels("ABbbaab")).toEqual(3); });
        it("counts letters 4", () => { expect(countVowels("I am robot")).toEqual(4); });
        it("counts letters 5", () => { expect(countVowels("abcABCaabbcc d")).toEqual(4); });
        // החדשים
        it("returns 0 for an empty string", () => { expect(countVowels("")).toEqual(0); });
        it("returns 0 for a string with no vowels", () => { expect(countVowels("xyz wrt")).toEqual(0); });
        it("handles strings with only vowels", () => { expect(countVowels("aeiouAEIOU")).toEqual(10); });
        it("ignores numbers and special characters", () => { expect(countVowels("123 !@# a")).toEqual(1); });
    });

    describe("isPalindrome", () => {
        // המקוריים שלך
        it("should return true for a simple palindrome", () => { expect(isPalindrome("racecar")).toBe(true); });
        it("should return true for a palindrome with mixed case", () => { expect(isPalindrome("RaceCar")).toBe(true); });
        it("should return true for a palindrome ignoring spaces and punctuation", () => { expect(isPalindrome("A man, a plan, a canal, Panama!")).toBe(true); });
        it("should return false for a non-palindrome", () => { expect(isPalindrome("Not a palindrome")).toBe(false); });
        it("should return true for an empty string", () => { expect(isPalindrome("")).toBe(true); });
        it("should return true for a single-character string", () => { expect(isPalindrome("a")).toBe(true); });
        it("should handle numeric palindromes", () => { expect(isPalindrome("12321")).toBe(true); });
        it("should handle palindromes with special characters", () => { expect(isPalindrome("No lemon <=> No melon")).toBe(true); });
        // החדשים
        it("should return true for a string of only punctuation (reduces to empty)", () => { expect(isPalindrome(" .,;! ")).toBe(true); });
    });

    describe("treeToSentence", () => {
        // המקוריים שלך
        it("Represents a tree as a sentence 1", () => {
            const t1: WordTree = {root:"hello", children:[{root: "world", children:[]}]}
            expect(treeToSentence(t1)).toBe("hello world");
        });
        it("Represents a tree as a sentence 2", () => {
            const t2: WordTree = {root:"hello", children:[{root: "there", children:[]}, {root:"!", children:[]}]}
            expect(treeToSentence(t2)).toBe("hello there !");
        });
        it("Represents a tree as a sentence 3", () => {
            const t3: WordTree = {root:"hello", children:[{root: "there", children:[{root:"!", children:[]}]}]}
            expect(treeToSentence(t3)).toBe("hello there !");
        });
        it("Represents a tree as a sentence 4", () => {
            const t4: WordTree = {root:"hello", children:[]}
            expect(treeToSentence(t4)).toBe("hello");
        });
        it("Represents a tree as a sentence 5", () => {
            const t5: WordTree = {root:"", children:[]}
            expect(treeToSentence(t5)).toBe("");
        });
        // החדשים
        it("Represents a complex multi-branch tree as a sentence", () => {
            const t6: WordTree = {
                root: "I", 
                children: [
                    {root: "love", children: []}, 
                    {root: "functional", children: [{root: "programming", children: []}]}
                ]
            };
            expect(treeToSentence(t6)).toBe("I love functional programming");
        });
    });
});