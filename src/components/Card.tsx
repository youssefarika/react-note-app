import { Key, ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from '../store/store'


function Card() {
  const Datainfo = useSelector((state: RootState) => state.data);
  const targets = useSelector((state: RootState) => state.target);
  const title = useSelector((state: RootState) => state.title);
  const navigate = useNavigate()
  const targeting: {label: string}  = targets && targets.map(target => target).flat()[0]
  const currentTarget = targeting && targeting.label
  const filtredtags = Datainfo.filter(data => data.tags?.join(" ") === currentTarget)
  // filter titles with no filter show all the cards
  const filtredtitle = Datainfo.filter(data => data?.title.slice(0, title.join(" ").length) === title.join(" "))
  useEffect(() => {
  }, [targets, title]);
  return (
    <div className="grid lg:grid-cols-4 cursor-pointer gap-3 pt-5 md:grid-cols-2">
      {filtredtags && filtredtags.length > 0 ? (
        filtredtags.map((item) => (
            <div key={item.id} className="rounded-lg min-h-[10rem]  bg-base-100 shadow-xl border-2" onClick={() => navigate(`${item.title}`)}>
              <div className="card-body text-xl pl-4 pb-4 relative bottom-3">
                <p>{item.title}</p>
              </div>
              <div className="flex justify-center">
                  {item.tags?.map((data, index) => (
                    <span  key={index} className="btn-xsm mx-1 px-2 mb-3 font-semibold rounded btn-primary">{data}</span> 
                  ))}
              </div>
            </div>
        ))
    ) : (
      filtredtitle.map((item) => (
        <div key={item.id} className="rounded-lg min-h-[10rem] bg-base-100 shadow-xl border-2" onClick={() => navigate(`${item.title}`)}>
          <div className="card-body text-xl pl-4 pb-4 relative bottom-3">
            <p>{item.title}</p>
          </div>
          <div className="flex justify-center">
              {item.tags?.map((data, index) => (
                <span key={index} className="btn-xsm mx-1 px-2 mb-3 font-semibold rounded btn-primary">{(data)}</span> 
              ))}
          </div>
        </div>
    ))
    )} 
    </div>
  );
}

export default Card;