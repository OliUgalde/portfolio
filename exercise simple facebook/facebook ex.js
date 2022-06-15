var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "Sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	}
];
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];
function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
	if(database[i].username === username && 
		database[i].password === password) {
		return true;
}
}
return false;
}
function signin(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("sorry, wrong username or password");
	}
}

//function signin(username, password) {
//	for (var i=0; i < database.length; i++) {
//		if(database[i].username === username && 
//			database[i].password === password) {
//			console.log(newsfeed);
//	} else {
//		alert("sorry, wrong username and password");
//	}
//	}

//	if (username === database[0].username && 
//		password === database[0].password) {
//		console.log(newsfeed);
//	}else {
//		alerte("sorry, wrong username and password");
//	}
//	}

var userNamePrompt = prompt("what´s your username?");
var passwordPrompt = prompt("your password");

signin(userNamePrompt, passwordPrompt);