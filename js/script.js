const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log(`${this.name} is too tired to play!`);
      } else {
        console.log(`Yay! ${this.name} love to play!`);
        this.isTired += 1;
      }
    }
    };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "dog");
const francine = createPet("Francine", "turtle");

// console.log(sora, clover, baxter, cleo, francine);

// clover.sleep();
// baxter.play();

// console.log(clover, baxter);

clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];

//console.log(allPets);

const showPets = function(petArray) {
  
    pets.innerHTML = ""; 
    
    for (let pet of petArray) {
let status = "ready to play";

if (pet.isTired >= 7) {
  status = "sleepy";
} 
const li = document.createElement("li");
li.innerHTML = `<strong>${pet.name}</strong> is ${status}`;
pets.appendChild(li);
    }
};


statusButton.addEventListener("click", function () {
  showPets(allPets);
});

