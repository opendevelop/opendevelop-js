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

/*
 * Define OpenDevelop client methods
 */
OpenDevelop.prototype.images = function () {
	var request = this.request('get', 'images');
	return request;
}

OpenDevelop.prototype.createSandbox = function (image, cmd, files) {
	var data = new FormData();
	data.append('image', image);
	data.append('cmd', cmd);

	// TODO: Add uploading of files

	var = request = this.request('post', 'sandbox', data);
	return request;
}

OpenDevelop.prototype.sandbox = function (slug) {
	var data = {
			sandbox: slug
		},
		request = this.request('get', 'sandbox', data);
	return request;
}
