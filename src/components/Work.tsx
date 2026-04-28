import "./styles/Work.css";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          <div className="carousel-track-container">
            <div className="carousel-track">
              <div className="carousel-slide">
                <div className="carousel-content">
                  <div className="carousel-info">
                    <div className="carousel-number">
                      <h3>01</h3>
                    </div>
                    <div className="carousel-details">
                      <h4>GenAI Ticket Validation Platform</h4>
                      <p className="carousel-category">
                        Built an AI-powered solution to validate support tickets
                        and automate workflows.
                      </p>
                      <div className="carousel-tools">
                        <span className="tools-label">Impact</span>
                        <p>
                          $8.25M annual savings, 6x ROI, reduced SLA breaches,
                          and improved operational efficiency.
                        </p>
                      </div>
                      <div className="carousel-tools">
                        <span className="tools-label">Technologies</span>
                        <p>GenAI, RAG, LLM, Automation, Agile</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
