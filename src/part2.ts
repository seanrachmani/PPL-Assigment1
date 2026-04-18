import * as R from "ramda";

const stringToArray = R.split("");



/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
/*helper function:*/
//takes a char and return trun if vowels array includes it/
const isVowel: (s: string) => boolean = (s: string) => R.includes(s,vowels);
/*actual function:*/
export const countVowels: (s: string) => number = R.pipe(R.toLower,stringToArray,R.filter(isVowel),R.length);
  
    

/* Question 2.2 */
/*helper function:*/
//removes spaces, punctuation, and capitalization
//pipe returns function that takes s 
const cleanString: (s: string) => string = R.pipe(R.toLower,R.replace(/[^a-z0-9]/g,""));
/*actual function:*/
export const isPalindrome = (text: string): boolean => 
    R.equals(cleanString(text),R.reduce((acc: string, curr: string) => curr + acc ,"", stringToArray(cleanString(text))));
  


/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}
export const treeToSentence = (t: WordTree): string => 
    //a new array with the words we need to concat: R.prepend(t.root,R.map(treeToSentence,t.children));
     R.join(" ",R.prepend(t.root,R.map(treeToSentence,t.children)));
