// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iKm2w5zQkVZvuqT51PP4Eo
// Component: 59BY5_2uYqZ

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
import AdTemplate1 from "../../AdTemplate1"; // plasmic-import: mz5eL8luPc/component
import GenericButton from "../../GenericButton"; // plasmic-import: rRlSjYLvCT/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_idea_stats_v_1.module.css"; // plasmic-import: iKm2w5zQkVZvuqT51PP4Eo/projectcss
import sty from "./PlasmicFinishedAd.module.css"; // plasmic-import: 59BY5_2uYqZ/css

export type PlasmicFinishedAd__VariantMembers = {};
export type PlasmicFinishedAd__VariantsArgs = {};
type VariantPropType = keyof PlasmicFinishedAd__VariantsArgs;
export const PlasmicFinishedAd__VariantProps = new Array<VariantPropType>();

export type PlasmicFinishedAd__ArgsType = {};
type ArgPropType = keyof PlasmicFinishedAd__ArgsType;
export const PlasmicFinishedAd__ArgProps = new Array<ArgPropType>();

export type PlasmicFinishedAd__OverridesType = {
  root?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  finalAdTemplate?: p.Flex<typeof AdTemplate1>;
};

export interface DefaultFinishedAdProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicFinishedAd__RenderFunc(props: {
  variants: PlasmicFinishedAd__VariantsArgs;
  args: PlasmicFinishedAd__ArgsType;
  overrides: PlasmicFinishedAd__OverridesType;
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
            <div className={classNames(projectcss.all, sty.freeBox__kQid)}>
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
                {"Publish & Share your Ad"}
              </h1>
              <AdTemplate1
                data-plasmic-name={"finalAdTemplate"}
                data-plasmic-override={overrides.finalAdTemplate}
                className={classNames("__wab_instance", sty.finalAdTemplate)}
              />

              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__b3Fg9)}
                >
                  <GenericButton
                    className={classNames(
                      "__wab_instance",
                      sty.genericButton__wbtuI
                    )}
                  >
                    {"Download"}
                  </GenericButton>
                  <GenericButton
                    className={classNames(
                      "__wab_instance",
                      sty.genericButton__qhmO2
                    )}
                  >
                    {"Share"}
                  </GenericButton>
                </p.Stack>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "finalAdTemplate"],
  h1: ["h1"],
  finalAdTemplate: ["finalAdTemplate"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  finalAdTemplate: typeof AdTemplate1;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFinishedAd__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFinishedAd__VariantsArgs;
    args?: PlasmicFinishedAd__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFinishedAd__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFinishedAd__ArgsType,
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
          internalArgPropNames: PlasmicFinishedAd__ArgProps,
          internalVariantPropNames: PlasmicFinishedAd__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFinishedAd__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFinishedAd";
  } else {
    func.displayName = `PlasmicFinishedAd.${nodeName}`;
  }
  return func;
}

export const PlasmicFinishedAd = Object.assign(
  // Top-level PlasmicFinishedAd renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    finalAdTemplate: makeNodeComponent("finalAdTemplate"),

    // Metadata about props expected for PlasmicFinishedAd
    internalVariantProps: PlasmicFinishedAd__VariantProps,
    internalArgProps: PlasmicFinishedAd__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicFinishedAd;
/* prettier-ignore-end */
