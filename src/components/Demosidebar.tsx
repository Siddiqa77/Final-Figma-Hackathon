import { data } from "../../data";


const Demosidebar = () => {
  return (
    <div className="mt-16 md:mt-[200px] md:w-1/3 md:ml-8">
      {data.map((data) => (
        <div
          key={data.id}
          className="flex w-full items-center gap-4 p-4 border rounded-md mb-4"
        >
          <img
            className="w-20 h-20 object-cover rounded-md"
            src={data.image}
            alt={data.title}
          />
          <div className="flex-grow">
            <h4 className="text-black text-sm font-medium">{data.title}</h4>
            <p className="text-[lightsteelblue] text-xs">Color: {data.color}</p>
            <p className="text-[lightsteelblue] text-xs">Size: {data.size}</p>
          </div>
          <span className="text-blue-900 font-medium text-sm">
            ${data.price.toFixed(2)}
          </span>
        </div>
      ))}

      <div className="p-6 bg-[#E8E6F1] rounded-md">
        <div className="flex justify-between">
          <span className="text-lg font-medium">Subtotal</span>
          <span className="text-lg font-medium">£219.00</span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="text-lg font-medium">Total</span>
          <span className="text-lg font-medium">£325.00</span>
        </div>
        <p className="text-xs text-[#8A91AB] mt-4">
          ✅ Shipping & taxes calculated at checkout
        </p>
        <button className="bg-[#19D16F] text-white rounded-md py-3 mt-4 w-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Demosidebar;
