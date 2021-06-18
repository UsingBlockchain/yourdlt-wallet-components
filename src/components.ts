/**
 * This file is part of YourDLT Wallet Components shared under LGPL-3.0
 * Copyright (C) 2021 Using Blockchain Ltd, Reg No.: 12658136, United Kingdom
 *
 * @package     YourDLT Wallet Components
 * @author      Grégory Saive for Using Blockchain Ltd <greg@ubc.digital>
 * @license     LGPL-3.0
 */
import Vue, { VueConstructor } from "vue";

/// region services
export { FilteringTypes } from "./types/FilteringTypes";
export { SortingDirections } from "./types/SortingDirections";
export { TableAction } from "./types/TableAction";
export { TableField } from "./types/TableField";
export { TableFilteringOptions } from "./types/TableFilteringOptions";
export { TableSortingOptions } from "./types/TableSortingOptions";
export { TableService } from "./services/TableService";
/// end-region services

/// region components
// @ts-ignore
import ButtonRefresh from "./components/ButtonRefresh/ButtonRefresh.vue";
// @ts-ignore
import IconButton from "./components/IconButton/IconButton.vue";
// @ts-ignore
import AmountDisplay from "./components/AmountDisplay/AmountDisplay.vue";
// @ts-ignore
import NavigationLinks from "./components/NavigationLinks/NavigationLinks.vue";
// @ts-ignore
import GenericTableDisplay from "./components/GenericTableDisplay/GenericTableDisplay.vue";
// @ts-ignore
import GenericTableRow from "./components/GenericTableDisplay/GenericTableRow/GenericTableRow.vue";

const components: { [s: string]: VueConstructor } = {
  AmountDisplay,
  ButtonRefresh,
  GenericTableDisplay,
  GenericTableRow,
  IconButton,
  NavigationLinks,
};

export const registerComponents = (): { [s: string]: VueConstructor } => {
  Object.keys(components).forEach((k) => Vue.component(k, components[k]));
  return components;
};

export {
  AmountDisplay,
  ButtonRefresh,
  GenericTableDisplay,
  GenericTableRow,
  IconButton,
  NavigationLinks,
};
/// end-region components