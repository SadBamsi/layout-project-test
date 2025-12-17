"use client";

import { useRouter } from "next/navigation";
import { Button } from "../button";

export const BackButton = () => {
  const { push } = useRouter();
  return (
    <Button
      style={{ maxWidth: "185px", width: "100%" }}
      variant="primary"
      onClick={() => push("/")}
    >
      На главную
    </Button>
  );
};
