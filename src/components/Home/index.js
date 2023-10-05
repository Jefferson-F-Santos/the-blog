// Importação de imagens
import imageHome from '../../assets/images/home.png';
import arrowRight from '../../assets/icons/arrowRight.svg';

// Importação do arquivo de estilo
import './style.scss';

export const Home = () => {
    return (
        <section className='home'>
            <div className='contentText'>
                <h1>
                    Veja o guia definitivo para conquistar 
                    seus objetivos como DEV em 2022
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat 
                    aenean sit vitae, sed tristique placerat hac.
                </p>
                <span>Veja mais <img src={arrowRight} alt='Ícone de seta para a direita' /></span>
            </div>
            <div className='contentImage'>
                <img src={imageHome} alt='Imagem' />
            </div>
        </section>
    );
}