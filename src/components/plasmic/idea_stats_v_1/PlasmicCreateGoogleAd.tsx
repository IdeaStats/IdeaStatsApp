// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iKm2w5zQkVZvuqT51PP4Eo
// Component: zjXR6j2rv6

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
import Select from "../../Select"; // plasmic-import: AoV4HBbmR-X/component
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: pTzGlMptTxd/codeComponent
import { inputHelpers as AntdTextArea_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: pTzGlMptTxd/codeComponentHelper

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_idea_stats_v_1.module.css"; // plasmic-import: iKm2w5zQkVZvuqT51PP4Eo/projectcss
import sty from "./PlasmicCreateGoogleAd.module.css"; // plasmic-import: zjXR6j2rv6/css

export type PlasmicCreateGoogleAd__VariantMembers = {};
export type PlasmicCreateGoogleAd__VariantsArgs = {};
type VariantPropType = keyof PlasmicCreateGoogleAd__VariantsArgs;
export const PlasmicCreateGoogleAd__VariantProps = new Array<VariantPropType>();

export type PlasmicCreateGoogleAd__ArgsType = {};
type ArgPropType = keyof PlasmicCreateGoogleAd__ArgsType;
export const PlasmicCreateGoogleAd__ArgProps = new Array<ArgPropType>();

export type PlasmicCreateGoogleAd__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  select?: p.Flex<typeof Select>;
  select2?: p.Flex<typeof Select>;
  textArea?: p.Flex<typeof AntdTextArea>;
};

export interface DefaultCreateGoogleAdProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicCreateGoogleAd__RenderFunc(props: {
  variants: PlasmicCreateGoogleAd__VariantsArgs;
  args: PlasmicCreateGoogleAd__ArgsType;
  overrides: PlasmicCreateGoogleAd__OverridesType;
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "select2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "textArea.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <React.Fragment>
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
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <Select
            data-plasmic-name={"select"}
            data-plasmic-override={overrides.select}
            className={classNames("__wab_instance", sty.select)}
            onChange={(...eventArgs) => {
              p.generateStateOnChangeProp($state, ["select", "value"])(
                eventArgs[0]
              );
            }}
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" }
            ]}
            placeholder={"Select campaign type..."}
            value={p.generateStateValueProp($state, ["select", "value"])}
          />

          <Select
            data-plasmic-name={"select2"}
            data-plasmic-override={overrides.select2}
            className={classNames("__wab_instance", sty.select2)}
            onChange={(...eventArgs) => {
              p.generateStateOnChangeProp($state, ["select2", "value"])(
                eventArgs[0]
              );
            }}
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" }
            ]}
            placeholder={"Select Location..."}
            value={p.generateStateValueProp($state, ["select2", "value"])}
          />

          {(() => {
            const child$Props = {
              className: classNames("__wab_instance", sty.textArea),
              onChange: p.generateStateOnChangePropForCodeComponents(
                $state,
                "value",
                ["textArea", "value"],
                AntdTextArea_Helpers
              ),
              placholder: "Enter relevant keywords..." as const,
              value: p.generateStateValueProp($state, ["textArea", "value"])
            };
            p.initializeCodeComponentStates(
              $state,
              [
                {
                  name: "value",
                  plasmicStateName: "textArea.value"
                }
              ],
              [],
              AntdTextArea_Helpers ?? {},
              child$Props
            );

            return (
              <AntdTextArea
                data-plasmic-name={"textArea"}
                data-plasmic-override={overrides.textArea}
                {...child$Props}
              />
            );
          })()}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "select", "select2", "textArea"],
  freeBox: ["freeBox", "select", "select2", "textArea"],
  select: ["select"],
  select2: ["select2"],
  textArea: ["textArea"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  select: typeof Select;
  select2: typeof Select;
  textArea: typeof AntdTextArea;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCreateGoogleAd__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCreateGoogleAd__VariantsArgs;
    args?: PlasmicCreateGoogleAd__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCreateGoogleAd__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCreateGoogleAd__ArgsType,
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
          internalArgPropNames: PlasmicCreateGoogleAd__ArgProps,
          internalVariantPropNames: PlasmicCreateGoogleAd__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCreateGoogleAd__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCreateGoogleAd";
  } else {
    func.displayName = `PlasmicCreateGoogleAd.${nodeName}`;
  }
  return func;
}

export const PlasmicCreateGoogleAd = Object.assign(
  // Top-level PlasmicCreateGoogleAd renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    select: makeNodeComponent("select"),
    select2: makeNodeComponent("select2"),
    textArea: makeNodeComponent("textArea"),

    // Metadata about props expected for PlasmicCreateGoogleAd
    internalVariantProps: PlasmicCreateGoogleAd__VariantProps,
    internalArgProps: PlasmicCreateGoogleAd__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCreateGoogleAd;
/* prettier-ignore-end */