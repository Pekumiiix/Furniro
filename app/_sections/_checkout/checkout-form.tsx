"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CheckoutDetails from "./checkout-details";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
  companyname: z.string({
    message: "",
  }),
  country: z.string().min(4, {
    message: "Select a country / region",
  }),
  street: z.string().min(10, {
    message: "Street address must be at least 10 characters",
  }),
  town: z.string().min(3, {
    message: "Town must be at least 3 characters",
  }),
  province: z.string().min(3, {
    message: "Select a province",
  }),
  zipcode: z.string().min(4, {
    message: "Enter a valid zip-code",
  }),
  phone: z.string().min(10, {
    message: "Enter a valid phone number",
  }),
  email: z.string().email({
    message: "Enter a valid email address",
  }),
  extrainformation: z.string({
    message: "",
  }),
});

export default function CheckoutForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      companyname: "",
      country: "",
      street: "",
      town: "",
      province: "",
      zipcode: "",
      phone: "",
      email: "",
      extrainformation: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container flex flex-col md:flex-row justify-center gap-10 lg:gap-10 xl:gap-20 py-20 bg-red"
      >
        <div className="w-full md:w-[608px] flex flex-col gap-7">
          <p className="text-xl font-medium text-myBlack">Billing Details</p>

          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <FormBlock
                type="input"
                name="firstname"
                label="First name"
                placeholder="ex. John"
              />

              <FormBlock
                type="input"
                name="lastname"
                label="Last name"
                placeholder="ex. Doe"
              />
            </div>

            <FormBlock
              type="input"
              name="companyname"
              label="Company name (optional)"
              placeholder=""
            />

            <FormBlock
              type="select"
              name="country"
              label="Country / Region"
              placeholder=""
            />

            <FormBlock
              type="input"
              name="street"
              label="Street address"
              placeholder=""
            />

            <FormBlock
              type="input"
              name="town"
              label="Town / City"
              placeholder="Otta"
            />

            <FormBlock
              type="input"
              name="zipcode"
              label="Zip Code"
              placeholder="ex. 123456"
            />

            <FormBlock
              type="input"
              name="phone"
              label="Phone"
              placeholder="ex. 1234567890"
            />

            <FormBlock
              type="input"
              name="email"
              label="Email Address"
              placeholder="example@gmail.com"
            />

            <FormBlock
              type="textarea"
              name="extrainformation"
              label="Additional Information"
              placeholder=""
            />
          </div>
        </div>

        <CheckoutDetails />
      </form>
    </Form>
  );
}

function FormBlock({ type, name, label, placeholder }: FormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      companyname: "",
      country: "",
      street: "",
      town: "",
      province: "",
      zipcode: "",
      phone: "",
      email: "",
      extrainformation: "",
    },
  });

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <>
              {type === "input" && (
                <Input
                  placeholder={placeholder}
                  {...field}
                  className="border-[1px] border-solid border-[#9F9F9F]"
                />
              )}

              {type === "textarea" && (
                <Textarea
                  placeholder={placeholder}
                  {...field}
                  className="border-[1px] border-solid border-[#9F9F9F]"
                />
              )}

              {type === "select" && <SelectCountry field={field} />}
            </>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function SelectCountry({ field }: { field: any }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data
          .map((country: any) => country.name.common)
          .sort();
        setCountries(countryNames);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return (
    <Select onValueChange={field.onChange}>
      <SelectTrigger
        value={field.value}
        className="border-[1px] border-solid border-[#9F9F9F]"
      >
        <SelectValue placeholder="Country" />
      </SelectTrigger>
      <SelectContent>
        {countries.map((item: string, index: number) => (
          <SelectItem value={item} key={index}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

interface FormProps {
  type: "input" | "textarea" | "select";
  name:
    | "firstname"
    | "lastname"
    | "companyname"
    | "country"
    | "street"
    | "town"
    | "zipcode"
    | "phone"
    | "email"
    | "extrainformation";
  label: string;
  placeholder: string;
}
