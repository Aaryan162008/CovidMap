//var marker = new mapboxgl.Marker({
   // color: "#FFFFFF",
    //draggable: true
    //}).setLngLat([77.216721, 28.644800])
    //.addTo(map);
   //console.log(fetch("http://api.openweathermap.org/data/2.5/weather?q=ahmedabad&appid=736412f27570e2880986e590ae7278fc"))
   fetch("http://api.openweathermap.org/data/2.5/weather?q=ahmedabad&appid=736412f27570e2880986e590ae7278fc").then(res=>res.json())
   .then(res=>console.log(res.main.temp))
   function updatemap(){
       fetch("data.json")
       .then(res=>res.json())
       .then(res => {
           res.data.forEach(element => {
               var latitude = element.latitude;
               var longitude = element.longitude;
               var cases = element.infected;

               console.log(longitude,latitude)

               if(cases<100){
                   col = "rgb(255,0,0)"
               }else if(100<cases<200){
                   col = "rgb(100,255,0)"
               }else if(200<cases<300){
                    col = "rgb(100,255,0)"
               }else if(300<cases<400){
                    col = "rgb(100,255,0)"
               }else if(400<cases<500){
                    col = "rgb(100,255,0)"
               }else if(500<cases){
                     col = "rgb(100,255,0)"
               }
               new mapboxgl.Marker({
                   color:col,
                   Draggable:false
               }).setLngLat([longitude,latitude])
               .addTo(map);
           })
       })
   }
   updatemap()
   