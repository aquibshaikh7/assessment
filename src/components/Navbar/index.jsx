import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";

function NavScrollExample() {
  return (
    <Container fluid className="px-5 ">
      <Stack
        direction="horizontal"
        className="px-1 py-3"
        gap={3}
        style={{ justifyContent: "space-between" }}
      >
        <Stack direction="horizontal" gap={5} style={{ width: "100%" }}>
          <Image
            src="/assets/abcd.png"
            rounded
            style={{ width: "50px", height: "50px" }}
          />
          <Stack direction="horizontal" gap={5}>
            <div className="p-2">Lunsj Pa Dora Plans</div>
            <div className="p-2">How It Works</div>
            <div className="p-2">Our Menus</div>
            <div className="p-2">Sustainability</div>
          </Stack>
        </Stack>
        <Button
          variant="primary"
          className="px-5 rounded-pill"
          style={{ background: "#a0d895", borderColor: "transparent" }}
        >
          Login
        </Button>
      </Stack>
    </Container>
  );
}

export default NavScrollExample;
