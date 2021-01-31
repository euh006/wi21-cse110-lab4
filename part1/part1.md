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

