import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import { addData } from "../store/DataSlice";
import Nav from "./Nav";
import { MultiValue } from 'react-select';

function Create() {
  const DescText = useRef<HTMLTextAreaElement>(null);
  const TitleText = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [selectedTags, setSelectedTags] = useState<{label: string}[]>([]);
  type CreatedaData = {
    title: string,
    Desc: string | undefined,
    tags?: string
  }
  const handleData = () => {
    if (TitleText.current) {
      if (TitleText.current.value.trim() === "") {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2500);
      } else {
        const tagValues = selectedTags && selectedTags.map(tag => tag.label).join(", ");
        const data: CreatedaData = {
          title: TitleText.current.value,
          Desc: DescText.current?.value,
          tags: tagValues,
        }
        dispatch(addData(data));
        setError(false);
        navigate("/");
      }
    }
  };
  
  // ...
  
  const handleTagsChange = (newValue: MultiValue<string>) => {
    const tags = newValue.map((value) => value);
    setSelectedTags(tags);
  };
  
  

  return (
    <div className="container">
      <Nav title="New Notes" />
      <div className="grid grid-cols-2 pt-6 gap-4">
        <form>
          <label className="block pb-2">Title</label>
          <input
            ref={TitleText}
            type="text"
            placeholder=""
            className="input input-bordered h-9 input-sm lg:w-[40rem] sm: w-full max-w-2xl"
            required
          />
          {error && (
            <p className="text-red-500 time">Please enter a title.</p>
          )}
        </form>
        <form>
          <label className="block pb-2">Tags</label>
          <CreatableSelect
            isMulti
            onChange={handleTagsChange}
          />
        </form>
      </div>
      <form className="pt-8">
        <label className="relative bottom-2">Body</label>
        <textarea
          ref={DescText}
          className="textarea textarea-bordered textarea-lg w-full"
        ></textarea>
      </form>

      <div className="buttons float-right pt-4">
        <button
          className="btn btn-sm btn-primary h-10 mr-2"
          onClick={() => {
            handleData();
          }}
        >
          Save
        </button>

        <button className="btn btn-sm btn-outline h-10" onClick={() => navigate("/")}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Create;
