import Select from 'react-select';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../store/store";


function Selecting() {
    return (
      <form>
        <label className="block pb-2">Tags</label>
        <Select
        className="basic-single lg:w-[40.5rem]"
        classNamePrefix="select"
        name="color"
       />      
      </form>
    );
  }
  
  export default Selecting;