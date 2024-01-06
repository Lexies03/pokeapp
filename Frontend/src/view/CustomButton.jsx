import "../../styles/customButton.css";

const CustomButton = ({ btnValue, handleLoadMore }) => {
  return (
    <div className="btn_loadMore_container">
      <button className="btn_loadMore" onClick={handleLoadMore}>
        {btnValue}
      </button>
    </div>
  );
};

export default CustomButton;
