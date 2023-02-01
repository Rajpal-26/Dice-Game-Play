// form hide

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");

image1.addEventListener("click", function () {
    // console.log("clicked")
    const form = document.getElementById("signup-form");
    form.classList.remove("hidden")
    

});

// form Submit

let submit = document.getElementById("submit-btn");

submit.addEventListener("click", (e) => {
    e.preventDefault()
    
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    localStorage.setItem("name", name)
    localStorage.setItem("username", username)
    localStorage.setItem("email", email);

    alert("Form submitted successfully")

})

// Display form data
image2.addEventListener("click", function () {
    // console.log("clicked")
    const form = document.getElementById("signup-form");
    form.classList.add("hidden")
    const display_data = document.getElementById("display_data")
    display_data.classList.remove("hidden")
    let display_name = document.getElementById("display_name");
    let display_username = document.getElementById("display_username")
    let data_name = localStorage.getItem("name")
    let data_username = localStorage.getItem("username")
    display_name.innerHTML = "Name : " + data_name;
    display_username.innerHTML = "Username : "+ data_username;
})

image3.addEventListener("click", function () {
    let dice = document.getElementById("dice")
    display_data.classList.add("hidden")
    dice.classList.remove("hidden")
    let DiceImg = document.getElementById("diceImg")
    let clickCount = 0;
    let total = 0;
    let score = document.getElementById("score");
    let congrats = document.getElementById("congrats")
    DiceImg.addEventListener("click", function () {
        clickCount++;
        let randomNum = Math.floor(Math.random() * 6) + 1;
        total += randomNum;
        score.innerHTML = "Score : " + total;
        if (clickCount === 3) {
            if (total > 10) {
                congrats.innerHTML="Congratulations!.....click on the next image"
            } else {
                
                alert("Try again after scoring more than 10");
                image4.style.display = none;
            }
        }
    })
} )

image4.addEventListener("click", function () {
    image1.disabled = true;
    dice.classList.add("hidden")
    let couponGen = document.getElementById("coupon");
    let coupon = ""
    let digit = "0123456789"
    for (let i = 0; i < 12; i++) {
    coupon += digit.charAt(Math.floor(Math.random() * digit.length));
    }
    couponGen.innerHTML = "coupon : " + coupon;
    let image = document.getElementById("complete")

    let complete = document.getElementById("complete");
    complete.classList.remove("hidden");
    

})
