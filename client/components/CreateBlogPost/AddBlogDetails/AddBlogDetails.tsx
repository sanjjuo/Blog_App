"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Skills from "./Skills/Skills";
import TitleInput from "./TitleInput";
import Visibility from "./Visibility";

const AddBlogDetails = () => {
  return (
    <Card className="bg-transparent rounded-none shadow-none border-none p-0">
      <CardHeader>
        <CardTitle>Enter blog details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <TitleInput />
          <Skills />
          <Visibility />
        </div>
      </CardContent>
    </Card>
  );
};

export default AddBlogDetails;
