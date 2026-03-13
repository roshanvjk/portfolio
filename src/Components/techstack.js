import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Importing images from the techicons folder
import structureLogo from '../techicons/structure.png';
import bootstrapLogo from '../techicons/bootstrap.png';
import cssLogo from '../techicons/css-3.png';
import htmlLogo from '../techicons/html.png';
import jsLogo from '../techicons/js.png';
import mysqlLogo from '../techicons/mysql.png';
import nodejsLogo from '../techicons/node-js (1).png';
import postgresqlLogo from '../techicons/postgresql.png';
import vitejsLogo from '../techicons/vitejs.png';

function TechStack() {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Carousel>
                {/* Carousel Item 1 */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={structureLogo}
                        alt="Structure"
                        style={{ width: '240px', height: '240px' }} // Set width and height to 240px
                    />
                    <Carousel.Caption>
                        <h3>Structure</h3>
                        <p>Tech stack structure.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Carousel Item 2 */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={bootstrapLogo}
                        alt="Bootstrap"
                        style={{ width: '240px', height: '240px' }}
                    />
                    <Carousel.Caption>
                        <h3>Bootstrap</h3>
                        <p>Responsive web design framework.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Carousel Item 3 */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={cssLogo}
                        alt="CSS"
                        style={{ width: '240px', height: '240px' }}
                    />
                    <Carousel.Caption>
                        <h3>CSS3</h3>
                        <p>Style sheets for layout and design.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Carousel Item 4 */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={htmlLogo}
                        alt="HTML"
                        style={{ width: '240px', height: '240px' }}
                    />
                    <Carousel.Caption>
                        <h3>HTML5</h3>
                        <p>Markup language for web structure.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Carousel Item 5 */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={jsLogo}
                        alt="JavaScript"
                        style={{ width: '240px', height: '240px' }}
                    />
                    <Carousel.Caption>
                        <h3>JavaScript</h3>
                        <p>Programming language for web functionality.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Carousel Item 6 */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={mysqlLogo}
                        alt="MySQL"
                        style={{ width: '240px', height: '240px' }}
                    />
                    <Carousel.Caption>
                        <h3>MySQL</h3>
                        <p>Relational database management system.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Carousel Item 7 */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={nodejsLogo}
                        alt="Node.js"
                        style={{ width: '240px', height: '240px' }}
                    />
                    <Carousel.Caption>
                        <h3>Node.js</h3>
                        <p>JavaScript runtime for server-side applications.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Carousel Item 8 */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={postgresqlLogo}
                        alt="PostgreSQL"
                        style={{ width: '240px', height: '240px' }}
                    />
                    <Carousel.Caption>
                        <h3>PostgreSQL</h3>
                        <p>Open-source relational database system.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Carousel Item 9 */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={vitejsLogo}
                        alt="Vite.js"
                        style={{ width: '240px', height: '240px' }}
                    />
                    <Carousel.Caption>
                        <h3>Vite.js</h3>
                        <p>Next-generation build tool for modern web projects.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default TechStack;
