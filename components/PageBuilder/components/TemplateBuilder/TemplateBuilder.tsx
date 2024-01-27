// TemplateBuilder.js
import React from 'react';

const TemplateBuilder = ({ selectedTemplate }) => {
  const renderTemplateComponents = () => {
    switch (selectedTemplate) {
      case 'landing':
        return (
          <div>
            <p>Hero Section</p>
            <p>Testimonials</p>
            <p>Features</p>
            {/* Add other components specific to the Landing Page template */}
          </div>
        );
      case 'institutional':
        return (
          <div>
            <p>About Us</p>
            <p>Team</p>
            <p>Contact</p>
            {/* Add other components specific to the Institutional Site template */}
          </div>
        );
      case 'ecommerce':
        return (
          <div>
            <p>Product Listings</p>
            <p>Shopping Cart</p>
            <p>Checkout</p>
            {/* Add other components specific to the E-commerce template */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {selectedTemplate && (
        <div>
          <h2>Components for {selectedTemplate}:</h2>
          {renderTemplateComponents()}
        </div>
      )}
    </div>
  );
};

export default TemplateBuilder;
