const express = require('express');
const gamersRoutes = require('./src/gamer/routes');

const app = express();
const port = 3000;

app.use(express.json());

//main page
app.get('/', (req, res) => {
    res.send("Main page.")
})

app.use("/api/gamers", gamersRoutes);

app.listen(port, () => console.log(`Server has been started on port ${port}`));