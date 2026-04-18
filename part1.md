## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative:  
   <u>**Answer:**</u> A program is a sequence of commands that are executed one by one. 
   1. [5 points] Object Oriented  
  <u>**Answer:**</u> Based on objects.Each object which is represented by a Class has saved data-characteristics(fields) and methods.The execution is driven by the methods that are executed directly on specific object and using its fields/changing them.
   1. [5 points] Functional  
   <u>**Answer:**</u> A program is an expression that is being executed by evaluating the expression's value. Furthermore, functions are expressions and can be sent as parameters to other functions.Lastly, functions have no side effects: any function only takes input and returns a value.It doesn't change any variable(assignment) or data structure(mutation), printing to the screen, etc.

1. [5 points] How does the object oriented paradigm improve over the imperative paradigm?  
<u>**Answer:**</u> First, it helps us categorize and maintain our code by units(objects), which is more organized. Second, it's more secure since we can define object's fields to be private which helps prevent outside changes of the object information (fields).Furthermore, it helps us avoid code repetition, since we can make some object(1) inherit other object(2) which leads to the inherited object(1) having all fields and methods of original object(2) without duplicate code, which is often done by imperative programming for similar procedures.
1. [5 points] How does the functional paradigm improve over the object oriented paradigm?  
<u>**Answer:**</u> Functional programming is easier to test since it has no side effects, which object oriented has(object state can be changed). In addition since there is no mutation in functional programming, we don't have to worry about shared resources and concurrency. 

### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```

This function uses an imperative approach withV loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.


<u>**Answer:**</u>
```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};
//ANSWER
const getDiscountedProductAveragePriceFP = (inventory: Product[]): number => {
//only discounted products:
const discountedInv = inventory.filter(x=> x.discounted === true);
//count:
const count = discountedInv.length;
//get products price:
const prices = discountedInv.map(x => x.price);
//accumulate the price
const sum = prices.reduce((acc,curr) => acc+curr,0);
const avg = (count===0) ? 0 : (sum/count);
return avg;
};
```


### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.


1. [3 points] `(x, y) => x.some(y)`  
<u>**Answer:**</u>  `<T>(x: T[], y: (item: T) => boolean) => boolean`
2. [3 points] `x => x.map(y => y * 2)`  
<u>**Answer:**</u> `(x: number[]) => number[]`
3. [3 points] `(x, y) => x.filter(y)`  
<u>**Answer:**</u> `<T>(x: T[], y: (item: T) => boolean) => T[]`
4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`  
<u>**Answer:**</u> `(x: number[]) => number`
5. [3 points] `(x, y) => x ? y[0] : y[1]`  
<u>**Answer:**</u> `<T>(x: boolean, y: T[]) => T`
6. [3 points] `(f,g) => x => f(g(x+1))`  
<u>**Answer:**</u> `<T1,T2>(f: (item: T1) => T2, g: (num: number) => T1) => ((x: number) => T2)`
