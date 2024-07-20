import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Nr8erichostcombyhtmltodesign from "pages/Nr8erichostcombyhtmltodesign";

const ProjectRoutes = () => {
  let element = useRoutes([
    // 
    {
      path: "/",
      element: <Nr8erichostcombyhtmltodesign />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
