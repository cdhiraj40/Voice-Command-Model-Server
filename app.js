const express = require('express');
const app = express();


import model_versions from './model_versions.json'
const bodyParser = require('body-parser');

const modelVersions = model_versions;

/** Parse the request */
app.use(bodyParser.urlencoded({ extended: true }))
/** Takes care of JSON data */
app.use(express.json());

app.get('/', (req, res) => {
    res.send('EnviroCar Model!!');
})

app.get('/model', (versionCode) => {
    console.log(versionCode.body);

    // get the model link
    var modelLink = getModelByVersion(modelVersions, versionCode);
    res.send(modelLink);
})

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));