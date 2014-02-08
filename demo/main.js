/*
 * Initialize localStorage caching of OpenDevelop information
 */

var client = new OpenDevelop(localStorage.host, localStorage.clientId, localStorage.clientSecret),
	settingsForm = document.getElementById('client-settings-form');

settingsForm.host = document.getElementById('opendevelop-host');
settingsForm.host.value = client.host;

settingsForm.clientId = document.getElementById('opendevelop-client-id');
settingsForm.clientId.value = client.clientId;

settingsForm.clientSecret = document.getElementById('opendevelop-client-secret');
settingsForm.clientSecret.value = client.clientSecret;

settingsForm.onsubmit = function (e) {
	e.preventDefault();

	var delegates = [localStorage, client];
	delegates.forEach(function (delegate) {
		delegate.host = settingsForm.host.value;
		delegate.clientId = settingsForm.clientId.value;
		delegate.clientSecret = settingsForm.clientSecret.value;
	});
}

var clientMethod = document.getElementById('client-method'),
	clientMethodSection = document.getElementById('client-method-section'),
	apiCall = document.getElementById('api-call'),
	apiCallResponse = document.getElementById('api-call-response');

clientMethod.onchange = function () {
	apiCall.innerHTML = this.selectedOptions[0].dataset['apicall'];
	clientMethodSection.setMethod();
}

clientMethod.getCurrentMethod = function () {
	return this.selectedOptions[0].value;
}

clientMethodSection.setMethod = function () {
	var currentMethod = this.dataset['clientMethod'];
	this.classList.remove(currentMethod);
	this.classList.add(clientMethod.getCurrentMethod());
	this.dataset['clientMethod'] = clientMethod.getCurrentMethod();
}

clientMethod.onchange();

var dropbox = document.getElementById('dropbox');
dropbox.ondragstart = function (e) {
	e.preventDefault();
	e.stopPropagation();
	dropbox.textContent = 'lol';
}
dropbox.ondragenter = function () {
	dropbox.textContent = 'lol';
}
