const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {userRouter, planetRouter} = require('./routers');

app.use('/people', userRouter);
app.use('/planets', planetRouter);

app.use(_mainErrorHandler);


app.listen(3000, () => {
    console.log('listening...3000')
})

function _mainErrorHandler(err, req, res, next) {

    res.status(err.status || 500)
        .json({message: err.message} || 'Unknown error');
}
