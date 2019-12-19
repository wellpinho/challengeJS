/*
* Challenge 01 by wellpinho@outlook.com
*/

const names = ['Mark', 'John']
const mass = [], height = []

// Data Mark
mass[0] = 78
height[0] = 1.65

// Data John
mass[1] = 80
height[1] = 1.80

const resultMark = mass[0] / ( height[0] * height[0] )
console.log(`BMI ${names[0]} is: ${resultMark.toFixed(2)}`)

const resultJohn = mass[1] / ( height[1] * height[1] )
console.log(`BMI ${names[1]} is: ${resultJohn.toFixed(2)}`)

const funcResult = () => {
  if(resultMark > resultJohn)
    console.log(`names[0] with: ${resultMark.toFixed(2)}`)
  else
    console.log(`names[1] with BMI: ${resultJohn.toFixed(2)}`)
}
funcResult()


