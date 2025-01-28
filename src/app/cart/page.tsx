import BasketList from "@/components/templates/BasketList";

function page() {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-sm md:text-2xl">Your Basket : </h2>
      <BasketList/>
    </div>
  );
}

export default page;
