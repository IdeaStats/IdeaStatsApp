// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iKm2w5zQkVZvuqT51PP4Eo
// Component: mz5eL8luPc

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
import Button2 from "../../Button2"; // plasmic-import: mqOKPI__U1C/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_idea_stats_v_1.module.css"; // plasmic-import: iKm2w5zQkVZvuqT51PP4Eo/projectcss
import sty from "./PlasmicAdTemplate1.module.css"; // plasmic-import: mz5eL8luPc/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: SBvHu7dbLxB/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: Dv0lahOnAgu/icon

export type PlasmicAdTemplate1__VariantMembers = {};
export type PlasmicAdTemplate1__VariantsArgs = {};
type VariantPropType = keyof PlasmicAdTemplate1__VariantsArgs;
export const PlasmicAdTemplate1__VariantProps = new Array<VariantPropType>();

export type PlasmicAdTemplate1__ArgsType = {
  title?: React.ReactNode;
  body?: React.ReactNode;
  adImgSrc?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  callToAction?: React.ReactNode;
};
type ArgPropType = keyof PlasmicAdTemplate1__ArgsType;
export const PlasmicAdTemplate1__ArgProps = new Array<ArgPropType>(
  "title",
  "body",
  "adImgSrc",
  "callToAction"
);

export type PlasmicAdTemplate1__OverridesType = {
  root?: p.Flex<"button">;
  callToAction?: p.Flex<typeof Button2>;
  img?: p.Flex<typeof p.PlasmicImg>;
  screenCover?: p.Flex<"div">;
};

export interface DefaultAdTemplate1Props {
  title?: React.ReactNode;
  body?: React.ReactNode;
  adImgSrc?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  callToAction?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicAdTemplate1__RenderFunc(props: {
  variants: PlasmicAdTemplate1__VariantsArgs;
  args: PlasmicAdTemplate1__ArgsType;
  overrides: PlasmicAdTemplate1__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          adImgSrc:
            "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" as const
        },
        props.args
      ),
    [props.args]
  );
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
      onSelect={async event => {
        const $steps = {};
      }}
    >
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__fFmT)}>
          <div className={classNames(projectcss.all, sty.freeBox__dPAqD)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cereG
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__iyu0N
                        )}
                      >
                        {"Ad Title"}
                      </h2>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              ),
              value: args.title
            })}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__oeZcI)}>
            {p.renderPlasmicSlot({
              defaultContents:
                "Ad body. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              value: args.body,
              className: classNames(sty.slotTargetBody)
            })}
          </div>
          <Button2
            data-plasmic-name={"callToAction"}
            data-plasmic-override={overrides.callToAction}
            className={classNames("__wab_instance", sty.callToAction)}
            submitsForm={true}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xwhmp
                  )}
                >
                  {"Call To Action"}
                </div>
              ),
              value: args.callToAction
            })}
          </Button2>
          <div className={classNames(projectcss.all, sty.freeBox__eWeai)}>
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
              src={args.adImgSrc}
            />
          </div>
          {true ? (
            <div
              data-plasmic-name={"screenCover"}
              data-plasmic-override={overrides.screenCover}
              className={classNames(projectcss.all, sty.screenCover)}
            />
          ) : null}
        </div>
      ) : null}
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "callToAction", "img", "screenCover"],
  callToAction: ["callToAction"],
  img: ["img"],
  screenCover: ["screenCover"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "button";
  callToAction: typeof Button2;
  img: typeof p.PlasmicImg;
  screenCover: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAdTemplate1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAdTemplate1__VariantsArgs;
    args?: PlasmicAdTemplate1__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAdTemplate1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAdTemplate1__ArgsType,
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
          internalArgPropNames: PlasmicAdTemplate1__ArgProps,
          internalVariantPropNames: PlasmicAdTemplate1__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAdTemplate1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAdTemplate1";
  } else {
    func.displayName = `PlasmicAdTemplate1.${nodeName}`;
  }
  return func;
}

export const PlasmicAdTemplate1 = Object.assign(
  // Top-level PlasmicAdTemplate1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    callToAction: makeNodeComponent("callToAction"),
    img: makeNodeComponent("img"),
    screenCover: makeNodeComponent("screenCover"),

    // Metadata about props expected for PlasmicAdTemplate1
    internalVariantProps: PlasmicAdTemplate1__VariantProps,
    internalArgProps: PlasmicAdTemplate1__ArgProps
  }
);

export default PlasmicAdTemplate1;
/* prettier-ignore-end */
