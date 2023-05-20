let meter = document.getElementById("m");
let kilometer = document.getElementById("km");
let centimeter = document.getElementById("cm");
let milimeter = document.getElementById("mm");
let celcius = document.getElementById("cls");
let kelvin = document.getElementById("kl");
let fahrenheit = document.getElementById("fh");
let gram = document.getElementById("gm");
let kilogram = document.getElementById("kgm");
let miligram = document.getElementById("mgm");
let hours = document.getElementById("hr");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");
let miliseconds = document.getElementById("ms");

let temp2 = document.getElementById("temp");
let len2 = document.getElementById("length");
let weight2 = document.getElementById("weight");
let time2 = document.getElementById("time");

len2.style.backgroundColor = "gray";

meter.addEventListener('input', function () {
    let mtr = this.value;
    kilometer.value = mtr*0.001;
    centimeter.value = mtr*100;
    milimeter.value = mtr*1000;
})

kilometer.addEventListener('input', function () {
    let kmtr = this.value;
    meter.value = kmtr*1000;
    centimeter.value = kmtr*100000;
    milimeter.value = kmtr*1000000;
})

centimeter.addEventListener('input', function () {
    let cmtr = this.value;
    meter.value = cmtr*0.01;
    kilometer.value = cmtr*0.00001;
    milimeter.value = cmtr*10;
})

milimeter.addEventListener('input', function () {
    let mmtr = this.value;
    meter.value = mmtr*0.001;
    kilometer.value = mmtr*0.000001;
    centimeter.value = mmtr*0.1;
})

celcius.addEventListener('input',function(){
    let cel = this.value;
    kelvin.value = cel*274.15;
    fahrenheit.value = cel*33.8;
})

kelvin.addEventListener('input',function(){
    let kel = this.value;
    celcius.value = kel*(-272.15);
    fahrenheit.value = kel*(-457.87);
})

fahrenheit.addEventListener('input',function(){
    let fhn = this.value;
    kelvin.value = fhn*255.9277;
    celcius.value = fhn*(-17.222);
})

gram.addEventListener('input',function(){
    let gm = this.value;
    kilogram.value = gm*0.001;
    miligram.value = gm*1000;
})

kilogram.addEventListener('input',function(){
    let kgm = this.value;
    gram.value = kgm*1000;
    miligram.value = kgm*1000000;
})

miligram.addEventListener('input',function(){
    let mgm = this.value;
    gram.value = mgm*0.001;
    kilogram.value = mgm*0.000001;
})

hours.addEventListener('input',function(){
    let hrs = this.value;
    minutes.value = hrs*60;
    seconds.value = hrs*3600;
    miliseconds.value = hrs*3600000;
})

minutes.addEventListener('input',function(){
    let mins = this.value;
    hours.value = mins*0.01667;
    seconds.value = mins*60;
    miliseconds.value = mins*60000;
})

seconds.addEventListener('input',function(){
    let scs = this.value;
    minutes.value = scs*0.0166666667;
    hours.value = scs*0.0002777778;
    miliseconds.value = scs*1000;
})

miliseconds.addEventListener('input',function(){
    let msc = this.value;
    minutes.value = msc*0.001;
    seconds.value = msc*0.06;
    hours.value = msc*0.0000166667;
})

function reset_length() {
    meter.value = 0;
    kilometer.value = 0;
    centimeter.value = 0;
    milimeter.value = 0;
}

function reset_temp() {
    celcius.value = 0;
    kelvin.value = 0;
    fahrenheit.value = 0;
}

function reset_weight() {
    gram.value = 0;
    kilogram.value = 0;
    miligram.value = 0;
}

function reset_time() {
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    miliseconds.value = 0;
}

let r = document.getElementById("temperature1");
let s = document.getElementById("length1");
let t = document.getElementById("weight1");
let u = document.getElementById("time1");

function temp1(){

    if(r.style.display = "none"){
        r.style.display = "flex";
        temp2.style.backgroundColor = "gray";
        weight2.style.backgroundColor = "white";
        len2.style.backgroundColor = "white";
        time2.style.backgroundColor = "white";
        s.style.display = "none";
        t.style.display = "none";
        u.style.display = "none";
    }
}

function weight1(){

    if(t.style.display = "none"){
        t.style.display = "flex"
        weight2.style.backgroundColor = "gray";
        temp2.style.backgroundColor = "white";
        len2.style.backgroundColor = "white";
        time2.style.backgroundColor = "white";
        r.style.display = "none";
        s.style.display = "none";
        u.style.display = "none";
    }
}

function time1(){

    if(u.style.display = "none"){
        u.style.display = "flex"
        time2.style.backgroundColor = "gray";
        temp2.style.backgroundColor = "white";
        len2.style.backgroundColor = "white";
        weight2.style.backgroundColor = "white";
        r.style.display = "none";
        s.style.display = "none";
        t.style.display = "none";
    }
}

function len1(){

    if(s.style.display = "none"){
        s.style.display = "flex";
        len2.style.backgroundColor = "gray";
        temp2.style.backgroundColor = "white";
        weight2.style.backgroundColor = "white";
        time2.style.backgroundColor = "white";
        u.style.display = "none";
        r.style.display = "none";
        t.style.display = "none";
    }
   
}