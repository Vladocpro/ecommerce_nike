"use client"

import React from 'react';
import {Product} from "@prisma/client";
import {FC} from "preact/compat";

interface ProductProps {
   product: Product
}

const ProductComponent : FC <ProductProps> = ({product}) => {


   return (
       <div>

       </div>
   );
};

export default ProductComponent;
