var express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    hbs = require('hbs'),

    config = require('./config'),
    mongoosekeeper = require('./lib/mongoosekeeper'),
    routes = require('./routes/index'),
    adminRoutes = require('./routes/admin/index'),
    users = require('./routes/users');
// dbnav = require('./models/admin/mongose_demo');


//连接数据库[后期改成BAE上的mongodb数据库，链接]
//mongoose.connect('mongodb://localhost/bae');   //本地可以使用，但是在BAE上报错

var app = express();

// view engine setup
hbs.registerPartials(__dirname + '/views/partials');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.PORT) {
    console.log(new Date() + ':process.env.PORT:', process.env.PORT);
    mongoosekeeper.config(config.baeDb);
} else {
    console.log(new Date() + ':localhost');
    mongoosekeeper.config(config.localDb);
}

app.use('/', routes);
app.use('/', adminRoutes);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(err)
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
