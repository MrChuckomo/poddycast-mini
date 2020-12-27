const { log } = require('console')

Vue.component('history-fragment', {
    template: `
        <div id='historyFragment'>
            <h1>History</h1>
        </div>
    `
})

Vue.component('search-item', {
    props: ['searchresult'],
    template: `
        <li v-on:click="callFeed" class="list-group-item list-group-item-action list-group-item-white" v-bind:feedUrl="searchresult.feedUrl">
            <div class="row">
                <div class="col-auto">
                    <img v-bind:src="searchresult.artworkUrl100" class="rounded shadow-sm" style="width: 50px">
                </div>
                <div class="col text-truncate">
                    <div>
                    {{ searchresult.collectionName }}
                    </div>
                    <small class="font-monospace text-muted">{{ searchresult.artistName }}</small>
                </div>
                <div class="col-auto my-auto">
                    <svg class="bi text-secondary" width="16" height="16" fill="currentColor">
                        <use xlink:href="./node_modules/bootstrap-icons/bootstrap-icons.svg#arrow-right-circle"/>
                    </svg>
                </div>
            </div>
        </li>
    `,
    methods: {
        callFeed: function () {
            console.log('item clicked: ' + this.searchresult.feedUrl)

            const request = require('request')
            const options = {
                method: 'GET',
                url: this.searchresult.feedUrl
            }
            request(options, function (error, response) {
                if (error) throw new Error(error)
                console.log(response.body)
            })
        }
    }
})

Vue.component('nav-item', {
    props: ['icon'],
    template: `
        <button v-bind:id="icon.visible_id" class="btn btn-transparent me-2" type="button">
            <svg class="bi text-warning" width="21" height="21" fill="currentColor">
                <use v-bind:xlink:href="icon.name" />
            </svg>
        </button>
    `
// <div v-bind:id="icon.visible_id" class="col text-center p-3">
//     <a href="#" class="text-warning">
//         <svg class="bi" width="24" height="24" fill="currentColor">
//             <use v-bind:xlink:href="icon.name"/>
//         </svg>
//     </a>
// </div>
})
