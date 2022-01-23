import { getImage } from "../assets/images";

const WelcomeMsg = () => {
	return (
		<section class='pt-5 pb-5' id='about'>
			<div class='container'>
				<div class='row justify-content-center'>
					<div class='col-12 col-md-8 text-center'>
						<div class='row justify-content-center pb-4'>
							<div class='col-4 col-sm-4 col-md-4'>
								<img
									alt='Portrait'
									class='rounded-circle img-fluid'
									src={getImage("portrait")}
								></img>
							</div>
						</div>
						<p className='lead'>
							I am a Greater Manchester-based software Engineer
							who has trained at both Northcoders and Manchester
							Metropolitan University.
						</p>
					</div>
				</div>
			</div>
			<hr />
		</section>
	);
};

export default WelcomeMsg;
