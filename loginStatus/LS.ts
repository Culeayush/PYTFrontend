
var ISLOGGEDIN : boolean = false;
var USERNAME : string =''

export const getUserName = () =>{
	return USERNAME
}

export const setUserName = (userName: string) =>{
	USERNAME = userName
	console.log(USERNAME)
}

export const getLoginStatus = () => {
	return ISLOGGEDIN
}

export const setLoginStatus = (isLoggedIn : boolean) => {
	ISLOGGEDIN = isLoggedIn;
	updateUI(ISLOGGEDIN)
}

const updateUI = (ISLOGGEDIN : boolean) => {
	var loginButton = document.querySelector('#loginBtn') as HTMLLinkElement
	var signupButton = document.querySelector('#signupBtn') as HTMLLinkElement
	var logOutButton = document.querySelector('#logoutBtn') as HTMLLinkElement
	var userLoginMsg = document.querySelector('#userMsg') as HTMLSpanElement

	if (ISLOGGEDIN) {
		loginButton.style.display = "none"
		signupButton.style.display = "none"
		logOutButton.style.display = "block"
		userLoginMsg.style.display = "block"
	}
	else {
		loginButton.style.display = "block"
		signupButton.style.display = "block"
		logOutButton.style.display = "none"
		userLoginMsg.style.display = "none"
	}

	console.log()
}

