import Select, { MultiValue } from 'react-select';
import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { addTarget } from '../store/FilterTargetSlice';


function Selecting() {
  const data = useSelector((state: RootState) => state.data);
  const alltags = data?.map((items) => items.tags);
  // Remove all nested array
  const flattenedTags = alltags?.flat(alltags.length);
  // Remove All duplicated values from the array
  const unused = Array.from(new Set(flattenedTags)).map((item) => item);
  const options = unused?.map((items) => ({ value: items, label: items })) || [];
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const dispatch = useDispatch()
  const handleChange = (newValue:  MultiValue<{ value: string, label: string }>) => {
    const tags = newValue.map(value => value.label).flat()
    setSelectedTags(tags);
    dispatch(addTarget(newValue));
  };
  return (
        <form>
          <label className="block pb-2">Tags</label>
            <Select
            className="basic-single"
            classNamePrefix="select"
            name="color"
            options={options}
            defaultValue={selectedTags.map(tag => ({ value: tag, label: tag }))}
            isMulti
            onChange={handleChange}
          />
        </form>
  );
}

export default Selecting;
