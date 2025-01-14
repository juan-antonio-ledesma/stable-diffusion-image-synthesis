import CopyTextButton from './CopyTextButton'

type Props = {
  imageSrc: string
  title: string
  model: string
  positivePrompt: string
  negativePrompt?: string
}

export default function ImageCard({
  imageSrc,
  title,
  model,
  positivePrompt,
  negativePrompt,
}: Readonly<Props>) {
  return (
    <div className="imageCard">
      <div className="imageCard-imageWrapper">
        <picture>
          <source srcSet={`${imageSrc}.avif`} type="image/avif" />
          <source srcSet={`${imageSrc}.jpg`} type="image/jpeg" />
          <img
            src={`${imageSrc}.jpg`}
            alt={title}
            className="imageCard-image"
            loading="lazy"
            width="800"
            height="800"
          />
        </picture>
      </div>
      <div className="imageCard-content">
        <h2 className="imageCard-title">{title}</h2>
        <h3 className="imageCard-subitle">Model</h3>
        <p className="imageCard-paragraph">{model}</p>
        <h3 className="imageCard-subitle">Positive Prompt</h3>
        <p className="imageCard-paragraph is-copyText">
          {positivePrompt}
          <CopyTextButton text={positivePrompt} />
        </p>
        {negativePrompt ? (
          <>
            <h3 className="imageCard-subitle">Negative Prompt</h3>
            <p className="imageCard-paragraph is-copyText">
              {negativePrompt}
              <CopyTextButton text={negativePrompt} />
            </p>
          </>
        ) : null}
      </div>
    </div>
  )
}
