import { useSelector } from "react-redux";
import type { RootState } from '../store/store'

function Card() {
  const TitleText = useSelector((state: RootState) => state.data);

  return (
    <div className="grid lg:grid-cols-4 cursor-pointer gap-3 pt-5 md:grid-cols-2">
      {TitleText ? (
        TitleText.map((item, index) => (
          <div key={index} className="rounded-lg h-[10rem] w-80 bg-base-100 relative shadow-xl border-2">
            <div className="card-body text-xl pl-4 relative bottom-3">
              <p>{item.title}</p>
            </div>
            {item.tags ? (
              <div className="flex justify-center items-center">
                <span className="btn-xsm absolute bottom-2 px-2 font-semibold rounded btn-primary">{item.tags}</span>
              </div>
            ): null}
          </div>
        ))
      ): null}
    </div>
  );
}

export default Card;
