let data = localStorage.getItem('login')

const logindisplay = document.getElementById('login1')
const senhadisplay = document.getElementById('login2')

const parsedData = JSON.parse(data)

logindisplay.innerText = parsedData.name

senhadisplay.innerText = parsedData.password