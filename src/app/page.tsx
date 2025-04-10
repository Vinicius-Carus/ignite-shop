import { styled } from "@/styles";

const Button = styled("button", {
  backgroundColor: "$purpleDefault",
  border: 0,
  borderRadius: 4,
  color: "white",
});

export default function Home() {
  return <Button>Hello world!</Button>;
}
