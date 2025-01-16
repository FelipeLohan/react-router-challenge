import { Outlet } from "react-router-dom";
import { CategoryNavBar } from "../../../components/CategoryNavBar";

const Products = () => {
  return (
    <>
      <CategoryNavBar />
      <Outlet />
    </>
  );
};

export { Products }
