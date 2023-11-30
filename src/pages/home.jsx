import { createElement, useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = () => {
    const targetElement = document.getElementById("contact");

    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1567790834974-77d41712671f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHN3aW1taW5nJTIwcG9vbHxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Your backyard oasis awaits.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Whatever the scope of your project, Coastal Backyard Solutions
                is ready to make your dream a reality. From pool construction to
                outdoor leisure amenities, we are ready to transform your
                backyard into the ultimate entertainment experience.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section id="about" className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Who we are
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                We are a family owned and operated business based in League
                City, TX. Our passion is to help home owners bring their
                backyard dreams to life. Whether it's a new pool, updating an
                old one, or other outdoor living amenities, our team of
                experienced builders are ready to make your backyard the
                ultimate at home getaway.
                <br />
                <br />
                We value integrity, honesty, and transparency. Our team is will
                walk with you every step of the way, from consultation to
                completion. We guarantee our work and perform a final
                walkthrough with you before the job is complete, giving you the
                peace of mind that the quality of the finished product matches
                your vision.
              </Typography>
              <Button onClick={scrollToSection} variant="outlined">
                Contact us
              </Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-48">
                  <img alt="Card Image" src="/img/family_photo.jpg" />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Family Owned
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Family is why Coastal Backyard Solutions exists. Our family
                    desires to help yours have a great outdoor living
                    experience, where memories and moments can be endlessly
                    captured.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-48 pt-20">
        <div className="container mx-auto">
          <PageTitle heading="Here is our work">
            From pool construction to outdoor amenities, we provide quality work
            guaranteed!
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, description, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                description={description}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name, href }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconButton key={name} color={color} variant="text">
                          <i className={`fa-brands text-lg fa-${name}`} />
                        </IconButton>
                      </a>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-24">
        <div className="container mx-auto">
          <PageTitle heading="Our process">
            We keep you informed and walk with you every step of the way. From
            consultation to completion, our process is streamlined to give you
            peace of mind.
          </PageTitle>
          <div className="mx-auto mb-48 mt-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
            {contactData.map(({ title, icon, altIcon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {window.innerWidth <= 768
                    ? createElement(altIcon, {
                        className: "w-5 h-5",
                      })
                    : createElement(icon, {
                        className: "w-5 h-5",
                      })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  <ul className="list-none gap-4">
                    {description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Typography>
              </Card>
            ))}
          </div>
          <section id="contact">
            <PageTitle heading="Want to work with us?">
              Complete this form and we will get back to you in 24 hours.
            </PageTitle>
            <div>
              <form className="mx-auto mt-12 max-w-xs text-center md:max-w-3xl">
                {/* hidden input for netlify form submission */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="mb-8 grid gap-8 md:grid-cols-2">
                  <Input variant="standard" size="lg" label="Name" />
                  <Input variant="standard" size="lg" label="Email" />
                </div>
                <Textarea
                  variant="standard"
                  size="lg"
                  label="Message"
                  rows={8}
                />
                <Button variant="gradient" size="lg" className="mt-8">
                  Send Message
                </Button>
              </form>
            </div>
          </section>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
