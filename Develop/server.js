const express = require('express');
const app = express()
const useIndexRouter = require('./routes/indexRoutes');
const useNotesRouter = require('./routes/notesRoutes');


app.use("/indexRoutes", useIndexRouter)
app.use("/notesRoutes", useNotesRouter)

app.listen(3000)