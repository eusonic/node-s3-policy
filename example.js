
var policy = require('./');

var p = policy({
  secret: 'something',
  bucket: 'i.cloudup.com',
  key: 'asdfasdfaewrw',
  expires: new Date(Date.now() + 60000),
  acl: 'public-read'
});

console.log(p.policy);
console.log(p.signature);
