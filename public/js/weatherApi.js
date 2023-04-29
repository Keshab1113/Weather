const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("weather");
const min_max = document.getElementById("min-max");
const feel_temp = document.getElementById("feel_temp");
const mood = document.getElementById("mood");
const date = document.getElementById("date");

        const getInfo=async(event)=>{
            event.preventDefault();
            let cityVal = cityName.value;
            if(cityVal===""){
                alert("Please Enter Valid City Name");
                // city_name.innerText= `Please Enter Valid City Name`;
            }
            else{
                try {
                    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b25d1cf47fa29a4992fe373ca33ebb96`;
                const response = await fetch(url);
                const data = await response.json();
                const arrData = [data];
                temp.innerText = `${Math.floor(arrData[0].main.temp)}°C`;
                temp_status.innerText = arrData[0].weather[0].main;
                min_max.innerText = `${arrData[0].main.temp_min}(Min°C) || ${arrData[0].main.temp_max}(Max°C)`;
                feel_temp.innerText = `Feel like ${arrData[0].main.feels_like}°C`;
                city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
                // console.log(arrData[0].weather[0].main);
                if(arrData[0].weather[0].main=="Rain"){
                    mood.innerHTML= "<i class='bi bi-cloud-drizzle'></i>";
                    // document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600×900/?rain')";
                }
                else if(arrData[0].weather[0].main=="Haze"){
                    mood.innerHTML= "<i class='bi bi-cloud-haze'></i>";
                    // document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600×900/?rain')";
                }
                else if(arrData[0].weather[0].main=="Clouds"){
                    mood.innerHTML= "<i class='bi bi-cloud'></i>";
                    // document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600×900/?')";
                }
                else if(arrData[0].weather[0].main=="Smoke"){
                    mood.innerHTML= "<i class='bi bi-cloud-haze2'></i>";
                    // document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600×900/?rain')";
                }
                else {
                    mood.innerHTML= "<i class='bi bi-cloud-sun'></i>";
                    // document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600×900/?rain')";
                }

                } catch{
                    city_name.innerText= `Please Enter Valid City Name`;
                }
                
            }
            
        }
        submitBtn.addEventListener("click",getInfo);
       


        let todayDate = new Date();
        date.innerText = dateManage(todayDate);
        function dateManage(dateArg) {
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let year = dateArg.getFullYear();
            let month = months[dateArg.getMonth()];
            let date = dateArg.getDate();
            let day = days[dateArg.getDay()];
            return `${date} ${month} (${day}), ${year}`;
        }