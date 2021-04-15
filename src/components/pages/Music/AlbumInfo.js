import { useTranslation } from 'react-i18next';

const AlbumInfo = ({ tKey }) => {
  const { t } = useTranslation();
  return (
    <div className="info">
      { t(`pages.music.albums.${tKey}.info`) }
    </div>
  );
};

export default AlbumInfo;
