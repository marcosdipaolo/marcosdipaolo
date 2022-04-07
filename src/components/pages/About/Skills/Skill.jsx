import propTypes from 'prop-types';

const Skill = ({ language, percent }) => (
  <div className="col-6 col-md-3 mb-30" key={language}>
    <div className={`c100 p${percent}`}>
      <span>
        {percent}
        %
      </span>
      <div className="slice">
        <div className="bar" />
        <div className="fill" />
      </div>
    </div>
    <h6 className="text-upper mt-10 text-center">{language}</h6>
  </div>
);

Skill.propTypes = {
  language: propTypes.string.isRequired,
  percent: propTypes.number.isRequired,
};

export default Skill;
