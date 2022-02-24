let div2image = ["https://www.reliancedigital.in/medias/DIS-Samsung-Galaxy-M52-Carousel-Banner-12-01-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDI5NzN8aW1hZ2UvanBlZ3xpbWFnZXMvaGQwL2gxMi85NzU1NzU0ODU2NDc4LmpwZ3xmMDlhNTU5MGM1YTY1NGRkNThmNGQ0YzEzYzdmYmUwZjgzZmJiNjAzYTIyZWE3NjU2Njg2NDFlMDEwYTEzZDg0",
"https://www.reliancedigital.in/medias/Toshiba-Smart-TV-CLP-Banner-13-01-2022.jpg?context=bWFzdGVyfGltYWdlc3wyMjExMDd8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ3L2hhNi85NzU1NzU0OTg3NTUwLmpwZ3xiMzk0MGUzNzkxNGM3MzhlMjY4NDJkZWYzYzAyNDBjY2VlYTVkNzNhZjBjOWEyNDM1Zjc3Nzk4ZTFiYjg0ZjJm",
"https://www.reliancedigital.in/medias/DIS-Large-Appliances-Carousel-Banner-12-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w5NDAxMXxpbWFnZS9qcGVnfGltYWdlcy9oODQvaGZmLzk3NTU3NTU2NDI5MTAuanBnfGYwNDkyMWI3YWZmOWQ3YmVlYmI5NGUyYjA2NWU1ZjIxZjBhNzFjM2I2ODFhYmJiMTlhZDc4OTUzM2QxNmM3MWY",
"https://www.reliancedigital.in/medias/DIS-Laptops-Carousel-Banner-12-01-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMjU1MDh8aW1hZ2UvanBlZ3xpbWFnZXMvaGFhL2hmOS85NzU1ODUyNzAxNzI2LmpwZ3xmZWMwYjQxYjBkMDVjMWUxMWE3YTUzMjBiOWFhZTgyMTNmZmQ4NDA3ODhjYmUyYTc1NTg0NDM5NzM1NDdiNGZl",
"https://www.reliancedigital.in/medias/DIS-Audio-Accessories-Carousel-Banner-12-01-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDU3OTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDFkL2gxNi85NzU1NzU1MjQ5Njk0LmpwZ3xjZWMwYzc1MGY4NTllOWRlN2MzNjUxN2NlZTc1YzJhN2QzYzMyMTZmY2M1YmEyZjA4ZmM3ZjExNGY1OTRlYjhl",
"https://www.reliancedigital.in/medias/DIS-SDA-Carousel-Banner-12-01-2022-D.jpg?context=bWFzdGVyfGltYWdlc3wxNDg4Nzh8aW1hZ2UvanBlZ3xpbWFnZXMvaDgwL2gwZC85NzU2ODg3Mzg0MDk0LmpwZ3xiZTllZGFiYjYyODUwMzU5NmEzZmZiNDQ1NzY2ZTVmY2Y5NTM4YWVhNWE4MDRlNzhhZWNiMDI2Njk1ZGRiODli",
"https://www.reliancedigital.in/medias/DIS-Tablets-Carousel-Banner-12-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w5NzU1MXxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDIxLzk3NTU4NTI1NzA2NTQuanBnfDc3ZGU5MGUxZmExZmQzMWZmZGQzYTUxODhhYTc5YmNlZTMyODUwNWY4MmM2MjBkZjE4ZDQ5ODRiMGI3OGQ1MWI",
"https://www.reliancedigital.in/medias/JioPhone-Next-Carousel-Banner-14-01-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMzUyNTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGJlL2gwNS85NzU1NDQ1MTAwNTc0LmpwZ3xkYTFlMDQ5NmQ2MjllNDZkNjBlZjE4MWRhYzJjOTk4ZjgzZDcwYTZmY2ExNGFkNDQyZTQ0ZDA0NzA3NmVmNjRk",
"https://www.reliancedigital.in/medias/resQ-DIS-002.jpg?context=bWFzdGVyfGltYWdlc3w4MjU1MnxpbWFnZS9qcGVnfGltYWdlcy9oZTUvaGFhLzk3NTcxNjI0Mzg2ODYuanBnfGViZDRhZmI2ZTE2OTUwMmM1ZDdmYjczOTA4NGI2Zjc3NGNlMDNhYThhMjdlNTNmMDI1ZTRjOTQ0NDFjZjYzMWE"];

let div2img = document.getElementById("div2img");
div2img.src = div2image[0];
let div2i = 1;
setInterval(function(){
    if(div2i == div2image.length){
        div2i = 0;
    }
    div2img.src = div2image[div2i];
    div2i++;
},1000);

