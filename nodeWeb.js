let express = require("express");

let app = express();
app.listen(8888);
console.log("Server is running on port 8888");

app.get("/", (req, res) => {
    res.send("Hello World");
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/calculator', express.static(__dirname + '/static'));

app.post("/calc", (req, res) => {
    var data = req.body;
    var result = eval(data); //간단하게 테스트하기 위해 사용.
    res.send(String(result));
});