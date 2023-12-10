import { useMediaQuery } from 'react-responsive'

import Header from '../../components/Header/Header'
import MainTitle from '../../components/MainTitle/MainTitle'
import Subtitle from '../../components/Subtitle/Subtitle'
import Authorship from '../../components/Authorship/Authorship'
import Main from '../../components/Main/Main'
import MainColumn from '../../components/MainColumn/MainColumn'
import ImageCard from '../../components/ImageCard/ImageCard'

import '../../assets/stylesheets/styles.scss'

import { images, evenImages, oddImages } from '../../data/images'

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 650px)' })

  return (
    <>
      <Header>
        <MainTitle>
          Stable Diffusion.
          <br />
          Image Synthesis
        </MainTitle>
        <Subtitle text="Collection of images generated through Stable Diffusion" />
        <Authorship
          author="Juan Antonio Ledesma"
          link="https://github.com/juan-antonio-ledesma/stable-diffusion-image-synthesis"
        />
      </Header>
      <Main>
        {isMobile ? (
          <>
            {images.map(
              ({ imageSrc, title, model, positivePrompt, negativePrompt }) => (
                <ImageCard
                  key={title}
                  imageSrc={imageSrc}
                  title={title}
                  model={model}
                  positivePrompt={positivePrompt}
                  negativePrompt={negativePrompt}
                />
              ),
            )}
          </>
        ) : (
          <>
            <MainColumn>
              {evenImages.map(
                ({
                  imageSrc,
                  title,
                  model,
                  positivePrompt,
                  negativePrompt,
                }) => (
                  <ImageCard
                    key={title}
                    imageSrc={imageSrc}
                    title={title}
                    model={model}
                    positivePrompt={positivePrompt}
                    negativePrompt={negativePrompt}
                  />
                ),
              )}
            </MainColumn>
            <MainColumn>
              {oddImages.map(
                ({
                  imageSrc,
                  title,
                  model,
                  positivePrompt,
                  negativePrompt,
                }) => (
                  <ImageCard
                    key={title}
                    imageSrc={imageSrc}
                    title={title}
                    model={model}
                    positivePrompt={positivePrompt}
                    negativePrompt={negativePrompt}
                  />
                ),
              )}
            </MainColumn>
          </>
        )}
      </Main>
    </>
  )
}
