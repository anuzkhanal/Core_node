const url = require("url");

const myurl = new URL(
  "http://mywebsite.com:8000/hello.html?id=199&status=active"
);

//serialized url
console.log(myurl.href);
console.log(myurl.toString());

//host (root domain)
console.log(myurl.host);
//hostname(doesnt get port)
console.log(myurl.hostname);

//pathname
console.log(myurl.pathname);

//serialized query
console.log(myurl.search);
//param object
console.log(myurl.searchParams);
//add param
myurl.searchParams.append("abc", "123");
console.log(myurl.searchParams);
//loop through params
myurl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
