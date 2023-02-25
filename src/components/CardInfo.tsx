import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeleteData } from "../store/DataSlice";

type CardInfoProps = {
    item: {
      title: string;
      Desc?: string;
      tags?: { label: string }[]
    };
  };
  
  function CardInfo({ item }: CardInfoProps) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
      <div>
        {item ? (
            <div className="container pt-6">
              <div className="lg:grid lg:grid-cols-12 md:grid md:grid-cols-12">
                  <h2 className="text-4xl font-semibold pb-9 lg:col-span-8 md:col-span-10 sm:col-span-12 ">{item.title}</h2>
                  <div className="flex lg:col-span-4 md:col-span-2 pt-2 justify-center gap-3 lg:justify-end items-center">
                      <button className="btn btn-sm btn-primary h-10 w-13 text-sm" onClick={() => navigate(`/${item.title}/edit`)}>
                        Edit
                      </button>
                      <button className="btn btn-sm btn-outline btn-error h-10 w-13 text-sm" onClick={() => {dispatch(DeleteData(item)); navigate("/")}}>
                        Delete
                      </button>
                      <button className="btn btn-sm btn-outline h-10 w-13 text-sm" onClick={() => navigate("/")}>
                        Back
                      </button>
                  </div>
              </div>
              <div className="flex">
                {item.tags?.map(data => 
                      <span  key={data} className="btn-xsm mx-1 relative bottom-6 px-2 font-semibold rounded btn-primary">{data}</span> 
                    )}
              </div>
                <div> 
                    <p>{item.Desc}</p>
                </div>
            </div>
        ) : null}
      </div>
    );
  }
  
  export default CardInfo;
  