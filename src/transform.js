//JS file should exist, and exported value should be a function
function groupAdultsByAgeRange(){
    
};

//an empty array results in an empty object
function groupAdultsByAgeRange([{name}, {age}]){
    [group = {
        name: 'name',
        age: 9
    }]
};

//groupAdultsByAgeRange(aguments, arguments);


//"filters out people under the age of 18"
function groupAdultsByAgeRange([
    { name: "pete", age: 10 },
    { name: "dove", age: 17 },
  ])




if (age <= 20){
        return '20 and younger'
    } else if(age >= 21 ){
        return '21-30'
    } else if(age >= 31){
        return '31-40'
    } else if(age >= 41){
        return '41-50'
    } else{
        '51 and older'
    }
    


module.exports = {groupAdultsByAgeRange};