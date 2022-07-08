import React from "react";

export const getInputValue = (e: React.FormEvent<HTMLInputElement>) => (e.target as HTMLInputElement).value;