import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
    *[_type == "product"]{
  _id,
  title,
  productImage {
    asset->{
      url
    }
  },
  price,
  tags,
  discountPercentage,
  isNew
}
  
`);
   
export const furniture = defineQuery(`
    *[_type == "product"][0..7]{
  _id,
  title,
  productImage {
    asset->{
      url
    }
  },
  price,
  tags,
  discountPercentage,
  isNew
}
  
`);
