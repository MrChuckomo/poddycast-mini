const https = require('https')

function makeRequest () {
    console.log('request started')

    const Req = https.request(getITunesOptions('freakshow'), function (_Res) {
        const Chunks = []

        _Res.on('data', function (_Chunk) {
            Chunks.push(_Chunk)
        })
        _Res.on('end', function () {
            // _Callback(Buffer.concat(Chunks).toString().trim(), _eRequest, _Options)
            console.log(Buffer.concat(Chunks).toString().trim())
        })
    })

    if (Req !== undefined) {
        Req.on('error', function (_Error) {
            console.log('Problem with request: ' + _Error.message)
        })

        Req.end()
    }
}

function getITunesOptions (_SearchTerm) {
    return {
        method: 'GET',
        host: 'itunes.apple.com',
        port: 443,
        path: '/search?term=' + _SearchTerm + '&media=podcast'
    }
}
