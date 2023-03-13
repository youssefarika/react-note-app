import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  DeleteTags, modifyTags } from "../store/DataSlice";
import getDuplicates from "../store/ModifyTags";
import { RootState } from "../store/store";

function EditTags() {
    const data = useSelector((state: RootState) => state.data);
    const alltags = data?.map((items) => items.tags);
    const allids = data?.map((items) => (items.id));
    // Remove all nested array
    const flattenedTags = alltags?.flat(alltags.length);
    // Remove All duplicated values from the array
    const unused = Array.from(new Set(flattenedTags)).map((item) => item);
    const dispatch = useDispatch()
    const [tags, setTags] = useState<{ tag: string, id: string }[]>([]);
    const duplicates = getDuplicates(flattenedTags);
    useEffect(() => {
      }, [unused, tags]);
      const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        e.preventDefault();
        const newTags = [...tags];
        // get indexes of duplicated tags
        const dupliTagsIndx = duplicates.get(unused[index])
        // getting the duplicated tags indexes modified them with the same input value
        if (dupliTagsIndx) {
            dupliTagsIndx.map(idx => {
                newTags[idx] = {tag: e.target.value, id: allids[idx]};
                setTags(newTags);
                dispatch(modifyTags(newTags))
            })
        }
        newTags[index] = {tag: e.target.value, id: allids[index]};
        setTags(newTags);
        dispatch(modifyTags(newTags))
      };
      
    return (
        <>
            <label htmlFor="my-modal-4" className="btn btn-sm btn-outline h-10">EDIT TAGS</label>
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box absolute top-8" htmlFor="">
                    <h2 className="font-bold mb-2 text-[1.5rem]">Edit Tags</h2>
                <form onSubmit={(event) => event.preventDefault()}>                    
                {unused && unused.map((tag, index) => (
                    <div key={index} className="flex mt-4">
                        <input
                        name="try"
                        onChange={(e) => handleTagsChange(e, index)}
                        type="text"
                        value={tags[index] ? tags[index].tag : tag}
                        className="input input-bordered lg:w-[26.5rem] w-[18rem] h-9"
                        />
                        <button
                        className="btn btn-sm btn-outline ml-2 btn-error h-9 w-13 text-sm"
                        onClick={() => data.map((item, indx) => item.tags?.join(" ") === tag ? dispatch(DeleteTags(data[indx].tags)) : null)}
                        >
                        X
                        </button>
                    </div>
                ))}
                </form>                    
                </label>
            </label>
        </>
    )
}

export default EditTags



