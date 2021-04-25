function diffArray(arr1, arr2) {
    var newArr = [];
    var arrNewAll = []
    var arrOldAll = arr1.concat(arr2)
    
    for(let i = 0 ; i < arr1.length ; i++){
        for(let j = 0 ; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                arrNewAll.push(arr1[i] ,arr2[j])
            }
        }
    }
    newArr = arrOldAll.filter(el => !arrNewAll.includes(el))
    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));