import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";

const page = () => {
  return (
    <div>
      <Header />
      <StickyHeader />
      <section>
        <div className="container"></div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
