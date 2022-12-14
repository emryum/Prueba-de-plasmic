// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4iTnSBPg3xS5vBBZH844Lg
// Component: Gs1pjNgOB-Pc
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button2 from "../../Button2"; // plasmic-import: pFCLT0g1c9Y/component
import { useScreenVariants as useScreenVariantsabu932REwz04H } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: abu932rEWZ04H/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: 4iTnSBPg3xS5vBBZH844Lg/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: Gs1pjNgOB-Pc/css
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: jLPEpt7Zeno/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: y2uHsOWvpxN/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: 9wxg_7dkeXj/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: U_5gp1bozaW/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: XRwYnI9lnYU/icon

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsabu932REwz04H()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

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
            sty.root
          )}
        >
          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__tfukx)}>
              <p.Stack
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__oTz5)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__d5Jf6)}
                  >
                    <p.PlasmicImg
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(sty.img)}
                      displayHeight={"40px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"40px"}
                      src={{
                        src: "/plasmic/blank_project/images/image.svg",
                        fullWidth: 150,
                        fullHeight: 150,
                        aspectRatio: 1
                      }}
                    />

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__x4ArJ)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__cVamX
                        )}
                      >
                        {"Connect with us"}
                      </div>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__iuC2M
                        )}
                      >
                        <Icon3Icon
                          className={classNames(projectcss.all, sty.svg__gEoKc)}
                          role={"img"}
                        />

                        <Icon2Icon
                          className={classNames(projectcss.all, sty.svg__bnARp)}
                          role={"img"}
                        />

                        <Icon28Icon
                          className={classNames(projectcss.all, sty.svg__eCm05)}
                          role={"img"}
                        />
                      </p.Stack>
                    </p.Stack>
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.column__ldFz2)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__noOmT)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___3So6P
                      )}
                    >
                      {"Product"}
                    </div>

                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__tjhZw
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__ey3AN)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__bmekx)}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__y26Gu
                        )}
                      >
                        {"Pricing"}
                      </div>
                    </Button2>

                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__uqM1U
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__rEszk)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__jk3Xa)}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ho0S
                        )}
                      >
                        {"Log in"}
                      </div>
                    </Button2>

                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__zcbU7
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__kmYey)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__l8EQ)}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__d6IF
                        )}
                      >
                        {"Integrations"}
                      </div>
                    </Button2>

                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__j5W91
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__tPCpA)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__zbBUy)}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__zbsCp
                        )}
                      >
                        {"Insights"}
                      </div>
                    </Button2>
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.column__jf7Z)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__zzLgx)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qd3Z0
                      )}
                    >
                      {"Support"}
                    </div>

                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__hLvf
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__t9T92)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__dFlJq)}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__piK7W
                        )}
                      >
                        {"Documentation"}
                      </div>
                    </Button2>

                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__urZgq
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__nzTmU)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__bJqYk)}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__accfP
                        )}
                      >
                        {"FAQs"}
                      </div>
                    </Button2>

                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2___8GggR
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__rg9FZ)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(
                            projectcss.all,
                            sty.svg___8SbL8
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__fzBi
                        )}
                      >
                        {"Status"}
                      </div>
                    </Button2>
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.column__bSkLi)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___9B9Pp)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__uh4I
                      )}
                    >
                      {"Company"}
                    </div>

                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2___1A5Yb
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__dLsco)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__jv5NR)}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__c1M2K
                        )}
                      >
                        {"About"}
                      </div>
                    </Button2>

                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2___6JJ3S
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__oQtv7)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__s5HnE)}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__omP2I
                        )}
                      >
                        {"Contact us"}
                      </div>
                    </Button2>

                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__o5O2V
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__rcU35)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__a0HEm)}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__pfYp
                        )}
                      >
                        {"Careers"}
                      </div>
                    </Button2>

                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2___1EBmX
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(
                            projectcss.all,
                            sty.svg___45Jfz
                          )}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__yhL0M)}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__uhR8I
                        )}
                      >
                        {"Media"}
                      </div>
                    </Button2>
                  </p.Stack>
                </div>
              </p.Stack>
            </div>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "section", "columns", "img"],
  section: ["section", "columns", "img"],
  columns: ["columns", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
