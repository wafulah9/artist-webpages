
// document.body.style.backgroundColor = 'grey';

// const names = " of tech genius in kenya!";
// const namess = document.getElementById('Names');

// namess.textContent += names === "" ? "of genius" : names 


// const names = document.getElementsByClassName("name");

// names[0].style.color = "blue"

// Array.from(names).forEach(function(element){
//     element.style.color = "red"
// })

// const names = document.getElementsByTagName("li")

// // names[5].style.color = "lightgreen"

// Array.from(names).forEach(function(element){
//     element.style.color = "red"
// })

// const names = document.querySelectorAll("h1");

// // names[0].style.color = 'red'
// names.forEach(function(element){
//     element.style.color = 'red'
// })

// const names = document.querySelectorAll("ol");


// names.forEach(function(element){
//     const element2 = element.lastElementChild;
//     element2.style.backgroundColor = "red"
// })

// const names = document.getElementsByTagName("li")

//     const elment = names.nextElementSibling;
//     elment.style.backgroundColor = "red"


// const nextelement = document.getElementById("Name1");
// const next = nextelement.nextElementSibling;
// next.style.backgroundColor = "red";

// const nextelement = document.querySelectorAll("li");
// nextelement[0].style.color = "red";

// const newelement = document.createElement("li");

// newelement.textContent = "seanio";
// newelement.li = "seanio"

// document.body.append(newelement)
// document.getElementById("Name2").append(newelement)

// const negdw = document.querySelectorAll("li");

// negdw[0].remove(newelement)

// const namess = document.getElementById("box")
// const namess1 = document.getElementById("btn")

//  namess1.addEventListener("click", function(event){


//     if (namess.textContent === "weeeh") {
//         namess.textContent = "ohh"
//         namess.style.color = "green"
//     }
//     else{
//         namess.textContent = "weeeh"
//         namess.style.color = "red"
//     }
//  })

// const myimg = document.getElementById("box")
// const mybtn = document.getElementById("btn")

// mybtn.addEventListener("click", function(event){

//     if (myimg.style.visibility === "hidden") {
//         myimg.style.visibility = "visible"
//          mybtn.textContent = "HIDE"
//     }
//     else{
//         myimg.style.visibility = "hidden"
//         mybtn.textContent = "SHOW"
//     }
// })


// const elment = document.getElementById("btn")

// elment.classList.add("greetext")
// elment.classList.add("greentext")

// elment.addEventListener("click", function(event){

//     if(event.target.classList.contains("greetext")){
//         event.target.classList.replace("greetext", "greentext")
//         event.target.textContent += "😢";
//     }
//     else{
//         event.target.classList.add("greetext")
//     }
// })

// const newelement = document.createElement("li");
// newelement.textContent = "wafula";
// newelement.li = "name"

// document.getElementById("Name2").append(newelement)
// document.getElementById("Name2").removeChild(newelement)

// const newlement = document.querySelectorAll("p");

// newlement.forEach(function(element){
//     element.style.marginTop = "12px"
// })

// const button = document.getElementById("btn")
// const myimg = document.getElementById("img")

// button.addEventListener("click", function(event){

//     if (myimg.style.visibility === "hidden") {
//         myimg.style.visibility = "visible"
//         button.textContent = "HIDE"
//         button.style.backgroundColor = "green"
//         button.style.color = "white"
//     }
//     else{
//         myimg.style.visibility = "hidden"
//         button.textContent = "SHOW"
//         button.style.backgroundColor = "black"
//         button.style.color = "white"    
//     }
// }
// )





                        // IMAGE SLIDES
// const slides = document.querySelectorAll(".slides img");
// let slideindex = 0;
// let intervalid = null;

// firstimge();
// document.addEventListener("DOMContentLoaded", firstimge);

// function firstimge(){

//     if (slides.length > 0) {
//         slides[slideindex].classList.add("displayimg");
//         intervalid = setInterval(next, 3000)
//     }
// }
// function showslide(index){


//     slides.forEach(function(slide){
//         slide.classList.remove("displayimg")
//     })
//     slides[slideindex].classList.add("displayimg");
// }
// function prev(){

// }
// function next(){
//     slideindex++;
//     if (slideindex >= slides.length) {
//         slideindex = 0;
//     }
//     showslide(slideindex);
    
