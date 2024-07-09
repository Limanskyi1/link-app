import { useDispatch } from "react-redux";
import { addLink } from "../../redux/userSlice";
import { Button } from "../Button";

export const LinksHeader = () => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    dispatch(addLink())
  }
  return (
    <>
      <h2>Customize your links</h2>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <Button onClick={onClickAdd} className="btn-transparent">+ Add new link</Button>
    </>
  );
};
