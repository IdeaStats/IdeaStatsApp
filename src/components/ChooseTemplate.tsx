// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicChooseTemplate,
  DefaultChooseTemplateProps
} from "./plasmic/idea_stats_v_1/PlasmicChooseTemplate";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import AdTemplate1 from "./AdTemplate1";
import AdTemplate from "./AdTemplate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface ChooseTemplateProps extends Omit<DefaultChooseTemplateProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultChooseTemplateProps altogether and have
// total control over the props for your component.
export interface ChooseTemplateProps extends DefaultChooseTemplateProps {}

function ChooseTemplate_(
  props: ChooseTemplateProps,
  ref: HTMLElementRefOf<"div">
) {
  // Use PlasmicChooseTemplate to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicChooseTemplate are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all ChooseTemplateProps here, but feel free
  // to do whatever works for you.

  let navigate = useNavigate();

  const [ad_1_selected, setAd1] = useState(false);
  const [ad_2_selected, setAd2] = useState(false);
  const [ad_3_selected, setAd3] = useState(false);

  function DeselectAllTemplates(){
    setAd1(false);
    setAd2(false);
    setAd3(false);
  }
  

  return (
    <PlasmicChooseTemplate 
      root={{ ref }} 
      child1 ={
        <AdTemplate 
          selected={ad_1_selected}

          onClick={ () => {
            DeselectAllTemplates();
            setAd1(true);
            
          }}
           
          children={<AdTemplate1 />} 
        />
      }
      
      child2 ={
        <AdTemplate 
          selected={ad_2_selected}
          onClick={ () => {
            DeselectAllTemplates();
            setAd2(true);
          }} 
          children={ <AdTemplate1 /> } 
        />
      }

      child3 ={
        <AdTemplate 
          selected={ad_3_selected}
          onClick={ () => {
            DeselectAllTemplates();
            setAd3(true);
          }} 
          children={ <AdTemplate1 /> } 
        />
      }

      selectTemplate={{
        onClick: () => {
          navigate("/ad-prompt-2");
        }
      }}

      {...props} 
    />);
}

const ChooseTemplate = React.forwardRef(ChooseTemplate_);
export default ChooseTemplate;
