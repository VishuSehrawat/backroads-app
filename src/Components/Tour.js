import { tours } from "../data";
const Tour = () => {
  return tours.map((tour) => {
    const { id, image, date, title, text, location, duration, cost } = tour;

    return (
      <article class="tour-card" key={id}>
        <div class="tour-img-container">
          <img src={image} class="tour-img" alt={title} />
          <p class="tour-date">{date}</p>
        </div>
        <div class="tour-info">
          <div class="tour-title">
            <h4>{title}</h4>
          </div>
          <p>{text}</p>
          <div class="tour-footer">
            <p>
              <span>
                <i class="fas fa-map"></i>
              </span>
              {location}
            </p>
            <p>{duration} days</p>
            <p>from ${cost}</p>
          </div>
        </div>
      </article>
    );
  });
};

export default Tour;
