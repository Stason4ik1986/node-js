const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error')

const app = express();

// Using ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Using handlebars
// const expressHbs = require('express-handlebars');

// app.engine('hbs',
//     expressHbs(
//         {
//             extname: 'hbs',
//             layoutsDir: 'views/layouts/',
//             defaultLayout: 'main-layout',
//         }
//     )
// );
// app.set('view engine', 'hbs');
// app.set('views', 'views');

// Using pug
// app.set('view engine', 'pug');
// app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
console.log('Listening localhost:3000');