// plik scripts.js

function getTriangleArea(a, h) {
	var triangleArea = a*h/2;
	if ( a <= 0 || h <= 0 ) {
		console.log('Nieprawidłowe dane');
	} 
	return triangleArea;
}

getTriangleArea(10,6);

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(15, 25);
var triangle3Area = getTriangleArea(20, 35);