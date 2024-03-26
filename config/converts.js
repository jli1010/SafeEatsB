//To make life easier, allergies are stored in firebase as a number and then this number is
// converted to a boolean list which is displayed by the frontend
// The following functions allow this math to happen easily throughout the application


const numToBool = (num) => {
    let tempArr = []
    if(num == 0 || num < 0 ){
        return new Array(12).fill(false)
    }

    while (num >= 1){ 
        if(num%2 == 1 ){
            tempArr.push(true)
        }
        else{
            tempArr.push(false)
        }
        num = Math.floor(num/2)
    }
    let s = tempArr.length
    for(var i=0;i<12-s;i++){
        tempArr.push(false)
    }



    return tempArr
}

const boolToNum = (l) => {

    let num = 0;
    let mult = 1;
    for(var i=0;i<l.length;i++){
        let j = l[i] ? 1 : 0;
        num = num + mult*j
        mult = mult * 2
    }
    console.log(num)
    return num

}

const boolToAllergy = (l) => {
    const allergiesList = ["Milk", "Eggs", "Fish", "Tree Nuts", "Peanuts", "Soybeans", "Wheat", "Shellfish", "Gluten Free", "Vegan", "Vegetarian", "Halal"]

    var allergies = []
    for(let i=0;i<allergiesList.length;i++){
        if(l[i]){
            allergies.push(allergiesList[i])
        }
    }
    return allergies
}

export {numToBool,boolToNum,boolToAllergy}