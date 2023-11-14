import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faTwitter, faSpotify } from '@fortawesome/free-brands-svg-icons';

const PageContent = () => {
  return (
  <div>
   <div className="container-fluid p-0">
  <section className="resume-section" id="about">
    <div className="resume-section-content">
      <h1 className="mb-0">
        Amanda
        <span className="text-primary">Mamesah</span>
      </h1>
      <div className="subheading mb-5">
        Manado, Sulawesi Utara ·
        <a href="mailto.name@email.com">s22210307@student.unklab.ac.id</a>
      </div>
      <p className="lead mb-5">I am a student of Computer Science Klabat University.</p>
      <div className="social-icons">
        <a className="social-icon" href="https://github.com/amandamamesah"><FontAwesomeIcon icon={faGithub} /></a>
        <a className="social-icon" href="#!"><FontAwesomeIcon icon={faTwitter} /></a>
        <a className="social-icon" href="https://www.instagram.com/mndacm/"><FontAwesomeIcon icon={faInstagram} /></a>
        <a className="social-icon" href="https://open.spotify.com/user/0d4ojzxv67meunw18k7njt5g0?si=a4d6ef07fcfe4785"><FontAwesomeIcon icon={faSpotify} /></a>
      </div>
    </div>
  </section>
  <hr className="m-0" />
  <section className="resume-section" id="experience">
    <div className="resume-section-content">
      <h2 className="mb-5">Experience</h2>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">BEM UNKLAB 2022</h3>
          <div className="subheading mb-3">Crew of Parlementarian </div>
          <p>Becoming part of BEM Unklab at creating various events for students, especially unklab students</p>
        </div>
        <div className="flex-shrink-0"><span className="text-primary">August - November 2022</span></div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Voice of Computer Science choir</h3>
          <div className="subheading mb-3">Altos</div>
          <p>Becoming part of VOCS or known as Voice of Computer Science, serve God by singing and doing ministry in churches</p>
        </div>
        <div className="flex-shrink-0"><span className="text-primary">January 2023 - Present</span></div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Computer Science Student Association</h3>
          <div className="subheading mb-3">Coordinator of Parlementarian</div>
          <p>Becoming part of CSSA, a Student Association Of Computer Science. Part of Parlementarian as a Coordinator.</p>
        </div>
        <div className="flex-shrink-0"><span className="text-primary">August 2023 - Present</span></div>
      </div>
    </div>
  </section>
  <hr className="m-0" />
  <section className="resume-section" id="education">
    <div className="resume-section-content">
      <h2 className="mb-5">Education</h2>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">SD Advent 3 Paal 2 Manado</h3>
          <div className="subheading mb-3">Grade 1 - Grade 6</div>
        </div>
        <div className="flex-shrink-0"><span className="text-primary">2010 - 2016</span></div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <div className="flex-grow-1">
          <h3 className="mb-0">SMP Advent 4 Paal 2 Manado</h3>
          <div className="subheading mb-3">Grade 7 - Grade 9</div>
        </div>
        <div className="flex-shrink-0"><span className="text-primary">2016 - 2019</span></div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <div className="flex-grow-1">
          <h3 className="mb-0">SMA Unklab</h3>
          <div className="subheading mb-3">Grade 10 - Grade 12</div>
        </div>
        <div className="flex-shrink-0"><span className="text-primary">2019 - 2022</span></div>
      </div>
    </div>
  </section>          
  <hr className="m-0" />
  <section className="resume-section" id="interests">
    <div className="resume-section-content">
      <h2 className="mb-5">Interests</h2>
      <p>I am interested in singing and serving in church and on campus. I am also interested in playing music, such as guitar even tho I am not really pro. I'm also very interested in organizing events and being part of organizations on campus. In other words, I like to be active in various things.</p>
      <p className="mb-0">I love reading an online novel. I enjoy hearing bunch of types of music. I also enjoy watching movies that touch my heart, that make me cry. Other than that, I enjoy the horror genre. I am an animal lover, especially dogs and cats.</p>
    </div>
  </section>
  <hr className="m-0" />
</div>

  </div>
  )
}

export default PageContent