// }
// try {
//     console.log(sejndj);
    
// } catch (error) {
//     console.log(error)
// }
// document.body.textContent = "welcome"

// let stopped = null;

// function start(){
//     stopped = setInterval(function(){
//         document.querySelector("div").textContent += "😃"
//         console.log("😃")
//     }, 500)
// }
// function stop(){
//     clearInterval(stopped)
//     console.log("cleared");
    
// }

// const newi = document.querySelectorAll("button");

// newi[0].style.color = "red"

// newi.forEach(function(element){
//     element.addEventListener("click", function(event){
        
//         if (event.target.style.color === "blue") {
//             event.target.style.color = "black"
//             event.target.style.backgroundColor = 'green'
//         }
//         else{
//             event.target.style.color = "blue"
//             event.target.style.backgroundColor = 'grey'
//         }
//     })
// })

// function Time(){

//     const now = new Date()
//     let hours = now.getHours();
//     hours = hours % 12 || 12;
//     hours = hours.toString().padStart(2, 0);
//     const meridian = hours == 12 ? "PM" : "AM";
//     const minute = now.getMinutes().toString().padStart(2, 0);
//     const second = now.getSeconds().toString().padStart(2, 0);
//     const string = `${hours}:${minute}:${second}  ${meridian}`
//     document.querySelector("div").textContent = string
// }

// Time()
// setInterval(Time, 1000)

// const slide = document.querySelectorAll(".slides img");
// let slideindex = 0;
// let intervalid = null;

// // firstimge();
// document.addEventListener("DOMContentLoaded", firstimge)


// function firstimge(){

//     if (slide.length > 0) {
//         slide[slideindex].classList.add("displayslide");
//         intervalid = setInterval(nextslide, 3000)
//     }
    
// }

// function showslide(index){
//     if (index >= slide.length) {
//         slideindex = 0;
//     }
//     else if(index < 0){
//         slideindex = slide.length -1;
//     }

//     slide.forEach(function(slidee){
//         slidee.classList.remove("displayslide")
//     })
//     slide[slideindex].classList.add("displayslide");
// }

// function prevslide(){
//     slideindex--;
//     showslide(slideindex)
//     clearInterval(intervalid)
// }

// function nextslide(){
//     slideindex++;
//     showslide(slideindex)
// }



                    // CALLBACK =>SITUATION IN JAVASCRIPT WHERE ALLBACKS 
                    //            are nested within other callabacks to the dgree
                                // where the code is difficult to read.



// function task1(callback){
//     setTimeout(function(){
//         document.querySelector("div").textContent = "welcome"
//         callback()
//     }, 1000)
// }

// function task2(callback){
//     setTimeout(function(){
//         document.querySelector("div").textContent = "wow you have a nice house"
//         callback()
//     }, 3000)
// }
// function task3(callback){
//     setTimeout(function(){
//         document.querySelector("div").textContent = "mmmmh it is about to try beiby"
//         callback()
//     }, 6000)
// }
// function task4(callback){
//     setTimeout(function(){
//         document.querySelector("div").textContent = "thanks for comming"
//         callback()
//     }, 7000)
// }
// task1(function() {
//     task2(function(){
//         task3(function(){
//             task4(function(){
//                 document.querySelector("div").textContent = "your welcome";
//             })
//         })
//     })
// })






                    // PROMISE => An Object thta nmanages asynchronous operartions. 
                    //             wrwp a promise object around {asynchronous code}
                    //             "i promise to return a value "
                    //             PENDING -> RESOLVED OR REJECTED
                    //             nes promise((resolve, reject) => {asynchronous})


// function task1(){

//     return new Promise((resolve, reject) => {
//         setTimeout(function(){

//             const studient = false;
//             if (studient) {
//                 resolve("mike is a studient")
//             }
//             else{
//                 reject("mike is dropout charecter")
//             }
//         }, 1000);
//     })
// }

// function task2(){

//     return new Promise((resolve, reject) => {
//         setTimeout(function(){

//             const studient = true;
//             if (studient) {
//                 resolve("john is a studient")
//             }
//             else{
//                 reject("njeri is dropout charecter")
//             }
//         }, 1000);
//     })
// }

// function task3(){

//     return new Promise((resolve, reject) => {
//         setTimeout(function(){

