import { Helmet } from "react-helmet";
import { Button, Img, CheckBox, Heading, Input, SelectBox } from "../../components";
import Header from "../../components/Header";
import SubscriptionDetails from "../../components/SubscriptionDetails";
import React, { Suspense } from "react";

const subscriptionOptions = [
  {
    durationText: "1 Month",
    priceText: "$12.99",
    currencyText: "USD / month",
    renewalInfoText: (
      <>
        Plan renews at
        <br />
        $12.99/month on
        <br />
        10/11/2023
      </>
    ),
  },
  {
    durationText: "1 Month",
    priceText: "$12.99",
    currencyText: "USD / month",
    renewalInfoText: (
      <>
        Plan renews at
        <br />
        $12.99/month on
        <br />
        10/11/2023
      </>
    ),
  },
  {
    durationText: "1 Month",
    priceText: "$12.99",
    currencyText: "USD / month",
    renewalInfoText: (
      <>
        Plan renews at
        <br />
        $12.99/month on
        <br />
        10/11/2023
      </>
    ),
  },
  {
    durationText: "1 Month",
    priceText: "$12.99",
    currencyText: "USD / month",
    renewalInfoText: (
      <>
        Plan renews at
        <br />
        $12.99/month on
        <br />
        10/11/2023
      </>
    ),
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Nr8erichostcombyhtmltodesignPage() {
  return (
    <>
      <Helmet>
        <title>Complete Your Hosting Checkout - EricHost</title>
        <meta
          name="description"
          content="Finalize your hosting plan with EricHost. Choose a domain, select a hosting period, and enter billing details to get started. Exclusive discounts and secure payment options available."
        />
      </Helmet>
      <div className="w-full bg-white-a700_01">
        <Header />
        <div className="flex justify-center bg-gray-100 py-[1.13rem]">
          <div className="container-xs mb-[0.63rem] flex items-start justify-center gap-[1.25rem] lg:p-[1.25rem] md:flex-col md:p-[1.25rem]">
            <div className="flex flex-1 flex-col gap-[1.25rem] self-center md:self-stretch">
              <div className="ml-[0.63rem] flex flex-col gap-[1.25rem] md:ml-0">
                <div className="flex flex-col gap-[0.63rem]">
                  <div className="flex flex-col items-start">
                    <Heading
                      size="heading3xl"
                      as="h1"
                      className="!font-bold lg:text-[1.56rem] md:text-[1.50rem] sm:text-[1.38rem]"
                    >
                      Checkout
                    </Heading>
                    <Heading size="heading2xl" as="h2" className="lg:text-[1.06rem]">
                      You’re almost there! Complete your order
                    </Heading>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="flex w-[24%] justify-center rounded-tl-[10px] rounded-tr-[10px] bg-black-900 p-[0.38rem] lg:w-full md:w-full">
                      <Heading size="textxl" as="h3" className="w-[90%] leading-[0.94rem] !text-white-a700_01">
                        1. Choose a Domain
                      </Heading>
                    </div>
                    <div className="flex flex-col gap-[0.38rem] self-stretch rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] bg-white-a700 px-[0.63rem] py-[0.75rem] shadow-lg">
                      <CheckBox
                        name="New Domain"
                        label="Register a new domain"
                        id="NewDomain"
                        className="gap-[0.63rem] p-2  rounded-[5px] bg-white-a700_01 py-[0.63rem] pr-[2.13rem] text-left text-[0.94rem] font-medium leading-[1.38rem] text-black-900 shadow-xl sm:pr-[1.00rem]"
                      />
                      <CheckBox
                        name="Transfer Domain"
                        label="Transfer your domain from another registrar"
                        id="TransferDomain"
                        className="gap-[0.63rem] p-2 rounded-[5px] bg-white-a700_01 py-[0.63rem] pr-[2.13rem] text-left text-[0.94rem] leading-[1.38rem] text-black-900 shadow-xl sm:pr-[1.00rem]"
                      />
                      <CheckBox
                        name="Transfer Domain"
                        label="Transfer your domain from another registrar"
                        id="TransferDomain"
                        className="gap-[0.63rem] p-2 rounded-[5px] bg-white-a700_01 py-[0.63rem] pr-[2.13rem] text-left text-[0.94rem] leading-[1.38rem] text-black-900 shadow-xl sm:pr-[1.00rem]"
                      />
                      
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex w-[22%] justify-center rounded-tl-[10px] rounded-tr-[10px] bg-black-900 p-[0.38rem] lg:w-full md:w-full">
                    <Heading size="textxl" as="h5" className="w-[90%] leading-[0.94rem] !text-white-a700_01">
                      2. Choose a Period
                    </Heading>
                  </div>
                  <div className="self-stretch rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] bg-white-a700 p-[0.88rem] shadow-lg">
                    <div className="flex gap-[0.63rem] md:flex-col">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {subscriptionOptions.map((d, index) => (
                          <SubscriptionDetails
                            {...d}
                            key={"periodList" + index}
                            className="border-2 border-solid border-indigo-500"
                          />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-[0.63rem] flex flex-col items-start md:ml-0">
                <div className="flex w-[20%] justify-center rounded-tl-[10px] rounded-tr-[10px] bg-black-900 p-[0.38rem] lg:w-full md:w-full">
                  <Heading size="textxl" as="h6" className="w-[88%] leading-[0.94rem] !text-white-a700_01">
                    3. Billing Details
                  </Heading>
                </div>
                <div className="flex flex-col items-start self-stretch rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] bg-white-a700 px-[0.88rem] shadow-lg">
                  <Heading
                    size="headingxl"
                    as="h6"
                    className="ml-[0.25rem] mt-[0.75rem] !text-indigo-500 lg:text-[0.94rem] md:ml-0"
                  >
                    Customer Details
                  </Heading>
                  <div className="mt-[0.25rem] flex flex-col gap-[0.63rem] self-stretch px-[0.25rem]">
                    <div className="flex gap-[0.63rem] md:flex-col">
                      <Input
                        shape="round"
                        type="text"
                        name="First Name"
                        placeholder={`First Name`}
                        className="w-full"
                      />
                      <Input shape="round" type="text" name="Last Name" placeholder={`Last Name`} className="w-full" />
                    </div>
                    <div className="flex gap-[0.63rem] md:flex-col">
                      <Input shape="round" type="email" name="Email" placeholder={`Email`} className="w-full" />
                      <Input shape="round" type="number" name="Phone" placeholder={`Phone`} className="w-full" />
                    </div>
                    <div className="flex flex-col gap-[0.63rem]">
                      <div className="flex gap-[0.63rem] md:flex-col">
                        <Input
                          shape="round"
                          name="Billing Address"
                          placeholder={`Billing Address`}
                          className="flex-grow"
                        />
                        <Input shape="round" name="State" placeholder={`State`} className="w-[24%] md:w-full" />
                      </div>
                      <div className="flex gap-[0.63rem] md:flex-col">
                        <Input shape="round" name="City" placeholder={`City`} className="w-full" />
                        <SelectBox
                          shape="round"
                          indicator={
                            <Img
                              src="images/img_icon.svg"
                              alt="Icon"
                              className="h-[0.00rem] h-[0.88rem] w-[0.00rem] w-[0.63rem]"
                            />
                          }
                          name="Country"
                          placeholder={`India`}
                          options={dropDownOptions}
                          className="w-full gap-[1.00rem] border border-solid border-gray-600"
                        />
                        <Input shape="round" type="number" name="Pincode" placeholder={`Pincode`} className="w-full" />
                      </div>
                    </div>
                    <div className="mb-[0.25rem] flex flex-col items-start">
                      <div className="h-[2.00rem] self-stretch bg-white-a700_01" />
                      <Heading
                        size="headingxl"
                        as="h6"
                        className="relative mt-[-1.50rem] !text-indigo-500 lg:text-[0.94rem]"
                      >
                        Company Details
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[0.63rem] self-stretch px-[0.25rem]">
                    <div className="flex gap-[0.63rem] md:flex-col">
                      <Input
                        shape="round"
                        type="text"
                        name="Company Name"
                        placeholder={`Company Name`}
                        className="w-full"
                      />
                      <Input shape="round" name="GSTIN" placeholder={`GSTIN`} className="w-full" />
                    </div>
                    <div className="mb-[0.25rem]">
                      <div className="flex flex-col items-start">
                        <div className="h-[2.00rem] self-stretch bg-white-a700_01" />
                        <Heading
                          size="headingxl"
                          as="h6"
                          className="relative mt-[-1.50rem] !text-indigo-500 lg:text-[0.94rem]"
                        >
                          Security Details
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[0.63rem] self-stretch px-[0.25rem]">
                    <div className="flex gap-[0.63rem] md:flex-col">
                      <Input
                        shape="round"
                        type="password"
                        name="Password"
                        placeholder={`Password`}
                        className="w-full"
                      />
                      <Input
                        shape="round"
                        type="password"
                        name="Confirm Password"
                        placeholder={`Confirm Password`}
                        className="w-full"
                      />
                    </div>
                    <div className="mb-[0.63rem] h-[2.00rem] bg-white-a700_01" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[34%] flex-col items-start md:w-full">
              <div className="flex w-[30%] justify-center rounded-tl-[10px] rounded-tr-[10px] bg-black-900 p-[0.38rem] lg:w-full md:w-full">
                <Heading size="textxl" as="p" className="w-[84%] leading-[0.94rem] !text-white-a700_01">
                  4. Checkout
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center self-stretch rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] bg-white-a700_01 px-[0.63rem] py-[0.38rem] shadow-xs">
                <Heading size="headingxl" as="h6" className="!font-bold lg:text-[0.94rem]">
                  <span className="text-black-900">Selected Plan:</span>
                  <span className="font-medium text-black-900">&nbsp;Premium Web Hosting</span>
                </Heading>
                <Heading size="headingxl" as="h6" className="!font-bold lg:text-[0.94rem]">
                  <span className="text-black-900">Period:</span>
                  <span className="font-medium text-black-900">&nbsp;1 Month</span>
                </Heading>
                <div className="flex self-stretch border-b border-solid border-blue_gray-900 bg-white-a700 py-[0.38rem] sm:flex-col">
                  <div className="flex flex-1 flex-col items-start sm:self-stretch sm:p-[1.25rem]">
                    <Heading size="textlg" as="p">
                      Plan Amount
                    </Heading>
                    <div className="flex items-center gap-[0.50rem] self-stretch">
                      <Img src="images/img_checkmark_green_800.svg" alt="Feature Icon" className="h-[1.13rem]" />
                      <Heading size="textlg" as="p">
                        100 Panels
                      </Heading>
                    </div>
                    <div className="flex items-center gap-[0.50rem] self-stretch">
                      <Img src="images/img_checkmark_green_800.svg" alt="Setup Icon" className="h-[1.13rem]" />
                      <Heading size="textlg" as="p">
                        Setup Charges
                      </Heading>
                    </div>
                    <div className="flex items-center gap-[0.50rem] self-stretch">
                      <Img src="images/img_checkmark_green_800.svg" alt="Ssl Icon" className="h-[1.13rem]" />
                      <Heading size="textlg" as="p">
                        Unlimited SSL
                      </Heading>
                    </div>
                    <div className="flex items-center gap-[0.50rem] self-stretch">
                      <Img src="images/img_checkmark_green_800.svg" alt="Migration Icon" className="h-[1.13rem]" />
                      <Heading size="textlg" as="p">
                        Free Website Migration
                      </Heading>
                    </div>
                  </div>
                  <div className="flex w-[26%] flex-col items-end sm:w-full sm:p-[1.25rem]">
                    <Heading size="textlg" as="p" className="text-right !font-normal leading-[1.31rem]">
                      <>
                        $134.99
                        <br />
                        $0
                        <br />
                        $0
                        <br />
                        $0
                        <br />
                        $0
                      </>
                    </Heading>
                  </div>
                </div>
                <div className="h-[6.25rem] self-stretch bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat py-[0.38rem] lg:h-auto md:h-auto">
                  <div className="flex sm:flex-col">
                    <div className="flex flex-1 flex-col items-start sm:self-stretch">
                      <Heading size="textlg" as="p">
                        Total Amount
                      </Heading>
                      <div className="flex items-center gap-[0.75rem] self-stretch">
                        <Img src="images/img_checkmark_green_800.svg" alt="Discount Icon" className="h-[1.13rem]" />
                        <Heading size="textlg" as="p">
                          Plan Discount - 77%
                        </Heading>
                      </div>
                      <div className="flex items-center gap-[0.38rem] self-stretch">
                        <Img src="images/img_checkmark_green_800.svg" alt="Coupon Icon" className="h-[1.13rem]" />
                        <Heading size="textlg" as="p">
                          Coupon Applied (VKLGRI10)
                        </Heading>
                      </div>
                      <div className="flex items-center gap-[0.75rem] self-stretch">
                        <Img src="images/img_checkmark_green_800.svg" alt="Taxes Icon" className="h-[1.13rem]" />
                        <Heading size="textlg" as="p">
                          Taxes & Fees
                        </Heading>
                      </div>
                    </div>
                    <div className="flex w-[26%] justify-end sm:w-full">
                      <Heading size="headings" as="p" className="w-[56%] text-right !font-bold leading-[1.31rem]">
                        <span className="text-black-900">
                          <>
                            $134.99
                            <br />
                          </>
                        </span>
                        <span className="font-normal text-black-900">
                          <>
                            -$34.99
                            <br />
                            -$10
                            <br />
                            $20
                          </>
                        </span>
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-[1.25rem] self-stretch border-b-2 border-solid border-blue_gray-900 bg-white-a700 py-[0.38rem]">
                  <Heading size="headinglg" as="h6" className="w-[37%] leading-[1.56rem] lg:text-[0.88rem] " >
                    Net Amount Due
                  </Heading>
                  <Heading size="headinglg" as="h6" className="w-[16%] text-right leading-[1.56rem] lg:text-[0.88rem]">
                    $134.99
                  </Heading>
                </div>
                <div className="flex items-center gap-[0.69rem] self-stretch mt-2">
                  <CheckBox />
                  <Heading size="textxl" as="p" className="w-[52%] leading-[1.38rem]">
                    Do you have any Coupon?
                  </Heading>
                </div>
              </div>
              <div className="flex w-[43%] justify-center mt-4 rounded-tl-[10px] rounded-tr-[10px] bg-black-900 px-[0.38rem] pb-[0.00rem] pt-[0.38rem] lg:w-full md:w-full">
                {/* <Heading size="textxl" as="p" className="mb-[1.25rem] w-[90%] leading-[0.94rem] !text-white-a700_01">
                  5. Payment Method
                </Heading> */}
                <Heading size="textxl" as="p" className="w-[96%] p-1 leading-[0.94rem] !text-white-a700_01">
                5. Payment Method
                </Heading>
              </div>
              <div className="flex flex-col gap-[0.38rem] self-stretch rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] bg-white-a700_01 p-[0.75rem] shadow-xs">
                <div className="flex gap-[0.75rem] rounded-[5px] bg-indigo-50 px-[0.63rem] py-[0.50rem] shadow-xl">
                <CheckBox className="rounded-[5px]"
                />
                  <Heading size="textxl" as="p" className="w-[24%] !font-normal leading-[1.38rem]">
                    Google Pay
                  </Heading>
                </div>
                <CheckBox
                  name="Credit Card"
                  label="Credit/ Debit Card"
                  id="CreditCard"
                  className="gap-[0.63rem] rounded-[5px] p-2 bg-white-a700_01 py-[0.63rem] pr-[2.13rem] text-left text-[0.94rem] leading-[1.38rem] text-black-900 shadow-xl sm:pr-[1.00rem]"
                />
                <CheckBox
                  name="Net Banking"
                  label="Net Banking"
                  id="NetBanking"
                  className="gap-[0.63rem] rounded-[5px] p-2 bg-white-a700_01 py-[0.50rem] pr-[2.13rem] text-left text-[0.94rem] leading-[1.38rem] text-black-900 shadow-xl sm:pr-[1.00rem]"
                />
                <Button
                  size="sm"
                  shape="round"
                  // leftIcon={
                  //   <Img
                  //     src="images/img_television.svg"
                  //     alt="Television"
                  //     className="h-[0.06rem] h-[1.63rem] w-[0.06rem] w-[1.38rem]"
                  //   />
                  // }
                  className="gap-[0.25rem] self-stretch !rounded-md bg-indigo-600"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
