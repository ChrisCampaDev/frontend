import { redirect } from "next/navigation";

const DashboardPage = () => {
  redirect("/dashboard/users");
};

export default DashboardPage;
