function initPlayback (episodeUrl) {
    const player = document.getElementById('player')
    const playerSource = player.getElementsByTagName('source')[0]

    playerSource.setAttribute('src', episodeUrl)
    player.load()
}

function startPlayback () {
    const player = document.getElementById('player')

    player.play()
    player.addEventListener('timeupdate', updateProgress, false)
}

function pausePlayback () {
    const player = document.getElementById('player')

    player.pause()
}

/**
 * Creates a new Circle from a diameter.
 *
 * @param {number} d The desired diameter of the circle.
 * @return {Circle} The new Circle object.
 */
function updateProgress () {
    const player = document.getElementById('player')
    const playerTime = document.getElementById('playerPlaybackTime')
    let value = 0

    if (player.currentTime > 0) {
        value = Math.floor((100 / player.duration) * player.currentTime)
    }

    const progress = document.getElementById('playerProgress')

    progress.style.width = value + '%'

    const formatTime = getFromatTime(player.currentTime)

    playerTime.innerText = formatTime.hours + ':' + formatTime.minutes + '.' + formatTime.seconds
}

/**
 * Creates a new Circle from a diameter.
 *
 * @param {string} artwork The desired diameter of the circle.
 */
function setupArtwork (artwork) {
    document.getElementById('playerArtwork').setAttribute('src', artwork)
}

function setupCollectionName (collectionName) {
    document.getElementById('playerCollectionName').innerText = collectionName
}

function setupTitle (title) {
    document.getElementById('playerTitle').innerText = title
}

// --------------------------------------------------------------------------------------------------------------------

/**
 * Creates a new Circle from a diameter.
 *
 * @param {number} timeInSeconds The desired diameter of the circle.
 * @return {dict} The new Circle object.
 */
function getFromatTime (timeInSeconds) {
    const fullTime = {}

    const hours = Math.floor(timeInSeconds / 3600)

    timeInSeconds = timeInSeconds - (hours * 3600)

    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds - (minutes * 60))

    fullTime.hours = getPrettyTime(hours)
    fullTime.minutes = getPrettyTime(minutes)
    fullTime.seconds = getPrettyTime(seconds)

    return fullTime
}

function getPrettyTime (number) {
    return ((number < 10) ? '0' + number : number)
}
