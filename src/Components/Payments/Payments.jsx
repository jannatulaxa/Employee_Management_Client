import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Checkout";
import HelmateTittle from "../Shared/HelmateTittle/HelmateTittle";
import HeadTittle from "../Shared/HeadTittle/HeadTittle";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
  return (
    <div className="mt-20">
      <HelmateTittle helmetTittle={"Employe-Management | Payments"}></HelmateTittle>
      <HeadTittle
        heading={"Please Pay for membership"}
        tittle={"Payment"}
      ></HeadTittle>
      <div className="w-[25rem] md:w-[30rem] mx-auto my-20 border ">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;