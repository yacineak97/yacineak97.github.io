import { useEffect, useState } from 'react';
import './projects.css';
import WIKISEARCH from '../../assets/wikisearch.png';
import PORTFOLIO from '../../assets/portfolio.png';
import NEO4JVSPOSTGRES from '../../assets/neo4j-vs-postgres.png';
import STAYBIT from '../../assets/staybit.png';
import AUTHVAULT from '../../assets/authvault.png';
import CINEVAULT from '../../assets/cinevault.png';
import P2P from '../../assets/p2p.png';

const Projects = () => {
	const [previewImage, setPreviewImage] = useState<{
		src: string;
		alt: string;
	} | null>(null);

	useEffect(() => {
		if (!previewImage) return;

		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setPreviewImage(null);
			}
		};

		document.body.style.overflow = 'hidden';
		window.addEventListener('keydown', closeOnEscape);

		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', closeOnEscape);
		};
	}, [previewImage]);

	return (
		<section id='projects'>
			<h5>My Recent Works</h5>
			<h2>Projects</h2>

			<div className='container portfolio__container'>
				<article className='portfolio__item'>
					<span className='card__bar' />
					<div
						className='portfolio__item-image'
						onClick={() =>
							setPreviewImage({
								src: WIKISEARCH,
								alt: 'Wikipedia search engine',
							})
						}
					>
						<img src={WIKISEARCH} alt='Wikipedia search engine' />
					</div>

					<h3>Wikipedia Search Engine</h3>

					<small className='text-light'>JAVA | PYTHON | CSS</small>

					<div className='portfolio__item-cta'>
						<a
							href='https://github.com/yacineak97/wikipedia-search-engine'
							target='_blank'
							rel='noopener noreferrer'
							className='btn'
						>
							GitHub
						</a>
					</div>
				</article>

				<article className='portfolio__item'>
					<span className='card__bar' />
					<div
						className='portfolio__item-image'
						onClick={() =>
							setPreviewImage({
								src: P2P,
								alt: 'Peer-to-Peer Merkle Tree Synchronization System',
							})
						}
					>
						<img
							src={P2P}
							alt='Peer-to-Peer Merkle Tree Synchronization System'
						/>
					</div>

					<h3>Peer-to-Peer Merkle Tree Synchronization System</h3>

					<small className='text-light'>GOLANG</small>

					<div className='portfolio__item-cta'>
						<a
							href='https://github.com/yacineak97/peer_to_peer'
							target='_blank'
							rel='noopener noreferrer'
							className='btn'
						>
							GitHub
						</a>
					</div>
				</article>

				<article className='portfolio__item'>
					<span className='card__bar' />
					<div
						className='portfolio__item-image'
						onClick={() =>
							setPreviewImage({
								src: STAYBIT,
								alt: 'Staybit — Distributed Hotel Booking System',
							})
						}
					>
						<img
							src={STAYBIT}
							alt='Staybit — Distributed Hotel Booking System'
						/>
					</div>

					<h3>
						Staybit — Distributed Hotel Booking System · NestJS Microservices ·
						GraphQL Federation · AWS EKS
					</h3>

					<small className='text-light'>
						NESTJS | GRAPHQL FEDERATION | MICROSERVICES | POSTGRESQL | STRIPE |
						JWT | DOCKER | KUBERNETES | AWS EKS | CI/CD | TYPESCRIPT | JEST
					</small>

					<div className='portfolio__item-cta'>
						<a
							href='https://github.com/yacineak97/staybit'
							target='_blank'
							rel='noopener noreferrer'
							className='btn'
						>
							GitHub
						</a>
					</div>
				</article>

				<article className='portfolio__item'>
					<span className='card__bar' />
					<div
						className='portfolio__item-image'
						onClick={() =>
							setPreviewImage({
								src: CINEVAULT,
								alt: 'Reactive Movie Catalogue & Admin Dashboard',
							})
						}
					>
						<img
							src={CINEVAULT}
							alt='Reactive Movie Catalogue & Admin Dashboard'
						/>
					</div>

					<h3>Reactive Movie Catalogue & Admin Dashboard</h3>

					<small className='text-light'>
						METEOR | REACT | TYPESCRIPT | MONGODB | TAILWIND CSS | REACT ROUTER
					</small>

					<div className='portfolio__item-cta'>
						<a
							href='https://github.com/yacineak97/cinevault'
							target='_blank'
							rel='noopener noreferrer'
							className='btn'
						>
							GitHub
						</a>

						<a
							href='http://51.20.188.207'
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn-primary'
						>
							Visit Website
						</a>
					</div>
				</article>

				<article className='portfolio__item'>
					<span className='card__bar' />
					<div
						className='portfolio__item-image'
						onClick={() =>
							setPreviewImage({
								src: AUTHVAULT,
								alt: 'Production-Ready JWT Authentication Platform',
							})
						}
					>
						<img
							src={AUTHVAULT}
							alt='Production-Ready JWT Authentication Platform'
						/>
					</div>

					<h3>Production-Ready JWT Authentication Platform</h3>

					<small className='text-light'>
						REACT | TYPESCRIPT | GO | GIN | POSTGRESQL | JWT | HTTPONLY COOKIES
					</small>

					<div className='portfolio__item-cta'>
						<a
							href='https://github.com/yacineak97/AuthVault'
							target='_blank'
							rel='noopener noreferrer'
							className='btn'
						>
							GitHub
						</a>
					</div>
				</article>

				<article className='portfolio__item'>
					<span className='card__bar' />
					<div
						className='portfolio__item-image'
						onClick={() =>
							setPreviewImage({
								src: PORTFOLIO,
								alt: 'My Developer Portfolio',
							})
						}
					>
						<img src={PORTFOLIO} alt='My Developer Portfolio' />
					</div>

					<h3>My Developer Portfolio</h3>

					<small className='text-light'>REACT.JS | TYPESCRIPT | CSS</small>

					<div className='portfolio__item-cta'>
						<a
							href='https://github.com/yacineak97/yacineak97.github.io'
							target='_blank'
							rel='noopener noreferrer'
							className='btn'
						>
							GitHub
						</a>

						<a
							href='https://yacineak97.github.io/'
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn-primary'
						>
							Visit Website
						</a>
					</div>
				</article>

				<article className='portfolio__item'>
					<span className='card__bar' />
					<div
						className='portfolio__item-image'
						onClick={() =>
							setPreviewImage({
								src: NEO4JVSPOSTGRES,
								alt: 'Neo4j vs PostgreSQL',
							})
						}
					>
						<img src={NEO4JVSPOSTGRES} alt='Neo4j vs PostgreSQL' />
					</div>

					<h3>
						Implementation and Comparison of Neo4j vs PostgreSQL on Netflix Data
					</h3>

					<small className='text-light'>NEO4J | POSTGRESQL</small>

					<div className='portfolio__item-cta'>
						<a
							href='https://github.com/yacineak97/neo4j-project'
							target='_blank'
							rel='noopener noreferrer'
							className='btn'
						>
							GitHub
						</a>
					</div>
				</article>
			</div>

			{previewImage && (
				<div className='image-preview' onClick={() => setPreviewImage(null)}>
					<span
						className='image-preview__close'
						onClick={() => setPreviewImage(null)}
					>
						×
					</span>

					<div
						className='image-preview__content'
						onClick={(event) => event.stopPropagation()}
					>
						<img src={previewImage.src} alt={previewImage.alt} />
						<p>{previewImage.alt}</p>
					</div>
				</div>
			)}
		</section>
	);
};

export default Projects;
