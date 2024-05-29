'use client'

import { Label, TextInput } from "flowbite-react";
import { useRouter } from 'next/navigation'

export default function Component() {
  const router = useRouter()
  function handleClick() {
    console.log('clicked')
    router.push('/klsdfj')
  }
  return (
    <div className="">
      <FormStuff />
      <button onClick={handleClick} className="bg-teal-500 text-white py-2 px-12 rounded ml-16 mt-7">SaveEdit</button>
    </div>
  );
}

function FormStuff() {
  return (
    <div className="flex flex-col w-full mx-auto mt-10">
      {/* <div className="flex flex-col max-w-4xl w-full mx-auto mt-10"> */}
      <div className="flex w-full gap-20 justify-center">
        <div className="w-2/5">
          <div className="mb-2">
            <Label htmlFor="firstName" value="First Name" />
          </div>
          <TextInput id="firstName" type="text" sizing="sm" defaultValue="John" />

          <div className="mb-2">
            <Label htmlFor="lastName" value="Last Name" />
          </div>
          <TextInput id="lastName" type="text" sizing="sm" defaultValue="Doe" />

          <div className="mb-2">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput id="email" type="email" sizing="sm" defaultValue="john.doe@example.com" />

          <div className="mb-2">
            <Label htmlFor="phone" value="Phone Number" />
          </div>
          <TextInput id="phone" type="tel" sizing="sm" defaultValue="123-456-7890" />
        </div>
        <div className="w-2/5">
          <div className="mb-2">
            <Label htmlFor="address" value="Address" />
          </div>
          <TextInput id="address" type="text" sizing="sm" defaultValue="1234 Main St" />

          <div className="mb-2">
            <Label htmlFor="city" value="City" />
          </div>
          <TextInput id="city" type="text" sizing="sm" defaultValue="Anytown" />

          <div className="mb-2">
            <Label htmlFor="state" value="State" />
          </div>
          <TextInput id="state" type="text" sizing="sm" defaultValue="CA" />

          <div className="mb-2">
            <Label htmlFor="zip" value="Zip Code" />
          </div>
          <TextInput id="zip" type="text" sizing="sm" defaultValue="90210" />
        </div>
      </div>
      <div>
        {/* <button className="ml-96 mt-7 bg-emerald-700	text-white py-2 px-12 rounded">Save</button> */}
      </div>
    </div>
  )
}