import SectionTitle from '../../SectionTitle';
import Album from './Album';
import piedras from '../../../static/music/images/piedras.jpg';
import sures from '../../../static/music/images/sures.jpg';
import arbolito from '../../../static/music/images/arbolito.jpg';

export const albumsKeys = {
  PIEDRAS: 'piedras',
  SURES: 'sures',
  ARBOLITO: 'arbolito',
};

const music = [
  {
    key: albumsKeys.PIEDRAS,
    title: 'Piedras del Agua',
    subTitle: 'Marcos Di Paolo',
    image: piedras,
  }, {
    key: albumsKeys.ARBOLITO,
    title: 'Arbolito del querer',
    subTitle: 'Chiqui Ledesma & Marcos Di Paolo',
    image: arbolito,
  }, {
    key: albumsKeys.SURES,
    title: 'Trío Sures',
    subTitle: 'Sures',
    image: sures,
  },
];
// un pequeño comentario
const Music = () => (
  <section className="music container px-20">
    <SectionTitle tT="pages.music.sectionTitle" tBg="pages.music.titleBg" />
    <div className="row">
      <div className="offset-md-1 col-lg-10">
        <div className="row">
          {music.map((data) => (
            <Album
              title={data.title}
              subTitle={data.subTitle}
              thumb={data.image}
              tKey={data.key}
              key={data.key}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Music;
