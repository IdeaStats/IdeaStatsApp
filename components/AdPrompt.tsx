// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicAdPrompt,
  DefaultAdPromptProps
} from "./plasmic/idea_stats_v_1/PlasmicAdPrompt";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useNavigate } from "react-router-dom";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface AdPromptProps extends Omit<DefaultAdPromptProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultAdPromptProps altogether and have
// total control over the props for your component.
export interface AdPromptProps extends DefaultAdPromptProps {}

function AdPrompt_(props: AdPromptProps, ref: HTMLElementRefOf<"div">) {
  // Use PlasmicAdPrompt to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicAdPrompt are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all AdPromptProps here, but feel free
  // to do whatever works for you.

  let navigate = useNavigate();

  return <PlasmicAdPrompt root={{ ref }} selectButton={{
    onClick: () => {
      navigate("/choose-template")
    }
  }} {...props} />;
}

const AdPrompt = React.forwardRef(AdPrompt_);
export default AdPrompt;
