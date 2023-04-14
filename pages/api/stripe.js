

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);


export default async function handler(req, res) {
  if (req.method === 'POST') {

    console.log(req.body)

    const items = req.body.items;
    
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.stripeid,
                quantity: item.quantity
            }
        )
    });
    //console.log(lineItems)

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      /*
      line_items:[
          {
              price: 'price_1MtHwFHM9HCFA8YGtqzjbwpW',
              quantity: 20,
          }

      ],*/
      mode: 'payment',
      success_url:`${req.headers.origin}/success`,
      cancel_url:`${req.headers.origin}/cancel`,
  });
  res.send(JSON.stringify({
      url: session.url
  }));
  }
}
