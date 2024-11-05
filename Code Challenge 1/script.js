//breakdown to simple two steps 

//step 1 - we can get one letter from name using charAt function 
console.log("Jeewantha Dilshan".charAt());

// step 2 - using Math.floor we can get random number 
console.log(Math.floor(Math.random()*17+1));

// now we combine these two together 

console.log("Jeewantha DIlshan".charAt(Math.floor(Math.random() * 17 )));

console.log("Jeewantha DIlshan".charAt(Math.floor(Math.random() * 17 )));

console.log("Jeewantha DIlshan".charAt(Math.floor(Math.random() * 17 )));

console.log("Jeewantha DIlshan".charAt(Math.floor(Math.random() * 17 )));

// lets make this work for Any names

const anyName = "Jeewantha Dilshan";


console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));