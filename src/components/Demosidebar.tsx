"use client"
import Link from "next/link";
import { data } from "@/app/data";
import Image from "next/image";


const Demosidebar = () => {

  const handleProceedToCheckout = () => {
   
    console.log("Proceeding to checkout");
  };
  return (
    <div className="mt-16 md:mt-[200px] md:w-1/3 md:ml-8">
      {data.map((data) => (
        <div
          key={data.id}
          className="flex w-full items-center gap-4 p-4 border rounded-md mb-4"
        >
         <div className="flex gap-4">
         <Image
            className="w-20 h-20 object-cover rounded-md"
            src={data.imageUrl || "/default-image.png"}
            alt={data.title}
            width={100}
            height={100}
          />
         
         </div>
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
        <Link href={`/completeorder`}>
             <button
                onClick={handleProceedToCheckout}
                className="w-full bg-[#19D16F] text-white py-2 rounded-md mt-3"
              >
                Proceed to Complete
              </button>
             </Link>
      </div>
    </div>
  );
};

export default Demosidebar;
