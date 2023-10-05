import './style.scss';

export const SimplePost = ({objeto}) => {
    const { data, title, description } = objeto;

    return (
        <div className='simplePost'>
            <span>{ data }</span>
            <h3>{ title }</h3>
            <p>{ description }</p>
        </div>
    );
}