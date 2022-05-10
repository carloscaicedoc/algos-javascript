/* 
Pete, The Baker - Algorithm 
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. 
Can you help him to find out, how many cakes he could bake considering his recipes?
Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
and returns the maximum number of cakes Pete can bake (integer). 
For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
Ingredients that are not present in the objects, can be considered as 0. From CodeWars 5kyu */

const chocolateCake = {
    flour: 1000,
    starter: 200,
    sesame: 85,
    salt: 25,
    water: 850
}
const availableChocolateCake = {
    flour: 6099,
    starter: 1390,
    sesame: 700,
    salt: 400,
    water: 8500
}
const RedVelvet = {
    flour: 1000,
    starter: 150,
    salt: 22,
    water: 900,
    sunflower: 120
}
const availableRV = {
    flour: 15000,
    starter: 5000,
    salt: 700,
    water: 8500,
    sunflower: 1500
}

// Solution: 
function cakes(recipe, available) {
    let maxCakes;
    let possibleCakes = 0;
    for (let ingredient in recipe) {
        if (available[ingredient]) {
            possibleCakes = Math.floor(available[ingredient] / recipe[ingredient])
            if (!maxCakes || possibleCakes < maxCakes) {
                maxCakes = possibleCakes
            }
        } else {
            return 0;
        }
    }
    return maxCakes;
}

console.log(cakes(chocolateCake, availableChocolateCake));
console.log(cakes(RedVelvet, availableRV));
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));

// Another approach: 

const cakes2 = (recipe, available) => {
    const recipeKeys = Object.keys(recipe)
    const availableKeys = Object.keys(available)
    let maxCakes = Infinity
    if (!recipeKeys.every(e => availableKeys.includes(e))) {
        return 0
    }
    recipeKeys.forEach(key => {
        if (available[key] / recipe[key] <= maxCakes) {
            maxCakes = available[key] / recipe[key]
        }
    })
    return Math.floor(maxCakes)
}

console.log(cakes2(chocolateCake, availableChocolateCake));
console.log(cakes2(RedVelvet, availableRV));
console.log(cakes2({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));