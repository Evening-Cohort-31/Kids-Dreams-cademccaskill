import { getCelebrities } from "./database.js"

const celebrities = getCelebrities() // Get celebrities data

// Function to generate the celebrities HTML

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li data-id="${star.id}" data-type="celebrity" data-sport="${star.sport}" id="star--${star.id}">${star.name}</li>`// Add data-sport attribute
    }

    html += "</ol>"
    return html
}

// Event listener for celebrity names/sports
export const addCelebritiesEventListener = () => {
    document.addEventListener("click", (event) => {
        if (event.target.dataset.type === "celebrity") {
            const celebritySport = event.target.dataset.sport
            const celebrityName = event.target.textContent.trim() // trim() removes whitespace
            window.alert(`${celebrityName} is a ${celebritySport} star!`)
        }
    })
}