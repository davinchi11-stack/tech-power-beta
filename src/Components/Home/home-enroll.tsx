import laptop from '../../assets/laptop-ani.mp4'

export function HomeEnroll () {
   return (
    <section className="home-enroll">
    <div className="home-enroll_main wrapper medium">
      <div className="left">
        <div className="vid">
        <video playsInline autoPlay muted loop >
            <source src={laptop} type="video/mp4" />
        </video>
        </div>
      </div>

      <div className="right">
        <h2 className="title">Take a Course & Elevate Your Future</h2>
        <p className="description">
          Unlock the power of tech skills and transform your career!
          We offer high-quality, affordable training designed to equip you with in-demand digital skills. 
          Our programs ensure that every student graduates job-ready, with the tools needed to thrive in the global tech industry.
        </p>
        <div className="btn">
        <button className="enroll">Enroll Now</button>
        </div>
      </div>
    </div>
  </section>
   )
}