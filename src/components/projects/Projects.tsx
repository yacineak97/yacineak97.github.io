import { useEffect, useState } from 'react';
import './projects.css';

import WIKISEARCH from '../../assets/wikisearch.png';
import PORTFOLIO from '../../assets/portfolio.png';
import NEO4JVSPOSTGRES from '../../assets/neo4j-vs-postgres.png';
import STAYBIT from '../../assets/staybit.png';
import AUTHVAULT from '../../assets/authvault.png';
import CINEVAULT from '../../assets/cinevault.png';
import P2P from '../../assets/p2p.png';

type Project = {
	title: string;
	image: string;
	alt: string;
	stack: string;
	summary: string;
	highlights: string[];
	details: {
		problem: string;
		architecture: string;
		role: string;
		hardestDecision: string;
		tests: string;
		deployment: string;
		whyItMatters: string;
	};
	github: string;
	website?: string;
};

const projects: Project[] = [
	{
		title: 'Staybit — Distributed Hotel Booking Platform',
		image: STAYBIT,
		alt: 'Staybit distributed hotel booking platform',
		stack:
			'NestJS · TypeScript · GraphQL Federation · PostgreSQL · Stripe · Docker · Kubernetes · AWS EKS · Jest',
		summary:
			'A production-style hotel booking platform built with NestJS microservices, GraphQL Federation, JWT authentication, Stripe payments, and cloud deployment configuration.',
		highlights: [
			'Built services for authentication, reservations, payments, notifications, and API gateway.',
			'Implemented JWT authentication, Stripe payments, PostgreSQL persistence, and email notifications.',
			'Added Docker, Kubernetes, Helm, AWS EKS, AWS CodeBuild, Jest, and e2e test configuration.',
		],
		details: {
			problem:
				'A hotel booking system needs more than CRUD. It must coordinate users, reservations, payments, notifications, authorization, and deployment in a scalable way.',
			architecture:
				'The platform is split into independent NestJS services connected through a GraphQL gateway. PostgreSQL and TypeORM handle persistence, Stripe handles payments, and the system is containerized for Kubernetes deployment.',
			role: 'I designed and implemented the backend architecture, service boundaries, authentication flow, reservation flow, payment integration, Docker setup, Kubernetes configuration, and CI/CD pipeline.',
			hardestDecision:
				'Defining clean service boundaries while keeping user identity and authorization consistent across the gateway and downstream services.',
			tests:
				'Includes Jest unit tests and a Dockerized end-to-end flow for validating the reservation process.',
			deployment:
				'Configured for production-style deployment with Docker, Kubernetes, Helm, AWS EKS, Amazon ECR, and AWS CodeBuild.',
			whyItMatters:
				'Shows backend-heavy full-stack engineering with microservices, payments, authentication, testing, CI/CD, and cloud deployment concerns.',
		},
		github: 'https://github.com/yacineak97/staybit',
	},
	{
		title: 'AuthVault — Secure JWT Authentication Platform',
		image: AUTHVAULT,
		alt: 'AuthVault secure JWT authentication platform',
		stack:
			'Go · Gin · React · TypeScript · PostgreSQL · JWT · HttpOnly Cookies · React Router',
		summary:
			'A full-stack authentication system focused on secure session handling with short-lived access tokens, HttpOnly refresh cookies, protected routes, and silent refresh.',
		highlights: [
			'Built registration, login, logout, protected routes, persistent sessions, and silent refresh.',
			'Stored access tokens in memory and refresh tokens in secure HttpOnly cookies.',
			'Implemented bcrypt hashing, CORS handling, backend validation, and frontend auth context.',
		],
		details: {
			problem:
				'Many authentication demos store tokens insecurely or only implement a basic login flow. This project focuses on a more realistic authentication pattern.',
			architecture:
				'The Go/Gin backend issues short-lived JWT access tokens and refresh tokens stored in HttpOnly cookies. The React frontend keeps access tokens in memory and uses Axios interceptors to refresh sessions automatically.',
			role: 'I implemented the backend API, JWT generation and validation, password hashing, secure cookie handling, React auth context, protected routes, and silent refresh flow.',
			hardestDecision:
				'Designing a token flow that survives page refreshes without storing sensitive refresh tokens in localStorage.',
			tests:
				'The project includes validation on both client and server. Automated test coverage is not clearly documented yet.',
			deployment:
				'Runs locally with HTTPS support. A public production deployment is not currently documented.',
			whyItMatters:
				'Shows security-focused full-stack thinking around JWT, cookies, protected routes, CORS, refresh tokens, and session management.',
		},
		github: 'https://github.com/yacineak97/AuthVault',
	},
	{
		title: 'Wikipedia Search Engine',
		image: WIKISEARCH,
		alt: 'Wikipedia search engine',
		stack: 'Java · Python · Flask · TF-IDF · PageRank · WAND · HTML · CSS',
		summary:
			'A custom search engine that processes Wikipedia data, builds ranking signals, and serves ranked results through a Flask web interface.',
		highlights: [
			'Built a preprocessing pipeline for Wikipedia XML parsing, corpus generation, and index preparation.',
			'Implemented ranking logic using TF-IDF, PageRank, lemmatization, and WAND query processing.',
			'Created a Flask search interface for submitting queries and displaying ranked results.',
		],
		details: {
			problem:
				'Search engines require efficient indexing, ranking, and query processing. This project explores how search works beyond simply calling an external API.',
			architecture:
				'Java handles XML parsing, corpus construction, and PageRank computation. Python handles TF-IDF, lemmatization, and query optimization data. Flask exposes the web search interface.',
			role: 'I implemented the preprocessing pipeline, ranking workflow, search server, and user-facing query interface.',
			hardestDecision:
				'Separating heavy preprocessing from query-time retrieval so search results could be returned faster.',
			tests:
				'The repository documents execution screenshots and pipeline runs. Formal automated tests are not clearly documented.',
			deployment:
				'Runs locally as a Flask application. A public live deployment is not currently documented.',
			whyItMatters:
				'Demonstrates algorithmic backend knowledge in information retrieval, ranking, indexing, PageRank, TF-IDF, and query optimization.',
		},
		github: 'https://github.com/yacineak97/wikipedia-search-engine',
	},
	{
		title: 'Peer-to-Peer Merkle Tree Synchronization System',
		image: P2P,
		alt: 'Peer-to-peer Merkle tree synchronization system',
		stack: 'Go · UDP · HTTP · SHA-256 · ECDSA · Merkle Trees · IPv4 · IPv6',
		summary:
			'A low-level distributed systems project where peers discover each other, compare Merkle tree roots, and synchronize missing data over UDP.',
		highlights: [
			'Implemented a discovery server and peer clients with HTTP registration and UDP communication.',
			'Used Merkle tree roots to detect missing data without re-downloading the full dataset.',
			'Added SHA-256 hashing, ECDSA signature verification, and IPv4/IPv6 socket support.',
		],
		details: {
			problem:
				'Distributed systems need efficient ways to synchronize data between peers while verifying integrity and authenticity.',
			architecture:
				'The system includes a central discovery server and multiple peers. Peers register, discover each other, exchange UDP messages, compare Merkle roots, request missing data, and verify signed messages.',
			role: 'I implemented peer registration, the discovery server, UDP message handling, Merkle synchronization logic, hashing, signature generation and verification, and IPv4/IPv6 support.',
			hardestDecision:
				'Designing the synchronization protocol so peers could detect differences using hashes instead of transferring all data.',
			tests:
				'The project documents a manual test flow with one server and multiple clients. Formal automated tests are not currently documented.',
			deployment:
				'Runs locally as a server/client networking system. Public deployment is not expected because this is a protocol-level project.',
			whyItMatters:
				'Shows practical knowledge of distributed systems, low-level networking, UDP communication, data integrity, cryptography, and protocol design.',
		},
		github: 'https://github.com/yacineak97/peer_to_peer',
	},
	{
		title: 'CineVault — Movie Catalogue & Admin Dashboard',
		image: CINEVAULT,
		alt: 'CineVault movie catalogue and admin dashboard',
		stack:
			'Meteor · React · TypeScript · MongoDB · Tailwind CSS · React Router · Meteor Accounts',
		summary:
			'A full-stack movie catalogue with authentication, admin-only content management, search, filtering, sorting, image upload, and reactive UI updates.',
		highlights: [
			'Built browsing, movie details, search by title/director, genre filtering, and sorting.',
			'Implemented admin-only create/delete features with poster images, ratings, genres, and synopses.',
			'Used Meteor publications and useTracker for reactive MongoDB-backed UI updates.',
		],
		details: {
			problem:
				'A useful movie catalogue needs authentication, content management, search, filtering, sorting, and reactive UI updates.',
			architecture:
				'Meteor 3 powers the full-stack app, React and TypeScript build the UI, MongoDB stores movie data, and Meteor methods enforce admin-only write operations.',
			role: 'I implemented the full-stack structure, MongoDB collection model, authentication flow, admin dashboard, film CRUD operations, reactive UI, search/filter/sort features, and responsive layout.',
			hardestDecision:
				'Keeping the project simple by storing poster images directly in MongoDB instead of adding external file storage infrastructure.',
			tests:
				'The project documents a Meteor/Mocha test command, but detailed test coverage is not currently described.',
			deployment:
				'A live project link is available, and the repository documents a Meteor Galaxy deployment path.',
			whyItMatters:
				'Shows practical product development with authentication, admin permissions, database-backed content, reactive updates, and polished UI behavior.',
		},
		github: 'https://github.com/yacineak97/cinevault',
		website: 'http://51.20.188.207',
	},
	{
		title: 'Developer Portfolio',
		image: PORTFOLIO,
		alt: 'Developer portfolio website',
		stack: 'React · TypeScript · Vite · CSS · EmailJS · GitHub Pages',
		summary:
			'A responsive personal portfolio built to present my skills, projects, CV, contact information, and technical work in one place.',
		highlights: [
			'Built reusable sections for home, about, skills, projects, CV, and contact.',
			'Added responsive layout, image previews, project links, CV access, and contact form integration.',
			'Deployed publicly with GitHub Pages.',
		],
		details: {
			problem:
				'A developer portfolio needs to communicate technical credibility quickly and make projects easy for recruiters to understand.',
			architecture:
				'The project is a React and TypeScript frontend built with Vite. It uses reusable components for each section and EmailJS for the contact form.',
			role: 'I designed and implemented the UI, responsive layout, project showcase, image preview behavior, contact form integration, and deployment workflow.',
			hardestDecision:
				'Transforming the portfolio from a visual showcase into a recruiter-friendly technical summary.',
			tests: 'Automated tests are not currently documented.',
			deployment: 'Live on GitHub Pages.',
			whyItMatters:
				'This is the entry point for recruiters. Its job is to present my strongest work clearly and make contact easy.',
		},
		github: 'https://github.com/yacineak97/yacineak97.github.io',
		website: 'https://yacineak97.github.io/',
	},
	{
		title: 'Neo4j vs PostgreSQL — Netflix Data Comparison',
		image: NEO4JVSPOSTGRES,
		alt: 'Neo4j vs PostgreSQL Netflix data comparison',
		stack:
			'Neo4j · PostgreSQL · Graph Databases · Relational Databases · Data Modeling',
		summary:
			'A database comparison project exploring how Neo4j and PostgreSQL model and query connected Netflix-related data.',
		highlights: [
			'Compared graph-based and relational approaches to modeling connected data.',
			'Explored relationship-heavy queries and database design trade-offs.',
			'Documented differences between Neo4j and PostgreSQL for the dataset.',
		],
		details: {
			problem:
				'The same dataset can be modeled differently depending on the database type. This project compares relational and graph-based approaches.',
			architecture:
				'The project compares a graph-oriented model in Neo4j with a relational model in PostgreSQL, focusing on relationships, querying, and data organization.',
			role: 'I worked on the database modeling, comparison, and documentation of graph versus relational trade-offs.',
			hardestDecision:
				'Representing connected entities in two different database paradigms while keeping the comparison meaningful.',
			tests:
				'This is currently presented as a report/documentation-based project. Automated tests or executable source code are not clearly documented.',
			deployment: 'No public application deployment is documented.',
			whyItMatters:
				'Shows database reasoning and the ability to compare technical trade-offs between relational and graph data models.',
		},
		github: 'https://github.com/yacineak97/neo4j-project',
	},
];

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

	const openPreview = (image: string, alt: string) => {
		setPreviewImage({ src: image, alt });
	};

	return (
		<section id='projects'>
			<h5>Selected Work</h5>
			<h2>Projects</h2>

			<div className='container portfolio__container'>
				{projects.map((project) => (
					<article className='portfolio__item' key={project.title}>
						<span className='card__bar' />

						<div
							className='portfolio__item-image'
							role='button'
							tabIndex={0}
							aria-label={`Preview ${project.title}`}
							onClick={() => openPreview(project.image, project.alt)}
							onKeyDown={(event) => {
								if (event.key === 'Enter' || event.key === ' ') {
									event.preventDefault();
									openPreview(project.image, project.alt);
								}
							}}
						>
							<img src={project.image} alt={project.alt} />
						</div>

						<h3>{project.title}</h3>

						<small className='text-light portfolio__item-stack'>
							{project.stack}
						</small>

						<p className='portfolio__item-summary'>{project.summary}</p>

						<ul className='portfolio__item-highlights'>
							{project.highlights.map((highlight) => (
								<li key={highlight}>{highlight}</li>
							))}
						</ul>

						<details className='portfolio__item-details'>
							<summary>View project details</summary>

							<div className='portfolio__item-details-content'>
								<p>
									<b>Problem:</b> {project.details.problem}
								</p>
								<p>
									<b>Architecture:</b> {project.details.architecture}
								</p>
								<p>
									<b>My role:</b> {project.details.role}
								</p>
								<p>
									<b>Hardest technical decision:</b>{' '}
									{project.details.hardestDecision}
								</p>
								<p>
									<b>Testing:</b> {project.details.tests}
								</p>
								<p>
									<b>Deployment:</b> {project.details.deployment}
								</p>
								<p>
									<b>Why it matters:</b> {project.details.whyItMatters}
								</p>
							</div>
						</details>

						<div className='portfolio__item-cta'>
							<a
								href={project.github}
								target='_blank'
								rel='noopener noreferrer'
								className='btn'
							>
								GitHub
							</a>

							{project.website && (
								<a
									href={project.website}
									target='_blank'
									rel='noopener noreferrer'
									className='btn btn-primary'
								>
									Visit Website
								</a>
							)}
						</div>
					</article>
				))}
			</div>

			{previewImage && (
				<div
					className='image-preview'
					role='dialog'
					aria-modal='true'
					aria-label={previewImage.alt}
					onClick={() => setPreviewImage(null)}
				>
					<button
						type='button'
						className='image-preview__close'
						aria-label='Close image preview'
						onClick={() => setPreviewImage(null)}
					>
						×
					</button>

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
