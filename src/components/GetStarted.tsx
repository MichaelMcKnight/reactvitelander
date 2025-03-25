import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircleIcon } from "@heroicons/react/16/solid";

import Container from "./custom/Container";

import { GetStartedData } from "@/data/data";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  tier: z.enum(["Basic", "Premium", "Pro"]),
});

type FormValues = z.infer<typeof formSchema>;

const GetStarted = () => {
  const { heading, content } = GetStartedData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    setFirstName(data.firstName);
    setSubmitted(true);
  };

  return (
    <section id="get-brewing" className="pt-20 pb-12 bg-indigo-100">
      <Container size="sm">
        <Card>
          <CardContent className="py-6 px-12">
            <div className="pb-8">
              <h2>{heading}</h2>
              {content}
            </div>
            {submitted === true ? (
              <>
                <h2 className="flex gap-1">
                  <CheckCircleIcon className="text-green-500 h-12" /> Success!
                  Form Submitted!
                </h2>
                <p>Thank you {firstName} your info was submitted.</p>
              </>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="firstName" className="mb-2">
                    First Name
                  </Label>
                  <Input id="firstName" {...register("firstName")} />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="lastName" className="mb-2">
                    Last Name
                  </Label>
                  <Input id="lastName" {...register("lastName")} />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="mb-2">
                    Email
                  </Label>
                  <Input id="email" type="email" {...register("email")} />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="mb-2">
                    Phone
                  </Label>
                  <Input id="phone" {...register("phone")} />
                  {errors.phone && (
                    <p className="text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="tier" className="mb-2">
                    Tier
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      setValue("tier", value as FormValues["tier"])
                    }
                  >
                    <SelectTrigger id="tier" className="w-full">
                      <SelectValue placeholder="Select a tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Basic">Basic</SelectItem>
                      <SelectItem value="Premium">Premium</SelectItem>
                      <SelectItem value="Pro">Pro</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.tier && (
                    <p className="text-sm text-red-500">
                      {errors.tier.message}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

export default GetStarted;
