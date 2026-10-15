import { Galery } from '@components';
import stylesSheet from './portfolio.module.css';
import appData from '@absolute/data/data';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from '../not-found';

const historyAssets = import.meta.glob(
  '/src/assets/imgs/history/**/*.{png,webp}',
  { eager: true, import: 'default' }
);

function getHistoryUrl(dir, name) {
  return (
    historyAssets[`${dir}/${name}.png`] || historyAssets[`${dir}/${name}.webp`]
  );
}

export default function Portfolio() {
  const { slug } = useParams();

  const project = appData.historys.find((p) => {
    return p.slug == slug;
  });

  if (!project) return <NotFoundPage />;

  const backgroundPath = `/src/assets/imgs/history/${project['from-service']}/${project['gallery']['name']}`;
  const hydrateGalleryAndList = () => {
    const ListImages = [];
    const gallery = [];
    for (let index = 1; index <= project['gallery']['total-items']; index++) {
      const url = getHistoryUrl(backgroundPath, `image_${index}`);
      if (!url) continue;
      ListImages.push({
        url,
        alt: 'imagen referencia',
      });
    }
    gallery.push({
      'model-name': 'default',
      items: ListImages,
    });
    return { ListImages, gallery };
  };

  return (
    <section className={stylesSheet['content-service']}>
      <div className={stylesSheet['content-image-service']}>
        <img
          src={getHistoryUrl(backgroundPath, 'background')}
          alt={project['history-name']}
        />
      </div>
      <div className={stylesSheet['project-container']}>
        <section className={stylesSheet['description-service-content']}>
          {project['details'].map((d) => (
            <p>{d}</p>
          ))}
        </section>

        <section className={stylesSheet['galery-container']}>
          <Galery {...hydrateGalleryAndList()} />
        </section>
      </div>
    </section>
  );
}
