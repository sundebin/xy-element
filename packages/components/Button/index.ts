import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
import { withInstall } from "@xy-element/utils";

export const XyButton = withInstall(Button)
export const XyButtonGroup = withInstall(ButtonGroup);

export * from "./types";
