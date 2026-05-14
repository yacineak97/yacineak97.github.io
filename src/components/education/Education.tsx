import './education.css';
import { BsCalendar2Week, BsBriefcase, BsHourglass } from 'react-icons/bs';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

const Education = () => {
	useRevealOnScroll('.education__row', 0.2);

	return (
		<section id='education'>
			<h5>The education I have</h5>
			<h2>Education</h2>

			<div className='education__container'>
				<div className='education__row'>
					<span className='card__arrow' />
					<span className='card__dot' />
					<article className='education__card'>
						<span className='card__bar' />
						<div className='education__top'>
							<div className='education__left'>
								<div className='education__icon'>
									<BsBriefcase />
								</div>
								<div>
									<h3>
										Master&apos;s Degree in Computer Science — Information &
										Mobility Track: Programming, Algorithms for the Internet,
										Distribution and Systems (IMPAIRS)
									</h3>
									<h5>Paris City University — Paris, France</h5>
								</div>
							</div>
							<div className='education__year'>
								<BsCalendar2Week />
								<span>September 2022 - September 2023</span>
							</div>
						</div>
					</article>
				</div>

				<div className='education__row even'>
					<span className='card__arrow' />
					<span className='card__dot' />
					<article className='education__card'>
						<span className='card__bar' />
						<div className='education__top'>
							<div className='education__left'>
								<div className='education__icon'>
									<BsBriefcase />
								</div>
								<div>
									<h3>
										State Engineer in Telecommunications — Computer Science &
										Networks Option
									</h3>
									<h5>
										National Higher School of Telecommunications and Information
										and Communication Technologies (ENSTTIC) — Oran, Algeria
									</h5>
								</div>
							</div>
							<div className='education__year'>
								<BsCalendar2Week />
								<span>September 2016 - September 2019</span>
							</div>
						</div>
					</article>
				</div>
				<div className='education__end'>
					<BsHourglass />
				</div>
			</div>
		</section>
	);
};

export default Education;
