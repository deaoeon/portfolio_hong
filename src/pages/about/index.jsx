import ModalDemo from '../../components/ui/modal/Modal';
import './style.scss';

function About() {
    return (
        <main className="about">
            <div className="inner">
                <h2>About Page.</h2>
                <p>회사소개 , 회사소개</p>
                <p>
                   a eaque esse nostrum.
                </p>
                <ModalDemo />
            </div>
        </main>
    );
}

export default About;
