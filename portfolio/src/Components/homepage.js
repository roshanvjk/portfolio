import '../Css/home.css';
import image from '../Images/background.png';
import resumeFile from '../Images/RoshanResume.pdf';

function HomePage() {
    return (
        <div className="content" id="landing">
            <div className="content-left">
                <p>Hello,</p>
                <div className="strong">
                    <p>I'm <span>Roshan</span></p>
                </div>
                <div className="writing">
                    <p className="typing">Full Stack Developer</p>
                </div>
                <p>Enthusiastic student seeking a full-time position that offers professional challenges. Possesses strong interpersonal skills, excellent time management.</p>
                <div className="button-container">
                    <a href={resumeFile} download className="resume-button">
                        Download Resume
                    </a>
                </div>
            </div>
            <div className="content-right">
                <img src={image} alt="Description of the image" />
            </div>
        </div>
    );
}

export default HomePage;
