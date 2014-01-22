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
