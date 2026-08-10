import { utils } from "@utils/utils";
const {isvalid_ref_element,isvalid_element_type} = utils();
export const Gridconfig = ({
  ref = null,
  columns = 3,
  rows = 1,
}) => {
  if (!(isvalid_ref_element(ref)))
    return console.log("invalid grid");
    ref.current.style.gridTemplateColumns = `repeat(${columns},${columns}fr)`;
    ref.current.style.gridTemplateRows = `repeat(${rows},${rows}fr)`;
};
