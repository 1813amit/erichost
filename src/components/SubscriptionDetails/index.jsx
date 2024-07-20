import { CheckBox, Heading, Img } from "./..";
import React from "react";

export default function SubscriptionDetails({
  durationText = "1 Month",
  priceText = "$12.99",
  currencyText = "USD / month",
  renewalInfoText = (
    <>
      Plan renews at
      <br />
      $12.99/month on
      <br />
      10/11/2023
    </>
  ),
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-[24%] md:w-full p-[0.63rem] shadow-xs rounded-[10px]`}
    >
      <div className="flex w-full flex-col items-center">
        <div className="flex items-start justify-end gap-[1.56rem] self-stretch">
          <div className="flex self-end rounded-[10px] bg-indigo-500 px-[0.50rem]">
            <Heading size="texts" as="p" className="!text-white-a700_01">
              {durationText}
            </Heading>
          </div>
          <CheckBox  />
        </div>
        <Heading size="heading3xl" as="h3" className="relative mt-[-0.13rem] !text-indigo-500">
          {priceText}
        </Heading>
        <Heading size="headings" as="p">
          {currencyText}
        </Heading>
        <Heading size="textxs" as="p" className="mt-[0.25rem] text-center leading-[0.94rem]">
          {renewalInfoText}
        </Heading>
      </div>
    </div>
  );
}
