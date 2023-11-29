const AWS = require('aws-sdk');
const AWS3 = require('@aws-sdk/client-s3')


const region = 'us-west-1';
const accessKeyId = 'AKIARTECYEIBEUE6NIVN';
const secretAccessKey = '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';


AWS.config.update({
    region,
    credentials: {
        accessKeyId:accessKeyId,
        secretAccessKey:secretAccessKey
    }
});



const s3Instance = new AWS3.S3Client({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey: secretAccessKey,
        
    }
})

module.exports = {
    s3Instance
};
