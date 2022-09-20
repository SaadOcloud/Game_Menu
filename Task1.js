function groupcity(array,key){
    return array.filter(a=>{
        return a.city==key
    })
}

const array= [
    {id:1,name:"Bilal", city:"Lahore"},
    {id:1,name:"Bilal", city:"Lahore"},
    {id:3,name:"Hafsa", city:"Karachi"},
    {id:4,name:"Rehan", city:"Lahore"},
    {id:5,name:"Saqib", city:"Karachi"},
    {id:6,name:"Farhan", city:"Islamabad"}
]
console.log(groupcity(array,"Karachi"))
console.log(groupcity(array,"Lahore"))
console.log(groupcity(array,"Islamabad"))