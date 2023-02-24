import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeleteData } from "../store/DataSlice";

type CardInfoProps = {
    item: {
      title: string;
      Desc?: string;
      tags?: string;
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
                  <h2 className="text-4xl font-semibold lg:col-span-8 md:col-span-10 sm:col-span-12 ">{item.title}</h2>
                  <div className="flex lg:col-span-4 md:col-span-2 pt-2 justify-center gap-3 lg:justify-end items-center">
                      <button className="btn btn-sm btn-primary h-10 w-13 text-sm" onClick={() => navigate("/")}>
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
                {item.tags ? (
                  <div className="pt-3"> 
                        <span className="btn-xsm bottom-2 px-[0.4rem] py-[0.1rem] text-sm font-semibold rounded btn-primary">{item.tags}</span>
                  </div>
              ): null}
                <div className="pt-4"> 
                    <p>{item.Desc}</p>
                </div>
            </div>
        ) : null}
      </div>
    );
  }
  
  export default CardInfo;
  