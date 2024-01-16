import { services } from "../data";
const Service = ({parentClass,articleClass,spanClass,itemClass,titleClass,textClass}) => {
  return (
     services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article class="service" key={id}>
              <span class="service-icon">
                <i class={icon}></i>
              </span>
              <div class="service-info">
                <h4 class="service-title">{title}</h4>
                <p class="service-text">{text}</p>
              </div>
            </article>
          );
        })
  );
}

export default Service