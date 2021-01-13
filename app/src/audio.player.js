/**
 * Init the player. Set the episode url to audio src.
 *
 * @param {url} episodeUrl The episode file (mp3) URL.
 */
function initPlayback (episodeUrl) {
    const player = document.getElementById('player')
    const playerSource = player.getElementsByTagName('source')[0]

    playerSource.setAttribute('src', episodeUrl)
    player.load()
}

function togglePlayPause () {
    const playPauseBtn = document.getElementById('playerPlayPause')
    const svgLink = playPauseBtn.getElementsByTagName('use')[0]

    if (playPauseBtn.getAttribute('mode') === 'playing') {
        startPlayback()
    } else {
        pausePlayback()
    }
}

/**
 * Start the player.
 */
function startPlayback () {
    const player = document.getElementById('player')
    const playPauseBtn = document.getElementById('playerPlayPause')
    const svgLink = playPauseBtn.getElementsByTagName('use')[0]

    playPauseBtn.setAttribute('mode', 'paused')
    svgLink.setAttribute('xlink:href', './node_modules/bootstrap-icons/bootstrap-icons.svg#pause-circle')

    player.play()
    player.addEventListener('timeupdate', updateProgress, false)
}

/**
 * Pause the player.
 */
function pausePlayback () {
    const player = document.getElementById('player')
    const playPauseBtn = document.getElementById('playerPlayPause')
    const svgLink = playPauseBtn.getElementsByTagName('use')[0]

    playPauseBtn.setAttribute('mode', 'playing')
    svgLink.setAttribute('xlink:href', './node_modules/bootstrap-icons/bootstrap-icons.svg#play-circle')

    player.pause()
}

/**
 * Update the player progress bar and
 * calculates the time to disply it.
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

    const formatTime = getFormatTime(player.currentTime)

    playerTime.innerText = formatTime.hours + ':' + formatTime.minutes + '.' + formatTime.seconds
}

/**
 * Set the player artwork component.
 *
 * @param {url} artwork The artwork URL to display.
 */
function setupArtwork (artwork) {
    document.getElementById('playerArtwork').setAttribute('src', artwork)
}

/**
 * Set the player collection name component.
 *
 * @param {string} collectionName The collection name (Podcast) to display.
 */
function setupCollectionName (collectionName) {
    document.getElementById('playerCollectionName').innerText = collectionName
}

/**
 * Set the player title component.
 *
 * @param {string} title The title (episode) to display.
 */
function setupTitle (title) {
    document.getElementById('playerTitle').innerText = title
}

// --------------------------------------------------------------------------------------------------------------------

/**
 * Get the playback time in seconds and calculate and split in a nice format.
 *
 * @param {number} timeInSeconds The current playback time.
 * @return {dict} The formatted time in three parts (hour, minute, second).
 */
function getFormatTime (timeInSeconds) {
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

/**
 * Makes a time number pretty - prepend 0 if number is just one digit.
 *
 * @param {number} number Time value you want make pretty
 * @return {number} The pretty number
 */
function getPrettyTime (number) {
    return ((number < 10) ? '0' + number : number)
}
