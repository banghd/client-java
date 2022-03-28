var axios = require('axios');
var fs = require('fs')
let first = 3, second = 2, operator = "^"
var data = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\r\n                  xmlns:gs="http://www.baeldung.com/springsoap/gen">\r\n    <soapenv:Header/>\r\n    <soapenv:Body>\r\n        <gs:CalculatorRequest>\r\n            <op>${operator}</op>\r\n            <first>${first}</first>\r\n            <second>${second}</second>\r\n        </gs:CalculatorRequest>\r\n    </soapenv:Body>\r\n</soapenv:Envelope>`;

var config = {
  method: 'post',
  url: 'http://localhost:8080/ws/',
  headers: { 
    'Content-Type': 'text/xml'
  },
  data : data
};

axios(config)
.then(function (response) {
  fs.writeFileSync('response.xml', response.data)
})
.catch(function (error) {
  console.log(error.message);
});
