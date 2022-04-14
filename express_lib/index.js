/* eslint-disable no-unused-vars */
const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Files/');
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = `${file.originalname
            .replace(fileExt, '')
            .toLowerCase()
            .split(' ')
            .join('-')}-${Date.now()}`;

        cb(null, fileName + fileExt);
    },
});
const upload = multer({
    storage,
    limits: { fileSize: 10000000 },
    fileFilter: (req, file, cb) => {
        if (file.fieldname === 'avatar') {
            if (
                file.mimetype === 'image/png' ||
                file.mimetype === 'image/jpg' ||
                file.mimetype === 'image/jpeg'
            ) {
                cb(null, true);
            } else {
                cb(new Error('Only .jpg, .png or .jpeg format allowed!'));
            }
        } else if (file.fieldname === 'doc') {
            if (file.mimetype === 'application/pdf') {
                cb(null, true);
            } else {
                cb(new Error('Only .pdf format allowed!'));
            }
        } else {
            cb(new Error('There was an unknown error!'));
        }
    },
});

const app = express();

app.post(
    '/file',
    upload.fields([
        { name: 'avatar', maxCount: 2 },
        { name: 'doc', maxCount: 1 },
    ]),
    (req, res, next) => {
        console.log(req.files);
        res.send('success');
    }
);

app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).send('There was an upload error!');
            console.log(err);
        } else {
            res.status(500).send(err.message);
        }
    } else {
        res.send('success');
    }
});
app.listen(3000, () => {
    console.log('app listening at port 3000');
});
