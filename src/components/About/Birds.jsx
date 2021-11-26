import React from "react";
import { motion } from "framer-motion";
import InView from "components/common/InView";
import { drawingVariant, drawingLineVariant } from "components/common/constants";

export const Birds = ({...props}) => {

  const [ref, animation] = InView('show', 'hidden');

  return (
    <motion.svg ref={ref} key="birds" variants={drawingVariant} initial="hidden" animate={animation} viewBox="0 0 4405 3788" width={props.width} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FFF" strokeWidth="5">
      <motion.path variants={drawingLineVariant} d="M1047 434c4-1 8-4 13-4h21c5 0 11 3 13 8l13-1-1 2 12-1 7 6-1 1a660 660 0 0 1 2 1l7 4v2l8 1 3 6h-4l10 3c3 1 4 5 6 8 1 4 4 6 5 11l2 1 8 10-3 2h4l-1 2h3l2 4-7-2c3 1 5 3 8 3v3l10 7 13 6 11 5c5 3 9 8 14 10 10 5 22 9 27 20h-2c7 3 12 8 19 13l7 7-5-1 6 7c8 4 14 8 20 14l-6-2c0 2 3 2 5 3l4 5 1 2c6 3 10 8 15 13l-1 3-5-5 1 3 6 7 10 13-4-3 3 8c3 3 3 8 6 11l-3-1c3 5 4 11 6 16 4 3 4 9 6 13 3 13 12 23 18 34 4 8 9 15 9 24l-1 1-6-4 2 3-2-1 1 3 7 11 5 9c5 6 8 13 11 20 2 3 2 5 2 8 0-1-2-1-1-2h-4l12 23v3l-1 1a1089 1089 0 0 1-6 0l12 10c3 4 8 6 12 9l16 10 9 6 13 7c5 2 9 6 12 10l-2 2c-4 2-8 4-12 3-6-2-13-4-18-1 3 4 6 9 10 12l20 23c8 13 20 22 31 33l19 16c8 6 13 14 20 21 4 4 7 9 9 14 1 1 0 2-1 2 10 14 23 23 34 35 2 2 5 4 5 7-5 0-9-5-14-5l5 7c-2 0-5 1-7-1l-15-13c-3-5-9-8-11-13-1-3-3-4-5-6-3-4-7-9-13-11l-1 2v8l-9 1-1-2v3l-4 1a542 542 0 0 0 0 2l-7-1-8-2 1-2-2 2-14-11-24-18-31-31c-4-5-7-12-12-16l-13-10c-7-6-14-12-22-16l-9-7-14-7h-3c-8-3-15-9-22-14-8-4-17-6-26-6-4 0-7 0-10-2-3 1-4 3-5 5-3 1-6 1-9-1-2 5-5 10-10 13-4 2-9 4-14 2-4-2-5-7-7-10-3 1-6 4-9 2-3-3-2-7-2-10-6-2-12 0-18-1a66 66 0 0 0-13-1l-3 3-1-2-2 2-2-3c-2 1-3 2-5 1h-24l4 2-7-1-4-1h-50l-4 7c-3 2-6 6-9 7-6 2-11-1-16-3-6-1-7-7-10-11l-8 1-15 1c-4 0-9 0-13-2h-5c-4-2-9-1-13-2l-9-1-15 1h-12l-11-1-11-1c-6 0-12 2-18 1l-9 1h-80c-13 0-25 2-38 1h-17l-35 2-18 1-2 1c-5 1-9 4-14 3-12-5-25-5-37-5h-38l-14-1c-5-1-10 2-15 1-8-1-16 1-23 3-5 0-8 3-13 3l-12 5c-5 1-9 4-14 4-4 3-9 4-14 6h-2l-4 3v1l-16 8c-2 2-5 1-8 1l-16-1-14 2c-6 0-12 2-18 4h-10c-8-1-14 5-21 8l-2-1-5 6-20 10 2 1c-2-1-5 1-6 2-2 2-4 4-6 4-10 1-19 6-29 8-3 2-7 4-11 4 0 3-2 5-4 7h-11l1 1-5 2h-2c-6 4-15 4-20 10l-3 1-5 1-10 4-7 5-12 3-27 9-9 4c-4 1-7 3-11 3-7 5-16 6-23 11l-8 3-3 3c-6 2-10 9-16 10l-9 2c-12 2-21 9-31 13h-9l-6 2c0 4-1 8-5 10-3 4-8 3-11 2h-6l3 2c-2 0-5 1-6 3h-2l-6 8c-6 4-10 9-15 14l-14 15c-3 4-6 8-11 11l-2 4-11 11-12 13c-2 3-6 5-8 9-4 4-9 8-12 13-2 2-4 5-8 5v-67l1-3 21-22c3-5 8-8 12-12l2-4c5-3 8-8 12-12 4-3 3-8 6-11a3217 3217 0 0 0 11-9l2-5 8-9c4-8 11-13 16-20l9-10c7 0 12-7 15-13l23-29c3-4 8-8 9-13l2-5 2-3c-3-6 0-11 1-17 0-2 1-6 3-8 5-4 9-9 16-10 4-1 7 2 11 3l-1 2 9 5 3 3 3 2c2 0 5 0 7-2l5 5v3l-11 13v2c-2 4-3 8-6 11l1 1-3 1c-2 5-5 10-9 14-1 4-5 7-8 10-3 4-5 9-9 12v2l-10 12v4l-2-1 2 4c6-1 12-2 17-6 6 0 9-6 15-6l-2-2h4l-2-2h3l9-7c5-3 11-6 17-7 8-1 15-6 23-4l-1-1 22-9 20-8c5-1 10 0 14-3l12-5c4-2 7-5 11-6 7-4 16-5 24-8l17-4 2-2c5 0 10-4 16-6 10-4 20-8 28-15l13-6c11-2 20-8 31-11 12-1 23-4 35-4 7-2 13-4 20-4a573 573 0 0 0 57-18l15-4c3-1 7-4 11-3 9 0 19-4 28-3l2-2 15-2c7-1 12-6 18-8l11-2c4-3 9-1 13-4l1-4c4-4 9-8 15-11 5-2 10-1 15 0 7 0 13-7 20-4l5-1 5-4h3c2 2 4 5 4 8-1 7-4 14-7 21l-3 1c-3-2-7-3-9 0l-6 2 1 2h-3l-3 5 1 1c-1 0-3-1-3 1l2 2c-2 0-5-2-6 1 6-1 11 3 17 2 10-1 20 1 30-1l18-2 17-1h61l4-2c5 0 11-2 17-1 4 1 8 2 13 1 10 4 21 1 32 3h14l21 2c10 2 21 1 31 1 14 1 27-2 41-2l25-1 3-2h-2v-2c-5-8-7-18-10-27-3-1-4-4-6-6l-4-9-3-2-6-10-4-2c-5-5-10-10-17-13l-1 1 1-2c-3-3-5-7-9-9l-7-7v-2l-4-4-6-9c-1-4-4-6-5-9-1-7-4-13-7-18h2c-3-2-4-4-5-7l-1 3a443 443 0 0 1-2-1l-1-3c-5-7-4-17-6-25-1-5 1-9 2-14l2-11c2-3 0-7 3-10v-16l-2 3v-6c-2-4-4-8-8-10-4-4-4-9-5-14-2-5-2-11-3-17l-3-1v3c-3 1-6 3-8 0-3-6-9-9-13-14l-16-3-12-2-17-1-24-1c-4 0-8-1-12 1l-1 4-5-1c-2-2-5-3-8-3l-1 3h1l3 9c0 4 0 8 2 12l4 9c0 6 3 10 6 15l20 41 10 22 5 9c2 11 9 21 13 31l8 11c7 11 21 15 28 26-3 1-6 2-8 0l-14-11c-6-1-12 1-16-4-4-4-9-8-11-14l-10-21-4-12-10-20-7-14c-5-12-12-24-18-35l-9-11c-4-7-11-11-15-18-4-5-9-10-12-16l-3-7h-11l5 5c1 2 1 3-2 3 3 4 3 9 5 13l5 11-1 4-5-4c-2-8-5-17-11-24h-11c-3 5-7 10-12 13l-3 1v-5c4-3 8-5 10-10h-11l13-2c1-2 2-4 0-5l-2-8-4-5c3-3 5-6 6-10 2-4 5-7 6-11l-12-6h-2l-17-9-7-7-19-7c-7-5-15-8-22-12l-9-4c-6-4-13-6-18-12h8l17 8c16 6 32 15 48 22 5 3 11 2 16 4 5 3 11 4 16 6l1 2 10 4c2 0 5-1 4 1l-2 1 3 2 1-3v-1l6 3 5 1c4 3 9 4 14 4l11-2c3-1 6-4 10-4l9 1c8-6 19-4 28-7l18-2 13-1h43c3-3 2-7 5-9 3-4 5-9 6-14l4-2c2-5 4-12 10-13l5-8 2 2c-1-3 2-5 4-7l4-3 2 1c0-3 2-3 3-1l-1 8 4-4h1c3-6 6-11 11-15 1 1 3 3 5 3l6-5c3-1 7 0 10-2h8l1 3-2 1 13-8 5 3h6l-1 1c4 0 7 1 10-1m-390 35c1 1 1 1 0 0m3 2c1 1 1 2 3 1-1-1-1-2-3-1m4 2v1c5 2 9 5 14 6 0-2-2-2-4-2l-1-2h-2c-2-2-5-3-7-3m15 7 1 2h3l6 3 6 3 4 2-2-2-12-5-6-3m22 11c0 3 3-1 0 0m467 6c1 1 1 1 0 0m-423 14c1 1 1 1 0 0m-1 5c1 1 1 1 0 0m63 12 1 2h3l-1 2 9 6 7-1c4-2 9-1 13-2 7-1 14-1 20-3h17c0-1 0-2-2-2-12-3-24-2-36-3l-31 1m-55 34h9c-1-2-4-6-7-3-1-3-2 2-2 3m570 68c1 1 1 1 0 0m-429 97 2 2-2-2m471 1c1 1 1 1 0 0m-468 2c1 1 1 1 0 0m291 128c-1 3 3 0 0 0m9 2c1 1 1 1 0 0M148 982c1 1 1 2 3 1-1-1-1-2-3-1z" />
      <motion.path variants={drawingLineVariant} d="M1785 733c4-1 8-3 12-2l-1 2-2-1 1 2 4-1v3l13-2-1 2c2 0 5-1 5 1l4-1 3 3-1 2c4 0 8 1 11 3l6 1-2 4c4 0 10-2 13 2 4 0 8 0 11 2v2l13 4c8 1 13 7 17 14l7 8c3 2 3 6 6 8l7 4c0 2-2 3-4 3v4l3 1-1 2c3 2 4 5 6 9l1-1 2 3 2 1 2 2 1 6 16 14c3 4 7 6 11 9 5 3 11 7 12 13l-3 1c1 3 4 5 6 7 3 1 5 3 7 6 2 4 6 6 9 10 3 5 8 6 10 11 2 4 6 6 7 9l6 11 6 12 6 14 8 20c3 7 7 14 9 22 3 7 9 13 12 19l-1 3 2-2c1 5 5 9 6 14l2 8c1 8 7 13 7 21 1 2-1 3-2 4l1 4v2l4 7 4 8h-2l2 1c1 9 4 18 7 26l13 43-2 2 2-2 14 30 8 14v4l4 3v2l6 10-2 1 2-1 12 23 5 12c3 3 4 8 7 12l8 19 2-1h1c3-2 5-2 8-1l15 4 1 6 3 3 1-1 10 5c2 4 3 7 3 11l1 2 29-1c6 0 13-1 19 1 5 2 10 0 16 1l15 3c5 1 11 0 16 3l16 4c3 1 6 3 8 6 1 2 2 5 5 6l-2 1c4-1 9 4 7 8l-5 7c-4 3-9 4-14 2-4-2-8-2-12-2l-7-3-9-3-21-2h-5c-10 2-20-1-30 0l-14 1c-4 0-7 2-10 3h-12l-12 2 3 2h-2c4 10 11 18 15 28 3 6 5 13 6 20l-2 5-1-2c0 2-2 4 0 6l3 7 1-1c2 7 7 12 10 18l13 22v3l-8-2 1 4c-5 0-9-4-11-8l-2-1c-2-4-6-8-7-12l-10-15-5-6-2 1-1-3-1 3-3-6 1 5-2-2-1 1v-3l-2 4-1-6-2 5-1-3-1 4c-3 0-6-2-7-4-6-3-11-8-14-13l-13-13c-5 1-9-3-13-7l-4-2 1 2-1-1-2 2c-4 3-9 1-14 2l-14 5c-4 3-10 4-14 6l-11 4c-6 4-13 8-16 14l-9 4h-1c-2 3-6 3-10 4l-12 7c-7 3-14 8-21 10l1 1c-5 0-8 3-12 5-5 2-11 2-16 5-6 4-14 4-20 8-3 2-7 1-10 1l-15 4-29 10-15 3 5 1h-6c0 2 0 5-2 7-4 4-10 3-15 3-9-1-16 5-24 8l-2 3h-1l-3 3h-2c-4 4-7 9-12 11a475 475 0 0 1-32 23c-4 1-6 5-9 7-4 1-6 5-10 7l-7 5-9 9-5 7h-1c0 2-2 4-3 5l1 2h-3v3c10-2 18-8 28-9l-3-2c4 0 8 0 12-2 13-3 25-8 38-12l12-4 17-3 24-7 48-14c11-4 24-4 36-7l17-1 16-3 29-7c8-2 15-3 22-7s15-4 22-7c5-1 9-5 15-5l6-4c3-1 5 1 8 2 8 3 16 0 25 0l24-3c11-3 23-4 34-5l18-3c6-1 9-6 14-9 4-4 10-5 15-5 1 1 2 2 3 0h20l6-6c3-1 7 1 10 2l9-1c1 1 3 2 4 1 5 1 11-4 15 0 5 0 9 1 13 4l5 5h-2l3 1 1 10 3 3h11l-4 2 6-1 1 2c9-1 18-2 26-1 7 0 13-2 19 1l2-1 2 2c8 2 16 2 24 1l-1 1 20 2 19 1v2-2l13 1 22 1-2 2-5-1 6 1 1-1c7-2 14-2 20 0l14 2h10c3 4 7 1 10 5h4l-2 2 4-1-1 3 3-3-1 3c3-2 6 1 9 1v2l1-2 1 2c3 0 7 1 10 3h2l13 2 12 2c6 2 11-1 17 0l2-1-5-10-3-11c-2-6-6-11-7-17l-1-1c-2-7-5-13-10-18l-8-16-4-6-8-17c-3-6-4-13-5-19l-3-18v-26l4-18a17189 17189 0 0 1 1 0c0-4 1-8 3-11l-1-2 2-1h-1l2-6 1-1 1-6c2-4-2-8-1-12l-3-5c-4-1-11 0-14-4h-4c-3 3-8 2-11-1l-2 1-33-1h-20l3 1h-14l-5 1h-7l-1-2 2-1 9-6 17-8c8-4 18-6 26-9h1v-1l13-3c5-2 10-2 15-5v2-2h13c6-5 15-4 23-6 0-8 4-14 6-21 2-6 5-10 9-14 6-9 15-15 22-23 3-4 6-6 10-8h15l10-7c5-3 11-8 18-7l-2 2c9 2 18-2 27-2h21c6 0 11 4 16 5l10 4 18 7c7 3 13 9 20 12 5 3 9 8 15 11 6 5 9 13 16 18v1l10 11c2 4 5 6 8 9l11 11c2 2 3 6 6 8l14 13c2 2 4 5 7 5h-2l8 7 11 11c7 4 15 6 23 7 3 1 7 2 8 6 3 7 12 8 14 15l7 10c5 2 10 6 14 10l-1 7-2 1c0 4-1 8 1 12 3 5 4 10 4 16-2-1-3 1-2 2l8 12 5 10c2 4 1 9 3 14l4 5 7 17c-1 6 2 11 3 16 2 5 0 11 1 16l2 7-3 2c0 7 5 13 9 19v5l2-1 3 5-1 2 2 1c3 4 4 8 4 13 0 4 3 8 4 11l-1 1h3v5l1-1 3 9c2 4 2 8 5 12v1h2v2c5 4 8 10 12 14l1 3 7 7-2 2 3-2 3 4-1 1c2 0 3 2 5 3l5 6v1c3 2 4 5 6 8v3l2-2v7l2-4c-1 4 1 7 2 10 6 3 9 9 13 13 5 4 7 9 10 15l2-1 7 6 8 6-2 2a1770 1770 0 0 1 3 2h4l-3 2a618 618 0 0 1 8 2l-1 2c4 2 8 6 9 11-2 2-5 3-7 3l-1-2v2c-7-1-13-5-20-8l-11-6h-4l1-2-2 2-6-4-6 2h2v6l1-2c0 3 3 5 4 8 4 4 7 10 12 14l-2 2h3l-1 2h3l-1 4 2-2 2 2-2 1c1 0 3 1 3 3l1 1c3 2 5 5 6 8 5 4 6 11 11 15v1l7 10-2 1 2-1 3 6 13 18 7 12c5 5 8 13 13 19l10 16c3 4 6 8 7 13 3 1 4 4 6 6v2l2 1-1 2 2-1 3 5-1 2h3l-1 5-5-4-1 1v-3c-2-2-4-5-7-6l1-2-3 1 1-3h-1v3c-1-1-2-3-1-5l-2 1v-5l-3 1 1-2h-3a702 702 0 0 0-1-1v-3l-2 1v-5l-2 4v-4l-1 1c-2-7-7-11-10-17l-2-1c-3-5-9-7-11-13l-1 1-5-1-1-1c-3-1-6 0-8 2 0 6 4 12 3 18l-2 2-7-5c-3-2-5-5-8-4l3-2h-3l-1 2-2-2-5-3 1-1c-5-1-9-6-13-9l-16-16c-5-3-7-10-12-14l-1-4-2 3v-6l-2 4v-7l-2 3a615 615 0 0 1-2-7l-2 2c0-2 0-3-2-4l3-2-4 1a368 368 0 0 1 0-2c-2-6-7-9-11-14v-2h-2l1-2a398 398 0 0 0-3-2c-3-2-6-6-8-10l-2-2h-4l3-3-4 1 1-1-4-4 1-1c-4-1-6-5-8-7l-3-4v-2l-2 1-3-5-2-3-1 3v-3l-2-2h-1c-3-4-6-7-10-9-2-1-3-2-3-4l-2 2 1-3-3 1v-2h-1l-3-4-1 2-13-12-8-6 1-2-2 2c0-3-2-4-4-5h2c-6 0-10-5-15-3l-18-11h-7l6-2-9 1-11-4 2-1c-5-1-10-3-16-2l2-2 4 1-5-1-2 1h-4l-7-3-9-1h-1l-12-3c-5 3-8 7-14 9l1 1-2 1 4 2 1 4c-4 2-8 4-12 2l2 2-5 2h3l-2 2 5 5v2c-5 1-10-3-13-7l-8-15-4-1 1-2-3 1 1-6-1 3c-1 1-3 4-5 2-3-4-5-11-3-16-3-5-9-6-14-8-4-3-8-5-14-5v-2l-1 2h-2c-2 5-6 9-10 12h-5l2 1c-3 1-7 2-10 1-4-1-8-3-10-6l-5-6h-2l1-2h-4l2-2h-3l1-2-4-3 1-1h-3l1-2c-6-1-10-5-15-7l-12-6-19-4c-6-2-12-2-18-5-5 0-9-1-13-3l-5-1c-10-3-21-3-32-6-1 0-3-2-4 0h3c-7 1-15-1-21 3-4 2-10 1-13-3h-1l-3-2c-4-4-9-6-13-7l-34-4-17-1-22-1h-4l-3-1c-5 2-10 3-14 2l-2 1-2-1-3 2-3 2 2 2-4-1c1 2-1 3-2 4l-5 1-7-3-1-1-4-1 1-2-1 2c-2-2-4-3-7-3v-2l-1 1c-2-2-4-4-6-3h-11l1-2-2 3-2-1c-3 2-7 3-11 2l-33-3-3-1v1c-8-2-15-2-23-2h-14c-5 2-11 1-16 1-4 3-8 3-12 5v-2l-1 2c-5 1-11 1-15-2-4 2-9 0-13-1-5 3-11 2-17 1l-8 1 1-2-2 1-3-1-13 1c-10 3-21-1-30 3l-9 1c-5 2-11 0-17 2l-10 2-18 3-2 2c-5-1-10 2-15 2-10 1-19 3-28 6-4 1-7 4-11 3-3-1-7-1-9-3l-2 2c-4 0-7 5-9 8 2 4 4 9 2 13-1 2-3 1-4 2l-8-7-7-6h-2l-1-2h-16c-1 2-5 2-7 2l-17 2c-5 0-8 4-13 4l-12 2c-3 0-5 2-8 3l-21 3 1 2h-2c-3 4-8 4-12 4-5 0-8 4-13 4l-6 2c-5 2-11 0-15 3l-17 7h-3l-11 2c-3 3-7 5-12 6l1-3-13 7c-5 3-12 4-17 8-3 3-6 6-10 5l-7 2-23 7c-3 0-6 2-9 4l-7 2h-2c-6 3-13 3-19 6l-5 5-17 5h-19c-3 0-6 0-8 2l-15 14-10 8c-3 4-9 6-11 12l-6 6c-1 3-5 5-7 7l-7 8 1 2c-3 5-8 9-12 13l-7 10c-3 2-5 5-9 6l1 1c-2 0-4 2-5 3l-5 4c-4 1-6 6-5 10l-2 3-3 1v-4h-1v4l-1-3c-3 4-8 6-12 9l-17 14c-4 2-7 6-12 6l-7 6-20 16-32 22-16 13c-6 5-14 10-23 11l-14 11c-6 4-10 10-17 14l-20 20c-2 2-6 5-6 10 0 3-1 6 1 9 4 5 11 7 15 12v17c0 4 3 7 3 11l-6 2c-7 1-13-4-19-6-5-3-11-3-16-6l-7-5c-3-3-7-6-11-7l-8 4c-4 0-6 4-10 5v1c-7 3-13 9-21 12l-14 12-14 7-8 7-13 9c-4 4-10 6-14 9l-15 11-2 1 1 2-2-1-9 8c-3 4-8 6-12 10l-8 7c-8 3-9 13-17 17l-16 7 2 1-1 4c4 4 10 1 14 2l13-1 11 1 10-5c6 1 13-3 19-4 4-1 7-5 11-2v-1c1 4 6 5 8 8l8 10 7 4c3 3 8 5 12 7 6 3 14 3 20 5l2-2 5 1c3 2 4 5 6 8v-2 11c-2 4-7 5-10 7-2 1-5-1-7-1-2 3-3 7-7 8-3 4-2 11-2 16-2 1-4 2-6 1l-2 2c-4 1-9 2-13-1l-12-5c-4-5-6-11-10-15l-11-9h-11c-1 3-4 3-7 2l-2 2c-2 2-4 3-7 3h-14c-5-1-9-3-14-3-5-1-9 0-14-2l-15-1c-11-4-23-6-34-11l-9 9-20 13c-4 3-10 4-13 8l-13 8c-3 2-6 5-10 6s-7 4-10 7c-4 6-11 8-18 11-4 3-9 6-14 7s-6 7-11 8c-7 2-14 4-19 9-3 2-5 5-9 6-9 1-17 5-25 11-6 3-10 9-17 11l-17 14-11 7-11 8-19 14-10 7c-7 7-16 12-24 18v2l-8 8 1 2-2-1 3 4c5 3 9 7 11 12 2 2 4 3 5 6v2l-9 3c-5 0-9-3-13-5-3-1-6-4-10-3l-1 2-10 2c-4-1-8-4-13-3l-10 6-8 7-8 5c-3 4-8 5-11 9 0 3-2 5-4 7-3 2-3 7-7 8-5 1-9 4-14 6-3 2-4 6-8 8-4 3-7 8-11 10-4 1-7 5-9 8-7 5-13 11-21 12l-13 5c-7 3-13 7-19 12l-27 18c-5 6-12 9-18 14-5 4-11 7-15 12l-11 8-16 14c-6 7-14 10-19 17l-16 15-11 10-10 8-16 15-14 14-16 13-14 12-13 11c-9 6-16 15-25 21-6 3-10 8-14 13l-13 11-10 7-10 8-22 17c-6 3-11 7-17 12l-11 10-13 10c-4 2-7 6-11 7v1c-6 4-11 10-18 13l-1 2-16 12-8 8-23 18-23 19c-3 3-7 5-7 9l-5 17c-4 6-10 10-16 14-3 3-8 6-10 10-1 3-4 4-6 7-3 9-10 14-15 21l-7 11c-4 3-5 8-8 11-4 5-8 11-9 18l-8 14-10 11-2 5-3 4-2 7c-2 2-3 6-6 7l-4 5c-3 3-5 8-9 11l-10 19-6 8c-2 3-1 8-5 10 0 4-2 7-5 10l-3 8-4 1v-238l5-8 10-10c3-2 5-6 9-7 6-3 13-3 19-7v-1l3-2 11-9 20-15 13-11 14-10 13-11c10-9 21-18 29-29 3-5 10-8 13-13l12-21 10-12 11-21 9-15 10-16 10-19c2-6 8-11 11-16 2-6 6-10 9-16 5-6 8-12 14-17 4-3 10-4 15-2s8 7 12 10c2 11-2 21-5 31-2 5 0 11 3 16l-1 1c10-7 17-17 27-23l9-10c6-5 13-8 19-14l13-13c5-3 8-6 11-10l15-11c4-2 5-6 8-10l8-8 13-8 1-1c9-5 16-13 23-20 2-1 1-3 1-5l2 4v-6l2 3v-3l1 1c9-5 15-14 23-20l9-6 10-7c11-7 20-17 31-24 4-2 6-7 11-8l-2-2c7 0 10-8 16-8l-2-1c4-1 6-4 9-6 14-9 28-18 40-30l10-7 10-3 14-8c8-4 15-10 23-13 6-2 9-7 14-9 6-5 13-8 20-10l10-5c6-2 10-6 15-9 11-6 21-15 31-22l37-29 15-11c12-9 26-17 36-27 2-2 4-4 4-6 0-6 0-11 2-17 1-4 5-6 9-7h23c5 0 9-4 14-5l12-7 23-15 34-22 21-12c14-10 30-17 44-27 6-3 12-8 18-10 8-5 16-8 25-12 5-2 9-7 14-9l22-16c11-6 21-13 31-21 15-8 28-21 43-29v-1l7-5 24-18c3-2 3-6 4-9l5-1c0-4-1-9 2-13l5-9c3 0 6 0 9 2 4 3 4 9 3 14 5-3 10-5 14-9 5-3 10-5 14-9l26-17 9-7 19-15 16-11c3-2 1-7 4-9 2-3 6-5 9-7 3-3 6-7 10-9l11-10c5-4 9-9 15-11 6-3 10-9 10-15 0-4 4-5 4-9 0-6-2-13-1-19 2-7 1-13 0-20l1-11c4-6 5-13 5-19l6-21 4-18 2-25 3-12c1-10 6-20 7-31-1-4 1-9 1-13l3-12 4-22c0-3 0-7 2-10 3-6 4-12 8-16s4-10 7-14l7-17c1-3 4-6 4-10 1-3 1-8 5-9h-2l15-28c0-5 3-8 4-12 3-7 9-13 11-21 2-6 5-11 9-16h1l7-10 4-18 10-22c2-9 8-18 6-27s-1-18 1-27c0-4 4-7 7-10 2-3 3-6 7-7 7-2 13 3 17 7l2 11c6-3 8-10 11-15h-2l4-1h-2l3-5c4-8 11-13 19-18l5 2c5 2 11 0 16 2 4 2 6 5 9 8h2c3 3 5 8 7 12 1 5-4 9-6 13-3 5-8 9-13 13-2 3-6 4-9 5l-6 7-10 13-4 8-5 12c-2 2-2 5-5 7l1 1c-4 7-8 14-9 21l-5 10-4 13-5 8c-4 7-5 15-10 22-3 5-3 11-6 16-4 6-5 12-10 18l-9 17c-1 3-1 7-3 10-3 6-3 12-6 17l-7 15c-1 4-6 6-8 10l-9 29-4 11 1 2c2 4 2 9 0 13l-2 2-1 10-5 14c-1 2-3 2-4 2l-1 8 2 1c-1 8-1 17-3 25 1 10-4 19-6 29-2 7-3 14-7 19 0 9-2 18-1 27l3 5 1 3 5 4c5-1 10-2 14-5l8-4h-2c4-1 8-3 11-6l13-10 16-14 20-18 18-17 32-32 16-15c5-3 8-8 13-12l13-12 15-14 16-16c6-5 11-11 15-18l-2 1c0-3 0-6 2-8 7-6 14-11 17-20 4-7 3-15 3-22 0-3-2-5-3-8 0-2 2-3 3-4l6-1 1-3 2-9c3-8 3-17 5-25l-1-2c6-9 7-21 12-30 3-10 7-21 12-30 2-6 4-13 8-18 4-7 7-15 12-22l4-10c1-3 5-4 7-6l8-9 17-16c6-8 13-14 20-21 2-1 4-1 5-3l14-15 11-13c3-2 5-6 7-9l10-10 2-11c0-4 2-7 5-9l7-12 4-9c-3-2-5-6-7-9-1-1-3-3-5-3l1-1-6-5-1-2-2 1v-3l-2 2-6 1c-4-1-6-3-8-6-3-1-7 0-10-2-5-5-7-12-13-15l-3-1h-5l-3-8c-3-1-5-2-6-4-2-4-5-7-5-11l-1 2-1-2-3-2c-6 1-7-6-10-10v-1h-3l-6-9-7-11-1 2-2-6-6-11 2-1c-3 0-3-4-4-5l-3-1-8-10-6-7v-2l-3-4c-2-1-3-2-3-4l-2-5v-1l-1-5h-1l-6-8-6-6 1-2h-2l-6-10 1-8c-4-5-4-11-5-17l1-4-2 2-2-10 2-10v-8l1-5-1-27v-20h-1a319 319 0 0 0-1-4l-4-2-5-7c-2-5-1-10-3-14l-5-4-1-10-4-3-5-10-12-8-9-4h-2l-17-6-1-1-7-2c-2-2-5-2-7-3-10-4-20-6-31-9h-1c-3-1-7-1-10-3-4-2-9 0-13-2l-13-2c-4-2-9 0-13-2-4-1-9 0-13-2l1-2 8-1 5-2 31-2 12-1c6 1 12-1 19-1 10 2 21 0 31 2h12l3 2c8-1 15 1 23 3 8 1 17-1 25 2 3-1 5-5 7-8 4-5 7-11 12-15v-2l6-7c1-2 3-2 5-1v-3 2l7-6 4-2-3-1 4-1-1 2-5 6 6-4 3-5c1-1 3 0 4 1l-1-2 6-1-1 7a605 605 0 0 0 3-6l2 3v-4l2 1 7-5h10l-1-2h5c2-1 4-3 6-2 3 0 5 3 8 2l-4 3c3 0 6-2 8-4h2l2-1 2 2h7l-1-1m6 3 3-2c-1-1-3 0-3 2m15 0c1 1 1 2 3 1-1-1-2-2-3-1m88 48c1 1 1 2 3 1-1-1-1-2-3-1m5 0 1 2c1-1 1-1-1-2m-218 101c2 0 1-3 1-4-2 1-2 3-1 4m376 162c-1 3 3 0 0 0m-4 73 3 10c3 12 11 22 15 34l2 10c0 5 2 10 4 15l4 6 4 7 5 8c0 2 3 3 2 6 6 6 10 15 15 22l-1 2c2 0 2 2 3 3 3 2 5 5 6 9h1l4 6 3 6 1-1 1 2c1 2 4 4 3 7l1-1 6 7c5-2 11-4 14-10-9-10-20-19-27-31l-1 1c0-3-3-5-4-7l-5-7h-2l1-2c-1-1-3-3-3-5l-2-1c0-3-2-5-3-7-4-8-7-16-13-23v-3l-2-1-4-10-2-1-5-8c-4-13-12-24-16-37-1-3-2-6-5-8l-3 2m-126 67-7 8 1 1-2-1c-1 5-6 7-8 11-1 3-4 5-6 7 0 4-1 8-5 9-5 2-7 9-10 13-3 2-4 4-5 7 3 0 8 1 10-3l3 1h-2c1 7-7 9-12 10l-6 6v2-2c-3 3-4 7-6 11-2 2-5 2-6 4l-5 3c-6 3-9 8-13 12-5 4-8 10-12 14l-7 8-9 10-16 16c-2 2-3 6-6 7-2 3-3 7-6 9 1 2-1 4-3 5v2c-3 1-3 5-6 6l-1 5-1-1-1 4-2-1 2 1-5 7c1 6-4 10-5 16l-2 13-4 3-1 4c-6 8-7 18-10 27v11h2l6 1c2-2 6-3 8-6l8-5 7-5 11-9 6-7 14-11c2-2 3-4 6-5l15-7c7-3 15-5 22-3l5 4 4-1h12l6-2c7 0 15-3 22-5l11-2 13-3c7-3 15-4 22-8l13-5c12-6 26-12 37-19l4-3 2 1 2-3 18-9 3-1v-1c3 0 5-3 7-4l17-11c2-1 3-2 5-1 2-4 5-5 8-8v1c3-2 5-4 8-3l-1-2h2v-3c-2 0-2-1-2-3-3-2-4-6-7-9 0-2-4-3-3-6l-2 2 1-2-5-7c-3-4-7-7-9-12l-8-8c-1-3-3-6-6-8-3-3-6-7-10-9l-23-14c-3-1-6-5-10-6-3-2-6-2-9-5-2-2-6-2-7-5l-2 1c-2-3-6-4-9-7l-3-2-21-12v1l-4-4c-3-1-4-3-7-3h1c0-1-1-2-3-2l-3-2v2m610 87c0 4 3-1 0 0m414 184c-2 3 3 0 0 0m-656 6c0 3 3-1 0 0m287 19c1 1 1 1 0 0m-402 31c0 3 3-1 0 0m-776 40c1 1 1 1 0 0m1594 17c1 1 1 1 0 0m4 4c0 3 3-2 0 0m-243 24c0 3 2-1 0 0m-2 1c-1 3 3 0 0 0m179 48c1 1 1 1 0 0m114 39c1 1 1 1 0 0m22 32c1 1 1 1 0 0m-59 12c1 1 1 1 0 0m21 27c1 1 1 1 0 0m77 19c1 1 1 1 0 0z" />
      <motion.path variants={drawingLineVariant} d="M1627 2063c4-4 9-5 14-6 3 0 6 2 8 4l8 10c4 1 8-2 12-3h12c3 2 8 4 10 8s5 9 10 8h25c6 1 13 3 14 10 3 3 7 6 8 10 0 3-3 5-5 7-3 3-6 7-11 7-6-1-13 2-19-1l-5 1-9 3c-6 0-13-1-18 2h-3c0 2-2 3-3 4l-6-2c-6-3-14-4-21-4-5 0-10-1-14 2l-15 5h-9l-3 3c6 5 13 12 14 21-2 5-7 7-12 6l-13-5-14 5 1 1-5 2c-5 1-10 1-14 3-3 1-4-2-6-3l-4 1-15 7c-10 2-19 9-28 15l-14 9-16 8c-6 3-12 3-17 7-3 3-8 4-11 6-5 4-11 7-14 11l-3 1-1 2-5 2-11 5c-6 2-12 5-19 6-6 3-12 6-18 11-7 5-14 12-24 15-9 6-18 14-28 18l-6 5c-4 2-4 7-7 10l-6 1 1 1c-5 1-8 6-10 10-1 4-5 7-9 9l-14 10c-11 6-18 17-28 23-5 3-7 7-11 10-7 7-17 11-21 21 2 5 3 11 0 15l-6 11c-2 3-6 4-9 7-1 3-2 7-4 9l-11 11c0 2 0 4-2 6-3 3-8 4-12 6-7 2-11 7-17 12-3 3-10 1-14 5-2 3-5 6-9 8v3c-5 3-8 8-13 9-5 2-9 6-13 9h2l-7 4c-3 2-7 2-9 5-6 2-12 6-17 10-3 2-7 2-10 5l-7 4c-5 1-7 7-12 9l-11 5-7 6c-10 3-20 8-28 15l-4 7c-4 2-7 5-11 6-6 2-9 8-15 9l-12 4c-5 0-8 4-13 6-3 4-7 6-12 8l-4 4c-2 2-6 2-9 4-4 5-11 8-15 14-2 2-3 6-7 8l-12 9c-3 3-6 3-10 4l-2-2 2 2c-4 2-8 3-13 3l-4 2-16 8-15 5c-7 2-11 10-18 11-6 1-10 5-16 7-4 1-9 3-12 6-4 3-9 6-14 5-6 1-11 5-16 8s-10 3-15 4l1 1c-4 2-8 5-12 5-6 1-10 5-15 7s-8 7-13 9l-13 8-1 1-8 3c-3 3-7 8-11 9l-10 4c-5 1-10 2-13 6-3 6-9 9-16 11-4 1-9 3-12 6-4 4-11 4-16 7l-10 7-9 7-15 3-13 10-9 7c-5 3-11 5-16 9l-9 6c-5 1-10 2-14 6-3 4-8 4-12 7l-31 18c-4 3-7 6-12 8l-12 7-17 10-23 14c-12 6-22 15-35 21-6 5-13 7-19 12s-14 7-19 12l-11 5c-13 7-25 15-37 24l-9 6c-5 4-10 5-15 8l-23 14c-8 6-17 8-25 14l-1 1-17 8 4 1h-4l-18 12c-10 5-18 12-28 16l-9 6c-10 4-18 11-28 15l-14 8c-5 4-11 6-16 9-8 7-18 11-27 17l-14 8-7 6-16 8c-3 2-6 7-11 6v-61l1-2c2-3 6-4 9-7 4-2 7-5 11-6l17-11h2l4-4 25-16 10-5 20-10 16-11 16-8c5-2 8-6 13-7l11-7c5-3 11-5 16-9l15-8 26-14c4-3 7-6 12-7v-1l26-16 13-8c8-3 14-8 22-13a66 66 0 0 1 16-9l18-10v-1l8-5c3-3 8-5 12-7 8-7 19-11 28-18l10-5 2 2-2-2 7-3v-1l9-6c5-3 9-7 14-9 8-5 15-11 23-15l27-19c4-3 9-7 14-9l1-1 15-9c2-2 6-2 9-4l7-5 15-5 12-8c9-4 17-10 25-15 6-2 12-3 17-7 3-2 7-6 11-7 6-3 12-5 17-10 9-9 22-14 34-20l16-7 17-9c3-2 7-5 11-5 6-3 13-5 18-9 3-2 6-5 10-5l5-4c3-2 7-4 11-4v-1l8-4 14-8 1-2 2 1 1-2 7-4c3-3 8-3 12-3 3-3 8-4 11-6l11-5 14-7c3-3 7-5 11-5 5-2 11-5 17-6 5-4 10-7 16-9 5-3 9-5 13-9l2-1v-2l11-6c9-7 19-11 28-15l-1-1c4-1 7-5 10-7l10-6 9-4h3l-2-1c5-1 8-4 11-6 7-4 14-6 20-11 8-6 14-15 24-19l13-10 11-4 19-7c5-3 9-7 14-9l5-1-2-1 6-2 16-11 11-8 6-4 20-15 13-10 24-22c6-7 14-12 21-17 6-4 10-10 16-15l15-14 19-17c6-9 15-15 24-22 5-4 11-8 15-13l10-8c4-4 10-6 13-11l8-7c3-2 7-4 9-8 11-8 21-18 33-25 4-4 10-5 15-7l5-3 7-4 2-1 18-9c4-1 7-4 11-6s8-5 13-6c6-5 13-9 20-12l9-5 9-5c6-1 10-5 16-7l11-7c4-3 9-3 12-7l7-1-5-1c7 1 13-6 20-7l3-3 3 2-2-2 11-6-2-1 3 1 19-11 1-2h2l2-1c9-4 15-13 24-16l5-4 16-10c6-3 10-8 15-11 6-4 10-10 16-13l17-15m31 11h3c0-2-3-2-3 0zm2542 638-2-2h2v-3c2 0 3-1 2-3 5-4 1-11-1-16-4-4-9-9-16-9-4-2-7-6-10-9 0-2 0-5-2-6-7-5-12-11-18-17l-11-10-1-3-2 2c3 2 6 4 8 8 2 5 9 7 13 12l-1 3-6-4 1-2-3 2 6 3c-3 2-5 0-8-1l-15-5c-5-1-11 1-16-1l-10-1c-8-2-17-3-25-3l-12-1a29316 29316 0 0 1-54 1c-3-3-5-7-6-12-2-5-6-10-10-14l-2-1 1 6c-1-2-4-3-4-6l-4-7v-2c-3-4-7-8-12-10v-2l-5-5-2-1 1 2 3 5c-4-1-5-7-8-9l-4-2 2 1-2 1 2 4-2-2-2 3-4-6c-3-2-4-7-8-8 1 4 5 6 7 8l-4-1v-2h-2v-2l-3 2 1-4h-2v-3l-3 3v-3l-1 8-2-3v3c-5-3-9-7-15-7l2 2h-6l1 2c-5-1-10-5-15-4l4 4c-6-1-11-4-17-3 4 1 8 2 11 5-6-1-11-5-17-4 2 3 7 3 10 5h-14l3 1-2 4-14-2c-1 2-3 2-5 2h-8l5 2h-6l3 2h-5l2-3-4 3h2l-6 2 2 2-4-1-5 1 2 2c-4-2-8-1-12 1l-1 2c-4 1-6 4-7 7-3 0-5 0-7 2l6 2-9 4-9 4 2 1h-5l2 1c-4 2-6 6-7 10l-1 5c-3 2-4 6-3 9s-1 7-1 10a452 452 0 0 0-3 5l-1 3 2 1-4 6-4 7 2 2-2 2 2 1-2-1v3l-2-1v4l-1-1-4 6c-5 4-7 10-12 15v3c-3 1-3 5-3 8l-2-3v5l-2-1 1 4-3-1 1 3c-2 1-3 3-2 5l-5 3v3l-1-1-4 4c-1 3-1 6 1 9l-1 3-2 1 1 2-2-1v3l-1-1-1 3c-3 2-6 5-6 9l-1-1c-1 4-4 7-6 10l1 1c-4 5-6 10-7 15l-2 5-3 4v5l-2-3v6c-2 1-2 4-2 7l-2-2c0 5-3 8-5 12l-4 17-4 16 2 1c-2 6-4 12-4 19-3 8-3 17-3 25h-1c-1 6-3 12-2 18 0 7-3 13-1 19v28l-2 19v20l-7-2h-2l-15-4-16-3-18-4-10-3c-7-1-14-4-22-4l-17-4-23-4c-4 0-8-3-12-2-5 0-11-3-16-4-12-2-24-4-35-8l-30-10-29-8-18-6c-4-1-8-4-12-4l-16-2-20-2c-6-1-11-3-17-3l-14-2-20-4c-5-1-10-3-16-3-7-2-14-4-21-4l-16-2-21-2c-3 0-6 1-9-1-7 1-13-2-19-2l-19-1c-6-3-12-2-18-3s-12 0-18-2l-15-1-15-3c-8-2-17-1-25-3l-15-1c-5-2-9 0-14 0h-45c-7 0-14-3-20 0v-3h4l-3-1 7-4a5888 5888 0 0 1 1-1l6-5v-1l10-5 5-3c3-1 7-3 9-6l5-1 13-8 11-3 6-7 6-9h2l2-3h-1c2 0 4-3 6-4a167 167 0 0 1 30-24l5-2 6-3 18-4c3 0 7-1 9 2l4 3h3l2-1 9 8c3 3 7 2 10 2l1-4c-3-4-7-6-7-11 4-1 8-4 11-7h6l8-5 11-4c6-2 12 0 18-2 4-2 8-5 10-9v-1l2-3 1-3h-1c2-1 2-3 3-5 2-3 5-6 9-8s9-4 13-8c2-2 6-4 5-8l-4-2-15 3-11 5c-2 1-4 1-5 3l-2-2 1 2-3 1-1 2-4 1 3 1h-5l1 2-7 1 2 1c-7 0-11 6-16 8l-13 2 2 1-6 2h-1l-5 4c-4 0-7-2-9-4l7-8c3-2 6-5 7-8 2-2 4-4 4-7s-2-5-3-7h-7l-13 8 1 2h-3c-3 5-8 9-12 13l-8 5-15 11c-2 0-4 1-5 3l-16 7c-4-1-9-2-11-6l1-10-4-2c-4 0-7 3-9 5v2c-3 3-2 7-2 11l-4 5 2 7-2-1c0 2 0 3-2 4v2l-2-1v5l-2-3v4l-2-1v3l-6 5-5 3-12 12h-1l-3 4-4 3-6 5-7 1 4 2-4-1-11 7-10 5h-5v1l-2-1c-2-5-1-11-5-15l-3-1c-3 5-4 11-4 16l-2 1c-1 8-8 13-14 17-4 2-8 2-11 5-5 0-11 1-16 5l-13 4-13 3-9 3c-5 1-10 0-14 2h-25c-2 1-4 1-4 3-5 2-9 4-12 8l-8 5c-6 0-11 4-16 5l-28 12-10 3c-5 3-11 4-17 5l-18 4-14 1-13 2h-8l-5-4h-8l1 2h-3l1 2a360 360 0 0 1-1 2c-3 0-7 0-10 2l-2 4-4 1 2 1h-5l1 2-5 1 1 1c-3 0-6 2-8 5v1l-11 7c-1 2-3 3-6 4l1 1h-7l4 2h-4a254 254 0 0 1-35 31v1c-4 1-7 4-10 6l-19 10c-4 2-9 4-13 8h-1c-2 2-7 1-5 4l-3-1-2 1c-5-1-9 1-12 4l-13 10c-2 3-5 6-6 10-6 1-12 2-16 6l-12 12-5 1-3 2v2h-1l-8 4c-2-3-6 0-9 1-3 2-7 2-10 2l4 2c-3 0-7-1-7 2-1-3-4-1-6 0l-14 9c-2 1-5 1-7 3-2 0-4 0-6 2l-8 2h-15l-13 1c-4-1-6 3-9 3-11 0-21 2-32 3l2 5-16 2c-11 0-23 2-34 1-3-1-6 0-8 1-7-4-14-1-20-3-9-2-18-1-26-4s-18-3-25-8c-3-3-8-4-12-5l-16-2-24-6c-2-2-6-1-8-3-5-3-11-1-16-5-3-3-10-6-14-2l-14 1-11 1-4 4-7 1c-5-3-11 0-16 0l-36-1c-9-1-18 0-28 2h-47c-7-1-14 1-20-1l-18-3-22-1-33-3-19-3-19-2c-6 1-11-2-16-3l-13-2c-5 0-9-3-14-3l-9-1-17-4c-6-2-12 0-17-2-4-2-9-3-14-3-12 1-23-5-35-7-7-2-15-2-22-3l-16-1-27-2c-7-2-13-3-20-3l-12-1-22-1-21-1c-4-3-9-2-14-2-7 1-14-1-21-1l-17-2-13-1a550 550 0 0 1-24-2l-1 1c0-3-4-2-6-3-6-1-11 1-17-1-8-4-17-2-24-7l-3-9c2-5 4-11 2-17-1-4-3-9-8-9l-13 5c-3 6-7 11-8 17-2 1-3 3-5 3v-2l-7 1-8 6-5 2-15 5c-4 0-8 3-12 4l-6-1 3 2-21 1-19 1-1 2h-13c-6 0-12 4-19 3-3-1-7 1-10 1l-10 2 3 1h-9l7-5c3-4 8-2 13-5l22-8 13-4 12-4c2 0 4-1 5-3v2c6-1 11-5 17-6 4-2 10-3 14-6l9-3c6-2 12-3 16-7l1-2v2l16-6c4 0 7-3 11-4l-2-1h6l2-2 10 1c5-1 7-6 12-8 5-4 11-3 16-5l18-6 9-4c13-4 25-9 38-10 6-2 12-5 19-5s12-5 19-6l16-6 26-8c6-3 13-3 19-7l32-11c5-1 10-4 15-3s9-2 13-3c8-1 16-5 24-5l14-5c4-1 9-2 12-5 4 0 8-3 13-4 5-2 9-6 15-7l-1-1h3l1-2h4l32-19-1-2 1 2 9-5c6-2 12-7 18-10 5-2 9-4 13-8 11-5 20-12 31-18l-1-2 2 1 4-3 2-1c5-2 9-6 13-9 8-4 16-8 22-13l52-33 2-2c5-1 10 0 15 1 5-1 10-4 14-8l9-11c2-4 0-9-2-12h-3l1-4c7-6 13-14 20-19l23-19 12-11 10-10 10-11c5-3 8-7 12-11 4-3 9-5 12-9h2l-1-2 3-1 6-5 16-7c5-2 11 1 16-2 10-3 21-4 30-9l28-13c7-3 15-7 22-12 4-3 9-4 13-8l19-13 2-1 12-6 23-16 18-12c5-3 11-6 14-11h3l-1-2c2 0 4-2 6-4l13-13 11-7c7-7 17-9 25-12l16-7c7-4 15-6 21-11l3-1 33-16c8-2 15-6 21-10 3-2 6-4 7-8 7-5 16-9 23-15 6-3 9-9 16-10 7 0 13-5 19-8l11-7 4-2 16-7c4-1 7-5 11-4 6 1 11-2 17-2 4 0 7-2 10-3l13-12c2-2 2-5 2-7 0-4-3-6-4-10l-2-2-12 5c-7 3-13 7-20 9l-16 7c-4 2-7 5-12 6l-15 7c-4 0-7 2-11 3l-12 3 1 2-1-2c-5 3-10 5-14 9-8 5-19 3-27 10s-16 13-25 18c-5 3-10 4-15 8-5 1-9 4-13 7l-11 5-8 5c-9 3-17 10-26 12-7 2-15 4-22 4h-8v1c-3 0-6 1-8 4l-10 11v2l-24 21-19 13c-10 10-22 17-35 23-3 2-6 5-10 6-5 3-10 7-16 9-5 1-9 5-13 8-4 4-8 8-13 9-8 3-15 9-23 11l-13 3 1-5c3-1 6-1 7-4 1-5 3-9 6-12s5-8 3-12c-2-3-6-1-9 0-6 4-15 3-20 10-2 5-6 8-8 12l-3 1-4 2-2 2-3 5h-3l1 2h-2l-3 4h-1l-3 2-2 2-2-1 2-2-2-5-7 2-6 5v1l-6 3c-7 1-11 8-15 13-2 0-5 0-6 2l-5 6v1l-21 20-19 19c-5 4-12 9-19 11-3 3-2 7-5 10l-9 11-8 8c-7 7-13 15-22 21l-22 16-5 5c-5 1-9 5-12 8l-23 16c-4 2-7 5-12 6l1 2c-2 0-4 1-5 3-6 2-10 6-15 9l-13 8v1c-2 0-4 1-5 3l-12 6-11 7c-6 2-11 5-15 9-4 2-9 3-12 7h-1l-7 4 1 1c-5 0-10 4-15 6-7 3-14 7-20 12l-2 1-26 13-5 2h2c-6 2-12 7-19 7l2 1-27 2c-6 1-12-1-17 2-6 0-12 2-17 6l-14 7-13 4-21 9c-6 1-10 4-15 6l-33 9c-6 2-11 5-17 6-6 2-11 1-17 2-3 3-8 3-12 4-7 2-14 5-22 6l-11 1c-10 3-21 5-30 11-6 1-11 4-17 6-10 2-18 8-28 11l-15 5c-5 2-9 3-13 6-9 4-19 5-28 10-8 3-17 7-26 9l-16 6c-11 2-20 7-31 10l-3-1 2 2-27 8v2-2l-15 6-3-1 1-2-10-12c-4-3-10-5-15-5l-16-1c-3-1-6-2-8-1l1-2h-2l2-1-1-1c6-6 11-12 18-17 5-5 9-10 15-13 5-4 9-9 15-12l1-2c8-3 13-10 19-15l2-1c3-2 6-5 9-5 3-1 5-3 8-3 3 1 6 2 9 1 2-4 2-9 5-11 3-4 8-5 12-7l8-7 8-6c3-3 7-6 12-8l12-9h3l-3-1c4-1 7-5 11-6h-4l4-1 23-14 5-4 11-9 15-13 10-9c6-7 14-12 20-18 4-4 8-5 12-8 2-2 4-5 7-6l12-7c3-3 6-7 10-9l9-8 12-10-1-2c1 1 3 0 4-1l17-13c6-8 13-16 21-21l15-11 10-9 5-5v-1c9-4 15-11 23-17l13-12 3-4h2v-2l5-4h1c3-4 8-7 10-11 5-7 12-11 17-17 6-9 14-15 20-23l20-24 10-10h2l-1-1 9-10 11-10 19-22c4-3 9-7 12-12l9-8 24-21c13-5 25-14 37-21l11-7 11-7c5-3 11-5 16-9l10-4 13-10 21-14 21-15c3-2 6-5 10-5l-2-2c4 0 7-1 11-3l1-2c5 1 9-3 14-3v-1l14-5 11-5c3-2 3-7 4-10l-2-8c-3-2-7-1-11-1l-33 12c-8 3-16 4-22 9-10 6-19 14-30 20-7 5-14 11-22 15l-27 15c-4 4-9 6-14 9-7 5-15 8-22 14-3 3-7 5-11 6 0-7-3-14-10-16-4-1-8 3-11 5l-12 14-7 6-12 14c-5 5-10 13-16 18l-11 9h1l-21 23-18 17-8 10-20 19c-7 6-12 14-19 21l-1 3-2-1-11 14-2 4-7 7 1 2-2-1v2l-9 9-9 9-25 24h-1l-19 13-19 14-16 14-25 19-8 6-16 10c-9 9-17 18-28 26-4 2-8 4-11 8s-9 6-12 10c-6 2-9 7-14 10l-18 15-14 13-18 12c-3 2-7 3-9 6l-34 24c-2 1-5 3-8 3l2 2a10157 10157 0 0 0-4 0l-10 7c-4 3-10 4-13 8-3 1-6 0-8-2-4-2-9-4-13-1l-8 9c-1 3-4 5-2 7l-2-2v6l-2-1v4l-2-1v4l-2-2c-4 6-10 10-15 16-7 6-13 14-21 19l-15 10-9 10-10 7c-9 5-17 13-26 19l-10 8-11 8-10 7-2 1-15 12-18 11-16 10-22 19-10 9-17 11c-4 2-9 0-13 2l-15 3c-7 0-14 0-20 2l-10 1 1 2c-1-2-3-1-5 0l-13 3c-8 0-17 1-25 3s-16 1-24 4l-10 1 2 1c-8 0-15 1-23 3l-18 3-20 1c-3 1-5-1-8-2-4-2-4-7-7-10-2-2-6-3-9-2-4 1-5 6-6 9l-2-1v3h-1c-3 2-6 0-9 0a772 772 0 0 1 0 1c-5 2-10 6-14 9-4 1-9 2-12 5s-8 4-12 5c-8 2-15 5-23 6-8 4-17 6-26 8l-23 6c-3 0-5 0-7 2h-6l2 2c-5 1-11 1-16 3l-23 6c-4 1-8 3-12 2l2 2c-5 0-9 2-14 3l-17 5-20 7-24 9-21 6c-4 0-7 3-11 3l-1 1-15-2c-4 0-7 2-10 3l-29 10c-13 5-26 7-39 11l-16 5-13 4c-6 2-12 2-18 5l1 1c-5 1-10 0-14 3-11 2-22 8-33 10l-2 2c-4-1-9 1-14 3l-18 5-2 1-27 8c-9 3-18 4-26 8l-15 4-2 1c-9 1-17 4-25 7-4 0-11-1-14 3l-11 5c-6 1-12 4-17 6l-16 5-5 1-1 2-5-1c-3 2-5 4-8 4l-5 3-1-1c-4 4-9 4-13 5l-15 5-6 2c-5 4-12 5-18 7-3 1-6 1-8 3l-7 2-14 5c-4 1-8 1-10 5v89h2c4-4 9-6 14-8 4-4 11-6 16-10l40-14c4-1 8-2 12-5l19-6c3-1 5-3 9-3l24-9 31-10 36-12 15-5 17-5 4-1-1-2 6-1 13-4 10-2 23-7 1-1c9-1 17-5 26-5l15-5h4l26-10 15-5 18-6a567 567 0 0 1 61-17l17-5 14-5c10-2 19-7 29-7l4-2-1 2 13-4h22c4 0 8 1 10-2l9 1c1 1 3 3 5 3 7-1 11-9 18-11l3-2v-5l-2-2c3-6 9-8 15-11l18-6 12-3c18-7 37-9 55-16l8-1 22-6 12-2 16-4 12-4 10-7h3v2h2c4 0 5-5 8-5 6-2 11-4 17-3l-2-2 8-1c6-2 12 0 17-2 5-1 10-1 14-3 5-1 11-2 16-1l-1 2 1 1v5l-5 4-10 7c-7 4-11 12-19 16-7 6-15 12-24 16l-11 8c-4 2-8 6-12 10l-12 11c-8 7-14 15-22 21-6 6-11 12-18 17l-17 14c-8 8-17 16-26 22-5 2-11 3-15 7l-19 16 1 2h-2l-9 7-11 11-11 7-10 6-12 9c-5 4-12 6-17 9-7 4-14 8-22 10l-20 11-11 8c-4 3-10 4-15 6l-1 2-2-1-1 3c-2 0-4 0-6 2l-1-1-13 7c-7 4-12 10-19 15-3 2-5 6-9 8l-9 10-11 10c-8 6-14 15-22 21-4 5-10 10-16 13l-8 6-22 18-25 20c-5 4-8 9-13 12-4 2-6 5-9 8l-12 10-19 15-13 11-9 7-14 11-16 12-14 11c-5 3-9 8-13 12l-11 9-1 2-2 1-11 11c-4 5-9 9-15 13-3 2-5 6-8 7l-1 2-11 6-1 3c-2 3-4 4-7 5-3 4-6 9-10 12-3 3-8 4-9 8l-11 12-10 6c-3 4-6 8-10 10l-1 2-3 1-2 3 1 2h89l12-11c6-4 10-9 16-12l9-11c6-4 9-10 15-14l1-1 12-10c4-4 7-8 12-11l19-18c8-5 14-12 21-18l8-7h2c2-4 7-6 10-9l10-9 20-17 21-17 1-1c7-4 12-9 18-14l31-26 8-5-1-2 2 2c3-5 9-7 13-11l16-16 16-16 29-28 25-17 15-8 14-7c5-4 11-4 16-9 5 0 9-3 14-6l30-14 24-16 13-8c7-6 15-10 21-17l11-8 25-22 18-15 20-16 26-21 24-25 20-19c4-1 7-5 11-8 3-4 8-6 11-9l13-8 12-8 9-7 15-12 16-12 16-13 6-3 8-7h2c4-4 8-8 14-10l9-7 12-7c9-5 20-9 29-15l13-11h4l6-4h21l3-2 24-3-3-2 3-1v3c6-2 13 0 19-1l4-2-1 2c6-2 12-2 18-2l10-1c7-2 15 0 22-2 6-2 12 0 18-2s12 0 17-1l18-2c7 0 15 1 22-2l-2 2c7-1 13 4 20 2l3-8h8l8-2 6-1 9-2c4-1 10 0 14-3l17-2 18-2 4-2 10 2 2-2h22c6-3 13-2 19-2 5 0 9-3 14-2l-1-1c1 1 3 1 4-1h57l15 2v-2l1 2h28l18 3v-2 2c7-1 13 1 19 1l17 1 15 1h12c8 3 17 5 26 4l1-1-1 1c6-2 11 0 17 0l16 3c5 2 11 0 16 1 7 0 14-1 21 1 5 2 11 0 16 2 6 2 12 1 17 1 5 3 10 2 15 2l7 2 10 2 8 1 21 3-3 2c6-1 12 2 18 2 2 0 4 3 6 0l-1 2 8 1 13 2 15 1c2 2 5 2 7 3l17 3c4 1 9-1 13 2 7 0 13 3 20 2 2 0 6 2 8-1l-1 2 10 2c5 2 10 1 14 0 5-2 11-1 17-1 6 2 12 1 18 2 11 1 23-1 34 3h3l-1 1 16 1c6 2 13 0 19 2 5 2 11 1 17 1s12 2 18 0l-3 2c3-1 4 2 5 4 2 2 6 0 9 0 6 0 12 1 17-2h76l20 4 14 2c4 2 9 2 13 3l21 5 11 2c6 1 11 2 17 5l10 2c5 1 10 1 14 3 10 6 20 11 27 19 5 7 11 13 17 18 3 3 8 2 12 5l9 2c2-4 0-9-1-13-2-5-10-6-11-12-1-4-3-6-6-9h6c3-3 6-6 10-6h5l-1-2h18c6 0 12 1 18-1s13-1 19-1c6 1 12-2 18-2s13 1 19-1c5-2 10 0 15-2s11-1 17-1c2 0 5 1 6-1v1c6-2 11 1 16-1 11-2 23 0 34-1 13-3 27-2 40-2l3-1-1 1 7-1c1-3 4-1 7-1h22l-1 2h8l7 8 3-2v-4c3 0 7 0 10-2l1 2c4 0 7-1 9-4l14-5c4-2 8 0 11-2l9-1 9-2c4 0 9 1 13-1l1-1h94l-4-2c7 0 13 0 19 2l2-2c5 2 11 0 16 0 7 3 15 3 22 1 2-1 4-1 4-3v2c4-2 7 1 11 0l7-2h87l13 1c5 2 9 1 14 1l14-1c5-1 9 0 14-2 4-2 8 0 12-1 12-3 25-3 37-1l12-1h24c7-1 14 1 20-1 8-2 17 0 25-2l10-1c14-2 28-3 42-1 7 0 13 1 20 3 14 4 26 12 41 14l16 5 15 5 10 1 9 1 2 2c9 0 19 4 28 6 4 0 7 2 10 4l13 5 11 4c4 3 9 3 13 6l14 6 18 7 27 12 13 7c9 6 19 8 28 13 18 7 35 16 53 24 4 2 8 4 13 4 6 1 10 5 15 6l18 6 12 4c9 5 19 8 28 11 6 2 11 5 17 6 9 4 18 9 24 17l18 16c4 3 9 2 13 2 2-5-2-8-3-13l-1-7c2 1 4 1 5-1l8-1 1-1 1 14c0 7-1 14 1 20 2 7 1 15 1 22l2 27 2 15c0 7 1 14 4 19l4 2-2 2c1 6 0 12-2 17l-3 18c-2 5-1 10-1 15-2 2-2 6-3 9l-2 9h-2c2 2 1 5 1 7-1 8-2 16-1 24 2 5 2 11 6 15l2 2c3 3 6 7 11 9v-4l3 5 4 1c2 7 1 15 1 22l2 2c-1 10 2 20-2 29l-1 16-1 16-1 7c3 2 5 5 9 5s6-4 7-8c2-8 0-16 1-25 4-6 0-13 3-20l1-11c3-3 2-7 3-10 1-7 6-12 7-19l3-2h2c3-6 10-6 14-10 2-4 5-7 8-9 1-3 1-8 4-10 1-3 3-6 3-10 0-7 2-13 0-20l1-3v-7l1-39 2-9c1-8-1-16 1-24 2-6 0-12 2-17 2-6 0-12 3-16l3-4 3-6-2-1 2 1 10-23 3-3 1-4 3-5 3-7 2-5c2-1 2-3 2-4l1 1 3-7c3-5 4-10 8-14v-4l4-4 9-18-1-1c2-1 2-3 2-5l1-1c2-4 5-8 5-13l1 2 1-4v-1l3-4c1-4 3-7 3-11l3-3 4-11 2-4 1-3c2-2 2-4 2-6h1c1-5 5-10 5-16l2 2v-7l1 2 1-5 2-5 7-17 1-4c3-3 4-7 4-11l4-8c2-9 7-16 9-24l1-7 1 2 2-7 2-6 1-2 8 2c5-5 12-4 18-4 10 0 19 3 29 5l18 3c5 0 9 3 13 5l13 5 18 3c7 2 13 5 20 2l1-5h32l17 2 14 1c5 2 11 0 17 2l23 4c8 2 16 4 24 2 1-3 1-6-2-9l6-6c1-2 0-3-1-4l-7-4-21-1c-16 0-31-4-47-4l-16-2-21-2-13-1c-10-4-22-6-33-6-5 0-11 1-16-1l-14-4-12-2-19-3-16-4-12-2-9-3c0-5 2-9 4-13l2-10 2-2c0-7 3-13 5-20l9-29a1977 1977 0 0 1 2-10l1 1c1-9 6-16 7-25 2-2 2-4 2-7 3-5 5-11 6-16l3-9 2-9c2-3 1-7 1-10 4-7 0-15 4-22h-2 2v-61l2-1 5-8c2-7 2-14-1-21l-2-16-2 1 2-2h-2l1-1-5-18c-3-6-2-13-2-20l1 2c0-5 3-7 5-11h2c2-5 6-9 11-12l6-4 1 2v-3l12-12 6-13-1 4 3-2v-5l10-4c8-2 16 0 24-1l2-2h40l4 1c-4 8-1 17 3 25l1-1c2 4 3 9 6 13l8 8c3 2 7 2 11 1 4-3 10-5 11-11h11l-3-2 6 2h2l-5 2 2 1-4 4-2 3-2 3-2 3-2 4c3-1 6-2 7-4l5 2 3-1v-3l1 1 6-12h2l1-2 5-1 5 2 4-2 1 6 2-2 1-6c3-2 4-6 4-9l-1-3 3 1c0 2 2 3 3 4v2l4 7c1-3 2-6-1-8 0-5-1-9-3-12zm-3141 419 8 1-8-1zm136-100c-1 1-2 2-1 3h-2c-1 4-6 3-9 5-5 1-10 3-16 3l1 1c-7 0-13 3-20 4-4 0-8-2-11 1l-2-1 1 2-11 1-3-3 13-7h1c3-8 12-10 20-12l-1-2h5l-2-2 5-1-2-1a654 654 0 0 0 5 2h6c1 3 5 2 7 2 5 1 11 0 16 3v2zm2131-66h5c-3 2-7 0-10 1 1-3 4-2 5-1zm371 205v16c-2 12-1 25-1 37v60l-1-2-3 3h-2v2h-3l1 2c-6 1-11 3-17 3l-17-1c-4 1-7-2-10-2l-21-6-10-4c-2-2-5-2-5-5h2v-3c1 0 3-2 2-4 2 0 1-3 2-4l-3-2-12-1c-5 0-9-3-13-2-5 1-9-2-13 1-2 0-4 3-6 2h-1l-10-2c-1-2-2-2-4-2l-16-7-12-5c-6-1-11-5-16-7-10-5-20-9-29-15-3-2-7-1-10-3l-7-4-15-7-39-17c-4-2-8-5-14-5l3-2c-6 1-10-3-15-4s-9-5-13-7c-3-1-6 0-9-2l-16-8c-4 0-8-2-11-3-6-3-13-3-19-5-4-2-9 0-13-1l-33-9c-4-1-8-5-13-5-6-2-11-5-15-9 0-4-1-8-4-10-7-2-14-2-21-2-5-1-9 0-14 1h-12c-10-1-21 1-31-1h-11c-3-4-2-9-6-13-6 0-12-1-18 1-4 2-8 1-11 4-4 1-10-1-14 2-2-2-5-1-7 1l-1-1c-4 2-10 1-15 2l-14 2-34 3c-12 1-23-3-35-3-10-1-20 0-31 1-6-1-13 2-19 1l-19-1c-4 2-8 0-12 0-6 0-12 2-17 0-10-2-19-1-29-1h-41l-2 1c-6-2-13 0-19 0-4 0-8 1-11-1h-17c-4 2-9 1-14 1s-10 1-14-2c-3-2-9 0-10-5-3-2-6 0-9-3l-6 3-17 3c-4 1-9-1-13 1-3 1-7 1-10 3-6-1-11 2-16 2l1 2h-9c-3-1-7 0-9 2l-13 1c-4 2-10 0-14 2-5 2-11 0-17 2l-40 2h-9l-1-4 1-6 1 1 4-4c9-3 15-11 21-18 4 0 6-3 8-5l4-2 4-2 4-4c3-2 6-2 7-4l5-5c2 1 4-2 5-3 1-2 3-1 5-1 0-2 2-2 4-3 4-3 9-5 12-9 2 0 3 0 4-2h2c1-2 3-2 5-3l9-3h9c2-2 0-5 1-8 4 0 8 1 11-1 4-3 4-8 5-12l11-10 3-2v-1c4 0 6-5 10-6 2-1 4-5 7-4l-1-2 6-3c2-1 5-1 6-3 2 0 5 0 5-2h5c2-2 5-2 7-3l12-4 9-1c4-4 10 0 13-4h8c1-3 5-2 7-2 3-3 8-1 11-2 5-2 11-1 16-2 4-2 9 1 13-1 3-1 3-4 4-7 2-1 5-1 6-4 2 0 3 0 4-2h2c1-2 3-2 4-2l6-3 11-4c4-3 10-3 14-5 11-3 22-8 33-8l2-2 14-2h22c2 0 4 0 5-2l1 1c4-2 8-1 12-1 8-2 17 0 26-2h10l5-2h24l13-2h48l7 2h14l7 1c5 2 10 0 15 2l13 1 12 2c5 3 11 1 17 4 12 1 25-1 37 1l22 3h11c4 3 8 1 13 3l11 1 9 2 16 3 12 3 7 5c4 1 7 3 11 3 11-2 21-3 32-2 5 3 10 2 15 2 5 2 11 2 17 3l18 5 28 9c2 1 6 0 8 2l65 19c6 3 12 1 18 2l17 3c4 1 8 0 12 2l9 1 13 4c7 0 15 3 22 4l6 1 15 3 12 4c6 0 11 2 17 3l20 7c4 1 8 1 11 3 0 4-1 7 1 10v5c-2 5-1 9 0 14v23l2 17 2 30 4 18-2 3 2-1-1 7zm193-578c0-1 1-2 3-1-1 1-2 2-3 1zm40-8c2-1 2 0 3 1-2 1-2 0-3-1zm18-1v3c-2 0-2-3 0-3zm162 85-6 4 1 3c-4 0-9 1-13 3l-15-2c-6 0-11-3-16-2-2 0-7 1-6-2l18-3 12-1c7-5 16 0 24-2 2-1 2 1 1 2z" />
      <motion.path variants={drawingLineVariant} d="M3875 2591c0 3 3-1 0 0m95 3c-1 3 3 0 0 0m-3 1c1 1 1 1 0 0m-108 2c1 1 1 1 0 0m304 60c1 1 1 1 0 0m-57 45c1 1 1 1 0 0m-2631 232c1 1 1 1 0 0m-256 63c0 3 3-2 0 0m456 65c1 1 1 1 0 0m2 0c1 3 3-2 0 0m53 5c1 1 1 1 0 0m-49 4c1 1 1 1 0 0m90 8c1 1 1 1 0 0m-19 5c1 1 1 1 0 0m-72 10c1 1 1 1 0 0m-5 1c1 1 1 1 0 0m10 4c1 1 1 1 0 0m-912 8c1 1 1 1 0 0m3149 6c1 1 1 1 0 0m171 0c1 1 1 1 0 0m-229 146c1 1 1 1 0 0m-171 23c1 1 1 1 0 0zm-3-160c1 1 1 1 0 0zm-903 40c1 1 1 1 0 0z" />
    </motion.svg>
  );
};

