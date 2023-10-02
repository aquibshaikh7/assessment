import React from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const Banner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: "url(/assets/banner.jpg)",
        minHeight: "91.5vh",
        backgroundSize: "cover",
      }}
    >
      <Stack className="justify-content-center align-items-center" gap={3}>
        <p
          class="text-center fw-bold"
          style={{ color: "white", fontSize: "60px" }}
        >
          A New Digital Canteen <br />
          Experience <br />
          Awaits You
        </p>
        <Stack
          direction="horizontal"
          className="justify-content-center align-items-center"
          gap={3}
        >
          <Button
            variant="success"
            className="px-4 rounded-pill"
            style={{
              background: "#a0d895",
              border: "transparent",
            }}
          >
            Register Now
          </Button>
          <Button variant="outline-light" className="px-4 rounded-pill">
            Food For Events
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default Banner;
