function groupByKey(array, key) {
  return array.reduce((hash, obj) => {
      if(obj[key] === undefined) return hash; 
      return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
    }, {})
}

const array= [
  {id:1,name:"Bilal", city:"Lahore"},
  {id:1,name:"Bilal", city:"Lahore"},
  {id:3,name:"Hafsa", city:"Karachi"},
  {id:4,name:"Rehan", city:"Lahore"},
  {id:5,name:"Saqib", city:"Karachi"},
  {id:6,name:"Farhan", city:"Islamabad"}
  ];

var result = groupByKey(array, 'city');
console.log(result)