let div7image = ["https://www.reliancedigital.in/medias/iPhone-13-NPI-Banner-03-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w1NjAyNXxpbWFnZS9qcGVnfGltYWdlcy9oMGYvaDBhLzk3NDkxNjIzMjgwOTQuanBnfGFjOGY2NTRmY2Y1Y2RkZTJhNTM2YThjZmU1ZTdmODhiYzIzNjBkY2I0ZGI0OTUxZDY3ZDk4ZjQ5NzQwOGVmNzk",
"https://www.reliancedigital.in/medias/Apple-Watch-Series-7-D-NPI.jpg?context=bWFzdGVyfGltYWdlc3wxMDc1MDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDJkL2hkNS85NzUwMzAzMDE0OTQyLmpwZ3xiZjIxZDMxYTY0NDE3YTYxYmYxYTlmMDQ1NjkzNDI1YmVlNzFmNzVjMjY1M2M5ZDA1Mjk3YTRiNDM4ZmFmMWNi",
"https://www.reliancedigital.in/medias/AirPods-D-NPI.jpg?context=bWFzdGVyfGltYWdlc3wxMDQ1NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2hkNi85NzUwMzI3MDk5NDIyLmpwZ3w0ZGVmNzAyZWJiN2Y5M2ExNGE4OTNjODJmZDdiNWI4MjdhMzgwYWE1NDFhNWUyMWRjZjhiMTkzYTlkMmNjNGFh",
"https://www.reliancedigital.in/medias/HomePod-D-NPI.jpg?context=bWFzdGVyfGltYWdlc3wxMzkxODR8aW1hZ2UvanBlZ3xpbWFnZXMvaDkyL2g3ZS85NzUwMzI3MjMwNDk0LmpwZ3xlMDU3MGUxMzNmZjMyYTM2MDc2ZTYxOGNmYWYyNTM4ZTc3ZTBlMWQ2ZDY0MDc4OWQ1MTlmNTY1N2M3ZGU2N2Y5",
"https://www.reliancedigital.in/medias/MacBook-Pro-D-NPI.jpg?context=bWFzdGVyfGltYWdlc3wxMTEzNjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDgzL2hkMS85NzUxNjgwNTgxNjYyLmpwZ3xiOTRjYzIzMTU4MmFjZDJmZjcwMjdkNGJjNGQwOThiOGM4NWFjZThmNmQ1MjZlMjcxMDc2YWFkMThiOGFkMWJj",
"https://www.reliancedigital.in/medias/2-ONIDA-FIRE-TV-Banner-Desktop-NPI.jpg?context=bWFzdGVyfGltYWdlc3wxNTEyMjh8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2g3NC85NzU1MzcwMDYxODU0LmpwZ3w0YzY2OTI5ZjEyNzgyOGY2MmJjMTg1ZTFmNTBiZjJmMTlkZDE2MWY0ODRhYzU4M2U1YWIwNjFjNzI5ZDE4MDQ3",
"https://www.reliancedigital.in/medias/Tab-Yoga11-NPI-Banner-13-01-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDkwMjN8aW1hZ2UvanBlZ3xpbWFnZXMvaDgxL2hmYS85NzU2MDU5MzY5NTAyLmpwZ3wyMjM4ZWRkMzc3Mzk2MjYzNmU4NzJkZTEzNGM3MWIyYjZlOWM3MmEzYjI2NTQ5OWYyMTlkZWIyZGE3NzQxMWIy",
"https://www.reliancedigital.in/medias/Vivo-V23-Pro-5G-NPI-Banner-11-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w2ODAwN3xpbWFnZS9qcGVnfGltYWdlcy9oZjkvaDhiLzk3NTU0NDUyMzE2NDYuanBnfGQ3Mzg3ZGVkMDIxNDdmOWJiZTQzZjdhZmI5YTViMDNmMmFkY2MxY2IxOGJhM2RiM2EzOWZlYzM2NmNlNzQzMzc",
"https://www.reliancedigital.in/medias/Samsung-Galaxy-Tab-A8-Desktop.jpg-NPI.jpg?context=bWFzdGVyfGltYWdlc3wxMzE4NTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDQwL2hiZi85NzU3MTQ5MjMzMTgyLmpwZ3wwY2IyZDNjNTRiZGJjOThhNDIyN2NhMGZhMzZmZTkwMGMyMWZiMzYxNTczNWRmM2FjYjFjYThlZDE0ODhkMDlk"];


let div7img = document.getElementById("div7img");
div7img.src = div7image[0];
let div7i = 1;
setInterval(function(){
    if(div7i == div2image.length){
        div7i = 0;
    }
    div7img.src = div7image[div7i];
    div7i++;
},1000);

