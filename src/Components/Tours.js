import Title from "./Title";
import Tour from "./Tour";
const Tours = () => {
  return (
    <section class="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div class="section-center featured-center">
        <Tour />
      </div>
    </section>
  );
};

export default Tours;
