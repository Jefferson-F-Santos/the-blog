// Components
import { Header } from './components/Header';
import { Home } from './components/Home';
import { SidePost } from './components/SidePost';
import { Card } from './components/Card';
import { Footer } from './components/Footer';

// Arquivo de estilo
import './styles/mainNews.scss';

// Data
import { dataPosts } from './data/posts.js';


export const App = () => {
  const [, , , ...restPost] = dataPosts;

  return (
    <div className="interface">
      <Header />
      <Home />
      <SidePost />
      <section className='mainNews'>
        {restPost.map((item, index) => (
            <Card key={index} objeto={item} />
        ))}
      </section>
      <Footer />
    </div>
  );
}