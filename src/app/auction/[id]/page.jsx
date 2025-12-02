import AuctionWrapper from "@/components/Auction/AuctionWrapper";
import React from "react";
export default function page({params}) {
  const { id } = params;
  return (
    <div className="login-page-content">
        <AuctionWrapper id={id}/>
    </div>
  )
}
