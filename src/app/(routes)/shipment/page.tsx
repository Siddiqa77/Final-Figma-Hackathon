

// "use client";
// import type React from "react";
// import { useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { Address, Rate, trackingObjType } from "../../../../type";
// import LoaderCircle from "@/components/LoaderCircle";




// const ShippingRatesPage = () => {
//   const [shipeToAddress, setshipeToAddress] = useState<Address>({
//     name: "John Doe",
//     phone: "+1 555-678-1234",
//     addressLine1: "1600 Pennsylvania Avenue NW",
//     addressLine2: "",
//     cityLocality: "Washington",
//     stateProvince: "DC",
//     postalCode: "20500",
//     countryCode: "US",
//     addressResidentialIndicator: "no",
//   });

//   const [rates, setRates] = useState<Rate[]>([]);
//   const [rateId, setrateId] = useState<string | null>(null);
//   const [labelPdf, setLabelPdf] = useState<string | null>(null);
//   const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState<string[]>([]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrors([]);
//     setRates([]);

//     try {
//       const response = await axios.post("/api/shipengine/get-rates", {
//         shipeToAddress,
//         packages: cartProductsWhichCanBeShipped.map((product:any) => ({
//           weight: product.weight,
//           dimensions: product.dimensions,
//         })),
//       });
//       setRates(response.data.shipmentDetails.rateResponse.rates);
//     } catch (error) {
//       console.log(error);
//       setErrors(["An error occurred while fetching rates."]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCreateLabel = async () => {
//     if (!rateId) {
//       alert("Please select a rate to create a label.");
//       return;
//     }

//     setLoading(true);
//     setErrors([]);

//     try {
//       const response = await axios.post("/api/shipengine/label", {
//         rateId: rateId,
//       });
//       const labelData = response.data;
//       setLabelPdf(labelData.labelDownload.href);
//       setTrackingObj({
//         trackingNumber: labelData.trackingNumber,
//         labelId: labelData.labelId,
//         carrierCode: labelData.carrierCode,
//       });
//     } catch (error) {
//       console.log(error);
//       setErrors(["An error occurred while creating the label."]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
     
//       <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-5xl font-bold text-black mb-8 text-center">
//             Shipping Calculator
//           </h1>

//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div>
//                 <h2 className="text-3xl font-medium text-black mb-6">
//                   Shipping Address
//                 </h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       value={shipeToAddress.name}
//                       onChange={(e) =>
//                         setshipeToAddress({
//                           ...shipeToAddress,
//                           name: e.target.value,
//                         })
//                       }
//                       className="w-full  h-20 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       value={shipeToAddress.phone}
//                       onChange={(e) =>
//                         setshipeToAddress({
//                           ...shipeToAddress,
//                           phone: e.target.value,
//                         })
//                       }
//                       className="w-full h-20 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2 sm:col-span-2">
//                     <label className="text-sm font-medium text-gray-700">
//                       Address Line 1
//                     </label>
//                     <input
//                       type="text"
//                       value={shipeToAddress.addressLine1}
//                       onChange={(e) =>
//                         setshipeToAddress({
//                           ...shipeToAddress,
//                           addressLine1: e.target.value,
//                         })
//                       }
//                       className="w-full h-20  px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2 sm:col-span-2">
//                     <label className="text-sm font-medium text-gray-700">
//                       Address Line 2 (Optional)
//                     </label>
//                     <input
//                       type="text"
//                       value={shipeToAddress.addressLine2}
//                       onChange={(e) =>
//                         setshipeToAddress({
//                           ...shipeToAddress,
//                           addressLine2: e.target.value,
//                         })
//                       }
//                       className="w-full  h-20 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700">
//                       City
//                     </label>
//                     <input
//                       type="text"
//                       value={shipeToAddress.cityLocality}
//                       onChange={(e) =>
//                         setshipeToAddress({
//                           ...shipeToAddress,
//                           cityLocality: e.target.value,
//                         })
//                       }
//                       className="w-full h-20 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700">
//                       State/Province
//                     </label>
//                     <input
//                       type="text"
//                       value={shipeToAddress.stateProvince}
//                       onChange={(e) =>
//                         setshipeToAddress({
//                           ...shipeToAddress,
//                           stateProvince: e.target.value,
//                         })
//                       }
//                       className="w-full h-20 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700">
//                       Postal Code
//                     </label>
//                     <input
//                       type="text"
//                       value={shipeToAddress.postalCode}
//                       onChange={(e) =>
//                         setshipeToAddress({
//                           ...shipeToAddress,
//                           postalCode: e.target.value,
//                         })
//                       }
//                       className="w-full h-20 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700">
//                       Country Code
//                     </label>
//                     <input
//                       type="text"
//                       value={shipeToAddress.countryCode}
//                       onChange={(e) =>
//                         setshipeToAddress({
//                           ...shipeToAddress,
//                           countryCode: e.target.value,
//                         })
//                       }
//                       className="w-full h-20 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-yellow-600 text-black py-4 rounded-lg hover:bg-yellow-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//               >
//                 {loading && <LoaderCircle/>}
//                 {loading ? "Calculating Rates..." : "Get Shipping Rates"}
//               </button>
//             </form>

