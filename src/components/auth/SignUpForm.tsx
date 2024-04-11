"use client";

import { useState, useTransition } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormSchema } from "@/lib/schema";
import CardWrapper from "./CardWrapper";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "../ui/button";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import { signUp } from "@/actions/signUp";

const SignUpForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof signUpFormSchema>) => {
    // console.log(values);
    setError("");
    setSuccess("");

    startTransition(() => {
      signUp(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };
  return (
    <>
      <CardWrapper
        headerLabel='Create an account'
        backButtonLabel='Already have an account?'
        backButtonHref='/login'
        showSocials
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <div className='space-y-6'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>.
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='yogee.k@gmail.com'
                        type='email'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>.
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='yogee.k'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>.
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='********'
                        type='password'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button type='submit' disabled={isPending} className='w-full'>
              Create an account
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </>
  );
};

export default SignUpForm;
