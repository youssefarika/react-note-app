import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import { modifyData } from "../store/DataSlice";
import Nav from "./Nav";
import { MultiValue } from 'react-select';
import { store } from "../store/store";


function CardEdit() {
  const DescText = useRef<HTMLTextAreaElement>(null);
  const TitleText = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title } = useParams<{ title: string }>();
  const item = store.getState().data.find((item) => item.title === title);
  const [error, setError] = useState(false);
  const [selectedTags, setSelectedTags] = useState<{label: string}[]>([]);
  type ModifiedaData = {
    title: string,
    Desc: string | undefined,
    tags?: { label: string }[]
  }
const handleData = () => {
  if (TitleText.current) {
    if (TitleText.current.value.trim() === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
    } else {
      const data: ModifiedaData = {
        title: TitleText.current.value,
        Desc: DescText.current?.value,
        tags: selectedTags.length > 0 ? selectedTags : item?.tags || [],
        id:  item.id
      }
      dispatch(modifyData(data));
      setError(false);
      navigate("/");
    }
  }
};
  const options = item?.tags?.map((tag) => ({ value: tag, label: tag })) || [];
  
  const handleTagsChange = (newValue: MultiValue<string>) => {
    const tags = newValue.map(value => value.label).flat()
    setSelectedTags(tags);
  };

  return (
    <div className="container">
      <Nav title="Edit Note" />
      <div className="grid grid-cols-2 pt-6 gap-4">
        <form>
          <label className="block pb-2">Title</label>
          <input
            ref={TitleText}
            type="text"
            defaultValue={item ? item.title : ""}
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
            defaultValue={options}
            onChange={handleTagsChange}
          />
        </form>
      </div>
      <form className="pt-8">
        <label className="relative bottom-2">Body</label>
        <textarea
          ref={DescText}
          defaultValue={item && item.Desc}
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
        <button className="btn btn-sm btn-outline h-10" onClick={() => console.log(item.tags)}>
          Cancel
        </button>
      </div>
    </div>
  );
  
}

export default CardEdit;
