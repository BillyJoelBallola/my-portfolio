import React from "react";

const Header = () => {
	return (
		<>
			<section className="mx-auto w-[90%] md:w-[60%] lg:w-[40%] h-screen text-center grid place-items-center">
				<div>
					<div className="mb-8">
						<h1
							className="font-bold text-7xl tracking-widest"
							data-aos="fade-up">
							<span className="styled-text">BILLY</span> JOEL
						</h1>
						<h2
							className="font-semibold text-lg text-orange-500 dark:text-sky-500"
							data-aos="fade-up">
							ASPIRING FRONT-END DEVELOPER
						</h2>
					</div>
					<div>
						<p data-aos="fade-up">
							Hi I am Billy Joel Ballola, currently, I am 4th-year college at Laguna
							State Polytechnique University taking Bachelor of Science in
							Information Technology. My interest in programming started when I
							got to college. Now I want to be a web developer focused in
							client-side programming.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
