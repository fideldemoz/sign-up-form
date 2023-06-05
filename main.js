const passwd = document.querySelector('input[id="password"]');
const confirmpasswd = document.querySelector("input[id='confirm-password']");
const alertt = document.createElement("p");
const place = document.querySelector(".r");
const passwds = [passwd, confirmpasswd];
alertt.setAttribute("style", "color:red; font-weight: 300; font-size: 11px; margin:0");
place.appendChild(alertt);

passwds.forEach((item) => {
	item.addEventListener("input", () => {
		if (passwd.value !== confirmpasswd.value) {
			alertt.textContent = "Passwords don't match";
		} else if (passwd.value === confirmpasswd.value) {
			alertt.textContent = "";
	}
})})