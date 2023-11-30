
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://my-json-server.typicode.com/benirvingplt/products/"
    }),
    endpoints:(builder) => ({
        getAllProducts:builder.query({
            query:()=>'/products',
        }),

        getProductById:builder.query({
            query:(id)=>`products/${id}`,
        }),

        addToCart: builder.mutation({
            query: ({ productId }) => ({
              url: `/cart`,
              method: 'POST',
              body: { productId },
            }),
        }),
    }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery, useAddToCartMutation } = productApi;