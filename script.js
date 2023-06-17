function volume_sphere() {
    //Write your code here

	// document.getElementById('MyForm')

	const radius = document.getElementById('radius').innerText;
	const volEl = document.getElementById('volume');
	const volume = (4/3)*Math.PI*radius^3;

	volEl.innerText = volume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
