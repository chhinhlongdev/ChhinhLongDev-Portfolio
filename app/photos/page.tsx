import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";

const images = [
  {
    id: "1",
    src: "https://res.cloudinary.com/dt2ldzt1u/image/upload/v1782521282/photo_2026-04-12_14-56-38_b58mbe.jpg",
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/dt2ldzt1u/image/upload/v1782521364/photo_2026-06-23_16-28-05_brcytk.jpg",
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/dt2ldzt1u/image/upload/v1782521366/photo_2026-06-23_16-27-03_biusb8.jpg",
  },
];

export const metadata: Metadata = {
  title: "Photos | ChhinhLong Dev",
  metadataBase: new URL("https://chhinhlong-portfolio.vercel.app/photos"),
  description: "Explore photos taken by ChhinhLong",
  openGraph: {
    title: "Photos | Chhinhlong Dev",
    url: "https://chhinhlong-portfolio.vercel.app/photos",
    description: "Explore photos taken by ChhinhLong",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692635149/victoreke/photos.png",
  },
};

export default function Photos() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading
        title="Photos"
        description="This page is still under construction..."
      />
      <figure className="my-6">
        <Slide delay={0.12} className="flex flex-wrap gap-2">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt="playing guitar"
              width={350}
              height={800}
              className="dark:bg-primary-bg bg-secondary-bg"
            />
          ))}
        </Slide>
      </figure>
    </main>
  );
}
