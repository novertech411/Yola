import Image from "next/image";
import Home from "@/assets/image/Shape.png"
import Logo from "@/assets/image/yolafa 1.png"

export const ShapeImage = () => <Image src={Home} alt="Shape Image" fill />;
export const LogoImage = () => <Image src={Logo} alt="Logo" className="ml-[10]rem" />;
