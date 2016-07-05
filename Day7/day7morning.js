var textchange = document.getElementById("color-div");
var shadow = document.getElementById("lightbox");
function getFormValues() {
	console.log(document.getElementById("first").value + " " + document.getElementById("last").value);
}

function changeColor() {
	textchange.classList.add('isRed');
}

function toggleImage() {
	shadow.classList.add('isVisible');
}

function clearBackground() {
	shadow.classList.remove('isVisible');

}

document.getElementById("name-btn").onclick = function() {
	getFormValues();
};

document.getElementById("color-btn").onclick = function(){
	changeColor();
}
document.getElementById("image-btn").onclick= function() {
	toggleImage();
}
document.getElementById("lightbox").onclick = function() {
	clearBackground();
}
