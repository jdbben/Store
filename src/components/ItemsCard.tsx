const ItemsCard = () => {
  return (
    <form>
      <img src="/img/shirt.jpg" />
      <div>
        <h3>Basic Tee</h3>
        <h3>$35</h3>
        <fieldset>
          <legend className="sr-only">Choose a color</legend>
          <div className="forced-color-adjust-none ...">
            <label>
              <input
                className="sr-only"
                type="radio"
                name="color-choice"
                value="White"
              />
              <span className="sr-only">White</span>
              <span className="size-6 rounded-full border border-black/10 bg-white"></span>
            </label>
          </div>
        </fieldset>
      </div>
    </form>
  );
};

export default ItemsCard;
