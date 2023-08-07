import React from "react";
import {
  VerticalTimeline, VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#31695f">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "#212e4b", color: "#90dda4" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            B.S. in Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Georgia Institute of Technology
          </h4>
          <p>Obtained degree in Computer Science. Coursework 
            included Object Oriented Design, Data Structures and 
            Algorithms, Discrete Mathematics, etc.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2023"
          iconStyle={{ background: "#212e4b", color: "#90dda4" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            UX Design Certificate
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Google Career Certificate
          </h4>
          <p>Currently completing Google's UX certificate to gain
            more knowledge of design principles (largely for personal projects).
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2020"
          iconStyle={{ background: "#212e4b", color: "#90dda4" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Teaching Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Georgia Institute of Technology
          </h4>
          <p>Assisted with the Intro to Object Oriented Programming 
            course. This course is taught in Python and introduces 
            students to common data types and structures.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020"
          iconStyle={{ background: "#212e4b", color: "#90dda4" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Development Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Amazon
          </h4>
          <p>Worked on Amazon’s Item Master Service team dealing 
            with catalog items. During this internship, I gained 
            experience working with databases as well as Amazon’s 
            item processing system.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience