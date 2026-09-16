import DashboardContant from "@/components/Dashboard/DashboardContant";
import Session from "@/lib/session";

export default async function DashboardPage() {
  await Session();
  return <DashboardContant />;
}
