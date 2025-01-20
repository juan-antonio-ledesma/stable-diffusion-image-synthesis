import { useMediaQuery } from 'react-responsive'

import Header from '@components/Header'
import Main from '@components/Main'
import MainColumn from '@components/MainColumn'
import ImageCard from '@components/ImageCard'

import { images, evenImages, oddImages } from '@data/images'

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 650px)' })

  return (
    <>
      <Header />
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
