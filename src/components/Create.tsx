import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import { addData } from "../store/DataSlice";
import Nav from "./Nav";
import { MultiValue } from 'react-select';
import uuid from 'react-native-uuid';
import { RootState, store } from "../store/store";


function Create() {
  const DescText = useRef<HTMLTextAreaElement>(null);
  const TitleText = useRef<HTMLInputElement>(null);
  const data = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alltags = data?.map((items) => items.tags);
  // Remove all nested array
  const flattenedTags = alltags?.flat(alltags.length);
  // Remove All duplicated values from the array
  const unused = Array.from(new Set(flattenedTags)).map((item) => item);
  const options = unused?.map((items) => ({ value: items, label: items })) || [];
  const [error, setError] = useState(false);
  const { title } = useParams<{ title: string }>();
  const item = store.getState().data.find((item) => item.title === title);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  type CreatedaData = {
    title: string,
    Desc: string | undefined,
    tags?: string[],
    id: React.Key | number[],
  }
  const handleData = () => {
    // Tell the user they have to write a title
    if (TitleText.current) {
      if (TitleText.current.value.trim() === "") {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2500);
      } else {
        const data: CreatedaData = {
          title: TitleText.current.value,
          Desc: DescText.current?.value,
          tags: selectedTags,
          id: item && item.id || uuid.v4()
        }
          dispatch(addData(data));
        setError(false);
        navigate("/");
      }
    }
  };
  
  // ...
  const handleTagsChange = (newValue: MultiValue<string>) => {
    const tags = newValue.map(value => value.label)
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
            options = {options}
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
