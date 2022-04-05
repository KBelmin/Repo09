function myForLoop1() 
{
    var evenNumbers="";
    for (var i = 0; i <=8; i=i+2) 
    {
        if(i==8)
        {
            evenNumbers=evenNumbers+i;
        }
        else
        {
            evenNumbers=evenNumbers + i + ",";
        }
        
    }    
    return evenNumbers;

}
function myForLoop2() 
{
    var evenNumbers="";
    for (var i =8; i >=0; i=i-2) 
    {
        if(i==0)
        {
            evenNumbers=evenNumbers+i;
        }
        else
        {
            evenNumbers=evenNumbers + i + ",";
        }
        
    }    
    return evenNumbers;

}
console.log(myForLoop1());
console.log(myForLoop2());
