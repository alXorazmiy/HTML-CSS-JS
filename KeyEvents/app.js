
const insert = document.getElementById("insert")

window.addEventListener("keydown", (e)=> {
    console.log(e)
    insert.innerHTML = `
        <div class="key">
            ${e.key}
            <small>event</small>
        </div>
        <div class="key">
            ${e.keyCode}
            <small>Event</small>
        </div>
        <div class="key">
            ${e.code}
            <small>event</small>
        </div>
    `
})