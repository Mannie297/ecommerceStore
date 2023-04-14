import product from '@/ecoma/schemas/product';
import banner from '@/ecoma/schemas/banner';

import client from '@/lib/client';
import { createClient, groq } from "next-sanity";


export async function getProduct() {
    return createClient(client).fetch(
      groq`*[_type == "product"]{
        _id,
        slug,
        name,
        price,
        "image": image.asset->url
      }`
    )
}

export async function getBanner() {
    return createClient(client).fetch(
      groq`*[_type == "banner"]{
        _id,
        name,
        "image": image.asset->url,
        smallText,
        desc,
        midText,
        largeText1,
        largeText2,
        discount,
        buttonText
      }`
    )
}
  

export async function getSlug(vv) {
    const hh = vv.params
    const tt = hh.slug
    //{console.log(hh)}

    return createClient(client).fetch(
      groq`*[_type == "product" && slug.current == '${tt}']{
        _id,
        slug,
        name,
        price,
        details,
        stripeid,
        "image": image.asset->url
      }`
    )
}

export async function getSlugTwo() {
    return createClient(client).fetch(
      groq`*[_type == "product"]{
        slug{current}
      }`
    )
}



