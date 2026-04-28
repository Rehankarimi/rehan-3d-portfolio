import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Analyst</h4>
                <h5>Accenture · Mumbai</h5>
              </div>
              <h3>2024-26</h3>
            </div>
            <p>
              Owned end-to-end delivery of multi-market digital transformation
              initiatives across Telecom and Insurance regions. Led a GenAI
              program that delivered $8.25M annual savings (6x ROI) through
              ticket validation and workflow automation. Aligned stakeholders
              across 65 global sites and drove Agile execution with strong
              governance, OKRs, and sprint tracking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Coordinator</h4>
                <h5>Accenture · Mumbai</h5>
              </div>
              <h3>2022-24</h3>
            </div>
            <p>
              Supported multi-stream transformation programs across Telecom
              operations. Managed budgets, governance forums, RAID logs, and
              execution tracking across functions. Improved reporting automation
              to reduce manual effort and increase transparency in executive
              reviews.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Transformation / Operations Specialist</h4>
                <h5>Accenture · Mumbai</h5>
              </div>
              <h3>2019-22</h3>
            </div>
            <p>
              Led end-to-end process reengineering using Lean Six Sigma
              (DMAIC). Identified automation opportunities and implemented RPA
              workflows to improve operational efficiency and reduce manual
              workload.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Lead - BPO Operations</h4>
                <h5>Accenture · Mumbai</h5>
              </div>
              <h3>2018-19</h3>
            </div>
            <p>
              Managed SLA delivery, quality metrics, and escalations for
              telecom support operations. Improved productivity and resolution
              quality through structured performance frameworks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Consultant</h4>
                <h5>Sutherland Global · Mumbai</h5>
              </div>
              <h3>2017-18</h3>
            </div>
            <p>
              Served as the primary interface with technical managers for
              clarifications, dependencies, and escalations, ensuring smooth
              coordination between business and technical teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
