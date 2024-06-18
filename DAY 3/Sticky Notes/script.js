document.getElementById('save').addEventListener('click', function (event) {
    event.preventDefault();
    const titel = document.getElementById('titel').value;
    const content = document.getElementById('content').value;

    if (titel && content) {
        localStorage.setItem(titel, content);
        addNoteToOutput(titel, content);
        document.getElementById('titel').value = '';
        document.getElementById('content').value = '';
    }
});

function addNoteToOutput(titel, content) {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        
        <h2><b>${titel}</b></h2>
        
        <h3>${content}</h3>
        <div class="note-buttons">
            <button class="note-button edit-button" onclick="editNote('${titel}')">Edit</button>
            <button class="note-button delete-button" onclick="deleteNote('${titel}')">Delete</button>
        </div>
    `;

    document.getElementById('output').appendChild(note);

    const output = document.getElementById('output');
    output.style.display = "flex";
    output.style.flexWrap = "wrap";
    output.style.margin = "40px";
}

function loadNotes() {
    for (let i = 0; i < localStorage.length; i++) {
        const titel = localStorage.key(i);
        const content = localStorage.getItem(titel);
        addNoteToOutput(titel, content);
    }
}

function editNote(titel) {
    const content = localStorage.getItem(titel);
    document.getElementById('titel').value = titel;
    document.getElementById('content').value = content;
    deleteNote(titel);
}

function deleteNote(titel) {
    localStorage.removeItem(titel);
    document.getElementById('output').innerHTML = '';
    loadNotes();
}
const fetchData = async() =>
    {
        let d = await fetch("https://jsonplaceholder.typicode.com/todos").then((response) => response.json()).then((res) => res)
       console.log(d);
       d.forEach((item,index) =>
        {
            document.getElementById("container").innerHTML += `<div class = "card">
            <div class = "card-header">
            <h2>Card</h2>
            </div>
            <div class = "card-body">
            <p>${item.userId}</p>
            <p>${item.title}</p>
            <p>${item.completed?"Yes":"no"}</p>
            </div>
            </div>`
        })
    }
    fetchData();