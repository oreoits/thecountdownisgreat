const countdown = () => {
    const endDate = new Date("September 24, 2022 16:00:00").getTime()
    const now = new Date().getTime()

    const difference = endDate - now

    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    const timeDays = Math.floor(difference / days)
    const timeHours = Math.floor((difference % days) / hours)
    const timeMinutes = Math.floor((difference % hours) / minutes)
    const timeSeconds = Math.floor((difference % minutes) / seconds)

    document.getElementById("days").innerHTML = timeDays
    document.getElementById("hours").innerHTML = timeHours
    document.getElementById("minutes").innerHTML = timeMinutes
    document.getElementById("seconds").innerHTML = timeSeconds
}

setInterval(countdown, 1000)