import React from "react";
import { BaseButton, DefaultButton, DeleteButton, DraftButton, EditCancelDiscardButton } from "./Button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "baseBtn",
  defaultBtn: "defaultBtn",
  editCancelDiscardBtn: "editCancelBtn",
  deleteBtn: "deleteBtn",
  saveDraftBtn: "saveDraftBtn",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.defaultBtn]: DefaultButton,
    [BUTTON_TYPE_CLASSES.editCancelDiscardBtn]: EditCancelDiscardButton,
    [BUTTON_TYPE_CLASSES.deleteBtn]: DeleteButton,
    [BUTTON_TYPE_CLASSES.saveDraftBtn]: DraftButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherprops }) => {
  const CustumButton = getButton(buttonType);
  //   console.log({ ...otherprops });

  return <CustumButton {...otherprops}>{children}</CustumButton>;
};

export default Button;
