const animalInfos = [
    {type: 'Malayan Tiger', count: 787},
    {type: 'Mountain Gorilla', count: 212},
    {type: 'Fin Whale', count: 28},
    ]

    export function AnimalList() {
    //console.log("animalInfos object", animalInfos)
    let animalList = animalInfos.map(animalInfo => (
    <tr key={animalInfo.type}>
        <td>{animalInfo.type}</td>
        <td>{animalInfo.count}</td>
        <td><a href={`https://www.google.com/search?q=${encodeURIComponent(animalInfo.type)}`}>search</a></td>
    </tr>))
    //console.log("animalList table body",animalList)
    return (
        <table className="animal-list" >
            <thead>
                <tr>
                    <th colSpan="3">Rare Animals</th>
                </tr>
            </thead>
            <tbody>{animalList}</tbody>
        </table>
    )
}