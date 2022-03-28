var axios = require('axios');
var fs = require('fs')

let op = {
    plus: "plus",
    minus : "minus",
    multi: "multi",
    divide: "divide",
    pow : "pow"
}

let first = 100, second = 3, s = op.pow
var config = {
  method: 'get',
  url: `http://localhost:8080/calculate?first=${first}&second=${second}&op=${s}`,
};

axios(config)
.then(function (response) {
console.log(response.data)
  fs.writeFileSync('restRespone.json', JSON.stringify(response.data))
})
.catch(function (error) {
  console.log(error.message);
});
