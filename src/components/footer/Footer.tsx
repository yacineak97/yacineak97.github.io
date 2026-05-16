import './footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer>
			<a href='#home' className='footer__logo'>
				YACINE
			</a>

			<ul className='permalinks'>
				<li>
					<a href='#home'>Home</a>
				</li>

				<li>
					<a href='#about'>About</a>
				</li>

				<li>
					<a href='#experience'>Experience</a>
				</li>

				<li>
					<a href='#education'>Education</a>
				</li>

				<li>
					<a href='#projects'>Projects</a>
				</li>

				<li>
					<a href='#skills'>Skills</a>
				</li>

				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a
					href='https://www.linkedin.com/in/yacine-akli/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<BsLinkedin />
				</a>

				<a
					href='https://github.com/yacineak97'
					target='_blank'
					rel='noopener noreferrer'
				>
					<BsGithub />
				</a>
			</div>

			<div className='footer__copyright'>
				<small>&copy; Yacine Akli. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
