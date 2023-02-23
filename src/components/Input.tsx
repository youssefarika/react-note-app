import { useRef } from "react"

function Input() {
  const TitleSearch = useRef<HTMLInputElement>(null)
  return (
      <form>
            <label className="block pb-2">Title</label>
            <input
              ref={TitleSearch}
              type="text"
              placeholder=""
              className="input input-bordered h-9 input-sm lg:w-[40rem] sm: w-full max-w-2xl"
            />
      </form>
  );
}

export default Input;