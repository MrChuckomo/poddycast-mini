const https = require('https')

function makeRequest (_query) {
    console.log('request started')

    const request = https.request(getITunesRequestOptions(_query), function (_res) {
        const Chunks = []

        _res.on('data', function (_Chunk) {
            Chunks.push(_Chunk)
        })
        _res.on('end', function () {
            // _Callback(Buffer.concat(Chunks).toString().trim(), _eRequest, _Options)
            console.log(Buffer.concat(Chunks).toString().trim())
        })
    })

    if (request !== undefined) {
        request.on('error', function (_Error) {
            console.log('Problem with request: ' + _Error.message)
        })

        request.end()
    }
}

function getITunesRequestOptions (_searchTerm) {
    const basePath = '/search?term='
    const query = encodeURIComponent(_searchTerm)
    const parameter = '&media=podcast'
    const path = basePath + query + parameter

    return {
        host: 'itunes.apple.com',
        method: 'GET',
        path: path,
        port: 443
    }
}
