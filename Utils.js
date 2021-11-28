function sumOfArray(arr){
    let i 
    let sum = 0
    for(i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum
}

module.exports =  {
    matrixProduct: function(mat1, mat2){
        let i 
        let j 
        let k
        let final = []
        for(i=0;i<mat1.length;i++)
        {
            let temp = []
            for(k=0;k<mat2[0].length;k++)
            {
                let sum = 0;
                for(j=0;j<mat1[0].length;j++)
                {
                    sum+=mat1[i][j]*mat2[j][k]       
                }
                temp.push(sum)
            }
            final.push(temp)
        }
        return final
    },
    sumOfMatrices: function(mat1, mat2){
        let i 
        let j 
        let sum = [];
        for(i = 0;i<mat1.length;i++){
            let temp = []
            for(j = 0; j<mat1[0].length; j++){
                temp.push(mat1[i][j] + mat2[i][j])
            }
            sum.push(temp)
        }
        return sum
    },
    sumOfEachRow: function(mat){
        let i 
        let result = []
        for(i=0;i<mat.length;i++){
            result.push(sumOfArray(mat[i]))
        }
        return result
    }
}