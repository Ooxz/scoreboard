let homeBtn1 = document.getElementById("home-btn1")
let homeBtn2 = document.getElementById("home-btn2")
let homeBtn3 = document.getElementById("home-btn3")
let homeScore = document.getElementById("home-score")
let homeCount = 0
homeScore.innerHTML = homeCount

let guestBtn1 = document.getElementById("guest-btn1")
let guestBtn2 = document.getElementById("guest-btn2")
let guestBtn3 = document.getElementById("guest-btn3")
let guestScore = document.getElementById("guest-score")
let guestCount = 0
guestScore.innerHTML = guestCount

let resetScore = document.getElementById("reset-btn")

resetScore.addEventListener("click", resetToZero)

homeBtn1.addEventListener("click", addOneHome)
homeBtn2.addEventListener("click", addTwoHome)
homeBtn3.addEventListener("click", addThreeHome)

guestBtn1.addEventListener("click", addOneGuest)
guestBtn2.addEventListener("click", addTwoGuest)
guestBtn3.addEventListener("click", addThreeGuest)

function addOneHome() {
homeCount ++
homeScore.innerHTML = homeCount
}

function addTwoHome() {
	homeCount += 2
	homeScore.innerHTML = homeCount
	}

	function addThreeHome() {
		homeCount += 3
		homeScore.innerHTML = homeCount
		}

		function addOneGuest() {
			guestCount ++
			guestScore.innerHTML = guestCount
			}
			
			function addTwoGuest() {
				guestCount += 2
				guestScore.innerHTML = guestCount
				}
			
				function addThreeGuest() {
					guestCount += 3
					guestScore.innerHTML = guestCount
					}


		function resetToZero() {
	homeCount = 0
	homeScore.innerHTML = homeCount
	guestCount = 0
	guestScore.innerHTML = guestCount
		}