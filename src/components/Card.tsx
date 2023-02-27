import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from '../store/store'

function Card() {
  const Datainfo = useSelector((state: RootState) => state.data);
  const navigate = useNavigate()
  return (
    <div className="grid lg:grid-cols-4 cursor-pointer gap-3 pt-5 md:grid-cols-2">
      {Datainfo ? (
        Datainfo.map((item) => (
            <div key={item.id} className="rounded-lg w-80 bg-base-100 shadow-xl border-2" onClick={() => navigate(`${item.title}`)}>
              <div className="card-body text-xl pl-4 pb-4 relative bottom-3">
                <p>{item.title}</p>
              </div>
              <div className="flex justify-center">
                  {item.tags?.map(data => (
                    <span  key={item} className="btn-xsm mx-1 px-2 mb-3 font-semibold rounded btn-primary">{data}</span> 
                  ))}
              </div>
            </div>
        ))
      ): null}
    </div>
  );
}

export default Card;
