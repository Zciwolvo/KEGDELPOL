import { FunctionComponent } from "react";
import OrderItem from "./OrderItem";
import SearchBarIcon from "./SearchBarIcon";
import "./Main.css";

const Main: FunctionComponent = () => {
  return (
    <section className="main2">
      <div className="content2">
        <div className="order-components">
          <div className="component-pair-parent">
            <div className="component-pair">
              <OrderItem
                orders="Employee"
                propAlignSelf="stretch"
                propFlex="unset"
                propMinWidth="unset"
                propMarginLeft="unset"
                propHeight="50.98%"
              />
            </div>
            <div className="component-pair1">
              <OrderItem orders="Orders" />
            </div>
            <OrderItem
              orders="Role"
              propAlignSelf="unset"
              propFlex="1"
              propMinWidth="162px"
              propMarginLeft="-51px"
              propHeight="50.98%"
            />
            <div className="component-pair2">
              <OrderItem
                orders="Customer"
                propAlignSelf="stretch"
                propFlex="unset"
                propMinWidth="unset"
                propMarginLeft="unset"
                propHeight="50.98%"
              />
            </div>
            <div className="component-pair3">
              <OrderItem
                orders="Product"
                propAlignSelf="stretch"
                propFlex="unset"
                propMinWidth="unset"
                propMarginLeft="unset"
                propHeight="50.98%"
              />
            </div>
            <OrderItem
              propAlignSelf="unset"
              propFlex="1"
              propMinWidth="162px"
              propMarginLeft="-51px"
              propHeight="33.33%"
            />
          </div>
          <div className="frame-parent9">
            <div className="component-10-wrapper">
              <OrderItem
                orders="Driver"
                propAlignSelf="stretch"
                propFlex="unset"
                propMinWidth="unset"
                propMarginLeft="unset"
                propHeight="50.98%"
              />
            </div>
            <div className="component-4-wrapper">
              <OrderItem
                orders="Vehicle"
                propAlignSelf="stretch"
                propFlex="unset"
                propMinWidth="unset"
                propMarginLeft="unset"
                propHeight="50.98%"
              />
            </div>
            <OrderItem
              orders="Route"
              propAlignSelf="unset"
              propFlex="1"
              propMinWidth="162px"
              propMarginLeft="-51px"
              propHeight="50.98%"
            />
            <div className="component-6-wrapper">
              <OrderItem
                orders="Delivery"
                propAlignSelf="stretch"
                propFlex="unset"
                propMinWidth="unset"
                propMarginLeft="unset"
                propHeight="50.98%"
              />
            </div>
            <div className="component-11-wrapper">
              <OrderItem
                orders="Status"
                propAlignSelf="stretch"
                propFlex="unset"
                propMinWidth="unset"
                propMarginLeft="unset"
                propHeight="50.98%"
              />
            </div>
            <OrderItem
              orders="Authorization"
              propAlignSelf="unset"
              propFlex="1"
              propMinWidth="162px"
              propMarginLeft="-51px"
              propHeight="50.98%"
            />
          </div>
        </div>
        <div className="search">
          <SearchBarIcon />
        </div>
        <div className="data-table">
          <div className="table-1">
            <form className="table">
              <div className="cell">
                <div className="content3">
                  <div className="text">Order ID</div>
                </div>
              </div>
              <div className="cell1">
                <div className="content4">
                  <div className="text1">Customer ID</div>
                </div>
              </div>
              <div className="cell2">
                <div className="content5">
                  <div className="text2">Order Date</div>
                </div>
              </div>
              <div className="cell3">
                <div className="content6">
                  <div className="text3">Delivery Date</div>
                </div>
              </div>
              <div className="cell4">
                <div className="content7">
                  <div className="text4">Status</div>
                </div>
              </div>
              <button className="cell5">
                <div className="content8">
                  <div className="text5" />
                </div>
              </button>
              <div className="cell6">
                <div className="content9">
                  <div className="text6" />
                </div>
              </div>
              <button className="cell7">
                <div className="content10">
                  <div className="text7" />
                </div>
              </button>
              <div className="cell8">
                <div className="content11">
                  <div className="text8" />
                </div>
              </div>
              <button className="cell9">
                <div className="content12">
                  <div className="text9" />
                </div>
              </button>
              <button className="cell10">
                <div className="content13">
                  <div className="text10" />
                </div>
              </button>
              <div className="cell11">
                <div className="content14">
                  <div className="text11" />
                </div>
              </div>
              <button className="cell12">
                <div className="content15">
                  <div className="text12" />
                </div>
              </button>
              <div className="cell13">
                <div className="content16">
                  <div className="text13" />
                </div>
              </div>
              <button className="cell14">
                <div className="content17">
                  <div className="text14" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
