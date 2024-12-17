import { useUser } from "@/context/userProvider";
import { useCretePaymentIntentMutations } from "@/hook/payment.hook";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useRemoveCardMutation } from "@/hook/card.hook";
import { useCreateOrderMutation } from "@/hook/order.hook";
import { useRouter } from "next/navigation";

interface IProps {
  price: number;
  MyCart: any;
  combinedAddress?: string;
}

const CheckoutForm = ({ price, MyCart, combinedAddress }: IProps) => {
  console.log(MyCart);
  const { user } = useUser();
  const router = useRouter();

  const { mutate: addOrders } = useCreateOrderMutation();
  const [clientSecret, setClientSecret] = useState("");

  const {
    mutate: createPaymentIntent,
    data,
    isSuccess,
    isError,
  } = useCretePaymentIntentMutations();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!clientSecret && !isSuccess && !isError) {
      createPaymentIntent(price);
    }

    if (isSuccess && data?.clientSecret) {
      setClientSecret(data.clientSecret);
    }
  }, [price, clientSecret, isSuccess, isError, data, createPaymentIntent]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const tostId = toast.loading(
      "Please wait a few seconds while we process your payment..."
    );

    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error("[error]", error);

      return;
    }

    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: `${user?.name}`,
        },
      },
    });

    if (paymentIntent?.status === "succeeded") {
      toast.success("Your payment was successful!", { id: tostId });
      const orderData = {
        userId: user?.id as string,
        products: MyCart.products,
        totalAmount: MyCart?.totalPrice,
        shippingAddress: combinedAddress as string,
        contactNumber: "+1-555-555-5555",
      };

      addOrders(orderData);
      router.push(`/my-orders`);
    }
  };

  return (
    <form className=" border  p-8" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "green",
              "::placeholder": {
                color: "",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="button-primary w-full mt-4"
        disabled={!stripe}
        type="submit"
      >
        Purchase
      </button>
    </form>
  );
};

export default CheckoutForm;
