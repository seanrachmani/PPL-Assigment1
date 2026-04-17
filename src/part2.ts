import * as R from "ramda";

const stringToArray = R.split("");



/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
/*helper function*/
//takes a char and return trun if vowels array includes it/
const isVowel = (s: string) : boolean => R.includes(s,vowels);

/*actual function*/
export const countVowels: (s: string) => number = 
    R.pipe(R.toLower,stringToArray,R.filter(isVowel),R.length);
  
    
    
/* Question 2.2 */
export const isPalindrome = (text: string): boolean => undefined as any;;
  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => undefined as any;;
