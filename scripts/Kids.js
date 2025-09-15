import { getChildren } from "./database.js"

const children = getChildren() // Get children data

// Function to generate the kids HTML

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

// Event listener for kid names/wishes
export const addKidsEventListener = () => {
    document.addEventListener("click", (event) => {
        if (event.target.dataset.type === "child") {
            const kidWish = event.target.dataset.wish
            window.alert(`${event.target.textContent}'s wish: ${kidWish}`)
        }
    })
}