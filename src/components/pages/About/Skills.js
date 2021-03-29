const Skills = () => {
  const devData = [
    { language: 'html', percent: 25 },
    { language: 'javascript', percent: 89 },
    { language: 'css', percent: 70 },
    { language: 'php', percent: 66 },
    { language: 'wordpress', percent: 95 },
    { language: 'jQuery', percent: 50 },
    { language: 'angular', percent: 65 },
    { language: 'react', percent: 45 },
  ];
  return (
    <div className="row skills">
      <div className="col-12">
        <h3 className="col-12 text-upper my-50">my skills</h3>
      </div>
      {devData.map((data) => (
        <div className="col-6 col-md-3 mb-30" key={data.language}>
          <div className={`c100 p${data.percent}`}>
            <span>
              {data.percent}
              %
            </span>
            <div className="slice">
              <div className="bar" />
              <div className="fill" />
            </div>
          </div>
          <h6 className="text-upper mt-10 text-center">{data.language}</h6>
        </div>
      ))}
    </div>
  );
};

export default Skills;
