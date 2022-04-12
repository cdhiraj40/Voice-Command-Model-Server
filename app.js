// const getModelByVersion = require('./get_model')
const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
const bodyParser  = require('body-parser');

const modelVersions = require( './model_versions.json')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req,res) => {
    res.send('Envirocar Model Backend!!');
})

app.get('/test', (req, res) =>{
    console.log(req.body)
    res.send(req.body)
})

app.get('/model', (req, res) => {
    console.log(req.body.versionCode);  
    // get the model link
    var modelLink = getModelByVersion(modelVersions, req.body.versionCode);
    res.send(modelLink);
})

function getModelByVersion(modelVersions, versionCode) {

    for (var i = 0; i < modelVersions.length; i++) {
        if (modelVersions[i].model_version == versionCode) {
            return modelVersions[i].model_link;
        }
    }
}

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));