//             const studient = true;
//             if (studient) {
//                 resolve("Quani is a studient")
//             }
//             else{
//                 reject("Quani is dropout charecter")
//             }
//         }, 1000);
//     })
// }


// async function allfuction() {
    
//     try {
//         const divelement = document.querySelector("div");

//         const tast1result = await task1();
//         divelement.textContent = tast1result
//         divelement.style.color = "green"

//         const tast2result = await task2();
//         divelement.textContent = tast1result
//         divelement.style.color = "blue"

//         const tast3result = await task3();
//         divelement.textContent = tast3result
//         divelement.style.color = "red"

//     } catch (error) {
//         window.alert(error)
//     }
// }
// allfuction()f

// let intervalid = null;

// function task5(){
//     return new Promise((resolve, reject) => {
        
//         const intervalid = setInterval(() =>{
//             resolve("rededed😢")
//         }, 1000)
//     })
// }

// async function tsks() {
    
//     const divelment = document.querySelector("div");
//     const task5result = await task5();
//     divelment.textContent += task5result;
//     divelment.style.backgroundColor = "red"
//     divelment.style.width = "7rem"
//     divelment.style.height = "4rem"
//     divelment.style.textAlign = "center"
//     divelment.style.marginTop = "7rem"
//     divelment.style.paddingTop = "3rem"
//     console.log(task5result);
    
//     divelment.addEventListener("click", function(event){
        
//         if (event.target.style.backgroundColor === "red") {
//             event.target.style.backgroundColor = "blue"
//         }
//         else{
//             event.target.style.backgroundColor = "red"
//         }
//     })

// }
// tsks()


                    //   JSON => (javascript Object Notation) data-interchange Format
                    //           used for exchanging data btn a server and a web appplicatiton 
                    //           JSON files {key:Value} OR [value1, value2, value3]



                    //  JSON.stringify() => converts a js Object to a JSON String
                    //  JSON.parse() => converts a JSON String to a js Object
// const jsonperson = `{"Name": "Quani","age": "20","isEmployed": true,"hobbies": ["Rapper", "Riding", "Basketballer"]}`;
// const names = `["Quani", "Mike", "Job", "Vee"]`;
// const person = `[{"Name": "Quani","age": "20","isEmployed": true},
//                 {"Name": "Mike","age": "24","isEmployed": true},
//                 { "Name": "Job","age": "19","isEmployed": false},
//                 {"Name": "Vee","age": "18","isEmployed": true}]`;


// const jsonst = JSON.stringify(person)  
// const jsonst = JSON.parse(person)      
// const div = document.querySelector("div");
// div.textContent = jsonst

// console.log(jsonst);



// document.querySelector("div").textContent = person



// fetch("person.json")
//      .then(response => response.json())
//      .then(values =>  values.forEach(value => console.log(value.age)))
//      .catch((error) => console.error(error));



// function task1(){

//     return new Promise((resolve, reject) => {
//         setInterval(() => {
//             resolve("hello")
//         }, 1600);
//     })
// }

// function task2(){

//     return new Promise((resolve, reject) => {
//         setInterval(() => {
//             reject(" hi")
//         }, 200);
//     })
// }

// task1().then((value) => {document.querySelector("div").textContent += value; return task2()})
//         .then((value) => {document.querySelector('div').textContent += value; })
//         .catch((error) => console.error(error))


// fetch("person.json")
//                     .then(response => response.json())
//                     .then((value) => value.forEach(element => 
//                         document.querySelector("div").textContent = element)
//                     );

                            


                            // FETCH => Function used for making HTTP request to fetch resources.
                            //          (JSON STYLE DATA,  images, files)
                            //          simplifies asnychronous data fetching in javascript and data 
                            //          used for interacting with APIS to retrive and send date asnychronous over the web
                            //           fetch(URL, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

// .then(response => {

//     if(!response.ok){
//         throw new Error("could not find the page");
        
//     }
//     return response.json();
// })
// .then(data => console.log(data.height))
// .catch(error => console.error(error));


// pokoman()

// async function pokoman(){

//     try {

//         const display = document.getElementById("pokomaname").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${display}`)

//         if (!response.ok) {
//             throw new Error("could not find the name");
            
