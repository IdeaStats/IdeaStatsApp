// import { Location } from "react-router";

export function getAdImg(location: any, defaultImgSrc?: String | undefined){
    let adImgSrc = process.env.REACT_APP_DEFAULT_AD_IMG;
    if (location.state && "adImgSrc" in location.state) {
        adImgSrc =  location.state.adImgSrc;
    }
    return adImgSrc;
}
