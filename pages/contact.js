import Head from "next/head";
import Link from "next/link"
import Image from "next/image"
import ContactSection from "../components/ContactSection"
import { MdNavigateNext } from "react-icons/md"


export default function Contact() {
    return (
        <>
            <Head>
                <title>Contacts</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <header className="h-auto">
                <div className="py-24 md:max-w-none">
                <ContactSection />
                </div>
           </header>
        </>
    );
}



