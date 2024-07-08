import emptySvg from '../../assets/empty-hand.svg';

export const LinksEmpty = () => {
  return (
    <div className="empty">
      <img src={emptySvg} alt="" />
      <h2>Let’s get you started</h2>
      <p>
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};
