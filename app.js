var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const morgan = require('morgan');

var homeRouter = require('./routes/home');
var loginRouter = require('./routes/login');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pagesRouter = require('./auth/route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/images/')));
//app.use("/api/auth", require("./auth/route"));
app.use(morgan('dev'));

/*
app.get('/', (req, res) => {
  res.render('home');
})
*/

app.get('/', homeRouter);
//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/api/auth', pagesRouter);

//app.use('/login', (req, res) => res.render('login'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(req, res, next) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  next();
});

//my routes
/*
app.get('/login', (req, res) => {
  res.render("login", (err, html) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error rendering template');
    } else {
      res.send(html);
    }
  });
});
*/

//app.get('/', (req, res) => res.render("home"));
//app.get("/signin", (req, res) => res.render("client"));
app.get("/user", (req, res) => res.render("user"))

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
