import styles from "./style";
import {
  Navbar,
  Hero,
  State,
  Business,
  CTA,
  Clients,
  Billing,
  CardDeal,
  Testimonials,
  Footer,
} from "./components";

const App = () => (
  <div className="bg-primary text-white w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <State />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
