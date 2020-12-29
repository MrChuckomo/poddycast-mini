function initPlayback (episodeUrl) {
    const player = document.getElementById('player')
    const playerSource = player.getElementsByTagName('source')[0]

    playerSource.setAttribute('src', episodeUrl)
    player.load()
}

function startPlayback () {
    const player = document.getElementById('player')

    player.play()
}

function setupArtwork (artwork) {
    document.getElementById('playerArtwork').setAttribute('src', artwork)
}
