"use client";

import React, { use, useEffect } from "react";

export default function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return <div>Product {id}</div>;
}
