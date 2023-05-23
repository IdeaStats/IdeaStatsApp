// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iKm2w5zQkVZvuqT51PP4Eo
// Component: G7-ifMI2_6

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
import AdTemplate from "../../AdTemplate"; // plasmic-import: kwn848ytFs/component
import AdTemplate1 from "../../AdTemplate1"; // plasmic-import: mz5eL8luPc/component
import SelectTemplate from "../../SelectTemplate"; // plasmic-import: cIG6OIuy1Z/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_idea_stats_v_1.module.css"; // plasmic-import: iKm2w5zQkVZvuqT51PP4Eo/projectcss
import sty from "./PlasmicChooseTemplate.module.css"; // plasmic-import: G7-ifMI2_6/css

export type PlasmicChooseTemplate__VariantMembers = {};
export type PlasmicChooseTemplate__VariantsArgs = {};
type VariantPropType = keyof PlasmicChooseTemplate__VariantsArgs;
export const PlasmicChooseTemplate__VariantProps = new Array<VariantPropType>();

export type PlasmicChooseTemplate__ArgsType = {
  child1?: React.ReactNode;
  child2?: React.ReactNode;
  child3?: React.ReactNode;
};
type ArgPropType = keyof PlasmicChooseTemplate__ArgsType;
export const PlasmicChooseTemplate__ArgProps = new Array<ArgPropType>(
  "child1",
  "child2",
  "child3"
);

export type PlasmicChooseTemplate__OverridesType = {
  root?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  freeBox?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  selectTemplate?: p.Flex<typeof SelectTemplate>;
};

export interface DefaultChooseTemplateProps {
  child1?: React.ReactNode;
  child2?: React.ReactNode;
  child3?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicChooseTemplate__RenderFunc(props: {
  variants: PlasmicChooseTemplate__VariantsArgs;
  args: PlasmicChooseTemplate__ArgsType;
  overrides: PlasmicChooseTemplate__OverridesType;
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
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
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
            {"Choose An Ad Template"}
          </h1>
          {true ? (
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__pAnBs)}>
                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <AdTemplate
                        className={classNames(
                          "__wab_instance",
                          sty.adTemplate__vuYbw
                        )}
                      >
                        <AdTemplate1
                          className={classNames(
                            "__wab_instance",
                            sty.adTemplate1__go9N
                          )}
                        />
                      </AdTemplate>
                    ),
                    value: args.child1
                  })}
                </div>
                <div className={classNames(projectcss.all, sty.column__rvFvZ)}>
                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <AdTemplate
                        className={classNames(
                          "__wab_instance",
                          sty.adTemplate__g5Sip
                        )}
                      />
                    ),

                    value: args.child2
                  })}
                </div>
                <div className={classNames(projectcss.all, sty.column__jNixa)}>
                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <AdTemplate
                        className={classNames(
                          "__wab_instance",
                          sty.adTemplate__cp53C
                        )}
                      />
                    ),

                    value: args.child3
                  })}
                </div>
              </p.Stack>
              <SelectTemplate
                data-plasmic-name={"selectTemplate"}
                data-plasmic-override={overrides.selectTemplate}
                className={classNames("__wab_instance", sty.selectTemplate)}
              />
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "freeBox", "columns", "selectTemplate"],
  h1: ["h1"],
  freeBox: ["freeBox", "columns", "selectTemplate"],
  columns: ["columns"],
  selectTemplate: ["selectTemplate"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  freeBox: "div";
  columns: "div";
  selectTemplate: typeof SelectTemplate;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChooseTemplate__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChooseTemplate__VariantsArgs;
    args?: PlasmicChooseTemplate__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChooseTemplate__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicChooseTemplate__ArgsType,
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
          internalArgPropNames: PlasmicChooseTemplate__ArgProps,
          internalVariantPropNames: PlasmicChooseTemplate__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicChooseTemplate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChooseTemplate";
  } else {
    func.displayName = `PlasmicChooseTemplate.${nodeName}`;
  }
  return func;
}

export const PlasmicChooseTemplate = Object.assign(
  // Top-level PlasmicChooseTemplate renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    freeBox: makeNodeComponent("freeBox"),
    columns: makeNodeComponent("columns"),
    selectTemplate: makeNodeComponent("selectTemplate"),

    // Metadata about props expected for PlasmicChooseTemplate
    internalVariantProps: PlasmicChooseTemplate__VariantProps,
    internalArgProps: PlasmicChooseTemplate__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicChooseTemplate;
/* prettier-ignore-end */
