"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/lib/schema";
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

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <>
      <CardWrapper
        headerLabel='Welcome back'
        backButtonLabel="Don't have an account?"
        backButtonHref='/signup'
        showSocials
      >
        <Form {...form}>
          <form
            action=''
            onSubmit={form.handleSubmit(() => {})}
            className='space-y-6'
          >
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
                        placeholder='yogee.k@gmail.com'
                        type='email'
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </CardWrapper>
    </>
  );
};

export default LoginForm;
