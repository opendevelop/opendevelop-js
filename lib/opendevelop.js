/*
 * Constructor for the OpenDevelop client
 */
function OpenDevelop (host, clientId, clientSecret) {
	this.host = host;
	this.clientId = clientId;
	this.clientSecret = clientSecret;
}

/*
 * Foundation function for OpenDevelop requests
 */
OpenDevelop.prototype.request = function (method, resource, data) {
}
