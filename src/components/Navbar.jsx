const Navbar = () => {
	return (
		<div>
			<div>
				{/* Logo */}
				<div className="flex py-4 px-3 space-x-2 text-3xl font-bold uppercase">
					<img
						src="/src/assets/logo.webp"
						alt="Iron Asylum Logo"
						className="w-10"
					/>
					<span className="text-red-600">Iron</span>
					<span className="text-neutral-950">Asylum</span>
				</div>
				
			</div>
		</div>
	);
};

export default Navbar;
