import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Categories } from "../../components/Categories/Categories";
import { RecentGallery } from "../../components/RecentGallery/RecentGallery";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <RecentGallery />
      <Categories />
    </>
  );
};
