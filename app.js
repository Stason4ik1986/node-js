const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// Using handlebars
app.engine('hbs', expressHbs());
app.set('view engine', 'hbs');
app.set('views', 'views');

// Using pug
// app.set('view engine', 'pug');
// app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: '404 Page Not Found' });
});

app.listen(3000);
console.log('Listening localhost:3000');