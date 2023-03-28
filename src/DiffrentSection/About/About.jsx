import React from 'react'

import "./about.css"
function About() {
    return (
        <>
            <section className="about section" id="about"  style={{
        backgroundColor: "#4d0026",
        color : "white"
      }}  >

                <h2 className="title">About me</h2>
                <div clasName="about-content">
                    <div clasName="columnAbout rightAbout">
                        <div className="text"  id="user-detail-name" >I'm  Hemensan Mahilange and I'm a <span clasName="typing-2"></span></div>
                        <p className="descritpon"  id="user-detail-intro"
 > A <b>passionate</b> full-stack developer with expertise in <b>NodeJS, ExpressJS, MongoDB, Mongoose, ReactJS,
                            JavaScript, HTML, and CSS</b>. I always take a <b>goal-oriented approach</b> to completing tasks
                            and <b>delivering scalable products</b> that provide a <b>wow-user</b> experience.
                            One of my recent achievements was developing a <b>fully functional e-commerce platform</b> platform with five members.
                            My <b>ability to lead a team effectively</b> and my passion for <b>backend development</b> make me stand out as a developer.
                            I look forward to leveraging my skills and experience to <b>create innovative solutions</b> that meet business goals.</p>

                    </div>
                </div>

            </section>


        </>

    )
}

export default About
