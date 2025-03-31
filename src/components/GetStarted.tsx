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
import { motion, AnimatePresence } from "framer-motion";

import Container from "./custom/Container";
import FadeIn from "./animation/FadeIn";

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
    setFirstName(data.firstName);
    setSubmitted(true);
  };

  return (
    <section id="get-brewing" className="pt-20 pb-12 bg-indigo-100">
      <Container size="sm">
        <FadeIn>
          <Card>
            <CardContent className="py-6 md:px-12">
              <div className="pb-8">
                <h2>{heading}</h2>
                {content}
              </div>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="flex gap-1">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.2,
                        }}
                      >
                        <CheckCircleIcon className="text-green-500 h-12" />
                      </motion.div>
                      Success! Form Submitted!
                    </h2>
                    <p>Thank you {firstName} your info was submitted.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
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

                    <Button type="submit" className="w-full mt-4">
                      Submit
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </FadeIn>
      </Container>
    </section>
  );
};

export default GetStarted;
