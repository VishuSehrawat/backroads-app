import Title from "./Title";

import Service from "./Service";

const Services = () => {
  return (
    <section class="section services" id="services">
      <Title title="our" subTitle="services" />

      <div class="section-center services-center">
        <Service
          parentClass="section-center services-center"
          itemClass="service-icon"
        />
      </div>
    </section>
  );
};

export default Services;
