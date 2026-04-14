import {motion} from "framer-motion";

const Contact = () => {
	return (
		<div
			id="contact"
			className="min-h-screen flex items-center justify-center bg-linear-to-b from-black via-gray-900 to-black text-white px-6">
			<motion.div
				initial={{opacity: 0, x: -50}}
				animate={{opacity: 1, x: 0}}
				transition={{duration: 1}}
				className="grid lg:grid-cols-2 gap-8">
				{/* ADDRESS  */}
				<div className="w-full max-w-3xl lg:max-w-5xl bg-gray=900 p-6 rounded-2xl shadow-lg">
					<h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-yellow-200 via-yellow-500 to-yellow-200 mb-6">
						Get In Touch
					</h2>
				</div>
			</motion.div>
		</div>
	);
};

export default Contact;
