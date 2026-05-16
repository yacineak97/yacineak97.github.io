import { useEffect, useRef } from 'react';

const FONT = 'Consolas';
const TICK = 70;
const LINES = 40;

const CHARS = [
	'か',
	'き',
	'く',
	'け',
	'こ',
	'さ',
	'し',
	'す',
	'せ',
	'そ',
	'た',
	'ち',
	'つ',
	'て',
	'と',
	'な',
	'に',
	'ぬ',
	'ね',
	'の',
	'は',
	'ひ',
	'ふ',
	'へ',
	'ほ',
	'ま',
	'み',
	'む',
	'め',
	'も',
	'や',
	'ゆ',
	'よ',
	'ら',
	'り',
	'る',
	'れ',
	'ろ',
] as const;

const COLORS = [
	'#cefbe402',
	'#81ec7212',
	'#5cd64613',
	'#54d13c14',
	'#4ccc3215',
	'#81ec7212',
	'#5cd64613',
	'#54d13c14',
	'#4ccc3215',
	'#4ccc3233',
] as const;

type CharItem = {
	v: string;
	c: number;
};

type Line = {
	x: number;
	y: number;
	fs: number;
	cc: number;
	sp: number;
	tu: number;
	ch: CharItem[];
	fo: string;
};

const rand = (a: number, b: number): number =>
	(Math.random() * (b - a) + a) | 0;

const makeChars = (n: number): CharItem[] =>
	Array.from({ length: n }, () => ({
		v: CHARS[(Math.random() * CHARS.length) | 0],
		c: (Math.random() * COLORS.length) | 0,
	}));

const makeLine = (w: number): Line => {
	const fs = rand(18, 54);
	const cc = rand(12, 30);

	return {
		x: rand(0, w),
		y: -(fs * cc),
		fs,
		cc,
		sp: rand(3, 10),
		tu: rand(1, 10),
		ch: makeChars(cc),
		fo: `${fs}px ${FONT}`,
	};
};

export default function CodeBackground() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;

		if (!canvas) return;

		const ctx = canvas.getContext('2d');

		if (!ctx) return;

		let lines: Line[] = [];
		let w = 0;
		let h = 0;
		let last = 0;
		let rafId = 0;

		const setup = (): void => {
			ctx.globalCompositeOperation = 'lighter';
			ctx.textBaseline = 'top';
			ctx.textAlign = 'center';
		};

		const resize = (): void => {
			w = window.innerWidth;
			h = window.innerHeight;

			canvas.width = w;
			canvas.height = h;

			setup();

			lines = Array.from({ length: LINES }, () => makeLine(w));
		};

		const frame = (ts: number): void => {
			rafId = requestAnimationFrame(frame);

			if (ts - last < TICK) return;

			last = ts;

			ctx.clearRect(0, 0, w, h);

			for (let i = 0; i < lines.length; i++) {
				let l = lines[i];

				if (l.y > h + l.fs * l.cc) {
					lines[i] = l = makeLine(w);
				}

				ctx.font = l.fo;

				for (let k = 0; k < l.ch.length; k++) {
					ctx.fillStyle = COLORS[l.ch[k].c];
					ctx.fillText(l.ch[k].v, l.x, l.y + l.fs * k);
				}

				if (--l.tu === 0) {
					l.tu = rand(1, 10);
					l.ch = makeChars(l.cc);
				} else {
					l.y += l.sp;
				}
			}
		};

		resize();

		window.addEventListener('resize', resize);

		rafId = requestAnimationFrame(frame);

		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener('resize', resize);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: -1,
				pointerEvents: 'none',
				willChange: 'transform',
			}}
		/>
	);
}
