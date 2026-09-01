import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const { plan } = await request.json();


const priceId =
  plan === "yearly"
    ? process.env.STRIPE_YEARLY_PRICE_ID
    : process.env.STRIPE_MONTHLY_PRICE_ID;

    const session = await stripe.checkout.sessions.create({
  mode: "subscription",

  line_items: [
    {
      price: priceId,
      quantity: 1,
    },
  ],

  success_url: `${request.headers.get("origin")}/settings?success=true`,
  cancel_url: `${request.headers.get("origin")}/choose-plan`,
});

return Response.json({ url: session.url });

}