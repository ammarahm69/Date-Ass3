/**Write a JavaScript program to find out if 1st January will be a Sunday
between 2024 and 2050. */
for(let i=2024;i<=2050;i++){
    let date = new Date(`1 Jan ${i}`);
    // console.log(date);
    let toString = date.toString();
    if(toString.slice(0,0+3)=='Sun'){
        document.write(`<h3>1st January Sunday ${i}`+'<br>' );
    } 

}