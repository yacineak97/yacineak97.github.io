import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import CV_EN from '../../assets/cv_yacine_akli_en.pdf';
import CV_FR from '../../assets/cv_yacine_akli_fr.pdf';
import './cta.css';

const CTA = () => {
	const [showPreview, setShowPreview] = useState(false);
	const [language, setLanguage] = useState<'en' | 'fr'>('en');

	const cvFiles = {
		en: {
			file: CV_EN,
			label: 'English CV',
			flag: '🇬🇧',
		},
		fr: {
			file: CV_FR,
			label: 'CV Français',
			flag: '🇫🇷',
		},
	};

	const currentCV = cvFiles[language];

	return (
		<>
			<div className='cta'>
				<button
					onClick={() => setShowPreview(true)}
					className='btn btn-secondary'
				>
					Preview CV
				</button>

				<a href='#contact' className='btn btn-primary'>
					Contact Me
				</a>
			</div>

			{showPreview && (
				<div className='cv-overlay' onClick={() => setShowPreview(false)}>
					<div className='cv-modal' onClick={(e) => e.stopPropagation()}>
						{/* TOP BAR */}
						<div className='cv-modal__bar'>
							<span>Yacine Akli — {currentCV.label}</span>

							<div className='cv-modal__actions'>
								{/* Language Switcher */}
								<div className='cv-lang-switcher'>
									<button
										className={`cv-lang-btn ${language === 'en' ? 'active' : ''}`}
										onClick={() => setLanguage('en')}
									>
										<ReactCountryFlag countryCode='GB' svg />
									</button>

									<button
										className={`cv-lang-btn ${language === 'fr' ? 'active' : ''}`}
										onClick={() => setLanguage('fr')}
									>
										<ReactCountryFlag countryCode='FR' svg />
									</button>
								</div>

								<a href={currentCV.file} download className='btn'>
									Download CV
								</a>

								<button
									onClick={() => setShowPreview(false)}
									className='cv-modal__close'
								>
									✕
								</button>
							</div>
						</div>

						{/* PDF PREVIEW */}
						<iframe
							key={language}
							src={`${currentCV.file}#toolbar=0&navpanes=0`}
							title='CV Preview'
							className='cv-modal__frame'
						/>

						{/* BOTTOM BAR */}
						<div className='cv-modal__bar'>
							<span>
								Viewing: {currentCV.flag} {currentCV.label}
							</span>

							<a href={currentCV.file} download className='btn'>
								Download CV
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CTA;
