const sumoWrestler = {
  imageSrc: './images/sumo-wrestler.png',
  title: 'Sumo Wrestler',
  model: 'Stable Diffussion XL 1.0',
  positivePrompt:
    'Portrait of a sumo wrestler, epic, dark background, japanese ink drawing style',
  negativePrompt:
    'Low quality, bad hands, bad eyes, cropped, missing fingers, extra digit',
}

const whiteHorse = {
  imageSrc: './images/white-horse.png',
  title: 'White Horse',
  model: 'Stable Diffussion XL 1.0',
  positivePrompt: 'A white horse galloping on the coast, anime style',
  negativePrompt:
    'Low quality, bad hands, bad eyes, cropped, missing fingers, extra digit',
}

const towardsTheBurningCastle = {
  imageSrc: './images/towards-the-burning-castle.png',
  title: 'Towards the Burning Castle',
  model: 'Stable Diffussion XL 1.0',
  positivePrompt: 'Knight toward a burning castle, dark cyberpunk style',
  negativePrompt:
    'Low quality, bad hands, bad eyes, cropped, missing fingers, extra digit',
}

const portraitOfARhinoceros = {
  imageSrc: './images/portrait-of-a-rhinoceros.png',
  title: 'Portrait of a Rhinoceros',
  model: 'Stable Diffussion XL 1.0',
  positivePrompt:
    'Portrait of a rhinoceros painted in Pointillist style, close-up, dark background',
}

const conversationAtTheBar = {
  imageSrc: './images/conversation-at-the-bar.png',
  title: 'Conversation at the Bar',
  model: 'Stable Diffussion XL 1.0',
  positivePrompt:
    'Two persons talking at a bar counter painted by George Grosz',
  negativePrompt: 'Two fert, two hand, two head, unaesthetic posture',
}

const eruptingVolcano = {
  imageSrc: './images/erupting-volcano.png',
  title: 'Erupting Volcano',
  model: 'Stable Diffussion XL 1.0',
  positivePrompt:
    'Erupting volcano, painted by Katsushika Hokusai, ukiyo-e style, forest',
  negativePrompt: 'Waves, wave',
}

const greenDemon = {
  imageSrc: './images/green-demon.png',
  title: 'Green Demon',
  model: 'Stable Diffussion XL 1.0',
  positivePrompt:
    'Green demon with metal armor, helmet, fighting pose, illustrated by Dave Gibbons, bold colors',
  negativePrompt: 'Two fert, two hand, two head, unaesthetic posture, weapons',
}

const desertAtNight = {
  imageSrc: './images/desert-at-night.png',
  title: 'Desert at Night',
  model: 'Stable Diffussion XL 1.0',
  positivePrompt:
    'Desert at night, painted by Joan Miro, dunes, oasis, moon, warm light',
  negativePrompt: 'Signature',
}

const aloneInTheDark = {
  imageSrc: './images/alone-in-the-dark.png',
  title: 'Alone in the Dark',
  model: 'Stable Diffussion XL 1.0',
  positivePrompt:
    'Alone in the dark, black and white, storm, lightning, fantasy',
}

const returningToTheTown = {
  imageSrc: './images/returning-to-the-town.png',
  title: 'Returning to the Town',
  model: 'Stable Diffussion XL 1.0',
  positivePrompt:
    'Peasant returning to a town, painted by Peter Paul Rubens, road, warm light',
  negativePrompt:
    'Two fert, two hand, two head, unaesthetic posture, basket, stick, signature, backpack, horse',
}

const phoenixBird = {
  imageSrc: './images/phoenix-bird.png',
  title: 'Phoenix bird',
  model: 'Stable Diffussion XL 1.0',
  positivePrompt:
    'Phoenix bird, magic the gathering style, epic, legend, aggressive, expressive, flames, dark background',
  negativePrompt: 'Two fert, two hand, two head, unaesthetic posture',
}

const donaldTrumpFighter = {
  imageSrc: './images/donald-trump-fighter.png',
  title: 'Donal Trump Fighter',
  model: 'Stable Diffussion XL 1.0',
  positivePrompt:
    'Portrait, Donald Trump as street fighter character, close up, super nintendo, choose your fighter, video game, expressive, suit, tie, dark background',
  negativePrompt: 'Two fert, two hand, two head, unaesthetic posture',
}

const images = [
  sumoWrestler,
  whiteHorse,
  towardsTheBurningCastle,
  portraitOfARhinoceros,
  conversationAtTheBar,
  eruptingVolcano,
  greenDemon,
  desertAtNight,
  aloneInTheDark,
  returningToTheTown,
  phoenixBird,
  donaldTrumpFighter,
]

const evenImages = []
const oddImages = []

images.forEach((image, index) => {
  index % 2 === 0 ? evenImages.push(image) : oddImages.push(image)
})

export { images, evenImages, oddImages }
