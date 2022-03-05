function changeColor(){
    let colorCode="#"+Math.floor(Math.random()*16777215).toString(16);
    document.documentElement.style.setProperty("--mainColor",colorCode);
}
//#002e58
console.log("#"+Math.floor(Math.random()*16777215).toString(16));