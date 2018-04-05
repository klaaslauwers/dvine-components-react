import { IBaseProps } from "@uifabric/utilities/lib/BaseComponent";
import { IIconProps } from "office-ui-fabric-react/lib/Icon";
import { IBasePickerSuggestionsProps } from "office-ui-fabric-react/lib/pickers";

import { ITerm } from "../../model/ITerm";

export interface ITaxonomyPickerProps extends IBaseProps {
  label?: string;
  required?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  termSetId: string;
  itemLimit?: number;
  onChange?: (newValue?: ITerm[]) => void;
  selectedItems?: ITerm[];
  defaultSelectedItems?: ITerm[];
  value?: ITerm[];
  pickerSuggestionsProps?: IBasePickerSuggestionsProps;
  iconProps?: IIconProps;
}
