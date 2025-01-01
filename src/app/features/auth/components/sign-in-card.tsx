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
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInFlow } from "../types";

interface SignInCardProps {
    setState:(state:SignInFlow)=>void;

}
const SignInCard = ({setState}:SignInCardProps) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login To Continue</CardTitle>
      <CardDescription>
        Use your enable or another service to continue
      </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5" action="">
          <Input
            type="email"
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
          <Button className="w-full h-10" type="submit" disabled={email === '' || password === ''}>
            Sign In
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5 ">
            <Button size='lg' variant="outline" className="relative w-full  " type="button">
                <FcGoogle size={30} className="absolute left-3 top-3"  /> Continue with Google
            </Button>
            <Button size='lg' variant="outline" className="relative w-full  " type="button">
                <FaGithub size={30} className="absolute left-3 top-3"  /> Continue with Github
            </Button>
            <p className="text-xs self-center text-muted-foreground">
                Don&apos;t have an account? <span onClick={()=>setState('signUp')} className="text-blue-500 hover:underline cursor-pointer">Sign Up</span>
            </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
