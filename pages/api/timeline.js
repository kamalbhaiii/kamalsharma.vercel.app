export default function handler(req, res) {
    res.status(200).json([
        {
            organization: "DevTown", 
            stream: "Data Science Intern", 
            desc: "I did a training cum Internship with DevTown in the domain of Data Science",
            durationFrom: "December 2021",
            durationTo: "March 2022"
        },
        {
            organization: "SkillSafari", 
            stream: "Full Stack Developer Intern", 
            desc: "I did a training cum Internship with Skill Safari in the domain of Full Stack Development",
            durationFrom: "August 2021",
            durationTo: "October 2021"
        },
    ])
  }