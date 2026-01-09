function Pricing() {
  return (
    <section className="pricing">
      <h2>Simple, transparent pricing</h2>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p className="price">₹999 / month</p>
          <ul>
            <li>Core features</li>
            <li>Email support</li>
            <li>Basic analytics</li>
          </ul>
          <button className="pricing-btn">Get Started</button>
        </div>

        <div className="pricing-card highlight">
          <h3>Pro</h3>
          <p className="price">₹1999 / month</p>
          <ul>
            <li>All Basic features</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
          </ul>
          <button className="pricing-btn">Get Started</button>
        </div>

        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p className="price">Custom</p>
          <ul>
            <li>All Pro features</li>
            <li>Dedicated support</li>
            <li>Custom integrations</li>
          </ul>
          <button className="pricing-btn">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
