const imagesUrlRoot = '/images/'

const images: Array<{
  imageSrc: string
  title: string
  model: string
  positivePrompt: string
  negativePrompt?: string
}> = [
  {
    imageSrc: `${imagesUrlRoot}sumo-wrestler`,
    title: 'Sumo Wrestler',
    model: 'Stable Diffussion XL 1.0',
    positivePrompt:
      'Portrait of a sumo wrestler, epic, dark background, japanese ink drawing style',
    negativePrompt:
      'Low quality, bad hands, bad eyes, cropped, missing fingers, extra digit',
  },
  {
    imageSrc: `${imagesUrlRoot}white-horse`,
    title: 'White Horse',
    model: 'Stable Diffussion XL 1.0',
    positivePrompt: 'A white horse galloping on the coast, anime style',
    negativePrompt:
      'Low quality, bad hands, bad eyes, cropped, missing fingers, extra digit',
  },
  {
    imageSrc: `${imagesUrlRoot}towards-the-burning-castle`,
    title: 'Towards the Burning Castle',
    model: 'Stable Diffussion XL 1.0',
    positivePrompt: 'Knight toward a burning castle, dark cyberpunk style',
    negativePrompt:
      'Low quality, bad hands, bad eyes, cropped, missing fingers, extra digit',
  },
  {
    imageSrc: `${imagesUrlRoot}portrait-of-a-rhinoceros`,
    title: 'Portrait of a Rhinoceros',
    model: 'Stable Diffussion XL 1.0',
    positivePrompt:
      'Portrait of a rhinoceros painted in Pointillist style, close-up, dark background',
  },
  {
    imageSrc: `${imagesUrlRoot}conversation-at-the-bar`,
    title: 'Conversation at the Bar',
    model: 'Stable Diffussion XL 1.0',
    positivePrompt:
      'Two persons talking at a bar counter painted by George Grosz',
    negativePrompt: 'Two fert, two hand, two head, unaesthetic posture',
  },
  {
    imageSrc: `${imagesUrlRoot}erupting-volcano`,
    title: 'Erupting Volcano',
    model: 'Stable Diffussion XL 1.0',
    positivePrompt:
      'Erupting volcano, painted by Katsushika Hokusai, ukiyo-e style, forest',
    negativePrompt: 'Waves, wave',
  },
  {
    imageSrc: `${imagesUrlRoot}green-demon`,
    title: 'Green Demon',
    model: 'Stable Diffussion XL 1.0',
    positivePrompt:
      'Green demon with metal armor, helmet, fighting pose, illustrated by Dave Gibbons, bold colors',
    negativePrompt:
      'Two fert, two hand, two head, unaesthetic posture, weapons',
  },
  {
    imageSrc: `${imagesUrlRoot}desert-at-night`,
    title: 'Desert at Night',
    model: 'Stable Diffussion XL 1.0',
    positivePrompt:
      'Desert at night, painted by Joan Miro, dunes, oasis, moon, warm light',
    negativePrompt: 'Signature',
  },
  {
    imageSrc: `${imagesUrlRoot}alone-in-the-dark`,
    title: 'Alone in the Dark',
    model: 'Stable Diffussion XL 1.0',
    positivePrompt:
      'Alone in the dark, black and white, storm, lightning, fantasy',
  },
  {
    imageSrc: `${imagesUrlRoot}returning-to-the-town`,
    title: 'Returning to the Town',
    model: 'Stable Diffussion XL 1.0',
    positivePrompt:
      'Peasant returning to a town, painted by Peter Paul Rubens, road, warm light',
    negativePrompt:
      'Two fert, two hand, two head, unaesthetic posture, basket, stick, signature, backpack, horse',
  },
  {
    imageSrc: `${imagesUrlRoot}phoenix-bird`,
    title: 'Phoenix bird',
    model: 'Stable Diffussion XL 1.0',
    positivePrompt:
      'Phoenix bird, magic the gathering style, epic, legend, aggressive, expressive, flames, dark background',
    negativePrompt: 'Two fert, two hand, two head, unaesthetic posture',
  },
  {
    imageSrc: `${imagesUrlRoot}donald-trump-fighter`,
    title: 'Donal Trump Fighter',
    model: 'Stable Diffussion XL 1.0',
    positivePrompt:
      'Portrait, Donald Trump as street fighter character, close up, super nintendo, choose your fighter, video game, expressive, suit, tie, dark background',
    negativePrompt: 'Two fert, two hand, two head, unaesthetic posture',
  },
]

const evenImages = []
const oddImages = []

images.forEach((image, index) => {
  index % 2 === 0 ? evenImages.push(image) : oddImages.push(image)
})

export { images, evenImages, oddImages }
