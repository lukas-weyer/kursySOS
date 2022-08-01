import Image from "next/future/image";
import wezwanieZRM from "../public/wezwanieZRM.png";

export default function BlogPostHeroImage() {
  return (
    <div
      style={{
        width: "100vw",
        overflow: "hidden",
        zIndex: "-1",
        position: "fixed",
        top: "0",
        left: "0"
      }}
    >
      <Image
        src={wezwanieZRM}
        alt="wezwanie ZRM"
        quality={100}
        priority
        placeholder="blur"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "65vh"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "65vh",
          backgroundColor: "rgba(22, 28, 45, 0.6)"
        }}
      />
    </div>
  );
}
