let str = '<table border="1">'
for(let i = 1;i < 10; ++i) {
    str += '<tr>'
    for (var j = 1;j<10; ++j){
        str +='<td>&nbsp;</td>'
    }
    str +='</tr>'
}
str +='</table>'
document.getElementById('table1').innerHTML=str

str = '<table border="1">'
for(let i = 9;i>0; --i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str += '<td>&nbsp;</td>'  
    }
    str +='</tr>'
}
str +='</table>'
document.getElementById('table2').innerHTML=str

str='<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str +='<td>' + i + '*' + j + '='+ ( i * j ) +'</td>'
    }
    str +='</tr>'
}
str += '</table>'
document.getElementById('table3').innerHTML=str
let srr = [1, 2,,,5]
for(val in arr){
    console.log(val)
}
