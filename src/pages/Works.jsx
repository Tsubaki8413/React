import worksData from '../data/works.json';

const Works = () => {
  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>My Works</h1>
      <div className="works-grid">
        {worksData.map((work) => (
          <div key={work.id} className="card">
            <img src={work.image} alt={work.title} />
            <div className="card-content">
              <h3 style={{ marginBottom: '10px' }}>{work.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;