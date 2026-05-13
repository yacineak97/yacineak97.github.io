import { BsGithub, BsLinkedin } from 'react-icons/bs';

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a
				href='https://www.linkedin.com/in/yacine-akli/'
				target='_blank'
				rel='noopener noreferrer'
				aria-label='LinkedIn'
			>
				<BsLinkedin />
			</a>

			<a
				href='https://github.com/yacineak97/'
				target='_blank'
				rel='noopener noreferrer'
				aria-label='GitHub'
			>
				<BsGithub />
			</a>
		</div>
	);
};

export default HeaderSocials;
