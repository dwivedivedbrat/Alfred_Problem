
const holoalphabetic =(str)=>{
    
    let alphabets=new Array(26);
    alphabets.fill(-1,0)
    str=str.toLowerCase();
    let result=[];
    for(var i=0;i<str.length;i++)
    {
       let asciiValue=str.charCodeAt(i)-97;
       alphabets[asciiValue]=1;
    }
    for(let i=0;i<26;i++)
    {
        if(alphabets[i]==-1)
        {
            res.push(String.fromCharCode(97+i));
        }
    }
    if(res.length==0)
       return true;  
    return result;
}



