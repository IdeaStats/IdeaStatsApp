// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iKm2w5zQkVZvuqT51PP4Eo
// Component: Fs5OtDdX5n

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
import sty from "./PlasmicGenerateButton.module.css"; // plasmic-import: Fs5OtDdX5n/css

export type PlasmicGenerateButton__VariantMembers = {};
export type PlasmicGenerateButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicGenerateButton__VariantsArgs;
export const PlasmicGenerateButton__VariantProps = new Array<VariantPropType>();

export type PlasmicGenerateButton__ArgsType = {};
type ArgPropType = keyof PlasmicGenerateButton__ArgsType;
export const PlasmicGenerateButton__ArgProps = new Array<ArgPropType>();

export type PlasmicGenerateButton__OverridesType = {
  root?: p.Flex<"button">;
};

export interface DefaultGenerateButtonProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicGenerateButton__RenderFunc(props: {
  variants: PlasmicGenerateButton__VariantsArgs;
  args: PlasmicGenerateButton__ArgsType;
  overrides: PlasmicGenerateButton__OverridesType;
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
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
      onClick={async event => {
        const $steps = {};
        $steps["goToChooseTemplate"] = true
          ? (() => {
              const actionArgs = {
                destination: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "navigation",
                    interactionUuid: "vNaW8xJJw",
                    componentUuid: "Fs5OtDdX5n",
                    argName: "destination"
                  },
                  () => `/choose-template`
                )
              };
              return __wrapUserFunction(
                {
                  type: "InteractionLoc",
                  actionName: "navigation",
                  interactionUuid: "vNaW8xJJw",
                  componentUuid: "Fs5OtDdX5n"
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
          typeof $steps["goToChooseTemplate"] === "object" &&
          typeof $steps["goToChooseTemplate"].then === "function"
        ) {
          $steps["goToChooseTemplate"] = await __wrapUserPromise(
            {
              type: "InteractionLoc",
              actionName: "navigation",
              interactionUuid: "vNaW8xJJw",
              componentUuid: "Fs5OtDdX5n"
            },
            $steps["goToChooseTemplate"]
          );
        }
      }}
    >
      {"Generate"}
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
  PlasmicGenerateButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGenerateButton__VariantsArgs;
    args?: PlasmicGenerateButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGenerateButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicGenerateButton__ArgsType,
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
          internalArgPropNames: PlasmicGenerateButton__ArgProps,
          internalVariantPropNames: PlasmicGenerateButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicGenerateButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGenerateButton";
  } else {
    func.displayName = `PlasmicGenerateButton.${nodeName}`;
  }
  return func;
}

export const PlasmicGenerateButton = Object.assign(
  // Top-level PlasmicGenerateButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicGenerateButton
    internalVariantProps: PlasmicGenerateButton__VariantProps,
    internalArgProps: PlasmicGenerateButton__ArgProps
  }
);

export default PlasmicGenerateButton;
/* prettier-ignore-end */
