import "./singleProject.css";
import classnames from "classnames";

const SingleProject = ({
	style,
	projectTitle,
	projectText,
	siteLink,
	codeLink,
	imgLink1,
	imgLink2
}) => {
	const projectStyles = classnames(
		"singleProject",
		style === "reverse" && "reverse"
	);

	return (
		<div className={projectStyles}>
			<div className='singleProject__details'>
				<h1 className='singleProject__projectTitle'>{projectTitle}</h1>
				<p class='singleProject__projectText'>{projectText}</p>
				<div className='singleProject__projectLinks'>
					<a class='btn mt-3 mb-3 disabled' href={siteLink}>
						View Site
					</a>
					<a class='btn mt-3 mb-3 disabled' href={codeLink}>
						View Code
					</a>
				</div>
			</div>
			<div class='singleProject__images'>
				<img
					className='singleProject__image'
					alt='Song Quiz Figma'
					src={imgLink1}
				/>
				<img
					className='singleProject__image'
					alt='Song Quiz Screenshot'
					src={imgLink2}
				/>
			</div>
		</div>
	);
};

export default SingleProject;
