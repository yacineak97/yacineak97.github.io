import { useEffect, useState } from 'react';
import './header.css';
import CTA from './CTA';
import myPicture from '../../assets/my-picture.webp';
import HeaderSocials from './HeaderSocials';

const useTypewriter = (text: string, speed = 60, startDelay = 0) => {
	const [displayed, setDisplayed] = useState('');
	const [done, setDone] = useState(false);

	useEffect(() => {
		let i = 0;

		const delay = setTimeout(() => {
			setDisplayed('');
			setDone(false);

			const interval = setInterval(() => {
				i++;
				setDisplayed(text.slice(0, i));
				if (i >= text.length) {
					clearInterval(interval);
					setDone(true);
				}
			}, speed);

			return () => clearInterval(interval);
		}, startDelay);

		return () => clearTimeout(delay);
	}, [text, speed, startDelay]);

	return { displayed, done };
};

const Header = () => {
	const name = useTypewriter('Yacine Akli', 80, 300);
	const role = useTypewriter(
		'Full-Stack TypeScript Engineer — Node.js/NestJS, React & Angular',
		45,
		1200,
	);

	return (
		<header id='home'>
			<div className='container header__container'>
				<h5>Hello, I&apos;m</h5>

				<h1>
					{name.displayed}
					<span className='cursor' />
				</h1>

				<h5 className='text-light'>
					{'> '}
					{role.displayed}
				</h5>

				<CTA />
				<HeaderSocials />

				<div className='me'>
					<img src={myPicture} alt='Yacine Akli' />
				</div>

				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
