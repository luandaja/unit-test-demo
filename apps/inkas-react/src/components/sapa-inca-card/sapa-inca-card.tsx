import { SapaInca } from '@app/models';

/* eslint-disable-next-line */
export interface SapaIncaCardProps {
  inca: SapaInca;
}

export function SapaIncaCard(props: SapaIncaCardProps) {
  const { name, years, description, portrait_url } = props.inca;
  return (
    <article>
      <img src={portrait_url} alt="inka portrair" />
      <div>
        <b>{name}</b>
        <span>({years})</span>
      </div>
      <p>{description}</p>
    </article>
  );
}

export default SapaIncaCard;