//             {rates.length > 0 && (
//               <div className="mt-12">
//                 <h2 className="text-2xl font-medium text-white mb-6">
//                   Available Shipping Options
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {rates.map((rate) => (
//                     <div
//                       key={rate.rateId}
//                       onClick={() => setrateId(rate.rateId)}
//                       className={`p-6 rounded-xl border-2 transition-all cursor-pointer hover:border-black ${rateId === rate.rateId ? "border-black bg-black/5" : "border-gray-200"}`}
//                     >
//                       <div className="flex items-start gap-4">
//                         <input
//                           type="radio"
//                           name="shippingRate"
//                           checked={rateId === rate.rateId}
//                           onChange={() => setrateId(rate.rateId)}
//                           className="mt-1 h-4 w-4 text-black focus:ring-black"
//                         />
//                         <div className="flex-1">
//                           <p className="text-lg font-medium text-black">
//                             {rate.carrierFriendlyName}
//                           </p>
//                           <p className="text-gray-600 mt-1">
//                             {rate.serviceType}
//                           </p>
//                           <p className="text-2xl font-bold text-black mt-2">
//                             ${rate.shippingAmount.amount}{" "}
//                             <span className="text-sm font-normal text-gray-600">
//                               {rate.shippingAmount.currency}
//                             </span>
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {rateId && (
//               <div className="mt-8">
//                 <button
//                   onClick={handleCreateLabel}
//                   disabled={loading}
//                   className="w-full bg-yellow-600 text-black py-4 rounded-lg hover:bg-yellow-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 >
//                   {loading && <LoaderCircle/>}
//                   {loading ? "Creating Label..." : "Create Shipping Label"}
//                 </button>
//               </div>
//             )}

//             {labelPdf && (
//               <div className="mt-6">
//                 <Link
//                   href={labelPdf}
//                   target="_blank"
//                   className="inline-flex w-full items-center justify-center px-6 py-4 bg-white text-black border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors"
//                 >
//                   Download Shipping Label
//                 </Link>
//               </div>
//             )}

//             {trackingObj && (
//               <div className="mt-12 p-6 bg-yellow- rounded-xl">
//                 <h2 className="text-2xl font-medium text-black mb-4">
//                   Tracking Information
//                 </h2>
//                 <div className="space-y-3">
//                   <p className="text-gray-700">
//                     <span className="font-medium">Tracking Number:</span>{" "}
//                     {trackingObj.trackingNumber}
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-medium">Label ID:</span>{" "}
//                     {trackingObj.labelId}
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-medium">Carrier:</span>{" "}
//                     {trackingObj.carrierCode}
//                   </p>
//                   <div className="mt-6">
//                     <Link
//                       href={`/tracking/?labelId=${trackingObj.labelId}`}
//                       className="inline-flex items-center justify-center px-6 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors w-full"
//                     >
//                       Track Order
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {errors.length > 0 && (
//               <div className="mt-8 p-6 bg-red-50 rounded-xl">
//                 <h2 className="text-lg font-medium text-red-800 mb-4">
//                   Error Details
//                 </h2>
//                 <div className="space-y-2">
//                   {errors.map((error, index) => (
//                     <p key={index} className="text-red-600">
//                       {error}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
      
//     </>
//   );
// };

// export default ShippingRatesPage;

"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Address, Rate, trackingObjType } from "../../../../type";
import LoaderCircle from "@/components/LoaderCircle";

const ShippingRatesPage = () => {
  const [shipToAddress, setShipToAddress] = useState<Address>({
    name: "John Doe",
    phone: "+1 555-678-1234",
    addressLine1: "1600 Pennsylvania Avenue NW",
    addressLine2: "",
    cityLocality: "Washington",
    stateProvince: "DC",
    postalCode: "20500",
    countryCode: "US",
    addressResidentialIndicator: "no",
  });

  const [cartProductsWhichCanBeShipped, setCartProducts] = useState<any[]>([
    // Dummy data for testing, replace with actual cart data
    { weight: { value: 2, unit: "lb" }, dimensions: { height: 10, width: 5, length: 15, unit: "inch" } },
  ]);

  const [rates, setRates] = useState<Rate[]>([]);
  const [rateId, setRateId] = useState<string | null>(null);
  const [labelPdf, setLabelPdf] = useState<string | null>(null);
  const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    setRates([]);

    if (!cartProductsWhichCanBeShipped || cartProductsWhichCanBeShipped.length === 0) {
      setErrors(["No products available for shipping."]);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/shipengine/get-rates", {
        
        shipToAddress,
        packages: cartProductsWhichCanBeShipped.map((product) => ({
          
          weight: product?.weight || { value: 0, unit: "ounce" },
          dimensions: product?.dimensions || { height: 0, width: 0, length: 0, unit: "inch" },
        })),
        
      });

      setRates(response.data?.shipmentDetails?.rateResponse?.rates || []);
    } catch (error:any) {
      console.error("Error fetching rates:", error?.response?.data || error.message);
      setErrors(["Failed to fetch shipping rates."]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateLabel = async () => {
    if (!rateId) {
      alert("Please select a rate to create a label.");
      return;
    }

    setLoading(true);
    setErrors([]);

    try {
      const response = await axios.post("/api/shipengine/label", { rateId });
      const labelData = response.data;
      setLabelPdf(labelData.labelDownload.href);
      setTrackingObj({
        trackingNumber: labelData.trackingNumber,
        labelId: labelData.labelId,
        carrierCode: labelData.carrierCode,
      });
    } catch (error:any) {
      console.error("Error creating label:", error?.response?.data || error.message);
      setErrors(["Failed to create shipping label."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Shipping Calculator</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-xl font-semibold text-black">Shipping Address</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" value={shipToAddress.name} onChange={(e) => setShipToAddress({ ...shipToAddress, name: e.target.value })} className="border p-3 rounded-lg w-full" required />
            <input type="tel" placeholder="Phone Number" value={shipToAddress.phone} onChange={(e) => setShipToAddress({ ...shipToAddress, phone: e.target.value })} className="border p-3 rounded-lg w-full" required />
            <input type="text" placeholder="Address Line 1" value={shipToAddress.addressLine1} onChange={(e) => setShipToAddress({ ...shipToAddress, addressLine1: e.target.value })} className="border p-3 rounded-lg w-full" required />
            <input type="text" placeholder="City" value={shipToAddress.cityLocality} onChange={(e) => setShipToAddress({ ...shipToAddress, cityLocality: e.target.value })} className="border p-3 rounded-lg w-full" required />
            <input type="text" placeholder="State/Province" value={shipToAddress.stateProvince} onChange={(e) => setShipToAddress({ ...shipToAddress, stateProvince: e.target.value })} className="border p-3 rounded-lg w-full" required />
            <input type="text" placeholder="Postal Code" value={shipToAddress.postalCode} onChange={(e) => setShipToAddress({ ...shipToAddress, postalCode: e.target.value })} className="border p-3 rounded-lg w-full" required />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 disabled:bg-gray-400">
            {loading ? "Calculating Rates..." : "Get Shipping Rates"}
          </button>
        </form>

        {rates.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Available Shipping Options</h2>
            <div className="space-y-4">
              {rates.map((rate) => (
                <div key={rate.rateId} onClick={() => setRateId(rate.rateId)} className={`p-4 border-2 rounded-lg cursor-pointer ${rateId === rate.rateId ? "border-blue-500 bg-blue-100" : "border-gray-300"}`}>
                  <p className="font-medium">{rate.carrierFriendlyName}</p>
                  <p className="text-gray-600">{rate.serviceType}</p>
                  <p className="text-lg font-bold">${rate.shippingAmount.amount}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {rateId && (
          <button onClick={handleCreateLabel} disabled={loading} className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 disabled:bg-gray-400">
            {loading ? "Creating Label..." : "Create Shipping Label"}
          </button>
        )}

        {labelPdf && (
          <div className="mt-6 text-center">
            <Link href={labelPdf} target="_blank" className="bg-black text-white px-6 py-3 rounded-lg">Download Shipping Label</Link>
          </div>
        )}

        {errors.length > 0 && <p className="mt-4 text-red-500 text-center">{errors.join(", ")}</p>}
      </div>
    </div>
  );
};

export default ShippingRatesPage;
