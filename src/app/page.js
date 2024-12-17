import styles from "./page.module.css";
import HeroSection from "./components/home/HeroSection";
import Slider from "./components/home/Slider";
import LegacySection from "./components/home/LegacySection";
import Sharadamba from "./components/home/Sharadamba";
import MasterHealth from "./components/home/MasterHealth";
import ImageCollage from "./components/home/ImageCollage";
import HowCanWeHelp from "./components/home/HowCanWeHelp";
import OurKeyPeople from "./components/home/OurKeyPeople";
import VideoSectionHome from "./components/home/VideoSectionHome";
import PostSlider from "./components/home/PostSlider";
import CallToAction from "./components/home/CallToAction";

function page() {
  return (
    <>
      <HeroSection />
      <section className={styles.line}></section>
      <section className={styles.sliderConatainer}>
        <div className="container">
          <Slider />
        </div>
      </section>
      <LegacySection />
      <Sharadamba />
      <MasterHealth />
      <ImageCollage />
      <HowCanWeHelp />
      <OurKeyPeople />
      <div className="container">
        <VideoSectionHome />
      </div>
      <PostSlider />
      <CallToAction />
    </>
  );
}

export default page;
