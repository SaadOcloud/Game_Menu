const array=[
    {id:'one',next:"two", value:null},
    {id:'two',next:"three", value:null},
    {id:'three',next: null, value:null}
];
var result=[]

function updatearray(arr){
    for(var i=arr.length-1; i>-1;i--){
        updatevalue(arr[i])
    }
}

function updatevalue(ele){
    if(ele.next==null){
        return (result.unshift(ele))
    }
    else{
        for(var j in array){
            if(result[0].id==array[j].next){
                array[j].value=result[0]
                return (result.unshift(array[j]))
            }
        }
    }
}
updatearray(array)
console.log(result)