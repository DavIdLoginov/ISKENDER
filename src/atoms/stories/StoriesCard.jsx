import "../style.css";

const StoriesCard = ({ img, name }) => {
  return (
    <>
      {name && img != '' ? (
        <div className="card">
          <div className="card__img">
            <img src={img} alt="картинка сториз" />
          </div>
          <p>{name}</p>
        </div>
      ) : (
        <div className="card-none">
          <div></div>
          <p></p>
        </div>
      )}
    </>
  );
};

export default StoriesCard;
