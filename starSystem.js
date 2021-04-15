
const printStar = (arr)=>{
    let maxSize=arr[0]+arr[arr.length-1]+1;
    let matrix=new Array();
    for(var i=0;i<arr.length;i++)
    {
        var tempArr=new Array(maxSize);
        tempArr.fill(' ');
       matrix.push(tempArr)
    }
    for(let i=0;  i<arr.length;i++)
    {
        if(arr[i]<0)
        {
            for(var j=0;j<Math.abs(arr[i]);j++)
            {
                var max=arr[arr.length-1];
                matrix[i][j+max]='*';
            }
        }
        else if(arr[i]>0)
        {
            for(var j=0;j<arr[i];j++)
            {
                matrix[i][j]='*';
            }
        }
        else
        {
            var max=arr[arr.length-1];
           matrix[i][max];
        }
    }
   
    for(var j=0;i<maxSize;j++)
    {
        for(var i=0;i<arr.length;i++)
         {
             process.stdout.write(matrix[i][j]);
         }
         console.log();
    }
    

}
printStar([4,6,7,-3]);


