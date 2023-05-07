// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iKm2w5zQkVZvuqT51PP4Eo
// Component: shf87k89kA

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
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: TgJFzUZpvQ/codeComponent
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: EYHwZh9ILg/codeComponent
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: Vf5hntD2SZ5/codeComponent
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: Vf5hntD2SZ5/codeComponentHelper
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton"; // plasmic-import: bx9Xzvf5_eu/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_idea_stats_v_1.module.css"; // plasmic-import: iKm2w5zQkVZvuqT51PP4Eo/projectcss
import sty from "./PlasmicTitleForm.module.css"; // plasmic-import: shf87k89kA/css

export type PlasmicTitleForm__VariantMembers = {};
export type PlasmicTitleForm__VariantsArgs = {};
type VariantPropType = keyof PlasmicTitleForm__VariantsArgs;
export const PlasmicTitleForm__VariantProps = new Array<VariantPropType>();

export type PlasmicTitleForm__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTitleForm__ArgsType;
export const PlasmicTitleForm__ArgProps = new Array<ArgPropType>("children");

export type PlasmicTitleForm__OverridesType = {
  form?: p.Flex<typeof FormWrapper>;
  formItem?: p.Flex<typeof FormItemWrapper>;
  freeBox?: p.Flex<"div">;
  input?: p.Flex<typeof AntdInput>;
  button?: p.Flex<typeof AntdButton>;
  text?: p.Flex<"div">;
};

export interface DefaultTitleFormProps {
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

function PlasmicTitleForm__RenderFunc(props: {
  variants: PlasmicTitleForm__VariantsArgs;
  args: PlasmicTitleForm__ArgsType;
  overrides: PlasmicTitleForm__OverridesType;
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
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <FormWrapper
      data-plasmic-name={"form"}
      data-plasmic-override={overrides.form}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.form
      )}
      extendedOnValuesChange={p.generateStateOnChangeProp($state, [
        "form",
        "value"
      ])}
      labelCol={{ span: 8, horizontalOnly: true }}
      layout={"vertical" as const}
      wrapperCol={{ span: 16, horizontalOnly: true }}
    >
      <FormItemWrapper
        data-plasmic-name={"formItem"}
        data-plasmic-override={overrides.formItem}
        className={classNames("__wab_instance", sty.formItem)}
        label={
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Destination Link",
              value: args.children
            })}
          </div>
        }
        name={"name" as const}
      >
        {(() => {
          const child$Props = {
            addonAfter: null,
            addonBefore: null,
            className: classNames("__wab_instance", sty.input),
            onChange: p.generateStateOnChangePropForCodeComponents(
              $state,
              "value",
              ["input", "value"],
              AntdInput_Helpers
            ),
            prefix: null,
            suffix: null,
            value: p.generateStateValueProp($state, ["input", "value"])
          };
          p.initializeCodeComponentStates(
            $state,
            [
              {
                name: "value",
                plasmicStateName: "input.value"
              }
            ],
            [],
            AntdInput_Helpers ?? {},
            child$Props
          );

          return (
            <AntdInput
              data-plasmic-name={"input"}
              data-plasmic-override={overrides.input}
              {...child$Props}
            />
          );
        })()}
      </FormItemWrapper>
      <AntdButton
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames("__wab_instance", sty.button)}
        icon={null}
        submitsForm={true}
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
          {"Done"}
        </div>
      </AntdButton>
    </FormWrapper>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  form: ["form", "formItem", "freeBox", "input", "button", "text"],
  formItem: ["formItem", "freeBox", "input"],
  freeBox: ["freeBox"],
  input: ["input"],
  button: ["button", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  form: typeof FormWrapper;
  formItem: typeof FormItemWrapper;
  freeBox: "div";
  input: typeof AntdInput;
  button: typeof AntdButton;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTitleForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTitleForm__VariantsArgs;
    args?: PlasmicTitleForm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTitleForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTitleForm__ArgsType,
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
          internalArgPropNames: PlasmicTitleForm__ArgProps,
          internalVariantPropNames: PlasmicTitleForm__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTitleForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "form") {
    func.displayName = "PlasmicTitleForm";
  } else {
    func.displayName = `PlasmicTitleForm.${nodeName}`;
  }
  return func;
}

export const PlasmicTitleForm = Object.assign(
  // Top-level PlasmicTitleForm renders the root element
  makeNodeComponent("form"),
  {
    // Helper components rendering sub-elements
    formItem: makeNodeComponent("formItem"),
    freeBox: makeNodeComponent("freeBox"),
    input: makeNodeComponent("input"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicTitleForm
    internalVariantProps: PlasmicTitleForm__VariantProps,
    internalArgProps: PlasmicTitleForm__ArgProps
  }
);

export default PlasmicTitleForm;
/* prettier-ignore-end */
