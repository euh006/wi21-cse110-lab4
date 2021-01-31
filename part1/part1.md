# Question 1
Line 11 will return the final value of i after all of the iterations.

# Question 2
Line 12 will return the discounted price of the final item.

# Question 3
Line 13 will return the discounted price rounded to the nearest hundredth.

# Question 4
The function will return [50, 100, 150]. Each iteration, we will look at the elements and find the discounted value by multiplying the original price with 1 - discount fraction. Then, the discounted value is multipled by 100, rounded, and then divided by 100. Since our values are in no need to be rounded, we can ignore this step for now. This would mean that 100 would change into 50 since 100*(1-0.5) = 50, 200 would change into 100 since 200*(1-0.5) = 100, and 300 would change into 150 with the same logic.

# Question 5
Line 11 will cause a ReferenceError, since the declaration of i is limited to the block (loop) due to it being a 'let' defined variable. Outside of the loop, the value of discountedPrice is not defined and therefore will return a ReferenceError.

# Question 6
Line 12 will cause an ReferenceError, since the declaration of discountedPrice is limited to the block (loop) due to it being a 'let' defined variable. Outside of the loop, the value of discountedPrice is not defined and therefore will return a ReferenceError.

# Question 7
Line 13 will return the discounted price rounded to the nearest hundredth.

# Question 8
The function will return [50, 100, 150] Just like Question 4. While Question 5 and 6 has an error, we do not need i and discountedPrice outside of the loop in order to calculate the final price for each of the items.

# Question 9
Line 11 will cause a ReferenceError, same reason due to Question 5.

# Question 10
Line 12 will cause an ReferenceError, since the declaration of discountedPrice is limited to the block (loop) due to it being a 'const' defined variable. Outside of the loop, the value of discountedPrice is not defined and therefore will return a ReferenceError.

# Question 11
Line 13 will return 0.

# Question 12
The function will have a TypeError, since const variable finalPrice cannot be re-declared within the loop (because it's a const variable) during rounding.

# Question 13

### A
student.name

### B
student['Grad Year']

### C
student.greeting();

### D
student['Favorite Teacher'].name

### E
student.courseLoad[0]

# Question 14

### A
32

String conversion of 2 to match with the first encountered char variable '3'.
### B
1

Numeric conversion of '3' to match with the subtraction, causing '3' to convert into number 3.

### C
3

Numeric conversion of null into 0, since you cannot add things to null.
### D
3null

String conversion of null to match with char variable '3'.

### E
4

Since 3 cannot be added to a boolean object, true is converted into 1 by numeric conversion, and thus 1+3 = 4.

### F
0

Since you cannot add boolean or null, they both get numeric conversion; both are 0, so 0+0 = 0.

### G
3undefined

String conversion of undefined to match with string variable "3".

### H
NaN

Due to subtraction, this is a numeric conversion, and thus undefined turns into NaN. NaN overrides any math values and thus returns NaN.

# Question 15

### A
true

Converts '2' into number 2, 2 > 1 = true.

### B
false

Looks at the two strings, '2' is "bigger" than the first char of '12', thus '2' < '12' = false.

### C
true

Converts '2' into 2, 2 is equal to 2, return true.

### D
false

2 and '2' have different type, so === returns false.

### E
false

Converts true into 1, 1 isn't equal to 2, return false.

### F
true

They both have the same type, and since non-zero boolean type returns true, true is equal to true, so return true.

# Question 16
While == tries to convert the type based on the variables, === checks the equality without type conversion; if the two types are different, it immediately returns false.

# Question 17
'How are you?' will be printed out. Boolean(2) will return true since it's a non-zero number.

# Question 18
Within the for loop of "for (let cars in statistics)", cars represent the property and statistics[cars] represent the value of that specific property. Thus, we need to see if the first letter is r by using .charAt(0) on cars, and we need to see if the value is an odd number by using modular on statistics[cars] to see if there are any remainders.

# Question 19
Within the for loop,
```
newArr.push(callback(array[i], function(x) {
    return x * 2;
}));
```
is equivalent to
```
newArr.push(doSomething(array[i], function(x)));
```
based on the original parameter. that would mean we would replace all x with what's within doSomething function, which is num + 2. Thus, we would be returning (num+2)*2, where num in here is array[i] (first parameter); therefore, the simplified version of the loop would be:
```
newArr.push((array[i]+2) * 2);
```
This would mean that the new array contains elements that are added by 2 and then multipled by 2. The returned value is [(1+2)*2,(2+2)*2,(3+2)*2] = [6,8,10].
# Question 20
We create a new function and move the code into the function. Then, we set an interval of 1000 miliseconds that calls on the new function with the code "var v = setInterval(callTime,1000);".

# Question 21
1
4
3
2

1 and 4 print out immediately because there is no timer for them. Having timer start at delay of 0 means that after the code runs all of non-setTimeout lines, it will start setTimeout lines with 0 delay after the shortest delay possible, printing out 3 right after 1 and 4. Then, after 1 second, 2 will print out, causing this order to happen.