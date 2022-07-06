let menu = document.querySelector(".menu");
let times = document.querySelector(".close");
let list = document.querySelector(".list");
let ourMission = document.querySelector("#mission");
let ourVission = document.querySelector("#vision");
let ourServices = document.querySelector("#services");
let ourEarning = document.querySelector("#earning");
let show = document.querySelector("#show");

menu.addEventListener("click", ()=>{
    list.style.display = "block";
   
})
times.addEventListener("click", ()=>{
    list.style.display = "none";
    
})

ourMission.addEventListener("click", ()=>{
    show.style.transition = "1s ease"
    show.textContent = "As a leading global market maker, supremewavescapitals.ltd is committed to creating the most user-friendly trading investment experience for all our clients while achieving maximum profitability. We strive to bring the most advanced technology and develop new tools to allow traders to trade with confidence and success. In addition to our tools, we also ensure that our customer service is of the highest level. Whatever request that you as an investor may make, we will make every effort to ensure that it will be handled in a timely and professional manner"
})
ourVission.addEventListener("click", ()=>{
    show.textContent = "We are a trading and investment management company aimed at providing clients the best possible services in today’s markets"
})
ourServices.addEventListener("click", ()=>{
    show.style.transition = "1s ease"
    show.textContent = "Supremewavescapitals.ltd is a leading investment provider to financial market professionals. Our technical strategies cover equity, forex, commodities and fixed-income markets. Our market depth and knowledge are attributed to our acquired experience on trading floors of many banking institutions."

})
ourEarning.addEventListener("click", ()=>{
    show.style.transition = "1s ease"
    show.textContent = "Since inception our platform has generated a total sum of one billion, five hundred and eighty million, three hundred and seventy-five thousand, two hundred and thirty dollars ($1,580,375,230) equivalent to (199,815.812BTC) in profits alone since inception through our wide range of earning options, with three hundred and sixty-nine thousand investment accounts (369,000) and an active daily transaction of over two hundred and forty-three thousand dollars ($243,000+) we have been able to satisfy every single investor we have ever worked with across the one hundred and twenty-seven (127) countries we currently support. Investors can grow their investment and earn profits in our platform in the following ways: By purchasing an investment plan. By direct commission on their referrals. By participating in our representative program. Through our shares. By participating in our affiliate marketing program."
    
})


