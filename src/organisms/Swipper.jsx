import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
import SwipperCard from "../molecules/SwipperCard";

export default function Swipper() {
  const data = [
    {
      img: "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~dOODYcn7fcy5sTh5GfjyYFy7WNdRwuj-QKQSMmFUniZEffVL2zTk6pXVxvA~cvAdk10adFy9hgo2hGK~dTFVgC5QdDbq7mMqF1lGhMWcWpvnBuWNRKeipbuzejvGMkIuui5Onb2pqAaVo7McAhvejcV-DABNM2vFvLEgO4SVwyGp0GOLyjj1a31ai3smyqxDcAzyIQTNvmF8MFSRuyhUlz7Si940e16eNCsRLdw7nodspVS54-9hozUheuzY2O6nwwN4uxwkJ5rBy~Kt6JbIQbP-ztgrFFIvt0vrWrHPftTrJaShgFZzA7aC-9pnGykIYt0-cNj6ka1GNZBLWlCA__",
      init: 999,
      desc: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
      price: "1294 c",
      stock: true,
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~dOODYcn7fcy5sTh5GfjyYFy7WNdRwuj-QKQSMmFUniZEffVL2zTk6pXVxvA~cvAdk10adFy9hgo2hGK~dTFVgC5QdDbq7mMqF1lGhMWcWpvnBuWNRKeipbuzejvGMkIuui5Onb2pqAaVo7McAhvejcV-DABNM2vFvLEgO4SVwyGp0GOLyjj1a31ai3smyqxDcAzyIQTNvmF8MFSRuyhUlz7Si940e16eNCsRLdw7nodspVS54-9hozUheuzY2O6nwwN4uxwkJ5rBy~Kt6JbIQbP-ztgrFFIvt0vrWrHPftTrJaShgFZzA7aC-9pnGykIYt0-cNj6ka1GNZBLWlCA__",
      init: 0,
      desc: "Держатель для лейки BOOU PG605 ",
      price: "1294 c",
      stock: true,
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~dOODYcn7fcy5sTh5GfjyYFy7WNdRwuj-QKQSMmFUniZEffVL2zTk6pXVxvA~cvAdk10adFy9hgo2hGK~dTFVgC5QdDbq7mMqF1lGhMWcWpvnBuWNRKeipbuzejvGMkIuui5Onb2pqAaVo7McAhvejcV-DABNM2vFvLEgO4SVwyGp0GOLyjj1a31ai3smyqxDcAzyIQTNvmF8MFSRuyhUlz7Si940e16eNCsRLdw7nodspVS54-9hozUheuzY2O6nwwN4uxwkJ5rBy~Kt6JbIQbP-ztgrFFIvt0vrWrHPftTrJaShgFZzA7aC-9pnGykIYt0-cNj6ka1GNZBLWlCA__",
      init: 1,
      desc: "Держатель для лейки",
      price: "1294 c",
      stock: true,
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~dOODYcn7fcy5sTh5GfjyYFy7WNdRwuj-QKQSMmFUniZEffVL2zTk6pXVxvA~cvAdk10adFy9hgo2hGK~dTFVgC5QdDbq7mMqF1lGhMWcWpvnBuWNRKeipbuzejvGMkIuui5Onb2pqAaVo7McAhvejcV-DABNM2vFvLEgO4SVwyGp0GOLyjj1a31ai3smyqxDcAzyIQTNvmF8MFSRuyhUlz7Si940e16eNCsRLdw7nodspVS54-9hozUheuzY2O6nwwN4uxwkJ5rBy~Kt6JbIQbP-ztgrFFIvt0vrWrHPftTrJaShgFZzA7aC-9pnGykIYt0-cNj6ka1GNZBLWlCA__",
      init: 1,
      desc: "Держатель для лейки BOOU PG605 ",
      price: "1294 c",
      stock: true,
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~dOODYcn7fcy5sTh5GfjyYFy7WNdRwuj-QKQSMmFUniZEffVL2zTk6pXVxvA~cvAdk10adFy9hgo2hGK~dTFVgC5QdDbq7mMqF1lGhMWcWpvnBuWNRKeipbuzejvGMkIuui5Onb2pqAaVo7McAhvejcV-DABNM2vFvLEgO4SVwyGp0GOLyjj1a31ai3smyqxDcAzyIQTNvmF8MFSRuyhUlz7Si940e16eNCsRLdw7nodspVS54-9hozUheuzY2O6nwwN4uxwkJ5rBy~Kt6JbIQbP-ztgrFFIvt0vrWrHPftTrJaShgFZzA7aC-9pnGykIYt0-cNj6ka1GNZBLWlCA__",
      init: 1,
      desc: "Держатель для лейки BOOU PG605 ",
      price: "1294 c",
      stock: true,
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~dOODYcn7fcy5sTh5GfjyYFy7WNdRwuj-QKQSMmFUniZEffVL2zTk6pXVxvA~cvAdk10adFy9hgo2hGK~dTFVgC5QdDbq7mMqF1lGhMWcWpvnBuWNRKeipbuzejvGMkIuui5Onb2pqAaVo7McAhvejcV-DABNM2vFvLEgO4SVwyGp0GOLyjj1a31ai3smyqxDcAzyIQTNvmF8MFSRuyhUlz7Si940e16eNCsRLdw7nodspVS54-9hozUheuzY2O6nwwN4uxwkJ5rBy~Kt6JbIQbP-ztgrFFIvt0vrWrHPftTrJaShgFZzA7aC-9pnGykIYt0-cNj6ka1GNZBLWlCA__",
      init: 1,
      desc: "Держатель для лейки BOOU PG605 ",
      price: "1294 c",
      stock: true,
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~dOODYcn7fcy5sTh5GfjyYFy7WNdRwuj-QKQSMmFUniZEffVL2zTk6pXVxvA~cvAdk10adFy9hgo2hGK~dTFVgC5QdDbq7mMqF1lGhMWcWpvnBuWNRKeipbuzejvGMkIuui5Onb2pqAaVo7McAhvejcV-DABNM2vFvLEgO4SVwyGp0GOLyjj1a31ai3smyqxDcAzyIQTNvmF8MFSRuyhUlz7Si940e16eNCsRLdw7nodspVS54-9hozUheuzY2O6nwwN4uxwkJ5rBy~Kt6JbIQbP-ztgrFFIvt0vrWrHPftTrJaShgFZzA7aC-9pnGykIYt0-cNj6ka1GNZBLWlCA__",
      init: 1,
      desc: "Держатель для лейки BOOU PG605 ",
      price: "1294 c",
      stock: true,
    },  {
      img: "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~dOODYcn7fcy5sTh5GfjyYFy7WNdRwuj-QKQSMmFUniZEffVL2zTk6pXVxvA~cvAdk10adFy9hgo2hGK~dTFVgC5QdDbq7mMqF1lGhMWcWpvnBuWNRKeipbuzejvGMkIuui5Onb2pqAaVo7McAhvejcV-DABNM2vFvLEgO4SVwyGp0GOLyjj1a31ai3smyqxDcAzyIQTNvmF8MFSRuyhUlz7Si940e16eNCsRLdw7nodspVS54-9hozUheuzY2O6nwwN4uxwkJ5rBy~Kt6JbIQbP-ztgrFFIvt0vrWrHPftTrJaShgFZzA7aC-9pnGykIYt0-cNj6ka1GNZBLWlCA__",
      init: 1,
      desc: "Держатель для лейки BOOU PG605 ",
      price: "1294 c",
      stock: true,
    },  {
      img: "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~dOODYcn7fcy5sTh5GfjyYFy7WNdRwuj-QKQSMmFUniZEffVL2zTk6pXVxvA~cvAdk10adFy9hgo2hGK~dTFVgC5QdDbq7mMqF1lGhMWcWpvnBuWNRKeipbuzejvGMkIuui5Onb2pqAaVo7McAhvejcV-DABNM2vFvLEgO4SVwyGp0GOLyjj1a31ai3smyqxDcAzyIQTNvmF8MFSRuyhUlz7Si940e16eNCsRLdw7nodspVS54-9hozUheuzY2O6nwwN4uxwkJ5rBy~Kt6JbIQbP-ztgrFFIvt0vrWrHPftTrJaShgFZzA7aC-9pnGykIYt0-cNj6ka1GNZBLWlCA__",
      init: 1,
      desc: "Держатель для лейки BOOU PG605 ",
      price: "1294 c",
      stock: true,
    },  {
      img: "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~dOODYcn7fcy5sTh5GfjyYFy7WNdRwuj-QKQSMmFUniZEffVL2zTk6pXVxvA~cvAdk10adFy9hgo2hGK~dTFVgC5QdDbq7mMqF1lGhMWcWpvnBuWNRKeipbuzejvGMkIuui5Onb2pqAaVo7McAhvejcV-DABNM2vFvLEgO4SVwyGp0GOLyjj1a31ai3smyqxDcAzyIQTNvmF8MFSRuyhUlz7Si940e16eNCsRLdw7nodspVS54-9hozUheuzY2O6nwwN4uxwkJ5rBy~Kt6JbIQbP-ztgrFFIvt0vrWrHPftTrJaShgFZzA7aC-9pnGykIYt0-cNj6ka1GNZBLWlCA__",
      init: 1,
      desc: "Держатель для лейки BOOU PG605 ",
      price: "1294 c",
      stock: true,
    },  {
      img: "https://s3-alpha-sig.figma.com/img/b9c0/ccec/9b544b6615136a77d2e9fb6ac5a430c9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~dOODYcn7fcy5sTh5GfjyYFy7WNdRwuj-QKQSMmFUniZEffVL2zTk6pXVxvA~cvAdk10adFy9hgo2hGK~dTFVgC5QdDbq7mMqF1lGhMWcWpvnBuWNRKeipbuzejvGMkIuui5Onb2pqAaVo7McAhvejcV-DABNM2vFvLEgO4SVwyGp0GOLyjj1a31ai3smyqxDcAzyIQTNvmF8MFSRuyhUlz7Si940e16eNCsRLdw7nodspVS54-9hozUheuzY2O6nwwN4uxwkJ5rBy~Kt6JbIQbP-ztgrFFIvt0vrWrHPftTrJaShgFZzA7aC-9pnGykIYt0-cNj6ka1GNZBLWlCA__",
      init: 1,
      desc: "Держатель для лейки BOOU PG605 ",
      price: "1294 c",
      stock: true,
    },
  ];

  const chunkedData = [];
  for (let i = 0; i < data.length; i += 6) {
    chunkedData.push(data.slice(i, i + 6));
  }

  return (
    <section>
      <Swiper rewind={true} navigation={true} modules={[Navigation]} className="mySwiper">
        {chunkedData.map((chunk, index) => (
          <SwiperSlide key={index} className="swip__cont">
            {chunk.map((item, itemIndex) => (
              <SwipperCard key={itemIndex} {...item} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}