//         }
//         const data = await response.json();
//        const pokomansprite = data.sprites.front_default;
//        const imgelemnt = document.getElementById("pokomansprite")

//        imgelemnt.src = pokomansprite;
//        imgelemnt.style.display = "block"
//     } 
//     catch (error) {
//         console.error(error);
        
//     }
    
// }


// pokoman()

// async function pokoman() {
    
//     try {
        
//         const pokomaname = document.getElementById("pokomaname").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokomaname}`);

//         if (!response.ok) {
//             throw new Error("then name does'nt exist"); 
//         }
//         else{
//             const data = await response.json()
//             const pokomansprite = data.sprites.front_default;
//             const imgelement = document.getElementById("pokomansprite");

//             imgelement.src = pokomansprite;
//             imgelement.style.display = "block"
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }


// fetchdata()
// async function fetchdata() {
    
//     try {
//         const display = document.getElementById("pokoman").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${display}`)

//         if (!response.ok) {
//             throw new Error("could not find the resource");
//         }
//         else{
//             const data = await response.json();
//             const pokimg = data.sprites.front_default;
//             const imgelemnt = document.getElementById("img")

//             imgelemnt.src = pokimg;
//             imgelemnt.style.display = "block"
//         }

//     } catch (error) {
//         console.error(error);
        
//     }
// }


const weatherForm = document.querySelector(".weatherForm");
const cityiput = document.querySelector(".cityiput");
const card = document.querySelector(".card");
const apikey = "6d473f936a1bc94a9f7ed52cbfd0100d";

weatherForm.addEventListener("submit", async event =>{

    event.preventDefault();

    const city = cityiput.value;

    if (city) {
        try {
            
            const weatherdata = await getweatherdata(city)
            getweatherinfo(weatherdata);


        } catch (error) {
            console.error(error);
            displayerror(error)
        }
    } 
    else {
        displayerror("please enter the city");
    }
})

async function getweatherdata(city) {
    
    const apiurl = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiurl)

    if (!response.ok) {
        throw new Error("could not fetch weather data!");
        
    } else {
        return await response.json();
    }
}

function getweatherinfo(data) {
    setTimeout(() => {
        card.textContent = "";
        card.style.display = "none"
    }, 3000);
    
    const{name: city, 
        main: {temp, humidity}, 
        weather:[{description, id}]} = data
    
        card.textContent = "";
        card.style.display = "flex";


        const citydisplay = document.createElement("h1")
        const tempdisplay = document.createElement("p")
        const humiditydisplay = document.createElement("p")
        const descdisplay = document.createElement("p")
        const weatherEmoji = document.createElement("p")

        citydisplay.textContent = city;
        tempdisplay.textContent = `${(temp-273).toFixed(1)}°C`;
        humiditydisplay.textContent = `Humidity: ${humidity}%`;
        descdisplay.textContent = description;
        weatherEmoji.textContent = getweatheremoji(id);

        citydisplay.classList.add("citydisplay");
        tempdisplay.classList.add("tempdisplay");
        humiditydisplay.classList.add("humidity");
        descdisplay.classList.add("descdisplay");
        weatherEmoji.classList.add("weatherEmoji");

        card.appendChild(citydisplay);
        card.appendChild(tempdisplay);
        card.appendChild(humiditydisplay);
        card.appendChild(descdisplay);
        card.appendChild(weatherEmoji);

}
function getweatheremoji(weatherid){


    switch (true) {
        case weatherid >= 200 && weatherid < 300:
            return "⛈";
            break;

        case weatherid >= 300 && weatherid < 400:
            return "🌧";
            break;
        case weatherid >= 500 && weatherid < 600:
            return "🌧";
            break;
        case weatherid >= 600 && weatherid < 700:
            return "❄";
            break;
        case weatherid >= 700 && weatherid < 800:
            return "🌫️";
            break;
        case weatherid === 800:
            return "☀️";
            break;
        case weatherid >= 801 && weatherid < 810:
            return "☁️";
            break;
        default:
            return "❓";
    }

}
function displayerror(messege) {
    
    setTimeout(() => {
        card.textContent = "";
        card.style.display = "none"
    }, 1000);
    const errodisplay = document.createElement("p")
    errodisplay.textContent = messege
    errodisplay.style.height = "50px";
    errodisplay.classList.add("errodisplay")

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errodisplay)
}