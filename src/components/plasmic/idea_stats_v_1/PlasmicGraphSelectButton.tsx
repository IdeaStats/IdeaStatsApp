// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iKm2w5zQkVZvuqT51PP4Eo
// Component: gnVJgCSe6k

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_idea_stats_v_1.module.css"; // plasmic-import: iKm2w5zQkVZvuqT51PP4Eo/projectcss
import sty from "./PlasmicGraphSelectButton.module.css"; // plasmic-import: gnVJgCSe6k/css

export type PlasmicGraphSelectButton__VariantMembers = {};
export type PlasmicGraphSelectButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicGraphSelectButton__VariantsArgs;
export const PlasmicGraphSelectButton__VariantProps =
  new Array<VariantPropType>();

export type PlasmicGraphSelectButton__ArgsType = {
  dataName?: React.ReactNode;
  dataValue?: React.ReactNode;
};
type ArgPropType = keyof PlasmicGraphSelectButton__ArgsType;
export const PlasmicGraphSelectButton__ArgProps = new Array<ArgPropType>(
  "dataName",
  "dataValue"
);

export type PlasmicGraphSelectButton__OverridesType = {
  root?: p.Flex<"button">;
};

export interface DefaultGraphSelectButtonProps {
  dataName?: React.ReactNode;
  dataValue?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicGraphSelectButton__RenderFunc(props: {
  variants: PlasmicGraphSelectButton__VariantsArgs;
  args: PlasmicGraphSelectButton__ArgsType;
  overrides: PlasmicGraphSelectButton__OverridesType;
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
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
      onClick={async event => {
        const $steps = {};
      }}
    >
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__lWdBr)}>
          {p.renderPlasmicSlot({
            defaultContents: "Impressions",
            value: args.dataName,
            className: classNames(sty.slotTargetDataName)
          })}
          <div className={classNames(projectcss.all, sty.freeBox__lgFhQ)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rz9XR
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#FFFFFF" }}
                    >
                      {"2.5k"}
                    </span>
                  </React.Fragment>
                </div>
              ),
              value: args.dataValue,
              className: classNames(sty.slotTargetDataValue)
            })}
          </div>
        </div>
      ) : null}
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGraphSelectButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGraphSelectButton__VariantsArgs;
    args?: PlasmicGraphSelectButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGraphSelectButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicGraphSelectButton__ArgsType,
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
          internalArgPropNames: PlasmicGraphSelectButton__ArgProps,
          internalVariantPropNames: PlasmicGraphSelectButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicGraphSelectButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGraphSelectButton";
  } else {
    func.displayName = `PlasmicGraphSelectButton.${nodeName}`;
  }
  return func;
}

export const PlasmicGraphSelectButton = Object.assign(
  // Top-level PlasmicGraphSelectButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicGraphSelectButton
    internalVariantProps: PlasmicGraphSelectButton__VariantProps,
    internalArgProps: PlasmicGraphSelectButton__ArgProps
  }
);

export default PlasmicGraphSelectButton;
/* prettier-ignore-end */