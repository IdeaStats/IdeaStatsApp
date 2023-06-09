// import { Location } from "react-router";

export function getAdImg(location: any, defaultImgSrc?: String | undefined){
    let adImgSrc = process.env.REACT_APP_DEFAULT_AD_IMG;
    if (location.state && "adImgSrc" in location.state) {
        adImgSrc =  location.state.adImgSrc;
    }
    return adImgSrc;
}

export function renderTemplate1(templateData: any){
    return {
        adImgSrc: templateData.adImgSrc, 

        // Customization in template.
        title: <h2 className="plasmic_idea_stats_v_1_all__vC+pC plasmic_idea_stats_v_1_h2__TiAPZ PlasmicAdPromptSelected_h2__xlLfB">{templateData.title}</h2>,
        body: <div className="plasmic_idea_stats_v_1_all__vC+pC PlasmicAdPromptSelected_text__edznr__A+5F-">{templateData.body}</div>,
        callToAction: templateData.callToAction
        
    }
}
