"use client";

import dynamic from "next/dynamic";

const StarField = dynamic(() => import("@/components/star-field"), {
  ssr: false,
});

import React from "react";

const StarFieldWrapper = () => {
  return (
    <div>
      <StarField />
    </div>
  );
};

export default StarFieldWrapper;
