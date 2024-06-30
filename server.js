const express = require('express')
const app = express();
app.use('/', (req, res) => {
    res.send('hello world');
})

app.listen(3400, () => {
    console.log('server is up and running..')
});