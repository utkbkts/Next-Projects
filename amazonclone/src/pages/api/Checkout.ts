import { NextApiRequest, NextApiResponse } from "next";
import { StoreProps } from "../../../type";
const stripe = require("stripe")(`${process.env.STRIPE_SECRETKEY}`);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { İtems, email } = req.body;
  const modified = İtems.map((item: StoreProps) => ({
    quantity: item.quantity,
    price_data: {
      currency: "USD",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "OM", "CA"],
    },
    line_items: modified,
    mode: "payment",
    success_url: `${process.env.NEXTAUTH_URL}/Success`,
    cancel_url: `${process.env.NEXTAUTH_URL}/Checkout`,
    metadata: {
      email,
      images: JSON.stringify(İtems.map((item: any) => item.image)),
    },
  });
  res.status(200).json({
    id: session.id,
  });
}
