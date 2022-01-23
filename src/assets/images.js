import gamervilleGIF from "./imgs/Gamerville/GamervilleGIF.gif";
import gamervilleFigma from "./imgs/Gamerville/GamervilleFigma.png";
import gamervilleHome from "./imgs/Gamerville/GamervilleHome.png";
import scratchPostPlan from "./imgs/ScratchPost/scratchPostPlan.jpg";
import scratchPostGIF from "./imgs/ScratchPost/scratchPostGIF.gif";
import melodiaFigma from "./imgs/Melodia/SongAppFigma.png";
import screenSearchGIF from "./imgs/ScreenSearch/screenSearch.gif";
import screenSearchFigma from "./imgs/ScreenSearch/screenSearchFigma.png";
import portrait from "./imgs/portraitPhoto.jpg";

const images = {
	gamervilleGIF,
	gamervilleFigma,
	gamervilleHome,
	scratchPostPlan,
	scratchPostGIF,
	melodiaFigma,
	screenSearchGIF,
	screenSearchFigma,
	portrait
};

export const getImage = (imageName) => {
	const image = images[imageName];
	return image;
};
