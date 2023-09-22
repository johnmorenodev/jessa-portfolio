import React from "react";
import Container from "./container";
import Link from "next/link";

const Navigation = () => {
  return (
    <Container>
      <section className="flex justify-between w-full py-4">
        <h1>JF</h1>
        <Link className="btn-primary" href={"#contact"}>
          Contact
        </Link>
      </section>
    </Container>
  );
};

export default Navigation;
