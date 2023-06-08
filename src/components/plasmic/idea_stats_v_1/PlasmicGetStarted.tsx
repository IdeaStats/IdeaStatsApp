// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iKm2w5zQkVZvuqT51PP4Eo
// Component: OXgNvGfpFJH

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import GenericButton from "../../GenericButton"; // plasmic-import: rRlSjYLvCT/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_idea_stats_v_1.module.css"; // plasmic-import: iKm2w5zQkVZvuqT51PP4Eo/projectcss
import sty from "./PlasmicGetStarted.module.css"; // plasmic-import: OXgNvGfpFJH/css

export type PlasmicGetStarted__VariantMembers = {};
export type PlasmicGetStarted__VariantsArgs = {};
type VariantPropType = keyof PlasmicGetStarted__VariantsArgs;
export const PlasmicGetStarted__VariantProps = new Array<VariantPropType>();

export type PlasmicGetStarted__ArgsType = {};
type ArgPropType = keyof PlasmicGetStarted__ArgsType;
export const PlasmicGetStarted__ArgProps = new Array<ArgPropType>();

export type PlasmicGetStarted__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  genericButton?: p.Flex<typeof GenericButton>;
  text?: p.Flex<"div">;
};

export interface DefaultGetStartedProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicGetStarted__RenderFunc(props: {
  variants: PlasmicGetStarted__VariantsArgs;
  args: PlasmicGetStarted__ArgsType;
  overrides: PlasmicGetStarted__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          {true ? (
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                {"Lets Validate Your Idea!"}
              </h1>
              <GenericButton
                data-plasmic-name={"genericButton"}
                data-plasmic-override={overrides.genericButton}
                className={classNames("__wab_instance", sty.genericButton)}
              >
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"Get Started"}
                </div>
              </GenericButton>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "h1", "genericButton", "text"],
  freeBox: ["freeBox", "h1", "genericButton", "text"],
  h1: ["h1"],
  genericButton: ["genericButton", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  h1: "h1";
  genericButton: typeof GenericButton;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGetStarted__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGetStarted__VariantsArgs;
    args?: PlasmicGetStarted__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGetStarted__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicGetStarted__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicGetStarted__ArgProps,
          internalVariantPropNames: PlasmicGetStarted__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicGetStarted__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGetStarted";
  } else {
    func.displayName = `PlasmicGetStarted.${nodeName}`;
  }
  return func;
}

export const PlasmicGetStarted = Object.assign(
  // Top-level PlasmicGetStarted renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    h1: makeNodeComponent("h1"),
    genericButton: makeNodeComponent("genericButton"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicGetStarted
    internalVariantProps: PlasmicGetStarted__VariantProps,
    internalArgProps: PlasmicGetStarted__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicGetStarted;
/* prettier-ignore-end */