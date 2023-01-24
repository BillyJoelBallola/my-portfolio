import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<section className="w-[94%] mx-auto md:w-[90%] lg:w-[75%] mt-[100px]">
			<div className="text-center mb-8 w-auto md:w-[50%] mx-auto">
				<h2 className="font-semibold text-lg mb-2" data-aos="fade-up">
					GET IN TOUCH
				</h2>
				<p data-aos="fade-up">
					You can send me message via social media accounts and if about
					bussines, please do contact me throuh my gmail account.{" "}
					<a
						href="mailto:billyjoelballola27@gmail.com"
						className="text-orange-500 dark:text-sky-500 hover:underline">
						billyjoelballola27@gmail.com
					</a>
				</p>
			</div>
			<div className="flex justify-center gap-10">
				<a href="/" className="social-media" data-aos="zoom-in">
					<FaFacebookSquare />
				</a>
				<a href="/" className="social-media" data-aos="zoom-in">
					<FaLinkedin />
				</a>
				<a href="/" className="social-media" data-aos="zoom-in">
					<FaInstagram />
				</a>
			</div>
		</section>
	);
};

export default Footer;
