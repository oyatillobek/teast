var arr = ['olma', 'behi', 'nok']
var elInp = document.querySelector('.inp')
var elInp1 = document.querySelector('.inp1')

function fnAdd(){
    console.log(elInp.value.length);
    arr.push(elInp.value)
    console.log(arr);
    if(elInp.value.length >= 4){
        arr.shift(elInp.value)
    }else{
        arr.push()
    }
}