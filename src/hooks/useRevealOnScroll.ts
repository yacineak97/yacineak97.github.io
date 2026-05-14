import { useEffect } from 'react';

export const useRevealOnScroll = (selector: string, threshold = 0.2) => {
	useEffect(() => {
		const elements = document.querySelectorAll<HTMLElement>(selector);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					} else {
						entry.target.classList.remove('visible');
					}
				}
			},
			{
				threshold,
				rootMargin: '0px 0px -15% 0px',
			},
		);

		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, [selector, threshold]);
};
