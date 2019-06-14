const clock = document.querySelector('.clock')

const tick = () => {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

}

setInterval(tick, 1000)