import './projects.css';
import WIKISEARCH from '../../assets/wikisearch.png';
import PORTFOLIO from '../../assets/portfolio.png';
import neo4jVsPostgres from '../../assets/neo4j-vs-postgres.png';

const Projects = () => {
	return (
		<section id='projects'>
			<h5>My Recent Works</h5>
			<h2>Projects</h2>

			<div className='container portfolio__container'>
				<article className='portfolio__item'>
					<span className='card__bar' />
					<div className='portfolio__item-image'>
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
					<div className='portfolio__item-image'>
						<img src={PORTFOLIO} alt='My Portfolio' />
					</div>

					<h3>My Portfolio</h3>

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
					<div className='portfolio__item-image'>
						<img src={neo4jVsPostgres} alt='Neo4j vs PostgreSQL' />
					</div>

					<h3>
						Implementation and Comparison of Neo4j vs PostgreSQL on Netflix Data
					</h3>

					<small className='text-light'>Neo4j | PostgreSQL</small>

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
		</section>
	);
};

export default Projects;
