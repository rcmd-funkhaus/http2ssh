var url = new URL(window.location.href);
var ssh_url = url.searchParams.get("ssh");
window.location.href = ssh_url; 