export function WatcherDetails({ watcher, onClose }) {


    function evStop(ev) {
        ev.stopPropagation()
    }


    return (
        <section onClick={onClose} className="backdrop">
            <section onClick={evStop} className="watcher-details">
                <h2>{watcher.fullname}</h2>
                <img src={`https://robohash.org/${watcher.id}?set=set3`} />
                <ul>
                    {watcher.movies.map(movie =>
                        <li key={movie}>{movie}</li>
                    )}
                </ul>
                <button onClick={onClose}>Close</button>
            </section>
        </section>
    )


}
