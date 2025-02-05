import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const Watcher_KEY = 'WatcherDB'


export const watcherService = {
    _createWatchers,
    getWatchers,
    get,
    add,
    remove,
    save,
    getEmptyWatcher,
    getDefaultFilter,
    test
}

_createWatchers()

function test(){
    console.log('test');
}
async function getWatchers() {
    const test = await storageService.query(Watcher_KEY)
    console.log('watcherService.getWatchers() test:', test);
    return test
    //return await storageService.query(Watcher_KEY);
}

function get(watcherId) {
    return storageService.get(Watcher_KEY, watcherId)
}

function remove(watcherId) {
    return storageService.remove(Watcher_KEY, watcherId)
}

function save(watcher) {
    if (watcher.id) {
        return storageService.put(Watcher_KEY, watcher)
    } else {
        return storageService.post(Watcher_KEY, watcher)
    }
}

function add(watcherName, movies) {
    return storageService.post(Watcher_KEY, _createWatcher(watcherName, movies))
}


function getEmptyWatcher(fullname = '', movies = []) {
    return { fullname, movies }
}

function getDefaultFilter(filterBy = { txt: '', minSpeed: 0 }) {
    return { txt: filterBy.txt, minSpeed: filterBy.minSpeed }
}

async function _createWatchers() {
    console.log('Creating watchers...');
    let watchers = utilService.loadFromStorage(Watcher_KEY)
    console.log('watchers:', watchers);
    if (!watchers || !watchers.length) {
        watchers = [
          { id: "w101",
             fullname: "Puki Ba",
              movies: ["Rambo", "Rocky"]
            },
          { 
            id: "w102",
             fullname: "Muki Ma",
              movies: ["Titanic", "Avatar"] 
            },
          {
            id: "w103",
            fullname: "Tuki Ta",
            movies: ["The Terminator", "The Matrix"],
          },
          {
            id: "w104",
            fullname: "Alice Johnson",
            movies: ["The Matrix", "Game of Thrones"],
          },
          {
            id: "w105",
            fullname: "Bob Brown",
            movies: ["The Dark Knight", "The Mandalorian"],
          },
          {
            id: "w106",
            fullname: "Emily Davis",
            movies: ["Pulp Fiction", "The Crown"],
          },
        ];
    }
    // if (!watchers || !watchers.length) {
    //     watchers = []
    //     const movies = ['Rambo', 'Rocky', 'Titanic', 'Avatar', 'The Terminator', 'The Matrix',
    //          'The Lord of the Rings', 'The Dark Knight', 'Inception', 'The Shawshank Redemption']
    //     const watcherNames = ['Puki Ba', 'Muki Ma', 'Tuki Ta', 'Zuki Za', 'Luki La', 'Suki Sa']
    //     for (let i = 0; i < 3; i++) {
    //         const watcherName = watcherNames[i]
    //         watchers.push(_createWatcher(watcherName, getRandomMovies(movies)))
    //     }
    
    utilService.saveToStorage(Watcher_KEY, watchers)
    //console.log('Created watchers:', await getWatchers());
    
}

function getRandomMovies(movies) {
    const randomSize = Math.floor(Math.random() * movies.length) + 1;
    const shuffledMovies = movies.sort(() => 0.5 - Math.random());
    return shuffledMovies.slice(0, randomSize);
}

// {
//     id: 'w101',
//     fullname : 'Puki Ba',
//     movies: ['Rambo', 'Rocky']
// }

function _createWatcher(fullname, movies) {
    console.log('fullname:', fullname);
    console.log('movies:', movies);
    const watcher = getEmptyWatcher(fullname, movies)
    watcher.id = utilService.makeId()
    return watcher
}
