let x1:number=0;
let x2:number=1;
let choice:number=0;
let flag:boolean=true;
while (flag){
    choice++;
    console.log(x1+x2);
    x1=x2;
    x2=x1+x2;
    if(choice===10){
        flag=false;
    }
}