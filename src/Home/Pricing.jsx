const Pricing = () => {
  return (
    <div>
      <div className="bg-blue pricing-section-height">
        <div className="w-75 py-5 mx-auto">
          <h2 className="text-center text-white">
            Affordable <span className="text-green">Pricing Plans</span>
          </h2>
          <p className="text-center text-white-dim">
            Accessible Pricing for Everyone: Our affordable pricing plans ensure
            that anyone can easily purchase and benefit from our services,
            regardless of budget constraints.
          </p>
          <div className="d-flex justify-content-center gap-2">
            <p className="text-white">Yearly</p>
            <p className="text-white">Monthly</p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-md-row container flex-column justify-content-center gap-2 pricing-minus-margin"> 
            <p className="bg-green p-5 card">Something</p>
            <p className="bg-green p-5 card">Something</p>
            <p className="bg-green p-5 card">Something</p>
        </div>
    </div>
  );
};

export default Pricing;
