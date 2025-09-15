import { Pairings } from "./Pairings.js"
import { Celebrities, addCelebritiesEventListener } from "./CelebrityList.js"
import { Kids, addKidsEventListener } from "./Kids.js"
// Get a reference to the main container element
const mainContainer = document.querySelector("#container")
// Generate the application HTML structure
const applicationHTML = `
    <h1>Make a Memory for Kids</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${Kids()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${Celebrities()}
        </section>
    </article>

    <article class="assignments">
        <h2>Pairings</h2>
        ${Pairings()}
    </article>
`
// The application HTML into the main container
mainContainer.innerHTML = applicationHTML

// Activate event listeners
addKidsEventListener()
addCelebritiesEventListener()