import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";

import { SignInFlow } from "../types";
interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

const SignUpCard = ({ setState }: SignUpCardProps) => {
      const [email,setEmail] = useState('');
      const [password,setPassword] = useState('');
      const [confirmPassword,setConfirmPassword] = useState('');
// dfs
      return (  
    <Card className="w-full mt-0 h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login To Continue</CardTitle>
        <CardDescription>
          Use your enable or another service to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5" action="">
          <Input
            type="text"
            className=" h-10 w-full p-2"
            placeholder="Email"
            required
            disabled={false}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <Input
            type="password"
            className=" h-10 w-full p-2"
            placeholder="Password"
            required
            disabled={false}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <Input
            type="password"
            className=" h-10 w-full p-2"
            placeholder="Confirm password"
            required
            disabled={false}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />
          <Button className="w-full h-10" type="submit">
            Sign Up
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5 ">

          <p className="text-xs self-center text-muted-foreground">
             Already have an account?{" "}
            <span
              onClick={() => setState("signIn")}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
