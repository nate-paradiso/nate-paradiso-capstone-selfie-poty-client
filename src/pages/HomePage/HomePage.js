import React from "react";
import { Categories } from "../../components/Categories/Categories";
import { RecentGallery } from "../../components/RecentGallery/RecentGallery";
import { RegisterButton } from "../../components/RegisterButton/RegisterButton";

export const HomePage = () => {
  return (
    <>
      <RegisterButton />
      <RecentGallery />
      <Categories />
    </>
  );
};
