const date = new Date(prompt("enter the month"));
month=date.getMonth();

if(month>=0 && 3>=month){
	document.write("this month is spring");
}
else if(month>=4 && 7>=month){
	document.write("this month is summar");
}
else if(month>=8 && 11>=month){
	document.write("this month is winter");
}
else {
	document.write("error");
}
 