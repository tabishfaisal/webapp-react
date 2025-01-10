import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <>
            <p>Chi Siamo</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quidem quis officiis.</p>
            <nav>
                <Link to='/'>Goto Homepage</Link>
            </nav>
        </>
    )

}
export default AboutPage;