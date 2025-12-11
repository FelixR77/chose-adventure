// Run with:  node Jquery-practice.js 
// Requires: npm install prompt-sync

const prompt = require("prompt-sync")({ sigint: true });


function $(message) {
  console.log(message);
}

function $input(question) {
  return prompt(question);
}

function $ready(fn) {
  fn();
}

$ready(function () {
  // --- Begining of game setup
  const username = $input("Enter your name: ");
  $(`Your name is ${username}. Your journey begins!`);

  let heroHealth = 100;
  let heroAge = 25;
  let heroPath = 4;
  const heroAttack = 10;
  const heroDefense = 5;

  let monsterHealth = 80;
  const monsterAttack = 8;
  const monsterDefense = 3;

  // --- fight functons
  function calculateHeroDamage(heroDefense, monsterAttack) {
    const heroDamage = monsterAttack - heroDefense;
    return heroDamage > 0 ? heroDamage : 0;
  }

  function calculateMonsterDamage(monsterDefense, heroAttack) {
    const monsterDamage = heroAttack - monsterDefense;
    return monsterDamage > 0 ? monsterDamage : 0;
  }

  // --- steps to the monster
  while (heroPath < 10) {
    $(
      "You still have more steps to take on your journey to face the monster."
    );

    const steps = parseInt($input("How many steps do you want to take? "), 10);

    if (Number.isNaN(steps) || steps <= 0) {
      $("Please enter a valid positive number.\n");
      continue;
    }

    heroPath += steps;
    $(`You have taken ${steps} steps and are now at position ${heroPath}.\n`);
  }

  $(
    `You have reached the end of the path and encountered a monster with ${monsterHealth} health!\n`
  );

  // --- fight or flight
  let battleChoice = $input("Do you want to battle the monster? (yes/no): ")
    .toLowerCase()
    .trim();

  if (battleChoice === "yes" || battleChoice === "y") {
    battle();
  } else {
    $("You did not choose to battle the monster. Game over.");
  }

  // --- fight
  function battle() {
    $("\nThe battle begins!");

    while (heroHealth > 0 && monsterHealth > 0) {
      // Hero attacks
      const dmgToMonster = calculateMonsterDamage(
        monsterDefense,
        heroAttack
      );
      monsterHealth -= dmgToMonster;

      $(
        `You hit the monster for ${dmgToMonster} damage. Monster health is now ${monsterHealth}.`
      );

      if (monsterHealth <= 0) {
        $("The hero defeated the monster! You win!");
        return;
      }

      // monster attacks
      const dmgToHero = calculateHeroDamage(heroDefense, monsterAttack);
      heroHealth -= dmgToHero;

      $(
        `The monster hits you for ${dmgToHero} damage. Your health is now ${heroHealth}.`
      );

      if (heroHealth <= 0) {
        $("The monster defeated you. Game over.");
        return;
      }
    }
  }
});
