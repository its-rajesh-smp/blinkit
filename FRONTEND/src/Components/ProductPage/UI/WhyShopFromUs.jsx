import React from "react";

function WhyShopFromUs() {
  return (
    <div className=" mt-10">
      <p className=" mb-5 text-lg font-medium">Why shop from blinkit?</p>
      <div className="flex gap-4 flex-col">
        <Reason
          img="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png"
          title="Superfast Delivery"
          body=" Get your order delivered to your doorstep at the earliest from dark stores near you."
        />
        <Reason
          img="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png"
          title="Best Prices & Offers"
          body="Best price destination with offers directly from the manufacturers."
        />
        <Reason
          img="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png"
          title="Wide Assortment"
          body="Choose from 5000+ products across food, personal care, household & other categories."
        />
      </div>
    </div>
  );
}

export default WhyShopFromUs;

function Reason({ img, title, body }) {
  return (
    <div className=" flex gap-4  items-center">
      <img className=" w-14  h-14" src={img} alt="" />
      <div className="text-xs">
        <p>{title}</p>
        <p>{body}</p>
      </div>
    </div>
  );
}
