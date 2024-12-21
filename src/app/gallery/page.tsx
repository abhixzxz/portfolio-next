import Image from "next/image";

const Gallery = async () => {
  return (
    <section aria-label="Photo Gallery">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <article className="grid gap-4">
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg"
              alt="gallery-photo"
              width={500}
              height={300}
              priority
            />
          </figure>
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg"
              alt="gallery-photo"
              width={500}
              height={300}
            />
          </figure>
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg"
              alt="gallery-photo"
              width={500}
              height={300}
            />
          </figure>
        </article>
        <article className="grid gap-4">
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg"
              alt="gallery-photo"
              width={500}
              height={300}
            />
          </figure>
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg"
              alt="gallery-photo"
              width={500}
              height={300}
            />
          </figure>
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg"
              alt="gallery-photo"
              width={500}
              height={300}
            />
          </figure>
        </article>
        <article className="grid gap-4">
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg"
              alt="gallery-photo"
              width={500}
              height={300}
            />
          </figure>
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg"
              alt="gallery-photo"
              width={500}
              height={300}
            />
          </figure>
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg"
              alt="gallery-photo"
              width={500}
              height={300}
            />
          </figure>
        </article>
        <article className="grid gap-4">
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg"
              alt="gallery-photo"
              width={500}
              height={300}
            />
          </figure>
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg"
              alt="gallery-photo"
              width={500}
              height={300}
            />
          </figure>
        </article>
      </div>
    </section>
  );
};

export default Gallery;
