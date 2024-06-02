console.log("I'm running")

let wArr=["img-1.jpg","img-2.webp","img-4.jpg","img-3.webp"];
let kArr=["img-5.jpg","img-6.webp","img-7.jpg","img-8.jpg"];
let mArr=["img-9.webp","img-10.jpg","img-11.webp","img-12.webp"];
let fArr=["img-13.jpg","img-14.webp","img-15.webp","img-16.jpg"];
let description=["Ethnic Gown & Dupatta","Midi Dress","Printed Dress","Floral Midi Dress","Kaira Gown","Sherwani set","Skirt-Top set","Jeans-Tshirt Combo",
    "Striped T-Shirt","Men Short Kurta","Embroidered Nehru Jacket","Formal Blazer","Sports Shoes","Mens Formal Footwear","High Heel Sandals","Kids Sandals"
]
let cnt=0;
function card(img,collection,cnt){
    let html=`<div class="shadow-2xl w-auto m-3 py-4 hover:bg-b4">
    <img src="assets/${img}" class="rounded-t-2xl h-48 mt-2 m-auto">
     <div class="ml-2">${description[cnt]}</div>
     <div class="flex space-x-2 m-2">
     <div class="w-6 h-6 rounded-full bg-black hover:border-2"></div>
     <div class="w-6 h-6 rounded-full bg-white hover:border-2"></div>
     <div class="w-6 h-6 rounded-full bg-red-400 hover:border-2"></div>
     <div class="w-6 h-6 rounded-full bg-blue-400 hover:border-2"></div>
     <div class="w-6 h-6 rounded-full bg-green-600 hover:border-2"></div>
     </div>
     <div class="flex">  
    <button class="p-0.5 flex bg-b1 rounded-full w-28 m-1 justify-center text-white font-semibold"><img src="assets/cart.svg" class="ml-2 mt-2">Add to Cart</button>
    <button class="p-0.5 flex bg-b1 rounded-full w-28 m-1 justify-center text-white font-semibold"><img src="assets/arrow.svg" class="mt-2">View Details</button>
     </div>
    </div>`

    document.getElementById(collection).innerHTML=document.getElementById(collection).innerHTML+html;
}
for (const el of wArr){
    card(el,"WCollection",cnt);
    cnt++;
}
for (const el of kArr){
    card(el,"KCollection",cnt);
    cnt++;
}
for (const el of mArr){
    card(el,"MCollection",cnt);
    cnt++;
}
for (const el of fArr){
    card(el,"FCollection",cnt);
    cnt++;
}
