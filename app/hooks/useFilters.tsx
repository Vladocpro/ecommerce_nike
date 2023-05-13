"use client"

import React from 'react';

const useFilters = () => {

   const [saleFilter, setSaleFilter] = React.useState<{title: string, options : [{optionTitle: string, optionActive: boolean}]}>({title: "On Sale", options : [{}]})
   const [priceFilter, setPriceFilter] = React.useState<{title: string, options : [{optionTitle: string, optionActive: boolean}]}>({title: "On Sale", options : [{}]})

   const filteringOfAll = () => {
      //bla-bla-bla
      const activeOptions = priceFilter.options.filter(option => option.optionActive)

      const result = filterByPrice(products, activeOptions)
   }

   const filterByPrice = (products: { price: number }[], options: { optionTitle: string }[]) => {
      return options.reduce((filteredProducts: any, option) => {
         const [min, max] = option.optionTitle.split(" ").map(Number);

         let filteredByPrice;
         if (min > 0 && max === 0) {
            filteredByPrice = products.filter(product => product.price > min);
         } else if (min === 0 && max > 0) {
            filteredByPrice = products.filter(product => product.price < max);
         } else {
            filteredByPrice = products.filter(product => product.price >= min && product.price <= max);
         }

         return [...filteredProducts, ...filteredByPrice];
      }, []);
   };


   return (
       <div>

       </div>
   );
};

export default useFilters;
