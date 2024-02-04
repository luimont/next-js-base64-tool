//import { useState } from "react";
//import { EncoderDecoder } from "@/components/EncoderDecoder"; 
//import { DecodedList } from "@/components/DecodedList";
import { DecodedList } from "@/components/DecodedList";
import EditableSecretList from "@/components/EditableSecretList";
import { Tabs } from "@/components/Tabs";
import  ThemeToggle  from "@/components/ThemeToggle";
import { Toast } from "@/components/Toast";

const index = () => {

  return (
    <main className="w-fit m-4 md:w-[800px] lg:w-[900px] ">
      <ThemeToggle />
      <DecodedList /> 
    </main>
  )
}

export default index