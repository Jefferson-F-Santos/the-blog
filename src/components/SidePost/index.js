// Importação de components
import { Card } from '../Card';
import { SimplePost } from '../SimplePost';
import { dataPosts } from '../../data/posts';

// Importação do estilo
import './style.scss';

export const SidePost = () => {
    
    const findPost = (idPost) => {
        return dataPosts.find(item => item.id === idPost)
    }

    return (
        <section className='sidePost'>
            <Card key='1' objeto={findPost(1)} />
            <div className='contentSimplePost'>
                <SimplePost objeto={findPost(2)} />
                <hr />
                <SimplePost objeto={findPost(3)} />
            </div>
        </section>
    );
}