const api = 'http://localhost:3000/api/fetch'
const checkInInput = document.getElementById('checkin')
const checkOutInput = document.getElementById('checkout')
const output = document.getElementById('output')

const getInputValue = () => {
    const rawCheckin = String(checkInInput.value)
    const rawCheckout = String(checkOutInput.value)

    if (rawCheckin === '' || rawCheckout === '') {
        console.error('null string')
        throw null
    }

    const checkin = rawCheckin.split('-').reverse().join('')
    const checkout = rawCheckout.split('-').reverse().join('')
    
    return {
        checkin,
        checkout 
    }
}

const send = () => {
    const body = getInputValue()
    output.innerHTML = 'loading...'
    var xhr = new XMLHttpRequest()
    xhr.open("POST", api, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(body))
    xhr.onload = function () {
        var data = JSON.parse(this.responseText)
        console.log(data);
        if(data.length === 0){
            output.innerHTML = 'no rooms available'
            return null
        }
        var string = JSON.stringify(data, null, 2)
        output.innerHTML = string
    }
}

const render = (objects) => {

}