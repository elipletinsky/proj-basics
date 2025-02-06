
import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./cmps/Home.jsx"
import { SeasonClock } from './cmps/SeasonClock.jsx'
import {AnimalList} from './cmps/AnimalList.jsx'
import { CountDown } from "./cmps/CountDown.jsx"
import { WatcherApp } from "./cmps/WatcherApp.jsx"
import { MouseMonitor } from "./cmps/MouseMonitoer.jsx"
import { Test } from "./cmps/test.jsx"

export function RootCmp() {
    return (
        <section className="app main-layout">
            <AppHeader />
            <main>
                <AnimalList />
                <SeasonClock />
                <CountDown startFrom={8} toTime={Date.now() + 10000*10} onDone={()=>{
                    console.log('CountDown finished!')
                }} />
                <WatcherApp />

                <MouseMonitor />
            </main>
        </section>
    )
}