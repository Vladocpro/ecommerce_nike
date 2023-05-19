import React from 'react';
import { getProducts } from "../../actions/getProducts";
import DropDownOptions from "../../components/dropdown/DropDownOptions";
import ProductLayout from "../../components/store/ProductLayout";
import Filters from "../../components/store/Filters";

const Store = async () => {

   const products = await getProducts()


   return (
       <div className="flex flex-col w-[94%]  mx-auto">
          <Filters/>
          <div className="flex">
             <aside className="hidden lg:block ml-1 w-[250px] h-full">
                <DropDownOptions isExpanded={true} titleStyles="relative text-lg w-[190px] font-medium" svgBox="right-12" title="On Sale" options={["Sale"]} />
                <DropDownOptions isExpanded={true} titleStyles="relative text-lg w-[190px] font-medium" svgBox="right-12" title="Price" options={["Under £50", "£50 - £100","£100 - £200",]} />
                <DropDownOptions isExpanded={true} titleStyles="relative text-lg w-[190px] font-medium" svgBox="right-12" title="Category" options={["Shoes","Trousers","T-Shirt","Jacket",]} />
                <DropDownOptions isExpanded={true} titleStyles="relative text-lg w-[190px] font-medium" svgBox="right-12" title="Gender" options={["Men","Women"]} />
                <DropDownOptions isExpanded={true} titleStyles="relative text-lg w-[190px] font-medium" svgBox="right-12" title="Sizes" options={["XS","S","M","L","XL","2XL","3XL"]} />

             </aside>
             <ProductLayout products={products} />
          </div>

       </div>

   );
};

export default Store;
