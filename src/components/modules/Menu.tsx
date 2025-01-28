import { TMenu } from "@/utils/types";
import Link from "next/link";
import React from "react";

function Menu({ id, href, label }: TMenu) {
  return (
    <li key={id}>
      <Link href={href}>{label}</Link>
    </li>
  );
}

export default Menu;
