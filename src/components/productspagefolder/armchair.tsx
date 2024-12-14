import React from "react";

const Armchair: React.FC = () => {
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-6 p-4">
      {/* Left Section - Image Thumbnails */}
      <div className=" w-20 h-20 flex lg:flex-col gap-6 ml-5 lg:ml-[150px]">
        <img
          src="/armchair1.png"
          alt="Thumbnail 1"
          className="w-[151px] h-20 md:w-28 md:h-28 object-cover cursor-pointer"
        />
        <img
          src="/armchair2.png"
          alt="Thumbnail 2"
          className="w-24 h-20 md:w-24 md:h-24 object-cover cursor-pointer"
        />
        <img
          src="/armchair3.png"
          alt="Thumbnail 3"
          className="w-20 h-20 md:w-24 md:h-24 object-cover cursor-pointer"
        />
      </div>

      {/* Middle Section - Main Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="/armchair4.png"
          alt="Main Product"
          className="max-w-full lg:w-[375px] lg:h-[487px] object-contain rounded-lg"
        />
      </div>

      {/* Right Section - Product Details */}
      <div className="flex-1 space-y-4">
        <h1 className="text-xl md:text-2xl font-semibold family">
          Playwood Arm Chair
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-sm family text-gray-500">(22)</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-lg md:text-xl font-bold family">$32.00</span>
          <span className="text-gray-400 line-through">$39.00</span>
        </div>
        <span className="family text-[#0D134E] text-[16px]">Color</span>
        <p className="text-[16px] md:text-[18px] text-[#A9ACC6] family leading-[29px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
          porttitor purus, et volutpat sit.
        </p>
        <button className="bg-[#fff] text-[#151875] px-6 py-2 text-[16px] family font-normal leading-[29px]">
          Add to Cart 🤍
        </button>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <div className=" text-[#151875] flex-col flex tracking-wider  leading-[29px] family text-[16px] font-semibold">
            <span>Categories:</span>
            <span>Tags:</span>
            <span>Share:</span>
          </div>
          {/* icons */}
          <div className="mt-14 mr-20 flex gap-3">
            <div className="flex items-center justify-center w-5 h-5 bg-[#151875] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 9 9"
                fill="none"
              >
                <path
                  d="M5.68689 7.6391V5.01638H6.57169L6.70321 3.9895H5.68689V3.33542C5.68689 3.0391 5.76945 2.83622 6.19473 2.83622H6.73361V1.9207C6.47142 1.8926 6.20787 1.87903 5.94417 1.88006C5.16209 1.88006 4.62513 2.3575 4.62513 3.23398V3.98758H3.74609V5.01446H4.62705V7.6391H5.68689Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center w-5 h-5 bg-[#FB2E86] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 9 9"
                fill="none"
              >
                <path
                  d="M7.62291 3.57764C7.61968 3.33528 7.57431 3.09533 7.48883 2.86852C7.4147 2.67721 7.30148 2.50347 7.1564 2.35839C7.01132 2.21331 6.83758 2.10009 6.64627 2.02596C6.42237 1.94192 6.18584 1.89647 5.94675 1.89156C5.63891 1.8778 5.54131 1.87396 4.75987 1.87396C3.97843 1.87396 3.87827 1.87396 3.57267 1.89156C3.33368 1.89651 3.09726 1.94195 2.87347 2.02596C2.68212 2.10004 2.50835 2.21324 2.36327 2.35832C2.21818 2.50341 2.10498 2.67718 2.03091 2.86852C1.94669 3.09224 1.90135 3.32872 1.89683 3.56772C1.88307 3.87588 1.87891 3.97348 1.87891 4.75492C1.87891 5.53636 1.87891 5.6362 1.89683 5.94212C1.90163 6.18148 1.94675 6.41764 2.03091 6.64196C2.10511 6.83325 2.21839 7.00695 2.36353 7.15197C2.50866 7.29699 2.68245 7.41015 2.87379 7.4842C3.09696 7.57163 3.33343 7.62032 3.57299 7.6282C3.88115 7.64196 3.97875 7.64612 4.76019 7.64612C5.54163 7.64612 5.64179 7.64612 5.94739 7.6282C6.18647 7.62349 6.42302 7.57815 6.6469 7.49412C6.83817 7.41991 7.01187 7.30666 7.15693 7.16159C7.302 7.01652 7.41525 6.84282 7.48947 6.65156C7.57363 6.42756 7.61874 6.1914 7.62355 5.95172C7.6373 5.64388 7.64146 5.54628 7.64146 4.76452C7.64082 3.98308 7.64083 3.88388 7.62291 3.57764ZM4.75795 6.23268C3.94067 6.23268 3.27859 5.5706 3.27859 4.75332C3.27859 3.93604 3.94067 3.27396 4.75795 3.27396C5.1503 3.27396 5.52658 3.42982 5.80401 3.70726C6.08144 3.98469 6.23731 4.36097 6.23731 4.75332C6.23731 5.14567 6.08144 5.52195 5.80401 5.79939C5.52658 6.07682 5.1503 6.23268 4.75795 6.23268ZM6.29619 3.5642C6.10515 3.5642 5.95123 3.40996 5.95123 3.21924C5.95123 3.17396 5.96014 3.12913 5.97747 3.08729C5.9948 3.04546 6.0202 3.00745 6.05222 2.97543C6.08423 2.94341 6.12224 2.91802 6.16408 2.90069C6.20591 2.88336 6.25075 2.87444 6.29603 2.87444C6.34131 2.87444 6.38614 2.88336 6.42797 2.90069C6.46981 2.91802 6.50782 2.94341 6.53984 2.97543C6.57185 3.00745 6.59725 3.04546 6.61458 3.08729C6.63191 3.12913 6.64083 3.17396 6.64083 3.21924C6.64083 3.40996 6.48659 3.5642 6.29619 3.5642Z"
                  fill="white"
                />
                <path
                  d="M4.75784 5.71416C5.28856 5.71416 5.7188 5.28392 5.7188 4.7532C5.7188 4.22247 5.28856 3.79224 4.75784 3.79224C4.22711 3.79224 3.79688 4.22247 3.79688 4.7532C3.79688 5.28392 4.22711 5.71416 4.75784 5.71416Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center w-5 h-5 bg-[#151875] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 9 9"
                fill="none"
              >
                <g clip-path="url(#clip0_108_8636)">
                  <path
                    d="M8.48565 2.49972C8.21845 2.61812 7.93141 2.69812 7.62965 2.73428C7.94101 2.54797 8.17395 2.25475 8.28501 1.90932C7.99248 2.08307 7.67232 2.20538 7.33845 2.27092C7.11393 2.03119 6.81655 1.8723 6.49247 1.81891C6.1684 1.76552 5.83576 1.82061 5.5462 1.97564C5.25665 2.13067 5.02637 2.37695 4.89114 2.67626C4.7559 2.97557 4.72326 3.31116 4.79829 3.63092C4.20555 3.60116 3.62569 3.44709 3.09634 3.17873C2.567 2.91036 2.1 2.53369 1.72565 2.07316C1.59765 2.29396 1.52405 2.54996 1.52405 2.8226C1.5239 3.06804 1.58435 3.30972 1.70001 3.52619C1.81567 3.74267 1.98298 3.92725 2.18709 4.06356C1.95037 4.05603 1.71889 3.99206 1.51189 3.877V3.8962C1.51186 4.24043 1.63094 4.57408 1.84891 4.84052C2.06687 5.10695 2.37031 5.28977 2.70773 5.35796C2.48814 5.41739 2.25791 5.42614 2.03445 5.38356C2.12965 5.67975 2.31509 5.93877 2.5648 6.12433C2.81452 6.3099 3.11602 6.41273 3.42709 6.41844C2.89903 6.83297 2.24689 7.05783 1.57557 7.05684C1.45665 7.05687 1.33783 7.04992 1.21973 7.03604C1.90116 7.47417 2.6944 7.7067 3.50453 7.7058C6.24693 7.7058 7.74613 5.43444 7.74613 3.46452C7.74613 3.40052 7.74453 3.33588 7.74165 3.27188C8.03326 3.06099 8.28498 2.79984 8.48501 2.50068L8.48565 2.49972Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_108_8636">
                    <rect
                      width="7.68"
                      height="7.68"
                      fill="white"
                      transform="translate(0.919922 0.919983)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Armchair;
