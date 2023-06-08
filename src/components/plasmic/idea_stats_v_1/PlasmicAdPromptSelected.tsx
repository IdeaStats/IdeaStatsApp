// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iKm2w5zQkVZvuqT51PP4Eo
// Component: pcQ3qiQYH3R

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
import TextInput from "../../TextInput"; // plasmic-import: LW1ZHmZtc1I/component
import GenerateButton from "../../GenerateButton"; // plasmic-import: Fs5OtDdX5n/component
import AdTemplate1 from "../../AdTemplate1"; // plasmic-import: mz5eL8luPc/component
import GenericButton from "../../GenericButton"; // plasmic-import: rRlSjYLvCT/component
import TitleForm from "../../TitleForm"; // plasmic-import: shf87k89kA/component
import BodyForm from "../../BodyForm"; // plasmic-import: R61mrCin7_P/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_idea_stats_v_1.module.css"; // plasmic-import: iKm2w5zQkVZvuqT51PP4Eo/projectcss
import sty from "./PlasmicAdPromptSelected.module.css"; // plasmic-import: pcQ3qiQYH3R/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: SvpL0X2s9gW/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: SBvHu7dbLxB/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: UVhfm8Vw8/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: BINpeFFuv2/icon

export type PlasmicAdPromptSelected__VariantMembers = {};
export type PlasmicAdPromptSelected__VariantsArgs = {};
type VariantPropType = keyof PlasmicAdPromptSelected__VariantsArgs;
export const PlasmicAdPromptSelected__VariantProps =
  new Array<VariantPropType>();

export type PlasmicAdPromptSelected__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicAdPromptSelected__ArgsType;
export const PlasmicAdPromptSelected__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicAdPromptSelected__OverridesType = {
  root?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  columns?: p.Flex<"div">;
  textInput?: p.Flex<typeof TextInput>;
  generateButton?: p.Flex<typeof GenerateButton>;
  adTemplate1?: p.Flex<typeof AdTemplate1>;
  img?: p.Flex<typeof p.PlasmicImg>;
  resetButton?: p.Flex<typeof GenericButton>;
  selectButton?: p.Flex<typeof GenericButton>;
  componentList?: p.Flex<"div">;
  collapseAble1?: p.Flex<typeof GenericButton>;
  form1?: p.Flex<typeof TitleForm>;
  collapseAble2?: p.Flex<typeof GenericButton>;
  form2?: p.Flex<typeof BodyForm>;
  collapseAble3?: p.Flex<typeof GenericButton>;
  form3?: p.Flex<typeof TitleForm>;
  collapseAble4?: p.Flex<typeof GenericButton>;
  form4?: p.Flex<typeof TitleForm>;
};

export interface DefaultAdPromptSelectedProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicAdPromptSelected__RenderFunc(props: {
  variants: PlasmicAdPromptSelected__VariantsArgs;
  args: PlasmicAdPromptSelected__ArgsType;
  overrides: PlasmicAdPromptSelected__OverridesType;
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
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

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
            <div className={classNames(projectcss.all, sty.freeBox__nxAzr)}>
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
                {"Customize Your Template"}
              </h1>
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__n05XM)}>
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__ieCwN)}
                    >
                      {true ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__nwm7Z
                          )}
                        >
                          {true ? (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__t1SZx
                              )}
                            >
                              <TextInput
                                data-plasmic-name={"textInput"}
                                data-plasmic-override={overrides.textInput}
                                className={classNames(
                                  "__wab_instance",
                                  sty.textInput
                                )}
                                onChange={(...eventArgs) => {
                                  p.generateStateOnChangeProp($state, [
                                    "textInput",
                                    "value"
                                  ])(
                                    (e => e.target?.value).apply(
                                      null,
                                      eventArgs
                                    )
                                  );
                                }}
                                startIcon={
                                  <SearchsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg___8BiLq
                                    )}
                                    role={"img"}
                                  />
                                }
                                value={
                                  p.generateStateValueProp($state, [
                                    "textInput",
                                    "value"
                                  ]) ?? ""
                                }
                              />

                              <GenerateButton
                                data-plasmic-name={"generateButton"}
                                data-plasmic-override={overrides.generateButton}
                                className={classNames(
                                  "__wab_instance",
                                  sty.generateButton
                                )}
                              />
                            </div>
                          ) : null}
                          <AdTemplate1
                            data-plasmic-name={"adTemplate1"}
                            data-plasmic-override={overrides.adTemplate1}
                            adImage={
                              <p.PlasmicImg
                                data-plasmic-name={"img"}
                                data-plasmic-override={overrides.img}
                                alt={""}
                                className={classNames(sty.img)}
                                displayHeight={"100%" as const}
                                displayMaxHeight={"none" as const}
                                displayMaxWidth={"none" as const}
                                displayMinHeight={"0" as const}
                                displayMinWidth={"0" as const}
                                displayWidth={"100%" as const}
                                loading={"lazy" as const}
                                src={
                                  "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" as const
                                }
                              />
                            }
                            body={
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__edznr
                                )}
                              >
                                {
                                  "Ad body. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n"
                                }
                              </div>
                            }
                            className={classNames(
                              "__wab_instance",
                              sty.adTemplate1
                            )}
                          />

                          {true ? (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__g8XkX
                              )}
                            >
                              <GenericButton
                                data-plasmic-name={"resetButton"}
                                data-plasmic-override={overrides.resetButton}
                                className={classNames(
                                  "__wab_instance",
                                  sty.resetButton
                                )}
                              >
                                <IconIcon
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__bbSec
                                  )}
                                  role={"img"}
                                />
                              </GenericButton>
                              <GenericButton
                                data-plasmic-name={"selectButton"}
                                data-plasmic-override={overrides.selectButton}
                                className={classNames(
                                  "__wab_instance",
                                  sty.selectButton
                                )}
                              >
                                {"Select"}
                              </GenericButton>
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
                <div className={classNames(projectcss.all, sty.column__r2LNa)}>
                  <div
                    data-plasmic-name={"componentList"}
                    data-plasmic-override={overrides.componentList}
                    className={classNames(projectcss.all, sty.componentList)}
                  >
                    <GenericButton
                      data-plasmic-name={"collapseAble1"}
                      data-plasmic-override={overrides.collapseAble1}
                      className={classNames(
                        "__wab_instance",
                        sty.collapseAble1
                      )}
                    >
                      <Icon2Icon
                        className={classNames(projectcss.all, sty.svg__ze4KL)}
                        role={"img"}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__zMubc
                        )}
                      >
                        {"Change Title"}
                      </div>
                    </GenericButton>
                    <TitleForm
                      data-plasmic-name={"form1"}
                      data-plasmic-override={overrides.form1}
                      className={classNames("__wab_instance", sty.form1)}
                    >
                      {p.renderPlasmicSlot({
                        defaultContents: "Title",
                        value: args.slot
                      })}
                    </TitleForm>
                    <GenericButton
                      data-plasmic-name={"collapseAble2"}
                      data-plasmic-override={overrides.collapseAble2}
                      className={classNames(
                        "__wab_instance",
                        sty.collapseAble2
                      )}
                    >
                      <Icon2Icon
                        className={classNames(projectcss.all, sty.svg__liZeG)}
                        role={"img"}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__cctqz
                        )}
                      >
                        {"Change Body"}
                      </div>
                    </GenericButton>
                    <BodyForm
                      data-plasmic-name={"form2"}
                      data-plasmic-override={overrides.form2}
                      className={classNames("__wab_instance", sty.form2)}
                    />

                    <GenericButton
                      data-plasmic-name={"collapseAble3"}
                      data-plasmic-override={overrides.collapseAble3}
                      className={classNames(
                        "__wab_instance",
                        sty.collapseAble3
                      )}
                    >
                      <Icon2Icon
                        className={classNames(projectcss.all, sty.svg__waDo)}
                        role={"img"}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mQv6M
                        )}
                      >
                        {"Change Image"}
                      </div>
                    </GenericButton>
                    <TitleForm
                      data-plasmic-name={"form3"}
                      data-plasmic-override={overrides.form3}
                      className={classNames("__wab_instance", sty.form3)}
                    >
                      {p.renderPlasmicSlot({
                        defaultContents: "Image Prompt",
                        value: args.children
                      })}
                    </TitleForm>
                    <GenericButton
                      data-plasmic-name={"collapseAble4"}
                      data-plasmic-override={overrides.collapseAble4}
                      className={classNames(
                        "__wab_instance",
                        sty.collapseAble4
                      )}
                    >
                      <Icon2Icon
                        className={classNames(projectcss.all, sty.svg___61T3I)}
                        role={"img"}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___9E4CK
                        )}
                      >
                        {"Ad Link"}
                      </div>
                    </GenericButton>
                    <TitleForm
                      data-plasmic-name={"form4"}
                      data-plasmic-override={overrides.form4}
                      className={classNames("__wab_instance", sty.form4)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "h1",
    "columns",
    "textInput",
    "generateButton",
    "adTemplate1",
    "img",
    "resetButton",
    "selectButton",
    "componentList",
    "collapseAble1",
    "form1",
    "collapseAble2",
    "form2",
    "collapseAble3",
    "form3",
    "collapseAble4",
    "form4"
  ],
  h1: ["h1"],
  columns: [
    "columns",
    "textInput",
    "generateButton",
    "adTemplate1",
    "img",
    "resetButton",
    "selectButton",
    "componentList",
    "collapseAble1",
    "form1",
    "collapseAble2",
    "form2",
    "collapseAble3",
    "form3",
    "collapseAble4",
    "form4"
  ],
  textInput: ["textInput"],
  generateButton: ["generateButton"],
  adTemplate1: ["adTemplate1", "img"],
  img: ["img"],
  resetButton: ["resetButton"],
  selectButton: ["selectButton"],
  componentList: [
    "componentList",
    "collapseAble1",
    "form1",
    "collapseAble2",
    "form2",
    "collapseAble3",
    "form3",
    "collapseAble4",
    "form4"
  ],
  collapseAble1: ["collapseAble1"],
  form1: ["form1"],
  collapseAble2: ["collapseAble2"],
  form2: ["form2"],
  collapseAble3: ["collapseAble3"],
  form3: ["form3"],
  collapseAble4: ["collapseAble4"],
  form4: ["form4"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  columns: "div";
  textInput: typeof TextInput;
  generateButton: typeof GenerateButton;
  adTemplate1: typeof AdTemplate1;
  img: typeof p.PlasmicImg;
  resetButton: typeof GenericButton;
  selectButton: typeof GenericButton;
  componentList: "div";
  collapseAble1: typeof GenericButton;
  form1: typeof TitleForm;
  collapseAble2: typeof GenericButton;
  form2: typeof BodyForm;
  collapseAble3: typeof GenericButton;
  form3: typeof TitleForm;
  collapseAble4: typeof GenericButton;
  form4: typeof TitleForm;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAdPromptSelected__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAdPromptSelected__VariantsArgs;
    args?: PlasmicAdPromptSelected__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAdPromptSelected__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAdPromptSelected__ArgsType,
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
          internalArgPropNames: PlasmicAdPromptSelected__ArgProps,
          internalVariantPropNames: PlasmicAdPromptSelected__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAdPromptSelected__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAdPromptSelected";
  } else {
    func.displayName = `PlasmicAdPromptSelected.${nodeName}`;
  }
  return func;
}

export const PlasmicAdPromptSelected = Object.assign(
  // Top-level PlasmicAdPromptSelected renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    columns: makeNodeComponent("columns"),
    textInput: makeNodeComponent("textInput"),
    generateButton: makeNodeComponent("generateButton"),
    adTemplate1: makeNodeComponent("adTemplate1"),
    img: makeNodeComponent("img"),
    resetButton: makeNodeComponent("resetButton"),
    selectButton: makeNodeComponent("selectButton"),
    componentList: makeNodeComponent("componentList"),
    collapseAble1: makeNodeComponent("collapseAble1"),
    form1: makeNodeComponent("form1"),
    collapseAble2: makeNodeComponent("collapseAble2"),
    form2: makeNodeComponent("form2"),
    collapseAble3: makeNodeComponent("collapseAble3"),
    form3: makeNodeComponent("form3"),
    collapseAble4: makeNodeComponent("collapseAble4"),
    form4: makeNodeComponent("form4"),

    // Metadata about props expected for PlasmicAdPromptSelected
    internalVariantProps: PlasmicAdPromptSelected__VariantProps,
    internalArgProps: PlasmicAdPromptSelected__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAdPromptSelected;
/* prettier-ignore-end */
