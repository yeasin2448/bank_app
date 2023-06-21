import { clients } from "../constants";
import styles from "../style";

function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] cursor-pointer`}
          >
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[192px] object-contain hover:mix-blend-lighten"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
