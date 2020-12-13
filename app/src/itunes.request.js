const https = require('https')

function makeRequest (vueRef) {
    console.log('request started')

    const request = https.request(getITunesRequestOptions(vueRef.message), function (_res) {
        const chunks = []

        _res.on('data', function (_chunk) {
            chunks.push(_chunk)
        })

        _res.on('end', function () {
            const response = Buffer.concat(chunks).toString().trim()
            const results = JSON.parse(response)

            console.log(results.results)
            vueRef.resultcount = results.resultCount
            vueRef.results = results.results
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
