import { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();

		const loading = toast.loading('Sending your message...');

		if (!form.current) return;

		console.log('EMAILJS KEY:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
		console.log('EMAILJS KEY:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
		console.log('EMAILJS KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
		console.log('EMAILJS KEY:', import.meta.env);

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			)
			.then(() => {
				toast.success('Message sent successfully!', { id: loading });
				form.current?.reset();
			})
			.catch(() => {
				toast.error('Something went wrong, please try again.', { id: loading });
			});
	};

	return (
		<section id='contact'>
			<Toaster position='top-right' />

			<h5>Get in touch</h5>
			<h2>Contact Me</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>yacine.akli97@gmail.com</h5>
						<a href='mailto:yacine.akli97@gmail.com'>Send a message</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input type='email' name='email' placeholder='Your Email' required />
					<textarea
						name='message'
						rows={7}
						placeholder='Your Message'
						required
					/>

					<button type='submit' className='btn btn-primary'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
