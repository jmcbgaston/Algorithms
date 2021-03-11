URLHASH = {}

var encode = function(longUrl) {
    let key = generateKey()
	while (URLHASH[key]) {
		key = generateKey()
	}
	URLHASH['http://tinyurl.com/' + key] = longUrl
    return 'http://tinyurl.com/' + key
};

function generateKey() {
    let key  = ''
	while (key.length <= 6) {
		key += JSON.stringify(Math.floor(Math.random() * 9))
	}
	return key
}

var decode = function(shortUrl) {
    return URLHASH[shortUrl]
};

let longUrl = 'https//:www.pizzahut.com/123'
console.log(encode(longUrl))