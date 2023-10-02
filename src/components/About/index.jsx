import React from "react";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const About = () => {
  const steps = [
    {
      id: "1",
      imgPath: "/assets/website.jpg",
      text: "Set your preference once and get your meals accordingly",
    },
    {
      id: "2",
      imgPath: "/assets/cooking.jpg",
      text: "Food made with fresh ingredients",
    },
    {
      id: "3",
      imgPath: "/assets/truck.jpg",
      text: "Enjoy varied food delivered to you before 11 a.m.",
    },
  ];

  const steps1 = [
    {
      id: "1",
      imgPath: "/assets/image1.jpg",
      text: "Locally",
      subText: "Sourced",
    },
    {
      id: "2",
      imgPath: "/assets/image2.jpg",
      text: "Reduced",
      subText: "Food Waste",
    },
    {
      id: "3",
      imgPath: "/assets/image3.jpg",
      text: "Eco-Friendly ",
      subText: "Packaging",
    },
    {
      id: "3",
      imgPath: "/assets/image4.jpg",
      text: "Energy ",
      subText: "Efficiency",
    },
    {
      id: "3",
      imgPath: "/assets/image5.jpg",
      text: "Community ",
      subText: "Engagement",
    },
  ];

  const locations = [
    "Sarpsborg",
    "Fredrikstad",
    "Advise",
    "Reverse",
    "Moss",
    "Vestby",
    "Ridge",
    "Drøbak",
    "Ski",
    "Inner Østfold",
    "Spydeberg",
    "Askim",
    "Squint",
    "Oppegård",
    "Oslo",
    "Bærum",
  ];

  return (
    <div>
      <div
        className="my-5 py-5"
        style={{
          background: "linear-gradient(to top, #a0d89533 5%, transparent 90%)",
        }}
      >
        <p className="fs-1 fw-bolder text-center">
          Take The Stress Out Of{" "}
          <span style={{ color: "#a0d895" }}>Lunch-Prep!</span>
        </p>
        <Stack
          direction="horizontal"
          className="justify-content-center align-items-center mt-5"
          gap={5}
          style={{ flexWrap: "wrap" }}
        >
          {steps.map((item) => {
            return (
              <div
                className="p-2 rounded-3"
                key={item.id}
                style={{
                  flexDirection: "column",
                  width: "200px",
                  height: "220px",
                  background:
                    "linear-gradient(to top, #a0d89566 10%, #a0d89566 20%, white 60%)",
                }}
              >
                <div className="d-flex justify-content-center">
                  <Image
                    src={item?.imgPath}
                    rounded
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <p className="fs-5 text-center mt-2">{item?.text}</p>
              </div>
            );
          })}
        </Stack>
        <Container style={{ maxWidth: "1000px" }}>
          <div style={{ marginTop: "150px" }}>
            <p className="fs-1 fw-bolder text-center">
              Why <span style={{ color: "#a0d895" }}>Lunsj Pa Dora?</span>
            </p>
            <div>
              <div className="text-center">
                A healthier, happier meal while you work.
              </div>
              <div className="text-center">
                2 lines on the ethos of the brand. Lorem ipsum is simply dummy
                text of the printing and typesetting industry. Lorem ipsum has
                been the industry's standard dummy text ever since the 1500s.
              </div>
            </div>
            <Stack
              direction="horizontal"
              className="justify-content-center align-items-center mt-5"
            >
              <Button
                variant="success"
                className="px-4 rounded-pill"
                style={{ background: "#a0d895", borderColor: "transparent" }}
              >
                Our Story
              </Button>
            </Stack>
          </div>
        </Container>
      </div>
      <div className="my-5 py-5">
        <p className="fs-1 fw-bolder text-center">
          Sustainability at{" "}
          <span style={{ color: "#a0d895" }}>Lunsj Pa Dora?</span>
        </p>

        <Stack
          direction="horizontal"
          className="justify-content-center align-items-center mt-5"
          gap={5}
        >
          {steps1.map((item) => {
            return (
              <div
                className="p-2 rounded-3"
                key={item.id}
                style={{
                  flexDirection: "column",
                  width: "150px",
                }}
              >
                <div className="d-flex justify-content-center">
                  <Image
                    src={item?.imgPath}
                    rounded
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <div className="text-center mt-2 fw-bolder">{item?.text}</div>
                <div className="text-center fw-bolder">{item?.subText}</div>
              </div>
            );
          })}
        </Stack>
        <Stack
          direction="horizontal"
          className="justify-content-center align-items-center mt-5"
        >
          <Button
            variant="success"
            className="px-4 rounded-pill"
            style={{ background: "#a0d895", borderColor: "transparent" }}
          >
            Read More
          </Button>
        </Stack>
        <p className="fs-1 fw-bold text-center mt-5 pt-4">
          <span style={{ color: "#a0d895" }}>Eat</span> It.{" "}
          <span style={{ color: "#a0d895" }}>Love</span> It.{" "}
          <span style={{ color: "#a0d895" }}>Tag</span> It.
        </p>
        <p
          className="fs-5 fw-bolder text-center mt-2 mb-5"
          style={{ color: "#a0d895" }}
        >
          #LunchAtMyDoor
        </p>
        <Stack
          direction="horizontal"
          className="justify-content-center"
          gap={5}
          style={{ flexWrap: "wrap" }}
        >
          {new Array(3).fill(" ").map((item) => {
            return (
              <Card
                className="shadow"
                style={{ width: "18rem", border: "none" }}
              >
                <Stack
                  direction="horizontal"
                  className="px-2 py-2 align-items-center"
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <Stack
                    direction="horizontal"
                    className="justify-content-center align-items-center"
                    gap={1}
                  >
                    <Image
                      src="/assets/abcd.png"
                      rounded
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div>
                      lunsjpadora <br />
                      <span>Osaka</span>
                    </div>
                  </Stack>
                  <i class="bi bi-three-dots-vertical" />
                </Stack>
                <Image
                  src="/assets/banner.jpg"
                  style={{ height: "250px", backgroundSize: "contain" }}
                />
                <Card.Body>
                  <Stack
                    direction="horizontal"
                    className="align-items-center"
                    style={{ width: "100%", justifyContent: "space-between" }}
                  >
                    <Stack
                      direction="horizontal"
                      className="align-items-center"
                      gap={2}
                    >
                      <i
                        class="bi bi-heart-fill"
                        style={{ color: "red", marginTop: "4px" }}
                      />
                      <i class="bi bi-chat" />
                      <i class="bi bi-send" />
                    </Stack>
                    <i class="bi bi-bookmark" />
                  </Stack>
                  <div
                    className="d-flex align-items-center mt-3"
                    style={{ paddingLeft: "2px" }}
                  >
                    <i
                      class="bi bi-heart-fill"
                      style={{ marginTop: "4px", fontSize: "14px" }}
                    />
                    <div className="px-1" style={{ fontSize: "12px" }}>
                      {" "}
                      13 Likes
                    </div>
                  </div>
                  <div style={{ fontSize: "14px" }}>lunsjpadora</div>
                </Card.Body>
              </Card>
            );
          })}
        </Stack>
      </div>

      {/* REviews */}
      <div
        className="mt-4 pb-5"
        style={{
          background: "linear-gradient(to top, #a0d89533 5%, transparent 90%)",
        }}
      >
        <p className="fs-1 fw-bold text-center">Reviews</p>
        <p className="fs-3 fw-bolder text-center">
          We save you serious <span style={{ color: "#a0d895" }}>Stress</span>
        </p>
        <Stack
          direction="horizontal"
          className="justify-content-center align-items-center"
          gap={5}
        >
          <Card className="shadow-lg p-3 rounded-4" style={{ width: "24rem" }}>
            <Image
              src="/assets/banner.jpg"
              className="rounded-3"
              style={{ height: "250px", backgroundSize: "contain" }}
            />
            <Card.Body className="p-0">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#a0d895"
                  class="bi bi-quote"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
              </div>

              <div className="ps-1" style={{ fontSize: "14px" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestiae voluptatibus veniam dicta nobis aliquid, suscipit
                dolor consectetur omnis quod quasi velit deserun.
              </div>
            </Card.Body>
          </Card>
          <Card
            className="shadow-lg p-3 rounded-4"
            style={{ width: "24rem", marginTop: "200px" }}
          >
            <Image
              src="/assets/banner.jpg"
              className="rounded-3"
              style={{ height: "250px", backgroundSize: "contain" }}
            />
            <Card.Body className="p-0">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#a0d895"
                  class="bi bi-quote"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
              </div>

              <div className="ps-1" style={{ fontSize: "14px" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestiae voluptatibus veniam dicta nobis aliquid, suscipit
                dolor consectetur omnis quod quasi velit deserun.
              </div>
            </Card.Body>
          </Card>
        </Stack>
      </div>

      {/* Our Locations */}
      <div className="py-5 my-5">
        <p className="fs-1 fw-bolder text-center">Our Locations</p>

        <Stack
          direction="horizontal"
          className="mx-auto p-4 rounded-3"
          style={{
            border: "1px solid grey",
            maxWidth: "600px",
            flexWrap: "wrap",
          }}
          gap={3}
        >
          {locations.map((item) => {
            return <p>{item}</p>;
          })}
        </Stack>
      </div>

      {/* Footer */}
      <div style={{ background: "#21243a" }}>
        <div
          style={{
            position: "absolute",
            marginTop: "-50px",
            left: "40%",
            width: "300px",
          }}
        >
          <div
            className="mx-auto"
            style={{
              textAlign: "center",
              backgroundColor: "black",
              padding: "20px",
              paddingTop: "25px",

              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h1
              className="text-center fw-bold1"
              style={{ color: "#a0d895", fontSize: "20px" }}
            >
              Fill in the form below to express the flavors of Lunsj pa Dora for
              free
            </h1>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "380px",
                margin: "0",
              }}
            >
              <Stack className="my-3" gap={2}>
                <label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    style={{
                      width: "100%",
                      margin: "5px 0",
                      border: "1px solid white",
                      padding: "10px",
                      background: "transparent",
                    }}
                  />
                </label>
                <label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    style={{
                      width: "100%",
                      margin: "5px 0",
                      border: "1px solid white",
                      padding: "10px",
                      background: "transparent",
                    }}
                  />
                </label>
                <label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    style={{
                      width: "100%",
                      margin: "5px 0",
                      border: "1px solid white",
                      padding: "10px",
                      background: "transparent",
                    }}
                  />
                </label>
              </Stack>
              <Button
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: "#a0d895",
                  color: "#fff",
                  whiteSpace: "nowrap",
                  fontSize: "14px",
                  border: "none",
                }}
              >
                TRY THE LUNSJ PA DORA EXPERIENCE
              </Button>
            </form>
          </div>
          <Stack className="my-4" gap={2}>
            <p style={{ color: "white", textAlign: "center" }}>
              If you'd like to talk to our sales team immediately, contact
            </p>
            <p style={{ color: "#a0d895", margin: "-10px" }}>
              Sebestian Fredstad
            </p>
            <p style={{ color: "white", margin: "-10px" }}>
              sebastian@conluo.no <br />
              tlf: 478 38 933
            </p>
          </Stack>
        </div>
        <Container style={{ paddingTop: "60px", paddingBottom: "50px" }}>
          <Stack
            direction="horizontal"
            className="justify-content-between align-items-start"
          >
            <div className="text-center">
              <p className="fw-bolder" style={{ color: "white" }}>
                Our Address
              </p>
              <p style={{ color: "gray" }}>
                Ole Devils Vei 10, <br /> 0666 Oslo
              </p>
              <Button variant="outline-success">View On Map</Button>
              <Stack
                className="justify-content-center align-items-center mt-4"
                gap={3}
              >
                <Image
                  src="/assets/image8.png"
                  alt=""
                  style={{ width: "120px" }}
                />
                <Stack className="justify-content-center align-items-center">
                  <div style={{ color: "white", fontSize: "12px" }}>
                    Conluo Mat As, organisasjonsnummer:920829740mva
                  </div>
                  <Stack direction="horizontal">
                    <Image
                      src="/assets/image9.png"
                      alt=""
                      style={{ width: "320px" }}
                    />
                  </Stack>
                  {/* <Image
                    src="/assets/image9.png"
                    alt=""
                    style={{ width: "320px" }}
                  /> */}
                </Stack>
              </Stack>
            </div>
            <div className="text-center">
              <p className="fw-bolder" style={{ color: "white" }}>
                Contact Us
              </p>
              <p style={{ color: "gray" }}>
                something@gmail.com <br /> tel: 45 65 56 785
              </p>
              <Button variant="outline-success">Send A Message</Button>
              <Stack
                direction="horizontal"
                className="justify-content-center mt-3"
                gap={4}
              >
                <i
                  class="bi bi-twitter"
                  style={{ color: "white", fontSize: "24px" }}
                ></i>

                <i
                  class="bi bi-facebook"
                  style={{ color: "white", fontSize: "24px" }}
                ></i>
                <i
                  class="bi bi-instagram"
                  style={{ color: "white", fontSize: "24px" }}
                ></i>
                <i
                  class="bi bi-discord"
                  style={{ color: "white", fontSize: "24px" }}
                ></i>
              </Stack>
            </div>
          </Stack>
        </Container>
        <Stack>
          <p
            style={{
              color: "#a0d895",
              marginLeft: "750px",
              marginTop: "-25px",
            }}
          >
            Caroline Borge
          </p>
          <p
            style={{ color: "white", marginLeft: "750px", marginTop: "-25px" }}
          >
            caroline@conluo.no <br />
            tlf: 478 38 933
          </p>
        </Stack>

        <div
          className="d-flex justify-content-center p-3"
          style={{ background: "#141414", color: "white", marginTop: "120px" }}
        >
          <Image
            src="/assets/image7.png"
            alt=""
            style={{
              width: "80px",
              position: "relative",
              top: "-40px",
              left: "95px",
            }}
          />

          <div style={{ marginLeft: "-10px" }}>COPYRIGHT @2023</div>
        </div>
      </div>
    </div>
  );
};

export default About;
