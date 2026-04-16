import {motion} from "framer-motion";
import {LuMapPin} from "react-icons/lu";
import {IoIosMail} from "react-icons/io";
import {FaPhone} from "react-icons/fa";

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
				{/* CONTACT DETAILS */}
				<div className="w-full max-w-3xl lg:max-w-5xl bg-gray-900 p-6 rounded-2xl shadow-lg space-y-6">
					<h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-yellow-200 via-yellow-500 to-yellow-200 mb-6">
						Get In Touch
					</h2>
					{/* Address */}
					<div className="flex items-center space-x-3">
						<LuMapPin className="w-6 h-6 text-yellow-500" />
						<p className="text-lg font-medium">
							7428 Ironclad Avenue, Austin, TX 78741
						</p>
					</div>
					{/* Phone */}
					<div className="flex items-center space-x-3">
						<FaPhone className="w-6 h-6 text-yellow-500" />
						<p className="text-lg font-medium">(512) 555-7843</p>
					</div>
					{/* Email */}
					<div className="flex items-center space-x-3">
						<IoIosMail className="w-6 h-6 text-yellow-500" />
						<p className="text-lg font-medium">info@ironasylum.com</p>
					</div>
				</div>
				{/* CONTACT FORM */}
				<motion.form
					initial={{opacity: 0, x: 50}}
					animate={{opacity: 1, x: 0}}
					transition={{duration: 1}}
					className="bg-gray-900 p-6 rounded-2xl space-y-6">
					<h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-yellow-200 via-yellow-500 to-yellow-200 mb-4">
						Contact Us
					</h2>
					{/* Name */}
					<div>
						<label className="block text-sm font-medium mb-2">Your Name</label>
						<input
							type="text"
							name="name"
							placeholder="Enter Your Name"
							className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
						/>
					</div>
					{/* Email */}
					<div>
						<label className="block text-sm font-medium mb-2">Email</label>
						<input
							type="email"
							name="email"
							placeholder="Enter Your Email"
							className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
						/>
					</div>
					{/* Message */}
					<div>
						<label className="block text-sm font-medium mb-2">
							Your Message
						</label>
						<textarea
							rows={4}
							placeholder="Enter Your Message"
							className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"></textarea>
					</div>
					{/* Submit Btn */}
					<button
						type="submit"
						className="w-full p-3 rounded-xl text-black uppercase font-bold tracking-wider text-2xl bg-linear-to-r from-yellow-200 via-yellow-500 to-yellow-200 cursor-pointer hover:opacity-90 transition">
						Submit
					</button>
				</motion.form>
			</motion.div>
		</div>
	);
};

export default Contact;
