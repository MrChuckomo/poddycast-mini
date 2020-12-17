
Vue.component('home-fragment', {
    template: `
        <div>
            <h1>Home</h1>
        </div>
    `
})

Vue.component('player-fragment', {
    template: `
        <div id='playerFragment'>
            <h1>Player</h1>
        </div>
    `
})

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
        <li class="list-group-item list-group-item-action list-group-item-white" v-bind:feedUrl="searchresult.feedUrl">
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
    `
})

Vue.component('nav-item', {
    props: ['icon'],
    template: `
        <div v-bind:id="icon.visible_id" class="col text-center p-3">
            <a href="#" class="text-warning">
                <svg class="bi" width="24" height="24" fill="currentColor">
                    <use v-bind:xlink:href="icon.name"/>
                </svg>
            </a>
        </div>
    `
})
