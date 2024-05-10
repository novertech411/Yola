import SideBar from "@/components/ui/sidebar";
import Navbar from "@/components/ui/navbar";
import '@/assets/styles/index.css'
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex bg-[#F1F4FA] ">
      <Navbar />
      <SideBar />
      <div className=" w-full pt-[100px] pl-[80px] bg-[#E7E7E7] h-screen overflow-y-scroll  ">
        {children}
      </div>
    </div>
  );
}
