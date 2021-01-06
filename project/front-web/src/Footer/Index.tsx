import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';

function Footer() {
    return (
        <footer className="main-footer">
            Lotus Desenvolvimento © Todos os direitos reservados
            <div className="footer-icons">
                <a href="youtube" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="instagram" target="_new">
                    <InstagramIcon />
                </a>
                <a href="facebook" target="_new">
                    <LinkedinIcon />
                </a>
            </div>
        </footer>
    );
}

export default Footer;