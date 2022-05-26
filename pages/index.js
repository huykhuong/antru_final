import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Contacts from "../components/Contacts";
import GallerySection from "../components/gallery_section";
import Header from "../components/header";
import MenuSection from "../components/menu_section";
import Navigation from "../components/navigation";
import ReservationSection from "../components/reservation_section";
import SpaceSection from "../components/space_section";
import WelcomeSection from "../components/welcome_section";

export default function Home() {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full">
        <Header
          setOpenNavigation={setOpenNavigation}
          isIconOpen={isOpen}
          setIconOpen={setOpen}
        />
        <Navigation
          openNavigation={openNavigation}
          setOpenNavigation={setOpenNavigation}
          setIconOpen={setOpen}
        />
        <a name="welcome"></a>
        <WelcomeSection />
        <a name="space"></a>
        <SpaceSection />
        <div
          className="bg-center bg-no-repeat h-screen mt-[50px]"
          style={{
            backgroundImage: `url(https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/Frantzen_Book_4100-scaled.jpg)`,
            backgroundSize: "auto 100%",
          }}
        ></div>
        <a name="menu"></a>
        <MenuSection />
        <a name="photos"></a>
        <GallerySection />
        <a name="make-reservation"></a>
        <ReservationSection />
        <a name="contact"></a>
        <Contacts />
      </main>

      <footer className="fixed bottom-0 w-screen border-t-2 border-t-black bg-white text-center py-[10px] z-10 text-[13px]">
        <a href="mailto:nhahangchayantru@gmail.com">
          nhahangchayantru@gmail.com
        </a>{" "}
        +46 (0)8 20 85 80
      </footer>
    </div>
  );
}
