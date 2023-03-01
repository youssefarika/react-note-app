import Select from 'react-select';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import Card from './Card';
import { addTarget } from '../store/FilterSlice';
import { MultiValue } from 'react-select';


function Selecting() {
  const data = useSelector((state: RootState) => state.data);
  const alltags = data?.map((items) => items.tags);
  // Remove all nested array
  const flattenedTags = alltags?.flat(alltags.length);
  // Remove All duplicated values from the array
  const unused = Array.from(new Set(flattenedTags)).map((item) => item);
  const options = unused?.map((items) => ({ value: items, label: items })) || [];
  const [selectedTags, setSelectedTags] = useState<{label: string}[]>([]);
  const dispatch = useDispatch()
  const handleChange = (newValue: MultiValue<string>) => {
    const tags = newValue.label.join(" ")
    setSelectedTags(tags);
    dispatch(addTarget(tags));
    console.log(data)
  };
  return (
    <>
        <form>
          <label className="block pb-2">Tags</label>
          <Select
            className="basic-single lg:w-[40.5rem]"
            classNamePrefix="select"
            name="color"
            options={options}
            value={selectedTags}
            onChange={handleChange}
          />
        </form>
    </>
  );
}

export default Selecting;
