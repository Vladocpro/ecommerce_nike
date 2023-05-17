import React from 'react';
import { getProducts } from "../../actions/getProducts";
import DropDownSelect from "../../components/DropDownSelect";
import ProductLayout from "../../components/store/ProductLayout";
import Filters from "../../components/store/Filters";

const Store = async () => {

   const products = await getProducts()


   return (
       <div className="flex flex-col w-[94%]  mx-auto">
          <Filters/>
          <div className="flex">
             <aside className="hidden lg:block ml-1 w-[260px] h-full">
                <DropDownSelect title="On Sale" options={["Sale"]} />
                <DropDownSelect title="Price" options={["Under £50", "£50 - £100","£100 - £200",]} />
                <DropDownSelect title="Category" options={["Shoes","Trousers","T-Shirt","Jacket",]} />
                <DropDownSelect title="Gender" options={["Men","Women"]} />
                <DropDownSelect title="Sizes" options={["XS","S","M","L","XL","2XL","3XL"]} />

             </aside>
             <ProductLayout products={products} />
          </div>

       </div>

   );
};

export default Store;
