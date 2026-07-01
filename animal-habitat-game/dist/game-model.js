const ANIMALS = [
  { name: 'Lion', habitat: 'Savanna', sound: 'lion-roar', funFact: 'Lions can rest for up to 20 hours a day.', background: 'savanna', emoji: '🦁' },
  { name: 'Penguin', habitat: 'Arctic', sound: 'penguin-call', funFact: 'Penguins huddle together to stay warm.', background: 'arctic', emoji: '🐧' },
  { name: 'Dolphin', habitat: 'Ocean', sound: 'dolphin-click', funFact: 'Dolphins use clicks and whistles to communicate.', background: 'ocean', emoji: '🐬' },
  { name: 'Camel', habitat: 'Desert', sound: 'camel-grunt', funFact: 'Camels can go for days without drinking.', background: 'desert', emoji: '🐫' },
  { name: 'Frog', habitat: 'Wetlands', sound: 'frog-croak', funFact: 'Frogs help keep insect populations balanced.', background: 'wetlands', emoji: '🐸' },
  { name: 'Monkey', habitat: 'Rainforest', sound: 'monkey-chatter', funFact: 'Monkeys often use their tails for balance.', background: 'rainforest', emoji: '🐒' },
  { name: 'Koala', habitat: 'Rainforest', sound: 'koala-hum', funFact: 'Koalas sleep for much of the day and stay mostly in eucalyptus trees.', background: 'rainforest', emoji: '🐨' },
  { name: 'Polar Bear', habitat: 'Arctic', sound: 'bear-growl', funFact: 'Polar bears have thick fur and a layer of blubber to stay warm.', background: 'arctic', emoji: '🐻‍❄️' },
  { name: 'Octopus', habitat: 'Ocean', sound: 'octopus-squirt', funFact: 'Octopuses can change color to blend in with their surroundings.', background: 'ocean', emoji: '🐙' },
  { name: 'Rabbit', habitat: 'Grassland', sound: 'rabbit-squeak', funFact: 'Rabbits can hop very quickly to escape danger.', background: 'grassland', emoji: '🐰' },
  { name: 'Owl', habitat: 'Forest', sound: 'owl-hoo', funFact: 'Owls can turn their heads much farther than people can.', background: 'forest', emoji: '🦉' },
  { name: 'Hippo', habitat: 'River', sound: 'hippo-grunt', funFact: 'Hippos spend much of the day in water to stay cool.', background: 'river', emoji: '🦛' }
];

const HABITATS = [
  'Savanna',
  'Rainforest',
  'Arctic',
  'Desert',
  'Ocean',
  'River',
  'Lake',
  'Mountain',
  'Wetlands',
  'Grassland',
  'Beach',
  'Coral Reef',
  'Mangrove',
  'Pine Forest',
  'Cave',
  'Jungle',
  'Farm',
  'Backyard',
  'Freshwater',
  'Swamp'
];

function createLevel({ animal, habitat, distractors, funFact, sound, background, emoji }) {
  return {
    animal,
    correctHabitat: habitat,
    habitats: [habitat, ...distractors],
    funFact,
    sound,
    background,
    emoji
  };
}

function createGameModel() {
  const levels = ANIMALS.map((animal) => {
    const distractors = HABITATS.filter((entry) => entry !== animal.habitat).slice(0, 2);
    return createLevel({
      animal: animal.name,
      habitat: animal.habitat,
      distractors,
      funFact: animal.funFact,
      sound: animal.sound,
      background: animal.background,
      emoji: animal.emoji
    });
  });

  return {
    levels,
    currentLevelIndex: 0,
    stats: {
      stars: 0,
      coins: 0,
      badges: [],
      unlockedAnimals: ['Lion']
    }
  };
}

function checkAnswer({ selectedHabitat, correctHabitat }) {
  if (selectedHabitat === correctHabitat) {
    return {
      correct: true,
      message: 'Great Job!'
    };
  }

  return {
    correct: false,
    message: 'Try Again!'
  };
}

module.exports = {
  ANIMALS,
  HABITATS,
  createLevel,
  createGameModel,
  checkAnswer
};
