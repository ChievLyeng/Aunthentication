const express = require('express');
const AwsClient = require('./awsClient');
const AWS3 = require('@aws-sdk/client-s3')
const multer = require('multer')

const app = express();
const upload = multer({})

const bucketName = 'kaksikor-testing';

//v2
app.get('/v2/buckets', (req, res) => {
    const s3 = new AwsClient.AWS.S3({});
    s3.listBuckets((err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            // Log the entire data object for debugging
            console.log('S3 List Buckets Response:', data);
            
            const buckets = data && data.Buckets ? data.Buckets : [];
            res.send(buckets);
        }
    });
});

app.post('/v2/post', upload.single('file'), (req, res) => {
    try {
        const s3 = new AwsClient.AWS.S3({})
        const fileName = `${Date.now()}-${req.file.originalname}`
        let uploadParams = { Key: fileName, Bucket: bucketName, Body: req.file.buffer }
        s3.upload(uploadParams, (err, response) => {
            if (err) {
                console.log(err)
            } else {
                res.send('success')
            }
        })
    } catch (err) {
        res.send(err)
        console.log(err)
    }
})

//v3
app.get('/v3/buckets', async (req, res) => {
    try {
        const command = new AWS3.ListBucketsCommand({})
        const response = await AwsClient.s3Instance.send(command)
        res.send(response.Buckets)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

app.post('/v3/post', upload.single('fil'), async (req, res) => {
    try {
        const fileName = `${Date.now()}-${req.file.originalname}`

        let uploadParams = { Key: fileName, Bucket: bucketName, Body: req.file.buffer }
        const command = new AWS3.PutObjectCommand(uploadParams)
        const response = await AwsClient.s3Instance.send(command)

        if (response.$metadata.httpStatusCode === 200) {
            res.send('succes')
        }
    } catch (err) {
        console.log(err)
    }
})

app.listen(4000, () => {
    console.log("Listening on port 4000!");
});
