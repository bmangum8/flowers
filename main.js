
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/

 /*
 Write your algorithm first, and then your code. 
    inexpensiveFlowers will be the same as filteredFlowers
    include in function < 2.00
    new const lowPrice < 2
    console
*/


const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify
    for (const flower of flowers) {
        if (flower.price < 2) {
            filteredFlowers.push(flower)
        }
    }
    return filteredFlowers  // Do not modify

}


/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
    
    Write your algorithm first, and then your code. 
    *zoneFlowers is the function
    *filteredFlowers is the result/return of the function after it has been called
    *for of loop with new const flower
    *if statement with flower.usdaZones
   * 2 if statements with dot notation .includes(3) and .includes(8)
    *.push(flowers) dot notation to add to filteredFlowers

*/

const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify
    for (const flower of flowers) { //creates a new var representing each object in the array
        if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) { //tells computer to find these criteria as it iterates through each object
            filteredFlowers.push(flower) //adds the flowers that meet the criteria of the if statement to the array
        }
    }
    return filteredFlowers  // Do not modify
}


/*
    This function should return flowers that come in the color Orange
    Write your algorithm first, and then your code. 
    *orangeFlowers is the function
    *filteredFlowers is the result/return of the function when it is called
    *for of loop with new const flower of flowers
    *if statement with dot notaiton flower.colors.includes("orange")
    push flower to filteredFlowers array
*/

const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify
    for (const flower of flowers) { //creates new var representing each object in the array
        if (flower.colors.includes("Orange")) { //accesses the key and its property
            filteredFlowers.push(flower) //addes the flower that meets the criteria of the if statement to the array
        }
    }
    return filteredFlowers  // Do not modify
}



/*
    This function should return an HTML representation of each flower.

    Expected string format:
        *<article> //wrap all objects in array (need to be outside of each object with string interpolation?)
            <h1>Bird of Paradise</h1> //  flower.type is the name

            <h2>Colors</h2> //flowers.flower?---i named this var part in a for of loop
            <section>White</section> // flower.colors
            <section>Orange</section>

            <h2>USDA Zones</h2> //flowers.flower?
            <div>9</div> //flower.usdaZones
            <div>10</div>
            <div>11</div>
        </article>

        *flowersHTMLString is a var whose string value can be changed based on what we add to it
            --it is not an array so we cannot use .push
        *flowerHTMSString is also our return / result of the function
        *??Create a new array to hold info??
        *for of loop-- should iterate throgh each object --new var of flower
        *???nested for of loop to interate through ???
        *string interpolation of html properties(?) with ${} to include key pair values
        ???create an array with strings. then use .join() to join the strings?
        must use bracket notation when accessing key that have numbers, spaces, or special characters 
                ex---objectName[propertyName]
        
        
        
                make array with strings then join with .join()
                ex---const fruits = ["Banana", "Orange", "Apple", "Mango"];
                        let text = fruits.join();
                        arrayOfCharacteristics.join???
        
*/

const flowersAsHTML = () => { //name of function
  
    let flowersHTMLString = ""  // Do not modify
    
    
 
    for (const flower of flowers) {
        flowersHTMLString += `<article>\n` 
        flowersHTMLString += `<h1> ${flower.type} </h1>\n` //returns name of flower. works!     
       
       flowersHTMLString += `<h2> Colors</h2>\n`
        for (const color of flower.colors) {
            
           flowersHTMLString += `<section> ${color} </section>\n` 
        }

       flowersHTMLString += `<h2> USDA Zones </h2>\n`
        for (const zone of flower.usdaZones) {
            flowersHTMLString += `<div> ${zone} </div>\n`
        }
      flowersHTMLString += `</article>\n`
    }      
   
  
    // flowersHTMLString = arrayOfFlowerInfo.join(" ")

   
    return flowersHTMLString  // Do not modify

}
console.log(flowersAsHTML())


//arrayOfFlowerInfo.push vs console.log()??
 //start here---with the const of colors and zones       
        // for (const parts of flower) { //new var part is to represent each item in each object
        //     arrayOfFlowerInfo.push(`<h2> ${parts} </h2>`)
            
        //     for (const part of parts) { //to access key values 
        //         arrayOfFlowerInfo.push(`<div> ${part} </div>`)
        //     }
        
        // }  
        //arrayOfColors.push(`<h2> ${flower.colors} </h2>`) 
        //for (color of arrayOfColors) { //makes new variable of each color within the new array? 












































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}

/*  DO NOT TOUCH THIS CODE  */

