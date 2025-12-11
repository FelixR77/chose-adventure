// Run with: node game.js
// Make sure you installed prompt-sync first: npm install prompt-sync

const prompt = require("prompt-sync")({ sigint: true });

// --- Hero & Monster Setup ---
const username = prompt("Enter your name: ");
console.log(`Your name is ${username}. Your journey begins!\n`);

let heroHealth = 100;
let heroAge = 25;
let heroPath = 4;
const heroAttack = 10;
const heroDefense = 5;

let monsterHealth = 80;
const monsterAttack = 8;
const monsterDefense = 3;

// --- Damage Functions ---
function calculateHeroDamage(heroDefense, monsterAttack) {
  // damage the HERO takes from the monster
  const heroDamage = monsterAttack - heroDefense;
  // prevent negative damage
  return heroDamage > 0 ? heroDamage : 0;
}

function calculateMonsterDamage(monsterDefense, heroAttack) {
  // damage the MONSTER takes from the hero
  const monsterDamage = heroAttack - monsterDefense;
  // prevent negative damage
  return monsterDamage > 0 ? monsterDamage : 0;
}

// --- Journey to the Monster ---
while (heroPath < 10) {
  console.log(
    "You still have more steps to take on your journey to face the monster."
  );
  const stepsInput = prompt("How many steps do you want to take? ");

  const steps = parseInt(stepsInput, 10);

  if (Number.isNaN(steps) || steps <= 0) {
    console.log("Please enter a valid positive number.\n");
    continue;
  }

  heroPath += steps;
  console.log(
    `You have taken ${steps} steps and are now at position ${heroPath}.\n`
  );
}

console.log(
  `You have reached the end of the path and encountered a monster with ${monsterHealth} health!\n`
);

// --- Battle Choice ---
let battleChoice = prompt(
  "Do you want to battle the monster? (yes/no): "
).toLowerCase();

if (battleChoice === "yes" || battleChoice === "y") {
  battle();
} else {
  console.log("You did not choose to battle the monster. Game over.");
}

// --- Battle Function ---
function battle() {
  console.log("\nThe battle begins!");

  while (heroHealth > 0 && monsterHealth > 0) {
    // Hero attacks first
    const damageToMonster = calculateMonsterDamage(
      monsterDefense,
      heroAttack
    );
    monsterHealth -= damageToMonster;
    console.log(
      `You hit the monster for ${damageToMonster} damage. Monster health is now ${monsterHealth}.`
    );

    if (monsterHealth <= 0) {
      console.log("The hero defeated the monster! You win!");
      return;
    }

    // Monster attacks back
    const damageToHero = calculateHeroDamage(heroDefense, monsterAttack);
    heroHealth -= damageToHero;
    console.log(
      `The monster hits you for ${damageToHero} damage. Your health is now ${heroHealth}.`
    );

    if (heroHealth <= 0) {
      console.log("The monster defeated you. Game over.");
      return;
    }

    console.log(""); // blank line for readability
  }
}
