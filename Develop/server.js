const express = require('express');
const app = express()
const fs = require('fs')

const useIndexRouter = require('./routes/indexRoutes');
const useNotesRouter = require('./routes/notesRoutes');


app.use("/indexRoutes", useIndexRouter)



const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));