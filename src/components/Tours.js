import Title from './Title'
import { tours } from '../data'
const Tours = () => {
  return (
    <section class="section" id="tours">
      <Title title="featured" subTitle="Tours" />

      <div class="section-center featured-center">
        {tours.map((tour) => {
          return (
            <article class="tour-card" key={tour.id}>
              <div class="tour-img-container">
                <img src={tour.image} class="tour-img" alt={tour.title} />
                <p class="tour-date">{tour.date}</p>
              </div>
              <div class="tour-info">
                <div class="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.info} </p>
                <div class="tour-footer">
                  <p>
                    <span>
                      <i class="fas fa-map"></i>
                    </span>
                    {tour.location}
                  </p>
                  <p> {tour.duration} days</p>
                  <p> Starting {tour.cost} </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Tours
