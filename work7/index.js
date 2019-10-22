function soet(method){
    let origin = document.getElementById('origin').Value
    let logs
    console.log(method)
    if(method=='bubble'){
        logs = bubbleSort(origin)
    }else if(method=='insert'){
        logs = insertSoet(origin)
    }
    showDiv = document.getElementById('Anim')
    showDiv.innerHTML = logs
}