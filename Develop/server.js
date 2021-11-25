// Varibles for required express
const express = require('express');
const fs = require('fs')
const path = require('path')
const uuid = require('uuid');
const newNote = require('./db/db.json');
const app = express()

const useIndexRouter = require('./routes/indexRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// Created routes for html
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'))
}) 

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

app.post('/api/notes', (req, res) => {
    const addNote = JSON.parse(fs.readFileSync('./db/db.json'))
    const newNote = req.body
    newNote.id = uuid.v4()
    addNote.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(addNote))
    res.json(addNote)
})

// app.use("/indexRoutes", useIndexRouter)
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));