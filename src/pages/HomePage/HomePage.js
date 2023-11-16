import React from "react";
import { Categories } from "../../components/Categories/Categories";
import { RecentGallery } from "../../components/RecentGallery/RecentGallery";
import { RegisterButton } from "../../components/RegisterButton/RegisterButton";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <NavLink to="/register">
        <RegisterButton />
      </NavLink>
      <RecentGallery />
      <Categories />
    </>
  );
};
