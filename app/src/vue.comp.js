
Vue.component('history-fragment', {
    template: `
        <div id='historyFragment'>
            <h1>History</h1>
        </div>
    `
})

Vue.component('feed-fragment', {
    props: ['episode'],
    template: `
        <li class="list-group-item list-group-item-action" v-bind:audioUrl="episode.audioUrl">
            <div class="row">
                <div class="col-auto">
                    <img v-bind:src="episode.artworkUrl100" class="rounded shadow-sm" style="width: 50px">
                </div>
                <div class="col">
                    <div class="fw-bold">
                        {{ episode.title }}
                    </div>
                    <div class="my-1">
                        <small class="text-secondary">
                            <svg class="bi text-secondary" width="16" height="16" fill="currentColor">
                                <use xlink:href="./node_modules/bootstrap-icons/bootstrap-icons.svg#clock"/>
                            </svg>
                            <span class="align-middle">
                                {{ episode.duration }}
                            </span>
                            
                            <svg class="bi text-secondary" width="16" height="16" fill="currentColor">
                                <use xlink:href="./node_modules/bootstrap-icons/bootstrap-icons.svg#calendar3"/>
                            </svg>
                            <span class="align-middle">
                                {{ episode.pubDate }}
                            </span>
                        </small>
                    </div>
                    <div>
                        <small class="">
                            {{ episode.summary }}
                        </small>
                    </div>
                </div>
            </div>
        </li>
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
        <button v-bind:id="icon.visible_id" class="btn btn-dark me-2" type="button">
            <svg class="bi text-warning" width="21" height="21" fill="currentColor">
                <use v-bind:xlink:href="icon.name" />
            </svg>
        </button>
    `
})
