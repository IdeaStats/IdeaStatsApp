// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iKm2w5zQkVZvuqT51PP4Eo
// Component: rRlSjYLvCT

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
import sty from "./PlasmicGenericButton.module.css"; // plasmic-import: rRlSjYLvCT/css

export type PlasmicGenericButton__VariantMembers = {};
export type PlasmicGenericButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicGenericButton__VariantsArgs;
export const PlasmicGenericButton__VariantProps = new Array<VariantPropType>();

export type PlasmicGenericButton__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicGenericButton__ArgsType;
export const PlasmicGenericButton__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicGenericButton__OverridesType = {
  root?: p.Flex<"button">;
};

export interface DefaultGenericButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicGenericButton__RenderFunc(props: {
  variants: PlasmicGenericButton__VariantsArgs;
  args: PlasmicGenericButton__ArgsType;
  overrides: PlasmicGenericButton__OverridesType;
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
        $steps["goToAdPromptSelected"] = true
          ? (() => {
              const actionArgs = {
                destination: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "navigation",
                    interactionUuid: "jw8yTCqLJ",
                    componentUuid: "rRlSjYLvCT",
                    argName: "destination"
                  },
                  () => `/ad-prompt-2`
                )
              };
              return __wrapUserFunction(
                {
                  type: "InteractionLoc",
                  actionName: "navigation",
                  interactionUuid: "jw8yTCqLJ",
                  componentUuid: "rRlSjYLvCT"
                },
                () =>
                  (({ destination }) => {
                    location.assign(destination);
                  })?.apply(null, [actionArgs]),
                actionArgs
              );
            })()
          : undefined;
        if (
          typeof $steps["goToAdPromptSelected"] === "object" &&
          typeof $steps["goToAdPromptSelected"].then === "function"
        ) {
          $steps["goToAdPromptSelected"] = await __wrapUserPromise(
            {
              type: "InteractionLoc",
              actionName: "navigation",
              interactionUuid: "jw8yTCqLJ",
              componentUuid: "rRlSjYLvCT"
            },
            $steps["goToAdPromptSelected"]
          );
        }
      }}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Generate",
        value: args.children,
        className: classNames(sty.slotTargetChildren)
      })}
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
  PlasmicGenericButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGenericButton__VariantsArgs;
    args?: PlasmicGenericButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGenericButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicGenericButton__ArgsType,
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
          internalArgPropNames: PlasmicGenericButton__ArgProps,
          internalVariantPropNames: PlasmicGenericButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicGenericButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGenericButton";
  } else {
    func.displayName = `PlasmicGenericButton.${nodeName}`;
  }
  return func;
}

export const PlasmicGenericButton = Object.assign(
  // Top-level PlasmicGenericButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicGenericButton
    internalVariantProps: PlasmicGenericButton__VariantProps,
    internalArgProps: PlasmicGenericButton__ArgProps
  }
);

export default PlasmicGenericButton;
/* prettier-ignore-end */
