import CopyTextButton from '../CopyTextButton/CopyTextButton'

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
}: Props) {
  return (
    <div className="imageCard">
      <div className="imageCard-imageWrapper">
        <img
          src={imageSrc}
          alt={title}
          className="imageCard-image"
          loading="lazy"
          width="800"
          height="800"
        />
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
