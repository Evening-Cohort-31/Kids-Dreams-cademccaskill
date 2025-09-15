import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren() // Get children data
const celebrities = getCelebrities() // Get celebrities data

const findCelebrityMatch = (kidObject, celebrityArray) => {
    return celebrityArray.find(celebrity => 
        celebrity.id === kidObject.celebrityId
    )
}
// Function to generate the pairings HTML
export const Pairings = () => {
    let html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"
    return html
}