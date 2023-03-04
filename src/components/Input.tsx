import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { addTitle } from "../store/FilterTitleSlice";

function Input() {
  const TitleSearch = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const [Title, setTitle] = useState<string[] | null>(null)
  const handleChange = () => {
    const title = TitleSearch.current && TitleSearch.current.value
    setTitle(title ? [title] : null); // always set the state to an array with one element or null
    dispatch(addTitle(title));
  };
  return (
      <form>
            <label className="block pb-2">Title</label>
            <input
              ref={TitleSearch}
              onChange= {handleChange}
              type="text"
              placeholder=""
              className="input input-bordered h-9 input-sm lg:w-[40rem] sm: w-full max-w-2xl"
            />
      </form>
  );
}

export default Input;