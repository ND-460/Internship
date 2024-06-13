const url = require('url');

const myUrl = new URL('https://google.org:0369');
myUrl.pathname = '/folder/subfolder';
myUrl.search = '?name=Neel';
myUrl.hash = '#secretfile.ppt';
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.href);