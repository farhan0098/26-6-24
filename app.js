const parentfunc= () =>{
var childfunc=100;
return () =>childfunc +=100;


}
const result =parentfunc ();
const output1 =result();
const output2 =result();
const output3 =result();
const output4 =result();
console.log(output1,output2,output3,output4)


 var arry=[1,2,3,4,5,6]
 const [fistnum,,,,,]=arry;
 console.log(fistnum)



 const greey
