// import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import ValueProp from "./components/valueprop";
import StatCallout from "./components/stat-callout";
import Quote from "./components/quote"
// import Footer from "./components/footer"
export default function Home() {
  return (

    <div className="grid grid-rows-[auto_1fr_auto] max-h-[100vh] max-w-[1280px] w-full px-14 py-12">

    <div className="flex bg-gray-50 px-10 sticky top-12 rounded-t-md">
      <Header />
    </div>
    <main className="flex gap-36 pt-[104px] pb-10 flex-col bg-gray-50 w-full px-10 z-30 overflow-y-auto " >
      <Hero />
        <ValueProp />
      <Quote />
      <StatCallout />
    </main>
    <div className="flex bg-gray-50 rounded-b-md h-5 w-full"></div>
  {/* <Footer /> */}

    </div>
      
  );
}
