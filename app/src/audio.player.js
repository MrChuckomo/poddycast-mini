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

function updateProgress () {
    const player = document.getElementById('player')
    const playerSource = player.getElementsByTagName('source')[0]
    let value = 0

    if (player.currentTime > 0) {
        value = Math.floor((100 / player.duration) * player.currentTime)
    }

    const progress = document.getElementById('playerProgress')

    progress.style.width = value + '%'
    console.log(value)
}

function setupArtwork (artwork) {
    document.getElementById('playerArtwork').setAttribute('src', artwork)
}

function setupCollectionName (collectionName) {
    document.getElementById('playerCollectionName').innerText = collectionName
}

function setupTitle (title) {
    document.getElementById('playerTitle').innerText = title
}
