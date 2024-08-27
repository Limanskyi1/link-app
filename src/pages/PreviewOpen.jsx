import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fireBaseService from "../services/fireBaseService";
import { PreviewInfo } from "../components/Preview/PreviewInfo";
import emptyImg from "../assets/empty-img.svg";

export const PreviewOpen = () => {
  const { id } = useParams();
  const [loading,setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      try {
        const data = await fireBaseService.getUserData(id);
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setUserData(null);
        setLoading(false);
      } finally{
        setLoading(false);
      }
    };
    if (id) {
      getUserData();
    }
  }, []);


  if(loading){
    return <h2 className="flex-fullpage">Loading...</h2>
  }


  if(!userData){
      return <h2 className="flex-fullpage">Not found user!</h2>
  }

  return (
    <div className="preview-page">
      <div className="container">
        <div className="card">
          <PreviewInfo
            user_name={userData?.user_name}
            user_last_name={userData?.user_last_name}
            email={userData?.email}
            links={userData?.links}
            setImage={userData?.avatar || emptyImg}
          />
        </div>
      </div>
    </div>
  );
};
