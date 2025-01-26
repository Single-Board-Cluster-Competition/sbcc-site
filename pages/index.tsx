import ListSection from "../components/listSection";
import Cta from "../components/cta";
import benchmarks from "../data/benchmarks";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Mark from "../components/mark";
import Navbar from "../components/navbar";
import PopupWidget from "../components/popupWidget";
import SectionTitle from "../components/sectionTitle";
import Video from "../components/video";
import Header from "../components/header";
import Testimonials from "../components/testimonials";
import Link from "next/link";
import Image from 'next/image';


const IndexPage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Hero />
            <SectionTitle
                title="When and where"
                pretitle="San Diego or Austin, USA">
                Date:<br></br> 
                April 10th - 12th 2025
                <br></br><br></br>
                San Diego Address: 9836 Hopkins Dr, La Jolla, CA 92093
                <br></br>
                University of California, San Diego - SDSC Auditorium
                <br></br>
                <br></br>
                Austin Address: 10100 Burnet Rd, Austin, TX 78758
                <br></br>
                University of Texas, Austin
                <br></br>
                <br></br>
                Remote participation is also possible.
            </SectionTitle>
            <SectionTitle
                pretitle="Rules and Requirements"
                title="Cluster Requirements">
                To ensure a level playing field for all participants, the competition
                has a few rules and requirements. Participants are not allowed to use
                Apple M1-M4 processors, and their clusters must have a minimum of 4
                sockets. MPI is required, and there is a power limit of <Mark>250 watts</Mark> and a
                cost limit of <Mark>$6,000</Mark>.
            </SectionTitle>
            <ListSection data={benchmarks} />
            <SectionTitle
                title="What is a SBC Cluster?">
                A Single Board Computer (SBC) cluster refers to a group of single-board computers that are interconnected to work together as a unified computing system. 
                Each single-board computer is a complete computer built on a single circuit board, typically with a processor, memory, storage, and various other components.
                When these SBCs are connected in a cluster, they can collectively perform tasks that would be challenging for a single board to handle alone. 
                Clustering allows for parallel processing, where multiple computers work on different parts of a task simultaneously, potentially speeding up computation.
            </SectionTitle>
            <Testimonials />
            <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
                We will be updating this section with more questions and answers.
            </SectionTitle>
            <Faq />
            <Cta />
            <Footer />
            <PopupWidget />
        </>
    )
};
export default IndexPage
