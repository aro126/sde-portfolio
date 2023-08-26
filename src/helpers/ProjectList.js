import SampleImg from "../assets/warm_colorful.jpeg";
import RobotImgRec from "../assets/RobotImgRec.jpg";
import MongoDBImg from "../assets/restful-movie-db.png";
import WordleImg from "../assets/javascript-wordle.png";

export const ProjectList = [
    {
        name: "MongoDB Restful Movie Database",
        image: MongoDBImg,
        skills: "MongoDB, JavaScript, HTML, CSS, Relational Databases",
        desc:
            <span>
                For this project, I queried a MongoDB database and formatted the queried objects in a simple webpage.
                <br></br><br></br>
                The following tutorials were used:
                <ul>
                    <li>
                        <a href="https://www.mongodb.com/developer/languages/javascript/hapijs-nodejs-driver/" target="_blank" rel="noreferrer">
                            Build a RESTful API with HapiJS and MongoDB
                        </a>
                    </li>
                    <li>
                        <a href="https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/" target="_blank" rel="noreferrer">
                            How to Connect to an API with JavaScript
                        </a>
                    </li>
                </ul>
            </span>,
        video: <iframe src="https://www.youtube.com/embed/hhTtujJF97Y?si=Rbc0Mvy_C2LGS7yU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
        link: "https://github.com/aro126/restful-movie-db"
    },
    {
        name: "Wordle JavaScript Remake",
        image: WordleImg,
        skills: "JavaScript, HTML, CSS",
        desc:
            <span>
                For this project, I remade the game Wordle using JavaScript. The game can be played live at&nbsp;
                <a href="https://aro126.github.io/javascript-wordle/" target="_blank" rel="noreferrer">
                    this website
                </a>
                . <br></br><br></br>
                The following tutorial was used for this project:
                <ul>
                    <li>
                        <a href="https://www.codingnepalweb.com/word-guessing-game-html-css-javascript/" target="_blank" rel="noreferrer">
                            Word Guessing Game in HTML CSS & JavaScript
                        </a>
                    </li>
                </ul>
            </span>,
        video: <iframe src="https://www.youtube.com/embed/yTCOrPnsdTM?si=0HpIf5NMzyMP1mOi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
        link: "https://github.com/aro126/javascript-wordle"
    },
    {
        name: "Project3",
        image: SampleImg,
        skills: "example, example",
        desc: "example",
        link: "https://www.google.com/"
    },
    {
        name: "Project4",
        image: SampleImg,
        skills: "example, example",
        desc: "example",
        link: "https://www.google.com/"
    },
    {
        name: "Project5",
        image: SampleImg,
        skills: "example, example",
        desc: "example",
        link: "https://www.google.com/"
    },
    {
        name: "Robot Image Recognition",
        image: RobotImgRec,
        skills: "Python, OpenCV, Scikit-learn, Numpy, Machine Learning, Robotics, Computer Vision",
        desc: "Used Python Computer Vision libraries to train an Anki Cozmo Robot to recognize specific images and to perform a task corresponding to each one.",
        video: <p>Not available</p>,
        link: "https://github.com/RachitBhargava99/Wanda"
    }
];