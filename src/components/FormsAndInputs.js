import React, { Component } from "react";
// import useForm from "react-hook-form";

export default function Forms() {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
