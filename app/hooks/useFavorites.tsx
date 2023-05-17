// "use client"
//
// import React, {useState} from 'react';
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useCallback, useMemo } from "react";
// import {User} from "../types";
// import {Product} from "@prisma/client";
// import {useDispatch} from "react-redux";
// import {setToastPopup, ToastPositions, ToastType} from "../redux/slices/modals";
//
//
//
// interface IUseCart {
//    size: string;
//    currentUser?: User | null
// }
// const useChosenSizes = ({ size, currentUser }: IUseCart) => {
//    const router = useRouter();
//    const dispatch = useDispatch()
//    const [sizes, setSizes] = useState<string[]>([])
//    const [sizeIsActive, setSizeIsActive] = useState<boolean>(false)
//    // let sizes: string[] = [];
//
//    // const addedToCart= useMemo(() => {
//    //    const cartIds = currentUser?.cart.map((product) => product.id) || [];
//    //
//    //    return cartIds.includes(product.id);
//    // }, [currentUser, product.id]);
//
//    // const sizeIsActive= useMemo(() => {
//    //    return sizes.includes(size);
//    // }, [sizes, size]);
//
//    // let sizeIsActive : boolean = false
//    //
//    // const toggleAddSize = (e: React.MouseEvent<HTMLDivElement>) => {
//    //    e.stopPropagation();
//    //    sizeIsActive = sizes.includes(size);
//    //    if (sizeIsActive) sizes.filter((item) => item !== size)
//    //    else sizes.push(size)
//    // }
//
//
//    const toggleAddSize = (e: React.MouseEvent<HTMLDivElement>) => {
//       e.stopPropagation();
//       if (sizes.includes(size)) {
//          setSizes(sizes.filter((item) => item !== size))
//          setSizeIsActive(false)
//       }
//       else {
//          setSizes([...sizes, size])
//          setSizeIsActive(true)
//       }
//    };
//
//
//
//
//
//    // const toggleAddSize = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
//    //        e.stopPropagation();
//    //        if (sizes.includes(size)) {
//    //           setSizes(sizes.filter((item) => item !== size))
//    //           setSizeIsActive(false)
//    //        }
//    //        else {
//    //           setSizes([...sizes, size])
//    //           setSizeIsActive(true)
//    //        }
//    //     },
//    //     [size, sizeIsActive, sizes]);
//
//
//
//
//
//
//
//    // const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
//    //        e.stopPropagation();
//    //
//    //        try {
//    //           let request;
//    //
//    //           if (addedToCart) {
//    //              request = () => axios.delete(`/api/favorites/${listingId}`);
//    //           } else {
//    //              request = () => axios.post(`/api/favorites/${listingId}`);
//    //           }
//    //
//    //           await request();
//    //           router.refresh();
//    //           dispatch(setToastPopup({visible: true, message: "Items added to Cart", position: ToastPositions.AUTH, type: ToastType.SUCCESS, duration: 2000}))
//    //        } catch (error) {
//    //           dispatch(setToastPopup({visible: true, message: "Something went wrong", position: ToastPositions.AUTH, type: ToastType.ERROR, duration: 2000}))
//    //        }
//    //     },
//    //     [
//    //        currentUser,
//    //        addedToCart,
//    //        product.id,
//    //        router
//    //     ]);
//
//    return {
//       sizeIsActive,
//       toggleAddSize,
//    }
// };
//
// export default useChosenSizes;
//
//
//
//
//
