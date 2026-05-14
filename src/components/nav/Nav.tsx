import { Fragment, useEffect, useState } from 'react';
import './nav.css';

import { AiOutlineHome } from 'react-icons/ai';
import { BiMessageSquareDetail, BiUser } from 'react-icons/bi';
import { FaGraduationCap, FaLaptopCode, FaTools } from 'react-icons/fa';
import { GoChecklist } from 'react-icons/go';

const NAV_ITEMS = [
	{ href: '#home', label: 'HOME', icon: <AiOutlineHome /> },
	{ href: '#about', label: 'ABOUT', icon: <BiUser /> },
	{ href: '#experience', label: 'WORK', icon: <FaLaptopCode /> },
	{ href: '#education', label: 'EDUCATION', icon: <FaGraduationCap /> },
	{ href: '#projects', label: 'PROJECTS', icon: <GoChecklist /> },
	{ href: '#skills', label: 'SKILLS', icon: <FaTools /> },
	{ href: '#contact', label: 'CONTACT', icon: <BiMessageSquareDetail /> },
];

const TICKER_WORDS = [
	'SYSTEM_ONLINE',
	'●',
	'PORT_3000 ACTIVE',
	'0x39E87A',
	'BUILD_SUCCESS',
	'●',
	'USER_AUTHENTICATED',
	'NULL_ERROR: NONE',
	'MATRIX_LOADED',
	'●',
];

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#home');

	const tickerItems = [...TICKER_WORDS, ...TICKER_WORDS];

	useEffect(() => {
		const updateHash = () => {
			setActiveNav(window.location.hash || '#home');
		};

		updateHash();
		window.addEventListener('hashchange', updateHash);

		return () => window.removeEventListener('hashchange', updateHash);
	}, []);

	useEffect(() => {
		const sections = Array.from(
			document.querySelectorAll('header[id], section[id]'),
		);

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

				if (visible) {
					setActiveNav(`#${visible.target.id}`);
				}
			},
			{
				threshold: [0.1, 0.25, 0.5],
				rootMargin: '-20% 0px -35% 0px',
			},
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	return (
		<div className='nav-wrapper'>
			<nav>
				<span className='nav-system-label'>// NAVIGATION_SYSTEM v2.0</span>

				{NAV_ITEMS.map((item, index) => (
					<Fragment key={item.href}>
						<a
							key={item.href}
							href={item.href}
							title={item.label}
							aria-label={item.label}
							onClick={() => setActiveNav(item.href)}
							className={`nav-item${activeNav === item.href ? ' active' : ''}`}
						>
							<span className='status-dot' />
							<span className='nav-icon'>{item.icon}</span>
							<span className='nav-label' data-text={item.label}>
								{item.label}
							</span>
						</a>
						{index < NAV_ITEMS.length - 1 && (
							<div key={`sep-${index}`} className='nav-separator' />
						)}
					</Fragment>
				))}
			</nav>

			<div className='ticker-wrap'>
				<div className='ticker'>
					{tickerItems.map((word, i) => (
						<span key={i} className={word === '●' ? 'hi' : ''}>
							{word}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default Nav;
