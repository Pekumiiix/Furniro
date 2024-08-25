"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Toaster, toast } from "sonner";

const formSchema = z.object({
  subscriberEmail: z.string().email({
    message: "Email must be correct.",
  }),
});

export default function Footer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subscriberEmail: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset();
    toast.success("Thank you for subscribing to our newsletter!");
    console.log(values);
  }

  return (
    <footer className="w-full pt-12 pb-4 border-t border-[#0000002B]">
      <div className="container flex flex-col gap-12">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-y-0">
          <div className="flex flex-col gap-5 lg:gap-10">
            <Link href={`/`} className="flex items-center gap-[5px]">
              <Image
                src={`/assets/images/logo.png`}
                alt="Furniro Logo"
                width={40}
                height={30}
              />

              <p className="text-2xl text-black font-bold">Furniro</p>
            </Link>

            <p className="text-[#9F9F9F]">
              400 University Drive Suite 200 Coral Gables,
              <br /> FL 33134 <br />
              USA
            </p>
          </div>

          {footerLinks.map((item, index) => (
            <div className="flex flex-col gap-5 lg:gap-10" key={index}>
              <p className="text-[#9F9F9F] font-medium">{item.header}</p>

              <div className="flex flex-col gap-5">
                {item.Links?.map((link, index) => (
                  <Link
                    href={`${link.href}`}
                    key={index}
                    className="font-medium text-black hover:text-myOrange transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-5 lg:gap-10">
            <p className="text-[#9F9F9F] font-medium">Newsletter</p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="subscriberEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex w-full max-w-sm items-center space-x-2">
                          <Input
                            type="email"
                            placeholder="Enter Your Email Address"
                            {...field}
                            className="text-sm text-[#9F9F9F] border-b-2 border-myOrange rounded-none focus-visible:ring-0"
                          />
                          <Button
                            type="submit"
                            className="border-b-2 border-myOrange font-medium bg-transparent text-base text-black rounded-none hover:bg-myOrange hover:text-white hover:rounded-[7px] transition-all duration-300"
                          >
                            Subscribe
                          </Button>
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </div>

        <div className="container flex items-center justify-between pl-0 pt-8 border-t border-[#0000002B]">
          <p>2024 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
}

interface Links {
  name?: string;
  href?: string;
}

interface FooterLinks {
  header?: string;
  Links?: Links[];
}

const footerLinks: FooterLinks[] = [
  {
    header: "Links",
    Links: [
      { name: "Home", href: "/" },
      { name: "Shop", href: "/shop" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    header: "Help",
    Links: [
      { name: "Payment Options", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Privacy Policies", href: "#" },
    ],
  },
];
