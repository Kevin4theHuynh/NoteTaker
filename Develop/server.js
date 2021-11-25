const express = require('express');
const app = express()
const fs = require('fs')
const path = require('path')
const useIndexRouter = require('./routes/indexRoutes');
const newNote = require('./db/db.json');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))



app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('/api/notes', (req, res) => {
    res.json(newNote.slice(1))
})

function postNote (body, array) {
    const sendNote = body;
    if (!Array.isArray(array))
    array = ['']
    if (array.length = 0) {
        let addNote = array.push('')
    }
        
    
}

app.post('/api/notes', (req, res) => {
    const addNote 
})

// app.use("/indexRoutes", useIndexRouter)
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));