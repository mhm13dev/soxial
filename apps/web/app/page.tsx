import { Button, Header } from "ui";

export default function Page() {
  return (
    <>
      <Header text={`Web - ${process.env.NEXT_PUBLIC_NAME}`} />
      <Button />
    </>
  );
}
