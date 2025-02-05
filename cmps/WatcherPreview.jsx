export function WatcherPreview({ watcher, onRemoveWatcher, onSelectWatcher }) {


    return (
        <article className="watcher-preview">
            <h2>{watcher.fullname}</h2>
            <img src={`https://robohash.org/${watcher.id}?set=set3`} />
            <section className="btns-container">
                <button onClick={() => onSelectWatcher(watcher)} className="select-btn">Select</button>
                <button
                    onClick={() => onRemoveWatcher(watcher.id)}
                    className="remove-btn"
                >X</button>
            </section>
        </article>
    )
}
