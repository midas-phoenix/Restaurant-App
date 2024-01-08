export function ShippingAddressDetails() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Shipping address</h2>
      <input
        type="text"
        name="companyName"
        placeholder="Company (optional)"
        // value={formData.companyName}
        // onChange={handleChange}
        className="mb-4 w-full rounded border border-gray-300 p-2"
      />
      <input
        type="text"
        name="streetAddress"
        placeholder="Address"
        // value={formData.streetAddress}
        // onChange={handleChange}
        className="mb-4 w-full rounded border border-gray-300 p-2"
        required
      />
      <input
        type="text"
        name="apartment"
        placeholder="Apartment, suite, etc. (optional)"
        // value={formData.apartment}
        // onChange={handleChange}
        className="mb-4 w-full rounded border border-gray-300 p-2"
      />
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          name="city"
          placeholder="City"
          //   value={formData.city}
          //   onChange={handleChange}
          className="w-full rounded border border-gray-300 p-2"
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State / Province"
          //   value={formData.state}
          //   onChange={handleChange}
          className="w-full rounded border border-gray-300 p-2"
          required
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal code"
          //   value={formData.postalCode}
          //   onChange={handleChange}
          className="w-full rounded border border-gray-300 p-2"
          required
        />
      </div>
    </div>
  );
}
