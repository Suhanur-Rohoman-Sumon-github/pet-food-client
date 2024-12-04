import CollectionCard from "./CullectionCard";

const CollectionSection = () => {
  return (
    <div className="my-[120px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <CollectionCard
        btnColor="button-primary rounded-full"
        btnText="Shop Now"
        heading="Canine Feast"
        subheading="Nourishment for Every Adventure"
        img="https://openfarmpet.com/cdn/shop/files/PDP-Benefits-Cat_10ddc8ca-0bb7-4801-8d3f-a3f9f91ec9df.png?v=1717685866&width=897"
      />
      <CollectionCard
        heading="Purrfect Feast"
        subheading="A Meal as Majestic as Your Feline"
        btnColor="button-secondary "
        btnText="Buy Now"
        img="https://theme-biggmarket.myshopify.com/cdn/shop/files/subbanner2-02_43a956f6-9b19-4b43-9c03-788b6e197f31.jpg?v=1613706853"
      />
      <CollectionCard
        heading="FeatherFuel"
        subheading="Energy for Every Chirp and Flight"
        btnColor="button-primary  "
        btnText="Checkout Now"
        img="https://theme-biggmarket.myshopify.com/cdn/shop/files/subbanner2-03_7dac6912-6e47-40e9-b931-f37c8f9ccf3a.jpg?v=1613706853"
      />
    </div>
  );
};

export default CollectionSection;
