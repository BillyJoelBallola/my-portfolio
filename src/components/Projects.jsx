import React from "react";
import projects from "../data/projects";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
	return (
		<>
			<section className="w-[94%] mx-auto md:w-[90%] lg:w-[75%]">
				<div className="grid place-items-center">
					<div className="text-center mb-8 w-auto md:w-[50%] mx-auto">
						<h2 className="font-semibold text-lg mb-2" data-aos="fade-up">
							PROJECTS
						</h2>
						<p data-aos="fade-up">
							These are some of the personal projects that I built to practice
							my skills using different script and programming languages.
						</p>
					</div>
					<div className="flex flex-wrap items-center gap-5 justify-evenly">
						{projects.map((project, index) => (
							<div
								data-aos="zoom-out-up"
								className="w-[300px] shadow-lg rounded-lg overflow-hidden"
								key={index}>
								<div>
									<img src={project.image} alt="project-images" />
								</div>
								<div className="p-3 bg-white dark:bg-slate-700">
									<h5 className="font-semibold mb-2">{project.title}</h5>
									<div className="flex flex-wrap items-center gap-2">
										{project.tags.map((tag, index) => (
											<div
												key={index}
												className="font-semibold bg-gray-100 text-slate-800 dark:bg-slate-600 dark:text-slate-100 py-1 px-2 rounded-lg shadow-lg cursor-pointer duration-200 ease-in-out hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black">
												{tag}
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
					<div data-aos="fade-up" className="mt-14">
						<a href="https://github.com/BillyJoelBallola" target="_blank" rel="noreferrer" className="mx-auto border-2 border-orange-500 text-orange-500 dark:border-sky-500 rounded-full p-2 px-4 cursor-pointer dark:text-sky-500 hover:bg-orange-500 dark:hover:bg-sky-500 hover:text-white dark:hover:text-white duration-150 shadow-md flex gap-2">
							<AiFillGithub className="w-6 h-6"/>
							See More Projects
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Projects;
