const jsonServer = require('json-server');
const auth = require('json-server-auth');
const generatePartyId = require('./json-server-middlewares/partyId-generation');
const app = jsonServer.create();
const router = jsonServer.router('db.json');
const bodyParser = require('body-parser');

app.db = router.db

app.use(function(req, res, next){
  setTimeout(next, 2000);
});
app.use(bodyParser.json());
app.use(generatePartyId)
app.use(auth)
app.use(router)

app.listen(3000, () => {
  console.log('JSON Server is running')
})

