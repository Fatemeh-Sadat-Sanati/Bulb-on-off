let bulbText = document.getElementById("bulb-button");
bulbText.addEventListener('click', changeBulbImage);
let state = 0;
		function changeBulbImage() {
			if (state == 1) {
				document.getElementById("bulbImg").src="https://image.ibb.co/hoBxtm/light_bulb_off.png";
                bulbText.innerHTML = "Bulb ON";
                bulbText.style.background = "Yellow";
                bulbText.style.color = "black";
				state = 0;
			} else {
				document.getElementById("bulbImg").src="https://image.ibb.co/cBBaeR/light_bulb_on.png";
				state = 1;
                bulbText.innerHTML = "Bulb OFF"
                bulbText.style.background = "black";
                bulbText.style.color = "white";
			}
		}