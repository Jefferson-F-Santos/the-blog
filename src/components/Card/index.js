// Importação do estilo
import './style.scss';

export const Card = ({objeto}) => {
    const { image, data, title, description } = objeto;

    return (
        <div className='card'>
            <div className='contentImage'>
                <img src={image} alt={title} />
            </div>
            <div className='contentText'>
                <span>{data}</span>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}