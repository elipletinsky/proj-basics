const { useState, useEffect, useRef } = React;
import {watcherService} from "../services/watcher.service.js";
import { carService } from "../services/car.service.js"
import { WatcherPreview } from "./WatcherPreview.jsx";
import { WatcherDetails } from "./WatcherDetails.jsx";

export function WatcherApp() {
  const [watchers, setWatchers] = useState([]);
  const [selectedWatcher, setSelectedWatcher] = useState(null);

  useEffect(() => {
    loadwatchers();
  }, []);

  async function loadwatchers() {
    watcherService.getWatchers()
    .then(setWatchers)
    .catch(err => {
        console.log('Cannot load watchers', err)
    }).finally;{
        console.log('loadwatchers', watchers);
    }

    
    // watcherService.test()
    // carService.test()
    // console.log('loadwatchers', await watcherService.getWatchers());
    
    
    // const tempwatchers = await watcherService.getWatchers()
    // console.log('loadwatchers', tempwatchers);
    // setWatchers(tempwatchers);
  }
  // function DisplayWatchers(){
  //    return watchers.map(watcher => (
  //       <div key={watcher.id} className="watcher">
  //           <img src="" alt="watcher" />
  //           <h2>{watcher.fullname}</h2>
  //           <ul>
  //               {watcher.movies.map(movie => (
  //                   <li key={movie}>{movie}</li>
  //               ))}
  //           </ul>
  //           <button onClick={() => removeWatcher(watcher.id)}>Remove</button>
  //           <button onClick={() => setSelectedWatcher(watcher)}>View</button>
  //       </div>
  //   ))
  // }

  function onAddWatcher(){
    const fullname = prompt("Enter watcher full name:");
    if (fullname) {
      const movies = prompt("Enter watcher movies (comma separated):").split(
        ","
      );
      if (movies) {
        console.log("Adding Watcher:", fullname, movies);
        watcherService.add(fullname, movies)
        .then(savedWatcher => {
                setWatchers(watchers => [...watchers, savedWatcher])
            })
            .catch(err => {
                console.log('err:', err)
            })

      }
    }
  };

  function onRemoveWatcher(id){
    watcherService
      .remove(id)
      .then(() => {
        setWatchers((watchers) =>
          watchers.filter((watcher) => watcher.id !== id)
        );
      })
      .catch((err) => {
        console.log("err:", err);
      });

    
    // setWatchers(
    //   watcherService
    //     .remove(id)
    //     .then(loadwatchers)
    //     .catch((err) => {
    //       console.log("Cannot Remove Watcher:", err);
    //     })
    // );
  };

  function onSelectWatcher(watcher) {
    setSelectedWatcher(watcher)
}


  return (
    <section className="watcher-index">
      <h2>Watcher App</h2>
      <button onClick={onAddWatcher}>Add Watcher</button>
      <section style={{ marginBlock: '1em' }} className="watcher-list">
                {watchers.map(watcher => (
                    <WatcherPreview
                        key={watcher.id}
                        watcher={watcher}
                        onRemoveWatcher={onRemoveWatcher}
                        onSelectWatcher={onSelectWatcher}
                    />
                ))}
      </section>
      {selectedWatcher && (
          <WatcherDetails
              onClose={() => setSelectedWatcher(null)}
              watcher={selectedWatcher}
          />
      )}
    </section>
  )

      
      
      
      // {/* <DisplayWatchers/> */}
      
      // {/* {watchers.map(watcher => (
      //           <div key={watcher.id} className="watcher">
      //               <h2>{watcher.fullname}</h2>
      //               <ul>
      //                   {watcher.movies.map(movie => (
      //                       <li key={movie}>{movie}</li>
      //                   ))}
      //               </ul>
      //           </div>
      //       ))} */}
      // {/* <h1 className="text-2xl font-bold">Watcher List</h1>
      // <Button onClick={addWatcher}>Add Watcher</Button>
      // <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      //   {watchers.map((watcher) => (
      //     <Card key={watcher.id} className="p-4">
      //       <CardContent>
      //         <h2 className="text-lg font-semibold">{watcher.fullname}</h2>
      //         <Button onClick={() => setSelectedWatcher(watcher)}>View</Button>
      //         <Button
      //           variant="destructive"
      //           onClick={() => removeWatcher(watcher.id)}
      //         >
      //           Remove
      //         </Button>
      //       </CardContent>
      //     </Card>
      //   ))}
      // </div> */}
    
  
}
