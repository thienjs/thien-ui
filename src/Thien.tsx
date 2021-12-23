import React from "react";

export interface ThienProps {
  name: string;
}

export function Thien({name} : ThienProps) {
  return <div>{name}</div>
}

