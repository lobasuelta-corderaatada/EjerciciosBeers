// Convert the following named function to an arrow function:
//            function printMessage( message ) {
//                     console.log( message )
//            }

let printMessage = (message) => console.log(message);

// Convert the following named function to an arrow function:

//             function createMultplication (number1, number2) {
//                       let result = number1 * number2
//                       return result
//              }

let createMultplication = (number1, number2) => number1*number2;


// 3. Starting from an array: const array = [ 1,2,3,4,5,6,7,8,9 ], apply a map to that array and pass as an argument the named function shown in the previous exercise. Show by console the new array obtained.
const array = [ 1,2,3,4,5,6,7,8,9 ] ;
array.map(printMessage);


// 4. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 most alcoholic beers.
function getTenMostAlcoholic(listOfBeers){
    let byAbv = (a, b) => a.abv-b.abv;
    listOfBeers.sort(byAbv);
    return listOfBeers.slice(listOfBeers.length-10, listOfBeers.length);
}

//Prueba 2.9
//Prueba 3.0
// 5. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 least bitter beers.
function getLeastBitter(listOfBeers){
    let byBitterness = (a, b) => a.ibu-b.ibu;
    listOfBeers.sort(byBitterness);
    return listOfBeers.slice(0, 10);
}

// 6. Generate a function that receives as parameters an array of beers and a name of a beer. The function should return the complete object that matches the name entered.
function getBeerByName(listOfBeers, name){
    let byName = (a) => a.name == name;
    return listOfBeers.find(byName);
}

// 7. Generate a function that receives as a parameter an array of beers, a value and that returns the first object whose ibu property is equal to the entered value, in case there is no beer with that ibu that displays a message in the console that says “ There is no beer with an ibu of (value entered).”

function getBeerByIbu(listOfBeers, ibu){
    let byIbu = (a) => a.ibu == ibu;
    let beer = listOfBeers.find(byIbu);
    if (beer == undefined){
        console.log(`There is no beer with an ibu of ${ibu}`);
    }
    return beer;
}

// 8. Generate a function that receives the name of a beer as a parameter and returns the position in the array of that beer. If the beer is not found, a message must be printed through the console saying “(Name of the beer entered) does not exist.”

function getPositionByName(listOfBeers, name){
    let byName = (a) => a.name == name;
    let position = listOfBeers.findIndex(byName);
    if (position == -1){
        console.log(`${name} does not exist`);
    }
    return position;
}


// 9. Generate a function that receives as a parameter the array of beers and an alcohol value. The function must return a new array with the beers that do not exceed the alcohol level. Each element of the new array must be an object that has the properties name, alcohol (abv) and "bitterness" (ibu)
function getBeersLessAlcoholicThan(listOfBeers, alcoholLevel){
    let byAbv = (a, b) => a.abv-b.abv;
    listOfBeers.sort(byAbv);

    let maxLevel = (a) => a.abv>alcoholLevel;
    let firstGreaterIndex = listOfBeers.findIndex(maxLevel)

    if (firstGreaterIndex == -1){
        firstGreaterIndex = listOfBeers.length;  
    }
    
    return listOfBeers.slice(0, firstGreaterIndex);
}


// 10. Generate a function that receives as parameters an array of beers, a property name and a boolean value. It should return a new array with 10 beers ordered by the property entered as the second argument, ascending if the third is true or descending if it is false.

function getSortedListOfBeersByProperty(listOfBeers, propertyName, ascending) {
    function compareAscending(a, b) {
        if (a[propertyName] < b[propertyName])
            return -1;
        if (a[propertyName] > b[propertyName])
            return 1;
        return 0;
    }

    function compareDescending(a, b) {
        if (a[propertyName] > b[propertyName])
            return -1;
        if (a[propertyName] < b[propertyName])
            return 1;
        return 0;
    }

    if(ascending)
        listOfBeers.sort(compareAscending);
    else
        listOfBeers.sort(compareDescending);

    return listOfBeers.slice(0, 10);
}

// 11. Generate a function that receives as a parameter an array of beers and an id of an HTML element where the table will be printed. The function must render (render, draw, paint, fill, etc.) in an html file a table that contains the columns "Name", "ABV", "IBU", and one row for each element of the array. Each row must have the data requested for each of the beers.
//Prueba de main