function submitText(){
    let _input = document.getElementById('Text').value
    let _list = document.getElementById('list')
    let _li = document.createElement("li")
    let _span = document.createElement("span")
   
    if(_input != 0){
        _list.appendChild(_li)
        _li.innerText=_input
    }else{
        alert("you most write a text")
    }
    _li.appendChild(_span)
    _span.setAttribute("onclick","deletText(this)")
    _span.innerText='Delete'
    document.getElementById('Text').value=''
}

function deletText(self){
    let x = self.parentElement
    x.remove()
}