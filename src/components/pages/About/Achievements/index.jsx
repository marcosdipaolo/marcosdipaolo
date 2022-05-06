import Achievement from './Achievement';
import data from './achievementsData';

const Achievements = () => (
  <div className="achievements col-12 col-lg-7 col-xl-5">
    <div className="row">
      {data.map((item) => <Achievement key={item.transKey} {...item} />)}
    </div>
  </div>
);

export default Achievements;
