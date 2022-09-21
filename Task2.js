const array=[
    {id:1,name:"Bilal", city:"Lahore"},
    {id:1,name:"Bilal", city:"Lahore"},
    {id:3,name:"Hafsa", city:"Karachi"},
    {id:4,name:"Rehan", city:"Lahore"},
    {id:5,name:"Saqib", city:"Karachi"},
    {id:6,name:"Farhan", city:"Islamabad"}
];
const key='city';

function GroupByKey(arr,key) {
    const tempData=arr.reduce((acc,cv)=>{
        if(!acc[cv[key]]){
            acc[cv[key]]=[]
        }
        acc[cv[key]].push(cv)
        tempobj=acc
        return acc
    },{});
    return tempobj
    
}

console.log(GroupByKey(array,key))
