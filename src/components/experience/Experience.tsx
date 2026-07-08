import './experience.css';
import { BsCalendar2Week, BsBriefcase, BsHourglass } from 'react-icons/bs';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

const Experience = () => {
	useRevealOnScroll('.experience__row', 0.2);

	return (
		<section id='experience'>
			<h5>The experience I have</h5>
			<h2>Experience</h2>

			<div className='experience__container'>
				<div className='experience__row'>
					<span className='card__arrow' />
					<span className='card__dot' />
					<article className='experience__card'>
						<span className='card__bar' />
						<div className='experience__top'>
							<div className='experience__left'>
								<div className='experience__icon'>
									<BsBriefcase />
								</div>
								<div>
									<h3>Software Engineer</h3>
									<h5>Milliman — Paris, France</h5>
								</div>
							</div>
							<div className='experience__year'>
								<BsCalendar2Week />
								<span>Nov 2023 - Mar 2026</span>
							</div>
						</div>
						<ul className='experience__text'>
							<li>
								Built and secured high-performance REST APIs with Node.js &
								MongoDB — 30% faster response time.
							</li>
							<li>
								Implemented Auth0 authentication, role management, and request
								validation.
							</li>
							<li>
								Designed dynamic UIs with Angular & TypeScript — 90% memory
								consumption reduction.
							</li>
							<li>
								Built scalable backend services in Python for critical
								endpoints.
							</li>
							<li>
								Developed real-time collaborative apps with reactive features.
							</li>
							<li>
								Automated CI/CD pipelines on GitLab/Azure — cut deployment time
								by 40%.
							</li>
							<li>
								Maintained 90%+ unit test coverage, reducing client bug reports
								by 70%.
							</li>
							<li>
								Agile/Scrum: sprint planning, daily standups, and code reviews.
							</li>
							<li>
								Stack: Node.js, Angular, JavaScript/TypeScript, MongoDB, Python,
								Bash scripting, GitLab CI/CD, Auth0, Azure.
							</li>
						</ul>
					</article>
				</div>

				<div className='experience__row even'>
					<span className='card__arrow' />
					<span className='card__dot' />
					<article className='experience__card'>
						<span className='card__bar' />
						<div className='experience__top'>
							<div className='experience__left'>
								<div className='experience__icon'>
									<BsBriefcase />
								</div>
								<div>
									<h3>Node.js Full-Stack Engineer Internship</h3>
									<h5>Milliman — Paris, France</h5>
								</div>
							</div>
							<div className='experience__year'>
								<BsCalendar2Week />
								<span>April 2023 - September 2023</span>
							</div>
						</div>
					</article>
				</div>
				<div className='experience__end'>
					<BsHourglass />
				</div>
			</div>
		</section>
	);
};

export default Experience;
